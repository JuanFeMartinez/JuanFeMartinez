import { perfil, presentacion } from '../data/perfil'
import avatar from '../assets/avatar.png'
import './Presentacion.css'

/**
 * La única sección donde el nombre se ve en grande y donde se dicen los datos
 * duros. Va después de los proyectos a propósito: primero el trabajo convence,
 * y justo entonces aparece la pregunta de quién lo hizo y si se le puede
 * escribir.
 */
export function Presentacion() {
  return (
    <section className="seccion presentacion" id="quien-soy">
      <div className="contenedor presentacion-reja">
        <div className="presentacion-retrato">
          {/* El avatar sobre un disco azul: su relleno es del mismo crema que
              el papel, así que sin fondo oscuro la cara desaparecería y solo
              quedarían las líneas flotando. */}
          <img src={avatar} alt={`Avatar de ${perfil.nombre}`} loading="lazy" />
        </div>

        <div className="presentacion-texto">
          <p className="etiqueta" data-revelar>
            Quién está detrás
          </p>

          <h2 className="presentacion-nombre titular-apretado mascara">
            <span>{perfil.nombre}</span>
          </h2>

          {presentacion.parrafos.map((parrafo, i) => (
            <p key={parrafo} data-revelar style={{ '--retraso': `${0.08 + i * 0.08}s` }}>
              {parrafo}
            </p>
          ))}

          <dl className="presentacion-datos" data-revelar>
            {presentacion.datos.map((dato) => (
              <div key={dato.etiqueta}>
                <dt>{dato.etiqueta}</dt>
                <dd>{dato.valor}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
