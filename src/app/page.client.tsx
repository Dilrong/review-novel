"use client";
import React from "react";
import { Novel } from "@/lib/types/novel";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import NovelCard from "@/app/novels/components/NovelCard";

interface Props {
  novelList: Novel[];
  duckPickList: Novel[];
}

const ClientPage = ({ novelList, duckPickList }: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* <Banner /> */}
      <section className="mt-8">
        <article className="max-w-7xl mx-auto px-2">
          <h2 className="text-xl font-bold">The Latest</h2>
          <div className="flex flex-col gap-4 mt-2">
            <div>
              <Swiper
                className="mt-8 mb-8"
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
                {novelList.map((novel: Novel, index) => (
                  <SwiperSlide
                    className="flex justify-center align-middle m-1"
                    key={index}
                  >
                    <NovelCard novel={novel} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </article>
      </section>
      <section className="mt-8 bg-neutral-100 py-8">
        <article className="max-w-7xl mx-auto px-2">
          <h2 className="text-xl font-bold">Duck&apos;s Pick</h2>
          <div className="flex flex-col gap-4 mt-2">
            <div>
              <Swiper
                className="mt-8 mb-8"
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
                {duckPickList.map((novel: Novel, index) => (
                  <SwiperSlide
                    className="flex justify-center align-middle m-1"
                    key={index}
                  >
                    <NovelCard novel={novel} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
};

export default ClientPage;
