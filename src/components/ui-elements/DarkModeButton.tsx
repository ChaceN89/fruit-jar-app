/**
 * @file DarkModeButton.tsx
 * @module DarkModeButton
 * @description A reusable toggle button for manually switching between light and dark mode.
 *
 * @notes
 * - Adds/removes `.dark` class on `<html>` manually.
 * - Uses Tailwind V4 with custom variant: @custom-variant dark (&:where(.dark, .dark *));
 * - Works with utility classes like `bg-[--color-bg] dark:bg-[--color-bg-dark]`.
 *
 * @example
 * <DarkModeButton />
 *
 * @author Chace Nielson
 * @created Jul 8, 2025
 * @updated Jul 8, 2025
 */

import { useEffect, useState, type JSX } from 'react'
import { FaSun, FaMoon } from 'react-icons/fa'
import Tooltip from './Tooltip'

export default function DarkModeButton(): JSX.Element {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleDarkMode = (): void => {
    document.body.classList.add('changing-theme')
    setTimeout(() => {
      document.body.classList.remove('changing-theme')
    }, 150)

    setIsDarkMode((prev) => {
      document.documentElement.classList.toggle('dark', !prev)
      return !prev
    })
  }

  useEffect(() => {
    const html = document.documentElement
    if (html.classList.contains('dark')) {
      setIsDarkMode(true)
    }
  }, [])

  return (
    <Tooltip text={isDarkMode ? 'Light Mode' : 'Dark Mode'} openDuration={1200}>
      <button
        onClick={toggleDarkMode}
        className={`
          text-xl p-2 rounded-full hover:cursor-pointer
          hover:bg-secondary/50 dark:hover:bg-primary/50
          transition-colors
        `}
        title="Toggle Dark Mode"
        aria-label="Toggle Dark Mode"
      >
        {isDarkMode ? <FaMoon /> : <FaSun />}
      </button>
    </Tooltip>
  )
}
