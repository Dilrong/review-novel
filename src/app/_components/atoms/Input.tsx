'use client'


interface Props {
    type: string;
    placeholder: string;
}

function Input({type = 'text', placeholder = ''}: Props) {
    return (
        <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 mt-4"
            type={type}
            placeholder={placeholder}
        />
    )
}

export default Input
