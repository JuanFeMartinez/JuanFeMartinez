import { useEffect } from 'react'

/**
 * Escribe dos variables CSS en :root en lugar de provocar renders de React:
 *   --progreso  0 → 1 según cuánto se ha bajado el documento.
 *   --velocidad 0 → 1 según qué tan rápido se está haciendo scroll.
 * Cualquier componente puede leerlas desde CSS sin volver a renderizar.
 */
export function useProgreso() {
  useEffect(() => {
    const raiz = document.documentElement
    let anterior = window.scrollY
    let pendiente = 0
    let frenado

    const actualizar = () => {
      pendiente = 0
      const recorrido = raiz.scrollHeight - window.innerHeight
      const y = window.scrollY

      raiz.style.setProperty('--progreso', recorrido > 0 ? (y / recorrido).toFixed(4) : '0')

      const velocidad = Math.min(Math.abs(y - anterior) / 60, 1)
      raiz.style.setProperty('--velocidad', velocidad.toFixed(3))
      anterior = y

      clearTimeout(frenado)
      frenado = setTimeout(() => raiz.style.setProperty('--velocidad', '0'), 140)
    }

    const alHacerScroll = () => {
      if (!pendiente) pendiente = requestAnimationFrame(actualizar)
    }

    actualizar()
    window.addEventListener('scroll', alHacerScroll, { passive: true })
    window.addEventListener('resize', alHacerScroll)

    return () => {
      window.removeEventListener('scroll', alHacerScroll)
      window.removeEventListener('resize', alHacerScroll)
      cancelAnimationFrame(pendiente)
      clearTimeout(frenado)
    }
  }, [])
}
