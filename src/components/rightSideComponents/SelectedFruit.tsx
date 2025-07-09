/**
 * @file SelectedFruit.tsx
 * @module SelectedFruit
 * @desc Displays detailed information about the currently selected fruit in the Fruit Jar App.
 *
 * @features
 * - Shows fruit name, image, and full nutrition info
 * - Updates based on hover events
 * - Responsive layout for different screen sizes
 * - Fallback message when no fruit is selected
 *
 * @author Chace Nielson
 * @created Jul 8, 2025
 * @updated Jul 8, 2025
 */
import { useFruits } from '@/context/FruitContext'
import { getFruitIconPath } from '@/utils/utils'

export default function SelectedFruit() {
  const { selectedFruit } = useFruits()

  if (!selectedFruit) {
    return (
      <div className="mt-6 bg-white dark:bg-zinc-800 border-2 brder-zinc-800 dark:border-white  rounded-lg p-5 w-full mx-auto text-sm flex flex-col items-center text-center shadow-sm dark:shadow-white">
        <div className="text-gray-500 italic text-center">
          No fruit selected (hover on a fruit to see details)
        </div>
      </div>
    )
  }

  const { name, family, order, genus, nutritions } = selectedFruit
  const iconPath = getFruitIconPath(name)

  return (
    <div className="mt-6 bg-white dark:bg-zinc-800 border-2 brder-zinc-800 dark:border-white  rounded-lg p-5 w-full mx-auto text-sm flex flex-col items-center text-center shadow-sm dark:shadow-white">
      {/* Header */}
      <div className="flex flex-row xl:flex-col items-center gap-2 mb-4">
        <h2 className="text-2xl font-semibold dark:text-white">{name}</h2>
        {iconPath && (
          <img
            src={iconPath}
            alt={name}
            className="w-10 h-10 xl:w-14 xl:h-14 object-contain"
          />
        )}
      </div>

      {/* Details */}
      <div className="space-y-1 text-zinc-700 dark:text-zinc-100 text-left flex flex-wrap xl:flex-col justify-start gap-2 w-full">
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
