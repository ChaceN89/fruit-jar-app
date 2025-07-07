import { useFruits } from '@/context/FruitContext'
import { fruitIcons } from '@/data/fruit-icons-list'
import Tooltip from '../ui-elements/Tooltip'

export default function FruitJar() {
  const { jarFruits } = useFruits()

  // Helper to get the icon path from public/icons/
  const getIconPath = (name: string): string | null => {
    const match = fruitIcons.find(f => f.name.toLowerCase() === name.toLowerCase())
    return match ? `/fruit-icons/${match.icon}` : null
  }

  return (
    <div className="mt-6 relative w-full min-h-[600px] h-fit border-4 border-pink-400 rounded-[40px] bg-pink-100 overflow-hidden">
      <div className="absolute inset-2 flex flex-wrap justify-center items-center gap-4 p-4 overflow-y-auto">
        {[...jarFruits].reverse().map((fruit, index) => {
          const iconPath = getIconPath(fruit.name)
          return iconPath ? (
            <Tooltip
              key={`${fruit.name}-${index}`}
              text={`${fruit.name} (${fruit.nutritions.calories} cal)`}
              openDuration={200}
            >
              <img
                src={iconPath}
                alt={fruit.name}
                className="w-16 h-16 object-contain drop-shadow"
              />
            </Tooltip>
          ) : null
        })}


      </div>
    </div>
  )
}
