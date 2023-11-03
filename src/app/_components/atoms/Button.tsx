'use client'

import { MouseEventHandler } from 'react'

interface Props {
  text: string
  handleClick: MouseEventHandler<HTMLButtonElement>
}

function Button({ text, handleClick }: Props) {
  return (
    <button
      type="button"
      onClick={handleClick}
      className="w-full rounded-lg bg-primary px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-yellow-400 focus:outline-none focus:ring-0 focus:ring-primary"
    >
      {text}
    </button>
  )
}

export default Button
