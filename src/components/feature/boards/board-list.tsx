'use client'

import React from 'react'
import Board from '@/lib/types/Board'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import dayjs from 'dayjs'
import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'

interface Props {
  boardList: Board[]
}

function BoardList({ boardList }: Props) {
  const t = useTranslations()
  const router = useRouter()

  return (
    <Table>
      <TableCaption>{t('notice_caption_title')}</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>{t('notice_number_title')}</TableHead>
          <TableHead>{t('notice_title_title')}</TableHead>
          <TableHead>{t('notice_author_title')}</TableHead>
          <TableHead>{t('notice_date_title')}</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {boardList.map((board: Board) => (
          <TableRow
            key={board.id}
            onClick={() => {
              router.push(`boards/${board.id}`)
            }}
          >
            <TableCell>{board.id}</TableCell>
            <TableCell>{board.title}</TableCell>
            <TableCell>소덕🐥</TableCell>
            <TableCell>
              {dayjs(board.created_at).format('YYYY-MM-DD')}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default BoardList
