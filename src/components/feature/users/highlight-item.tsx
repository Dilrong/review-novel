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

interface Props {
  highlight: Highlights
}

function HighlightItem({ highlight }: Props) {
  const t = useTranslations()
  const router = useRouter()
  const { toast } = useToast()

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

      router.refresh()
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
          <Button variant="ghost" size="icon" onClick={deleteHighlight}>
            {t('my_highlight_delete_button')}
          </Button>
        </div>
      </CardHeader>
    </Card>
  )
}

export default HighlightItem
