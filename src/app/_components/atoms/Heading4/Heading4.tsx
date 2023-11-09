'use client'

interface Props {
  text: string
}

function Heading4({ text }: Props) {
  return <h4 className="text-xl font-bold">{text}</h4>
}

export default Heading4
