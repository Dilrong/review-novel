'use client'

import React, { useEffect, useState } from 'react'

import Link from 'next/link'
import { marked } from 'marked'
import DOMPurify from 'dompurify'
import Chapter from '@/lib/types/Chapter'
import TranslationButton from './components/TranslationButton'

interface Props {
  chapterList: Chapter[]
}

function ClientPage({ chapterList }: Props) {
  const [content, setContent] = useState('')

  useEffect(() => {
    setContent(chapterList[0].content)
  }, [chapterList])

  const translationContent = (lang: string) => {
    switch (lang) {
      case 'ko':
        setContent(chapterList[0].content_ko)
        break
      case 'jp':
        setContent(chapterList[0].content_jp)
        break
      default:
        setContent(chapterList[0].content)
        break
    }
  }

  marked.use({
    gfm: true,
    breaks: true,
  })

  return (
    <div className="flex flex-col min-h-screen px-4">
      <section className="flex flex-col w-full max-w-7xl mx-auto py-4 font-maruBuri">
        {chapterList.map((chapter: Chapter) => (
          <div key={chapter.id}>
            <div>
              <h3 className="text-4xl font-bold">{chapter.title}</h3>
              <div className="flex items-center justify-between gap-4 py-2">
                <div className="flex text-sm gap-2">
                  <TranslationButton
                    name="EN"
                    handleClick={() => {
                      translationContent('en')
                    }}
                  />
                  {chapterList[0].content_jp !== "''::text" && (
                    <TranslationButton
                      name="KO"
                      handleClick={() => {
                        translationContent('ko')
                      }}
                    />
                  )}
                  {chapterList[0].content_jp !== "''::text" && (
                    <TranslationButton
                      name="JP"
                      handleClick={() => {
                        translationContent('jp')
                      }}
                    />
                  )}
                </div>
                <p className="text-xs text-gray-500">
                  {new Intl.DateTimeFormat('kr').format(
                    new Date(chapter.created_at),
                  )}
                </p>
              </div>
            </div>
            <article
              className="prose leading-10"
              dangerouslySetInnerHTML={{
                __html: marked(DOMPurify.sanitize(content)),
              }}
            />
            <p className="text-xs mt-4 truncate">
              <span className="mr-1">출처:</span>
              <Link
                className="text-blue-900"
                href={chapter.source}
                target="_blank"
              >
                {chapter.source}
              </Link>
            </p>
            <hr className="h-px my-20 bg-gray-200 border-0 dark:bg-gray-700" />
          </div>
        ))}
      </section>
    </div>
  )
}

export default ClientPage
