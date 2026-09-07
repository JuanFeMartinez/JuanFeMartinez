// ---------------------------------------------------------------------------
// ÚNICO ARCHIVO QUE NECESITAS EDITAR PARA CAMBIAR EL CONTENIDO DEL PORTAFOLIO.
// Lo marcado con ← lo deduje de tus carpetas de trabajo: corrígelo, es tuyo.
// ---------------------------------------------------------------------------

export const perfil = {
  nombre: 'Juan Felipe Martínez Villate',
  rol: 'Motion graphics · Edición · Dirección de diseño',
  ubicacion: 'Bucaramanga, Colombia', // ←
  correo: 'redessociales@curacao.com.co',
  disponible: true,

  // El titular del hero se parte en líneas: cada línea se revela por separado.
  titular: ['Hago que las', 'marcas se', 'muevan'],
  entrada:
    'Motion graphics, edición y dirección de diseño. Del guion al render, y de la pieza de quince segundos al sitio completo. Cuando la herramienta es una inteligencia artificial, también sé dirigirla.',

  redes: [
    { nombre: 'Correo', url: 'mailto:redessociales@curacao.com.co' },
    { nombre: 'LinkedIn', url: '#' }, // ←
    { nombre: 'Instagram', url: '#' }, // ←
    { nombre: 'Behance', url: '#' }, // ← borra este si no lo usas
  ],
}

// Manifiesto: se ilumina palabra por palabra mientras haces scroll.
// *Entre asteriscos* se pinta con el color de acento.
export const manifiesto =
  'Una animación no es un logo que gira. Es una decisión sobre *qué mira el ojo*, en qué orden y por cuánto tiempo. Da igual si la pieza es un video de quince segundos, una página entera o un personaje: alguien tiene que decidir. Por eso dirijo igual una línea de tiempo, un equipo o una *inteligencia artificial*: la herramienta cambia, *el criterio no*.'

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
    id: 'tiptops',
    titulo: 'TipTops',
    subtitulo: 'Serie de video para redes',
    disciplina: 'Edición',
    anio: '2025 — hoy', // ←
    rol: 'Edición y post',
    resumen:
      'Serie continua de piezas verticales sobre equipos profesionales de video: qué son, cómo llegan y cómo se cuidan. Explicar una cámara de broadcast en treinta segundos no es cuestión de hablar rápido, es cuestión de montaje.',
    detalles: [
      'La edición carga con la explicación: el texto en pantalla marca el ritmo y la imagen hace el resto.', // ←
      'Formato vertical y duración corta, pensados para cómo se ve realmente en el celular.',
      'Montaje en Premiere y DaVinci Resolve según lo que pida la pieza.', // ←
    ],
    stack: ['Premiere Pro', 'DaVinci Resolve', 'After Effects'],
    metricas: [{ valor: '25+', etiqueta: 'piezas' }], // ←
    enlace: null,
    videos: [
      { src: '/video/broadcast.mp4', poster: '/img/broadcast.jpg', titulo: 'Cámaras y equipos de broadcast' },
      { src: '/video/mantenimiento.mp4', poster: '/img/mantenimiento.jpg', titulo: 'Así recibes tu equipo' },
      { src: '/video/sargento-box.mp4', poster: '/img/sargento-box.jpg', titulo: 'Línea táctica: dotación' },
      { src: '/video/mundial.mp4', poster: '/img/mundial.jpg', titulo: 'El Mundial en la oficina' },
    ],
    imagen: null,
    paleta: ['#3d1f1f', '#ff8a5b', '#f4f1ea'],
    forma: 'columnas',
  },
  {
    id: 'personajes',
    titulo: 'Diseño de personajes',
    subtitulo: 'Ilustración y construcción',
    disciplina: 'Personajes',
    anio: '2026', // ←
    rol: 'Diseño e ilustración',
    resumen:
      'PENDIENTE: no encontré este material en tus carpetas. Dime dónde está y armo la galería con las imágenes reales.', // ←
    detalles: [
      'Falta contar de dónde salen: marca, proyecto propio o encargo.', // ←
      'Conviene mostrar proceso, no solo resultado: bocetos, rotación, expresiones.', // ←
    ],
    stack: ['Illustrator', 'Photoshop'], // ←
    metricas: [],
    enlace: null,
    imagen: null, // ← aquí va la imagen del personaje
    paleta: ['#1b3a2f', '#4ade80', '#f4f1ea'],
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
