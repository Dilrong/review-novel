'use client'

import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import NovelChapter from '@/components/feature/novel/novel-chapter'
import Chapter from '@/lib/types/Chapter'

interface Props {
  chapterList: Chapter[]
}

function NovelChapterList({ chapterList }: Props) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>번호</TableHead>
          <TableHead>제목</TableHead>
          <TableHead>등록일</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {chapterList.map((chapter, index) => (
          <NovelChapter chapter={chapter} key={index} />
        ))}
      </TableBody>
    </Table>
  )
}

export default NovelChapterList
