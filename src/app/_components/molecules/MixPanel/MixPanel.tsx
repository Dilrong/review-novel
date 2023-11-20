'use client'

import mixpanel from 'mixpanel-browser'

export default function MixPanel() {
  mixpanel.init(process.env.NEXT_PUBLIC_MIX_PANEL_TOKEN!, {
    debug: true,
    track_pageview: true,
    persistence: 'localStorage',
  })
  return <div />
}
