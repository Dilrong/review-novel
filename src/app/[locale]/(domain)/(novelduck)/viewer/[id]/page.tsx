import { Metadata } from 'next'
import Chapter from '@/lib/types/Chapter'
import ViewerTemplate from '@/app/_components/templates/ViewerTemplate'
import {
  getChapter,
  getChapterList,
  getNovel,
  getNovelCount,
} from '@/lib/utils/supabaseQuery'

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
  const count = await getNovelCount()
  const novel = await getNovel(parseInt(id, 10), locale)
  const chapterList = await getChapterList(novel.id)

  return (
    <ViewerTemplate
      id={id}
      title={novel.title}
      novelCount={count as number}
      chapterList={chapterList as Chapter[]}
    />
  )
}
export default ViewerPage
