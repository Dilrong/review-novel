"use client";
import React, { FC } from "react";
import Image from "next/image";
import { useGetNovelListQuery } from "@/modules/reducers/novel";
import { Novel } from "@/lib/types/novel";
import Link from "next/link";

interface ClientPageProps {}

const ClientPage: FC<ClientPageProps> = () => {
  const { data: novelList } = useGetNovelListQuery();

  return (
    <div className="flex flex-col min-h-screen">
      {/* <Banner /> */}
      <section className="mt-8">
        <article className="max-w-7xl mx-auto px-2">
          <h2 className="text-xl font-bold">최신 소설</h2>
          <div className="flex gap-4 mt-2">
            {novelList?.map((novel: Novel, index) => (
              <Link href={`/novels/${novel.id}`} key={index}>
                <Image
                  className="rounded"
                  src={novel.thumbnail}
                  alt={novel.title}
                  width={250}
                  height={250}
                />
                <h3 className="font-semibold mt-2">{novel.title}</h3>
              </Link>
            ))}
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
