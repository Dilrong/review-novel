"use client";
import React from "react";

import { useGetChapterListByNovelQuery } from "@/modules/reducers/chapter";
import { Chapter } from "@/lib/types/chatper";
import Link from "next/link";
import { marked } from "marked";

interface Props {
  id: number;
}

const ClientPage = ({ id }: Props) => {
  marked.use({
    gfm: true,
    breaks: true,
  });
  const { data: chapterList, isLoading } = useGetChapterListByNovelQuery(id);

  return (
    <div className="flex flex-col min-h-screen px-4">
      <article className="flex flex-col w-full max-w-7xl mx-auto py-4 font-ridi">
        {chapterList?.map((chapter: Chapter, index) => (
          // <Link href="" key={index}>
          <div key={index}>
            <h3 className="text-3xl font-bold py-4">{chapter.title}</h3>
            <p
              className="leading-10"
              dangerouslySetInnerHTML={{ __html: marked(chapter.content) }}
            ></p>
            <p className="mt-4">
              <Link
                className="text-xs text-blue-900"
                href={chapter.source}
                target="_blank"
              >
                출처: {chapter.source}
              </Link>
            </p>
            <hr className="h-px my-20 bg-gray-200 border-0 dark:bg-gray-700" />
          </div>
          // </Link>
        ))}
      </article>
    </div>
  );
};

export default ClientPage;
