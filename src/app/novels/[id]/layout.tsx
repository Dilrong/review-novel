import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "노벨덕 - 소설 덕후를 위한 공간",
  description: "소설 덕후를 위한 공간",
  openGraph: {
    title: "노벨덕 - 소설 덕후를 위한 공간",
    description: "소설 덕후를 위한 공간",
    url: "https://novelduck.farm/",
    siteName: "NovelDuck",
    images: ["/images/og.png"],
    locale: "ko-KR",
    type: "website",
  },
};

export default function SlugLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <article>{children}</article>;
}
