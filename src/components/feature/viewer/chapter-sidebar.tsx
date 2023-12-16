import { Badge } from '@/components/ui/badge'
import React, { useState } from 'react'
import { useChapterStore } from '@/lib/store/zustand'
import mixpanel from 'mixpanel-browser'
import Chapter from '@/lib/types/Chapter'

interface Props {
  chapter: Chapter
}

function ViewerSidebar({ chapter }: Props) {
  const { lang, setLang } = useChapterStore()
  const [isSpeaking, setSpeaking] = useState(false)

  const speak = () => {
    let content = chapter.content
    if (lang === 'ko') {
      content = chapter.content_ko
    } else if (lang === 'ja') {
      content = chapter.content_ja
    } else {
      content = chapter.content
    }

    const utterance = new SpeechSynthesisUtterance(content)
    utterance.lang = lang
    speechSynthesis.speak(utterance)
    setSpeaking(true)
    mixpanel.track('듣기 버튼 클릭', {
      lang: lang,
      chapter: chapter.id,
    })
  }

  const stopSpeak = () => {
    mixpanel.track('듣기 중지 버튼 클릭')
    setSpeaking(false)
    window.speechSynthesis.cancel()
  }

  return (
    <section className="fixed bottom-4 z-50">
      <div className="flex gap-2">
        <button
          onClick={() => {
            mixpanel.track('번역 버튼 클릭', { lang: lang })
            setLang('ko')
          }}
        >
          <Badge>🇰🇷 한국어</Badge>
        </button>
        <button
          onClick={() => {
            mixpanel.track('번역 버튼 클릭', { lang: lang })
            setLang('en')
          }}
        >
          <Badge>🇺🇸 English</Badge>
        </button>
        <button
          onClick={() => {
            mixpanel.track('번역 버튼 클릭', { lang: lang })
            setLang('ja')
          }}
        >
          <Badge>🇯🇵 日本語</Badge>
        </button>
        {isSpeaking ? (
          <button
            onClick={async () => {
              stopSpeak()
            }}
          >
            <Badge>🛑정지</Badge>
          </button>
        ) : (
          <button
            onClick={async () => {
              speak()
            }}
          >
            <Badge>🗣듣기</Badge>
          </button>
        )}
      </div>
    </section>
  )
}

export default ViewerSidebar
