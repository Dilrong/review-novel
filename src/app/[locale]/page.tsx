import {
  getBanner,
  getDuckPickList,
  getNovelList,
  getPopularList,
} from '@/lib/utils/supabase-query'
import ScreenContainer from '@/components/ui/screen-container'
import MainBanner from '@/components/feature/home/main-banner'
import LatestList from '@/components/feature/home/latest-list'
import PickList from '@/components/feature/home/pick-list'
import PopularList from '@/components/feature/home/popular-list'

interface Props {
  params: {
    locale: string
  }
}

const ServerPage = async ({ params: { locale } }: Props) => {
  const popularList = await getPopularList(locale)
  const novelList = await getNovelList(locale)
  const duckPickList = await getDuckPickList(locale)
  const bannerList = await getBanner()

  return (
    <ScreenContainer>
      <MainBanner bannerList={bannerList} />
      <PopularList novelList={popularList} />
      <LatestList novelList={novelList} />
      <PickList novelList={duckPickList} />
    </ScreenContainer>
  )
}

export default ServerPage
