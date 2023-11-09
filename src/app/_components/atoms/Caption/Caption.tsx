'use client'

interface Props {
  text: string
}

function Caption({ text }: Props) {
  return <span className="text-xs font-light">{text}</span>
}

export default Caption
