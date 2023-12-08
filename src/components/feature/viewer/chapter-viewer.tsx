'use client'

import React, { useEffect, useState } from 'react'
import { marked } from 'marked'
import DOMPurify from 'isomorphic-dompurify'
import Chapter from '@/lib/types/Chapter'
import ViewerSidebar from '@/components/feature/viewer/chapter-sidebar'
import { useChapterStore } from '@/lib/store/zustand'
import Learnings from '@/lib/types/Learnings'
import Affiliate from '@/lib/types/Affiliate'
import SourceItem from '@/components/feature/viewer/source-item'

interface Props {
  chapter: Chapter
  learningList: Learnings[]
  affiliateList: Affiliate[]
  affiliateCount: number
}

function ChapterViewer({
  chapter,
  learningList,
  affiliateList,
  affiliateCount,
}: Props) {
  const [content, setContent] = useState('')
  const { lang } = useChapterStore()

  useEffect(() => {
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
  }, [chapter.content, chapter.content_ja, chapter.content_ko, lang])

  return (
    <>
      <ViewerSidebar
        chapter={chapter}
        learningList={learningList}
        affiliateList={affiliateList}
        affiliateCount={affiliateCount}
      />
      <article
        className="prose mt-1 leading-10"
        dangerouslySetInnerHTML={{
          __html: marked(DOMPurify.sanitize(content)),
        }}
      />
      <SourceItem source={chapter.source} />
    </>
  )
}

export default ChapterViewer
