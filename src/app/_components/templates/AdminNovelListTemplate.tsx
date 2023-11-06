'use client'

import React from 'react'
import ScreenContainer from '@/app/_components/molecules/Container/ScreenContainer'
import Novel from '@/lib/types/Novel'
import AdminNovelList from '@/app/_components/organisms/AdminNovelList'

interface Props {
  novelList: Novel[]
}

function AdminNovelListTemplate({ novelList }: Props) {
  return (
    <ScreenContainer>
      <AdminNovelList novelList={novelList} />
    </ScreenContainer>
  )
}

export default AdminNovelListTemplate
