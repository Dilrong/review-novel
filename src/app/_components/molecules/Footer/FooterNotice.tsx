'use client'

import Link from "next/link";
import Board from "@/lib/types/Board";

interface Props {
    board: Board
}

function FooterNotice({board}: Props) {
    return (
        <section className="text-xs bg-yellow-50">
            <Link href={`/boards/${board.id}`}>
                <div className="px-4 py-2">
            <span className="font-bold text-yellow-500 pr-4">
              {board.category}
            </span>
                    <span className="text-xs">{board.title}</span>
                </div>
            </Link>
        </section>
    )
}

export default FooterNotice
