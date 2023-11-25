'use client'

import React, { useEffect, useState } from 'react'
import { marked } from 'marked'
import DOMPurify from 'isomorphic-dompurify'
import Chapter from '@/lib/types/Chapter'
import ViewerSidebar from '@/components/feature/viewer/chapter-sidebar'
import { useChapterStore } from '@/lib/store/zustand'
import Learnings from '@/lib/types/Learnings'

interface Props {
  chapter: Chapter
  learningList: Learnings[]
}

function ChapterViewer({ chapter, learningList }: Props) {
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
  }, [lang])

  return (
    <>
      <ViewerSidebar learningList={learningList} />
      <article
        className="prose mt-1 leading-10"
        dangerouslySetInnerHTML={{
          __html: marked(DOMPurify.sanitize(content)),
        }}
      />
    </>
  )
}

export default ChapterViewer
