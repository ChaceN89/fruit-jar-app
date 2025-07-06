/**
 * @file FruitList.tsx
 * @module FruitList
 * @desc Component that renders the left-hand side of the app showing a list of available fruits.
 *
 * @author Chace Nielson
 * @created Jul 4, 2025
 * @updated Jul 6, 2025
 */

import { useState } from 'react'
import { useFruits } from '@/context/FruitContext'
import ToggleSwitch from '../ui-elements/ToggleSwitch'

export default function AllFruit() {
  const { fruits, loading, error } = useFruits()
  const [viewMode, setViewMode] = useState<'List' | 'Table'>('List')

  return (
    <div className="w-full md:w-3/5 p-4 border-r border-gray-200 overflow-y-auto">

      {/* Toggle between List and Table */}
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-medium">Fruit List</h2>
        <ToggleSwitch
          options={['List', 'Table']}
          selected={viewMode}
          onSelect={(value) => setViewMode(value as 'List' | 'Table')}
        />
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <>
          <p>{fruits.length} fruits loaded ✅</p>

          {viewMode === 'List' ? (
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
          ) : (
            <table className="mt-4 w-full text-left border border-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-2">Name</th>
                  <th className="p-2">Calories</th>
                  <th className="p-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {fruits.map((fruit) => (
                  <tr key={fruit.id} className="border-t">
                    <td className="p-2">{fruit.name}</td>
                    <td className="p-2">{fruit.nutritions.calories}</td>
                    <td className="p-2">
                      <button className="px-3 py-1 bg-teal-500 text-white rounded hover:bg-teal-600 transition">
                        Add
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </>
      )}
    </div>
  )
}
