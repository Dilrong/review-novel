'use client'

import React, { ReactNode, useEffect } from 'react'
import mixpanel from 'mixpanel-browser'

interface Props {
  children: ReactNode
}

function ScreenContainer({ children }: Props) {
  useEffect(() => {
    mixpanel.track_pageview()
  }, [])
  
  return <div className="flex min-h-screen flex-col">{children}</div>
}

export default ScreenContainer
