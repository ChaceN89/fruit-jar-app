/**
 * @file SegmentToggle.tsx
 * @module SegmentToggle
 * @desc A 2-option segmented button (like a radio toggle). Used for switching views like List ↔ Table.
 *
 * @example
 * <SegmentToggle
 *   options={['List', 'Table']}
 *   selected="List"
 *   onSelect={(val) => console.log(val)}
 * />
 *
 * @author Chace Nielson
 * @created Jul 4, 2025
 * @updated Jul 4, 2025
 */

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
    <div className={`flex border rounded-2xl overflow-hidden ${className}`}>
      {options.map((option) => {
        const isActive = selected === option
        return (
          <button
            key={option}
            onClick={() => onSelect(option)}
            className={`
              flex-1 text-center px-4 py-2 
              text-sm sm:text-base
              font-medium transition
              ${isActive 
                ? 'bg-accent text-white dark:bg-primary dark:text-secondary' 
                : 'bg-white text-gray-700 dark:bg-secondary dark:text-gray-300'}
            `}
          >
            {option}
          </button>
        )
      })}
    </div>
  )
}
