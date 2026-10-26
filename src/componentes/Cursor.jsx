import { useEffect, useRef } from 'react'
import './Cursor.css'

const INTERACTIVOS = 'a, button, [data-cursor]'

/**
 * Cursor propio: un anillo clavado en la punta del puntero que crece al pasar
 * sobre algo interactivo y puede mostrar una palabra (data-cursor="Ver").
 *
 * Antes el anillo llegaba con retraso, persiguiendo al puntero, y un punto
 * rojo marcaba dónde estaba el puntero de verdad mientras tanto. El retraso
 * era justo lo que se sentía raro: el cursor es lo único que está en pantalla
 * todo el tiempo que alguien pasa en la página, y una animación que no termina
 * nunca se lee como lentitud, no como estilo. Sin retraso, el punto sobraba.
 *
 * Solo se activa en punteros finos; en táctil no se monta nada.
 */
export function Cursor() {
  const anillo = useRef(null)
  const etiqueta = useRef(null)

  useEffect(() => {
    const fino = window.matchMedia('(hover: hover) and (pointer: fine)')
    if (!fino.matches) return

    document.body.classList.add('cursor-propio')

    // Directo, sin requestAnimationFrame de por medio: esperar al siguiente
    // fotograma es justamente añadir un fotograma de retraso, y lo que se
    // busca es que el anillo esté donde está el puntero, no un poco después.
    // El navegador ya agrupa las escrituras de un mismo fotograma.
    const mover = (evento) => {
      const el = anillo.current
      if (!el) return
      el.style.transform = `translate3d(${evento.clientX}px, ${evento.clientY}px, 0)`
      el.classList.add('dentro')
    }

    const salir = () => {
      anillo.current?.classList.remove('dentro')
    }

    const entrarEn = (evento) => {
      const objetivo = evento.target.closest?.(INTERACTIVOS)
      if (!objetivo) return
      anillo.current?.classList.add('crecido')
      const texto = objetivo.dataset.cursor
      if (texto && etiqueta.current) {
        etiqueta.current.textContent = texto
        anillo.current?.classList.add('con-texto')
      }
    }

    const salirDe = (evento) => {
      const dejado = evento.target.closest?.(INTERACTIVOS)
      if (!dejado) return
      if (evento.relatedTarget?.closest?.(INTERACTIVOS) === dejado) return
      anillo.current?.classList.remove('crecido', 'con-texto')
    }

    const presionar = () => anillo.current?.classList.add('presionado')
    const soltar = () => anillo.current?.classList.remove('presionado')

    window.addEventListener('pointermove', mover, { passive: true })
    document.addEventListener('pointerover', entrarEn)
    document.addEventListener('pointerout', salirDe)
    document.addEventListener('pointerdown', presionar)
    document.addEventListener('pointerup', soltar)
    document.addEventListener('mouseleave', salir)

    return () => {
      document.body.classList.remove('cursor-propio')
      window.removeEventListener('pointermove', mover)
      document.removeEventListener('pointerover', entrarEn)
      document.removeEventListener('pointerout', salirDe)
      document.removeEventListener('pointerdown', presionar)
      document.removeEventListener('pointerup', soltar)
      document.removeEventListener('mouseleave', salir)
    }
  }, [])

  return (
    <div className="cursor-anillo" ref={anillo} aria-hidden="true">
      <div className="cursor-anillo-forma" />
      {/* La punta exacta: el anillo dice "por aquí", el punto dice "aquí". Va
          en el mismo contenedor que el anillo, así que se mueve con él, sin
          retraso. */}
      <i className="cursor-punto" />
      <span ref={etiqueta} />
    </div>
  )
}
