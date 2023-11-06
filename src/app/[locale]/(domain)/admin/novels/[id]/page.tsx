import Chapter from '@/lib/types/Chapter'

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

  // const { data: categoryList } = await supabase
  //   .from('category')
  //   .select()
  //   .order('created_at', { ascending: true })

  return (
    <ClientPage novel={novel} chapterList={chapterList as Chapter[]} />
    // <AdminNovelDetailTemplate
    //   novel={novel}
    //   chapterList={chapterList as Chapter[]}
    //   categoryList={categoryList as Category[]}
    // />
  )
}

export const revalidate = 0

export default ServerPage
