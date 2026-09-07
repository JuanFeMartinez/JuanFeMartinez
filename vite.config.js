import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// En GitHub Pages el sitio puede quedar en un subdirectorio
// (usuario.github.io/portafolio/) o en la raíz (usuario.github.io). El workflow
// de publicación averigua cuál es y lo pasa en BASE_PATH; en local siempre es la
// raíz. Sin esto, en un subdirectorio el sitio carga en blanco porque busca el
// CSS y el JS en la raíz del dominio.
const base = process.env.BASE_PATH ? `${process.env.BASE_PATH.replace(/\/+$/, '')}/` : '/'

export default defineConfig({
  base,
  plugins: [react()],
})
