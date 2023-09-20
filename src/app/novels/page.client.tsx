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
          <h2 className="text-xl font-bold pb-4">소설</h2>
          <ul className="flex gap-2 pb-6 text-sm">
            <li className="inline-flex items-center font-bold leading-sm px-3 py-1 bg-gray-200 text-gray-900 rounded">
              소설
            </li>
            <li className="inline-flex items-center font-bold leading-sm px-3 py-1 bg-gray-200 text-gray-900 rounded">
              괴담
            </li>
          </ul>
          <div className="flex flex-wrap gap-8">
            {novelList?.map((novel: Novel, index) => (
              <Link href={`/novels/${novel.id}`} key={index}>
                <div className="w-64 mb-4">
                  <Image
                    className="rounded"
                    src={novel.thumbnail}
                    alt={novel.title}
                    width={250}
                    height={250}
                  />
                  <h3 className="font-semibold mt-2 truncate">{novel.title}</h3>
                  <p className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 mt-2 bg-yellow-200 text-yellow-900 rounded">
                    {novel.category}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </article>
      </section>
    </div>
  );
};

export default ClientPage;
