import { useFruits } from '@/context/FruitContext'
import { useState } from 'react'

export default function FruitTable() {
  const { sortedFruits, addToJar } = useFruits()

  return (
    <div className="mt-4 w-full border border-gray-200">
      {Object.entries(sortedFruits).map(([groupName, fruits]) => {
        const [open, setOpen] = useState(true)

        return (
          <div key={groupName} className="mb-4">
            <div className="flex justify-between items-center bg-gray-100 px-4 py-2">
              <button onClick={() => setOpen(!open)} className="font-semibold text-lg">
                {groupName}
              </button>
              <button
                className="btn-sm bg-green-500 text-white px-2 py-1 rounded"
                onClick={() => fruits.forEach(addToJar)}
              >
                Add Group
              </button>
            </div>

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
                    <tr key={`${fruit.id}-${index}`} className="border-t">
                      <td className="p-2">{fruit.name}</td>
                      <td className="p-2">{fruit.family}</td>
                      <td className="p-2">{fruit.order}</td>
                      <td className="p-2">{fruit.genus}</td>
                      <td className="p-2">{fruit.nutritions.calories}</td>
                      <td className="p-2">
                        <button
                          className="px-3 py-1 bg-teal-500 text-white rounded hover:bg-teal-600 transition"
                          onClick={() => addToJar(fruit)}
                        >
                          Add
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
