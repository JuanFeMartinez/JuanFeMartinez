import { useEffect, useRef } from 'react'
import { perfil } from '../data/perfil'
import avatar from '../assets/avatar.png'
import './Hero.css'

const numero = (i) => String(i + 1).padStart(2, '0')

/**
 * Portada en la dirección Noche: una tarjeta azul con resplandor rojo y
 * naranja, el avatar grande saliendo por abajo, el cargo en letra condensada
 * y los cuatro oficios en una franja al pie, como el rótulo de una película.
 */
export function Hero() {
  const seccion = useRef(null)

  useEffect(() => {
    const el = seccion.current
    if (!el) return
    const sinMovimiento = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let pendiente = 0

    // --salida: 0 arriba del todo, 1 cuando el hero ya salió de pantalla.
    //
    // La cuenta se hace contra el alto del hero y no contra el de la ventana:
    // si la portada mide más que una pantalla, dividir por la ventana hacía que
    // --salida llegara a 1 —"esto ya no se ve"— con la mitad todavía visible.
    let alto = el.offsetHeight || window.innerHeight

    const alScroll = () => {
      if (pendiente) return
      pendiente = requestAnimationFrame(() => {
        pendiente = 0
        const salida = Math.min(window.scrollY / alto, 1)
        el.style.setProperty('--salida', salida.toFixed(3))
      })
    }

    const remedir = () => {
      alto = el.offsetHeight || window.innerHeight
      alScroll()
    }

    // --px/--py: posición del mouse de -1 a 1, para que el resplandor se corra
    // un poco con el puntero.
    const alMover = (evento) => {
      el.style.setProperty('--px', (evento.clientX / window.innerWidth - 0.5).toFixed(3))
      el.style.setProperty('--py', (evento.clientY / window.innerHeight - 0.5).toFixed(3))
    }

    window.addEventListener('scroll', alScroll, { passive: true })
    window.addEventListener('resize', remedir)
    if (!sinMovimiento) window.addEventListener('pointermove', alMover, { passive: true })

    return () => {
      window.removeEventListener('scroll', alScroll)
      window.removeEventListener('resize', remedir)
      window.removeEventListener('pointermove', alMover)
      cancelAnimationFrame(pendiente)
    }
  }, [])

  return (
    <section className="hero" id="inicio" ref={seccion}>
      <div className="hero-tarjeta">
        <div className="hero-atmosfera" aria-hidden="true">
          <span className="mancha mancha-a" />
          <span className="mancha mancha-b" />
          <span className="mancha mancha-c" />
        </div>

        <img className="hero-avatar" src={avatar} alt={`Avatar de ${perfil.nombre}`} />

        <div className="hero-texto">
          <p className="hero-hola" data-revelar style={{ '--retraso': '0.1s' }}>
            {perfil.saludo}
          </p>
          <h1 className="hero-titular titular-apretado">
            {perfil.cargo.map((linea, i) => (
              <span className="mascara" key={linea} style={{ '--retraso': `${0.2 + i * 0.09}s` }}>
                <span>{linea}</span>
              </span>
            ))}
          </h1>
        </div>

        <div className="hero-lado">
          <p className="hero-frase" data-revelar style={{ '--retraso': '0.5s' }}>
            {perfil.titular.join(' ')}.
          </p>
        </div>

        <div className="hero-pie">
          <ul className="hero-oficios" data-revelar style={{ '--retraso': '0.65s' }}>
            {perfil.oficios.map((oficio, i) => (
              <li key={oficio}>
                <small>{numero(i)}</small>
                {oficio}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
