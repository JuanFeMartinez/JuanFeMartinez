import { useEffect, useRef, useState } from 'react'
import { perfil } from '../data/perfil'
import './Nav.css'

// El campo "cursor" es lo que aparece dentro del cursor propio al pasar por
// encima. El anillo crecido tapa el enlace, así que sin etiqueta uno deja de
// ver justo aquello sobre lo que está a punto de hacer clic.
const ENLACES = [
  { texto: 'Trabajo', destino: '#proyectos', cursor: 'Ver' },
  { texto: 'Cómo trabajo', destino: '#proceso', cursor: 'Leer' },
  { texto: 'Contacto', destino: '#contacto', cursor: 'Hablemos' },
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
          <a href="#inicio" className="nav-nombre" data-cursor="Inicio">
            {perfil.nombre}
            {perfil.disponible && <span className="nav-punto" title="Disponible para proyectos" />}
          </a>
          <nav aria-label="Secciones">
            <ul className="nav-lista">
              {ENLACES.map((enlace) => (
                <li key={enlace.destino}>
                  <a href={enlace.destino} data-cursor={enlace.cursor}>
                    {enlace.texto}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}
