import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HeroesApp } from './HeroesApp'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'animate.css';
import './index.css'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter future={{
      v7_relativeSplatPath: true,
      v7_startTransition: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      }}
      >
      <HeroesApp />
    </BrowserRouter>
  </StrictMode>,
)
