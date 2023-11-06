'use client'

import { useTranslations } from 'next-intl'

function FooterContent() {
  const t = useTranslations()

  return (
    <span className="mb-1 block font-maruBuri text-xs text-gray-700 sm:text-center">
      {t('footer_content')}
    </span>
  )
}

export default FooterContent
