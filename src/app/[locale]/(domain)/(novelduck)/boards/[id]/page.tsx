import Board from '@/lib/types/Board'
import BoardDetailTemplate from '@/app/_components/templates/BoardDetailTempate'
import { getBoard } from '@/lib/utils/supabaseQuery'

interface Props {
  params: {
    id: string
  }
}

const ServerPage = async ({ params: { id } }: Props) => {
  const board = await getBoard(parseInt(id, 10))

  return <BoardDetailTemplate board={board as Board} />
}
export default ServerPage
