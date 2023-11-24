'use client'

import React, { useEffect, useState } from 'react'
import { marked } from 'marked'
import DOMPurify from 'isomorphic-dompurify'
import Chapter from '@/lib/types/Chapter'
import { Badge } from '@/components/ui/badge'

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

  function ViewerSidebar() {
    return (
      <section className="fixed bottom-4">
        <div className="flex gap-2">
          <button
            onClick={() => {
              setContentLang('ko')
            }}
          >
            <Badge>🇰🇷 한국어</Badge>
          </button>
          <button
            onClick={() => {
              setContentLang('en')
            }}
          >
            <Badge>🇺🇸 English</Badge>
          </button>
          <button
            onClick={() => {
              setContentLang('ja')
            }}
          >
            <Badge>🇯🇵 日本語</Badge>
          </button>
          {/*<Popover>*/}
          {/*  <PopoverTrigger>*/}
          {/*    <Badge>🤖 학습</Badge>*/}
          {/*  </PopoverTrigger>*/}
          {/*  <PopoverContent>학습 컨텐츠 영역</PopoverContent>*/}
          {/*</Popover>*/}
        </div>
      </section>
    )
  }

  return (
    <>
      <ViewerSidebar />
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
