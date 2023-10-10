"use client";

import { Novel } from "@/lib/types/novel";
import Link from "next/link";
import Image from "next/image";
import NoCover from "../../../../public/images/no_cover.jpeg";

interface Props {
  novel: Novel;
}

const NovelCard = ({ novel }: Props) => {
  return (
    <Link href={`/novels/${novel.id}`}>
      <div className="w-full max-w-64 mb-4">
        <Image
          className="rounded-sm"
          src={NoCover}
          alt={novel.title}
          width={250}
          height={250}
        />
        <h3 className="font-semibold mt-2 truncate">{novel.title}</h3>
        <p
          className={`text-xs inline-flex items-center leading-sm uppercase px-2 py-1 mt-1 bg-gray-200 text-gray-900 rounded`}
        >
          {novel.category}
        </p>
      </div>
    </Link>
  );
};

export default NovelCard;
