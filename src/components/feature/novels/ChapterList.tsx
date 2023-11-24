'use client'

import React from 'react'
import Chapter from '@/lib/types/Chapter'
import ChapterViewer from '@/components/feature/novels/ChapterViewer'

interface Props {
  chapterList: Chapter[]
}

function ChapterList({ chapterList }: Props) {
  return (
    <>
      {chapterList.map((chapter: Chapter) => (
        <ChapterViewer key={chapter.id} chapter={chapter} />
      ))}
    </>
  )
}

export default ChapterList
