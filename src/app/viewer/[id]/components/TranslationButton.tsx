"use client";

interface Props {
  name: string;
  handleClick: () => void;
}

const TranslationButton = ({ name, handleClick }: Props) => {
  return (
    <button
      onClick={handleClick}
      className={`text-xs cursor-pointer inline-flex items-center leading-sm uppercase px-2 py-1 mt-1 bg-gray-200 hover:bg-gray-300 text-gray-900 rounded`}
    >
      {name}
    </button>
  );
};

export default TranslationButton;
