import supabase from '@/lib/utils/supabase'
import Novel from '@/lib/types/Novel'
import Banner from '@/lib/types/Banner'
import HomeTemplate from '@/app/_components/templates/HomeTemplate'

const ServerPage = async () => {
  const { data: novelList } = await supabase
    .from('novels')
    .select()
    .order('created_at', { ascending: false })
    .limit(5)
  const { data: duckPickList } = await supabase
    .from('recommendations')
    .select(`...novels ( id, title, thumbnail, category_id)`)
    .order('created_at', { ascending: false })
    .eq('feature', 'pick')
    .limit(5)
  const { data: bannerList } = await supabase
    .from('banners')
    .select()
    .order('created_at', { ascending: false })
    .limit(5)

  return (
    <HomeTemplate
      novelList={novelList as Novel[]}
      duckPickList={duckPickList as unknown as Novel[]}
      bannerList={bannerList as Banner[]}
    />
  )
}

export const revalidate = 0
export default ServerPage
