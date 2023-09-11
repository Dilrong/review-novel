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
      <section className="mt-8">
        <article className="max-w-7xl mx-auto px-2">
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
    </div>
  );
};

export default ClientPage;
