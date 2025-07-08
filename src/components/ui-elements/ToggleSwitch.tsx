import { type JSX } from 'react'

interface ToggleSwitchProps {
  options: [string, string]
  selected: string
  onSelect: (value: string) => void
  className?: string
}

export default function ToggleSwitch({
  options,
  selected,
  onSelect,
  className = '',
}: ToggleSwitchProps): JSX.Element {
  return (
    <div
      className={`inline-flex rounded-full border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 overflow-hidden shadow-sm ${className}`}
    >
      {options.map((option) => {
        const isActive = selected === option
        return (
          <button
            key={option}
            onClick={() => onSelect(option)}
            className={`
              px-4 py-2 text-sm sm:text-base font-medium transition-all duration-200
              focus:outline-none focus:ring-2 focus:ring-accent-alt
              ${isActive
                ? 'bg-accent text-white'
                : 'bg-transparent text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer'}
            `}
          >
            {option}
          </button>
        )
      })}
    </div>
  )
}
