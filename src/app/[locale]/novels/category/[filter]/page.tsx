import Novel from '@/lib/types/Novel'
import NovelTemplate from '@/app/_components/templates/NovelTemplate'
import Category from '@/lib/types/Category'
import { getPagination, toCategoryId } from '@/lib/utils/helper'
import {
  getCategoryList,
  getNovelListAndCountByCategory,
} from '@/lib/utils/supabaseQuery'

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
  const { from, to } = getPagination(parseInt(page, 10), 20)
  const { novelList, count } = await getNovelListAndCountByCategory(
    locale,
    filterId,
    from,
    to,
  )

  const categoryList = await getCategoryList()

  return (
    <NovelTemplate
      novelCount={count as number}
      novelList={novelList as Novel[]}
      categoryList={categoryList as Category[]}
      novelFilter={filter}
    />
  )
}
export default ServerPage
