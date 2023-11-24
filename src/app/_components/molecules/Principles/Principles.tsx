'use client'

import React from 'react'
import ScreenContainer from '@/app/_components/molecules/Container/ScreenContainer'
import Heading5 from '@/app/_components/atoms/Heading5/Heading5'
import Paragraph from '@/app/_components/atoms/Paragraph/Paragraph'

function Principles() {
  return (
    <ScreenContainer>
      <Heading5 text="그릿팜의 비전" />
      <Paragraph text="그릿팜은 목표가 있는 사람들의 목표 달성을 위해서 재밌게 학습 할 수 있는 수단을 제공하여 포기하지 않고 목표를 달성을 도와주는 서비스를 만듭니다." />
      <br />
      <Heading5 text="그릿팜의 원칙" />
      <Paragraph text="1. 결과를 위해 포기하지 않고 꾸준히 한다." />
      <Paragraph text="2. 고통 + 피드백 = 성장" />
      <Paragraph text="3. 한 번에 한 입씩" />
    </ScreenContainer>
  )
}

export default Principles
