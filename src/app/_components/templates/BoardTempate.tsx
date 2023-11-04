'use client'

import React from 'react'
import ScreenContainer from '@/app/_components/molecules/Container/ScreenContainer'
import Board from '@/lib/types/Board'
import BoardList from '@/app/_components/organisms/BoardList'

interface Props {
  boardList: Board[]
}

function BoardTemplate({ boardList }: Props) {
  return (
    <ScreenContainer>
      <BoardList boardList={boardList} />
    </ScreenContainer>
  )
}

export default BoardTemplate
