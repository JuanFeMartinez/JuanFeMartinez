import { useEffect, useMemo, useRef } from 'react'
import { manifiesto } from '../data/perfil'
import './Manifiesto.css'

/**
 * El texto se ilumina palabra por palabra a medida que avanzas por la sección.
 * El avance se escribe como variable CSS (--p) y el resto lo resuelve el CSS,
 * así no hay un render de React por cada píxel de scroll.
 */
export function Manifiesto() {
  const envoltura = useRef(null)

  // *Entre asteriscos* se pinta con el color de acento; el marcador puede
  // abarcar varias palabras seguidas.
  const palabras = useMemo(() => {
    const salida = []
    let dentro = false
    for (const bruta of manifiesto.split(/\s+/)) {
      if (bruta.startsWith('*')) dentro = true
      const cierra = bruta.slice(1).includes('*')
      salida.push({ texto: bruta.replaceAll('*', ''), destacada: dentro })
      if (cierra) dentro = false
    }
    return salida
  }, [])

  useEffect(() => {
    const el = envoltura.current
    if (!el) return
    let pendiente = 0

    const medir = () => {
      pendiente = 0
      const caja = el.getBoundingClientRect()
      const recorrido = caja.height - window.innerHeight
      if (recorrido <= 0) return el.style.setProperty('--p', '1')
      const avance = Math.min(Math.max(-caja.top / recorrido, 0), 1)
      el.style.setProperty('--p', avance.toFixed(4))
    }

    const alScroll = () => {
      if (!pendiente) pendiente = requestAnimationFrame(medir)
    }

    medir()
    window.addEventListener('scroll', alScroll, { passive: true })
    window.addEventListener('resize', alScroll)

    return () => {
      window.removeEventListener('scroll', alScroll)
      window.removeEventListener('resize', alScroll)
      cancelAnimationFrame(pendiente)
    }
  }, [])

  return (
    <section
      className="manifiesto"
      id="manifiesto"
      ref={envoltura}
      style={{ '--total': palabras.length }}
    >
      <div className="manifiesto-fijo">
        <div className="contenedor">
          <p className="etiqueta" data-revelar>
            Cómo lo veo
          </p>
          <p className="manifiesto-texto">
            {palabras.map((palabra, i) => (
              <span
                className={`palabra ${palabra.destacada ? 'destacada' : ''}`}
                style={{ '--i': i }}
                key={`${palabra.texto}-${i}`}
              >
                {palabra.texto}{' '}
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  )
}
