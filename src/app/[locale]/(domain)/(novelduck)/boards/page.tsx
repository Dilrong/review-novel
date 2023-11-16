import Board from '@/lib/types/Board'
import BoardTemplate from '@/app/_components/templates/BoardTempate'
import { getBoardList } from '@/lib/utils/supabaseQuery'

const ServerPage = async () => {
  const boardList = await getBoardList()

  return <BoardTemplate boardList={boardList as Board[]} />
}
export default ServerPage
