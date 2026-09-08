// ---------------------------------------------------------------------------
// ÚNICO ARCHIVO QUE NECESITAS EDITAR PARA CAMBIAR EL CONTENIDO DEL PORTAFOLIO.
// Lo marcado con ← lo deduje de tus carpetas de trabajo: corrígelo, es tuyo.
// ---------------------------------------------------------------------------

export const perfil = {
  nombre: 'Juan Felipe Martínez Villate',
  rol: 'Dirección de arte · Diseño de personajes · Motion',
  ubicacion: 'Tunja, Colombia',
  correo: 'redessociales@curacao.com.co', // ← ¿un correo personal en vez del del trabajo?
  disponible: true,
  disponibilidad: 'Autónomo y tiempo completo',

  // El titular del hero se parte en líneas: cada línea se revela por separado.
  titular: ['Diseño', 'personajes', 'y los pongo', 'a moverse'],
  entrada:
    'Dirección de arte, diseño de personajes y motion graphics. Cómics, videojuegos y marcas: mundos que hay que inventar primero y hacer creíbles después. Cuando la herramienta es una inteligencia artificial, también sé dirigirla.',

  redes: [
    { nombre: 'Behance', url: 'https://www.behance.net/juanfemartinez' },
    { nombre: 'Correo', url: 'mailto:redessociales@curacao.com.co' },
    { nombre: 'LinkedIn', url: '#' }, // ←
    { nombre: 'Instagram', url: '#' }, // ←
  ],
}

// Manifiesto: se ilumina palabra por palabra mientras haces scroll.
// *Entre asteriscos* se pinta con el color de acento.
export const manifiesto =
  'Un personaje no es un dibujo bonito. Es una decisión sobre *quién es*, qué quiere y cómo se le nota en la silueta antes de que abra la boca. Lo mismo da si después vive en un cómic, en un videojuego o en el logo animado de una marca: alguien tiene que decidir. Por eso dirijo igual un trazo, una línea de tiempo o una *inteligencia artificial*: la herramienta cambia, *el criterio no*.'

