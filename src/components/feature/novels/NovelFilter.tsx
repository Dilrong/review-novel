'use client'

import LinkTag from '@/components/feature/novels/LinkTag'
import Category from '@/lib/types/Category'

interface Props {
  categoryList: Category[]
}

function NovelFilter({ categoryList }: Props) {
  return (
    <div className="flex w-full flex-wrap items-center gap-2 pb-4 pt-1">
      {categoryList.map((category) => (
        <LinkTag
          key={category.id}
          id={category.id}
          link={`/novels/category/${category.name}`}
        />
      ))}
    </div>
  )
}

export default NovelFilter
