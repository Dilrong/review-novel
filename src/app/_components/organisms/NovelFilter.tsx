'use client'

import LinkTag from "@/app/_components/molecules/LinkTag";

function NovelFilter() {
    return (
        <div className="w-full flex items-center gap-4 pt-1 pb-4 overflow-auto">
            <LinkTag link="/novels/category/fantasy" text="Fantasy"/>
            <LinkTag link="/novels/category/fun" text="Fun"/>
            <LinkTag link="/novels/category/meme" text="MEME"/>
            <LinkTag link="/novels/category/horror" text="Horror"/>
            <LinkTag link="/novels/category/romance" text="Romance"/>
            <LinkTag link="/novels/category/sad" text="Sad"/>
            <LinkTag link="/novels/category/sf" text="SF"/>
            <LinkTag link="/novels/category/etc" text="etc"/>
        </div>
    )
}

export default NovelFilter
