import supabase from '@/lib/utils/supabase'
import { toLocaleTitle, toLocaleTitleList } from '@/lib/utils/helper'
import Novel from '@/lib/types/Novel'
import Banner from '@/lib/types/Banner'
import Board from '@/lib/types/Board'
import Chapter from '@/lib/types/Chapter'
import Category from '@/lib/types/Category'
import Learnings from '@/lib/types/Learnings'
import Affiliate from '@/lib/types/Affiliate'

/**
 * Novel
 */
async function getNovelCount(): Promise<number> {
  const { count } = await supabase
    .from('novels')
    .select('*', { count: 'exact', head: true })

  return count!
}

async function getNovelListAndCount(
  locale: string,
  from: number,
  to: number,
): Promise<{
  novelList: Novel[]
  count: number
}> {
  const { data: novelList, count } = await supabase
    .from('novels')
    .select('*', { count: 'exact' })
    .order('id', { ascending: false })
    .range(from, to)
  toLocaleTitleList(novelList as Novel[], locale)

  return {
    novelList: novelList as Novel[],
    count: count!,
  }
}

async function getNovelListAndCountByCategory(
  locale: string,
  categoryId: number,
  from: number,
  to: number,
): Promise<{
  novelList: Novel[]
  count: number
}> {
  const { data: novelList, count } = await supabase
    .from('novels')
    .select('*', { count: 'exact' })
    .eq('category_id', categoryId)
    .order('id', { ascending: false })
    .range(from, to)
  toLocaleTitleList(novelList as Novel[], locale)

  return {
    novelList: novelList as Novel[],
    count: count!,
  }
}

async function getNovelList(locale: string): Promise<Novel[]> {
  const { data: novelList } = await supabase
    .from('novels')
    .select()
    .order('id', { ascending: false })
    .limit(5)
  toLocaleTitleList(novelList as Novel[], locale)

  return novelList as Novel[]
}

async function getNovel(id: number, locale: string): Promise<Novel> {
  const { data: novel } = await supabase
    .from('novels')
    .select()
    .eq('id', id)
    .single()
  toLocaleTitle(novel, locale)

  return novel
}

/**
 * Recommendations
 */
async function getDuckPickList(locale: string): Promise<Novel[]> {
  const { data: duckPickList } = await supabase
    .from('recommendations')
    .select(
      `...novels ( id, title, title_ko, title_ja, thumbnail, category_id)`,
    )
    .order('id', { ascending: false })
    .eq('feature', 'pick')
    .limit(5)
  toLocaleTitleList(duckPickList as unknown as Novel[], locale)

  return duckPickList as unknown as Novel[]
}

/**
 * Chapter
 */
async function getChapterList(novelId: number): Promise<Chapter[]> {
  const { data: chapterList } = await supabase
    .from('chapters')
    .select()
    .eq('novel_id', novelId)
    .order('sequence')

  return chapterList as Chapter[]
}

async function getChapter(novelId: number): Promise<Chapter> {
  const { data: chapter } = await supabase
    .from('chapters')
    .select()
    .eq('novel_id', novelId)
    .single()

  return chapter
}

/**
 * Learning
 */
async function getLearningList(chapterId: number): Promise<Learnings[]> {
  const { data: learning } = await supabase
    .from('learnings')
    .select()
    .eq('chapter_id', chapterId)

  return learning as Learnings[]
}

/**
 * Affiliate
 */
async function getAffiliate(): Promise<{
  affiliateList: Affiliate[]
  count: number
}> {
  const { data: affiliate, count } = await supabase
    .from('affiliate')
    .select('*', { count: 'exact' })

  return {
    affiliateList: affiliate as Affiliate[],
    count: count!,
  }
}

/**
 * Banner
 */

async function getBanner(): Promise<Banner[]> {
  const { data: bannerList } = await supabase
    .from('banners')
    .select()
    .order('id', { ascending: false })
    .limit(5)

  return bannerList as Banner[]
}

/**
 * Board
 */
async function getBoardList(): Promise<Board[]> {
  const { data: boardList } = await supabase
    .from('boards')
    .select()
    .order('id', { ascending: false })

  return boardList as Board[]
}

async function getBoard(id: number): Promise<Board> {
  const { data: board } = await supabase
    .from('boards')
    .select()
    .eq('id', id)
    .single()

  return board as Board
}

/**
 * category
 */
async function getCategoryList(): Promise<Category[]> {
  const { data: categoryList } = await supabase
    .from('categories')
    .select()
    .order('id', { ascending: false })

  return categoryList as Category[]
}

export {
  getNovelCount,
  getNovelListAndCount,
  getNovelListAndCountByCategory,
  getNovelList,
  getNovel,
  getDuckPickList,
  getChapterList,
  getChapter,
  getLearningList,
  getAffiliate,
  getBanner,
  getBoardList,
  getBoard,
  getCategoryList,
}
