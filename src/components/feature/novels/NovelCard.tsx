'use client'

import Link from 'next-intl/link'
import Image from 'next/image'
import Tag from '@/components/ui/tag'

interface Props {
  id: number
  thumbnail: string
  title: string
  category: number
}

function NovelCard({ id, thumbnail, title, category }: Props) {
  return (
    <Link className="max-w-md" href={`/viewer/${id}`}>
      <div className="mb-4 w-full">
        <Image
          className="rounded-sm"
          src={thumbnail}
          alt={title}
          width={250}
          height={250}
        />
        <div className="mt-2 ">
          <h6 className="leading-6 [&:not(:first-child)]:mt-6">{title}</h6>
        </div>
        <Tag id={category} />
      </div>
    </Link>
  )
}

export default NovelCard
