import supabase from '@/lib/utils/supabase'
import Novel from '@/lib/types/Novel'
import NovelTemplate from '@/app/_components/templates/NovelTemplate'
import Category from '@/lib/types/Category'
import { toLocaleTitle } from '@/lib/utils/helper'

interface Props {
  params: {
    locale: string
  }
}

const ServerPage = async ({ params: { locale } }: Props) => {
  const { data: novelList } = await supabase
    .from('novels')
    .select()
    .order('created_at', { ascending: false })
  toLocaleTitle(novelList as Novel[], locale)

  const { data: categoryList } = await supabase
    .from('categories')
    .select()
    .order('created_at', { ascending: false })

  return (
    <NovelTemplate
      novelList={novelList as Novel[]}
      categoryList={categoryList as Category[]}
    />
  )
}

export const revalidate = 0
export default ServerPage
