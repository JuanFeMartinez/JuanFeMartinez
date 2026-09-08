import { useEffect, useRef, useState } from 'react'
import './VisualProyecto.css'

/**
 * Antepone la ruta base del sitio a las rutas absolutas de perfil.js.
 *
 * Vite reescribe solo las rutas que pasan por un import o por un url() de CSS;
 * las que van escritas como texto en los datos las deja intactas. Cuando el
 * sitio se publica en un subdirectorio, '/video/x.mp4' apunta a la raíz del
 * dominio, donde no hay nada. En local no se nota, porque ahí la base es la
 * raíz: por eso este fallo solo aparecía en producción.
 */
const conBase = (ruta) =>
  ruta?.startsWith('/') ? import.meta.env.BASE_URL.replace(/\/$/, '') + ruta : ruta

/**
 * Cada proyecto se dibuja con CSS en vez de usar una captura: se ve intencional
 * mientras no haya imágenes. En cuanto pongas `imagen` en el proyecto, esta
 * composición se reemplaza por la foto real sin tocar nada más.
 */

const Reticula = () => (
  <div className="forma reticula">
    {Array.from({ length: 12 }, (_, i) => (
      <span key={i} style={{ '--i': i }} />
    ))}
  </div>
)

const Flujo = () => (
  <svg className="forma flujo" viewBox="0 0 200 140" aria-hidden="true">
    <path d="M40 34 H160 M40 34 V70 H100 M160 34 V106 H100" className="flujo-linea" />
    <circle cx="40" cy="34" r="9" className="flujo-nodo" />
    <circle cx="160" cy="34" r="9" className="flujo-nodo" />
    <circle cx="100" cy="70" r="9" className="flujo-nodo flujo-activo" />
    <circle cx="100" cy="106" r="9" className="flujo-nodo" />
    <circle r="3" className="flujo-pulso">
      <animateMotion dur="4s" repeatCount="indefinite" path="M40 34 H160 V106 H100" />
    </circle>
  </svg>
)

const Columnas = () => (
  <div className="forma columnas">
    <span className="col-barra" />
    <span className="col-titulo" />
    <span className="col-texto" />
    <div className="col-fila">
      <span />
      <span />
      <span />
    </div>
    <span className="col-boton" />
  </div>
)

const Capas = () => (
  <div className="forma capas">
    <span style={{ '--n': 0 }} />
    <span style={{ '--n': 1 }} />
    <span style={{ '--n': 2 }} />
  </div>
)

const FORMAS = { reticula: Reticula, flujo: Flujo, columnas: Columnas, capas: Capas }

export function VisualProyecto({ proyecto }) {
  const [c1, c2, c3] = proyecto.paleta
  const Forma = FORMAS[proyecto.forma] ?? Reticula
  const rotulo = proyecto.enlace ? new URL(proyecto.enlace).hostname : proyecto.id
  const piezas = proyecto.videos ?? []
  const cartas = proyecto.baraja ?? []
  const hayMedio =
    piezas.length > 0 ||
    cartas.length > 0 ||
    Boolean(proyecto.imagen) ||
    Boolean(proyecto.embed) ||
    Boolean(proyecto.sitio)

  return (
    <figure className="visual" style={{ '--c1': c1, '--c2': c2, '--c3': c3 }}>
      <div className="visual-barra">
        <span />
        <span />
        <span />
        <em>{rotulo}</em>
      </div>
      <div className={`visual-lienzo ${hayMedio ? 'con-medio' : ''}`}>
        {piezas.length > 0 ? (
          <VideoProyecto piezas={piezas} titulo={proyecto.titulo} />
        ) : proyecto.imagen ? (
          <img
            src={conBase(proyecto.imagen)}
            alt={`Vista del proyecto ${proyecto.titulo}`}
            loading="lazy"
          />
        ) : cartas.length > 0 ? (
          <BarajaProyecto cartas={cartas} titulo={proyecto.titulo} />
        ) : proyecto.sitio ? (
          <SitioProyecto url={proyecto.sitio} titulo={proyecto.titulo} />
        ) : proyecto.embed ? (
          // loading="lazy" es lo que hace viable meter cinco de estos: el
          // iframe no se descarga hasta que el capítulo entra en pantalla.
          <iframe
            className="visual-embed"
            src={proyecto.embed}
            title={`${proyecto.titulo} en Behance`}
            loading="lazy"
            allowFullScreen
            allow="clipboard-write"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        ) : (
          <Forma />
        )}
      </div>
    </figure>
  )
}

