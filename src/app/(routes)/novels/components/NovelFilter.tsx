'use client'

import Tag from '@/app/_components/atoms/Tag'
import Link from 'next/link'

function NovelFilter() {
    return (
        <div className="w-full flex items-center gap-4 pt-1 pb-4 overflow-auto">
            <Link href="/novels/category/fantasy">
                <Tag text="Fantasy"/>
            </Link>
            <Link href="/novels/category/fun">
                <Tag text="Fun"/>
            </Link>
            <Link href="/novels/category/meme">
                <Tag text="MEME"/>
            </Link>
            <Link href="/novels/category/horror">
                <Tag text="Horror"/>
            </Link>
            <Link href="/novels/category/romance">
                <Tag text="Romance"/>
            </Link>
            <Link href="/novels/category/sad">
                <Tag text="Sad"/>
            </Link>
            <Link href="/novels/category/sf">
                <Tag text="SF"/>
            </Link>
            <Link href="/novels/category/etc">
                <Tag text="etc"/>
            </Link>
        </div>
    )
}

export default NovelFilter
