"use client";
import React from "react";

import { Chapter } from "@/lib/types/chatper";
import Link from "next/link";
import { marked } from "marked";
import * as DOMPurify from "dompurify";
import ViewerMenu from "./components/ViewerMenu";

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
      <section className="flex flex-col w-full max-w-7xl mx-auto py-4 font-maruBuri">
        {chapterList.map((chapter: Chapter, index) => (
          <div key={index}>
            <div>
              <h3 className="text-4xl font-bold">{chapter.title}</h3>
              <div className="flex items-center justify-between gap-4 mt-2">
                {/* <ViewerMenu /> */}
                <p className="text-xs text-gray-500">
                  {new Intl.DateTimeFormat("kr").format(
                    new Date(chapter.created_at)
                  )}
                </p>
              </div>
            </div>
            <article
              className="prose leading-10"
              dangerouslySetInnerHTML={{
                __html: marked(DOMPurify.sanitize(chapter.content)),
              }}
            ></article>
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
      </section>
    </div>
  );
};

export default ClientPage;
