'use client'

import React from 'react'
import Chapter from '@/lib/types/Chapter'
import ScreenContainer from "@/app/_components/molecules/Container/ScreenContainer";
import ViewerContainer from "@/app/_components/molecules/Container/ViewerContainer";
import ChapterList from "@/app/_components/organisms/ChapterList";

interface Props {
    chapterList: Chapter[]
}

function ViewerTemplate({chapterList}: Props) {
    return (
        <ScreenContainer>
            <ViewerContainer>
                <ChapterList chapterList={chapterList}/>
            </ViewerContainer>
        </ScreenContainer>
    )
}

export default ViewerTemplate
