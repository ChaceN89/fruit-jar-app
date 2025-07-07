import { useFruits } from '@/context/FruitContext'

export default function FruitSorting() {
  const { sortOption, setSortOption } = useFruits()

  return (
    <div className="mb-4">
      <label htmlFor="groupBy" className="block text-sm font-medium mb-1">
        Group by:
      </label>
      <select
        id="groupBy"
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value as typeof sortOption)}
        className="border p-2 rounded w-full"
      >
        <option value="None">None</option>
        <option value="family">Family</option>
        <option value="order">Order</option>
        <option value="genus">Genus</option>
      </select>
    </div>
  )
}
