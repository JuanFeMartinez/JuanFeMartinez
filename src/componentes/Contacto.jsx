import { perfil } from '../data/perfil'
import { useMagnetico } from '../hooks/useMagnetico'
import './Contacto.css'

export function Contacto() {
  const boton = useMagnetico(0.25)

  return (
    <section className="seccion contacto" id="contacto">
      <div className="contenedor">
        <p className="etiqueta" data-revelar>
          Siguiente proyecto
        </p>

        {/* Six Caps no trae el signo de apertura: el navegador lo pintaba con
            otra letra, gruesa y descuadrada. Se dibuja con su propio "?"
            girado, que es como se hacía en la tipografía de metal. El
            aria-label le devuelve a los lectores de pantalla la frase entera. */}
        <h2 className="contacto-titulo titulo-cartel titular-apretado" aria-label="¿Tienes algo entre manos?">
          <span className="mascara" aria-hidden="true">
            <span>
              <span className="invertido">?</span>Tienes algo
            </span>
          </span>
          <span className="mascara" aria-hidden="true" style={{ '--retraso': '0.08s' }}>
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
          <span className="pie-hecho">Made in Colombia</span>
        </div>
      </footer>
    </section>
  )
}
