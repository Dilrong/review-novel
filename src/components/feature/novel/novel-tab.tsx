'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import NovelAbout from '@/components/feature/novel/novel-about'
import NovelChapterList from '@/components/feature/novel/novel-chapter-list'
import Chapter from '@/lib/types/Chapter'
import Novel from '@/lib/types/Novel'

interface Props {
  novel: Novel
  chapterList: Chapter[]
}

function NovelTab({ novel, chapterList }: Props) {
  return (
    <Tabs defaultValue="about" className="mt-8">
      <TabsList>
        <TabsTrigger value="about">About</TabsTrigger>
        <TabsTrigger value="chapters">Chapters</TabsTrigger>
      </TabsList>
      <TabsContent value="about">
        <NovelAbout
          chapterCount={chapterList.length}
          licensed={novel.author}
          translator={novel.translator}
        />
      </TabsContent>
      <TabsContent value="chapters">
        <NovelChapterList chapterList={chapterList} />
      </TabsContent>
    </Tabs>
  )
}

export default NovelTab
