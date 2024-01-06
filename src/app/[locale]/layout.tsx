import '../global.css'
import type { Metadata } from 'next'
import { Ubuntu } from 'next/font/google'

import { NextIntlClientProvider } from 'next-intl'
import { notFound } from 'next/navigation'
import { getBoard } from '@/lib/utils/supabase-query'
import { Toaster } from '@/components/ui/toaster'
import { ThemeProvider } from '@/components/feature/common/theme-provider'
import Footer from '@/components/feature/common/footer'
import Header from '@/components/feature/common/header'

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
    siteName: '노벨덕',
    images: ['/images/og.png'],
    locale: 'ko-KR',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: '노벨덕 | 소설로 자연스럽게 배우는 외국어',
    description: '소설로 자연스럽게 배우는 외국어',
    images: ['/images/og.png'],
    creator: '노벨덕',
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

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ko' }]
}

const RootLayout = async ({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: {
    locale: string
  }
}) => {
  const board = await getBoard(2)

  let messages
  try {
    messages = (await import(`@/i18n/${locale}.json`)).default
  } catch (error) {
    return notFound()
  }

  return (
    <html className="h-full" lang={locale}>
      <body className={`${ubuntu.className}`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            {children}
            <Toaster />
            <Footer board={board} />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}

// 10분 단위 캐싱
export const revalidate = 600

export default RootLayout
