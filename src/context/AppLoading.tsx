import { useEffect, useState } from 'react'
import SplashScreen from '@/components/SplashScreen'
import { useFruits } from '@/context/FruitContext'
import App from '@/App'

export default function AppLoading() {
  const { loading } = useFruits()

  const [removeSplash, setRemoveSplash] = useState(false)
  const [showSplash, setShowSplash] = useState(true)

  useEffect(() => {
    if (!loading) {
      // add a small buffer before fade out
      setTimeout(() => setRemoveSplash(true), 500)
      setTimeout(() => {
        setShowSplash(false)
      }, 1500) // 1s fade animation
    }
  }, [loading])


  return (
    <>
      {showSplash && <SplashScreen transitionOut={removeSplash} />}
      <App />
    </>
  )
}
