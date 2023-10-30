'use client'

interface Props {
    text: string;
}

function Heading1({text}: Props) {
    return (
        <h1 className="font-bold text-6xl">
            {text}
        </h1>
    )
}

export default Heading1
