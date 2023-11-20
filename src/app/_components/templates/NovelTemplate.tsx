'use client'

import React, { useEffect } from 'react'
import Novel from '@/lib/types/Novel'
import ScreenContainer from '@/app/_components/molecules/Container/ScreenContainer'
import BrowserContainer from '@/app/_components/molecules/Container/BrowserContainer'
import Heading3 from '@/app/_components/atoms/Heading3/Heading3'
import NovelFilter from '@/app/_components/organisms/NovelFilter'
import BrowserList from '@/app/_components/organisms/BrowserList'
import { useTranslations } from 'next-intl'
import Category from '@/lib/types/Category'
import mixpanel from 'mixpanel-browser'

interface Props {
  novelCount: number
  novelList: Novel[]
  categoryList: Category[]
  novelFilter: string
}

function NovelTemplate({
  novelCount,
  novelList,
  categoryList,
  novelFilter,
}: Props) {
  const t = useTranslations()

  useEffect(() => {
    mixpanel.track('Novel Page View')
  }, [])

  return (
    <ScreenContainer>
      <BrowserContainer>
        <Heading3 text={t('novel_page_title')} />
        <NovelFilter categoryList={categoryList} />
        <BrowserList
          novelCount={novelCount}
          novelList={novelList}
          novelFilter={novelFilter}
        />
      </BrowserContainer>
    </ScreenContainer>
  )
}

export default NovelTemplate
