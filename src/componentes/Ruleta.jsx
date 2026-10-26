import { useEffect, useRef, useState } from 'react'
import { proyectos } from '../data/perfil'
import { conBase } from '../utilidades/conBase'
import './Ruleta.css'

const N = proyectos.length
const MITAD = Math.floor(N / 2)
const numero = (i) => String(i + 1).padStart(2, '0')
// La rueda no tiene principio ni fin: la posición crece sin límite y la carta
// elegida es su resto entre N. Así pasar de la última a la primera es un paso
// más, no una vuelta entera hacia atrás.
const enRueda = (v) => ((v % N) + N) % N
// Cuántas cartas hay de a hasta b por el camino más corto, con signo.
const atajo = (a, b) => ((((b - a) % N) + N + MITAD) % N) - MITAD

/**
 * Rueda de proyectos puesta de lado: las cartas, horizontales, salen como
 * radios de un eje clavado en el borde del panel. La rueda está completa y
 * gira sin fin; la mitad izquierda queda escondida detrás del panel, así que
 * siempre se ve media rueda llena. La que apunta al triángulo rojo es la
 * elegida: a color, mientras las demás esperan en blanco y negro. No se
 * agranda ni se adelanta; sigue siendo una carta encima de otra.
 *
 * A la izquierda, el panel enseña la elegida en grande con su descripción.
 *
 * Gira con el scroll y se acomoda sola en la carta más cercana. También se
 * mueve con las flechas, con el teclado, haciendo clic en una carta o
 * arrastrando con el mouse hacia arriba o hacia abajo.
 *
 * La posición del abanico se pinta en CSS con --pos, que es un número con
 * decimales (3.4 = entre la cuarta y la quinta carta). React solo se entera de
 * cuál es la elegida, que cambia pocas veces, y no de cada fotograma.
 */
