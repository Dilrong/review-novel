import '../../../globals.css'
import type { Metadata } from 'next'
import { Ubuntu } from 'next/font/google'
import AdminSidebar from '@/app/_components/molecules/AdminSidebar/AdminSidebar'

const ubuntu = Ubuntu({
  weight: ['300', '400', '500', '700'],
  preload: false,
})

export const metadata: Metadata = {
  title: {
    default: '노벨덕 관리자 | 소설로 자연스럽게 배우는 외국어',
    template: '%s | 노벨덕 관리자',
  },
  description: '소설로 자연스럽게 배우는 외국어',
  openGraph: {
    title: '노벨덕 관리자 | 소설로 자연스럽게 배우는 외국어',
    description: '소설로 자연스럽게 배우는 외국어',
    url: 'https://admin.novelduck.farm/',
    siteName: 'NovelDuck',
    images: ['/images/og.png'],
    locale: 'ko-KR',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={`${ubuntu.className}`}>
        <AdminSidebar />
        <div className="p-4 sm:ml-64">{children}</div>
      </body>
    </html>
  )
}
