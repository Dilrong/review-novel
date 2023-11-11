'use client'

import Novel from '@/lib/types/Novel'
import React from 'react'
import Heading3 from '@/app/_components/atoms/Heading3/Heading3'
import { Swiper, SwiperSlide } from 'swiper/react'
import NovelCard from '@/app/_components/molecules/NovelCard/NovelCard'
import { useTranslations } from 'next-intl'

interface Props {
  novelList: Novel[]
}

function PickList({ novelList }: Props) {
  const t = useTranslations()

  return (
    <section className="mt-8">
      <article className="mx-auto max-w-7xl px-2">
        <Heading3 text={t('pick_list_title')} />
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
