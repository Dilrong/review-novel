'use client'

import React, { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

function ChapterTitleContainer({ children }: Props) {
  return (
    <div className="mt-4 truncate">
      <div className="flex flex-col">{children}</div>
    </div>
  )
}

export default ChapterTitleContainer
