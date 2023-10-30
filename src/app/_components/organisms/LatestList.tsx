'use client'

import {Swiper, SwiperSlide} from 'swiper/react'
import Novel from "@/lib/types/Novel";
import React from "react";
import Heading3 from "@/app/_components/atoms/Heading3";
import NovelCard from "@/app/_components/molecules/NovelCard";

interface Props {
    novelList: Novel[];
}

function LatestList({novelList}: Props) {
    return (
        <section className="mt-8">
            <article className="max-w-7xl mx-auto px-2">
                <Heading3 text="The Latest"/>
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
                                    <NovelCard key={novel.id} id={novel.id} title={novel.title}
                                               category={novel.category}/>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </article>
        </section>
    );
}

export default LatestList
