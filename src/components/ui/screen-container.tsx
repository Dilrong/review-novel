'use client'

import React, { ReactNode, useEffect } from 'react'
import mixpanel from 'mixpanel-browser'

interface Props {
  children: ReactNode
}

function ScreenContainer({ children }: Props) {
  useEffect(() => {
    try {
      mixpanel.track_pageview()
    } catch (error) {
      console.error('Error occurred while tracking page view:', error)
    }
  }, [])

  return <div className="flex min-h-screen flex-col">{children}</div>
}

export default ScreenContainer
