"use client";

import { Board } from "@/lib/types/board";
import React from "react";

interface Props {
  boardList: Board[];
}

const ClientPage = ({ boardList }: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="mt-8">
        <article className="max-w-7xl mx-auto px-2">
          <h2 className="text-2xl font-bold">Notice</h2>
          <div className="flex flex-wrap gap-8 justify-center md:justify-start">
            {boardList.map((board: Board, index) => (
              <div key={index} className="flex gap2">
                <p className="font-bold mr-1">[{board.category}]</p>
                <p>{board.title}</p>
              </div>
            ))}
          </div>
        </article>
      </section>
    </div>
  );
};

export default ClientPage;
