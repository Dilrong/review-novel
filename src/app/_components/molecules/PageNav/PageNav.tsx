'use client'

import { useRouter } from 'next/navigation'

interface Props {
  currentPageParams: string
  novelCount: number
}

function PageNav({ currentPageParams, novelCount }: Props) {
  const currentPage = parseInt(currentPageParams, 10)
  const router = useRouter()

  const handlePrev = () => {
    if (currentPage > 1) {
      router.push(`/viewer/${currentPage - 1}`)
    }
  }

  const handleNext = () => {
    if (currentPage < novelCount) {
      const page = parseInt(String(currentPage), 10) + 1
      router.push(`/viewer/${page}`)
    }
  }

  const handleList = () => {
    router.push('/novels')
  }

  return (
    <div className="mx-auto flex w-full justify-between px-2">
      <button
        onClick={handlePrev}
        disabled={currentPage === 1}
        className={`flex h-10 items-center justify-center rounded-lg border ${
          currentPage === 1
            ? 'cursor-not-allowed border-gray-300 bg-white text-gray-400'
            : 'border-gray-300 bg-white text-gray-500 hover:bg-gray-100 hover:text-gray-700'
        } px-4 leading-tight transition-all duration-300`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>
      <button
        onClick={handleList}
        className="flex h-10 items-center justify-center rounded-lg border border-gray-300 bg-white px-3 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
          />
        </svg>
      </button>
      <button
        onClick={handleNext}
        disabled={currentPage === novelCount}
        className={`flex h-10 items-center justify-center rounded-lg border ${
          currentPage === novelCount
            ? 'cursor-not-allowed border-gray-300 bg-white text-gray-400'
            : 'border-gray-300 bg-white text-gray-500 hover:bg-gray-100 hover:text-gray-700'
        } px-4 leading-tight transition-all duration-300`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </div>
  )
}

export default PageNav
