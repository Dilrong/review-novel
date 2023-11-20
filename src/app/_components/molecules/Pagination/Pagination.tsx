import { useState } from 'react'
import { useRouter } from 'next/navigation'

interface Props {
  novelCount: number
  novelFilter: string
}

function Pagination({ novelCount, novelFilter }: Props) {
  const router = useRouter()

  const category = novelFilter ? `category/${novelFilter}` : ''
  const pageSize = 20
  const totalPages = Math.ceil(novelCount / pageSize)
  const [currentPage, setCurrentPage] = useState(1)

  const handlePrev = () => {
    const newPage = currentPage - 1
    if (newPage >= 1) {
      setCurrentPage(newPage)
      router.push(`/novels/${category}?page=${newPage - 1}`)
    }
  }

  const handleNext = () => {
    const newPage = currentPage + 1
    if (newPage <= totalPages) {
      setCurrentPage(newPage)
      router.push(`/novels/${category}?page=${newPage - 1}`)
    }
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    router.push(`/novels/${category}?page=${page - 1}`)
  }

  const renderPageNumbers = () => {
    const pages = []
    // eslint-disable-next-line no-plusplus
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <li key={i}>
          <button
            onClick={() => handlePageChange(i)}
            className={`flex h-10 items-center justify-center border ${
              currentPage === i
                ? 'bg-gray-900 text-gray-100'
                : 'bg-white text-gray-500'
            } px-4 leading-tight transition-all duration-300 hover:bg-gray-100 hover:text-gray-700`}
          >
            {i}
          </button>
        </li>,
      )
    }
    return pages
  }

  return (
    <nav aria-label="pagination" className="py-8">
      <ul className="flex h-10 items-center -space-x-px text-base">
        <li>
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className={`ms-0 flex h-10 items-center justify-center rounded-s-lg border ${
              currentPage === 1
                ? 'cursor-not-allowed border-gray-300 bg-white text-gray-400'
                : 'border-e-0 border-gray-300 bg-white text-gray-500 hover:bg-gray-100 hover:text-gray-700'
            } px-4 leading-tight transition-all duration-300`}
          >
            <span className="sr-only">Previous</span>
            <svg
              className="h-3 w-3 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
          </button>
        </li>
        {renderPageNumbers()}
        <li>
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className={`flex h-10 items-center justify-center rounded-e-lg border ${
              currentPage === totalPages
                ? 'cursor-not-allowed border-gray-300 bg-white text-gray-400'
                : 'border-gray-300 bg-white text-gray-500 hover:bg-gray-100 hover:text-gray-700'
            } px-4 leading-tight transition-all duration-300`}
          >
            <span className="sr-only">Next</span>
            <svg
              className="h-3 w-3 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Pagination
