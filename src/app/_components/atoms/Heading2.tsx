'use client'

interface Props {
    text: string;
}

function Heading2({text}: Props) {
    return (
        <h2 className="font-bold text-4xl">
            {text}
        </h2>
    )
}

export default Heading2
