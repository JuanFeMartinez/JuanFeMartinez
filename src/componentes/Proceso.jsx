import { proceso } from '../data/perfil'
import './Proceso.css'

export function Proceso() {
  return (
    <section className="seccion proceso" id="proceso">
      <div className="contenedor">
        <p className="etiqueta" data-revelar>
          Cómo trabajo
        </p>
        <h2 className="proceso-titulo titular-apretado mascara">
          <span>Tres reglas, sin excepciones</span>
        </h2>

        <ol className="proceso-lista">
          {proceso.map((paso, i) => (
            <li key={paso.titulo} data-revelar style={{ '--retraso': `${i * 0.1}s` }}>
              <span className="proceso-numero">{String(i + 1).padStart(2, '0')}</span>
              <h3>{paso.titulo}</h3>
              <p>{paso.texto}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
