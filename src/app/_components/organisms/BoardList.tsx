'use client'

import React from 'react'
import Board from '@/lib/types/Board'
import BoardItem from '@/app/_components/molecules/BoardItem/BoardItem'

interface Props {
  boardList: Board[]
}

function BoardList({ boardList }: Props) {
  return (
    <section className="mx-auto mt-8 w-full max-w-7xl px-2">
      <h2 className="text-2xl font-bold">Notice</h2>
      <p className="font-maruBuri text-xs text-gray-700">
        소설로 자연스럽게 배우는 영어, 노벨덕의 소식입니다.
      </p>
      {boardList.map((board: Board) => (
        <BoardItem
          key={board.id}
          id={board.id}
          title={board.title}
          category={board.category}
          createdAt={board.created_at}
        />
      ))}
    </section>
  )
}

export default BoardList
