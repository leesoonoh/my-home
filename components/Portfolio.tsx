"use client";

import React, { useState } from "react";

const portfolioItems = [
  {
    id: 1,
    category: "web",
    categoryLabel: "웹사이트 제작",
    title: "아뜰리에 로랑 (청담점)",
    subtitle: "LUXURY HAIR SALON",
    description: "하이엔드 헤어살롱 콘셉트에 맞춘 미니멀 다크 모드 웹사이트. 원클릭 네이버 스마트예약 연동으로 런칭 첫 달 예약 전환율 42% 증가.",
    tag: "Next.js · 반응형 · 네이버예약",
    metric: "신규 유입 +210%",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    category: "blog",
    categoryLabel: "블로그 디자인",
    title: "라포레 헤어스튜디오 (홍대)",
    subtitle: "HOMEPAGE SKIN",
    description: "2030 영타겟 고객을 사로잡는 감각적인 파스텔 무드 스킨. 카카오톡 문의, 시술 가격표, 디자이너 프로필 위젯을 적용하여 이탈률 50% 개선.",
    tag: "홈페이지형 스킨 · 6개 위젯 연동",
    metric: "체류시간 2.8배 증가",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    category: "posting",
    categoryLabel: "포스팅 대행 & 상위노출",
    title: "메종드 블랑 (판교 백현점)",
    subtitle: "SEO & RANKING",
    description: "'판교 레이어드컷 잘하는곳', '분당 빌드펌' 등 핵심 15개 키워드 스마트블록 1위 석권. 월 8회 시술 중심 원고로 오픈 2개월 만에 예약 만석 달성.",
    tag: "월 8회 발행 · 사진 보정 · 키워드 분석",
    metric: "1위 노출 12건 달성",
    image: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    category: "web",
    categoryLabel: "웹사이트 제작",
    title: "살롱 드 뮤즈 (부산 해운대)",
    subtitle: "MODERN SALON",
    description: "시술 전후 비교 슬라이더와 시술 소요시간/시술 유지법 안내 탭을 탑재하여 전화 상담 문의가 70% 감소하고 바로 예약으로 전환됨.",
    tag: "Next.js · 비포/애프터 인터랙션",
    metric: "예약 건수 185% 상승",
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    category: "blog",
    categoryLabel: "블로그 디자인",
    title: "헤어바이나인 (성수점)",
    subtitle: "BRANDING SKIN",
    description: "성수동 감성의 트렌디한 타이포그래피와 모던 레이아웃. 네이버 톡톡과 인스타 DM 빠른 연결 위젯 배치로 1인샵 원장님 맞춤 제작.",
    tag: "홈페이지형 블로그 · 네이버톡톡 연동",
    metric: "문의 전환율 3.4배",
    image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    category: "posting",
    categoryLabel: "포스팅 대행 & 상위노출",
    title: "끌레르 헤어라운지 (일산)",
    subtitle: "MONTHLY GROWTH",
    description: "탈색/옴브레 염색 전문 특화 포스팅 전략. 고객들의 실제 고민(모발 손상도, 시술 시간)을 해결해 주는 정보성 원고로 고단가 시술 고객 대거 유입.",
    tag: "월 6회 고단가 시술 특화 타겟",
    metric: "월 객단가 35% 상승",
    image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=800&q=80"
  }
];

export default function Portfolio() {
  const [filter, setFilter] = useState<string>("all");

  const filteredItems = filter === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-bold tracking-widest uppercase text-brand-600">Portfolio</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 mt-2">
              실제 매출로 증명된 아미유 작업물
            </h2>
            <p className="text-stone-600 text-sm mt-2">
              원장님의 매장 분위기와 타겟 고객층에 맞춘 감각적인 작업 사례입니다.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {[
              { id: "all", label: "전체" },
              { id: "web", label: "홈페이지" },
              { id: "blog", label: "블로그 디자인" },
              { id: "posting", label: "포스팅 상위노출" },
            ].map(btn => (
              <button
                key={btn.id}
                onClick={() => setFilter(btn.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  filter === btn.id
                    ? "bg-brand-900 text-white shadow-sm"
                    : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map(item => (
            <div 
              key={item.id}
              className="group rounded-3xl overflow-hidden border border-brand-200/80 bg-brand-50/40 hover:shadow-xl transition-all"
            >
              <div className="relative h-64 overflow-hidden bg-stone-200">
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent z-10" />
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <span className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[11px] font-medium">
                  {item.categoryLabel}
                </span>
                <div className="absolute bottom-4 left-4 right-4 z-20 text-white">
                  <span className="text-xs text-brand-gold font-serif-luxury tracking-wide">{item.subtitle}</span>
                  <h4 className="text-lg font-bold">{item.title}</h4>
                </div>
              </div>
              <div className="p-6">
                <p className="text-xs text-stone-600 line-clamp-2 mb-4 leading-relaxed">
                  {item.description}
                </p>
                <div className="flex items-center justify-between text-[11px] pt-3 border-t border-brand-200/60 text-stone-500">
                  <span>{item.tag}</span>
                  <span className="text-emerald-700 font-bold">{item.metric}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
