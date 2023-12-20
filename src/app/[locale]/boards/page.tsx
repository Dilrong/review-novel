import Board from '@/lib/types/Board'
import { getBoardList } from '@/lib/utils/supabase-query'
import BoardList from '@/components/feature/boards/board-list'
import ScreenContainer from '@/components/ui/screen-container'

const ServerPage = async () => {
  const boardList = await getBoardList()

  return (
    <ScreenContainer>
      <section className="mx-auto mt-8 w-full max-w-7xl px-2">
        <BoardList boardList={boardList as Board[]} />
      </section>
    </ScreenContainer>
  )
}
export default ServerPage
