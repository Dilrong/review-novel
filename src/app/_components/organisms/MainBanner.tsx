'use client'

import Image from 'next/image'
import Link from 'next/link'
import Banner from '@/lib/types/Banner'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import BannerItem from "@/app/_components/molecules/BannerItem";

interface Props {
    bannerList: Banner[]
}

function MainBanner({bannerList}: Props) {
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
                        <BannerItem link={banner.link} image={banner.image_url} content={banner.content}/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default MainBanner
