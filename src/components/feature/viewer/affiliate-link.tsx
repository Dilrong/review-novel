'use client'

import React from 'react'
import Affiliate from '@/lib/types/Affiliate'
import Link from 'next-intl/link'
import mixpanel from 'mixpanel-browser'

interface Props {
  affiliateList: Affiliate[]
  affiliateCount: number
}

function AffiliateLink({ affiliateList, affiliateCount }: Props) {
  const id = Math.floor(Math.random() * affiliateCount)

  return (
    <>
      <Link
        href={affiliateList[id].link}
        target="_blank"
        onClick={() => {
          mixpanel.track('어필리에이트 링크 클릭', {
            content: affiliateList[id].content,
            link: affiliateList[id].link,
          })
        }}
      >
        <hr />
        <p className="mt-4 text-sm font-bold">{affiliateList[id].content}</p>
        {affiliateList[id].category === 'coupang' && (
          <p className="mt-1 text-xs">
            이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의
            수수료를 제공받습니다.
          </p>
        )}
      </Link>
    </>
  )
}

export default AffiliateLink
