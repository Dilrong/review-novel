import supabase from '@/lib/utils/supabase'
import Novel from '@/lib/types/Novel'

const homepage = 'https://novelduck.farm'

export default async function sitemap() {
  const { data: novelList } = await supabase
    .from('novel')
    .select()
    .order('created_at', { ascending: false })

  const novels = novelList?.map((novel: Novel) => ({
    url: `${homepage}/viewer/${novel.id}`,
    lastModified: new Date(novel.created_at).toISOString(),
  }))

  const routes = ['', '/novels', '/boards', '/about'].map((route) => ({
    url: `${homepage}${route}`,
    lastModified: new Date().toISOString(),
  }))

  return [...routes, ...novels!]
}
