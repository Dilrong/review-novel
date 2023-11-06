import { Metadata } from 'next'
import supabase from '@/lib/utils/supabase'
import Chapter from '@/lib/types/Chapter'
import ViewerTemplate from '@/app/_components/templates/ViewerTemplate'

interface Props {
  params: {
    id: number
  }
}

export async function generateMetadata({
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
    .eq('novel_id', id)
    .single()

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

const ViewerPage = async ({ params: { id } }: Props) => {
  const { data: chapterList } = await supabase
    .from('chapter')
    .select()
    .eq('novel_id', id)
    .order('order')

  return <ViewerTemplate chapterList={chapterList as Chapter[]} />
}

export const revalidate = 0
export default ViewerPage
