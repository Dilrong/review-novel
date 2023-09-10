"use client";
import { useGetBannerListQuery } from "@/modules/reducers/banner";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Banner } from "@/lib/types/banner";

const Banner = () => {
  const { data: bannerList } = useGetBannerListQuery();

  return (
    <div>
      <Swiper
        className="w-full mt-8 mb-8"
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
        {bannerList!.map((banner: Banner, index) => (
          <SwiperSlide
            className="flex justify-center align-middle m-1"
            key={index}
          >
            <p>{banner.content}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
