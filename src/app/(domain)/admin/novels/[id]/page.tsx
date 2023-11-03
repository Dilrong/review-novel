import Chapter from '@/lib/types/Chapter'
import Custom500 from '@/app/(domain)/(novelduck)/error'
import supabase from '@/lib/utils/supabase'
import ClientPage from './page.client'

interface Props {
  params: {
    id: number
  }
}

const ServerPage = async ({ params }: Props) => {
  const { data: novel } = await supabase
    .from('novel')
    .select()
    .eq('id', params.id)
    .single()

  const { data: chapterList } = await supabase
    .from('chapter')
    .select()
    .eq('novel_id', params.id)
    .order('order')

  try {
    return <ClientPage novel={novel} chapterList={chapterList as Chapter[]} />
  } catch (e) {
    return <Custom500 />
  }
}

export const revalidate = 0

export default ServerPage
