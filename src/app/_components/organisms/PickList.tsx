'use client'

import {Swiper, SwiperSlide} from 'swiper/react'
import Novel from "@/lib/types/Novel";
import NovelCard from "@/app/(routes)/novels/components/NovelCard";
import React from "react";

interface Props {
    novelList: Novel[];
}

function PickList({novelList}: Props) {
    return (
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
                            {novelList.map((novel: Novel) => (
                                <SwiperSlide
                                    className="flex justify-center align-middle m-1"
                                    key={novel.id}
                                >
                                    <NovelCard novel={novel}/>
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
