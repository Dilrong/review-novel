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

interface Props {
  learningList: Learnings[]
}

function ViewerSidebar({ learningList }: Props) {
  const { lang, setLang } = useChapterStore()

  return (
    <section className="fixed bottom-4">
      <div className="flex gap-2">
        <button
          onClick={() => {
            setLang('ko')
          }}
        >
          <Badge>🇰🇷 한국어</Badge>
        </button>
        <button
          onClick={() => {
            setLang('en')
          }}
        >
          <Badge>🇺🇸 English</Badge>
        </button>
        <button
          onClick={() => {
            setLang('ja')
          }}
        >
          <Badge>🇯🇵 日本語</Badge>
        </button>
        {learningList.length ? (
          <Popover>
            <PopoverTrigger>
              <Badge>🤖 학습</Badge>
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
