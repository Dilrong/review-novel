'use client'

interface Props {
  text: string
}

function Paragraph({ text }: Props) {
  return <p>{text}</p>
}

export default Paragraph
