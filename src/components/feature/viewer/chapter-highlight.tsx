'use client'

import React, { ReactNode, useEffect } from 'react'
import Link from 'next-intl/link'
import { useTranslations } from 'next-intl'
import { useUserStore } from '@/lib/store/zustand'
import { getHighlightList } from '@/lib/utils/supabase-query'
import mixpanel from 'mixpanel-browser'
import supabase from '@/lib/utils/supabase'
import { useToast } from '@/components/ui/use-toast'
import { ToastAction } from '@/components/ui/toast'

interface Props {
  children: ReactNode
  chapterId: number
  lang: string
}

function ChapterHighlight({ children, chapterId, lang }: Props) {
  const t = useTranslations()
  const { id } = useUserStore()
  const { toast } = useToast()

  useEffect(() => {
    if (id) {
      getHighlightListByUser(id)
    }
  }, [id, lang])

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

          item.innerHTML = `${start}<mark class='cursor-pointer bg-yellow-100 py-1 text-black'>${highlight.text}</mark>${end}`
          item.addEventListener('click', (event) => {
            toast({
              title: t('highlight_toast_title'),
              action: (
                <ToastAction altText={t('highlight_action_title')}>
                  <Link href={`/users/${id}/highlights`}>
                    {t('highlight_action_title')}
                  </Link>
                </ToastAction>
              ),
            })
          })
        }
      }
    })
  }

  // 하이라이팅
  const handleHighlightClick = (
    selection: Selection,
    selectedText: string,
    range: Range,
  ) => {
    if (id) {
      setHighlight(selection, selectedText, range)
    } else {
      toast({
        title: t('highlight_require_toast_title'),
        action: (
          <ToastAction altText={t('highlight_require_action_title')}>
            <Link href="/users/login">
              {t('highlight_require_action_title')}
            </Link>
          </ToastAction>
        ),
      })
    }
  }

  const setHighlight = async (
    selection: Selection,
    selectedText: string,
    range: Range,
  ) => {
    const mark = document.createElement('mark')
    mark.textContent = selectedText
    mark.setAttribute('class', 'bg-yellow-100 py-1 text-black')
    mark.style.cursor = 'pointer'
    mark.addEventListener('click', (event) => {
      toast({
        title: t('highlight_toast_title'),
        action: (
          <ToastAction altText={t('highlight_action_title')}>
            <Link href={`/users/${id}/highlights`}>
              {t('highlight_action_title')}
            </Link>
          </ToastAction>
        ),
      })
    })

    range.deleteContents()
    range.insertNode(mark)

    const parentElement = selection.anchorNode!.parentElement as HTMLElement
    const elements = document.getElementsByTagName(parentElement.tagName)
    const indexOfTags = Array.from(elements).indexOf(parentElement)
    const textContent = parentElement.textContent as string
    const startOffset = textContent.indexOf(selectedText)

    mixpanel.track('문구 형광펜', {
      selectedText,
    })

    await saveHighlight(
      parentElement.tagName,
      indexOfTags,
      textContent,
      startOffset,
    )
  }

  const saveHighlight = async (
    tagName: string,
    index: number,
    text: string,
    start: number,
  ) => {
    const { error } = await supabase.from('highlights').insert({
      tag_name: tagName,
      index_of_tags: index,
      text: text,
      start_offset: start,
      user_id: id,
      chapter_id: chapterId,
    })

    if (!error) {
      toast({
        title: t('highlight_confirm_toast_title'),
      })
    } else {
      toast({
        title: t('highlight_error_toast_title'),
      })
    }
  }

  // 툴팁
  const showTooltip = (selection: Selection, selectedText: string) => {
    const tooltip = document.createElement('div')
    const range = selection.getRangeAt(0)
    const boundingRect = range.getBoundingClientRect()

    tooltip.innerHTML = `  
      <div id='tooltip' class='z-50 flex gap-2 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2'>        
      <button id='highlightButton'>${t('highlight_button')}</button>
      <button id='copyTextButton'>${t('copy_text_button')}</button>  
      </div>`
    tooltip.style.position = 'absolute'
    tooltip.style.top = `${boundingRect.top - 28}px`
    tooltip.style.left = `${(boundingRect.left + boundingRect.right) / 2}px`

    document.body.appendChild(tooltip)

    const highlightButton = document.getElementById('highlightButton')
    highlightButton!.addEventListener('click', () =>
      handleHighlightClick(selection, selectedText, range),
    )

    const copyTextButton = document.getElementById('copyTextButton')
    copyTextButton!.addEventListener('click', () =>
      handleCopyTextClick(selectedText),
    )
  }

  const deleteTooltip = () => {
    const tooltipElement = document.querySelector('#tooltip')
    if (tooltipElement) {
      tooltipElement.remove()
    }
  }

  const handleCopyTextClick = (selectedText: string) => {
    deleteTooltip()
    navigator.clipboard.writeText(selectedText)
    mixpanel.track('문구 복사', { selectedText })
  }

  // 마우스 이벤트
  const handleMouseUp = () => {
    const selection = window.getSelection() as Selection
    const selectedText = selection.toString()

    if (selectedText !== '') {
      showTooltip(selection, selectedText)
    } else {
      deleteTooltip()
    }
  }

  const handleMouseDown = () => {
    deleteTooltip()
  }

  return (
    <div onMouseUp={handleMouseUp} onMouseDown={handleMouseDown}>
      {children}
    </div>
  )
}

export default ChapterHighlight
