import supabase from '@/lib/utils/supabase'
import Board from '@/lib/types/Board'
import ClientPage from './page.client'

const ServerPage = async () => {
  const { data: novelList } = await supabase
    .from('board')
    .select()
    .order('created_at', { ascending: false })

  return <ClientPage boardList={novelList as Board[]} />
}

export const revalidate = 0
export default ServerPage
