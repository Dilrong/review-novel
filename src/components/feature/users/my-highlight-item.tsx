'use client'

import React from 'react'

import { useTranslations } from 'next-intl'
import { Card, CardHeader } from '@/components/ui/card'
import Link from 'next-intl/link'
import { Button } from '@/components/ui/button'
import Highlights from '@/lib/types/Highlights'
import supabase from '@/lib/utils/supabase'
import { useToast } from '@/components/ui/use-toast'
import { useRouter } from 'next/navigation'
import mixpanel from 'mixpanel-browser'
import { useUserStore } from '@/lib/store/zustand'

interface Props {
  highlight: Highlights
}

function MyHighlightItem({ highlight }: Props) {
  const t = useTranslations()
  const router = useRouter()
  const { toast } = useToast()
  const { id: userId } = useUserStore()

  const deleteHighlight = async () => {
    const { error } = await supabase
      .from('highlights')
      .delete()
      .eq('id', highlight.id)

    if (!error) {
      toast({
        title: t('my_highlight_delete_toast_title'),
        description: highlight.text,
      })

      mixpanel.track('형광펜 삭제', {
        selectedText: highlight.text,
      })
      router.refresh()
    }
  }

  const shareHighlight = async () => {
    if (!navigator.canShare) {
      toast({
        title: '공유하기를 지원하지 않는 환경이에요.',
        description: '다른 기기나 브라우저에서 공유하기를 해주세요.',
      })
    } else {
      await navigator.share({
        text: highlight.text,
        url: `https://novelduck.farm/viewer/${highlight.chapter_id}`,
      })

      mixpanel.track('형광펜 공유', {
        selectedText: highlight.text,
      })
    }
  }

  return (
    <Card key={highlight.id}>
      <CardHeader>
        <Link
          className="hover:bg-yellow-100 hover:text-black"
          href={`/viewer/${highlight.chapter_id}`}
        >
          {highlight.text}
        </Link>
        <div className="mt-2 flex gap-2">
          {highlight.user_id === userId && (
            <Button variant="ghost" size="icon" onClick={deleteHighlight}>
              {t('my_highlight_delete_button')}
            </Button>
          )}
          <Button variant="ghost" size="icon" onClick={shareHighlight}>
            {t('my_highlight_share_button')}
          </Button>
        </div>
      </CardHeader>
    </Card>
  )
}

export default MyHighlightItem
