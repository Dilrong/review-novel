'use client'

import React from 'react'
import Affiliate from '@/lib/types/Affiliate'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Badge } from '@/components/ui/badge'
import mixpanel from 'mixpanel-browser'
import LearningViewer from '@/components/feature/viewer/learning-viewer'
import Learnings from '@/lib/types/Learnings'

interface Props {
  learnings: Learnings | undefined
  lang: string
  affiliateList: Affiliate[]
  affiliateCount: number
}

function LearningPopover({
  learnings,
  lang,
  affiliateList,
  affiliateCount,
}: Props) {
  if (!learnings) return null

  return (
    <Popover>
      <PopoverTrigger>
        <Badge
          onClick={() => {
            mixpanel.track('학습 버튼 클릭', {
              chapterId: learnings.chapter_id,
              lang: lang,
            })
          }}
        >
          🤖 학습
        </Badge>
      </PopoverTrigger>
      <PopoverContent>
        <LearningViewer
          content={learnings.content}
          affiliateList={affiliateList}
          affiliateCount={affiliateCount}
        />
      </PopoverContent>
    </Popover>
  )
}

export default LearningPopover
