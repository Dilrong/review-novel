'use client'

import React from "react";
import Chapter from "@/lib/types/Chapter";
import ChapterViewer from "@/app/_components/organisms/ChapterViewer";

interface Props {
    chapterList: Chapter[];
}

function ChapterList({chapterList}: Props) {
    return (
        <>
            {chapterList.map((chapter: Chapter) => (
                <ChapterViewer key={chapter.id} chapter={chapter} chapterList={chapterList}/>
            ))}
        </>
    );
}

export default ChapterList
