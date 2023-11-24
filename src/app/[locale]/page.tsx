import Novel from '@/lib/types/Novel'
import Banner from '@/lib/types/Banner'
import HomeTemplate from '@/app/_components/templates/HomeTemplate'
import {
  getBanner,
  getDuckPickList,
  getNovelList,
} from '@/lib/utils/supabaseQuery'

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
    <HomeTemplate
      novelList={novelList as Novel[]}
      duckPickList={duckPickList as unknown as Novel[]}
      bannerList={bannerList as Banner[]}
    />
  )
}

export default ServerPage
