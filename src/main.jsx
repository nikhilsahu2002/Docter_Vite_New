import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './assets/css/bootstrap.min.css'
import './assets/css/style.css'
import './assets/lib/animate/animate.css'
import './assets/lib/animate/animate.min.css'
// import './assets/scss/bootstrap.scss'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
