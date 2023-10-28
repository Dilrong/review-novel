'use client'

import React from 'react'
import Board from '@/lib/types/Board'
import { marked } from 'marked'
import DOMPurify from 'dompurify'
import dayjs from 'dayjs'

interface Props {
  board: Board
}

function ClientPage({ board }: Props) {
  return (
    <div className="flex flex-col min-h-screen px-4">
      <section className="flex flex-col w-full max-w-7xl mx-auto py-4 font-maruBuri">
        <h2 className="text-2xl font-bold">{board.title}</h2>
        <p className="text-sm text-gray-500 my-1">
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
