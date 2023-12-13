'use client'

import React from 'react'

import { useTranslations } from 'next-intl'
import Link from 'next-intl/link'
import { Button } from '@/components/ui/button'

function MyHighlightNotFound() {
  const t = useTranslations()

  return (
    <div className="mt-8 flex flex-col gap-2 text-center">
      <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
        {t('my_highlight_not_found_title')}
      </h3>
      <p className="leading-7 text-muted-foreground [&:not(:first-child)]:mt-6">
        {t('my_highlight_not_found_desc')}
      </p>
      <Button variant="link">
        <Link href="/novels">{t('my_highlight_not_found_button')}</Link>
      </Button>
    </div>
  )
}

export default MyHighlightNotFound
