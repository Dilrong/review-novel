'use client'

import Tag from '@/components/ui/tag'
import Link from 'next-intl/link'
import mixpanel from 'mixpanel-browser'

interface Props {
  link: string
  id: number
}

function LinkTag({ link, id }: Props) {
  return (
    <Link
      href={link}
      onClick={() => {
        mixpanel.track('소설필터 클릭', {
          categoryId: id,
        })
      }}
    >
      <Tag id={id} />
    </Link>
  )
}

export default LinkTag
