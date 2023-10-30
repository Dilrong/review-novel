'use client'

import React, {ReactNode} from "react";

interface Props {
    children: ReactNode;
}

function LatestList({children}: Props) {
    return (
        <section className="flex flex-col w-full max-w-7xl mx-auto py-4 font-maruBuri">
            {children}
        </section>
    )
}

export default LatestList
