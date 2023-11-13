import supabase from '@/lib/utils/supabase'
import Novel from '@/lib/types/Novel'
import NovelTemplate from '@/app/_components/templates/NovelTemplate'
import Category from '@/lib/types/Category'
import { toLocaleTitleList } from '@/lib/utils/helper'

interface Props {
  params: {
    locale: string
  }
  searchParams: {
    page: string
  }
}

const ServerPage = async ({
  params: { locale },
  searchParams: { page },
}: Props) => {
  const getPagination = (_page: number, size: number) => {
    const limit = size ? +size : 3
    const from = _page ? _page * limit : 0
    const to = _page ? from + limit - 1 : limit - 1

    return { from, to }
  }

  const { from, to } = getPagination(parseInt(page, 10), 20)
  const { data: novelList, count } = await supabase
    .from('novels')
    .select('*', { count: 'exact' })
    .order('created_at', { ascending: false })
    .range(from, to)
  toLocaleTitleList(novelList as Novel[], locale)

  const { data: categoryList } = await supabase
    .from('categories')
    .select()
    .order('created_at', { ascending: false })

  return (
    <NovelTemplate
      novelCount={count as number}
      novelList={novelList as Novel[]}
      novelFilter=""
      categoryList={categoryList as Category[]}
    />
  )
}

export const revalidate = 0
export default ServerPage
