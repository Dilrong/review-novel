'use client'

import Tag from '@/app/_components/atoms/Tag'

interface Props {
  name: string
  handleClick: () => void
}

function TranslationButton({ name, handleClick }: Props) {
  return (
    <button type="button" onClick={handleClick}>
      <Tag text={name} />
    </button>
  )
}

export default TranslationButton
