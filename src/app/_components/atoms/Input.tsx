'use client'

interface Props {
  type: string
  placeholder: string
}

function Input({ type = 'text', placeholder = '' }: Props) {
  return (
    <input
      className="mt-4 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
      type={type}
      placeholder={placeholder}
    />
  )
}

export default Input
