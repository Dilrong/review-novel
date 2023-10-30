'use client'

interface Props {
    text: string
}

function Tag({text}: Props) {
    return (
        <p className="text-xs cursor-pointer inline-flex items-center leading-sm uppercase px-2 py-1 mt-1 bg-gray-200 hover:bg-gray-300 text-gray-900 rounded">
            #{text}
        </p>
    )
}

export default Tag
