// ---------------------------------------------------------------------------
// ÚNICO ARCHIVO QUE NECESITAS EDITAR PARA CAMBIAR EL CONTENIDO DEL PORTAFOLIO.
// Lo marcado con ← lo deduje de tus carpetas de trabajo: corrígelo, es tuyo.
// ---------------------------------------------------------------------------

export const perfil = {
  nombre: 'Juan Felipe Martínez Villate',
  rol: 'Dirección de arte · Motion · Juegos e interfaces',
  ubicacion: 'Bogotá, Colombia',
  correo: 'juanfemvc@gmail.com',
  disponible: true,
  disponibilidad: 'Autónomo y tiempo completo',

  // El titular del hero se parte en líneas: cada línea se revela por separado.
  titular: ['Diseño', 'mundos', 'y les doy', 'movimiento'],
  entrada:
    'Dirección de arte para cosas que se ven y se mueven: videojuegos, cómics, video y producto digital. Invento el mundo primero y me encargo de que se sostenga después, cuadro por cuadro o pantalla por pantalla. Cuando la herramienta es una inteligencia artificial, también sé dirigirla.',

  redes: [
    { nombre: 'Behance', url: 'https://www.behance.net/juanfemartinez' },
    { nombre: 'Correo', url: 'mailto:juanfemvc@gmail.com' },
    { nombre: 'LinkedIn', url: '#' }, // ←
    { nombre: 'Instagram', url: '#' }, // ←
  ],
}

