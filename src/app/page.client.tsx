"use client";
import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { useGetNovelListQuery } from "@/modules/reducers/novel";
import { Novel } from "@/lib/types/novel";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

interface ClientPageProps {}

const ClientPage: FC<ClientPageProps> = () => {
  const { data: novelList } = useGetNovelListQuery();

  return (
    <div className="flex flex-col min-h-screen">
      {/* <Banner /> */}
      <section className="mt-8">
        <article className="max-w-7xl mx-auto px-2">
          <h2 className="text-xl font-bold">최신 소설</h2>
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
                {novelList?.map((novel: Novel, index) => (
                  <SwiperSlide
                    className="flex justify-center align-middle m-1"
                    key={index}
                  >
                    <Link
                      href={`/novels/${novel.id}`}
                      as={`/novels/${novel.id}`}
                    >
                      <Image
                        className="rounded"
                        src={novel.thumbnail}
                        alt={novel.title}
                        width={250}
                        height={250}
                      />
                      <h3 className="font-semibold mt-2">{novel.title}</h3>
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </article>
      </section>
      <section className="mt-8 bg-neutral-100 py-8">
        <article className="flex max-w-7xl mx-auto px-2">
          <h2 className="text-xl font-bold">Duck&apos;s Pick</h2>
        </article>
      </section>
    </div>
  );
};

export default ClientPage;
