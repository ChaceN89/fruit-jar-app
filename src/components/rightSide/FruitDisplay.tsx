import { useState } from 'react'
import ToggleSwitch from '../ui-elements/ToggleSwitch'
import { useFruits } from '@/context/FruitContext'
import FruitPieChart from './FruitPieChart'
import FruitJar from './FruitJar'
import SelectedFruit from './SelectedFruit'

export default function FruitDisplay() {
  const [view, setView] = useState<'Jar' | 'Pie'>('Jar')
  const { emptyJar, jarFruits } = useFruits()
  

  const totalCalories = jarFruits.reduce((sum, f) => sum + f.nutritions.calories, 0)

  return (
    <div className="p-4 w-full overflow-y-auto">
      {/* Header Row: Toggle + Empty Jar on left */}
      <div className="flex gap-4 items-center mb-2">
        <ToggleSwitch
          options={['Jar', 'Pie']}
          selected={view}
          onSelect={(val) => setView(val as 'Jar' | 'Pie')}
        />
        <button
          className="btn-red"
          onClick={emptyJar}
        >
          Empty Jar
        </button>
      </div>


      <h3 className="font-semibold dark:text-white">Your Fruit Jar</h3>
      <h3 className="font-semibold text-gray-500 dark:text-gray-300">Total Calories: {totalCalories}</h3>


      {/* Content Section */}
      <div className="flex gap-6">
        {/* Left side: Jar or Pie */}
        <div className="flex-1">
          {view === 'Jar' ? <FruitJar /> : <FruitPieChart />}
        </div>

        {/* Right side: Selected Fruit */}
        <div className="w-full max-w-[14rem] h-full flex justify-center items-center">
          <SelectedFruit />
        </div>


      </div>



    </div>
  )
}
