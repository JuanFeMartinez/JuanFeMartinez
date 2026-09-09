import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// En GitHub Pages el sitio puede quedar en un subdirectorio
// (usuario.github.io/portafolio/) o en la raíz (usuario.github.io). El workflow
// de publicación averigua cuál es y lo pasa en BASE_PATH; en local siempre es la
// raíz. Sin esto, en un subdirectorio el sitio carga en blanco porque busca el
// CSS y el JS en la raíz del dominio.
const base = process.env.BASE_PATH ? `${process.env.BASE_PATH.replace(/\/+$/, '')}/` : '/'

// La dirección completa del sitio, que el workflow también averigua. Hace falta
// porque las etiquetas para compartir en redes tienen que llevar direcciones
// absolutas: las redes leen la etiqueta desde su propio servidor y una ruta
// relativa no les dice nada.
const sitio = (process.env.SITE_URL || 'http://localhost:5173').replace(/\/+$/, '')

/**
 * Escribe esa dirección dentro del index en cada build. Antes iba a mano en el
 * HTML, y era lo único del proyecto que no se adaptaba solo: al renombrar el
 * repositorio, la tarjeta para compartir seguía apuntando a la dirección vieja.
 */
const direccionDelSitio = () => ({
  name: 'direccion-del-sitio',
  transformIndexHtml: (html) => html.replaceAll('__SITIO__', sitio),
})

export default defineConfig({
  base,
  plugins: [react(), direccionDelSitio()],
})
