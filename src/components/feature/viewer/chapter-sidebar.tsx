import { Badge } from '@/components/ui/badge'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import React, { useState } from 'react'
import { useChapterStore } from '@/lib/store/zustand'
import Learnings from '@/lib/types/Learnings'
import LearningViewer from '@/components/feature/viewer/learning-viewer'
import mixpanel from 'mixpanel-browser'
import Chapter from '@/lib/types/Chapter'

interface Props {
  chapter: Chapter
  learningList: Learnings[]
}

function ViewerSidebar({ chapter, learningList }: Props) {
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
    <section className="fixed bottom-4">
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
        {learningList.length ? (
          <Popover>
            <PopoverTrigger>
              <Badge
                onClick={() => {
                  mixpanel.track('학습 버튼 클릭', {
                    chapterId: learningList.filter(
                      (learning) => learning.lang === lang,
                    )[0].chapter_id,
                    lang: lang,
                  })
                }}
              >
                🤖 학습
              </Badge>
            </PopoverTrigger>
            <PopoverContent>
              <LearningViewer
                content={
                  learningList.filter((learning) => learning.lang === lang)[0]
                    .content
                }
              />
            </PopoverContent>
          </Popover>
        ) : (
          <div />
        )}
      </div>
    </section>
  )
}

export default ViewerSidebar
