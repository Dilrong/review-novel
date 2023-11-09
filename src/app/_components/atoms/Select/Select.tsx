'use client'

import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

function Select({ children }: Props) {
  return (
    <select className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500">
      {children}
    </select>
  )
}

export default Select
