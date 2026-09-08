import { useEffect, useRef } from 'react'
import { perfil } from '../data/perfil'
import avatar from '../assets/avatar.png'
import './Hero.css'

/**
 * Cambia los tres colores del avatar por los de la página sin tocar el archivo.
 *
 * El original tiene blanco puro, negro (7,7,7) y rojo puro, más una cuarentena
 * de tonos intermedios de los bordes suavizados. Un filtro de color es una
 * operación lineal, así que basta encontrar la que lleve esos tres colores a
 * los tres nuestros: los intermedios, que son mezclas de ellos, caen solos en
 * la mezcla correcta. Repintar el PNG habría dejado los bordes sucios.
 *
 * sRGB es obligatorio: por defecto los filtros SVG operan en luz lineal y los
 * números salen otros.
 */
function FiltroAvatar() {
  return (
    <svg className="filtro-avatar" aria-hidden="true" focusable="false">
      <filter id="avatar-paleta" colorInterpolationFilters="sRGB">
        <feColorMatrix
          type="matrix"
          values="0.9688 0.0392 0 0 -0.0277
                  0.3361 0.4784 0 0 0.1463
                  -0.0944 0.6549 0 0 0.3415
                  0 0 0 1 0"
        />
      </filter>
    </svg>
  )
}

/**
 * Estrella de puntas, el recurso gráfico que sostiene toda la portada.
 * Se dibuja alternando dos radios alrededor del centro: cuanto más chico el
 * radio interior, más afiladas salen las puntas.
 */
function Estrella({ puntas = 12, className }) {
  const vertices = []
  for (let i = 0; i < puntas * 2; i++) {
    const angulo = (Math.PI * i) / puntas - Math.PI / 2
    const radio = i % 2 ? 19 : 50
    vertices.push(`${(50 + radio * Math.cos(angulo)).toFixed(1)},${(50 + radio * Math.sin(angulo)).toFixed(1)}`)
  }

  return (
    <svg className={className} viewBox="0 0 100 100" aria-hidden="true">
      <polygon points={vertices.join(' ')} />
    </svg>
  )
}

export function Hero() {
  const seccion = useRef(null)

  useEffect(() => {
    const el = seccion.current
    if (!el) return
    const sinMovimiento = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let pendiente = 0

    // --salida: 0 arriba del todo, 1 cuando el hero ya salió de pantalla.
    const alScroll = () => {
      if (pendiente) return
      pendiente = requestAnimationFrame(() => {
        pendiente = 0
        const salida = Math.min(window.scrollY / window.innerHeight, 1)
        el.style.setProperty('--salida', salida.toFixed(3))
      })
    }

    // --px/--py: posición del mouse de -1 a 1, para el paralaje del fondo.
    const alMover = (evento) => {
      el.style.setProperty('--px', (evento.clientX / window.innerWidth - 0.5).toFixed(3))
      el.style.setProperty('--py', (evento.clientY / window.innerHeight - 0.5).toFixed(3))
    }

    window.addEventListener('scroll', alScroll, { passive: true })
    if (!sinMovimiento) window.addEventListener('pointermove', alMover, { passive: true })

    return () => {
      window.removeEventListener('scroll', alScroll)
      window.removeEventListener('pointermove', alMover)
      cancelAnimationFrame(pendiente)
    }
  }, [])

  return (
    <section className="hero" id="inicio" ref={seccion}>
      <div className="hero-atmosfera" aria-hidden="true">
        <span className="mancha mancha-a" />
        <span className="mancha mancha-b" />
        <span className="mancha mancha-c" />
      </div>

      {/* La trama de puntos es lo que evita que el degradado se vea a plantilla:
          le pone grano de impresión encima. */}
      <div className="hero-trama" aria-hidden="true" />

      <Estrella className="hero-estrella hero-estrella-a" />
      <Estrella className="hero-estrella hero-estrella-b" puntas={10} />

      <FiltroAvatar />

      <div className="hero-adorno" aria-hidden="true">
        <span />
        <span />
        <span />
        <i />
      </div>

      <div className="contenedor hero-interior">
        <p className="etiqueta hero-etiqueta mascara" style={{ '--retraso': '0.1s' }}>
          <span>
            {perfil.rol} — {perfil.ubicacion}
          </span>
        </p>

        <h1 className="hero-titular titular-apretado">
          {perfil.titular.map((linea, i) => (
            <span className="mascara" key={linea} style={{ '--retraso': `${0.2 + i * 0.09}s` }}>
              <span>{linea}</span>
            </span>
          ))}
          {/* Va dentro del titular para que lo siga: si se anclara al hero,
              cambiaría de sitio respecto a las letras en cada tamaño de
              pantalla, y aquí lo que importa es dónde cae contra el texto. */}
          <img className="hero-avatar" src={avatar} alt="Avatar de Juan Felipe Martínez" />
        </h1>

        <div className="hero-pie">
          <p className="hero-entrada" data-revelar style={{ '--retraso': '0.65s' }}>
            {perfil.entrada}
          </p>
          <a className="hero-cta" href="#proyectos" data-revelar style={{ '--retraso': '0.8s' }}>
            <span>Ver el trabajo</span>
            <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
              <path
                d="M5 12h14M13 6l6 6-6 6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>

      <div className="hero-guia" aria-hidden="true">
        <span className="hero-guia-texto">Scroll</span>
        <span className="hero-guia-linea" />
      </div>
    </section>
  )
}
