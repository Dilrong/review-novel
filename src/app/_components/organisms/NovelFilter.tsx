'use client'

import LinkTag from '@/app/_components/molecules/LinkTag'
import { useTranslations } from 'next-intl'

function NovelFilter() {
  const t = useTranslations()

  return (
    <div className="flex w-full items-center gap-4 overflow-auto pb-4 pt-1">
      <LinkTag
        link="/novels/category/fantasy"
        text={t('novel_category_fantasy')}
      />
      <LinkTag link="/novels/category/fun" text={t('NOVEL_CATEGORY_FUN')} />
      <LinkTag link="/novels/category/meme" text={t('NOVEL_CATEGORY_MEME')} />
      <LinkTag
        link="/novels/category/motivation"
        text={t('novel_category_motivation')}
      />
      <LinkTag
        link="/novels/category/horror"
        text={t('novel_category_horror')}
      />
      <LinkTag
        link="/novels/category/romance"
        text={t('novel_category_romance')}
      />
      <LinkTag link="/novels/category/sad" text={t('novel_category_sad')} />
      <LinkTag link="/novels/category/sf" text={t('novel_category_sf')} />
      <LinkTag link="/novels/category/etc" text={t('novel_category_etc')} />
    </div>
  )
}

export default NovelFilter
