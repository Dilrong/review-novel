'use client'

interface Props {
    text: string;
}

function Heading3({text}: Props) {
    return (
        <h3 className="font-bold text-2xl">
            {text}
        </h3>
    )
}

export default Heading3
