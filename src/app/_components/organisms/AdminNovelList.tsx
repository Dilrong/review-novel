'use client'

import Novel from '@/lib/types/Novel'
import React from 'react'

import Link from 'next-intl/link'
import AdminNovelItem from '@/app/_components/molecules/AdminNovelItem'
import Heading3 from '@/app/_components/atoms/Heading3/Heading3'

interface Props {
  novelList: Novel[]
}

function AdminNovelList({ novelList }: Props) {
  return (
    <div className="relative overflow-auto">
      <div className="mb-2 flex justify-between">
        <Heading3 text="소설 관리" />
        <Link href="/admin/novels/add">
          <button
            type="button"
            className="mb-2 mr-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-yellow-400 focus:outline-none"
          >
            소설 추가
          </button>
        </Link>
      </div>
      <table className="w-full text-left text-sm text-gray-500">
        <thead className=" bg-gray-50 uppercase text-gray-700">
          <tr>
            <th scope="col" className="px-6 py-3">
              제목
            </th>
            <th scope="col" className="px-6 py-3">
              카테고리
            </th>
            <th scope="col" className="px-6 py-3">
              길이
            </th>
            <th scope="col" className="px-6 py-3">
              등록일
            </th>
          </tr>
        </thead>
        <tbody>
          {novelList?.map((novel: Novel) => (
            <AdminNovelItem key={novel.id} novel={novel} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default AdminNovelList