// Manifiesto: se ilumina palabra por palabra mientras haces scroll.
// *Entre asteriscos* se pinta con el color de acento.
export const manifiesto =
  'Un corte a tiempo hace más que un efecto caro. Un personaje bueno se reconoce *por la silueta*, antes de que abra la boca. Y una interfaz se entiende en tres segundos o no se entiende. Son oficios distintos que se reducen a lo mismo: *decidir qué ve la gente*, en qué orden y por cuánto rato. Lo demás son herramientas, y las manejo todas: After Effects, un lápiz o una inteligencia artificial. *El criterio es el mismo*.'

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
    disciplina: 'Edición',
    anio: '2026', // ←
    rol: 'Animación y dirección',
    resumen:
      'Una marca de 1919 tiene que verse igual de vigente en una capacitación técnica que en una pieza del Mundial. El logo no se anima una vez: se anima para cada contexto, y en todos tiene que seguir siendo el mismo.',
    detalles: [
      'Estilo simple pero fluido: prefiero pocas cosas moviéndose bien a muchas moviéndose a la vez.',
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
    id: 'redes-curacao',
    titulo: 'Contenido para redes',
    subtitulo: 'Edición · La Curaçao',
    disciplina: 'Edición',
    anio: '2025 — hoy', // ←
    rol: 'Edición y post',
    resumen:
      'Piezas verticales sobre equipos profesionales de video: qué son, cómo llegan y cómo se cuidan. Explicar una cámara de broadcast en treinta segundos no es cuestión de hablar rápido, es cuestión de montaje.',
    detalles: [
      'Elijo la música antes que el primer corte: el ritmo del montaje sale de ahí, no al revés.',
      'La edición carga con la explicación: el texto en pantalla marca el ritmo y la imagen hace el resto.', // ←
      'Formato vertical y duración corta, pensados para cómo se ve de verdad en el celular.',
      'Montaje en Premiere y DaVinci Resolve según lo que pida la pieza.', // ←
    ],
    stack: ['Premiere Pro', 'DaVinci Resolve', 'After Effects'],
    metricas: [],
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
    id: 'baskiat',
    titulo: 'BASKIAT',
    subtitulo: 'Diseño de personaje',
    disciplina: 'Videojuegos y personajes',
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
    embed: 'https://www.behance.net/embed/project/235668919?ilo0=1',
    imagen: null, // ← pásame las láminas y reemplazo el dibujo generado
    paleta: ['#2d4059', '#f07b3f', '#f9f5eb'],
    forma: 'capas',
  },
  {
    id: 'casa-corallo',
    titulo: 'La Casa Corallo',
    subtitulo: 'Cómic · K.O Media',
    disciplina: 'Videojuegos y personajes',
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
    embed: 'https://www.behance.net/embed/project/238872661?ilo0=1',
    imagen: null, // ←
    paleta: ['#002b5b', '#ea5455', '#f9f5eb'],
    forma: 'columnas',
  },
  {
    id: 'luckydip',
    titulo: 'Lucky Dip',
    subtitulo: 'Videojuego · K.O Media',
    disciplina: 'Videojuegos y personajes',
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
    embed: 'https://www.behance.net/embed/project/235688649?ilo0=1',
    imagen: null, // ←
    paleta: ['#0a3466', '#f07b3f', '#f9f5eb'],
    forma: 'reticula',
  },
  {
    id: 'find-fih',
    titulo: 'FIND FIH',
    subtitulo: 'Game jam',
    disciplina: 'Videojuegos y personajes',
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
    embed: 'https://www.behance.net/embed/project/238874059?ilo0=1',
    imagen: null, // ←
    paleta: ['#2d4059', '#ea5455', '#f9f5eb'],
    forma: 'flujo',
  },
  {
    id: 'ko-media',
    titulo: 'K.O Media',
    subtitulo: 'Sitio web del estudio',
    disciplina: 'UX y UI',
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
    embed: 'https://www.behance.net/embed/project/238873761?ilo0=1',
    imagen: null, // ←
    paleta: ['#002b5b', '#f07b3f', '#f9f5eb'],
    forma: 'reticula',
  },
  {
    id: 'curacao-sitio',
    titulo: 'La Curaçao',
    subtitulo: 'Sitio corporativo',
    disciplina: 'UX y UI',
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
    // Una carta por sección, capturadas del sitio real. Se abren en abanico
    // con el scroll: la primera de la lista es la que queda al frente.
    baraja: [
      { src: '/img/curacao/home.jpg', titulo: 'Home' },
      { src: '/img/curacao/broadcast.jpg', titulo: 'Broadcast' },
      { src: '/img/curacao/defensa.jpg', titulo: 'Seguridad y Defensa' },
      { src: '/img/curacao/marcas.jpg', titulo: 'Marcas' },
      { src: '/img/curacao/nosotros.jpg', titulo: 'Nosotros' },
      { src: '/img/curacao/soporte.jpg', titulo: 'Soporte' },
    ],
    imagen: null,
    paleta: ['#0d3b66', '#3aa0ff', '#f4f1ea'],
    forma: 'reticula',
  },
  {
    id: 'dr-fabricio',
    titulo: 'Dr. Fabricio Martínez',
    subtitulo: 'Sitio de medicina alternativa',
    disciplina: 'UX y UI',
    anio: '2026', // ←
    rol: 'Diseño y dirección',
    resumen:
      'Un paciente que llega buscando ayuda no quiere leer un folleto: quiere entender en diez segundos si esto es para él y cómo dar el siguiente paso. Todo el sitio está ordenado alrededor de esa decisión.',
    detalles: [
      'La página abre con el problema del paciente, no con los títulos del médico.', // ←
      'Todo el estilo vive centralizado en un solo lugar, no disperso en cada bloque: el próximo cambio toma minutos y no una tarde.',
      'Pensado para que se actualice sin tocar código y sin romper el diseño.', // ←
    ],
    stack: ['Dirección de arte', 'WordPress', 'Elementor', 'CSS'],
    metricas: [],
    enlace: 'https://drfabriciomartinezrojas.com',
    // Vista previa del sitio real, en vivo. No es una captura: no envejece.
    sitio: 'https://drfabriciomartinezrojas.com',
    imagen: null,
    paleta: ['#2b2140', '#c084fc', '#f9f5eb'],
    forma: 'columnas',
  },
]

// Marquesina inferior: se mueve sola y acelera con el scroll.
export const capacidades = [
  'Diseño de personajes',
  'Dirección de arte',
  'Ilustración',
  'Adobe Fresco',
  'Blender',
  'After Effects',
  'Motion graphics',
  'Premiere Pro',
  'DaVinci Resolve',
  'Photoshop',
  'Illustrator',
  'Worldbuilding',
  'IA generativa',
  'Three.js',
  'Diseño web',
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
