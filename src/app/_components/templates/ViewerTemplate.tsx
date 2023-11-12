'use client'

import React from 'react'
import Chapter from '@/lib/types/Chapter'
import ScreenContainer from '@/app/_components/molecules/Container/ScreenContainer'
import ViewerContainer from '@/app/_components/molecules/Container/ViewerContainer'
import ChapterList from '@/app/_components/organisms/ChapterList'
import Heading2 from '@/app/_components/atoms/Heading2/Heading2'
import Loading from '@/app/_components/atoms/Loading/Loading'

interface Props {
  title: string
  chapterList: Chapter[]
}

function ViewerTemplate({ title, chapterList }: Props) {
  return (
    <ScreenContainer>
      <ViewerContainer>
        <Heading2 text={title} />
        <ChapterList chapterList={chapterList} />
      </ViewerContainer>
    </ScreenContainer>
  )
}

export default ViewerTemplate
