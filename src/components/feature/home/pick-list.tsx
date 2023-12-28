'use client'

import Novel from '@/lib/types/Novel'
import React from 'react'
import NovelCard from '@/components/feature/novels/novel-card'
import { useTranslations } from 'next-intl'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'

interface Props {
  novelList: Novel[]
}

function PickList({ novelList }: Props) {
  const t = useTranslations()

  return (
    <section className="my-8">
      <article className="mx-auto max-w-7xl px-2">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          {t('pick_list_title')}
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">
          {t('pick_list_desc')}
        </p>
        <div className="mt-4">
          <Carousel className="w-full max-w-7xl">
            <CarouselContent>
              {novelList.map((novel: Novel) => (
                <CarouselItem key={novel.id} className="basis-1/2 lg:basis-1/5">
                  <NovelCard
                    key={novel.id}
                    id={novel.id}
                    thumbnail={novel.thumbnail}
                    title={novel.title}
                    category={novel.category_id}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </article>
    </section>
  )
}

export default PickList
