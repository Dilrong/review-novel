'use client'

import React from 'react'
import Chapter from '@/lib/types/Chapter'
import ScreenContainer from '@/app/_components/molecules/Container/ScreenContainer'
import ViewerContainer from '@/app/_components/molecules/Container/ViewerContainer'
import ChapterList from '@/app/_components/organisms/ChapterList'
import PageNav from '@/app/_components/molecules/PageNav/PageNav'
import mixpanel from 'mixpanel-browser'

interface Props {
  id: string
  title: string
  novelCount: number
  chapterList: Chapter[]
}

function ViewerTemplate({ id, title, novelCount, chapterList }: Props) {
  mixpanel.track('Novel Page View', {
    id,
    title,
  })

  return (
    <ScreenContainer>
      <ViewerContainer>
        <h1 className="text-4xl font-bold">{title}</h1>
        <ChapterList chapterList={chapterList} />
        <PageNav currentPageParams={id} novelCount={novelCount} />
      </ViewerContainer>
    </ScreenContainer>
  )
}

export default ViewerTemplate
