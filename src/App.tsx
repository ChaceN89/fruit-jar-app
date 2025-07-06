// import { useFruits } from '@/context/FruitContext'
import Header from './components/ui-elements/Header'
import FruitList from './components/LeftSide/AllFruit'
import FruitSorting from './components/rightSide/FruitSorting'

function App() {
  // const { fruits, loading, error } = useFruits()


  return (
    <div className="flex flex-col h-screen w-full">
      <Header/>
      <div className="flex flex-1 overflow-hidden">
        <FruitList/>
        <FruitSorting/>
      </div>
    </div>
  )
}

export default App
