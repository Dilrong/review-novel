'use client'

import Link from 'next-intl/link'

interface Props {
  text: string
  href: string
}

function FloatButton({ text, href }: Props) {
  return (
    <Link className="fixed bottom-2 right-2" href={href} target="_blank">
      <button
        type="button"
        className="rounded-full bg-neutral-800 px-4 py-3 text-center text-2xl text-white shadow-xl hover:bg-neutral-900 focus:outline-none focus:ring-0 focus:ring-primary"
      >
        {text}
      </button>
    </Link>
  )
}

export default FloatButton
