---
name: Portafolio de Juan Felipe Martínez Villate
description: Sistema editorial de papel crema y tinta azul, con islas de cine oscuras reservadas para los momentos que importan.
colors:
  papel-crema: "#faf5e6"
  superficie: "#fffdf6"
  superficie-honda: "#f0e8d3"
  tinta-profunda: "#002b5b"
  tinta-suave: "#4a5a70"
  linea: "rgba(0, 43, 91, 0.18)"
  rojo-senal: "#ea5455"
  naranja-acompanante: "#f07b3f"
  rojo-senal-texto: "#b83a3b"
  azul-noche: "#001a3a"
  azul-noche-superficie: "#0a3466"
  azul-noche-superficie-2: "#2d4059"
  azul-noche-fondo-alt: "#002b5b"
  texto-crema: "#f6eeda"
  texto-crema-suave: "#b9c4d4"
typography:
  display:
    fontFamily: "'Outfit', 'Poppins', system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 1rem + 6.2vw, 6rem)"
    fontWeight: 900
    lineHeight: 0.88
    letterSpacing: "-0.035em"
  titulo:
    fontFamily: "'Outfit', 'Poppins', system-ui, sans-serif"
    fontSize: "clamp(1.75rem, 1.1rem + 2.6vw, 3rem)"
    fontWeight: 800
    lineHeight: 0.92
    letterSpacing: "-0.03em"
  body:
    fontFamily: "'Inter', system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "'JetBrains Mono', ui-monospace, 'Cascadia Mono', monospace"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "0.18em"
  label-2xs:
    fontFamily: "'JetBrains Mono', ui-monospace, 'Cascadia Mono', monospace"
    fontSize: "0.6875rem"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "0.08em to 0.14em depending on context"
  numero:
    fontFamily: "'Bodoni Moda', 'Didot', Georgia, serif"
    fontSize: "clamp(4.5rem, 13.5vw, 10.5rem)"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "normal"
rounded:
  pill: "999px"
  sm: "5px"
  md: "8px"
  lg: "12px"
  xl: "14px"
  circle: "50%"
spacing:
  margen: "clamp(1.25rem, 5vw, 5rem)"
  aire: "clamp(6rem, 14vh, 12rem)"
  ancho: "78rem"
components:
  button-primary:
    backgroundColor: "transparent"
    textColor: "{colors.tinta-profunda}"
    typography: "{typography.body}"
    rounded: "{rounded.pill}"
    padding: "0.9rem 1.6rem"
  button-primary-hover:
    backgroundColor: "{colors.tinta-profunda}"
    textColor: "{colors.papel-crema}"
    rounded: "{rounded.pill}"
    padding: "0.9rem 1.6rem"
  tag-pill:
    backgroundColor: "transparent"
    textColor: "{colors.tinta-suave}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0.35rem 0.7rem"
  card-proceso:
    backgroundColor: "{colors.superficie}"
    textColor: "{colors.tinta-profunda}"
    typography: "{typography.body}"
    padding: "clamp(1.75rem, 3vw, 2.5rem)"
  card-visual:
    backgroundColor: "{colors.azul-noche-fondo-alt}"
    textColor: "{colors.texto-crema}"
    rounded: "{rounded.xl}"
---

# Design System: El Cuaderno de Dirección

## Overview

**Creative North Star: "El Cuaderno de Dirección"**

El sitio se lee como el cuaderno de trabajo de un director de arte: papel crema, tinta azul profunda, notas al margen en monoespaciada, y paneles de pantalla incrustados como referencias pegadas encima de la página. Es editorial y preciso — más cerca de una revista de diseño que de una plantilla de portafolio — con un acento cálido que casi nunca aparece y por eso golpea cuando lo hace: la vibración no viene de usar mucho color, viene de guardarlo. Tres islas oscuras (el hero, el bloque de proceso, y cada panel de proyecto) cortan el papel como si la página misma se apagara para dejar que el trabajo brille en pantalla, y solo entonces aparecen sombra, grano de cine y controles de reproductor.