/**
 * Baraja de secciones: una carta por pantalla del sitio, apiladas como cartas
 * en la mano. El abanico se abre con el avance del capítulo, así que la
 * animación la conduce el scroll y no un temporizador: si el visitante para,
 * la baraja para con él.
 */
function BarajaProyecto({ cartas, titulo }) {
  return (
    <ul className="baraja" style={{ '--total': cartas.length }}>
      {cartas.map((carta, i) => (
        <li className="baraja-carta" key={carta.src} style={{ '--n': i }}>
          <img src={conBase(carta.src)} alt={`${titulo}: ${carta.titulo}`} loading="lazy" />
          <span>{carta.titulo}</span>
        </li>
      ))}
    </ul>
  )
}

/**
 * Vista previa de un sitio web en vivo, no una captura: se carga el sitio real
 * a ancho de escritorio y se reduce a escala para que quepa en el panel. Así se
 * ve como se ve de verdad, y no envejece cuando el sitio cambia.
 *
 * Va con pointer-events desactivados a propósito. Es una vista, no un sitio
 * dentro de otro: sin eso, quien haga clic acaba navegando por dentro del
 * recuadro y no encuentra la salida. Para entrar de verdad está el enlace.
 */
function SitioProyecto({ url, titulo }) {
  const caja = useRef(null)
  const ANCHO_ESCRITORIO = 1280

  useEffect(() => {
    const el = caja.current
    if (!el) return

    // La escala depende del ancho del panel, que cambia con la ventana, así que
    // no puede quedarse fija en el CSS.
    const medir = () =>
      el.style.setProperty('--escala', (el.clientWidth / ANCHO_ESCRITORIO).toFixed(4))

    medir()
    const observador = new ResizeObserver(medir)
    observador.observe(el)
    return () => observador.disconnect()
  }, [])

  return (
    <div className="visual-sitio" ref={caja}>
      <iframe
        src={url}
        title={`Vista del sitio ${titulo}`}
        loading="lazy"
        tabIndex={-1}
        aria-hidden="true"
      />
    </div>
  )
}

/**
 * Video de portafolio: arranca solo cuando entra en pantalla y se pausa al
 * salir, para no gastar batería reproduciendo lo que nadie está viendo.
 * Empieza en silencio porque un video que suena sin permiso espanta; el botón
 * deja escuchar el diseño sonoro, que en motion es la mitad del trabajo.
 * Con prefers-reduced-motion no se reproduce nada: se muestran los controles.
 */
function VideoProyecto({ piezas, titulo }) {
  const video = useRef(null)
  const [activa, setActiva] = useState(0)
  const [conSonido, setConSonido] = useState(false)

  const pieza = piezas[activa]

  useEffect(() => {
    const el = video.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const observador = new IntersectionObserver(
      ([entrada]) => {
        if (entrada.isIntersecting) el.play().catch(() => {})
        else el.pause()
      },
      { threshold: 0.25 },
    )

    observador.observe(el)
    return () => observador.disconnect()
  }, [activa])

  const cambiar = (i) => {
    setActiva(i)
    // El sonido no se hereda entre piezas: si estabas oyendo una, la siguiente
    // arranca callada, que es lo que espera cualquiera.
    setConSonido(false)
  }

  const alternarSonido = () => {
    const el = video.current
    if (!el) return
    el.muted = !el.muted
    setConSonido(!el.muted)
    if (!el.muted) el.play().catch(() => {})
  }

  const sinMovimiento =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  return (
    <div className="visual-video">
      <div className="visual-marco">
        <video
          key={pieza.src}
          ref={video}
          src={conBase(pieza.src)}
          poster={conBase(pieza.poster) ?? undefined}
          loop
          muted
          playsInline
          preload="metadata"
          controls={sinMovimiento}
          aria-label={`${titulo}: ${pieza.titulo}`}
        />
        {!sinMovimiento && (
          <button type="button" className="visual-sonido" onClick={alternarSonido}>
            {conSonido ? 'Silenciar' : 'Con sonido'}
          </button>
        )}
      </div>

      {piezas.length > 1 && (
        <>
          <p className="visual-pieza-nombre">{pieza.titulo}</p>
          <ul className="visual-piezas">
            {piezas.map((p, i) => (
              <li key={p.src}>
                <button
                  type="button"
                  className={i === activa ? 'activa' : ''}
                  onClick={() => cambiar(i)}
                  style={p.poster ? { backgroundImage: `url(${conBase(p.poster)})` } : undefined}
                  aria-current={i === activa}
                >
                  <span className="solo-lectores">{p.titulo}</span>
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  )
}
