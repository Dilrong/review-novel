'use client'

import React from 'react'
import Novel from '@/lib/types/Novel'
import NovelList from './components/NovelList'

interface Props {
  data: Novel[]
}

function ClientPage({ data }: Props) {
  return (
    <>
      <h1 className="text-xl font-bold">소설 관리</h1>
      <div className="mt-8">
        <NovelList novelList={data} />
      </div>
    </>
  )
}

export default ClientPage
