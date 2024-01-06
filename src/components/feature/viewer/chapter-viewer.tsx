'use client'

import React from 'react'
import { marked } from 'marked'
import DOMPurify from 'isomorphic-dompurify'
import Chapter from '@/lib/types/Chapter'
import { useChapterStore } from '@/lib/store/zustand'
import ChapterHighlight from '@/components/feature/viewer/chapter-highlight'

interface Props {
  chapter: Chapter
}

function ChapterViewer({ chapter }: Props) {
  const { lang } = useChapterStore()

  return (
    <>
      <ChapterHighlight chapterId={chapter.id} lang={lang}>
        <article
          className="prose mt-1 leading-10"
          dangerouslySetInnerHTML={{
            __html: marked(DOMPurify.sanitize(chapter.content_ko)),
          }}
        />
      </ChapterHighlight>
    </>
  )
}

export default ChapterViewer
