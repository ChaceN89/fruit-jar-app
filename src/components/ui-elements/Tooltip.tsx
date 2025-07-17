/**
 * @file Tooltip.tsx
 * @module Tooltip
 * @desc React component that displays a tooltip with a given text when the user hovers over the children elements.
 *
 * @notes
 * - Requires a `<div id="tooltip-root"></div>` in `index.html`.
 * - Manual placement logic adjusts for viewport.
 * - Tooltip is disabled on touch devices.
 *
 * @example
 * <Tooltip text="Info about this item">
 *   <button>Hover me</button>
 * </Tooltip>
 *
 * @author Chace Nielson
 * @created Jul 28, 2024
 * @updated Jul 17, 2025
 */

import {
  useState,
  useEffect,
  useRef,
  type ReactNode,
  type CSSProperties,
  type MouseEvent,
  type JSX,
} from 'react'
import { createPortal } from 'react-dom'

interface TooltipProps {
  text: string
  openDuration?: number
  className?: string
  children: ReactNode
}

export default function Tooltip({
  text,
  openDuration = 1000,
  className = 'w-fit whitespace-nowrap',
  children,
}: TooltipProps): JSX.Element {
  const [hovered, setHovered] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)
  const [isTouchDevice, setIsTouchDevice] = useState(false)
  const tooltipRef = useRef<HTMLDivElement | null>(null)

  const [tooltipStyle, setTooltipStyle] = useState<CSSProperties>({
    left: 0,
    top: 0,
    visibility: 'hidden',
  })

  const tooltipRoot = document.getElementById('tooltip-root')
  if (!tooltipRoot) {
    console.warn("Missing <div id='tooltip-root'></div> in index.html.")
    return <>{children}</>
  }

  useEffect(() => {
    const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    setIsTouchDevice(hasTouch)
  }, [])

  useEffect(() => {
    if (hovered) {
      const timer = setTimeout(() => {
        setShowTooltip(true)
        setTooltipStyle((prev) => ({ ...prev, visibility: 'visible' }))
      }, openDuration)
      return () => clearTimeout(timer)
    } else {
      setShowTooltip(false)
      setTooltipStyle((prev) => ({ ...prev, visibility: 'hidden' }))
    }
  }, [hovered, openDuration])

  const handleMouseMove = (e: MouseEvent): void => {
    const viewportWidth = window.innerWidth
    const viewportHeight = window.innerHeight
    const tooltipRect = tooltipRef.current?.getBoundingClientRect() || { width: 0, height: 0 }

    let left = e.clientX + 10
    let top = e.clientY - tooltipRect.height - 4 // default: place above the cursor

    // Horizontal overflow (right)
    if (left + tooltipRect.width > viewportWidth) {
      left = e.clientX - tooltipRect.width - 10
    }

    // Horizontal overflow (left)
    if (left < 0) {
      left = 10
    }

    // Vertical overflow (top)
    if (top < 0) {
      top = e.clientY + 10 // flip to below cursor
    }

    // Vertical overflow (bottom)
    if (top + tooltipRect.height > viewportHeight) {
      top = viewportHeight - tooltipRect.height - 4
    }

    setTooltipStyle({
      left,
      top,
      visibility: showTooltip ? 'visible' : 'hidden',
    })
  }


  if (isTouchDevice) return <>{children}</>

  return (
    <div
      className="relative"
      onMouseEnter={(e) => {
        setHovered(true)
        handleMouseMove(e)
      }}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMouseMove}
    >
      {children}
      {createPortal(
        <div
          ref={tooltipRef}
          className={`fixed p-1.5 text-sm text-primary bg-secondary border rounded-lg z-[9999] ${className}`}
          style={tooltipStyle}
        >
          {text}
        </div>,
        tooltipRoot
      )}
    </div>
  )
}
