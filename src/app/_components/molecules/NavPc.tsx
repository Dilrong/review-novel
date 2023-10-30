'use client'


import Link from "next/link";

interface Props {
    toggle: boolean;
    handleToggle: () => void;
}

function NavPc({toggle, handleToggle}: Props) {
    return (
        <div
            className={`${
                !toggle && 'hidden'
            } justify-between items-center w-full lg:flex lg:w-auto lg:order-1`}
            id="mobile-menu"
        >
            <ul className="flex flex-col mt-4 items-center lg:flex-row lg:space-x-4 lg:mt-0">
                <li>
                    <Link href="/novels" className="block" onClick={handleToggle}>
                        Browse
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default NavPc