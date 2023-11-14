import { Metadata } from 'next'
import supabase from '@/lib/utils/supabase'
import Chapter from '@/lib/types/Chapter'
import ViewerTemplate from '@/app/_components/templates/ViewerTemplate'
import { toLocaleTitle } from '@/lib/utils/helper'

interface Props {
  params: {
    id: string
    locale: string
  }
}

export async function generateMetadata({
  params: { id, locale },
}: Props): Promise<Metadata> {
  const { data: novel } = await supabase
    .from('novels')
    .select()
    .eq('id', id)
    .single()
  toLocaleTitle(novel, locale)

  const { data: chapter } = await supabase
    .from('chapters')
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

const ViewerPage = async ({ params: { id, locale } }: Props) => {
  const { count } = await supabase
    .from('novels')
    .select('*', { count: 'exact', head: true })

  const { data: novel } = await supabase
    .from('novels')
    .select()
    .eq('id', id)
    .single()
  toLocaleTitle(novel, locale)

  const { data: chapterList } = await supabase
    .from('chapters')
    .select()
    .eq('novel_id', id)
    .order('sequence')

  return (
    <ViewerTemplate
      id={id}
      title={novel.title}
      novelCount={count as number}
      chapterList={chapterList as Chapter[]}
    />
  )
}

export const revalidate = 0
export default ViewerPage
