"use client"

import { useState } from "react"

export default function QuantityInput({ min = 0, max = 999, defaultValue = 1, onChange }) {
  const [value, setValue] = useState(defaultValue)
  const [isFocused, setIsFocused] = useState(false)

  const handleIncrement = () => {
    const newValue = Math.min(value + 1, max)
    setValue(newValue)
    onChange?.(newValue)
  }

  const handleDecrement = () => {
    const newValue = Math.max(value - 1, min)
    setValue(newValue)
    onChange?.(newValue)
  }

  const handleChange = (e) => {
    const newValue = Number.parseInt(e.target.value) || min
    const clampedValue = Math.min(Math.max(newValue, min), max)
    setValue(clampedValue)
    onChange?.(clampedValue)
  }

  const handleFocus = () => setIsFocused(true)
  const handleBlur = () => setIsFocused(false)

  return (
    <div
      className={`
      flex items-center bg-gray-100 rounded-full w-full
      ${isFocused ? "outline outline-2 outline-black" : ""}
    `}
    >
      <button
        onClick={handleDecrement}
        className="flex-none w-12 h-12 flex items-center justify-center text-gray-600 hover:text-black transition-colors"
        aria-label="Decrease quantity"
      >
        −
      </button>

      <input
        type="number"
        min={min}
        max={max}
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className="
          w-full text-center bg-transparent focus:outline-none
          [-moz-appearance:textfield]
          [&::-webkit-outer-spin-button]:appearance-none
          [&::-webkit-inner-spin-button]:appearance-none
        "
      />

      <button
        onClick={handleIncrement}
        className="flex-none w-12 h-12 flex items-center justify-center text-gray-600 hover:text-black transition-colors"
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  )
}

