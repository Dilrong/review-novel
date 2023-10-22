"use client";

import React from "react";
import { Novel } from "@/lib/types/novel";
import NovelCard from "@/app/novels/components/NovelCard";
import NovelFilter from "../../components/NovelFilter";

interface Props {
  novelList: Novel[];
}

const ClientPage = ({ novelList }: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="mt-8">
        <article className="max-w-7xl mx-auto px-2">
          <h2 className="text-2xl font-bold">Browse</h2>
          <NovelFilter />
          <div className="flex flex-wrap gap-8 justify-center md:justify-start">
            {novelList.map((novel: Novel, index) => (
              <NovelCard key={index} novel={novel} />
            ))}
          </div>
        </article>
      </section>
    </div>
  );
};

export default ClientPage;
