"use client";

import CategoryTag from "@/app/components/CategoryTag";
import Link from "next/link";

interface Props {}

const NovelFilter = ({}: Props) => {
  return (
    <>
      <p className="text-sm pt-2">Category Tags</p>
      <div className="w-full flex gap-4 pt-1 pb-4">
        <Link href="/novels/category/fun">
          <CategoryTag name="FUN" />
        </Link>
        <Link href="/novels/category/horror">
          <CategoryTag name="HORROR" />
        </Link>
        <Link href="/novels/category/sad">
          <CategoryTag name="SAD" />
        </Link>
      </div>
    </>
  );
};

export default NovelFilter;
