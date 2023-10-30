'use client'


import Link from "next/link";

function Logo() {
    return (
        <Link href="/" className="flex items-center">
            <h1 className="self-center text-xl font-semibold whitespace-nowrap font-maruBuri">
                Novel
                <span className="text-yellow-300 font-bold ml-1">DucK</span>
            </h1>
        </Link>
    )
}

export default Logo
