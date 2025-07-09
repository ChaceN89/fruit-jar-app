/**
 * @file App.tsx
 * @module App
 * @desc Root application layout component that renders the header and main two-panel layout.
 *
 * @features
 * - Includes header component
 * - Renders fruit list on the left and jar display on the right
 * - Responsive flex layout with dark mode support
 *
 * @author Chace Nielson
 * @created Jul 8, 2025
 * @updated Jul 8, 2025
 */
import Header from './components/ui-elements/Header'
import FruitList from './components/leftSide/AllFruit'
import FruitDisplay from './components/rightSide/FruitDisplay'

export default function App() {
  return (
    <div className="flex flex-col min-h-screen w-full dark:bg-zinc-800">
      <Header/>
      <div className="flex flex-col md:flex-row  flex-1  overflow-hidden">
        <FruitList/>
        <FruitDisplay/>
      </div>
    </div>
  )
}

