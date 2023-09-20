"use client";

import { Novel } from "@/lib/types/novel";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Props {
  novel: Novel;
}

const NovelCard = ({ novel }: Props) => {
  const [categoryColor, setCategoryColor] = useState("yellow");

  useEffect(() => {
    switch (novel.category) {
      case "괴담":
        setCategoryColor("red");
        break;
      default:
        setCategoryColor("yellow");
        break;
    }
  }, [novel.category]);

  return (
    <Link href={`/novels/${novel.id}`}>
      <div className="w-64 mb-4">
        <img
          className="rounded"
          src={novel.thumbnail}
          alt={novel.title}
          width={250}
          height={250}
        />
        <h3 className="font-semibold mt-2 truncate">{novel.title}</h3>
        <p
          className={`text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 mt-2 bg-${categoryColor}-200 text-${categoryColor}-900 rounded`}
        >
          {novel.category}
        </p>
      </div>
    </Link>
  );
};

export default NovelCard;
