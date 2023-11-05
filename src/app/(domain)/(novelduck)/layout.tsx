import '../../globals.css'
import type { Metadata } from 'next'
import { Ubuntu } from 'next/font/google'

import supabase from '@/lib/utils/supabase'
import Headers from '@/app/_components/organisms/Headers'
import Footer from '@/app/_components/organisms/Footer'

const ubuntu = Ubuntu({
  weight: ['300', '400', '500', '700'],
  preload: false,
})

export const metadata: Metadata = {
  metadataBase: new URL('https://novelduck.farm'),
  title: {
    default: '노벨덕 | 소설로 자연스럽게 배우는 외국어',
    template: '%s | 노벨덕',
  },
  description: '소설로 자연스럽게 배우는 외국어',
  openGraph: {
    title: '노벨덕 | 소설로 자연스럽게 배우는 외국어',
    description: '소설로 자연스럽게 배우는 외국어',
    url: 'https://novelduck.farm',
    siteName: 'NovelDuck',
    images: ['/images/og.png'],
    locale: 'ko-KR',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: '노벨덕 | 소설로 자연스럽게 배우는 외국어',
    description: '소설로 자연스럽게 배우는 외국어',
    images: ['/images/og.png'],
    creator: 'NovelDuck',
    site: 'https://novelduck.farm',
  },
  icons: {
    icon: '/images/icons/apple-icon.png',
    apple: '/images/icons/apple-icon.png',
    other: {
      rel: 'apple-icon-precomposed.png',
      url: '/images/icons/apple-icon-precomposed.png',
    },
  },
  alternates: {
    canonical: 'https://novelduck.farm',
    types: {
      'application/rss+xml': 'https://novelduck.farm/rss',
    },
  },
}

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  const { data: board } = await supabase
    .from('board')
    .select()
    .eq('id', 1)
    .single()

  return (
    <html lang="ko">
      <body className={`${ubuntu.className}`}>
        <Headers />
        {children}
        <Footer board={board} />
      </body>
    </html>
  )
}

export default RootLayout
