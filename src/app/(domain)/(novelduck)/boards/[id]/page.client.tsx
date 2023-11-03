'use client'

import React from 'react'
import Board from '@/lib/types/Board'
import { marked } from 'marked'
import DOMPurify from 'isomorphic-dompurify'
import dayjs from 'dayjs'

interface Props {
  board: Board
}

function ClientPage({ board }: Props) {
  return (
    <div className="flex min-h-screen flex-col px-4">
      <section className="mx-auto flex w-full max-w-7xl flex-col py-4 font-maruBuri">
        <h2 className="text-2xl font-bold">{board.title}</h2>
        <p className="my-1 text-sm text-gray-500">
          {dayjs(board.created_at).format('YYYY.MM.DD')}
        </p>
        <article
          className="prose leading-10"
          dangerouslySetInnerHTML={{
            __html: marked(DOMPurify.sanitize(board.content)),
          }}
        />
      </section>
    </div>
  )
}

export default ClientPage
