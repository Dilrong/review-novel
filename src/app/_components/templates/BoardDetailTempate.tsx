'use client'

import React from 'react'
import ScreenContainer from '@/app/_components/molecules/Container/ScreenContainer'
import Board from '@/lib/types/Board'
import BoardTitle from '@/app/_components/molecules/BoardTitle/BoardTitle'
import ViewerContainer from '@/app/_components/molecules/Container/ViewerContainer'
import BoardViewer from '@/app/_components/molecules/BoardViewer/BoardViewer'
import mixpanel from 'mixpanel-browser'

interface Props {
  board: Board
}

function BoardDetailTemplate({ board }: Props) {
  mixpanel.track('board Page View', {
    id: board.id,
    title: board.title,
  })

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
