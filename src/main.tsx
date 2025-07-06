/**
 * @file index.tsx
 * @module MainEntry
 * @desc Entry point of the Fruit Jar App. Initializes the React app and wraps it in the FruitProvider context.
 *
 * @author Chace Nielson
 * @created Jul 6, 2025
 * @updated Jul 6, 2025
 */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { FruitProvider } from './context/FruitContext.tsx' // data provider for fruit data and jar management
import AppLoading from './context/AppLoading.tsx' // loading system to display a splash screen while fetching data
import './index.css' // global styles

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FruitProvider>
      <AppLoading />
    </FruitProvider>
  </StrictMode>,
)
