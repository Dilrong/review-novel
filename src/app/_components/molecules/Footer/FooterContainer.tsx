'use client'

import {ReactNode} from "react";

interface Props {
    children: ReactNode
}

function FooterContainer({children}: Props) {
    return (
        <footer className="bg-neutral-50 shadow">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                {children}
            </div>
        </footer>
    )
}

export default FooterContainer
