import { useEffect, useRef } from 'react'
import './Cursor.css'

const INTERACTIVOS = 'a, button, [data-cursor]'

/**
 * Cursor propio: un punto que sigue al mouse al instante y un anillo que llega
 * un poco después. Al pasar sobre algo interactivo el anillo crece y puede
 * mostrar una palabra (atributo data-cursor="Ver").
 * Solo se activa en punteros finos; en táctil no se monta nada.
 */
export function Cursor() {
  const anillo = useRef(null)
  const punto = useRef(null)
  const etiqueta = useRef(null)

  useEffect(() => {
    const fino = window.matchMedia('(hover: hover) and (pointer: fine)')
    if (!fino.matches) return

    document.body.classList.add('cursor-propio')

    const destino = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    const suave = { ...destino }
    let cuadro = 0

    // El bucle se para solo cuando el anillo ya alcanzó al puntero, y lo
    // reanima el siguiente movimiento del mouse. Antes corría eternamente:
    // mantener vivo un requestAnimationFrame obliga al navegador a despertar
    // en cada fotograma aunque no haya nada que mover.
    function bucle() {
      const dx = destino.x - suave.x
      const dy = destino.y - suave.y
      suave.x += dx * 0.16
      suave.y += dy * 0.16

      if (anillo.current) {
        anillo.current.style.transform = `translate3d(${suave.x}px, ${suave.y}px, 0)`
      }

      if (Math.abs(dx) < 0.1 && Math.abs(dy) < 0.1) {
        cuadro = 0
        return
      }
      cuadro = requestAnimationFrame(bucle)
    }

    const arrancar = () => {
      if (!cuadro) cuadro = requestAnimationFrame(bucle)
    }

    const mover = (evento) => {
      destino.x = evento.clientX
      destino.y = evento.clientY
      arrancar()
      if (punto.current) {
        punto.current.style.transform = `translate3d(${evento.clientX}px, ${evento.clientY}px, 0)`
      }
      anillo.current?.classList.add('dentro')
      punto.current?.classList.add('dentro')
    }

    const salir = () => {
      anillo.current?.classList.remove('dentro')
      punto.current?.classList.remove('dentro')
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
      cancelAnimationFrame(cuadro)
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
    <div aria-hidden="true">
      <div className="cursor-anillo" ref={anillo}>
        <span ref={etiqueta} />
      </div>
      <div className="cursor-punto" ref={punto} />
    </div>
  )
}
