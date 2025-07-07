import { useState } from 'react'
import ToggleSwitch from '../ui-elements/ToggleSwitch'
import { useFruits } from '@/context/FruitContext'
import FruitPieChart from './FruitPieChart'
import FruitJar from './FruitJar'

export default function FruitDisplay() {
  const [view, setView] = useState<'Jar' | 'Pie'>('Jar')
  const { jarFruits, emptyJar } = useFruits()

  return (
    <div className="p-4 w-full overflow-y-auto">
      <div className="w-full flex justify-between items-center">
        <ToggleSwitch
          options={['Jar', 'Pie']}
          selected={view}
          onSelect={(val) => setView(val as 'Jar' | 'Pie')}
        />
      </div>

      {/* button to remove all from jar )(reset jar ) */}
      <div className="mt-2">
        <button
          className="btn-sm bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
          onClick={emptyJar}
        >
          Empty Jar
        </button>
      </div>

      <div className="mt-4">
        {view === 'Jar' ? (
          <>
            <h3 className="font-semibold">Your Fruit Jar 🍎</h3>
            <FruitJar/>
          </>
        ) : (
          <>
            <h3 className="font-semibold">Calorie Breakdown 🥧</h3>
            <FruitPieChart fruits={jarFruits} />
          </>
        )}
      </div>

    </div>
  )
}
