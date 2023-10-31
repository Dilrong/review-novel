'use client'

import React, {ReactNode} from "react";

interface Props {
    children: ReactNode;
}

function ViewerContainer({children}: Props) {
    return (
        <section className="flex flex-col w-full max-w-7xl mx-auto px-2 py-4 font-maruBuri">
            {children}
        </section>
    )
}

export default ViewerContainer
