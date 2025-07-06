import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { FruitProvider } from './context/FruitContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FruitProvider>
      <App />
    </FruitProvider>
  </StrictMode>,
)
