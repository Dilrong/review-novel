import { getBoard } from '@/lib/utils/supabaseQuery'
import ScreenContainer from '@/components/ui/screen-container'
import BoardTitle from '@/components/feature/boards/board-title'
import BoardViewer from '@/components/feature/boards/board-viewer'

interface Props {
  params: {
    id: string
  }
}

const ServerPage = async ({ params: { id } }: Props) => {
  const board = await getBoard(parseInt(id, 10))

  return (
    <ScreenContainer>
      <section className="font-maruBuri mx-auto flex w-full max-w-7xl flex-col px-2 py-4">
        <BoardTitle title={board.title} createdAt={board.created_at} />
        <BoardViewer content={board.content} />
      </section>
    </ScreenContainer>
  )
}
export default ServerPage
