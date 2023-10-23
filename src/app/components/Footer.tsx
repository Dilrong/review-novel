"use client";

import { Board } from "@/lib/types/board";
import Link from "next/link";

interface Props {
  board: Board;
}

const Footer = ({ board }: Props) => {
  return (
    <>
      <section className="text-xs bg-yellow-50">
        <Link href={`/boards/${board.id}`}>
          <div className="px-4 py-2">
            <span className="font-bold text-yellow-500 pr-4">
              {board.category}
            </span>
            <span className="text-xs">{board.title}</span>
          </div>
        </Link>
      </section>
      <footer className="bg-neutral-50 shadow">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <span className="font-maruBuri block text-xs text-gray-700 sm:text-center mb-1">
            소설로 자연스럽게 배우는 외국어 - Novelduck
          </span>
          <span className="block text-sm text-gray-700 sm:text-center ">
            © 2023{" "}
            <a href="/" className="hover:underline">
              NovelDuck
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
