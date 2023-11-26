import { Badge } from '@/components/ui/badge'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import React from 'react'
import { useChapterStore } from '@/lib/store/zustand'
import Learnings from '@/lib/types/Learnings'
import LearningViewer from '@/components/feature/viewer/learning-viewer'
import mixpanel from 'mixpanel-browser'
import Chapter from '@/lib/types/Chapter'
import speakText from '@/lib/utils/tts'

interface Props {
  chapter: Chapter
  learningList: Learnings[]
}

function ViewerSidebar({ chapter, learningList }: Props) {
  const { lang, setLang } = useChapterStore()

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
        <button
          onClick={async () => {
            mixpanel.track('듣기 버튼 클릭')
            if (lang === 'ko') {
              await speakText(chapter.content_ko, lang)
            } else if (lang === 'ja') {
              await speakText(chapter.content_ja, lang)
            } else {
              await speakText(chapter.content, lang)
            }
          }}
        >
          <Badge>🗣듣기</Badge>
        </button>
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
