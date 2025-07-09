/**
 * @file AppLoading.tsx
 * @module AppLoading
 * @desc Displays a splash screen while app data is loading, then transitions into the main app.
 *
 * @features
 * - Shows animated splash screen while global fruit data loads
 * - Adds fade-out transition effect on load complete
 * - Prevents flashing by deferring app render until splash completes
 *
 * @author Chace Nielson
 * @created Jul 8, 2025
 * @updated Jul 8, 2025
 */
import { useEffect, useState } from 'react'
import SplashScreen from '@/components/ui-elements/SplashScreen'
import { useFruits } from '@/context/FruitContext'
import App from '@/App'

export default function AppLoading() {
  const { loading } = useFruits()

  const [removeSplash, setRemoveSplash] = useState(false)
  const [showSplash, setShowSplash] = useState(true)

  // ONly finished if the data fetching is done
  useEffect(() => {
    if (!loading) {
      // add a small buffer before fade out
      setTimeout(() => setRemoveSplash(true), 500)
      setTimeout(() => {
        setShowSplash(false)
      }, 1500) // 1s fade animation
    }
  }, [loading]) 

  // If loading is true, show splash screen else the app is ready in the background
  return (
    <>
      {showSplash && <SplashScreen transitionOut={removeSplash} />}
      <App />
    </>
  )
}
