'use client'

import Tag from '@/app/_components/atoms/Tag'
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
