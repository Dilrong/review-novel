import Novel from '@/lib/types/Novel'
import NovelTemplate from '@/app/_components/templates/NovelTemplate'
import Category from '@/lib/types/Category'
import { getPagination } from '@/lib/utils/helper'
import {
  getCategoryList,
  getNovelListAndCount,
} from '@/lib/utils/supabaseQuery'

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
  const { from, to } = getPagination(parseInt(page, 10), 20)
  const { novelList, count } = await getNovelListAndCount(locale, from, to)
  const categoryList = await getCategoryList()

  return (
    <NovelTemplate
      novelCount={count as number}
      novelList={novelList as Novel[]}
      novelFilter=""
      categoryList={categoryList as Category[]}
    />
  )
}
export default ServerPage
