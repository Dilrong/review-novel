'use client'

import { useTranslations } from 'next-intl'
import Link from 'next-intl/link'
import Board from '@/lib/types/Board'

interface Props {
  board: Board
}

function Footer({ board }: Props) {
  const t = useTranslations()

  return (
    <>
      <section className="bg-yellow-50 text-xs">
        <Link href={`/boards/${board.id}`}>
          <div className="px-4 py-2">
            <span className="pr-4 font-bold text-yellow-500">소식</span>
            <span className="text-xs text-black">{board.title}</span>
          </div>
        </Link>
      </section>
      <footer>
        <div className="mx-auto w-full max-w-screen-xl py-4">
          <span className="mb-1 block text-center text-xs">
            {t('footer_content')}
          </span>
        </div>
        <div className="mb-4 flex justify-center gap-4">
          <Link className="text-sm text-muted-foreground" href="/terms/service">
            Terms of Service
          </Link>
          <Link className="text-sm text-muted-foreground" href="/terms/privacy">
            Privacy Policy
          </Link>
          <Link className="text-sm text-muted-foreground" href="/contact">
            Contact Us
          </Link>
        </div>
        <span className="block pb-6 text-center text-sm">
          © 2023{' '}
          <a href="/" className="hover:underline">
            NovelDuck
          </a>
          . All Rights Reserved.
        </span>
      </footer>
    </>
  )
}

export default Footer
