'use client'

import React from 'react'
import Novel from '@/lib/types/Novel'
import NovelCard from '@/app/(routes)/novels/components/NovelCard'
import NovelFilter from './components/NovelFilter'

interface Props {
  novelList: Novel[]
}

function ClientPage({ novelList }: Props) {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="mt-8">
        <article className="max-w-7xl mx-auto px-2">
          <h2 className="text-2xl font-bold">Browse</h2>
          <NovelFilter />
          <div className="flex flex-wrap gap-8 justify-center md:justify-start">
            {novelList.map((novel: Novel) => (
              <NovelCard key={novel.id} novel={novel} />
            ))}
          </div>
        </article>
      </section>
    </div>
  )
}

export default ClientPage
