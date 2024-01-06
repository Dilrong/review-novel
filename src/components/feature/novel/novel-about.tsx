'use client'

import LinkTag from '@/components/feature/novels/link-tag'
import { Separator } from '@/components/ui/separator'
import { useTranslations } from 'next-intl'
import NovelReview from '@/components/feature/novel/novel-review'

interface Props {
  chapterCount: number
  licensed: string
  translator: string
  categoryId: number
}

function NovelAbout({ chapterCount, licensed, translator, categoryId }: Props) {
  const t = useTranslations()

  return (
    <section>
      <section className="mt-4 flex flex-col justify-between md:flex-row">
        <div className="py-2">
          <p className="text-sm text-muted-foreground">
            {t('novel_chapter_title')}
          </p>
          <p>
            {chapterCount} {t('novel_chapter_title')}
          </p>
        </div>
        <div className="py-2">
          <p className="text-sm text-muted-foreground">
            {t('novel_licensed_from_title')}
          </p>
          <p>{licensed}</p>
        </div>
        <div className="py-2">
          <p className="text-sm text-muted-foreground">
            {t('novel_translator_from_title')}
          </p>
          <p>{translator}</p>
        </div>
      </section>
      <section className="mt-4">
        <LinkTag id={categoryId} link="#" />
      </section>
      <Separator className="my-6" />
      <NovelReview />
    </section>
  )
}

export default NovelAbout