El texto contenido hasta que se activa es la regla de comportamiento: en reposo los botones y píldoras son casi silenciosos — una línea fina de 1px, sin relleno — y al tocarlos el color y el movimiento aparecen de golpe, no gradualmente. Nada decorativo se mueve porque sí: cada micro-interacción (el relleno que sube desde abajo, el guion que crece, la flecha que se corre) tiene un porqué funcional.

Referencias explícitamente descartadas: plantillas genéricas de portafolio, glassmorphism decorativo, dark-mode puro (el sitio es de papel claro con oscuridad reservada, no al revés), y brutalismo ruidoso.

**Key Characteristics:**
- Papel crema cálido con tinta azul de 13:1 de contraste, nunca blanco puro ni negro puro.
- Un acento rojo/naranja que aparece en menos del 10% de cualquier pantalla.
- Tres islas oscuras (hero, proceso, panel de proyecto) que invierten los tokens sin reescribir ninguna regla.
- Numeración de capítulo en una serifa tipo Bodoni, a contorno, como un adorno editorial y no una repetición del titular.
- Grano de impresión (textura de ruido al 2% de opacidad) sobre todo el sitio.
- Componentes contenidos en reposo, expresivos solo al activarse.

## Colors

Paleta de dos mundos: papel claro por defecto, y un azul noche que se activa solo en tres islas. El acento vive casi todo el tiempo fuera de escena.

### Primary
- **Tinta Profunda** (`#002b5b`): el color del texto sobre papel. Da 13:1 de contraste contra el fondo crema, muy por encima del mínimo de 4.5:1. Es también la tinta de fondo de las islas oscuras invertidas (`azul-noche-fondo-alt`).

### Secondary
- **Rojo Señal** (`#ea5455`): "lo que hay que mirar" — subrayados activos, punto final del titular, relleno de botones al activarse, selección de texto. Precioso en grande; sobre crema cae a 3.3:1 y por eso nunca lleva texto pequeño encima sin oscurecerse primero.
- **Naranja Acompañante** (`#f07b3f`): nunca aparece solo — siempre junto al rojo, en degradados de portada o como segundo acento en las islas oscuras.

### Tertiary
- **Rojo Señal Texto** (`#b83a3b`): versión oscurecida del rojo (5.2:1 de contraste) para las pocas veces que el acento tiene que llevar texto legible en tamaño pequeño — etiquetas de disciplina, números de proceso.

### Neutral
- **Papel Crema** (`#faf5e6`): el fondo por defecto de todo el sitio. Cálido a propósito — un blanco puro se sentiría a pantalla, no a papel.
- **Superficie** (`#fffdf6`): casi blanco; tarjetas y bloques ligeramente elevados sobre el papel.
- **Superficie Honda** (`#f0e8d3`): crema más oscura, reservada a estados de hover.
- **Tinta Suave** (`#4a5a70`): azul desaturado para texto secundario y metadatos.
- **Línea** (`rgba(0, 43, 91, 0.18)`): el único borde del sistema. Nunca una sombra decorativa en el papel.
- **Azul Noche** (`#001a3a`) / **Azul Noche Superficie** (`#0a3466`) / **Azul Noche Superficie 2** (`#2d4059`): la escala tonal de las islas oscuras.
- **Texto Crema** (`#f6eeda`) / **Texto Crema Suave** (`#b9c4d4`): texto e ink invertidos dentro de las islas oscuras.

### Named Rules
**La Regla de la Rareza.** El acento (rojo o naranja) ocupa menos del 10% de cualquier pantalla. Su escasez es el punto: si apareciera seguido, dejaría de leerse como una señal.

**La Regla de la Isla.** Una sección oscura nunca reescribe sus propias reglas de componente: solo redefine los tokens de color (`--fondo`, `--superficie`, `--texto`, `--linea`, `--acento-texto`) dentro de su propio scope, y todo lo que vive adentro se adapta solo.

## Typography

