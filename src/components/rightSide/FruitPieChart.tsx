/**
 * @file FruitPieChart.tsx
 * @module FruitPieChart
 * @desc Renders a pie chart of calories from the selected fruits in the jar.
 *
 * @author Chace Nielson
 * @created Jul 6, 2025
 * @updated Jul 6, 2025
 */

import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer, Sector } from 'recharts'
import { useFruits  } from '@/context/FruitContext'

// Optional: Define some colors
const COLORS = ['#34a0a4', '#52b788', '#ffba08', '#f15bb5', '#f48c06', '#ef476f', '#6a4c93']



export default function FruitPieChart() {


  const { jarFruits, setSelectedFruit } = useFruits()

  // Function to render the active shape of the pie chart - for hover animation
  const renderActiveShape = (props: any) => {
    const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill, payload } = props;

    const fullFruit = jarFruits.find(f => f.name === payload.name);
    setSelectedFruit(fullFruit ?? null);

    return (
      <g>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius + 10}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
          style={{ outline: 'none' }}
          tabIndex={-1}
          focusable={false}
        />
      </g>
    );
  };

  const data = jarFruits.reduce<Record<string, number>>((acc, fruit) => {
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
    return <p className="text-gray-500 italic mt-4">No fruits to display</p>
  }

  return (
    <div className="w-full h-[700px] mb-10">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={chartData}
            dataKey="calories"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={200}
            label={({ name, calories }: any) => {
              const total = jarFruits.reduce((sum, f) => sum + f.nutritions.calories, 0)
              const percentage = (calories / total) * 100
              return percentage > 2 ? `${name} (${calories} cal)` : '' // only return label if percentage is greater than 2%
            }} 
            labelLine={false}   
            activeShape={renderActiveShape}
            isAnimationActive={false} // Optional: disable animation if you want full control
            focusable={false}         // Prevent keyboard/mouse focus
            tabIndex={-1}             // Prevent browser focus ring
          >
            {chartData.map((_, index) => (
              <Cell 
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]} 
                style={{ outline: 'none' }}
                tabIndex={-1}
                focusable={false}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}
