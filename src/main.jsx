import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Pattern from './Pattern.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Pattern />
  </StrictMode>,
)
