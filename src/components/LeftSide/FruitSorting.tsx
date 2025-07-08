import { useFruits } from '@/context/FruitContext'

type FruitSortingProps = {
  numOfFruits?: number
}

export default function FruitSorting({ numOfFruits }: FruitSortingProps) {
  const { sortOption, setSortOption } = useFruits()

  return (
    <div className="mb-4 flex items-center justify-between gap-4 w-full">
      {/* Group By Label + Select */}
      <div className="flex items-center gap-2 flex-1">
        <label htmlFor="groupBy" className="text-sm font-medium text-gray-700 whitespace-nowrap">
          Group by:
        </label>
        <select
          id="groupBy"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value as typeof sortOption)}
          className="border border-gray-300 rounded px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm w-full max-w-xs"
        >
          <option value="None">None</option>
          <option value="family">Family</option>
          <option value="order">Order</option>
          <option value="genus">Genus</option>
        </select>
      </div>

      {/* Optional fruit count display */}
      {typeof numOfFruits === 'number' && (
        <span className="text-sm text-gray-500 whitespace-nowrap">{numOfFruits} fruits</span>
      )}
    </div>
  )
}
