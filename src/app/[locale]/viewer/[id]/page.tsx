import { Metadata } from 'next'
import {
  getChapter,
  getChapterList,
  getDuckPickList,
  getNovel,
} from '@/lib/utils/supabase-query'
import ScreenContainer from '@/components/ui/screen-container'
import ChapterViewer from '@/components/feature/viewer/chapter-viewer'
import PickList from '@/components/feature/home/pick-list'

interface Props {
  params: {
    id: string
    locale: string
  }
}

export async function generateMetadata({
  params: { id, locale },
}: Props): Promise<Metadata> {
  const novel = await getNovel(parseInt(id, 10), locale)
  const chapter = await getChapter(novel.id)

  const description = chapter?.content.substring(0, 150)
  return {
    title: novel.title,
    description,
    openGraph: {
      title: `${novel.title} | 노벨덕`,
      description,
      siteName: 'NovelDuck',
      images: ['/images/og.png'],
      locale: 'ko-KR',
      type: 'website',
    },
  }
}

const ViewerPage = async ({ params: { id, locale } }: Props) => {
  const novel = await getNovel(parseInt(id, 10), locale)
  const chapterList = await getChapterList(novel.id)
  const duckPickList = await getDuckPickList(locale)

  return (
    <ScreenContainer>
      <section className="mx-auto flex w-full max-w-7xl flex-col px-2 py-4">
        <h2 className="scroll-m-20 pb-2 text-3xl font-semibold first:mt-0">
          {novel.title}
        </h2>
        <ChapterViewer chapter={chapterList[0]} />
      </section>
      <PickList novelList={duckPickList} />
    </ScreenContainer>
  )
}

export default ViewerPage
