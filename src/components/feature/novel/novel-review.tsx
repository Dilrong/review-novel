'use client'

import { useTranslations } from 'next-intl'

function NovelReview() {
  const t = useTranslations()
  return (
    <article>
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
        {t('novel_reviews_title')}
      </h3>
      <p className="mt-2 pb-8 text-center text-muted-foreground">
        🥹 리뷰를 준비하고 있어요
      </p>
    </article>
  )
}

export default NovelReview
