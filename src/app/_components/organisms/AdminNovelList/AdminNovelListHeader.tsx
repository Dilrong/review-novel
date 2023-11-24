'use client'

import React from 'react'

import Link from 'next-intl/link'
import Heading3 from '@/app/_components/atoms/Heading3/Heading3'
import Category from '@/lib/types/Category'
import AdminNovelFilter from '@/app/_components/organisms/AdminNovelList/AdminNovelFilter'

interface Props {
  categoryList: Category[]
}

function AdminNovelListHeader({ categoryList }: Props) {
  return (
    <div className="mb-2 flex justify-between">
      <div>
        <Heading3 text="소설 관리" />
        <AdminNovelFilter categoryList={categoryList} />
      </div>
      <Link href="/admin/novels/add">
        <button
          type="button"
          className="mb-2 mr-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-yellow-400 focus:outline-none"
        >
          소설 추가
        </button>
      </Link>
    </div>
  )
}

export default AdminNovelListHeader
