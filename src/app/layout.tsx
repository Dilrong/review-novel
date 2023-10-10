import "./globals.css";
import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";

import Providers from "./providers.client";
import Headers from "@/app/components/Headers";
import Footer from "@/app/components/Footer";

const ubuntu = Ubuntu({
  weight: ["300", "400", "500", "700"],
  preload: false,
});

export const metadata: Metadata = {
  title: {
    default: "노벨덕 | 소설로 자연스럽게 배우는 외국어",
    template: "%s | 노벨덕",
  },
  description: "소설로 자연스럽게 배우는 외국어",
  openGraph: {
    title: "노벨덕 - 소설로 자연스럽게 배우는 외국어",
    description: "소설로 자연스럽게 배우는 외국어",
    url: "https://novelduck.farm/",
    siteName: "NovelDuck",
    images: ["/images/og.png"],
    locale: "ko-KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="alternate"
          type="application/rss+xml"
          href="/rss.xml"
          title="Novel Feed RSS"
        />
      </head>
      <body className={`${ubuntu.className}`}>
        <Providers>
          <Headers />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
