'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import NovelAbout from '@/components/feature/novel/novel-about'
import NovelChapterList from '@/components/feature/novel/novel-chapter-list'
import Chapter from '@/lib/types/Chapter'
import Novel from '@/lib/types/Novel'
import { useTranslations } from 'next-intl'

interface Props {
  novel: Novel
  chapterList: Chapter[]
}

function NovelTab({ novel, chapterList }: Props) {
  const t = useTranslations()

  return (
    <Tabs defaultValue="about" className="mt-8">
      <TabsList>
        <TabsTrigger value="about">{t('novel_about_tab_title')}</TabsTrigger>
        <TabsTrigger value="chapters">
          {t('novel_chapters_tab_title')}
        </TabsTrigger>
      </TabsList>
      <TabsContent value="about">
        <NovelAbout
          chapterCount={chapterList.length}
          licensed={novel.author}
          translator={novel.translator}
          categoryId={novel.category_id}
        />
      </TabsContent>
      <TabsContent value="chapters">
        <NovelChapterList chapterList={chapterList} />
      </TabsContent>
    </Tabs>
  )
}

export default NovelTab
