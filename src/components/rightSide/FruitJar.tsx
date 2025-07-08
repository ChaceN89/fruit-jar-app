import { useFruits } from '@/context/FruitContext'
import { getFruitIconPath } from '@/utils/utils'
import Tooltip from '../ui-elements/Tooltip'

export default function FruitJar() {
  const { jarFruits, setSelectedFruit } = useFruits()


  return (
    <div className="mt-6 relative w-full min-h-[60vh] h-fit border-4 border-pink-400 rounded-[30px] bg-gray-100 overflow-hidden shadow-md dark:shadow-white">
      <div className="absolute inset-2 flex flex-wrap justify-center items-center gap-4 p-2 overflow-y-auto">
        {[...jarFruits].reverse().map((fruit, index) => {
          const iconPath = getFruitIconPath(fruit.name)
          return iconPath ? (
            <Tooltip
              key={`${fruit.name}-${index}`}
              text={`${fruit.name} (${fruit.nutritions.calories} cal)`}
              openDuration={200}
            >
              <img
              onMouseEnter={() => setSelectedFruit(fruit)}
                src={iconPath}
                alt={fruit.name}
                className="w-16 h-16 object-contain drop-shadow hover:scale-110 transition-transform duration-200"
              />
            </Tooltip>
          ) : null
        })}


      </div>
    </div>
  )
}
