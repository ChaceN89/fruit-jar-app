/**
 * @file FruitTable.tsx
 * @module FruitTable
 * @desc Tabular view of sorted fruit groups with expand/collapse functionality and group add-to-jar support.
 *
 * @features
 * - Displays fruits in responsive table format
 * - Supports group toggle and add-all-to-jar
 * - Handles horizontal overflow for small screens
 *
 * @author Chace Nielson
 * @created Jul 8, 2025
 * @updated Jul 8, 2025
 */
import { useFruits } from '@/context/FruitContext'
import { useEffect, useState } from 'react'

export default function FruitTable() {
  // Get Fruit from gloabl context
  const { sortedFruits, addToJar } = useFruits()

  // State to handle the open groups 
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({})

  // ✅ Pre-fill openGroups when sortedFruits first loads
  useEffect(() => {
    const initialState: Record<string, boolean> = {}
    Object.keys(sortedFruits).forEach((key) => {
      initialState[key] = true
    })
    setOpenGroups(initialState)
  }, [sortedFruits])

  const toggleGroup = (groupName: string) => {
    setOpenGroups((prev) => ({
      ...prev,
      [groupName]: !prev[groupName],
    }))
  }

  const setAllGroupsOpen = (open: boolean) => {
    const newState: Record<string, boolean> = {}
    Object.keys(sortedFruits).forEach((name) => {
      newState[name] = open
    })
    setOpenGroups(newState)
  }

  const allGroupsOpen = Object.values(openGroups).every(Boolean)
  const toggleAll = () => setAllGroupsOpen(!allGroupsOpen)

  return (
    <div className="mt-4 w-full space-y-4">
      <div className="flex justify-end mb-2">
        <button onClick={toggleAll} className="btn-blue">
          {allGroupsOpen ? 'Collapse All' : 'Expand All'}
        </button>
      </div>

      {Object.entries(sortedFruits).map(([groupName, fruits]) => {
        const isOpen = openGroups[groupName] ?? true

        return (
          <div key={groupName} className="rounded border-2 border-black dark:border-white mb-2">
            {/* Group Header */}
            <div
              onClick={() => toggleGroup(groupName)}
              className="group cursor-pointer flex justify-between items-center bg-gray-300 hover:bg-gray-200 px-4 py-2 transition-all duration-200 w-full "
            >
              <div className="font-semibold text-base transition-transform duration-200 group-hover:scale-[1.05] group-hover:text-lg">
                {groupName}
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  fruits.forEach(addToJar)
                }}
                className="btn"
              >
                Add All to Jar
              </button>
            </div>

            {isOpen && (
              <div className="w-full overflow-x-auto">
                <table className=" w-full text-left border-t border-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="p-1.5">Name</th>
                      <th className="p-1.5">Family</th>
                      <th className="p-1.5">Order</th>
                      <th className="p-1.5">Genus</th>
                      <th className="p-1.5">Cals</th>
                      <th className="p-1.5">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {fruits.map((fruit, index) => (
                      <tr
                        key={`${fruit.id}-${index}`}
                        className="border-t even:bg-white odd:bg-gray-50 hover:bg-blue-50 transition"
                      >
                        <td className="p-1.5">{fruit.name}</td>
                        <td className="p-1.5">{fruit.family}</td>
                        <td className="p-1.5">{fruit.order}</td>
                        <td className="p-1.5">{fruit.genus}</td>
                        <td className="p-1.5">{fruit.nutritions.calories}</td>
                        <td className="p-1.5">
                          <button
                            className="btn-teal "
                            onClick={() => addToJar(fruit)}
                          >
                            Add
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
