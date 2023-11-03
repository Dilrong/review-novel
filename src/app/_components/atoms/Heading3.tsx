'use client'

interface Props {
  text: string
}

function Heading3({ text }: Props) {
  return <h3 className="text-2xl font-bold">{text}</h3>
}

export default Heading3
