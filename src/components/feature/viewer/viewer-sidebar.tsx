import React from 'react'
import Chapter from '@/lib/types/Chapter'
import { Button } from '@/components/ui/button'
import { BookText, ChevronLeft, ChevronRight } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import Novel from '@/lib/types/Novel'
import Link from 'next-intl/link'
import { Separator } from '@/components/ui/separator'

interface Props {
  novel: Novel
  chapterList: Chapter[]
  chapter: Chapter
}

function ViewerSidebar({ novel, chapterList, chapter }: Props) {
  return (
    <section className="fixed bottom-0 z-50 w-full bg-secondary">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between p-2 py-4">
        <div className="flex items-center gap-2">
          <Sheet>
            <SheetTrigger>📚</SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>{novel.title}</SheetTitle>
                <SheetDescription>
                  <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                    {chapterList.map((chapter, index) => (
                      <Link key={index} href={`/viewer/${chapter.id}`}>
                        <li className="my-4">{chapter.title}</li>
                      </Link>
                    ))}
                  </ul>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
          <p className="text-sm text-muted-foreground">{chapter.title}</p>
        </div>
        {/*TODO: 네비게이션*/}
        {/*<div>*/}
        {/*  <Button variant="ghost" size="icon">*/}
        {/*    <ChevronLeft className="h-4 w-4" />*/}
        {/*  </Button>*/}
        {/*  <Button variant="ghost" size="icon">*/}
        {/*    <ChevronRight className="h-4 w-4" />*/}
        {/*  </Button>*/}
        {/*</div>*/}
      </div>
    </section>
  )
}

export default ViewerSidebar
