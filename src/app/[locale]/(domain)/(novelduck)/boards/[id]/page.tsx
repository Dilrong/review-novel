import supabase from '@/lib/utils/supabase'
import Board from '@/lib/types/Board'
import BoardDetailTemplate from '@/app/_components/templates/BoardDetailTempate'

interface Props {
  params: {
    id: string
  }
}

const ServerPage = async ({ params: { id } }: Props) => {
  const { data: board } = await supabase
    .from('boards')
    .select()
    .eq('id', id)
    .single()

  return <BoardDetailTemplate board={board as Board} />
}

export const revalidate = 0
export default ServerPage
