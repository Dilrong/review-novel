'use client'

import React, {ReactNode} from "react";

interface Props {
    children: ReactNode;
}

function ChapterSourceContainer({children}: Props) {
    return (
        <div className="mt-4 truncate">
            <div className="flex flex-row items-center">
                {children}
            </div>
        </div>
    )
}

export default ChapterSourceContainer
