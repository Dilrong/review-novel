'use client'

import Novel from '@/lib/types/Novel'
import NovelCard from '@/app/_components/molecules/NovelCard'

interface Props {
  novelList: Novel[]
}

function BrowserList({ novelList }: Props) {
  // TODO: 인피니티 스크롤 작업

  return (
    <div className="flex flex-wrap justify-center gap-8 md:justify-start">
      {novelList.map((novel: Novel) => (
        <NovelCard
          key={novel.id}
          thumbnail={novel.thumbnail}
          id={novel.id}
          title={novel.title}
          category={novel.category_id}
        />
      ))}
    </div>
  )
}

export default BrowserList
