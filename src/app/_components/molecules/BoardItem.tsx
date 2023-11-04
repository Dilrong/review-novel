'use client'

import Link from 'next/link'
import dayjs from 'dayjs'
import React from 'react'

interface Props {
  id: number
  title: string
  category: string
  createdAt: Date
}

function BoardItem({ id, title, category, createdAt }: Props) {
  return (
    <Link
      href={`boards/${id}`}
      key={id}
      className="flex flex-col border-b py-4 hover:bg-gray-50"
    >
      <div className="flex flex-col">
        <div className="flex">
          <p className="mr-1 font-bold">[{category}]</p>
          <p>{title}</p>
        </div>
        <p className="mt-1 text-sm text-gray-500">
          {dayjs(createdAt).format('YYYY.MM.DD')}
        </p>
      </div>
    </Link>
  )
}

export default BoardItem
