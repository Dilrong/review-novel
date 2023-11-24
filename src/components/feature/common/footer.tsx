'use client'

import { useTranslations } from 'next-intl'
import Link from "next-intl/link";
import Board from "@/lib/types/Board";

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
            <span className="text-xs">{board.title}</span>
          </div>
        </Link>
      </section>
    <footer className="bg-neutral-50 shadow">
      <div className="mx-auto w-full max-w-screen-xl p-4 md:py-8">
        <span className="font-maruBuri mb-1 block text-xs text-gray-700 sm:text-center">
          {t('footer_content')}
        </span>
      </div>
      <span className="block text-sm text-gray-700 sm:text-center ">
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
