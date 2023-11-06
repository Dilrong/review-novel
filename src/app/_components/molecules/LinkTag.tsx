'use client'

import Tag from '@/app/_components/atoms/Tag'
import Link from 'next-intl/link'

interface Props {
  link: string
  text: string
}

function LinkTag({ link, text }: Props) {
  return (
    <Link href={link}>
      <Tag text={text} />
    </Link>
  )
}

export default LinkTag
