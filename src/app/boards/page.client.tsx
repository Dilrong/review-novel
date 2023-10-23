"use client";

import { Board } from "@/lib/types/board";
import dayjs from "dayjs";
import Link from "next/link";
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
          <p className="text-xs text-gray-700 font-maruBuri">
            소설로 자연스럽게 배우는 영어, 노벨덕의 소식입니다.
          </p>
          <div className="flex flex-col flex-wrap mt-4 border-t justify-center md:justify-start">
            {boardList.map((board: Board, index) => (
              <Link
                href={`boards/${board.id}`}
                key={index}
                className="flex flex-col py-4 border-b hover:bg-gray-50"
              >
                <div className="flex flex-col">
                  <div className="flex">
                    <p className="font-bold mr-1">[{board.category}]</p>
                    <p>{board.title}</p>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    {dayjs(board.created_at).format("YYYY.MM.DD")}
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
