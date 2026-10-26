import { useEffect, useRef, useState } from 'react'
import { perfil, proyectos } from '../data/perfil'
import avatar from '../assets/avatar.png'
import { conBase } from '../utilidades/conBase'
import './Ruleta.css'

const numero = (i) => String(i + 1).padStart(2, '0')

// Las cartas: tu avatar abriendo, un proyecto por carta y el contacto
// cerrando. Cada una lleva a su sitio de la página.
const CARTAS = [
  { tipo: 'yo', titulo: 'Quién soy', que: perfil.ubicacion, destino: '#quien-soy' },
  ...proyectos.map((p) => ({
    tipo: 'imagen',
    imagen: p.portada,
    titulo: p.titulo,
    que: `${p.disciplina} · ${p.anio}`,
    destino: `#${p.id}`,
  })),
  { tipo: 'hablemos', titulo: 'Hablemos', que: perfil.correo, destino: '#contacto' },
]

const N = CARTAS.length
const PASO = 360 / N

/**
 * Ruleta de cartas, de la referencia de Pinterest: las piezas puestas en una
 * rueda que gira con el scroll, se puede arrastrar con inercia y se acomoda
 * sola en la carta más cercana. La carta de arriba es la activa: a color y
 * un poco más grande; las demás esperan en blanco y negro, como en Noche.
 *
 * El giro se pinta en CSS con --giro; React solo se entera de qué carta está
 * arriba, que cambia pocas veces, y no de cada grado del giro.
 */
