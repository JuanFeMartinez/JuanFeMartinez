import { useProgreso } from './hooks/useProgreso'
import { useRevelar } from './hooks/useRevelar'
import { BarraProgreso } from './componentes/BarraProgreso'
import { Contacto } from './componentes/Contacto'
import { Cursor } from './componentes/Cursor'
import { FiltroAvatar } from './componentes/FiltroAvatar'
import { Grano } from './componentes/Grano'
import { Hero } from './componentes/Hero'
import { Manifiesto } from './componentes/Manifiesto'
import { Marquesina } from './componentes/Marquesina'
import { Nav } from './componentes/Nav'
import { Presentacion } from './componentes/Presentacion'
import { Proceso } from './componentes/Proceso'
import { Proyectos } from './componentes/Proyectos'

export default function App() {
  useProgreso() // escribe --progreso y --velocidad en :root
  useRevelar() // enciende las animaciones de entrada

  return (
    <>
      <FiltroAvatar />
      <Grano />
      <BarraProgreso />
      <Cursor />
      <Nav />

      <main>
        <Hero />
        <Marquesina />
        <Manifiesto />
        <Proyectos />
        <Presentacion />
        <Proceso />
        <Contacto />
      </main>
    </>
  )
}
