'use client'

import Link from 'next-intl/link'
import Board from '@/lib/types/Board'

interface Props {
  board: Board
}

function FooterNotice({ board }: Props) {
  return (
    <section className="bg-yellow-50 text-xs">
      <Link href={`/boards/${board.id}`}>
        <div className="px-4 py-2">
          <span className="pr-4 font-bold text-yellow-500">소식</span>
          <span className="text-xs">{board.title}</span>
        </div>
      </Link>
    </section>
  )
}

export default FooterNotice
