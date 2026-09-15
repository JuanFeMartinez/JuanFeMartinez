# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Reclutadores y responsables de contratación en estudios, agencias y marcas, y clientes que buscan encargar trabajo freelance. Ambos evalúan si contratar a Juan Felipe Martínez Villate a tiempo completo o por proyecto (`disponibilidad: 'Autónomo y tiempo completo'` en `src/data/perfil.js`).

## Product Purpose

Portafolio de una sola página que muestra el trabajo de dirección de arte, motion, personajes y producto digital de Juan Felipe Martínez Villate, para que quien lo visite decida en minutos si su trabajo encaja con lo que necesita y cómo contactarlo. Éxito = quien lo ve entiende el rango y el criterio detrás del trabajo, y da el siguiente paso (contacto, entrevista, encargo).

## Positioning

Dos rasgos que un portafolio vecino no podría copiar con verdad:

1. **Inventa el mundo primero y lo sostiene después, cuadro por cuadro o pantalla por pantalla** — incluso cuando la herramienta es una inteligencia artificial, también sabe dirigirla.
2. **Cruza disciplinas que normalmente no se juntan en una sola persona**: cómics, videojuegos, motion graphics y frontend/UX bajo el mismo criterio de dirección de arte — y no solo dirige delegando: entiende cada oficio lo bastante de cerca para ejecutarlo y dirigirlo con criterio real, no solo coordinarlo.

## Operating Context

- Sitio de una sola página con scroll cinematográfico (React + Vite, sin librerías de animación — el movimiento es CSS disparado por hooks propios).
- Todo el contenido editorial vive en `src/data/perfil.js`: perfil, presentación, manifiesto, proyectos, capacidades y proceso.
- Publicado en GitHub Pages vía GitHub Actions (`.github/workflows/publicar.yml`) en cada push a `main`; la ruta base se calcula en el build, no a mano.
- Los proyectos se muestran con el primer formato disponible en esta prioridad: `videos` → `imagen` → `baraja` → `sitio` → `embed` → composición generada en CSS según `forma`.

## Capabilities and Constraints

- Ocho proyectos documentados: identidad animada (La Curaçao), contenido para redes (La Curaçao), BASKIAT (diseño de personaje), La Casa Corallo (cómic, K.O Media), Lucky Dip (videojuego, K.O Media), FIND FIH (game jam), sitio de K.O Media, sitio de La Curaçao, sitio del Dr. Fabricio Martínez.
- Stack de herramientas ya declarado por proyecto: After Effects, Illustrator, Premiere Pro, DaVinci Resolve, CapCut, Captions, Fresco, Photoshop, Blender, Figma, Three.js, WordPress/Elementor.
- Cada efecto de movimiento se apaga con `prefers-reduced-motion: reduce`; el cursor propio no se monta en pantallas táctiles.
- Terminología del código está en español (`perfil`, `proyectos`, `proceso`, `capacidades`); mantener consistencia de idioma en contenido nuevo salvo que se pida lo contrario.

## Brand Commitments

- Nombre real y redes confirmados: Behance, correo (`juanfemvc@gmail.com`), LinkedIn, Instagram — ya resueltos en `perfil.js` (el README los listaba como pendientes; ya no lo están).
- Ciudad confirmada: Bogotá, Colombia.
- Sistema tipográfico de tres familias ya fijado: `--display` Outfit (400–900) para titulares, `--texto` Inter para cuerpo, `--mono` JetBrains Mono para etiquetas/años/metadatos, más Bodoni Moda solo para dígitos en la numeración de capítulos.
- Avatar como favicon/ícono ya resuelto (commit "El avatar como icono de la pagina").

## Evidence on Hand

- Contenido real de proyectos ya escrito para los ocho proyectos, con textos marcados `←` en `perfil.js` como suposiciones del asistente original pendientes de que el usuario las confirme o corrija (años, detalles de rol, stack de algunos proyectos).
- Video real disponible para "Identidad en movimiento" (cuatro piezas con poster).
- Capturas tipo baraja referenciadas para La Curaçao (6) y Dr. Fabricio Martínez (4), pero varios proyectos aún tienen `imagen: null` y dependen de la composición generada por CSS (`forma`) hasta que se suban fotos/capturas reales a `public/img/`.
- No hay testimonios, casos de estudio de terceros, métricas de negocio, ni certificaciones — no inventar ninguno de estos.

## Product Principles

1. El criterio de dirección de arte es transversal: la misma decisión de jerarquía visual aplica en cómic, videojuego, motion y producto digital — no tratar cada disciplina como un portafolio aparte.
2. Mostrar rango sin diluir el foco: ocho proyectos de cuatro disciplinas distintas, pero todos bajo un solo sistema visual coherente (tokens de `base.css`).
3. El movimiento tiene que estar justificado y ser accesible: se apaga con `prefers-reduced-motion`, y nunca reemplaza la jerarquía, solo la refuerza.
4. La IA es una herramienta que se dirige, no un atajo que se esconde — cuando aparece en el flujo de trabajo (Captions, generación asistida), se declara con la misma franqueza que cualquier otra herramienta.
5. Nada se inventa: métricas, testimonios o evidencia que no exista en el código o que el usuario no confirme quedan fuera, incluso si el hueco visual tienta a rellenarlo.