**Display Font:** Outfit (con Poppins y system-ui de respaldo)
**Body Font:** Inter (con -apple-system, Segoe UI de respaldo)
**Label/Mono Font:** JetBrains Mono
**Font de acento:** Bodoni Moda — solo para los dígitos de la numeración de capítulo (pedida solo con `text: 0123456789` para no descargar la familia entera)

**Character:** Una geométrica pesada (Outfit) contra una humanista neutra (Inter): el titular grita en peso 900 con tracking cerrado, el cuerpo se queda tranquilo y legible. La Bodoni a contorno es el único gesto clásico en un sistema por lo demás geométrico — un guiño editorial deliberado.

### Hierarchy
- **Display** (900, `clamp(2.5rem, 1rem + 6.2vw, 6rem)` hasta `clamp(3rem, 0.5rem + 10vw, 9.5rem)` en el hero, interlineado 0.88): titulares de sección y el hero. Lleva la clase `.titular-apretado` (tracking −0.035em) — ese apretón es la mitad del carácter; la fuente sola, con espaciado normal, se ve genérica.
- **Título** (800, `clamp(1.75rem, 1.1rem + 2.6vw, 3rem)`, interlineado 0.92): subtítulos de bloque (proceso, presentación).
- **Body** (400, `1rem`, interlineado 1.6): todo el texto corrido; el cuerpo largo de sección usa `--t-l` (`clamp(1.125rem, 0.9rem + 0.9vw, 1.5rem)`) para respirar más.
- **Label** (500, `0.75rem`, tracking 0.14–0.18em, mayúsculas): etiquetas de navegación, disciplinas del índice, `.etiqueta`.
- **Label 2xs** (500, `0.6875rem` — `--t-2xs`, tracking 0.08–0.14em según contexto, mayúsculas): metadatos secundarios — años, créditos de pieza, captions de la baraja, pies de página, botón de reintentar. Es el piso de legibilidad del sistema: nunca menos de 11px. Antes de este token existían tres tamaños sueltos (`0.75rem`, `0.6875rem` y un `0.625rem`/10px por debajo del piso) repetidos sin coordinación en seis archivos; se consolidaron en dos roles con intención — Label y Label 2xs — y el paso de 10px se retiró del sistema.
- **Número** (500, `clamp(4.5rem, 13.5vw, 10.5rem)`, a contorno con `-webkit-text-stroke`): numeración de capítulo únicamente. Nunca sólido — el contorno es lo que lo vuelve adorno y no titular.

### Named Rules
**La Regla del Apretón.** Un titular display sin `.titular-apretado` (peso 900, interlineado 0.88, tracking −0.035em) se lee genérico. El apretón no es un detalle, es la mitad del carácter tipográfico del sistema.

## Layout

Contenedor centrado con ancho máximo de `78rem` (`--ancho`) y margen lateral fluido `clamp(1.25rem, 5vw, 5rem)` (`--margen`). El ritmo vertical entre secciones es el token `--aire` (`clamp(6rem, 14vh, 12rem)`): nunca un valor fijo en píxeles, siempre proporcional a la altura de ventana.

El scroll se mide en JavaScript (hooks propios `useProgreso`, `useRevelar`, `useMagnetico`) y se pinta en CSS vía variables (`--progreso`, `--velocidad`, `--salida`, `--pc`, `--p`): no hay un render de React por píxel de scroll. Cada capítulo de proyecto usa `content-visibility: auto` con `contain-intrinsic-size` para no pintar lo que no está en pantalla.

En escritorio, cada capítulo de proyecto es una reja de dos columnas (`grid-template-columns: 1fr 1fr`) con el panel visual fijo (`position: sticky`) mientras el texto se desplaza al lado; alterna de lado cada capítulo (`.alterno`). Bajo `56rem` colapsa a una columna y el panel deja de ser sticky. La presentación usa una reja retrato+texto (`minmax(12rem, 20rem) 1fr`) que también colapsa a una columna bajo `56rem`.

