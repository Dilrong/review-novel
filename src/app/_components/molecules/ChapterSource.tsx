'use client'

import Link from "next/link";
import React from "react";
import Caption from "@/app/_components/atoms/Caption";
import ChapterSourceContainer from "@/app/_components/molecules/Container/ChapterSourceContainer";

interface Props {
    source: string;
}

function ChapterSource({source}: Props) {
    return (
        <ChapterSourceContainer>
            <Caption text="출처:"/>
            <Link
                className="text-blue-900 px-1"
                href={source}
                target="_blank"
            >
                <Caption text={source}/>
            </Link>
        </ChapterSourceContainer>
    )
}

export default ChapterSource
