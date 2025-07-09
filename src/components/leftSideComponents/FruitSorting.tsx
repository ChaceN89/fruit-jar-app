/**
 * @file FruitSorting.tsx
 * @module FruitSorting
 * @desc UI component for selecting a grouping option to sort fruits in the Fruit Jar App.
 *
 * @features
 * - Allows grouping fruits by family, order, or genus
 * - Supports "None" to show ungrouped list
 * - Displays optional fruit count
 * - Updates sorting option via context
 *
 * @author Chace Nielson
 * @created Jul 8, 2025
 * @updated Jul 8, 2025
 */
import { useFruits } from '@/context/FruitContext'

// Props
type FruitSortingProps = {
  numOfFruits?: number
}

export default function FruitSorting({ numOfFruits }: FruitSortingProps) {

  // Context for fruits data  sorting options
  const { sortOption, setSortOption } = useFruits()

  return (
    <div className="mb-4 flex items-center justify-between gap-4 w-full">
      {/* Group By Label + Select */}
      <div className="flex items-center gap-2 flex-1">
        <label htmlFor="groupBy" className="text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
          Group by:
        </label>
        <select
          id="groupBy"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value as typeof sortOption)}
          className="border border-gray-300 rounded px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm w-full max-w-sm dark:text-gray-200"
        >
          <option value="None">None</option>
          <option value="family">Family</option>
          <option value="order">Order</option>
          <option value="genus">Genus</option>
        </select>
      </div>

      {/* Optional fruit count display */}
      {typeof numOfFruits === 'number' && (
        <span className="text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">{numOfFruits} fruits</span>
      )}
    </div>
  )
}
