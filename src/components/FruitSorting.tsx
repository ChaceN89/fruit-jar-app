import { useState } from 'react'
import ToggleSwitch from './ToggleSwitch'

export default function FruitSorting() {
    const [view, setView] = useState<'List' | 'Table'>('List')

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
    </div>
  )
}
