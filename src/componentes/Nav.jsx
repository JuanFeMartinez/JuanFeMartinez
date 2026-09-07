import { useEffect, useRef, useState } from 'react'
import { perfil } from '../data/perfil'
import './Nav.css'

const ENLACES = [
  { texto: 'Trabajo', destino: '#proyectos' },
  { texto: 'Cómo trabajo', destino: '#proceso' },
  { texto: 'Contacto', destino: '#contacto' },
]

export function Nav() {
  const [compacto, setCompacto] = useState(false)
  const centinela = useRef(null)

  useEffect(() => {
    const observador = new IntersectionObserver(
      ([entrada]) => setCompacto(!entrada.isIntersecting),
      { threshold: 0 },
    )
    if (centinela.current) observador.observe(centinela.current)
    return () => observador.disconnect()
  }, [])

  return (
    <>
      <div ref={centinela} className="nav-centinela" aria-hidden="true" />
      <header className={`nav ${compacto ? 'compacto' : ''}`}>
        <div className="nav-interior">
          <a href="#inicio" className="nav-nombre">
            {perfil.nombre}
            {perfil.disponible && <span className="nav-punto" title="Disponible para proyectos" />}
          </a>
          <nav aria-label="Secciones">
            <ul className="nav-lista">
              {ENLACES.map((enlace) => (
                <li key={enlace.destino}>
                  <a href={enlace.destino}>{enlace.texto}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}
