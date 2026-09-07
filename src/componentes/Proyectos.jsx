import { useEffect, useRef } from 'react'
import { proyectos } from '../data/perfil'
import { VisualProyecto } from './VisualProyecto'
import './Proyectos.css'

const numero = (i) => String(i + 1).padStart(2, '0')

export function Proyectos() {
  const capitulos = useRef([])

  useEffect(() => {
    const sinMovimiento = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (sinMovimiento) return
    let pendiente = 0

    // Un solo listener para todos los capítulos: cada uno recibe --pc, que va
    // de -1 (entrando por abajo) a 1 (saliendo por arriba).
    const medir = () => {
      pendiente = 0
      const alto = window.innerHeight
      for (const el of capitulos.current) {
        if (!el) continue
        const caja = el.getBoundingClientRect()
        if (caja.bottom < -alto || caja.top > alto * 2) continue
        const centro = caja.top + caja.height / 2
        const pc = Math.max(-1, Math.min(1, (alto / 2 - centro) / (alto / 2 + caja.height / 2)))
        el.style.setProperty('--pc', pc.toFixed(3))
      }
    }

    const alScroll = () => {
      if (!pendiente) pendiente = requestAnimationFrame(medir)
    }

    medir()
    window.addEventListener('scroll', alScroll, { passive: true })
    window.addEventListener('resize', alScroll)

    return () => {
      window.removeEventListener('scroll', alScroll)
      window.removeEventListener('resize', alScroll)
      cancelAnimationFrame(pendiente)
    }
  }, [])

  return (
    <section className="proyectos" id="proyectos">
      <div className="contenedor proyectos-cabecera">
        <p className="etiqueta" data-revelar>
          Trabajo seleccionado
        </p>
        <h2 className="proyectos-titulo titular-apretado mascara">
          <span>Cosas que existen</span>
        </h2>
        <ol className="proyectos-indice">
          {proyectos.map((proyecto, i) => (
            <li key={proyecto.id} data-revelar style={{ '--retraso': `${i * 0.06}s` }}>
              <a href={`#${proyecto.id}`}>
                <span className="indice-numero">{numero(i)}</span>
                <span className="indice-titulo">{proyecto.titulo}</span>
                <span className="indice-disciplina">{proyecto.disciplina}</span>
                <span className="indice-anio">{proyecto.anio}</span>
              </a>
            </li>
          ))}
        </ol>
      </div>

      {proyectos.map((proyecto, i) => (
        <article
          className={`capitulo ${i % 2 ? 'alterno' : ''}`}
          id={proyecto.id}
          key={proyecto.id}
          ref={(el) => {
            capitulos.current[i] = el
          }}
        >
          <div className="contenedor capitulo-reja">
            <div className="capitulo-columna-visual">
              <div className="capitulo-fijo">
                <VisualProyecto proyecto={proyecto} />
              </div>
            </div>

            <div className="capitulo-texto">
              <span className="capitulo-numero" aria-hidden="true">
                {numero(i)}
              </span>

              <p className="capitulo-disciplina" data-revelar>
                {proyecto.disciplina}
              </p>

              <h3 className="capitulo-titulo mascara">
                <span>{proyecto.titulo}</span>
              </h3>

              <p className="capitulo-meta" data-revelar>
                <span>{proyecto.subtitulo}</span>
                <span className="punto">·</span>
                <span>{proyecto.rol}</span>
                <span className="punto">·</span>
                <span>{proyecto.anio}</span>
              </p>

              <p className="capitulo-resumen" data-revelar style={{ '--retraso': '0.08s' }}>
                {proyecto.resumen}
              </p>

              <ul className="capitulo-detalles">
                {proyecto.detalles.map((detalle, j) => (
                  <li key={detalle} data-revelar style={{ '--retraso': `${0.12 + j * 0.08}s` }}>
                    {detalle}
                  </li>
                ))}
              </ul>

              {proyecto.metricas.length > 0 && (
                <dl className="capitulo-metricas" data-revelar>
                  {proyecto.metricas.map((metrica) => (
                    <div key={metrica.etiqueta}>
                      <dt>{metrica.valor}</dt>
                      <dd>{metrica.etiqueta}</dd>
                    </div>
                  ))}
                </dl>
              )}

              <ul className="capitulo-stack" data-revelar>
                {proyecto.stack.map((pieza) => (
                  <li key={pieza}>{pieza}</li>
                ))}
              </ul>

              {proyecto.enlace && (
                <a
                  className="capitulo-enlace"
                  href={proyecto.enlace}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="Abrir"
                  data-revelar
                >
                  Ver el sitio en vivo
                  <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
                    <path
                      d="M7 17 17 7M9 7h8v8"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              )}
            </div>
          </div>
        </article>
      ))}
    </section>
  )
}
