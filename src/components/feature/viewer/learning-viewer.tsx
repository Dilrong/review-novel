'use client'

import React from 'react'
import { marked } from 'marked'
import DOMPurify from 'isomorphic-dompurify'
import Affiliate from '@/lib/types/Affiliate'
import AffiliateLink from '@/components/feature/viewer/affiliate-link'

interface Props {
  content: string
  affiliateList: Affiliate[]
  affiliateCount: number
}

function LearningViewer({ content, affiliateList, affiliateCount }: Props) {
  return (
    <>
      <article
        className="prose-xs mt-2 leading-8"
        dangerouslySetInnerHTML={{
          __html: marked(DOMPurify.sanitize(content)),
        }}
      />
      <AffiliateLink
        affiliateList={affiliateList}
        affiliateCount={affiliateCount}
      />
    </>
  )
}

export default LearningViewer
