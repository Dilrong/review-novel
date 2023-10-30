'use client'

import React, {ReactNode} from "react";

interface Props {
    children: ReactNode;
}

function ScreenContainer({children}: Props) {
    return (
        <div className="flex flex-col min-h-screen">
            {children}
        </div>
    )
}

export default ScreenContainer
