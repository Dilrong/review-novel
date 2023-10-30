'use client'

import Link from 'next/link'
import Image from 'next/image'
import Tag from '@/app/_components/atoms/Tag'
import Heading6 from "@/app/_components/atoms/Heading6";
import NoCover from '../../../../public/images/no_cover.jpeg'

interface Props {
    id: number;
    title: string;
    category: string;
}

function NovelCard({id, title, category}: Props) {
    return (
        <Link className="w-64" href={`/viewer/${id}`}>
            <div className="w-full max-w-64 mb-4">
                <Image
                    className="rounded-sm"
                    src={NoCover}
                    alt={title}
                    width={250}
                    height={250}
                />
                <div className="mt-2 truncate">
                    <Heading6 text={title}/>
                </div>
                <Tag text={category}/>
            </div>
        </Link>
    )
}

export default NovelCard
