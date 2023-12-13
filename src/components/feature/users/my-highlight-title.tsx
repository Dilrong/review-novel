'use client'

import React from 'react'

import { useTranslations } from 'next-intl'

function MyHighlightTitle() {
  const t = useTranslations()

  return (
    <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
      {t('my_highlight_title')}
    </h2>
  )
}

export default MyHighlightTitle
