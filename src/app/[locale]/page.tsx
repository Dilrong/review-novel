import {
  getBanner,
  getDuckPickList,
  getNovelList,
} from '@/lib/utils/supabaseQuery'
import ScreenContainer from '@/components/ui/screen-container'
import MainBanner from '@/components/feature/home/MainBanner'
import LatestList from '@/components/feature/home/LatestList'
import PickList from '@/components/feature/home/PickList'

interface Props {
  params: {
    locale: string
  }
}

const ServerPage = async ({ params: { locale } }: Props) => {
  const novelList = await getNovelList(locale)
  const duckPickList = await getDuckPickList(locale)
  const bannerList = await getBanner()

  return (
    <ScreenContainer>
      <MainBanner bannerList={bannerList} />
      <LatestList novelList={novelList} />
      <PickList novelList={duckPickList} />
    </ScreenContainer>
  )
}

export default ServerPage
