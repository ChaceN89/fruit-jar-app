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
          className="btn-sm bg-blue-500 text-white px-3 py-1 rounded"
        >
          {allGroupsOpen ? 'Collapse All' : 'Expand All'}
        </button>
      </div>

      {Object.entries(sortedFruits).map(([groupName, fruits]) => {
        const isOpen = openGroups[groupName] ?? true

        return (
          <div key={groupName}>
            <div className="flex justify-between items-center bg-gray-200 px-2 py-1 rounded">
              <button onClick={() => toggleGroup(groupName)} className="font-bold">
                {groupName}
              </button>
              <button
                onClick={() => fruits.forEach(addToJar)}
                className="btn-sm bg-green-500 text-white px-2 py-1 rounded"
              >
                Add Group
              </button>
            </div>

            {isOpen && (
              <ul className="pl-4 mt-2 space-y-2">
                {fruits.map((fruit, index) => (
                  <li key={`${fruit.id}-${index}`} className="flex justify-between border p-2">
                    <span>{fruit.name} ({fruit.nutritions.calories} cal)</span>
                    <button onClick={() => addToJar(fruit)} className="btn">Add</button>
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
