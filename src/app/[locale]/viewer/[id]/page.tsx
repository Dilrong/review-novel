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
import React from 'react'
import ViewerSidebar from '@/components/feature/viewer/viewer-sidebar'

interface Props {
  params: {
    id: string
    locale: string
  }
}

export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  const chapter = await getChapter(parseInt(id, 10))

  const description = chapter?.content.substring(0, 150)
  return {
    title: chapter.title,
    description,
    openGraph: {
      title: `${chapter.title} | 노벨덕`,
      description,
      siteName: 'NovelDuck',
      images: ['/images/og.png'],
      locale: 'ko-KR',
      type: 'website',
    },
  }
}

const ViewerPage = async ({ params: { id, locale } }: Props) => {
  const chapter = await getChapter(parseInt(id, 10))
  const chapterList = await getChapterList(chapter.novel_id)
  const novel = await getNovel(chapter.novel_id, locale)
  const duckPickList = await getDuckPickList(locale)

  return (
    <ScreenContainer>
      <section className="mx-auto flex w-full max-w-7xl flex-col px-2 py-4">
        <h2 className="scroll-m-20 pb-2 text-3xl font-semibold first:mt-0">
          {chapter.title}
        </h2>
        <ChapterViewer chapter={chapter} />
      </section>
      <PickList novelList={duckPickList} />
      <ViewerSidebar
        novel={novel}
        chapterList={chapterList}
        chapter={chapter}
      />
    </ScreenContainer>
  )
}

export default ViewerPage