// Cada proyecto es un capítulo del scroll. El orden aquí es el orden en pantalla.
//
// Un proyecto puede mostrar varias piezas de video: cada una en el arreglo
// `videos`, con su archivo, su miniatura y su nombre. Si hay más de una,
// aparecen como miniaturas para ir cambiando entre ellas.
// Para una sola imagen fija: imagen: '/img/archivo.jpg'.
// Si no hay ni video ni imagen, se dibuja una composición con CSS.
export const proyectos = [
  {
    id: 'identidad-animada',
    titulo: 'Identidad en movimiento',
    subtitulo: 'Motion graphics · La Curaçao',
    disciplina: 'Motion',
    anio: '2026', // ←
    rol: 'Animación y dirección',
    resumen:
      'Una marca de 1919 tiene que verse igual de vigente en una capacitación técnica que en una pieza del Mundial. El logo no se anima una vez: se anima para cada contexto, y en todos tiene que seguir siendo el mismo.',
    detalles: [
      'Versión neón, versión institucional y versión en capas de color, todas reconocibles como la misma marca.', // ←
      'Animadas en After Effects desde el vector, sin rasterizar: sirven igual para redes o para pantalla grande.', // ←
      'Piezas de cinco a siete segundos, hechas para abrir y cerrar video.',
    ],
    stack: ['After Effects', 'Illustrator'],
    metricas: [{ valor: '4', etiqueta: 'piezas' }],
    enlace: null,
    videos: [
      { src: '/video/logo-retro.mp4', poster: '/img/logo-retro.jpg', titulo: 'Logo neón' },
      { src: '/video/ahora.mp4', poster: '/img/ahora.jpg', titulo: 'Logo en capas de color' },
      { src: '/video/logo-defensa.mp4', poster: '/img/logo-defensa.jpg', titulo: 'Institucional, desde 1919' },
      {
        src: '/video/intro-capacitacion.mp4',
        poster: '/img/intro-capacitacion.jpg',
        titulo: 'Intro de capacitación: LiveU Solo',
      },
    ],
    imagen: null,
    paleta: ['#2b2140', '#c084fc', '#f4f1ea'],
    forma: 'capas',
  },
  {
    id: 'baskiat',
    titulo: 'BASKIAT',
    subtitulo: 'Diseño de personaje',
    disciplina: 'Personajes',
    anio: '2024',
    rol: 'Diseño e ilustración',
    resumen:
      'El primero. Un personaje construido desde Jean-Michel Basquiat para la materia de diseño de personajes de ingeniería en multimedia: del boceto en Fresco al modelo en Blender, pasando por la pregunta que de verdad importa, que es quién es antes de cómo se ve.',
    detalles: [
      'Del trazo plano al volumen: ilustración en Fresco y modelado en Blender.',
      'La silueta primero: un personaje que no se reconoce en negro sobre blanco todavía no está resuelto.', // ←
    ],
    stack: ['Fresco', 'Photoshop', 'Blender', 'Figma'],
    metricas: [],
    enlace: 'https://www.behance.net/gallery/235668919/BASKIAT',
    imagen: null, // ← pásame las láminas y reemplazo el dibujo generado
    paleta: ['#2d4059', '#f07b3f', '#f9f5eb'],
    forma: 'capas',
  },
  {
    id: 'casa-corallo',
    titulo: 'La Casa Corallo',
    subtitulo: 'Cómic · K.O Media',
    disciplina: 'Cómic',
    anio: '2025',
    rol: 'Ilustración y worldbuilding',
    resumen:
      'Un cómic en blanco y negro que funciona como transmedia de Lucky Dip: no es material promocional del juego, es otra puerta de entrada al mismo mundo. Noir, con todo lo que eso obliga en contraste y en silencios.',
    detalles: [
      'Worldbuilding compartido con el videojuego: los mismos personajes, otro lenguaje.',
      'Blanco y negro por decisión narrativa, no por presupuesto.', // ←
      'Hecho en equipo en K.O Media, con Fabián Gutierrez y Yose One.',
    ],
    stack: ['Illustrator', 'Fresco'],
    metricas: [],
    enlace: 'https://www.behance.net/gallery/238872661/LA-CASA-CORALLO',
    imagen: null, // ←
    paleta: ['#002b5b', '#ea5455', '#f9f5eb'],
    forma: 'columnas',
  },
  {
    id: 'luckydip',
    titulo: 'Lucky Dip',
    subtitulo: 'Videojuego · K.O Media',
    disciplina: 'Juegos',
    anio: '2025',
    rol: 'Arte y personajes',
    resumen:
      'Un videojuego de cuatro creadores al que aporté arte y personajes. De esos proyectos donde se nota que a todo el equipo le importa, y eso termina viéndose en pantalla.', // ←
    detalles: [
      'Personajes que después se extendieron al cómic La Casa Corallo.',
      'Trabajo en equipo con roles repartidos, no en solitario.',
    ],
    stack: ['Fresco', 'Photoshop', 'Illustrator'], // ←
    metricas: [],
    enlace: 'https://www.behance.net/gallery/235688649/LUCKYDIP-(parcialmente)',
    imagen: null, // ←
    paleta: ['#0a3466', '#f07b3f', '#f9f5eb'],
    forma: 'reticula',
  },
  {
    id: 'find-fih',
    titulo: 'FIND FIH',
    subtitulo: 'Game jam',
    disciplina: 'Juegos',
    anio: '2025',
    rol: 'Arte y dirección',
    resumen:
      'Un juego hecho contra el reloj en una game jam, con Yose One y Fabián Gutierrez. Las jams no premian la pieza perfecta: premian decidir rápido y sostener la decisión hasta el final.',
    detalles: [
      'Arte y dirección visual en un plazo de días, no de meses.', // ←
      'El juego se puede descargar y jugar, no es solo una lámina.',
    ],
    stack: ['Fresco', 'Photoshop'], // ←
    metricas: [],
    enlace: 'https://www.behance.net/gallery/238874059/FIND-FIH-GameJam',
    imagen: null, // ←
    paleta: ['#2d4059', '#ea5455', '#f9f5eb'],
    forma: 'flujo',
  },
  {
    id: 'ko-media',
    titulo: 'K.O Media',
    subtitulo: 'Sitio web del estudio',
    disciplina: 'Web',
    anio: '2025',
    rol: 'Diseño y frontend',
    resumen:
      'El sitio del estudio, con animación y 3D corriendo en el navegador. Aquí el diseño y el código son la misma decisión: lo que se mueve en pantalla hay que sostenerlo con Three.js sin que la página se vuelva lenta.',
    detalles: [
      'Three.js para 3D en tiempo real dentro del navegador.',
      'Del diseño en Figma al frontend, sin intermediarios.', // ←
    ],
    stack: ['Three.js', 'JavaScript', 'HTML', 'CSS', 'Figma'],
    metricas: [],
    enlace: 'https://www.behance.net/gallery/238873761/KO-media-Sitio-Web',
    imagen: null, // ←
    paleta: ['#002b5b', '#f07b3f', '#f9f5eb'],
    forma: 'reticula',
  },
  {
    id: 'curacao-sitio',
    titulo: 'La Curaçao',
    subtitulo: 'Sitio corporativo',
    disciplina: 'Web',
    anio: '2026',
    rol: 'Diseño y dirección',
    resumen:
      'Sitio multipágina para una compañía con varias líneas de negocio: marcas, broadcast, seguridad y defensa, nuevos negocios y soporte. Definí cómo se ve y cómo se comporta, y dirigí la construcción hasta que quedó como debía.',
    detalles: [
      'Ocho secciones bajo un solo sistema de estilos, cada una con identidad propia.',
      'Versión en inglés como páginas reales, no traducción automática del navegador.',
      'Cada revisión del cliente incorporada sin romper el sistema visual.',
    ],
    stack: ['Dirección de arte', 'Diseño web', 'HTML', 'CSS'],
    metricas: [
      { valor: '8', etiqueta: 'secciones' },
      { valor: '2', etiqueta: 'idiomas' },
    ],
    enlace: null, // ← la URL pública cuando esté
    imagen: null,
    paleta: ['#0d3b66', '#3aa0ff', '#f4f1ea'],
    forma: 'reticula',
  },
  {
    id: 'ordenes-servicio',
    titulo: 'Órdenes de servicio',
    subtitulo: 'Sistema interno y portal público',
    disciplina: 'Web',
    anio: '2026',
    rol: 'Dirección de producto',
    resumen:
      'El sistema que ordena la operación diaria: se crean, asignan y siguen órdenes de servicio. Partido a propósito en dos proyectos separados para que el portal público de seguimiento nunca toque la data interna.',
    detalles: [
      'Dos proyectos independientes en lugar de uno: la separación es la medida de seguridad.',
      'El cliente consulta el estado de su orden desde un enlace público sin ver nada más.',
      'Corre sobre la infraestructura que la empresa ya paga: cero servidores nuevos.',
    ],
    stack: ['Google Apps Script', 'Sheets'],
    metricas: [{ valor: '2', etiqueta: 'proyectos aislados' }],
    enlace: null,
    imagen: null,
    paleta: ['#1b3a2f', '#4ade80', '#f4f1ea'],
    forma: 'flujo',
  },
]

// Marquesina inferior: se mueve sola y acelera con el scroll.
export const capacidades = [
  'After Effects',
  'Premiere Pro',
  'DaVinci Resolve',
  'Motion graphics',
  'Edición',
  'Diseño de personajes',
  'Ilustración',
  'Photoshop',
  'Illustrator',
  'Dirección de arte',
  'IA generativa',
  'Diseño web',
  'Identidad visual',
]

// Bloques de "cómo trabajo".
export const proceso = [
  {
    titulo: 'Decidir qué mira el ojo',
    texto:
      'Antes de abrir After Effects: qué se ve primero, qué después y qué no se ve. Una pieza sin jerarquía es solo movimiento, y el movimiento sin jerarquía marea.',
  },
  {
    titulo: 'Dirigir, no solo ejecutar',
    texto:
      'Las anotaciones del cliente no son una lista de tareas: son un síntoma. Mi trabajo es entender qué molesta de verdad y resolver eso, no tapar lo que señalaron.',
  },
  {
    titulo: 'La herramienta es lo de menos',
    texto:
      'After Effects, una línea de código o una IA generativa: todas hacen lo que les pidas y ninguna decide por ti. Sé usarlas, pero lo que entrego es el criterio.',
  },
]
