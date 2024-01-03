'use client'

import LinkTag from '@/components/feature/novels/link-tag'
import Chapter from '@/lib/types/Chapter'
import { Separator } from '@/components/ui/separator'

interface Props {
  chapterCount: number
  licensed: string
  translator: string
}

function NovelAbout({ chapterCount, licensed, translator }: Props) {
  return (
    <section>
      <section className="mt-4 flex justify-between">
        <div>
          <p className="text-sm text-muted-foreground">Chapters</p>
          <p>{chapterCount} Chapters</p>
        </div>
        <div>
          <p className="text-sm text-muted-foreground">Licensed From</p>
          <p>{licensed}</p>
        </div>
        <div>
          <p className="text-sm text-muted-foreground">Translator From</p>
          <p>{translator}</p>
        </div>
      </section>
      <section className="mt-4">
        <LinkTag id={1} link="#" />
      </section>
      <Separator className="my-6" />
      <article>
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Reviews
        </h3>
      </article>
    </section>
  )
}

export default NovelAbout
