'use client'

import ChapterTitleContainer from '@/app/_components/molecules/Container/ChapterTitleContainer'
import Heading3 from '@/app/_components/atoms/Heading3'
import ChapterTitleMenuContainer from '@/app/_components/molecules/Container/ChapterTitleMenuContainer'
import LocaleDate from '@/app/_components/molecules/LocaleDate'
import Viewer from '@/app/_components/atoms/Viewer'
import ChapterSource from '@/app/_components/molecules/ChapterSource'
import Hr from '@/app/_components/atoms/Hr'
import React, { useEffect, useState } from 'react'
import Chapter from '@/lib/types/Chapter'
import TranslationButton from '@/app/_components/molecules/TranslationButton'

interface Props {
  chapter: Chapter
}

function ChapterViewer({ chapter }: Props) {
  // TODO: 별도의 컴포넌트로 빼기 - TranslationMenu
  const [content, setContent] = useState('')

  useEffect(() => {
    setContent(chapter.content)
  }, [chapter.content])

  function setContentLang(lang: string) {
    switch (lang) {
      case 'ko':
        setContent(chapter.content_ko)
        break
      case 'jp':
        setContent(chapter.content_jp)
        break
      default:
        setContent(chapter.content)
        break
    }
  }

  // eslint-disable-next-line react/no-unstable-nested-components
  function TranslationMenu() {
    return (
      <div className="flex gap-2">
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
            setContentLang('jp')
          }}
        />
      </div>
    )
  }

  return (
    <>
      <ChapterTitleContainer>
        <Heading3 text={chapter.title} />
        <ChapterTitleMenuContainer>
          <TranslationMenu />
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
