'use client'

interface Props {
  text: string
}

function Heading2({ text }: Props) {
  return <h2 className="text-4xl font-bold">{text}</h2>
}

export default Heading2
