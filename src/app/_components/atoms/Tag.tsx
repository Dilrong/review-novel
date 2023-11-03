'use client'

interface Props {
  text: string
}

function Tag({ text }: Props) {
  return (
    <p className="leading-sm mt-1 inline-flex cursor-pointer items-center rounded bg-gray-200 px-2 py-1 text-xs uppercase text-gray-900 hover:bg-gray-300">
      #{text}
    </p>
  )
}

export default Tag
