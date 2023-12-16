import supabase from '@/lib/utils/supabase'
import { toLocaleTitle, toLocaleTitleList } from '@/lib/utils/helper'
import Novel from '@/lib/types/Novel'
import Banner from '@/lib/types/Banner'
import Board from '@/lib/types/Board'
import Chapter from '@/lib/types/Chapter'
import Category from '@/lib/types/Category'
import Highlights from '@/lib/types/Highlights'

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

async function getRandomNovelList(locale: string): Promise<Novel[]> {
  const { data: novelList } = await supabase.from('novels').select('*').limit(3)
  toLocaleTitleList(novelList as Novel[], locale)

  return novelList as Novel[]
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
 * Category
 */
async function getCategoryList(): Promise<Category[]> {
  const { data: categoryList } = await supabase
    .from('categories')
    .select()
    .order('id', { ascending: false })

  return categoryList as Category[]
}

/**
 * Highlights
 */
async function getHighlightList(userId: string): Promise<Highlights[]> {
  const { data: highlightList } = await supabase
    .from('highlights')
    .select()
    .eq('user_id', userId)

  return highlightList as Highlights[]
}

export {
  getNovelCount,
  getNovelListAndCount,
  getNovelListAndCountByCategory,
  getRandomNovelList,
  getNovelList,
  getNovel,
  getDuckPickList,
  getChapterList,
  getChapter,
  getBanner,
  getBoardList,
  getBoard,
  getCategoryList,
  getHighlightList,
}
