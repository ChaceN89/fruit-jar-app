/**
 * @file FruitList.tsx
 * @module FruitList
 * @desc Component that renders the left-hand side of the app showing a list of available fruits.
 *
 * @author Chace Nielson
 * @created Jul 4, 2025
 * @updated Jul 4, 2025
 */



// This component should be using a list - as it is now 
// but an option to sort as a table

import { type JSX } from 'react'
import { useFruits } from '@/context/FruitContext'

export default function AllFruit(): JSX.Element {
  const { fruits, loading, error } = useFruits()

  return (
    <div className="w-full md:w-3/5 p-4 border-r border-gray-200 overflow-y-auto">
      <h2 className="text-lg font-medium mb-4">Fruit List</h2>

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <>
          <p>{fruits.length} fruits loaded ✅</p>
          <ul className="mt-4 space-y-2">
            {fruits.map((fruit) => (
              <li
                key={fruit.id}
                className="flex items-center justify-between p-2 border border-gray-200 rounded"
              >
                <span>
                  {fruit.name} ({fruit.nutritions.calories} cal)
                </span>
                <button className="ml-4 px-3 py-1 bg-teal-500 text-white rounded hover:bg-teal-600 transition">
                  Add
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  )
}
