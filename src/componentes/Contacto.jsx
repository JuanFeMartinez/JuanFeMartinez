import { useEffect, useState } from 'react'
import { perfil } from '../data/perfil'
import { useMagnetico } from '../hooks/useMagnetico'
import './Contacto.css'

/** Hora real de donde trabajas: detalle chico, dice que el sitio está vivo. */
function Reloj() {
  const [hora, setHora] = useState('')

  useEffect(() => {
    const formato = new Intl.DateTimeFormat('es-CO', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
      timeZone: 'America/Bogota',
    })
    const marcar = () => setHora(formato.format(new Date()))
    marcar()
    const reloj = setInterval(marcar, 1000)
    return () => clearInterval(reloj)
  }, [])

  return <time className="pie-reloj">{hora} — hora local</time>
}

export function Contacto() {
  const boton = useMagnetico(0.25)

  return (
    <section className="seccion contacto" id="contacto">
      <div className="contenedor">
        <p className="etiqueta" data-revelar>
          Siguiente proyecto
        </p>

        <h2 className="contacto-titulo titular-apretado">
          <span className="mascara">
            <span>¿Tienes algo</span>
          </span>
          <span className="mascara" style={{ '--retraso': '0.08s' }}>
            <span>entre manos?</span>
          </span>
        </h2>

        <a
          className="contacto-boton"
          href={`mailto:${perfil.correo}`}
          ref={boton}
          data-cursor="Escribir"
          data-revelar
        >
          <span>{perfil.correo}</span>
        </a>

        <ul className="contacto-redes" data-revelar>
          {perfil.redes.map((red) => (
            <li key={red.nombre}>
              <a href={red.url} target="_blank" rel="noreferrer">
                {red.nombre}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <footer className="pie">
        <div className="contenedor pie-interior">
          <span>
            © {new Date().getFullYear()} {perfil.nombre}
          </span>
          <Reloj />
          <span className="pie-hecho">Hecho a mano con React</span>
        </div>
      </footer>
    </section>
  )
}
