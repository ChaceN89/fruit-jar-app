/**
 * @file AllFruit.tsx
 * @module AllFruit
 * @desc Main layout component for displaying the fruit list or table, with view toggle and sorting.
 *
 * @features
 * - Displays all fruits using either a list or table view
 * - Toggle between views via `ToggleSwitch`
 * - Integrates sorting controls and loading/error handling
 * - Scrollable content area with responsive layout
 *
 * @author Chace Nielson
 * @created Jul 8, 2025
 * @updated Jul 17, 2025
 */
import { useState } from 'react'
import { useFruits } from '@/context/FruitContext'
import ToggleSwitch from '../ui-elements/ToggleSwitch'

// Left side components
import FruitSorting from './FruitSorting'
import FruitList from './FruitList'
import FruitTable from './FruitTable'
import FruitSearching from './FruitSearching'

export default function AllFruit() {
  // Get fruits data and loading state from context
  const { fruits, loading, error } = useFruits()

  // Local state for view mode - list or table
  const [viewMode, setViewMode] = useState<'List' | 'Table'>('List')

  return (
    <div className="w-full md:w-3/5 p-4 border-r border-gray-200 flex flex-col max-h-[calc(100vh-4rem)]"> {/* 4rem = 64px = your Header height */}
      {/* Header & View Mode Toggle */}
      <div className="mb-2 flex items-center justify-between">
        <h2 className="text-lg font-bold dark:text-white">Fruits</h2>
        <ToggleSwitch
          options={['List', 'Table']}
          selected={viewMode}
          onSelect={(value) => setViewMode(value as 'List' | 'Table')}
        />
      </div>

      {/* Sorting Control */}
      <FruitSorting numOfFruits={fruits.length} />
      <FruitSearching />

      {/* Status & Scrollable List/Table */}
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <>
          <div className="overflow-y-auto flex-1 pr-1 max-h-96 sm:max-h-screen min-w-md rounded border-2 border-black dark:border-white px-1">
            {viewMode === 'List' ? <FruitList /> : <FruitTable />}
          </div>
        </>
      )}
    </div>
  )
}
