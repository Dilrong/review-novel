'use client'

import {MouseEventHandler} from "react";

interface Props {
    text: string;
    handleClick: MouseEventHandler<HTMLButtonElement>
}

function Button({text, handleClick}: Props) {
    return (
        <button type="button" onClick={handleClick}
                className="w-full text-white bg-yellow-300 hover:bg-yellow-400 focus:ring-0 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
            {text}
        </button>
    )
}

export default Button
