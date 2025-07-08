import { useFruits } from '@/context/FruitContext'
import { useState } from 'react'

export default function FruitTable() {
  const { sortedFruits, addToJar } = useFruits()

  return (
    <div className="mt-4 w-full border border-gray-200 rounded overflow-hidden">
      {Object.entries(sortedFruits).map(([groupName, fruits]) => {
        const [open, setOpen] = useState(true)

        return (
          <div key={groupName} className="mb-4 border-b">
            {/* Group Header with Hover Effects */}
            <div
              onClick={() => setOpen(!open)}
              className="group cursor-pointer flex justify-between items-center bg-gray-300 hover:bg-gray-200 px-4 py-2 transition-all duration-200"
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
                Add Group to Jar
              </button>
            </div>

            {/* Table Content */}
            {open && (
              <table className="w-full text-left border-t border-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="p-2">Name</th>
                    <th className="p-2">Family</th>
                    <th className="p-2">Order</th>
                    <th className="p-2">Genus</th>
                    <th className="p-2">Calories</th>
                    <th className="p-2">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {fruits.map((fruit, index) => (
                    <tr
                      key={`${fruit.id}-${index}`}
                      className="border-t even:bg-white odd:bg-gray-50 hover:bg-blue-50 transition"
                    >
                      <td className="p-2">{fruit.name}</td>
                      <td className="p-2">{fruit.family}</td>
                      <td className="p-2">{fruit.order}</td>
                      <td className="p-2">{fruit.genus}</td>
                      <td className="p-2">{fruit.nutritions.calories}</td>
                      <td className="p-2">
                        <button
                          className="btn-teal"
                          onClick={() => addToJar(fruit)}
                        >
                          Add to Jar
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        )
      })}
    </div>
  )
}
