import { useFruits } from '@/context/FruitContext'
import Header from './components/Header'
import FruitList from './components/FruitList'

function App() {
  const { fruits, loading, error } = useFruits()


  return (
    <div className="flex flex-col h-screen w-full">
      {/* Header */}
      <Header/>


      <div className="flex flex-1 overflow-hidden">



      {/* Main Content */}
        {/* Left: Fruit List */}
      <FruitList/>

        {/* Right: Jar */}
                <div className="w-full md:w-2/5 p-4 border-l border-gray-200 bg-gray-50 overflow-y-auto">
                  <h2 className="text-lg font-medium mb-4">🫙 My Jar</h2>
                  <p>Selected fruits will appear here...</p>
                </div>


      </div>
    </div>
  )
}

export default App
