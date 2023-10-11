"use client";

import { DucksPick } from "@/lib/types/ducksPick";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import NoCover from "../../../public/images/no_cover.jpeg";

interface Props {
  novel: DucksPick;
}

const PickCard = ({ novel }: Props) => {
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
    <Link href={`/viewer/${novel.novel_id}`}>
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

export default PickCard;
