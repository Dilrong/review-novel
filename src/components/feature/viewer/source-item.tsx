'use client'

import React from 'react'
import Link from 'next-intl/link'
import { useTranslations } from 'next-intl'

interface Props {
  source: string
}

function SourceItem({ source }: Props) {
  const t = useTranslations()

  return (
    <div className="mt-8 flex ">
      <p className="mr-2 text-sm text-muted-foreground">{t('source_title')}:</p>
      <Link
        className="text-sm text-blue-700 hover:text-blue-600"
        href={source}
        target="_blank"
      >
        {source}
      </Link>
    </div>
  )
}

export default SourceItem
