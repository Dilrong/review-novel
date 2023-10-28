import supabase from '@/lib/utils/supabase'
import Board from '@/lib/types/Board'
import Custom500 from '@/app/(routes)/error/500'
import ClientPage from './page.client'


const ServerPage = async () => {
  const { data: novelList } = await supabase
    .from('board')
    .select()
    .order('created_at', { ascending: false })

  try {
    return <ClientPage boardList={novelList as Board[]} />
  } catch (e) {
    return <Custom500 />
  }
}

export const revalidate = 0
export default ServerPage