Responsive: los breakpoints observados son `34rem` (nav compacto en móvil), `40rem` (índice de proyectos sin etiqueta de disciplina), `48rem` (hero, manifiesto), `56rem` (reja de capítulo y presentación).

## Elevation & Depth

Sistema plano por defecto, con sombra reservada a dos contextos: el papel nunca flota. Sobre el fondo claro, la única separación entre superficies es una línea de 1px (`--linea`) o, en la reja de proceso, un borde propio simulado con `box-shadow: 0 0 0 1px var(--linea)` para que las celdas vacías de la reja no se pinten como bloques sueltos.

La sombra real aparece solo donde una isla oscura se convierte en una ventana al trabajo: el panel de proyecto (`.visual`) flota sobre el papel con `box-shadow: 0 30px 60px -30px rgba(0,0,0,0.8)` y se levanta más al hover; la baraja de capturas y la lupa ampliada usan la misma sombra profunda y difusa hacia abajo. Esa es la única jerarquía de elevación del sistema: el papel es la superficie base y no elevable; los paneles de trabajo son las únicas cosas que despegan de ella.

### Shadow Vocabulary
- **Panel flotante** (`box-shadow: 0 1px 0 rgba(249,245,235,0.06) inset, 0 30px 60px -30px rgba(0,0,0,0.8)`): el panel de proyecto en reposo, y más marcado al hover del capítulo.
- **Imagen ampliada** (`box-shadow: 0 40px 80px -40px rgba(0,0,0,0.9)`): la lupa y las cartas de la baraja.

### Named Rules
**La Regla del Papel Plano.** Ninguna superficie sobre el papel crema lleva sombra. Solo las ventanas al trabajo (panel de proyecto, baraja, lupa) tienen permiso de flotar.

## Shapes

Dos lenguajes de forma conviven: la píldora (`border-radius: 999px`) para todo lo interactivo — botones, cápsulas de disciplina, tags de stack, el CTA del hero — y el radio suave (`5px`–`14px`) para contenedores de contenido — miniaturas, cartas de baraja, paneles de proyecto, la reja de proceso. Los círculos perfectos (`50%`) se reservan a marcadores puntuales: el punto de disponibilidad animado, el retrato circular, los botones de navegación de la lupa.

Bordes: siempre 1px, siempre `--linea` (o su equivalente invertido dentro de una isla oscura). Nunca gruesos, nunca de color sólido fuera del estado de hover/activo.

## Components

### Buttons
- **Shape:** píldora completa (`border-radius: 999px`).
- **Primario** (CTA del hero, botón de contacto): en reposo, transparente con borde de 1px `--linea` y texto en `--texto` o `--display` según el contexto — casi silencioso. Al hover, un relleno sólido sube desde abajo (`transform: translateY(101%)` → `translateY(0)`, 0.5–0.55s con `--curva`) y el texto invierte a color de fondo. El relleno nunca hace fade, siempre desliza.
- **Hover/Focus:** el color y el borde cambian junto con el relleno; `:focus-visible` usa el anillo estándar del sistema (`outline: 2px solid var(--acento)`, offset 4px).
- **Secundaria (enlace de capítulo):** subrayado de 1px en `--acento` que crece en `gap` al hover, sin relleno ni fondo.

### Chips / Tags (píldora de disciplina y stack)
- **Estilo:** borde 1px `--linea` o, para la etiqueta de capítulo, `color-mix` del acento al 40% transparencia; texto mono en mayúsculas, tracking 0.14em; sin fondo sólido.
- **Estado:** no tienen estado interactivo — son metadatos de lectura, no controles.

### Cards / Containers
- **Reja de proceso:** esquinas del contenedor a `12px`, celdas individuales sin radio propio (usan la máscara `overflow: hidden` del padre), separadas por líneas de 1px simuladas con `box-shadow`. Fondo `--superficie`, hover a `--superficie-2`.
- **Panel de proyecto (`.visual`):** esquina `14px`, isla oscura con degradado propio, barra superior tipo ventana de navegador (tres puntos + etiqueta mono a la derecha), sombra profunda, se levanta 6px al hover del capítulo.
- **Baraja de capturas:** cartas individuales a `8px` de radio, apiladas en abanico que se abre con el scroll (`--pc`) y se abre más al hover.

