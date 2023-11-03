'use client'

interface Props {
  text: string
}

function Heading6({ text }: Props) {
  return <h6 className="font-bold">{text}</h6>
}

export default Heading6
