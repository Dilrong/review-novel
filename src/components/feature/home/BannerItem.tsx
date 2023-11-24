'use client'

import Link from 'next-intl/link'
import Image from 'next/image'

interface Props {
  link: string
  image: string
  name: string
}

function BannerItem({ link, image, name }: Props) {
  return (
    <Link href={link} target="_blank">
      <Image
        className="mt-8 max-h-80 w-full bg-cover"
        src={image}
        alt={name}
        width={1280}
        height={320}
      />
    </Link>
  )
}

export default BannerItem
