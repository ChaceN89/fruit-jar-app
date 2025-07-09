/**
 * @file FruitDisplay.tsx
 * @module FruitDisplay
 * @desc Layout component for displaying the user's selected fruits in either a jar or pie chart view.
 *
 * @features
 * - Toggle between FruitJar and FruitPieChart views
 * - Shows total fruits and calories
 * - Allows clearing the jar
 * - Displays selected fruit details responsively
 *
 * @author Chace Nielson
 * @created Jul 8, 2025
 * @updated Jul 8, 2025
 */
import { useState } from 'react'
import ToggleSwitch from '../ui-elements/ToggleSwitch'
import { useFruits } from '@/context/FruitContext'
import FruitPieChart from './FruitPieChart'
import FruitJar from './FruitJar'
import SelectedFruit from './SelectedFruit'

export default function FruitDisplay() {
  const [view, setView] = useState<'Jar' | 'Pie'>('Jar')
  const { emptyJar, jarFruits } = useFruits()

  const totalCalories = Number(jarFruits.reduce((sum, f) => sum + f.nutritions.calories, 0).toFixed(1))
  const totalFat = Number(jarFruits.reduce((sum, f) => sum + f.nutritions.fat, 0).toFixed(1))
  const totalSugar = Number(jarFruits.reduce((sum, f) => sum + f.nutritions.sugar, 0).toFixed(1))
  const totalCarbs = Number(jarFruits.reduce((sum, f) => sum + f.nutritions.carbohydrates, 0).toFixed(1))
  const totalProtein = Number(jarFruits.reduce((sum, f) => sum + f.nutritions.protein, 0).toFixed(1))

  return (
    <div className="p-4 w-full overflow-y-auto">
      {/* Header Row */}
      <div className="flex flex-wrap gap-4 items-center mb-4">
        <ToggleSwitch
          options={['Jar', 'Pie']}
          selected={view}
          onSelect={(val) => setView(val as 'Jar' | 'Pie')}
        />
        <button className="btn-red" onClick={emptyJar}>
          Empty Jar
        </button>
      </div>

      {/* Info Header */}
      <div className="mb-2">
        <h3 className="font-semibold dark:text-white">Your Fruit Jar: {jarFruits.length } Fruit{jarFruits.length !== 1 ? 's' : ''}</h3>
        <h3 className="font-semibold text-gray-500 dark:text-gray-300">
          Total Calories: {totalCalories} | Fat: {totalFat}g | Sugar: {totalSugar}g | Carbs: {totalCarbs}g | Protein: {totalProtein}
        </h3>
      </div>

      {/* Main Content Layout */}
      <div className="flex flex-col xl:flex-row gap-0 xl:gap-4">
        {/* Left Column */}
        <div className="flex-1">
          {view === 'Jar' ? <FruitJar /> : <FruitPieChart />}
        </div>

        {/* Right Column (Selected Fruit) */}
        <div className="w-full xl:max-w-[12.5rem] mx-auto xl:mx-0 xl:h-auto xl:flex md:items-center xl:justify-center">
          <SelectedFruit />
        </div>
      </div>
    </div>
  )
}
