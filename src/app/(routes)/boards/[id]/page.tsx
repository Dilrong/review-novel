import supabase from '@/lib/utils/supabase'
import Board from '@/lib/types/Board'
import Custom500 from '@/app/(routes)/error/500'
import ClientPage from './page.client'

interface Props {
  params: {
    id: string
  }
}

const ServerPage = async ({ params: { id } }: Props) => {
  const { data: board } = await supabase
    .from('board')
    .select()
    .eq('id', id)
    .single()

  try {
    return <ClientPage board={board as Board} />
  } catch (e) {
    return <Custom500 />
  }
}

export const revalidate = 0
export default ServerPage