export function Ruleta() {
  const recorrido = useRef(null)
  const tablero = useRef(null)
  const [activa, setActiva] = useState(0)

  // Estado mutable fuera de React: cambia en cada fotograma.
  const estado = useRef({ giro: 0, base: 0, desfase: 0, cuadro: 0, movido: false })
  const mandos = useRef({})

  useEffect(() => {
    const el = recorrido.current
    const caja = tablero.current
    if (!el || !caja) return
    const s = estado.current
    // El estado vive en una ref, así que sobrevive a un desmontaje (React lo
    // hace a propósito en desarrollo). Un número de fotograma viejo aquí haría
    // creer que ya hay uno en marcha, y la rueda no volvería a moverse.
    s.cuadro = 0
    const quieto = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const objetivo = () => s.base + s.desfase

    const pintar = () => {
      el.style.setProperty('--giro', `${s.giro.toFixed(2)}deg`)
      const arriba = ((Math.round(-s.giro / PASO) % N) + N) % N
      setActiva((antes) => (antes === arriba ? antes : arriba))
    }

    // El giro que se ve persigue al objetivo un 14% por fotograma: llega
    // rápido y frena al final, sin saltos aunque el objetivo cambie a mitad.
    const bucle = () => {
      const d = objetivo() - s.giro
      s.giro += d * 0.14
      if (Math.abs(d) < 0.02 || quieto) {
        s.giro = objetivo()
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
      s.desfase = Math.round(objetivo() / PASO) * PASO - s.base
      arrancar()
    }

    // Recorrer la sección de punta a punta da una vuelta casi entera.
    const alScroll = () => {
      const r = el.getBoundingClientRect()
      const total = r.height - window.innerHeight
      const p = total > 0 ? Math.min(Math.max(-r.top / total, 0), 1) : 0
      s.base = -p * PASO * (N - 1)
      arrancar()
    }

    let reloj = 0
    const alScrollYAcomodar = () => {
      alScroll()
      clearTimeout(reloj)
      reloj = setTimeout(acomodar, 160)
    }

    // Arrastre: horizontal gira, vertical sigue siendo scroll (touch-action).
    let arrastre = null
    const ancho = () => caja.querySelector('.ruleta-carta')?.getBoundingClientRect().width || 150

    const bajar = (e) => {
      arrastre = { x: e.clientX, desfase: s.desfase, t: performance.now(), v: 0, ultimo: e.clientX }
      s.movido = false
      caja.classList.add('agarrado')
    }

    const mover = (e) => {
      if (!arrastre) return
      const dx = e.clientX - arrastre.x
      if (Math.abs(dx) > 4) s.movido = true
      const ahora = performance.now()
      arrastre.v = (e.clientX - arrastre.ultimo) / Math.max(ahora - arrastre.t, 1)
      arrastre.t = ahora
      arrastre.ultimo = e.clientX
      // Un ancho de carta arrastrado avanza una carta.
      s.desfase = arrastre.desfase + (dx / ancho()) * PASO
      arrancar()
    }

    const soltar = () => {
      if (!arrastre) return
      // Un tirón rápido lleva la rueda unas cartas más allá aunque haya sido
      // corto: no hace falta arrastrar más allá de un umbral.
      s.desfase += ((arrastre.v * 260) / ancho()) * PASO
      arrastre = null
      caja.classList.remove('agarrado')
      acomodar()
      setTimeout(() => {
        s.movido = false
      }, 0)
    }

    mandos.current.paso = (dir) => {
      s.desfase = Math.round(objetivo() / PASO) * PASO - dir * PASO - s.base
      arrancar()
    }

    // El camino más corto hasta la carta i.
    mandos.current.irA = (i) => {
      const actual = objetivo()
      const meta = -i * PASO
      s.desfase += meta + Math.round((actual - meta) / 360) * 360 - actual
      arrancar()
    }

    mandos.current.movido = () => s.movido

    caja.addEventListener('pointerdown', bajar)
    window.addEventListener('pointermove', mover)
    window.addEventListener('pointerup', soltar)
    window.addEventListener('pointercancel', soltar)
    window.addEventListener('scroll', alScrollYAcomodar, { passive: true })
    window.addEventListener('resize', alScroll)

    alScroll()
    s.giro = objetivo()
    pintar()

    return () => {
      cancelAnimationFrame(s.cuadro)
      s.cuadro = 0
      clearTimeout(reloj)
      caja.removeEventListener('pointerdown', bajar)
      window.removeEventListener('pointermove', mover)
      window.removeEventListener('pointerup', soltar)
      window.removeEventListener('pointercancel', soltar)
      window.removeEventListener('scroll', alScrollYAcomodar)
      window.removeEventListener('resize', alScroll)
    }
  }, [])

  // La carta de arriba lleva a su sección; cualquier otra gira hasta arriba.
  // Un clic que en realidad fue el final de un arrastre no cuenta.
  const tocar = (evento, i) => {
    if (mandos.current.movido?.()) {
      evento.preventDefault()
      return
    }
    if (i !== activa) {
      evento.preventDefault()
      mandos.current.irA?.(i)
    }
  }

  // Las flechas del teclado solo mueven la rueda cuando el foco está dentro:
  // atraparlas en toda la página le robaría el teclado al visor de imágenes.
  const teclear = (evento) => {
    if (evento.key === 'ArrowRight') {
      evento.preventDefault()
      mandos.current.paso?.(1)
    }
    if (evento.key === 'ArrowLeft') {
      evento.preventDefault()
      mandos.current.paso?.(-1)
    }
  }

  const carta = CARTAS[activa]

  return (
    <section className="ruleta" id="portafolio" aria-label="Portafolio" onKeyDown={teclear}>
      <div className="ruleta-recorrido" ref={recorrido}>
        <div className="ruleta-escenario">
          <div className="ruleta-tablero" ref={tablero}>
            <div className="ruleta-centro">
              <svg className="ruleta-anillo" viewBox="-62 -62 124 124" aria-hidden="true">
                <defs>
                  <path id="ruleta-circulo" d="M 0,-50 a 50,50 0 1,1 -0.01,0" />
                </defs>
                <circle r="50" />
                <text>
                  <textPath href="#ruleta-circulo">
                    PORTAFOLIO · JUAN FELIPE · PORTAFOLIO · JUAN FELIPE · PORTAFOLIO · JUAN FELIPE ·
                  </textPath>
                </text>
              </svg>

              <ul className="ruleta-rueda">
                {CARTAS.map((c, i) => (
                  <li key={c.titulo} className={`ruleta-carta ${i === activa ? 'activa' : ''}`} style={{ '--a': `${i * PASO}deg` }}>
                    <a
                      href={c.destino}
                      onClick={(e) => tocar(e, i)}
                      draggable="false"
                      data-cursor={i === activa ? 'Ver' : 'Girar'}
                      aria-label={c.titulo}
                    >
                      {c.tipo === 'imagen' && (
                        <span className="ruleta-cara">
                          <img src={conBase(c.imagen)} alt="" loading="lazy" draggable="false" />
                        </span>
                      )}
                      {c.tipo === 'yo' && (
                        <span className="ruleta-cara roja">
                          <img src={avatar} alt="" draggable="false" />
                        </span>
                      )}
                      {c.tipo === 'hablemos' && (
                        <span className="ruleta-cara tipo">
                          <small>{numero(i)}</small>
                          <b>Hablemos</b>
                          <small>{perfil.correo}</small>
                        </span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="ruleta-yo">
                <strong aria-live="polite">{carta.titulo}</strong>
                <span className="ruleta-que">
                  {numero(activa)} / {N} · {carta.que}
                </span>
                <div className="ruleta-mandos">
                  <button type="button" onClick={() => mandos.current.paso?.(-1)} aria-label="Carta anterior">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M15 6l-6 6 6 6" />
                    </svg>
                  </button>
                  <button type="button" onClick={() => mandos.current.paso?.(1)} aria-label="Carta siguiente">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M9 6l6 6-6 6" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
