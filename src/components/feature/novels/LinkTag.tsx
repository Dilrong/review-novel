'use client'

import Tag from '@/components/ui/tag'
import Link from 'next-intl/link'

interface Props {
  link: string
  id: number
}

function LinkTag({ link, id }: Props) {
  return (
    <Link href={link}>
      <Tag id={id} />
    </Link>
  )
}

export default LinkTag
