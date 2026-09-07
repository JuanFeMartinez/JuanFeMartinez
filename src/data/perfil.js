// ---------------------------------------------------------------------------
// ÚNICO ARCHIVO QUE NECESITAS EDITAR PARA CAMBIAR EL CONTENIDO DEL PORTAFOLIO.
// Los textos de abajo son un primer borrador armado con lo que se sabe de tus
// proyectos: corrígelos, son tuyos. Todo lo marcado con ← es una suposición.
// ---------------------------------------------------------------------------

export const perfil = {
  nombre: 'JuanFe Martínez', // ← sacado del nombre de tu repo; corrígelo si va completo
  rol: 'Diseño y desarrollo digital',
  ubicacion: 'Bucaramanga, Colombia', // ←
  correo: 'redessociales@curacao.com.co',
  disponible: true,

  // El titular del hero se parte en líneas: cada línea se revela por separado.
  titular: ['Construyo sitios', 'que la gente', 'sí quiere usar'],
  entrada:
    'Diseño, código y contenido en el mismo par de manos. Desde el sitio corporativo de una marca hasta el sistema interno que nadie ve pero todos usan.',

  redes: [
    { nombre: 'Correo', url: 'mailto:redessociales@curacao.com.co' },
    { nombre: 'LinkedIn', url: '#' }, // ←
    { nombre: 'Instagram', url: '#' }, // ←
  ],
}

// Manifiesto: se ilumina palabra por palabra mientras haces scroll.
export const manifiesto =
  'Trabajo en el punto donde el diseño deja de ser una *imagen bonita* y se vuelve algo que *funciona*. Escribo el código, hago las piezas, ordeno los procesos. Sin plantillas compradas, sin dependencias que nadie entiende, sin entregar algo que no pueda *mantener yo mismo* seis meses después.'

// Cada proyecto es un capítulo del scroll. El orden aquí es el orden en pantalla.
export const proyectos = [
  {
    id: 'curacao-sitio',
    titulo: 'La Curaçao',
    subtitulo: 'Sitio corporativo',
    anio: '2026',
    rol: 'Diseño + desarrollo',
    resumen:
      'Sitio multipágina para una compañía con varias líneas de negocio: marcas, broadcast, seguridad y defensa, nuevos negocios y soporte. Cada sección con su propia identidad, todas sostenidas por un sistema de estilos común.',
    detalles: [
      'Ocho secciones bajo un solo sistema de estilos global, sin framework ni paso de build.',
      'Versión en inglés como páginas estáticas reales generadas por script, no traducción del navegador: mejor SEO y control total del texto.',
      'Servidor local propio en PowerShell para previsualizar sin instalar nada.',
    ],
    stack: ['HTML', 'CSS', 'JavaScript', 'PowerShell'],
    metricas: [
      { valor: '8', etiqueta: 'secciones' },
      { valor: '2', etiqueta: 'idiomas' },
      { valor: '0', etiqueta: 'dependencias' },
    ],
    enlace: null, // pon aquí la URL pública cuando esté
    imagen: null, // ej: '/img/curacao.jpg' — si la pones, reemplaza la visual generada
    paleta: ['#0d3b66', '#3aa0ff', '#f4f1ea'],
    forma: 'reticula',
  },
  {
    id: 'ordenes-servicio',
    titulo: 'Órdenes de servicio',
    subtitulo: 'Sistema interno + portal público',
    anio: '2026',
    rol: 'Arquitectura + desarrollo',
    resumen:
      'El sistema que ordena la operación diaria: se crean, asignan y siguen órdenes de servicio. Partido a propósito en dos proyectos separados para que el portal público de seguimiento nunca toque la data interna.',
    detalles: [
      'Dos proyectos independientes en lugar de uno: la separación es la medida de seguridad, no un permiso mal puesto.',
      'El cliente consulta el estado de su orden desde un enlace público sin ver nada más.',
      'Corre sobre la infraestructura que la empresa ya paga: Google Workspace, cero servidores nuevos.',
    ],
    stack: ['Google Apps Script', 'Sheets', 'HTML Service'],
    metricas: [
      { valor: '2', etiqueta: 'proyectos aislados' },
      { valor: '0', etiqueta: 'servidores' },
    ],
    enlace: null,
    imagen: null,
    paleta: ['#1b3a2f', '#4ade80', '#f4f1ea'],
    forma: 'flujo',
  },
  {
    id: 'dr-fabricio',
    titulo: 'Dr. Fabricio Martínez',
    subtitulo: 'Landing médica',
    anio: '2026',
    rol: 'Rediseño + implementación',
    resumen:
      'Rediseño completo de la landing de un especialista médico. El reto no era visual sino estructural: dejar el sitio en un estado donde el próximo cambio tome minutos y no una tarde.',
    detalles: [
      'Todo el estilo centralizado en el CSS del Personalizador, no disperso en estilos por widget.',
      'Sistema de variables para espaciado y layout, reutilizable en cada sección nueva.',
      'Construido para que alguien sin conocimientos de código pueda actualizar el contenido sin romper el diseño.',
    ],
    stack: ['WordPress', 'Elementor', 'CSS'],
    metricas: [
      { valor: '1', etiqueta: 'fuente de estilo' },
    ],
    enlace: 'https://drfabriciomartinezrojas.com',
    imagen: null,
    paleta: ['#2b2140', '#c084fc', '#f4f1ea'],
    forma: 'columnas',
  },
  {
    id: 'contenido',
    titulo: 'Contenido digital',
    subtitulo: 'Redes sociales · La Curaçao',
    anio: '2025 — hoy', // ←
    rol: 'Dirección de contenido',
    resumen:
      'Producción continua de piezas para redes: carruseles, video y campañas. El trabajo menos visible en un portafolio y el que más constancia exige.',
    detalles: [
      'Piezas semanales con un criterio visual sostenido en el tiempo.', // ←
      'Del guion a la pieza final: escritura, diseño y edición.', // ←
    ],
    stack: ['Diseño', 'Video', 'Copy'], // ←
    metricas: [],
    enlace: null,
    imagen: null,
    paleta: ['#3d1f1f', '#ff8a5b', '#f4f1ea'],
    forma: 'capas',
  },
]

// Marquesina inferior: se mueve sola y acelera con el scroll.
export const capacidades = [
  'HTML semántico',
  'CSS moderno',
  'JavaScript',
  'React',
  'Google Apps Script',
  'WordPress',
  'Diseño de interfaz',
  'Sistemas de diseño',
  'Accesibilidad',
  'SEO técnico',
  'Automatización',
  'Dirección de contenido',
]

// Bloques de "cómo trabajo".
export const proceso = [
  {
    titulo: 'Entender antes de abrir el editor',
    texto:
      'La mitad de los problemas de un sitio no son de diseño: son de que nadie definió qué tenía que pasar ahí. Empiezo por ahí.',
  },
  {
    titulo: 'Construir sin deuda',
    texto:
      'Cero dependencias que no pueda explicar. Si el proyecto va a vivir años, tiene que poder mantenerse sin arqueología.',
  },
  {
    titulo: 'Entregar algo vivo',
    texto:
      'Un sitio no se termina el día que se publica. Lo dejo documentado y con las herramientas para seguirlo moviendo.',
  },
]
