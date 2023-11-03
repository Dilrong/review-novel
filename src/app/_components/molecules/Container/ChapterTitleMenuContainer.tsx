'use client'

import React, { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

function ChapterTitleMenuContainer({ children }: Props) {
  return (
    <div className="flex items-center justify-between gap-4 py-2">
      {children}
    </div>
  )
}

export default ChapterTitleMenuContainer
