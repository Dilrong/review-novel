'use client'

import Link from 'next/link'

function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <h1 className="self-center whitespace-nowrap font-maruBuri text-xl font-semibold">
        Novel
        <span className="ml-1 font-bold text-primary">DucK</span>
      </h1>
    </Link>
  )
}

export default Logo
