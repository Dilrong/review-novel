'use client'

import dayjs from 'dayjs'
import React from 'react'

interface Props {
  title: string
  createdAt: Date
}

function BoardTitle({ title, createdAt }: Props) {
  return (
    <>
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="my-1 text-sm text-gray-500">
        {dayjs(createdAt).format('YYYY.MM.DD')}
      </p>
    </>
  )
}

export default BoardTitle
