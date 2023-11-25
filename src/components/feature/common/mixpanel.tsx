'use client'

import mixpanel from 'mixpanel-browser'
import Script from 'next/script'

export default function MixPanel() {
  mixpanel.init(process.env.NEXT_PUBLIC_MIX_PANEL_TOKEN!, {
    debug: process.env.NODE_ENV === 'development',
    track_pageview: true,
    persistence: 'localStorage',
  })
  return (
    <>
      <Script />
      <script
        type="text/javascript"
        id="mixpanel-track-links"
        dangerouslySetInnerHTML={{
          __html: `mixpanel.track_links("#nav a", "click nav link", {
                "referrer": document.referrer
              }`,
        }}
      ></script>
    </>
  )
}
