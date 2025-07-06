/**
 * @file FruitContext.tsx
 * @module FruitContext
 * @desc React context for managing fruit data and the fruit jar state in the Fruit Jar App.
 *
 * @features
 * - Fetches fruit data from the external API with API key support.
 * - Manages global loading and error state for data fetching.
 * - Tracks user-selected "jar fruits" with add and remove functions. (User can add fruits to a jar and remove them.)
 * - Provides a typed hook (`useFruits`) for context access.
 *
 * @author Chace Nielson
 * @created Jul 6, 2025
 * @updated Jul 6, 2025
 */
// src/context/FruitContext.tsx
import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

// Fruit data structure based on the API response
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

// Context type for other components accessing the context data
interface FruitContextType {
  fruits: Fruit[]
  jarFruits: Fruit[]
  addToJar: (fruit: Fruit) => void
  removeFromJar: (fruitId: number) => void
  loading: boolean
  error: string | null
}

const FruitContext = createContext<FruitContextType | undefined>(undefined)

export const FruitProvider = ({ children }: { children: ReactNode }) => {
  // Getting all fruits from the API
  const [fruits, setFruits] = useState<Fruit[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // For sorting the frutis in the jar 
  const [jarFruits, setJarFruits] = useState<Fruit[]>([])

  useEffect(() => {
    const fetchFruits = async () => {
      try {
        const response = await fetch(import.meta.env.VITE_API_PATH, {
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


  // Add a fruit to the jar (preserving previous contents)
  const addToJar = (fruit: Fruit) => {
    setJarFruits((prev) => [...prev, fruit])
  }

  // Remove a fruit from the jar by its unique ID
  //to remove a specific fruit from the jar list
  const removeFromJar = (fruitId: number) => {
    setJarFruits((prev) => prev.filter((fruit) => fruit.id !== fruitId))
  }

  return (
    <FruitContext.Provider value={{ fruits, jarFruits, addToJar, removeFromJar, loading, error }}>
      {children}
    </FruitContext.Provider>
  )
}

export const useFruits = (): FruitContextType => {
  const context = useContext(FruitContext)
  if (!context) throw new Error('useFruits must be used within a FruitProvider')
  return context
}