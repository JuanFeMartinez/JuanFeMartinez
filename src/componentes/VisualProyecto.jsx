import './VisualProyecto.css'

/**
 * Cada proyecto se dibuja con CSS en vez de usar una captura: se ve intencional
 * mientras no haya imágenes. En cuanto pongas `imagen` en el proyecto, esta
 * composición se reemplaza por la foto real sin tocar nada más.
 */

const Reticula = () => (
  <div className="forma reticula">
    {Array.from({ length: 12 }, (_, i) => (
      <span key={i} style={{ '--i': i }} />
    ))}
  </div>
)

const Flujo = () => (
  <svg className="forma flujo" viewBox="0 0 200 140" aria-hidden="true">
    <path d="M40 34 H160 M40 34 V70 H100 M160 34 V106 H100" className="flujo-linea" />
    <circle cx="40" cy="34" r="9" className="flujo-nodo" />
    <circle cx="160" cy="34" r="9" className="flujo-nodo" />
    <circle cx="100" cy="70" r="9" className="flujo-nodo flujo-activo" />
    <circle cx="100" cy="106" r="9" className="flujo-nodo" />
    <circle r="3" className="flujo-pulso">
      <animateMotion dur="4s" repeatCount="indefinite" path="M40 34 H160 V106 H100" />
    </circle>
  </svg>
)

const Columnas = () => (
  <div className="forma columnas">
    <span className="col-barra" />
    <span className="col-titulo" />
    <span className="col-texto" />
    <div className="col-fila">
      <span />
      <span />
      <span />
    </div>
    <span className="col-boton" />
  </div>
)

const Capas = () => (
  <div className="forma capas">
    <span style={{ '--n': 0 }} />
    <span style={{ '--n': 1 }} />
    <span style={{ '--n': 2 }} />
  </div>
)

const FORMAS = { reticula: Reticula, flujo: Flujo, columnas: Columnas, capas: Capas }

export function VisualProyecto({ proyecto }) {
  const [c1, c2, c3] = proyecto.paleta
  const Forma = FORMAS[proyecto.forma] ?? Reticula
  const rotulo = proyecto.enlace ? new URL(proyecto.enlace).hostname : proyecto.id

  return (
    <figure className="visual" style={{ '--c1': c1, '--c2': c2, '--c3': c3 }}>
      <div className="visual-barra">
        <span />
        <span />
        <span />
        <em>{rotulo}</em>
      </div>
      <div className="visual-lienzo">
        {proyecto.imagen ? (
          <img src={proyecto.imagen} alt={`Vista del proyecto ${proyecto.titulo}`} loading="lazy" />
        ) : (
          <Forma />
        )}
      </div>
    </figure>
  )
}
