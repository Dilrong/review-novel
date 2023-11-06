'use client'

import React from 'react'
import Novel from '@/lib/types/Novel'
import ScreenContainer from '@/app/_components/molecules/Container/ScreenContainer'
import BrowserContainer from '@/app/_components/molecules/Container/BrowserContainer'
import Heading3 from '@/app/_components/atoms/Heading3'
import NovelFilter from '@/app/_components/organisms/NovelFilter'
import BrowserList from '@/app/_components/organisms/BrowserList'
import { useTranslations } from 'next-intl'

interface Props {
  novelList: Novel[]
}

function NovelTemplate({ novelList }: Props) {
  const t = useTranslations()

  return (
    <ScreenContainer>
      <BrowserContainer>
        <Heading3 text={t('novel_page_title')} />
        <NovelFilter />
        <BrowserList novelList={novelList} />
      </BrowserContainer>
    </ScreenContainer>
  )
}

export default NovelTemplate
