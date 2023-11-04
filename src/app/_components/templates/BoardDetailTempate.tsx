'use client'

import React from 'react'
import ScreenContainer from '@/app/_components/molecules/Container/ScreenContainer'
import BoardViewer from '@/app/_components/molecules/BoardViewer'
import Board from '@/lib/types/Board'
import BoardTitle from '@/app/_components/molecules/BoardTitle'
import ViewerContainer from '@/app/_components/molecules/Container/ViewerContainer'

interface Props {
  board: Board
}

function BoardDetailTemplate({ board }: Props) {
  return (
    <ScreenContainer>
      <ViewerContainer>
        <BoardTitle title={board.title} createdAt={board.created_at} />
        <BoardViewer content={board.content} />
      </ViewerContainer>
    </ScreenContainer>
  )
}

export default BoardDetailTemplate
