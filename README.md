# Portafolio interactivo

Sitio de una sola página con scroll cinematográfico. React + Vite, sin librerías
de animación: todo el movimiento es CSS disparado por unos pocos hooks propios.

## Correrlo

```bash
npm run dev      # desarrollo en http://localhost:5173
npm run build    # versión de producción en dist/
npm run preview  # revisar dist/ antes de publicar
```

## Qué editar

Casi todo el contenido vive en **`src/data/perfil.js`**: nombre, titular, textos,
proyectos, capacidades y proceso. Los sitios se ven distintos cambiando solo ese
archivo. Lo marcado con `←` es una suposición mía que deberías corregir.

Pendientes obvios:

- [ ] Tu nombre real (también en `index.html`, título y meta descripción).
- [ ] URLs de LinkedIn e Instagram.
- [ ] Revisar los textos de los cuatro proyectos.
- [ ] Confirmar la ciudad.

### Imágenes de proyectos

Mientras no haya capturas, cada proyecto se dibuja con CSS a partir de su
`paleta` y su `forma` (`reticula`, `flujo`, `columnas`, `capas`). En cuanto
pongas una imagen en `public/img/` y la referencies así:

```js
imagen: '/img/curacao.jpg',
```

esa composición se reemplaza por la foto real, sin tocar nada más.

## Cómo está armado

```
src/
  data/perfil.js        todo el contenido
  estilos/base.css      tokens de color, tipografía y utilidades compartidas
  hooks/
    useProgreso.js      escribe --progreso y --velocidad en :root
    useRevelar.js       enciende las animaciones de entrada al aparecer en pantalla
    useMagnetico.js     elementos que se inclinan hacia el cursor
  componentes/          una carpeta plana, cada componente con su CSS al lado
```

La idea de fondo: **el scroll se mide en JavaScript y se pinta en CSS**. Los
hooks escriben variables (`--progreso`, `--velocidad`, `--salida`, `--pc`, `--p`)
y las hojas de estilo hacen el resto, así no hay un render de React por cada
píxel de scroll.

Cada efecto se apaga solo con `prefers-reduced-motion: reduce`, y el cursor
propio no se monta en pantallas táctiles.

## Tipografía

Tres familias, todas desde Google Fonts (el link está en `index.html`):

| Rol | Familia | Dónde se usa |
|---|---|---|
| `--display` | **Outfit** (400–900) | titulares, nombres de proyecto, manifiesto |
| `--texto` | **Inter** | todo el texto corrido |
| `--mono` | **JetBrains Mono** | etiquetas, años, metadatos |

Los titulares grandes llevan la clase `.titular-apretado`: peso 900,
interlineado 0.88 y tracking −0.035em. Ese apretón es la mitad del carácter;
la fuente sola, con espaciado normal, se ve genérica.

Cambiar de familia display son dos líneas: la del link en `index.html` y el
token `--display` en `src/estilos/base.css`. Un par de tamaños quedan
calibrados al ancho de la fuente actual (hay un comentario en `Hero.css` con
la cuenta), así que si cambias a una más ancha, revisa que el titular siga
entrando en tres líneas.

### Usar una fuente comprada

Para una familia comercial (Gafter, por ejemplo), no hay link de Google: se
auto-hospeda. Pon el `.woff2` en `public/fuentes/` y agrega esto al principio
de `src/estilos/base.css`:

```css
@font-face {
  font-family: 'Gafter';
  src: url('/fuentes/gafter.woff2') format('woff2');
  font-weight: 400 900;
  font-display: swap;
}
```

Y en `:root`, `--display: 'Gafter', 'Outfit', sans-serif;`. Outfit queda de
respaldo mientras carga o si el archivo falla.
## Publicarlo

Está montado sobre **GitHub Pages**: cada `git push` a `main` dispara el
workflow de `.github/workflows/publicar.yml`, que construye el sitio y lo
despliega. No hay que subir la carpeta `dist/` a mano — de hecho está
ignorada por git a propósito.

La primera vez:

1. Crear el repositorio vacío en github.com (sin README, sin .gitignore).
2. Conectarlo y subir:

   ```bash
   git remote add origin https://github.com/USUARIO/REPO.git
   git push -u origin main
   ```

3. En el repo: **Settings → Pages → Source: GitHub Actions**. Este paso es
   el que más se olvida; sin él el workflow corre pero no publica nada.
4. Esperar ~1 minuto. La URL aparece en la pestaña **Actions**.

La ruta base se resuelve sola: el workflow detecta si el sitio vive en la raíz
(`usuario.github.io`) o en un subdirectorio (`usuario.github.io/repo/`) y se
lo pasa a Vite en `BASE_PATH`. Por eso `vite.config.js` no tiene la ruta
escrita a mano: funciona igual en los dos casos.

### Otro hosting

`npm run build` deja todo en `dist/`, que es HTML, CSS y JS estáticos. Sirve
igual en Netlify, Vercel o el hosting donde ya tienes otros sitios: se arrastra
la carpeta y listo.
