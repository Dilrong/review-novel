"use client";
import React from "react";

import { Chapter } from "@/lib/types/chatper";
import Link from "next/link";
import { marked } from "marked";

interface Props {
  chapterList: Chapter[];
}

const ClientPage = ({ chapterList }: Props) => {
  marked.use({
    gfm: true,
    breaks: true,
  });

  return (
    <div className="flex flex-col min-h-screen px-4">
      <article className="flex flex-col w-full max-w-7xl mx-auto py-4 font-maruBuri">
        {chapterList.map((chapter: Chapter, index) => (
          <div key={index}>
            <h3 className="text-3xl font-bold py-4">{chapter.title}</h3>
            <p
              className="leading-10"
              dangerouslySetInnerHTML={{ __html: marked(chapter.content) }}
            ></p>
            <p className="text-xs mt-4 truncate">
              <span className="mr-1">출처:</span>
              <Link
                className="text-blue-900"
                href={chapter.source}
                target="_blank"
              >
                {chapter.source}
              </Link>
            </p>
            <hr className="h-px my-20 bg-gray-200 border-0 dark:bg-gray-700" />
          </div>
        ))}
      </article>
    </div>
  );
};

export default ClientPage;
