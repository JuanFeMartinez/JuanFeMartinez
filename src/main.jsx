import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// base.css va antes que App a propósito: App arrastra el CSS de todos los
// componentes, y si la base se carga después, sus reglas genéricas ganan por
// orden de cascada y pisan los ajustes de cada sección. Con .mascara pasaba
// justo eso: su margin-block borraba la separación de los titulares.
import './estilos/base.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
