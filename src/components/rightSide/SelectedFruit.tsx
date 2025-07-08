import { useFruits } from '@/context/FruitContext'
import { getFruitIconPath } from '@/utils/utils'

export default function SelectedFruit() {
  const { selectedFruit } = useFruits()

  if (!selectedFruit) {
    return (
      <div className="text-gray-500 italic mt-4 text-center">
        No fruit selected (hover on a fruit to see details)
      </div>
    )
  }

  const { name, family, order, genus, nutritions } = selectedFruit
  const iconPath = getFruitIconPath(name)

  return (
    <div className="mt-6 bg-white dark:bg-zinc-800 border-2 brder-zinc-800 dark:border-white  rounded-lg p-5 w-full mx-auto text-sm flex flex-col items-center text-center shadow-md dark:shadow-white">
      {/* Header */}
      <div className="flex flex-col items-center gap-2 mb-4">
        <h2 className="text-2xl font-semibold dark:text-white">{name}</h2>
        {iconPath && (
          <img
            src={iconPath}
            alt={name}
            className="w-14 h-14 object-contain"
          />
        )}
      </div>

      {/* Details */}
      <div className="space-y-1 text-zinc-700 dark:text-zinc-100 text-left">
        <p><strong>Family:</strong> {family}</p>
        <p><strong>Order:</strong> {order}</p>
        <p><strong>Genus:</strong> {genus}</p>
        <p><strong>Calories:</strong> {nutritions.calories}</p>
        <p><strong>Fat:</strong> {nutritions.fat} g</p>
        <p><strong>Sugar:</strong> {nutritions.sugar} g</p>
        <p><strong>Carbohydrates:</strong> {nutritions.carbohydrates} g</p>
        <p><strong>Protein:</strong> {nutritions.protein} g</p>
      </div>
    </div>
  )
}
