import Novel from '@/lib/types/Novel'
import supabase from '@/lib/utils/supabase'
import AdminNovelListTemplate from '@/app/_components/templates/AdminNovelListTemplate'

const ServerPage = async () => {
  const { data: novelList } = await supabase
    .from('novel')
    .select()
    .order('created_at', { ascending: false })

  return <AdminNovelListTemplate novelList={novelList as Novel[]} />
}

export const revalidate = 0

export default ServerPage
