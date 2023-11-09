'use client'

import { MouseEventHandler } from 'react'

interface Props {
  type: 'button' | 'submit' | 'reset'
  text: string
  // eslint-disable-next-line react/require-default-props
  handleClick?: MouseEventHandler<HTMLButtonElement>
}

function Button({ type = 'button', text = '', handleClick }: Props) {
  return (
    <button
      type={type}
      onClick={handleClick}
      className="w-full rounded-lg bg-primary px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-yellow-400 focus:outline-none focus:ring-0 focus:ring-primary"
    >
      {text}
    </button>
  )
}

export default Button
