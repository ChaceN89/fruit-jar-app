/**
 * @file FruitContext.tsx
 * @module FruitContext
 * @desc React context for managing fruit data and the fruit jar state in the Fruit Jar App.
 *
 * @features
 * - Fetches fruit data from the external API with API key support.
 * - Manages global loading and error state for data fetching.
 * - Tracks user-selected "jar fruits" with add and remove functions.
 * - Provides a typed hook (`useFruits`) for context access.
 * - Supports dynamic sorting via `sortOption` and `sortedFruits`.
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

// Options for sorting the fruit list from the API
type SortOption = 'None' | 'family' | 'order' | 'genus'

// Type for the sorted fruits, which will be a record of arrays of fruits grouped by the sort option
type GroupedFruitMap = Record<string, Fruit[]>

// returns the type for the context that will be used in the app - made up of values and functions
interface FruitContextType {
  fruits: Fruit[]
  sortedFruits: GroupedFruitMap
  sortOption: SortOption
  setSortOption: (option: SortOption) => void
  jarFruits: Fruit[]
  addToJar: (fruit: Fruit) => void
  removeFromJar: (fruit: Fruit) => void
  emptyJar: () => void
  selectedFruit: Fruit | null
  setSelectedFruit: (fruit: Fruit | null) => void
  loading: boolean
  error: string | null
}

// Create the context with an initial value of undefined
const FruitContext = createContext<FruitContextType | undefined>(undefined)

// Provider component to wrap the app and provide fruit data
export const FruitProvider = ({ children }: { children: ReactNode }) => {

  // Fruits fetched from the API
  const [fruits, setFruits] = useState<Fruit[]>([])

  // Fruits added to the jar by the user
  const [jarFruits, setJarFruits] = useState<Fruit[]>([])

  // Single selected fruit when a user clicks on a fruit in the table
  const [selectedFruit, setSelectedFruit] = useState<Fruit | null>(null)
  
  // Sorting Options for the main list of fruit - a record of fruits that will be used for sorting
  const [sortOption, setSortOption] = useState<SortOption>('None')
  type GroupedFruitMap = Record<string, Fruit[]>
  const [sortedFruits, setSortedFruits] = useState<GroupedFruitMap>({ 'All Fruits': [] })

  // State to manage loading and error states
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Fetch fruits from the API when the component mounts using the API path and key
  useEffect(() => {
    fetchFruits() // call the fetch function to get the fruits data
  }, [])

  // Effect to sort the fruits whenever the sort option changes or when the fruits list is updated
  useEffect(() => {
    if (sortOption === 'None') {
      setSortedFruits({ 'All Fruits': fruits })
    } else {
      setSortedFruits(groupFruitsBy(fruits, sortOption))
    }
  }, [sortOption, fruits])


  // ------ Helper Functions ------

  // Function to group fruits by a specified key (family, order, or genus)
  //Returns the group 
  function groupFruitsBy<T extends 'family' | 'order' | 'genus'>(
    fruits: Fruit[],
    key: T
  ): Record<string, Fruit[]> {
    return fruits.reduce((groups, fruit) => {
      const groupKey = fruit[key]
      if (!groups[groupKey]) groups[groupKey] = []
      groups[groupKey].push(fruit)
      return groups
    }, {} as Record<string, Fruit[]>)
  }


  // Function to fetch fruits from the API
  const fetchFruits = async () => {
    try {
      const response = await fetch(import.meta.env.VITE_API_PATH, {
        headers: {
          'x-api-key': import.meta.env.VITE_FRUIT_API_KEY,
        },
      })
      if (!response.ok) throw new Error(`Error: ${response.status}`)
      const data: Fruit[] = await response.json()
      
      // Set the fruits list - all the fruits and the list that will be used for sorting to display a subset of the fruits
      setFruits(data)
      setSortedFruits({ 'All Fruits': data })

    } catch (err) { 
      // Set an error message if the fetch fails
      setError((err as Error).message)
    } finally {
      // Loading is complete regardless of success or failure
      setLoading(false)
    }
  }


  // Function to add a fruit to the jar
  const addToJar = (fruit: Fruit) => {
    setJarFruits((prev) => [...prev, fruit])
  }

  // Remove a specific fruit from the jar by reference (not ID)
  const removeFromJar = (fruit: Fruit) => {
    setJarFruits((prev) => {
      const index = prev.findIndex((f) => f === fruit)
      if (index === -1) return prev // not found

      // Remove the item at that index (only one instance)
      return [...prev.slice(0, index), ...prev.slice(index + 1)]
    })
  }

  const emptyJar = () => {
    setJarFruits([])
  }



  return (
    <FruitContext.Provider
      value={{
        fruits,
        sortedFruits,
        sortOption,
        setSortOption,
        jarFruits,
        addToJar,
        removeFromJar,
        emptyJar,
        selectedFruit,
        setSelectedFruit,
        loading,
        error,
      }}
    >
      {children}
    </FruitContext.Provider>
  )
}

export const useFruits = (): FruitContextType => {
  const context = useContext(FruitContext)
  if (!context) throw new Error('useFruits must be used within a FruitProvider')
  return context
}
