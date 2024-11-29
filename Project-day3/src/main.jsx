import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Index from './componet/Index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Index/>
  </StrictMode>,
)
