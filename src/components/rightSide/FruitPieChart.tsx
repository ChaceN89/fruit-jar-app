/**
 * @file FruitPieChart.tsx
 * @module FruitPieChart
 * @desc Renders a pie chart of calories from the selected fruits in the jar.
 *
 * @author Chace Nielson
 * @created Jul 6, 2025
 * @updated Jul 6, 2025
 */

import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import type { Fruit } from '@/context/FruitContext'

// Optional: Define some colors
const COLORS = ['#34a0a4', '#52b788', '#ffba08', '#f15bb5', '#f48c06', '#ef476f', '#6a4c93']

interface Props {
  fruits: Fruit[]
}

export default function FruitPieChart({ fruits }: Props) {
  const data = fruits.reduce<Record<string, number>>((acc, fruit) => {
    const name = fruit.name
    const calories = fruit.nutritions.calories
    acc[name] = (acc[name] || 0) + calories
    return acc
  }, {})

  const chartData = Object.entries(data).map(([name, calories]) => ({
    name,
    calories,
  }))

  if (chartData.length === 0) {
    return <p className="text-gray-500 italic mt-4">No fruits in jar to display 🍓</p>
  }

  return (
    <div className="w-full h-[700px]">
      Total Calories in Jar: {chartData.reduce((sum, item) => sum + item.calories, 0)}
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={chartData}
            dataKey="calories"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={200}
            labelLine={false}
            label={({ name, calories }: any) => `${name} (${calories} cal)`}
          >
            {chartData.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}
