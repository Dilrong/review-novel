"use client";
import React, { FC } from "react";
import { useGetNovelListQuery } from "@/modules/reducers/novel";
import { Novel } from "@/lib/types/novel";
import NovelCard from "@/app/novels/components/NovelCard";

interface ClientPageProps {}

const ClientPage: FC<ClientPageProps> = () => {
  const { data: novelList } = useGetNovelListQuery();

  return (
    <div className="flex flex-col min-h-screen">
      <section className="mt-8">
        <article className="max-w-7xl mx-auto px-2">
          <h2 className="text-xl font-bold pb-4">Browse</h2>
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
