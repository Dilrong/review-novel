'use client'

import Board from '@/lib/types/Board'
import dayjs from 'dayjs'
import Link from 'next/link'
import React from 'react'

interface Props {
  boardList: Board[]
}

function ClientPage({ boardList }: Props) {
  return (
    <div className="flex min-h-screen flex-col">
      <section className="mt-8">
        <article className="mx-auto max-w-7xl px-2">
          <h2 className="text-2xl font-bold">Notice</h2>
          <p className="font-maruBuri text-xs text-gray-700">
            소설로 자연스럽게 배우는 영어, 노벨덕의 소식입니다.
          </p>
          <div className="mt-4 flex flex-col flex-wrap justify-center border-t md:justify-start">
            {boardList.map((board: Board) => (
              <Link
                href={`boards/${board.id}`}
                key={board.id}
                className="flex flex-col border-b py-4 hover:bg-gray-50"
              >
                <div className="flex flex-col">
                  <div className="flex">
                    <p className="mr-1 font-bold">[{board.category}]</p>
                    <p>{board.title}</p>
                  </div>
                  <p className="mt-1 text-sm text-gray-500">
                    {dayjs(board.created_at).format('YYYY.MM.DD')}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </article>
      </section>
    </div>
  )
}

export default ClientPage
