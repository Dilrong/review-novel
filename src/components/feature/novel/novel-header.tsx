'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'

interface Props {
  thumbnail: string
  title: string
  description: string
  author: string
  translator: string
}

function NovelHeader({
  thumbnail,
  title,
  description,
  author,
  translator,
}: Props) {
  const t = useTranslations()

  return (
    <article className="flex flex-col gap-8 md:flex-row">
      <Image
        className="rounded-sm"
        src={thumbnail}
        alt={title}
        width={200}
        height={300}
      />
      <div>
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          {title}
        </h2>
        <div className="py-2">0 Reviews</div>
        <div className="flex flex-col gap-1">
          <p className="text-sm text-muted-foreground">
            {t('novel_written_by_title')}: {author}
          </p>
          <p className="text-sm text-muted-foreground">
            {t('novel_translator_from_title')}: {translator}
          </p>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
    </article>
  )
}

export default NovelHeader