### Inputs / Fields
No hay formularios en el sitio actual; el único punto de contacto es un enlace `mailto:` estilizado como botón primario.

### Navigation
- **Estilo:** fija arriba, transparente e invertida (texto crema) mientras flota sobre el hero oscuro; al hacer scroll pasa a `.compacto` — fondo crema translúcido con `backdrop-filter: blur(14px) saturate(1.4)` y borde inferior.
- **Tipografía:** mono, mayúsculas, tracking 0.16em.
- **Estados:** los enlaces llevan un subrayado que crece de derecha a izquierda al hover (`scaleX` con `transform-origin` que cambia de `right` a `left`).
- **Móvil (`<34rem`):** la lista de enlaces se oculta salvo el último (contacto); el nombre se aprieta en vez de partirse en dos líneas.

### Cursor personalizado (componente de firma)
Reemplaza al cursor del sistema solo en punteros finos (`hover: hover` y `pointer: fine`; nunca en táctil). Un punto de 6px en `--acento` más un anillo de 2.5rem que crece a 4rem con blur al pasar sobre elementos "grandes" y a 5.5rem con el acento sólido y texto mono al pasar sobre elementos con etiqueta propia (ej. "Ver"). Todas las transiciones usan `--curva`.

### Panel de proyecto sin medio (composiciones generadas)
Cuando un proyecto no tiene aún imagen o video real, el panel dibuja una composición abstracta en CSS según su `forma` (`reticula`, `flujo`, `columnas`, `capas`), coloreada con la paleta propia del proyecto (`--c1`, `--c2`). Es un placeholder con intención editorial, no un hueco vacío — cada forma sugiere el tipo de proyecto (reticula = sitio de muchas secciones, flujo = sistema con pasos, columnas = landing, capas = piezas apiladas) y se reemplaza sin tocar nada más en cuanto hay una imagen real en `imagen` o `public/img/`.

## Do's and Don'ts

### Do:
- **Do** guardar el acento (rojo/naranja) para menos del 10% de cualquier pantalla — La Regla de la Rareza.
- **Do** invertir tokens dentro de una isla oscura (`--fondo`, `--superficie`, `--texto`, `--linea`, `--acento-texto`) en vez de escribir reglas de color nuevas.
- **Do** usar `.titular-apretado` en cualquier titular display nuevo (peso 900, interlineado 0.88, tracking −0.035em).
- **Do** mantener los botones y píldoras silenciosos en reposo — borde fino, sin relleno — y expresivos solo al activarse.
- **Do** apagar todo movimiento con `prefers-reduced-motion: reduce` y ocultar el cursor propio en pantallas táctiles.
- **Do** usar la composición generada en CSS (`forma`) como placeholder editorial mientras no hay imagen real de un proyecto, nunca un rectángulo gris vacío.

### Don't:
- **Don't** poner sombra decorativa sobre el papel crema — La Regla del Papel Plano. La sombra es solo para paneles de trabajo (proyecto, baraja, lupa).
- **Don't** usar el rojo (`#ea5455`) en texto pequeño sobre crema sin oscurecerlo a `#b83a3b` primero — cae a 3.3:1, por debajo del mínimo legible.
- **Don't** mezclar radios: interactivo es píldora (999px), contenedor de contenido es 5–14px, marcador puntual es círculo (50%). Nada a medio camino.
- **Don't** animar sin una razón funcional — el sistema rechaza el movimiento decorativo; cada transición existe porque comunica algo (dirección, estado, jerarquía).
- **Don't** repetir el recurso de "sección invertida" (isla oscura) más de las tres veces que ya existe (hero, proceso, panel de proyecto): su fuerza depende de ser escaso.
