'use client'

import Link from 'next-intl/link'
import { Button } from '@/components/ui/button'
import { useTranslations } from 'next-intl'

interface Props {
  id: number
}

function StartReadingButton({ id }: Props) {
  const t = useTranslations()
  
  return (
    <Link href={`/viewer/${id}`}>
      <Button className="mt-4 w-full">{t('novel_start_reading_button')}</Button>
    </Link>
  )
}

export default StartReadingButton
