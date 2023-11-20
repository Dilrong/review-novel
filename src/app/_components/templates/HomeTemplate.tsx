'use client'

import React, { useEffect } from 'react'
import mixpanel from 'mixpanel-browser'
import Novel from '@/lib/types/Novel'
import Banner from '@/lib/types/Banner'
import MainBanner from '@/app/_components/organisms/MainBanner'
import 'swiper/css'
import LatestList from '@/app/_components/organisms/LatestList'
import PickList from '@/app/_components/organisms/PickList'
import ScreenContainer from '@/app/_components/molecules/Container/ScreenContainer'

interface Props {
  novelList: Novel[]
  duckPickList: Novel[]
  bannerList: Banner[]
}

function HomeTemplate({ novelList, duckPickList, bannerList }: Props) {
  useEffect(() => {
    mixpanel.track('Home Page View')
  }, [])

  return (
    <ScreenContainer>
      <MainBanner bannerList={bannerList} />
      <LatestList novelList={novelList} />
      <PickList novelList={duckPickList} />
    </ScreenContainer>
  )
}

export default HomeTemplate
