import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { FruitProvider } from './context/FruitContext.tsx'
import AppLoading from './context/AppLoading.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FruitProvider>
      <AppLoading />
    </FruitProvider>
  </StrictMode>,
)
