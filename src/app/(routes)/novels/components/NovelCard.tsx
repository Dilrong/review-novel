'use client'

import Novel from '@/lib/types/Novel'
import Link from 'next/link'
import Image from 'next/image'
import CategoryTag from '@/app/_components/CategoryTag'
import NoCover from '../../../../../public/images/no_cover.jpeg'

interface Props {
  novel: Novel
}

function NovelCard({ novel }: Props) {
  return (
    <Link className="w-64" href={`/viewer/${novel.id}`}>
      <div className="w-full max-w-64 mb-4">
        <Image
          className="rounded-sm"
          src={NoCover}
          alt={novel.title}
          width={250}
          height={250}
        />
        <h3 className="font-semibold mt-2 truncate">{novel.title}</h3>
        <CategoryTag name={novel.category} />
      </div>
    </Link>
  )
}

export default NovelCard
