'use client'

import Link from 'next-intl/link'
import Image from 'next/image'
import Tag from '@/components/ui/tag'
import mixpanel from 'mixpanel-browser'

interface Props {
  id: number
  thumbnail: string
  title: string
  category: number
}

function NovelCard({ id, thumbnail, title, category }: Props) {
  return (
    <Link
      className="max-w-md"
      href={`/viewer/${id}`}
      onClick={() => {
        mixpanel.track('소설카드 클릭', {
          id: id,
          title: title,
        })
      }}
    >
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
