import { Metadata } from 'next'
import supabase from '@/lib/utils/supabase'
import Chapter from '@/lib/types/Chapter'
import Custom500 from '../../error/500'
import ClientPage from './page.client'

interface Props {
  params: {
    id: number
  }
}

export async function generateMetadata ({
  params: { id },
}: Props): Promise<Metadata> {
  const { data: novel } = await supabase
    .from('novel')
    .select()
    .eq('id', id)
    .single()

  const { data: chapter } = await supabase
      .from('chapter')
      .select()
      .eq('order', 1)
      .eq('novel_id', id)
      .single()

  return {
    title: novel.title,
    openGraph: {
      title: `${novel.title} | 노벨덕`,
      description: chapter.content,
      siteName: 'NovelDuck',
      images: ['/images/og.png'],
      locale: 'ko-KR',
      type: 'website',
    },
  }
}

const ViewerPage = async ({ params: { id } }: Props) => {
  const { data: chapterList } = await supabase
    .from('chapter')
    .select()
    .eq('novel_id', id)
    .order('order')



  try {
    return <ClientPage chapterList={chapterList as Chapter[]} />
  } catch (e) {
    return <Custom500 />
  }
}

export const revalidate = 0
export default ViewerPage
