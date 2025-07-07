import { useState } from 'react'
import ToggleSwitch from '../ui-elements/ToggleSwitch'
import { useFruits } from '@/context/FruitContext'

export default function FruitDisplay() {
    const [view, setView] = useState<'List' | 'Table'>('List')

    const { jarFruits } = useFruits()


  return (
    <div className="p-4 w-full">
      <div className='w-full flex justify-between items-center'>

        <ToggleSwitch 
          options={['List', 'Table']}
          selected={view}
          onSelect={(val) => setView(val as 'List' | 'Table')}
        />
      </div>

      <div className="mt-4">
        {view === 'List' ? <div>📋 Showing List View</div> : <div>📊 Showing Table View</div>}
      </div>

      {JSON.stringify(jarFruits)}
    </div>
  )
}
