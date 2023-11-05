'use client'

import Novel from '@/lib/types/Novel'
import React from 'react'
import Heading3 from '@/app/_components/atoms/Heading3'
import { Swiper, SwiperSlide } from 'swiper/react'
import NovelCard from '@/app/_components/molecules/NovelCard'

interface Props {
  novelList: Novel[]
}

function PickList({ novelList }: Props) {
  return (
    <section className="mt-8">
      <article className="mx-auto max-w-7xl px-2">
        <Heading3 text="추천 소설" />
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
                    title={novel.title}
                    category={novel.category}
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
