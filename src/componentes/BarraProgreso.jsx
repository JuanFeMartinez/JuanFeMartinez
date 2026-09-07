import './BarraProgreso.css'

/** Línea superior que crece con el scroll. Lee --progreso, no re-renderiza. */
export function BarraProgreso() {
  return <div className="barra-progreso" aria-hidden="true" />
}
