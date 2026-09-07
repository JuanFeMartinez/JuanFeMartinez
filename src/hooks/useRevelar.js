import { useEffect } from 'react'

const SELECTOR = '[data-revelar], .mascara'

/**
 * Marca como `.visible` todo elemento con [data-revelar] o .mascara cuando
 * entra en pantalla. La animación en sí vive en base.css, aquí solo se dispara.
 * Observa también el contenido que aparece después del primer render.
 */
export function useRevelar() {
  useEffect(() => {
    const sinMovimiento = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (sinMovimiento) {
      document.querySelectorAll(SELECTOR).forEach((el) => el.classList.add('visible'))
      return
    }

    const observador = new IntersectionObserver(
      (entradas) => {
        for (const entrada of entradas) {
          if (!entrada.isIntersecting) continue
          entrada.target.classList.add('visible')
          observador.unobserve(entrada.target)
        }
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.12 },
    )

    const observarNuevos = () => {
      document
        .querySelectorAll(`${SELECTOR}:not(.visible)`)
        .forEach((el) => observador.observe(el))
    }

    observarNuevos()
    const mutaciones = new MutationObserver(observarNuevos)
    mutaciones.observe(document.body, { childList: true, subtree: true })

    return () => {
      observador.disconnect()
      mutaciones.disconnect()
    }
  }, [])
}
