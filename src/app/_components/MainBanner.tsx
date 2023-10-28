'use client'

import Image from 'next/image'
import Link from 'next/link'
import Banner from '@/lib/types/Banner'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

interface Props {
  bannerList: Banner[]
}

function MainBanner({ bannerList }: Props) {
  return (
    <div>
      <Swiper
        className="max-w-7xl max-h-80 mx-auto px-2"
        slidesPerView={1}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
      >
        {bannerList.map((banner: Banner) => (
          <SwiperSlide
            key={banner.id}
            className="flex justify-center align-middle"
          >
            <Link href={banner.link} target="_blank">
              <Image
                className="bg-cover w-full max-h-80 mt-8"
                src={banner.image_url}
                alt={banner.content}
                width={1280}
                height={320}
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default MainBanner