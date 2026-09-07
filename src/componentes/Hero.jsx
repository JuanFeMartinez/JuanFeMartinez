import { useEffect, useRef } from 'react'
import { perfil } from '../data/perfil'
import './Hero.css'

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
