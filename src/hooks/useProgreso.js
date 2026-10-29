import { useEffect } from 'react'

/**
 * Escribe dos variables CSS en lugar de provocar renders de React:
 *   --progreso  0 → 1 según cuánto se ha bajado el documento.
 *   --velocidad 0 → 1 según qué tan rápido se está haciendo scroll.
 *
 * Se escriben solo en los elementos que las leen (los que llevan
 * data-progreso), no en :root. Una variable cambiada en la raíz obliga al
 * navegador a recalcular el estilo de la página entera, y esto pasa en cada
 * fotograma de scroll: en un celular modesto, eso era lo que volvía lento
 * todo el desplazamiento, la rueda incluida.
 */
export function useProgreso() {
  useEffect(() => {
    const raiz = document.documentElement
    const lectores = [...document.querySelectorAll('[data-progreso]')]
    const escribir = (nombre, valor) => {
      for (const el of lectores) el.style.setProperty(nombre, valor)
    }
    let anterior = window.scrollY
    let pendiente = 0
    let frenado

    const actualizar = () => {
      pendiente = 0
      const recorrido = raiz.scrollHeight - window.innerHeight
      const y = window.scrollY

      escribir('--progreso', recorrido > 0 ? (y / recorrido).toFixed(4) : '0')

      const velocidad = Math.min(Math.abs(y - anterior) / 60, 1)
      escribir('--velocidad', velocidad.toFixed(3))
      anterior = y

      clearTimeout(frenado)
      frenado = setTimeout(() => escribir('--velocidad', '0'), 140)
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
