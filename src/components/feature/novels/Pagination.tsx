import {
  Pagination as PaginationContainer,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

interface Props {
  novelCount: number
  novelFilter: string
  path: string
}

function Pagination({ novelCount, novelFilter, path }: Props) {
  const params = useSearchParams()

  const category = novelFilter ? `category/${novelFilter}` : ''
  const pageSize = 20
  const totalPages = Math.ceil(novelCount / pageSize)
  const [currentPage, setCurrentPage] = useState(1)

  const links = Array.from({ length: totalPages }, (_, index) => index + 1)

  useEffect(() => {
    const pageParams = parseInt(params.get('page')!, 10)
    const page = pageParams + 1
    setCurrentPage(page)
  }, [params])

  return (
    <PaginationContainer className="my-4 flex overflow-scroll">
      <PaginationContent>
        {currentPage > 1 && (
          <PaginationPrevious
            href={`${path}/${category}?page=${currentPage - 2}`}
          />
        )}
        {links.map((page) => (
          <div key={page}>
            {page === currentPage ? (
              <PaginationLink
                isActive
                href={`${path}/${category}?page=${page - 1}`}
              >
                {page}
              </PaginationLink>
            ) : (
              <PaginationLink href={`${path}/${category}?page=${page - 1}`}>
                {page}
              </PaginationLink>
            )}
          </div>
        ))}
        {totalPages - 1 >= currentPage && (
          <PaginationNext href={`${path}/${category}?page=${currentPage}`} />
        )}
      </PaginationContent>
    </PaginationContainer>
  )
}

export default Pagination
