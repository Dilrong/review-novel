import Board from '@/lib/types/Board'
import { getBoardList } from '@/lib/utils/supabase-query'
import BoardList from '@/components/feature/boards/board-list'
import ScreenContainer from '@/components/ui/screen-container'

const ServerPage = async () => {
  const boardList = await getBoardList()

  return (
    <ScreenContainer>
      <BoardList boardList={boardList as Board[]} />
    </ScreenContainer>
  )
}
export default ServerPage
