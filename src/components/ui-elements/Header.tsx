/**
 * @file Header.tsx
 * @module Header
 * @desc Top header bar for the Fruit Jar App. Displays the app title centered,
 * with the DarkModeButton on the right.
 *
 * @author Chace Nielson
 * @created Jul 4, 2025
 * @updated Jul 4, 2025
 */

import { type JSX } from 'react'
import DarkModeButton from './DarkModeButton'

export default function Header(): JSX.Element {
  return (
    <header
      className='
        w-full 
        h-16 
        flex items-center 
        justify-between 
        px-4 
        shadow-md 
        bg-accent dark:bg-secondary 
        text-white dark:text-primary
        font-title
        z-10 overflow-hidden
      '
    >
      <div className="md:w-1/3" />
      <div className="md:w-1/3 text-center text-lg sm:text-xl font-semibold">
        🍓 Fruit Jar Sorting
      </div>
      <div className="md:w-1/3 flex justify-end items-center">
        <DarkModeButton />
      </div>
    </header>
  )
}