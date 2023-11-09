'use client'

interface Props {
  text: string
}

function Heading5({ text }: Props) {
  return <h5 className="text-xl">{text}</h5>
}

export default Heading5
