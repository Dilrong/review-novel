import ScreenContainer from '@/components/ui/screen-container'
import { Search } from '@/components/feature/search/search'
import NovelFilter from '@/components/feature/novels/novel-filter'
import { getCategoryList } from '@/lib/utils/supabase-query'

const ServerPage = async () => {
  const categoryList = await getCategoryList()

  return (
    <ScreenContainer>
      <section className="mt-8">
        <article className="mx-auto max-w-7xl px-2">
          <Search />
          <NovelFilter categoryList={categoryList} />
        </article>
      </section>
    </ScreenContainer>
  )
}

export default ServerPage
