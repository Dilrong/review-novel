import supabase from '@/lib/utils/supabase'
import Novel from '@/lib/types/Novel'
import NovelTemplate from '@/app/_components/templates/NovelTemplate'
import Category from '@/lib/types/Category'
import { toCategoryId, toLocaleTitleList } from '@/lib/utils/helper'

interface Props {
  params: {
    filter: string
    locale: string
  }
  searchParams: {
    page: string
  }
}

const ServerPage = async ({
  params: { filter, locale },
  searchParams: { page },
}: Props) => {
  const filterId = toCategoryId(filter)
  const getPagination = (_page: number, size: number) => {
    const limit = size ? +size : 3
    const from = _page ? _page * limit : 0
    const to = _page ? from + size : size

    return { from, to }
  }

  const { from, to } = getPagination(parseInt(page, 10), 20)

  const { data: novelList, count } = await supabase
    .from('novels')
    .select('*', { count: 'exact' })
    .eq('category_id', filterId)
    .order('id', { ascending: false })
    .range(from, to)
  toLocaleTitleList(novelList as Novel[], locale)

  const { data: categoryList } = await supabase
    .from('categories')
    .select()
    .order('id', { ascending: false })

  return (
    <NovelTemplate
      novelCount={count as number}
      novelList={novelList as Novel[]}
      categoryList={categoryList as Category[]}
      novelFilter={filter}
    />
  )
}

export const revalidate = 0
export default ServerPage
