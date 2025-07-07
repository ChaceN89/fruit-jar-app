/**
 * @file SelectedFruit.tsx
 * @module SelectedFruit
 * @desc Displays detailed information about the currently selected fruit.
 *
 * @author Chace Nielson
 * @created Jul 6, 2025
 * @updated Jul 6, 2025
 */

import { useFruits } from '@/context/FruitContext'
import { getFruitIconPath } from '@/utils/utils'

export default function SelectedFruit() {
  const { selectedFruit } = useFruits()

  if (!selectedFruit) {
    return <div className="text-gray-500 italic mt-4">No fruit selected (Click on a fruit to select it) 🍉</div>
  }

  const { name, family, order, genus, nutritions } = selectedFruit
  const iconPath = getFruitIconPath(name)

  return (
    <div className="bg-white dark:bg-zinc-800 shadow-md rounded-lg p-6 max-w-md w-full mx-auto">
      <div className="flex items-center justify-center gap-4 mb-6 w-full">
        <h2 className="text-4xl font-semibold">{name}</h2>
        {iconPath && (
          <img
            src={iconPath}
            alt={name}
            className="w-16 h-16 object-contain"
          />
        )}
      </div>


        <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-100 grid grid-cols-2">
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
