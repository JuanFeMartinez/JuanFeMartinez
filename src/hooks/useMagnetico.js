import { useEffect, useRef } from 'react'

/**
 * Hace que un elemento se incline hacia el cursor cuando lo tienes cerca.
 * Devuelve una ref para poner en el elemento.
 */
export function useMagnetico(fuerza = 0.3) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return

    const mover = (evento) => {
      const caja = el.getBoundingClientRect()
      const x = evento.clientX - (caja.left + caja.width / 2)
      const y = evento.clientY - (caja.top + caja.height / 2)
      el.style.transform = `translate(${x * fuerza}px, ${y * fuerza}px)`
    }

    const soltar = () => {
      el.style.transform = ''
    }

    el.addEventListener('pointermove', mover)
    el.addEventListener('pointerleave', soltar)

    return () => {
      el.removeEventListener('pointermove', mover)
      el.removeEventListener('pointerleave', soltar)
    }
  }, [fuerza])

  return ref
}
