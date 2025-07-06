// import { useFruits } from '@/context/FruitContext'
import Header from './components/Header'
import FruitList from './components/AllFruit'
import FruitSorting from './components/FruitSorting'

function App() {
  // const { fruits, loading, error } = useFruits()


  return (
    <div className="flex flex-col h-screen w-full">
      {/* Header */}
      <Header/>


      <div className="flex flex-1 overflow-hidden">



      {/* Main Content */}
        {/* Left: Fruit List */}
      <FruitList/>

      <FruitSorting/>
  
      </div>
    </div>
  )
}

export default App
