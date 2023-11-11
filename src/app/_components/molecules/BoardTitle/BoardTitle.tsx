'use client'

import dayjs from 'dayjs'
import React from 'react'
import Heading2 from '@/app/_components/atoms/Heading2/Heading2'

interface Props {
  title: string
  createdAt: Date
}

function BoardTitle({ title, createdAt }: Props) {
  return (
    <>
      <Heading2 text={title} />
      <p className="my-1 text-sm text-gray-500">
        {dayjs(createdAt).format('YYYY.MM.DD')}
      </p>
    </>
  )
}

export default BoardTitle
