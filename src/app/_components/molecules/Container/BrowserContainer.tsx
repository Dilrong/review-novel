'use client'

import React, {ReactNode} from "react";

interface Props {
    children: ReactNode;
}

function BrowserContainer({children}: Props) {
    return (
        <section className="mt-8">
            <article className="max-w-7xl mx-auto px-2">
                {children}
            </article>
        </section>
    )
}

export default BrowserContainer
