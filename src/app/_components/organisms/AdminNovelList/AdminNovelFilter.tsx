'use client'

import LinkTag from '@/app/_components/molecules/LinkTag/LinkTag'
import Category from '@/lib/types/Category'

interface Props {
  categoryList: Category[]
}

function AdminNovelFilter({ categoryList }: Props) {
  return (
    <div className="flex w-full flex-wrap items-center gap-2 pb-4 pt-1">
      {categoryList.map((category) => (
        <LinkTag
          key={category.id}
          id={category.id}
          link={`/admin/novels/category/${category.name}`}
        />
      ))}
    </div>
  )
}

export default AdminNovelFilter
