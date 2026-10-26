/**
 * Antepone la ruta base del sitio a las rutas absolutas de perfil.js.
 *
 * Vite reescribe solo las rutas que pasan por un import o por un url() de CSS;
 * las que van escritas como texto en los datos las deja intactas. Cuando el
 * sitio se publica en un subdirectorio, '/video/x.mp4' apunta a la raíz del
 * dominio, donde no hay nada. En local no se nota, porque ahí la base es la
 * raíz: por eso este fallo solo aparecía en producción.
 */
export const conBase = (ruta) =>
  ruta?.startsWith('/') ? import.meta.env.BASE_URL.replace(/\/$/, '') + ruta : ruta
