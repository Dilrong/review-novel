'use client'

import Novel from '@/lib/types/Novel'
import NovelCard from '@/app/_components/molecules/NovelCard/NovelCard'
import Pagination from '@/app/_components/molecules/Pagination/Pagination'

interface Props {
  novelCount: number
  novelList: Novel[]
  novelFilter: string
}

function BrowserList({ novelCount, novelList, novelFilter }: Props) {
  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-2 justify-center gap-8 md:grid-cols-5 md:justify-start lg:grid-cols-4 xl:grid-cols-5">
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
      <Pagination novelCount={novelCount} novelFilter={novelFilter} />
    </div>
  )
}

export default BrowserList
