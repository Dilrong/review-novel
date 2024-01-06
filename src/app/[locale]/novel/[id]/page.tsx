import { getChapterList, getNovel } from '@/lib/utils/supabase-query'
import ScreenContainer from '@/components/ui/screen-container'
import NovelHeader from '@/components/feature/novel/novel-header'
import NovelTab from '@/components/feature/novel/novel-tab'
import { Button } from '@/components/ui/button'
import Link from 'next-intl/link'
import StartReadingButton from '@/components/feature/novel/start-reading-button'

interface Props {
  params: {
    locale: string
    id: string
  }
}

const ServerPage = async ({ params: { locale, id } }: Props) => {
  const novel = await getNovel(parseInt(id, 10), locale)
  const chapterList = await getChapterList(novel.id)

  return (
    <ScreenContainer>
      <section className="mx-auto mt-8 w-full max-w-7xl px-2">
        <NovelHeader
          thumbnail={novel.thumbnail}
          title={novel.title}
          description={novel.description}
          author={novel.author}
          translator={novel.translator}
        />
        <StartReadingButton id={chapterList[0].id} />
        <NovelTab novel={novel} chapterList={chapterList} />
      </section>
    </ScreenContainer>
  )
}
export default ServerPage
