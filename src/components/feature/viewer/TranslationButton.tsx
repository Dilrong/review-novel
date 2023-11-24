'use client'

interface Props {
  name: string
  handleClick: () => void
}

function TranslationButton({ name, handleClick }: Props) {
  return (
    <button type="button" onClick={handleClick}>
      <p className="mt-1 inline-flex cursor-pointer items-center rounded bg-black px-2 py-1 text-xs uppercase text-neutral-300 hover:bg-neutral-950">
        {name}
      </p>
    </button>
  )
}

export default TranslationButton
