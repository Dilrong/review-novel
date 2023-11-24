'use client'

import ChapterTitleContainer from '@/app/_components/molecules/Container/ChapterTitleContainer'
import ChapterTitleMenuContainer from '@/app/_components/molecules/Container/ChapterTitleMenuContainer'
import LocaleDate from '@/components/feature/novels/LocaleDate'
import Viewer from '@/components/ui/viewer'
import ChapterSource from '@/components/feature/novels/ChapterSource'
import Hr from '@/app/_components/atoms/Hr/Hr'
import React, { useEffect, useState } from 'react'
import Chapter from '@/lib/types/Chapter'
import TranslationButton from '@/components/feature/viewer/TranslationButton'

interface Props {
  chapter: Chapter
}

function ChapterViewer({ chapter }: Props) {
  const [content, setContent] = useState('')

  useEffect(() => {
    setContent(chapter.content)
  }, [chapter.content])

  function setContentLang(lang: string) {
    switch (lang) {
      case 'ko':
        setContent(chapter.content_ko)
        break
      case 'ja':
        setContent(chapter.content_ja)
        break
      default:
        setContent(chapter.content)
        break
    }
  }

  // eslint-disable-next-line react/no-unstable-nested-components
  function TranslationMenuPc() {
    return (
      <div className="hidden gap-2 md:flex">
        <TranslationButton
          name="🇺🇸 EN"
          handleClick={() => {
            setContentLang('en')
          }}
        />
        <TranslationButton
          name="🇰🇷 한국어"
          handleClick={() => {
            setContentLang('ko')
          }}
        />
        <TranslationButton
          name="🇯🇵 日本語"
          handleClick={() => {
            setContentLang('ja')
          }}
        />
      </div>
    )
  }

  // eslint-disable-next-line react/no-unstable-nested-components
  function TranslationMenuMobile() {
    return (
      <div className="fixed bottom-2 right-2 flex gap-2 md:hidden">
        <TranslationButton
          name="🇺🇸 EN"
          handleClick={() => {
            setContentLang('en')
          }}
        />
        <TranslationButton
          name="🇰🇷 한국어"
          handleClick={() => {
            setContentLang('ko')
          }}
        />
        <TranslationButton
          name="🇯🇵 日本語"
          handleClick={() => {
            setContentLang('ja')
          }}
        />
      </div>
    )
  }

  return (
    <>
      <ChapterTitleContainer>
        <ChapterTitleMenuContainer>
          <TranslationMenuPc />
          <TranslationMenuMobile />
          <LocaleDate date={chapter.created_at} />
        </ChapterTitleMenuContainer>
      </ChapterTitleContainer>
      <Viewer content={content} />
      <ChapterSource source={chapter.source} />
      <Hr />
    </>
  )
}

export default ChapterViewer