export function Ruleta() {
  const recorrido = useRef(null)
  const abanico = useRef(null)
  const [activa, setActiva] = useState(0)

  // Estado mutable fuera de React: cambia en cada fotograma.
  const estado = useRef({ pos: 0, base: 0, desfase: 0, cuadro: 0 })
  const mandos = useRef({})

  useEffect(() => {
    const el = recorrido.current
    const zona = abanico.current
    if (!el || !zona) return
    const s = estado.current
    // El estado vive en una ref y sobrevive a un desmontaje (React lo hace a
    // propósito en desarrollo). Un número de fotograma viejo aquí haría creer
    // que ya hay uno en marcha, y el abanico no volvería a moverse.
    s.cuadro = 0
    const quieto = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const objetivo = () => s.base + s.desfase

    const pintar = () => {
      el.style.setProperty('--pos', s.pos.toFixed(3))
      const elegida = enRueda(Math.round(s.pos))
      setActiva((antes) => (antes === elegida ? antes : elegida))
    }

    // La posición que se ve persigue al objetivo un 14% por fotograma: llega
    // rápido y frena al final, sin saltos aunque el objetivo cambie a mitad.
    const bucle = () => {
      const d = objetivo() - s.pos
      s.pos += d * 0.14
      if (Math.abs(d) < 0.002 || quieto) {
        s.pos = objetivo()
        s.cuadro = 0
        pintar()
        return
      }
      pintar()
      s.cuadro = requestAnimationFrame(bucle)
    }

    const arrancar = () => {
      if (!s.cuadro) s.cuadro = requestAnimationFrame(bucle)
    }

    // Deja el objetivo justo en una carta.
    const acomodar = () => {
      s.desfase = Math.round(objetivo()) - s.base
      arrancar()
    }

    // Recorrer la sección de punta a punta pasa por todas las cartas.
    const alScroll = () => {
      const r = el.getBoundingClientRect()
      const total = r.height - window.innerHeight
      const p = total > 0 ? Math.min(Math.max(-r.top / total, 0), 1) : 0
      s.base = p * (N - 1)
      arrancar()
    }

    let reloj = 0
    const alScrollYAcomodar = () => {
      alScroll()
      clearTimeout(reloj)
      reloj = setTimeout(acomodar, 160)
    }

    // Arrastre con el mouse: subir el abanico pasa a la siguiente carta. Con
    // el dedo no hace falta, porque deslizar ya es hacer scroll y el scroll
    // ya mueve el abanico.
    let arrastre = null
    const PIXELES_POR_CARTA = 70

    const bajar = (e) => {
      if (e.pointerType !== 'mouse' || e.button !== 0) return
      arrastre = { y: e.clientY, desfase: s.desfase, movido: false }
      zona.classList.add('agarrado')
    }

    const mover = (e) => {
      if (!arrastre) return
      const dy = e.clientY - arrastre.y
      if (Math.abs(dy) > 4) arrastre.movido = true
      s.desfase = arrastre.desfase - dy / PIXELES_POR_CARTA
      arrancar()
    }

    const soltar = () => {
      if (!arrastre) return
      mandos.current.recienArrastrado = arrastre.movido
      arrastre = null
      zona.classList.remove('agarrado')
      acomodar()
      setTimeout(() => {
        mandos.current.recienArrastrado = false
      }, 0)
    }

    mandos.current.paso = (dir) => {
      s.desfase = Math.round(objetivo()) + dir - s.base
      arrancar()
    }

    // Por el camino más corto: de la octava a la primera se gira hacia
    // adelante una carta, no ocho hacia atrás.
    mandos.current.irA = (i) => {
      const actual = Math.round(objetivo())
      s.desfase = actual + atajo(enRueda(actual), i) - s.base
      arrancar()
    }

    zona.addEventListener('pointerdown', bajar)
    window.addEventListener('pointermove', mover)
    window.addEventListener('pointerup', soltar)
    window.addEventListener('pointercancel', soltar)
    window.addEventListener('scroll', alScrollYAcomodar, { passive: true })
    window.addEventListener('resize', alScroll)

    alScroll()
    s.pos = objetivo()
    pintar()

    return () => {
      cancelAnimationFrame(s.cuadro)
      s.cuadro = 0
      clearTimeout(reloj)
      zona.removeEventListener('pointerdown', bajar)
      window.removeEventListener('pointermove', mover)
      window.removeEventListener('pointerup', soltar)
      window.removeEventListener('pointercancel', soltar)
      window.removeEventListener('scroll', alScrollYAcomodar)
      window.removeEventListener('resize', alScroll)
    }
  }, [])

  // Las flechas del teclado solo mueven el abanico cuando el foco está dentro:
  // atraparlas en toda la página le robaría el teclado al visor de imágenes.
  const teclear = (evento) => {
    const siguiente = evento.key === 'ArrowDown' || evento.key === 'ArrowRight'
    const anterior = evento.key === 'ArrowUp' || evento.key === 'ArrowLeft'
    if (!siguiente && !anterior) return
    evento.preventDefault()
    mandos.current.paso?.(siguiente ? 1 : -1)
  }

  const elegido = proyectos[activa]

  return (
    <section className="ruleta" id="portafolio" aria-label="Mis proyectos" onKeyDown={teclear} style={{ '--n': N }}>
      <div className="ruleta-recorrido" ref={recorrido}>
        <div className="ruleta-escenario">
          <div className="contenedor ruleta-reja">
            <article className="ruleta-panel">
              <div className="ruleta-panel-cabeza">
                <p className="etiqueta">Mis proyectos</p>
                <p className="ruleta-cuenta" aria-live="polite">
                  {numero(activa)} / {numero(N - 1)}
                </p>
              </div>

              {/* La clave rehace imagen y texto en cada cambio, que es lo que
                  vuelve a disparar el desvanecido de entrada. */}
              <div className="ruleta-cuerpo">
                <figure className="ruleta-vista" key={`vista-${elegido.id}`}>
                  <img src={conBase(elegido.portada)} alt={elegido.titulo} />
                </figure>

                <div className="ruleta-ficha" key={`ficha-${elegido.id}`}>
                  <h2 className="ruleta-titulo titulo-cartel">{elegido.titulo}</h2>
                  <p className="ruleta-meta">
                    {elegido.disciplina} · {elegido.anio}
                  </p>
                  <p className="ruleta-resumen">{elegido.resumen}</p>
                </div>
              </div>

              <div className="ruleta-pie">
                <a className="ruleta-ver" href={`#${elegido.id}`} data-cursor="Ver">
                  Ver el proyecto <span aria-hidden="true">→</span>
                </a>
                <div className="ruleta-mandos">
                  <button type="button" onClick={() => mandos.current.paso?.(-1)} aria-label="Proyecto anterior">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M6 15l6-6 6 6" />
                    </svg>
                  </button>
                  <button type="button" onClick={() => mandos.current.paso?.(1)} aria-label="Proyecto siguiente">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </button>
                </div>
              </div>
            </article>

            <div className="ruleta-abanico" ref={abanico}>
              {/* El eje: el círculo punteado con texto gira con la rueda, a la
                  mitad de velocidad. */}
              <svg className="ruleta-eje" viewBox="-60 -60 120 120" aria-hidden="true">
                <defs>
                  <path id="ruleta-eje-circulo" d="M 0,-46 a 46,46 0 1,1 -0.01,0" />
                </defs>
                <circle r="46" />
                <text>
                  <textPath href="#ruleta-eje-circulo">
                    PORTAFOLIO · JUAN FELIPE · PORTAFOLIO · JUAN FELIPE ·
                  </textPath>
                </text>
              </svg>

              <ul className="ruleta-cartas">
                {proyectos.map((p, i) => (
                  <li
                    key={p.id}
                    className={`ruleta-carta ${i === activa ? 'activa' : ''}`}
                    // De arriba abajo, cada carta va encima de la anterior. El
                    // corte de la vuelta cae en el lado de atrás de la rueda,
                    // detrás del panel, donde no se ve.
                    style={{ '--i': i, zIndex: 20 + atajo(activa, i) }}
                  >
                    <button
                      type="button"
                      onClick={() => {
                        if (!mandos.current.recienArrastrado) mandos.current.irA?.(i)
                      }}
                      data-cursor={i === activa ? undefined : 'Elegir'}
                      aria-label={`${p.titulo}${i === activa ? ', elegido' : ''}`}
                      aria-current={i === activa ? 'true' : undefined}
                      tabIndex={-1}
                    >
                      <img src={conBase(p.portada)} alt="" loading="lazy" draggable="false" />
                    </button>
                  </li>
                ))}
              </ul>
              <span className="ruleta-indicador" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
