/**
 * Cambia los tres colores del avatar por los de la página sin tocar el archivo.
 *
 * El original tiene blanco puro, negro (7,7,7) y rojo puro, más una cuarentena
 * de tonos intermedios de los bordes suavizados. Un filtro de color es una
 * operación lineal, así que basta encontrar la que lleve esos tres colores a
 * los tres nuestros: los intermedios, que son mezclas de ellos, caen solos en
 * la mezcla correcta. Repintar el PNG habría dejado los bordes sucios.
 *
 * sRGB es obligatorio: por defecto los filtros SVG operan en luz lineal y los
 * números salen otros.
 *
 * Va montado una sola vez en App y no dentro de una sección, porque lo usan
 * varias: un filtro se referencia por id desde cualquier parte del documento,
 * pero si vive dentro de un componente, desaparece cuando ese desaparece.
 */
export function FiltroAvatar() {
  return (
    <svg className="filtro-avatar" aria-hidden="true" focusable="false">
      <filter id="avatar-paleta" colorInterpolationFilters="sRGB">
        <feColorMatrix
          type="matrix"
          values="0.9688 0.0392 0 0 -0.0277
                  0.3361 0.4784 0 0 0.1463
                  -0.0944 0.6549 0 0 0.3415
                  0 0 0 1 0"
        />
      </filter>
    </svg>
  )
}
