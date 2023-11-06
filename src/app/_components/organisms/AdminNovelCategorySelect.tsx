'use client'

import React from 'react'
import Select from '@/app/_components/atoms/Select'
import Category from '@/lib/types/Category'

interface Props {
  categoryList: Category[]
}

function AdminNovelCategorySelect({ categoryList }: Props) {
  return (
    <Select>
      <option selected>카테고리를 선택해주세요.</option>
      {categoryList.map((category) => (
        <option key={category.id} value={category.name}>
          {category.name}
        </option>
      ))}
    </Select>
  )
}

export default AdminNovelCategorySelect
