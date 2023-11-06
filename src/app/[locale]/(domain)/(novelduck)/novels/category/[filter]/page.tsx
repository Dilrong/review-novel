import supabase from '@/lib/utils/supabase'
import Novel from '@/lib/types/Novel'
import NovelTemplate from '@/app/_components/templates/NovelTemplate'

interface Props {
  params: {
    filter: string
  }
}

const ServerPage = async ({ params: { filter } }: Props) => {
  const { data: novelList } = await supabase
    .from('novel')
    .select()
    .eq('category', filter)
    .order('created_at', { ascending: false })

  return <NovelTemplate novelList={novelList as Novel[]} />
}

export const revalidate = 0
export default ServerPage
