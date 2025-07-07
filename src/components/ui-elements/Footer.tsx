/**
 * @file Footer.tsx
 * @module Footer
 * @desc Footer bar for the Fruit Jar App. Displays author name and portfolio link.
 *
 * @author Chace Nielson
 * @created Jul 6, 2025
 * @updated Jul 6, 2025
 */

import { type JSX } from 'react'

export default function Footer(): JSX.Element {
  return (
    <footer
      className='
        w-full 
        h-14 
        flex items-center 
        justify-center 
        px-4 
        bg-accent dark:bg-secondary 
        text-white dark:text-primary 
        font-title text-sm
      '
    >
      <p className="text-center">
        Built by Chace Nielson —&nbsp;
        <a
          href="https://chacenielson.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-accent-alt dark:hover:text-accent"
        >
          chacenielson.com
        </a>
      </p>
    </footer>
  )
}
