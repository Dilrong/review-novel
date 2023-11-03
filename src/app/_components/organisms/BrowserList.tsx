'use client'

import Novel from '@/lib/types/Novel'
import React from 'react'
import NovelCard from '@/app/_components/molecules/NovelCard'

interface Props {
  novelList: Novel[]
}

function BrowserList({ novelList }: Props) {
  return (
    <div className="flex flex-wrap justify-center gap-8 md:justify-start">
      {novelList.map((novel: Novel) => (
        <NovelCard
          key={novel.id}
          id={novel.id}
          title={novel.title}
          category={novel.category}
        />
      ))}
    </div>
  )
}

export default BrowserList
