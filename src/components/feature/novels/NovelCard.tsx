'use client'

import Link from 'next-intl/link'
import Image from 'next/image'
import Tag from '@/components/ui/tag'
import Heading6 from '@/app/_components/atoms/Heading6/Heading6'

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
          <Heading6 text={title} />
        </div>
        <Tag id={category} />
      </div>
    </Link>
  )
}

export default NovelCard
