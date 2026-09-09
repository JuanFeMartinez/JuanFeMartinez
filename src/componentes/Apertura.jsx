import { useEffect, useState } from 'react'
import './Apertura.css'

/* Cuánto dura el telón entero: lo que tarda la marca en entrar más el
   desvanecido. Está aquí y no solo en el CSS porque el componente tiene que
   saber cuándo desmontarse; si los dos números se separan, el velo se queda
   colgado invisible encima de la página. */
const DURACION = 1250

/**
 * Telón de entrada. Un velo del mismo crema del papel que se abre despacio y
 * deja ver la portada.
 *
 * Es el mismo color que el navegador ya pinta antes de que arranque React, así
 * que no hay parpadeo: la página empieza en crema y sigue en crema hasta que el
 * velo se va.
 *
 * MARCADOR DE POSICIÓN: la animación de dentro es a propósito de lo más
 * sencillo —el nombre y una raya— para que este sea el sitio donde meter la de
 * verdad (el avatar dibujándose, el logo montándose, lo que salga) sin tener
 * que tocar nada más del sitio. Lo único que hay que respetar es DURACION.
 */
export function Apertura() {
  // Quien pide menos movimiento no quiere una intro: se salta entera en vez de
  // pasarla a cámara rápida.
  const [visible, setVisible] = useState(
    () => !window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )

  useEffect(() => {
    if (!visible) return
    const reloj = setTimeout(() => setVisible(false), DURACION)
    return () => clearTimeout(reloj)
  }, [visible])

  if (!visible) return null

  return (
    <div className="apertura" aria-hidden="true">
      <div className="apertura-marca">
        <span className="apertura-nombre">Juan Felipe Martínez Villate</span>
        <span className="apertura-linea" />
      </div>
    </div>
  )
}
