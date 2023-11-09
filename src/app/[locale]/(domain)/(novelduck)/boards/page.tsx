import supabase from '@/lib/utils/supabase'
import Board from '@/lib/types/Board'
import BoardTemplate from '@/app/_components/templates/BoardTempate'

const ServerPage = async () => {
  const { data: dataList } = await supabase
    .from('boards')
    .select()
    .order('created_at', { ascending: false })

  return <BoardTemplate boardList={dataList as Board[]} />
}

export const revalidate = 0
export default ServerPage
