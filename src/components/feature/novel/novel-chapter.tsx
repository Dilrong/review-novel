'use client'

import { TableCell, TableRow } from '@/components/ui/table'
import Chapter from '@/lib/types/Chapter'
import dayjs from 'dayjs'
import { useRouter } from 'next/navigation'

interface Props {
  chapter: Chapter
}

function NovelChapter({ chapter }: Props) {
  const router = useRouter()
  return (
    <TableRow
      onClick={() => {
        router.push(`/viewer/${chapter.id}`)
      }}
    >
      <TableCell>{chapter.sequence}</TableCell>
      <TableCell>{chapter.title}</TableCell>
      <TableCell>{dayjs(chapter.created_at).format('YYYY.MM.DD')}</TableCell>
    </TableRow>
  )
}

export default NovelChapter
