// src/context/FruitContext.tsx
import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

export interface Fruit {
  id: number
  name: string
  family: string
  order: string
  genus: string
  nutritions: {
    calories: number
    fat: number
    sugar: number
    carbohydrates: number
    protein: number
  }
}

interface FruitContextType {
  fruits: Fruit[]
  loading: boolean
  error: string | null
}

const FruitContext = createContext<FruitContextType | undefined>(undefined)

export const FruitProvider = ({ children }: { children: ReactNode }) => {
  const [fruits, setFruits] = useState<Fruit[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchFruits = async () => {
      try {
        const response = await fetch('https://fruity-proxy.vercel.app/api/fruits', {
          headers: {
            'x-api-key': import.meta.env.VITE_FRUIT_API_KEY,
          },
        })
        if (!response.ok) throw new Error(`Error: ${response.status}`)
        const data: Fruit[] = await response.json()
        setFruits(data)
      } catch (err) {
        setError((err as Error).message)
      } finally {
        setLoading(false)
      }
    }

    fetchFruits()
  }, [])

  return (
    <FruitContext.Provider value={{ fruits, loading, error }}>
      {children}
    </FruitContext.Provider>
  )
}

export const useFruits = (): FruitContextType => {
  const context = useContext(FruitContext)
  if (!context) throw new Error('useFruits must be used within a FruitProvider')
  return context
}
