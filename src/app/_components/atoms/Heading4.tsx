'use client'

interface Props {
    text: string;
}

function Heading4({text}: Props) {
    return (
        <h4 className="font-bold text-xl">
            {text}
        </h4>
    )
}

export default Heading4
