import { capacidades } from '../data/perfil'
import './Marquesina.css'

/** Cinta infinita de capacidades. Se inclina según la velocidad del scroll. */
export function Marquesina() {
  const tanda = [...capacidades, ...capacidades]

  return (
    <div className="marquesina" aria-hidden="true">
      <div className="marquesina-pista">
        {tanda.map((capacidad, i) => (
          <span key={`${capacidad}-${i}`}>
            {capacidad}
            <i>◦</i>
          </span>
        ))}
      </div>
      <p className="solo-lectores">Capacidades: {capacidades.join(', ')}.</p>
    </div>
  )
}
