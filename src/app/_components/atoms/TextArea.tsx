'use client'

interface Props {
  rows: number
  placeholder: string
}

function TextArea({ rows, placeholder }: Props) {
  return (
    <textarea
      rows={rows}
      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 font-maruBuri text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
      placeholder={placeholder}
    />
  )
}

export default TextArea
