'use client'

import Novel from '@/lib/types/Novel'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import NovelCard from '@/components/feature/novels/novel-card'
import { useTranslations } from 'next-intl'

interface Props {
  novelList: Novel[]
}

function PickList({ novelList }: Props) {
  const t = useTranslations()

  return (
    <section className="mt-8">
      <article className="mx-auto max-w-7xl px-2">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          {t('pick_list_title')}
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">
          {t('pick_list_desc')}
        </p>
        <div className="mt-2 flex flex-col gap-4">
          <div>
            <Swiper
              className="my-8"
              slidesPerView={2}
              spaceBetween={12}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                768: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 30,
                },
              }}
            >
              {novelList.map((novel: Novel) => (
                <SwiperSlide
                  className="m-1 flex justify-center align-middle"
                  key={novel.id}
                >
                  <NovelCard
                    key={novel.id}
                    id={novel.id}
                    thumbnail={novel.thumbnail}
                    title={novel.title}
                    category={novel.category_id}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </article>
    </section>
  )
}

export default PickList
