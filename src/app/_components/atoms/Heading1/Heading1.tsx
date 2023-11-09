'use client'

interface Props {
  text: string
}

function Heading1({ text }: Props) {
  return <h1 className="text-6xl font-bold">{text}</h1>
}

export default Heading1
