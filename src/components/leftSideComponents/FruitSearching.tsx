/**
 * @file FruitSearching.tsx
 * @module FruitSearching
 * @desc UI component for searching fruits in the Fruit Jar App.
 *
 * @features
 * - Includes a search input to filter fruits by name
 *
 * @author Chace Nielson
 * @created Jul 17, 2025
 * @updated Jul 17, 2025
 */
import { useFruits } from '@/context/FruitContext'

export default function FruitSearching() {

  // Context for fruits data  sorting options
  const { setSearchTerm, searchTerm } = useFruits()

  return (
    <div className="mb-4 flex items-center justify-between gap-4 w-full">
      {/* Group By Label + Select */}
      <div className="flex items-center gap-2 flex-1">
    
    {/* Input to set the serch term */}
    <input
        type="text"
        placeholder="Search fruits by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded dark:bg-zinc"
        aria-label="Search fruits"
      />
      </div>
    </div>
  )
}