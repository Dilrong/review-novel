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
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        {title}
      </h2>
      <p className="my-1 text-sm">{dayjs(createdAt).format('YYYY.MM.DD')}</p>
    </>
  )
}

export default BoardTitle
