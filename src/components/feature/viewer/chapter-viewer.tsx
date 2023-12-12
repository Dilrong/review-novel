'use client'

import React, { useEffect, useState } from 'react'
import { marked } from 'marked'
import DOMPurify from 'isomorphic-dompurify'
import Chapter from '@/lib/types/Chapter'
import ViewerSidebar from '@/components/feature/viewer/chapter-sidebar'
import { useChapterStore, useUserStore } from '@/lib/store/zustand'
import Learnings from '@/lib/types/Learnings'
import Affiliate from '@/lib/types/Affiliate'
import SourceItem from '@/components/feature/viewer/source-item'
import { useRouter } from 'next/navigation'
import supabase from '@/lib/utils/supabase'
import { getHighlightList } from '@/lib/utils/supabaseQuery'
import { useTranslations } from 'next-intl'
import mixpanel from 'mixpanel-browser'

interface Props {
  chapter: Chapter
  learningList: Learnings[]
  affiliateList: Affiliate[]
  affiliateCount: number
}

// TODO: 하이라이트 테스트 기능으로 개선 예정
function ChapterViewer({
  chapter,
  learningList,
  affiliateList,
  affiliateCount,
}: Props) {
  const [content, setContent] = useState('')
  const router = useRouter()
  const { id } = useUserStore()
  const { lang } = useChapterStore()
  const t = useTranslations()

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

  useEffect(() => {
    if (id) getHighlightListByUser(id)
  }, [id])

  async function getHighlightListByUser(userId: string) {
    const highlightList = await getHighlightList(userId)

    highlightList.forEach((highlight) => {
      const elements = document.getElementsByTagName(highlight.tag_name)
      const item = elements[highlight.index_of_tags]

      if (item) {
        const innerHTML = item.innerHTML
        const index = innerHTML.indexOf(highlight.text)

        if (index >= 0) {
          const start = innerHTML.substring(0, index)
          const end = innerHTML.substring(index + highlight.text.length)

          item.innerHTML = `${start}<span class='bg-yellow-100 py-1 text-black'>${highlight.text}</span>${end}`
        }
      }
    })
  }

  async function addHighlight(
    selection: Selection,
    selectedText: string,
    range: Range,
  ) {
    const span = document.createElement('span')
    span.textContent = selectedText
    span.setAttribute('class', 'bg-yellow-100 py-1 text-black')
    range.deleteContents()
    range.insertNode(span)

    const parentElement = selection.anchorNode!.parentElement as HTMLElement
    const elements = document.getElementsByTagName(parentElement.tagName)
    const indexOfTags = Array.from(elements).indexOf(parentElement)

    const textContent = parentElement.textContent as string
    const startOffset = textContent.indexOf(selectedText)

    mixpanel.track('문구 형광펜', {
      selectedText,
    })

    await supabase.from('highlights').insert({
      tag_name: parentElement.tagName,
      index_of_tags: indexOfTags,
      text: selectedText,
      start_offset: startOffset,
      text_content: textContent,
      user_id: id,
      chapter_id: chapter.id,
    })
  }

  const handleContentMouseUp = () => {
    const selection = window.getSelection() as Selection
    const selectedText = selection.toString()

    if (selectedText !== '') {
      const tooltip = document.createElement('div')
      const range = selection.getRangeAt(0)
      const boundingRect = range.getBoundingClientRect()
      tooltip.innerHTML = `
    <div id='tooltip' class='z-50 flex gap-2 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2'>
      <button id='highlightButton'>${t('highlight_button')}</button>
      <div></div>
      <button id='copyTextButton'>${t('copy_text_button')}</button>
    </div>
    `
      tooltip.style.position = 'absolute'
      tooltip.style.top = `${boundingRect.top - 28}px`
      tooltip.style.left = `${(boundingRect.left + boundingRect.right) / 2}px`

      document.body.appendChild(tooltip)

      const highlightButton = document.getElementById('highlightButton')
      highlightButton!.addEventListener('click', () => {
        const tooltipElement = document.querySelector('#tooltip')
        if (tooltipElement) {
          tooltipElement.remove()
        }
        if (id) {
          addHighlight(selection, selectedText, range)
        } else {
          router.push('/users/login')
        }
      })

      const copyTextButton = document.getElementById('copyTextButton')
      copyTextButton!.addEventListener('click', () => {
        const tooltipElement = document.querySelector('#tooltip')
        if (tooltipElement) {
          tooltipElement.remove()
        }
        navigator.clipboard.writeText(selectedText)
        mixpanel.track('문구 복사', {
          selectedText,
        })
      })
    }
  }

  const handleContentMouseDown = () => {
    const tooltipElement = document.querySelector('#tooltip')
    if (tooltipElement) {
      tooltipElement.remove()
    }
  }

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
        onMouseUp={handleContentMouseUp}
        onMouseDown={handleContentMouseDown}
      />
      <SourceItem source={chapter.source} />
    </>
  )
}

export default ChapterViewer
