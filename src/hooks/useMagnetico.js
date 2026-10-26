import { useEffect, useRef } from 'react'

/**
 * Hace que un elemento se incline hacia el cursor cuando lo tienes cerca.
 * Devuelve una ref para poner en el elemento.
 *
 * El elemento no salta al punto exacto del mouse: lo persigue. Pegar un valor
 * visual directamente a la posición del cursor se siente artificial justamente
 * porque no tiene movimiento propio, no hay inercia; el imán de verdad tiene
 * peso. Aquí ese peso lo pone un bucle que acerca un 16% de la distancia que
 * falta en cada fotograma, igual que el anillo del cursor.
 *
 * Y al soltar vuelve persiguiendo el centro, no de un tirón: antes el
 * `transform` se borraba de golpe y el botón pegaba un salto seco justo en el
 * momento en que el mouse se iba.
 */
export function useMagnetico(fuerza = 0.3) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return

    const destino = { x: 0, y: 0 }
    const suave = { x: 0, y: 0 }
    let cuadro = 0
    let caja = null

    // Medir el elemento obliga al navegador a resolver la maquetación en ese
    // instante. Hacerlo en cada pointermove —que llega más veces por segundo
    // que fotogramas hay— es trabajo tirado: la caja solo cambia si la página
    // se desplaza o cambia de tamaño, así que se mide una vez y se vuelve a
    // medir solo cuando eso pasa.
    const olvidarCaja = () => {
      caja = null
    }

    function bucle() {
      suave.x += (destino.x - suave.x) * 0.16
      suave.y += (destino.y - suave.y) * 0.16
      el.style.transform = `translate3d(${suave.x.toFixed(2)}px, ${suave.y.toFixed(2)}px, 0)`

      const quieto =
        Math.abs(destino.x - suave.x) < 0.1 && Math.abs(destino.y - suave.y) < 0.1
      if (quieto) {
        cuadro = 0
        // Ya en el centro: se quita el transform en vez de dejar un
        // translate3d de cero, que mantendría viva una capa de composición.
        if (destino.x === 0 && destino.y === 0) el.style.transform = ''
        return
      }
      cuadro = requestAnimationFrame(bucle)
    }

    const arrancar = () => {
      if (!cuadro) cuadro = requestAnimationFrame(bucle)
    }

    const mover = (evento) => {
      if (!caja) caja = el.getBoundingClientRect()
      destino.x = (evento.clientX - (caja.left + caja.width / 2)) * fuerza
      destino.y = (evento.clientY - (caja.top + caja.height / 2)) * fuerza
      arrancar()
    }

    const soltar = () => {
      destino.x = 0
      destino.y = 0
      caja = null
      arrancar()
    }

    el.addEventListener('pointermove', mover)
    el.addEventListener('pointerleave', soltar)
    window.addEventListener('scroll', olvidarCaja, { passive: true })
    window.addEventListener('resize', olvidarCaja)

    return () => {
      cancelAnimationFrame(cuadro)
      el.removeEventListener('pointermove', mover)
      el.removeEventListener('pointerleave', soltar)
      window.removeEventListener('scroll', olvidarCaja)
      window.removeEventListener('resize', olvidarCaja)
    }
  }, [fuerza])

  return ref
}
