/**
 * @file FruitList.tsx
 * @module FruitList
 * @desc List-style display of grouped fruits with expand/collapse and bulk add-to-jar functionality.
 *
 * @features
 * - Expand/collapse each group or all groups at once
 * - Add entire fruit group to the jar
 * - Responsive, accessible list-style layout
 *
 * @author Chace Nielson
 * @created Jul 8, 2025
 * @updated Jul 8, 2025
 */

import { useFruits } from '@/context/FruitContext'
import { useEffect, useState } from 'react'

export default function FruitList() {

  // data for global context
  const { sortedFruits, addToJar } = useFruits()

  // State to handle the open groups - local
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({})

  // Pre-fill openGroups when data loads
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
        const isOpen = openGroups[groupName] ?? false

        return (
          <div key={groupName} className="border-2 border-black dark:border-white rounded-lg p-0.5 bg-gray-50 dark:bg-zinc-800 mb-2">
            <div
              onClick={() => toggleGroup(groupName)}
              className="group cursor-pointer flex justify-between items-center bg-gray-200 px-2 py-1 rounded transition-all duration-200 hover:bg-gray-300"
            >
              <div className="font-bold text-sm transition-transform duration-200 group-hover:font-bold group-hover:text-base">
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
              <ul className="p-2 mt-2 space-y-2 bg-white rounded-md">
                {fruits.map((fruit, index) => (
                  <li key={`${fruit.id}-${index}`} className="flex justify-between border p-2">
                    <span>{fruit.name} ({fruit.nutritions.calories} cal)</span>
                    <button onClick={() => addToJar(fruit)} className="btn-teal">Add</button>
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
