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
import { useTranslations } from 'next-intl'

interface Props {
  chapterList: Chapter[]
}

function NovelChapterList({ chapterList }: Props) {
  const t = useTranslations()

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>{t('novel_no_title')}</TableHead>
          <TableHead>{t('novel_chapter_list_title')}</TableHead>
          <TableHead>{t('novel_date_title')}</TableHead>
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
