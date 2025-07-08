import { useFruits } from '@/context/FruitContext'
import { getFruitIconPath } from '@/utils/utils'
import Tooltip from '../ui-elements/Tooltip'

export default function FruitJar() {
  const { jarFruits, setSelectedFruit } = useFruits()


  return (
    <div className="mt-6 relative w-full h-auto border-8 border-black dark:border-white rounded-[30px] bg-gray-100 dark:bg-gray-300 shadow-sm dark:shadow-white transition-all duration-300 overflow-hidden">
      <div className=' overflow-y-auto py-6 px-4 '>
        <div className="relative w-full min-h-[30vh] max-h-[65vh]  flex flex-wrap justify-center items-center gap-4 pr-2 custom-scroll">
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
    </div>

  )
}
