"use client";
import React, { FC } from "react";
import Image from "next/image";
import { useGetNovelListQuery } from "@/modules/reducers/novel";
import { Novel } from "@/lib/types/novel";
import Link from "next/link";
import NovelCard from "@/components/NovelCard";

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
              <NovelCard key={index} novel={novel} />
            ))}
          </div>
        </article>
      </section>
    </div>
  );
};

export default ClientPage;
