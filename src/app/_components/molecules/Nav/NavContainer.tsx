'use client'

import {ReactNode} from "react";

interface Props {
    children: ReactNode;
}

function NavContainer({children}: Props) {
    return (
        <header>
            <nav className=" bg-white shadow border-gray-200 px-2 py-2.5">
                <div className="flex flex-wrap max-w-7xl justify-between items-center mx-auto">
                    {children}
                </div>
            </nav>
        </header>
    )
}

export default NavContainer