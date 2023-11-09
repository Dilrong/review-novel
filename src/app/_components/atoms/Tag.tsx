'use client'

import toCategoryName from '@/lib/utils/helper'
import { useTranslations } from 'next-intl'

interface Props {
  id: number
}

function Tag({ id }: Props) {
  const t = useTranslations()

  return (
    <p className="mt-1 inline-flex cursor-pointer items-center rounded bg-gray-200 px-2 py-1 text-xs uppercase text-gray-900 hover:bg-gray-300">
      #{t(toCategoryName(id))}
    </p>
  )
}

export default Tag
