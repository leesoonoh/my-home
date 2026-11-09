import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "아미유 헤어 (AMEU HAIR) | 미아사거리점 & 성신여대점 프리미엄 살롱",
  description: "머무는 순간마저 특별한 쉼이 되는 프리미엄 헤어살롱 아미유(AMEU HAIR). 미아사거리점과 성신여대점 첫방문 50% 할인 혜택 및 네이버 실시간 예약.",
  keywords: ["아미유 헤어", "AMEU HAIR", "미아사거리 미용실", "성신여대 미용실", "첫방문 50%", "헤어살롱", "네이버 예약"],
  openGraph: {
    title: "아미유 헤어 (AMEU HAIR) | 프리미엄 살롱",
    description: "머무는 순간마저 특별한 쉼이 되는 곳, 아미유 헤어",
    type: "website",
    locale: "ko_KR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="scroll-smooth">
      <head>
        <link rel="stylesheet" as="style" crossOrigin="anonymous" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Gowun+Batang:wght@400;700&family=Noto+Serif+KR:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}

