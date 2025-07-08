import Header from './components/ui-elements/Header'
import FruitList from './components/LeftSide/AllFruit'
import FruitDisplay from './components/rightSide/FruitDisplay'

export default function App() {
  return (
    <div className="flex flex-col h-screen w-full">
      <Header/>
      <div className="flex  flex-1  overflow-hidden">
        <FruitList/>
        <FruitDisplay/>
      </div>
    </div>
  )
}

