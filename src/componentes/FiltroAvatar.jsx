/**
 * Cambia los tres colores del avatar por los de la página sin tocar el archivo.
 *
 * El original tiene blanco puro, negro (7,7,7) y rojo puro, más una cuarentena
 * de tonos intermedios de los bordes suavizados. Un filtro de color es una
 * operación lineal, así que basta encontrar la que lleve esos tres colores a
 * los tres nuestros: los intermedios, que son mezclas de ellos, caen solos en
 * la mezcla correcta. Repintar el PNG habría dejado los bordes sucios.
 *
 * Desde que el sitio es oscuro: blanco → crema #f6eeda, negro → azul noche
 * #001a3a y rojo → naranja #f07b3f. El halo naranja es lo que separa al
 * avatar del fondo azul; con líneas azules sobre azul y sin halo, el contorno
 * se perdería.
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
          values="0.9684 0.0235 0 0 -0.0272
                  0.4039 0.451 0 0 0.0785
                  0.0373 0.6078 0 0 0.2097
                  0 0 0 1 0"
        />
      </filter>
    </svg>
  )
}
