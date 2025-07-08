import { useFruits } from '@/context/FruitContext'
import { useState } from 'react'

export default function FruitList() {
  const { sortedFruits, addToJar } = useFruits()

  // Manage open/closed states for each group
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({})

  // Toggle a single group open/closed
  const toggleGroup = (groupName: string) => {
    setOpenGroups((prev) => ({
      ...prev,
      [groupName]: !prev[groupName],
    }))
  }

  // Toggle all groups to a single open/closed state
  const setAllGroupsOpen = (open: boolean) => {
    const allGroupNames = Object.keys(sortedFruits)
    const newState: Record<string, boolean> = {}
    allGroupNames.forEach((name) => {
      newState[name] = open
    })
    setOpenGroups(newState)
  }

  const allGroupsOpen = Object.values(openGroups).every(Boolean)
  const toggleAll = () => setAllGroupsOpen(!allGroupsOpen)

  return (
    <div className="mt-4 space-y-4">
      <div className="flex justify-end mb-2">

        <button
          onClick={toggleAll}
          className="btn-blue"
        >
          {allGroupsOpen ? 'Collapse All' : 'Expand All'}
        </button>
      </div>

      {Object.entries(sortedFruits).map(([groupName, fruits]) => {
        const isOpen = openGroups[groupName] ?? true

        return (
          <div key={groupName} className='border-2 border-black dark:border-white rounded-lg p-0.5 bg-gray-50 dark:bg-zinc-800'>
            <div 
              onClick={() => toggleGroup(groupName)} 
              className=" group cursor-pointer flex justify-between items-center bg-gray-200 px-2 py-1 rounded transition-all duration-200 hover:bg-gray-300 "
            >
              <div className="font-bold text-sm transition-transform duration-200 group-hover:font-bold group-hover:text-base">
                {groupName}
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation() // Prevents toggling group when clicking "Add Group"
                  fruits.forEach(addToJar)
                }}
                className="btn"
              >
                Add Group to Jar
              </button>
            </div>

            {isOpen && (
              <ul className="p-2 mt-2 space-y-2 bg-white rounded-md">
                {fruits.map((fruit, index) => (
                  <li key={`${fruit.id}-${index}`} className="flex justify-between border p-2">
                    <span>{fruit.name} ({fruit.nutritions.calories} cal)</span>
                    <button onClick={() => addToJar(fruit)} className="btn-teal">Add to jar</button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )
      })}



    </div>
  )
}
