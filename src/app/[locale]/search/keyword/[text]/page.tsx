import {
  getCategoryList,
  getNovelListOfSearch,
} from '@/lib/utils/supabase-query'
import ScreenContainer from '@/components/ui/screen-container'
import NovelFilter from '@/components/feature/novels/novel-filter'
import BrowserList from '@/components/feature/novels/browser-list'

interface Props {
  params: {
    locale: string
    text: string
  }
}

const ServerPage = async ({ params: { locale, text } }: Props) => {
  const novelList = await getNovelListOfSearch(locale, decodeURI(text))
  const categoryList = await getCategoryList()

  return (
    <ScreenContainer>
      <section className="mt-8">
        <article className="mx-auto max-w-7xl px-2">
          <NovelFilter categoryList={categoryList} />
          <BrowserList
            novelCount={0}
            novelList={novelList}
            novelFilter={''}
            isPage={false}
          />
        </article>
      </section>
    </ScreenContainer>
  )
}
export default ServerPage
