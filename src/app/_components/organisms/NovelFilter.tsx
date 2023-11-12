'use client'

import LinkTag from '@/app/_components/molecules/LinkTag/LinkTag'
import Category from '@/lib/types/Category'

interface Props {
  categoryList: Category[]
}

function NovelFilter({ categoryList }: Props) {
  return (
    <div className="flex w-full items-center gap-4 pb-4 pt-1">
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
