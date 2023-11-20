'use client'

import React, { useEffect } from 'react'
import ScreenContainer from '@/app/_components/molecules/Container/ScreenContainer'
import Board from '@/lib/types/Board'
import BoardList from '@/app/_components/organisms/BoardList'
import mixpanel from 'mixpanel-browser'

interface Props {
  boardList: Board[]
}

function BoardTemplate({ boardList }: Props) {
  useEffect(() => {
    mixpanel.track('Board Page View')
  }, [])

  return (
    <ScreenContainer>
      <BoardList boardList={boardList} />
    </ScreenContainer>
  )
}

export default BoardTemplate
