'use client'

import React, { useEffect, useState } from 'react'
import { marked } from 'marked'
import DOMPurify from 'isomorphic-dompurify'
import Chapter from '@/lib/types/Chapter'
import ViewerSidebar from '@/components/feature/viewer/chapter-sidebar'
import { useChapterStore } from '@/lib/store/zustand'
import SourceItem from '@/components/feature/viewer/source-item'
import ChapterHighlight from '@/components/feature/viewer/chapter-highlight'

interface Props {
  chapter: Chapter
}

function ChapterViewer({ chapter }: Props) {
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
      <ViewerSidebar chapter={chapter} />
      <ChapterHighlight chapterId={chapter.id} lang={lang}>
        <article
          className="prose mt-1 leading-10"
          dangerouslySetInnerHTML={{
            __html: marked(DOMPurify.sanitize(content)),
          }}
        />
      </ChapterHighlight>
      <SourceItem source={chapter.source} />
    </>
  )
}

export default ChapterViewer
