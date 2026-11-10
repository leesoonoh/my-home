"use client";

import React, { useState, useRef } from "react";

interface HeroProps {
  onOpenReservation: () => void;
  onOpenEvent: () => void;
}

interface HairStyle {
  id: string;
  tag: string;
  name: string;
  description: string;
  image: string;
  details: string[];
}

const HAIR_STYLES: HairStyle[] = [
  {
    id: "style-01",
    tag: "01 · SIGNATURE SLEEK CUT",
    name: "시그니처 슬릭 레이어드컷",
    description: "얼굴선을 가볍고 세련되게 감싸는 아미유 대표 맞춤형 슬릭 실루엣",
    image: "/models/model-1.jpg",
    details: ["페이스라인 커버", "초경량 질감 처리", "모질 개선 슬릭 케어"],
  },
  {
    id: "style-02",
    tag: "02 · ASH BEIGE WAVE",
    name: "애쉬 베이지 실키 웨이브",
    description: "붉은 기를 완벽 차단한 몽환적인 톤과 탄력 있는 여신 실크 웨이브",
    image: "/models/model-2.jpg",
    details: ["퍼스널 컬러 맞춤", "손상 최소화 탈색", "고탄력 셋팅펌"],
  },
  {
    id: "style-03",
    tag: "03 · FEMININE SEE-THROUGH BANG",
    name: "페미닌 시스루뱅 롱웨이브",
    description: "청순한 시스루뱅과 자연스럽게 흐르는 에어리 롱 텍스처",
    image: "/models/model-3.jpg",
    details: ["여성스러운 볼륨감", "사이드뱅 연결", "내추럴 드라이 무드"],
  },
  {
    id: "style-04",
    tag: "04 · SOFT C-CURL MEDIUM",
    name: "소프트 C컬 미디움 레이어드",
    description: "손질이 가장 편안한 데일리 럭셔리 C컬 & 바운스 실루엣",
    image: "/models/model-4.jpg",
    details: ["드라이 필요 없는 컬", "미디움 기장 최적화", "뿌리 볼륨펌 결합"],
  },
  {
    id: "style-05",
    tag: "05 · TASSEL BOB & SEMI-HUSH",
    name: "태슬 단발 & 세미 허쉬컷",
    description: "트렌디하고 감각적인 라인감의 태슬 커트와 시크한 텍스처",
    image: "/models/model-5.jpg",
    details: ["목선 극대화", "두상 보정 볼륨", "어려 보이는 분위기"],
  },
  {
    id: "style-06",
    tag: "06 · NATURAL BUILD PERM",
    name: "내추럴 볼륨 빌드펌",
    description: "S컬과 C컬의 조화로 우아하고 풍성한 볼륨감을 완성하는 대표 디자인",
    image: "/models/model-6.jpg",
    details: ["자연스러운 풍성함", "모발 손상 방지", "쉬운 홈스타일링"],
  },
  {
    id: "style-07",
    tag: "07 · GODDESS VOLUME WAVE",
    name: "엘레강스 여신 롱웨이브",
    description: "화사하고 고급스러운 무드를 극대화하는 아미유 시그니처 롱웨이브",
    image: "/models/model-7.jpg",
    details: ["윤기 코팅", "여신 실루엣", "프리미엄 셋팅"],
  },
  {
    id: "style-08",
    tag: "08 · CLASSIC LONG C-CURL",
    name: "클래식 C컬 롱 레이어드",
    description: "차분하면서도 우아한 흐름으로 완성하는 롱헤어 필수 디자인",
    image: "/models/model-8.jpg",
    details: ["단정한 모질 정돈", "엔젤링 윤기", "청순한 무드"],
  },
  {
    id: "style-09",
    tag: "09 · MODERN CHIC BOB",
    name: "모던 보브 단발펌",
    description: "목선이 길어 보이게 하는 안정된 볼륨감과 클래식 보브 실루엣",
    image: "/models/model-9.jpg",
    details: ["얼굴형 보정", "손질 3분 완성", "도회적인 분위기"],
  },
  {
    id: "style-10",
    tag: "10 · GRACE VOLUME PERM",
    name: "그레이스 볼륨 롱펌",
    description: "부드럽고 로맨틱한 웨이브로 세련된 분위기를 연출하는 프리미엄 펌",
    image: "/models/model-11.jpg",
    details: ["로맨틱 웨이브", "탄력 케어", "스타일링 쉬운 컬"],
  },
];

export default function Hero({ onOpenReservation, onOpenEvent }: HeroProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : HAIR_STYLES.length - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev < HAIR_STYLES.length - 1 ? prev + 1 : 0));
  };

  const activeStyle = HAIR_STYLES[activeIndex];

  return (
    <section className="relative w-full bg-stone-950 text-stone-100 overflow-hidden pt-12 pb-20 border-b border-stone-800">
      {/* 앰비언트 글로우 백그라운드 */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[360px] bg-gradient-to-b from-[#C5A880]/15 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-10 flex flex-col items-center">
        {/* 1. 상단 메인 브랜드 로고 */}
        <div className="mb-6 flex flex-col items-center">
          <img
            src="/logo2.png"
            alt="AMEU HAIR 아미유 로고"
            className="h-28 sm:h-36 md:h-44 w-auto object-contain drop-shadow-[0_4px_30px_rgba(255,255,255,0.35)] hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* 2. 에디토리얼 서브 타이틀 */}
        <div className="text-center max-w-2xl mx-auto mb-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-stone-900/80 border border-stone-700 text-[#C5A880] text-[11px] sm:text-xs font-eng tracking-[0.25em] uppercase mb-3">
            <span>PREMIUM HAIR ATELIER</span>
            <span>&middot;</span>
            <span>SEOUL</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-[0.14em] text-white/95 uppercase font-eng mb-2">
            The Art of <span className="font-bold italic text-[#DFD7CD]">Refined Beauty</span>
          </h1>

          <p className="text-stone-400 text-xs sm:text-sm font-light tracking-wide font-serif-kr">
            미아사거리점 &middot; 성신여대점에서 만나는 당신만의 퍼스널 헤어 디자인
          </p>
        </div>

        {/* 3. 첫방문 50% 혜택 뱃지 */}
        <div className="mb-6">
          <button
            onClick={onOpenEvent}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-lime-400/10 border border-lime-400/30 text-lime-300 hover:bg-lime-400/20 text-xs sm:text-sm transition-all shadow-[0_0_20px_rgba(196,214,0,0.15)] group"
          >
            <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse" />
            <span className="font-eng font-semibold tracking-wider uppercase">Event:</span>
            <span>첫방문 50% 혜택 안내</span>
            <i className="fa-solid fa-arrow-right text-[11px] group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 4. 시그니처 인터랙티브 헤어 레일 갤러리 */}
        <div className="w-full relative mt-2 mb-8 bg-stone-900/60 rounded-3xl border border-stone-800 shadow-2xl p-4 sm:p-7 backdrop-blur-md">
          {/* 레일 상단 헤더 & 컨트롤러 */}
          <div className="flex items-center justify-between mb-4">
            <div>
              <span className="text-[10px] sm:text-[11px] tracking-[0.25em] text-[#C5A880] font-eng uppercase font-semibold">
                2026 AMEU SIGNATURE COLLECTION
              </span>
              <h2 className="text-base sm:text-lg text-white font-medium tracking-wide">
                살롱 스타일 레일 컬렉션
                <span className="text-stone-400 text-xs font-normal ml-2 hidden sm:inline font-serif-kr">
                  카드를 클릭하거나 넘기면 다양한 스타일을 감상하실 수 있습니다
                </span>
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                aria-label="이전 스타일"
                className="w-9 h-9 rounded-full bg-stone-800 border border-stone-700 text-stone-300 hover:text-white hover:border-[#DFD7CD] flex items-center justify-center transition-all text-xs active:scale-95"
              >
                <i className="fa-solid fa-chevron-left" />
              </button>
              <button
                onClick={handleNext}
                aria-label="다음 스타일"
                className="w-9 h-9 rounded-full bg-stone-800 border border-stone-700 text-stone-300 hover:text-white hover:border-[#DFD7CD] flex items-center justify-center transition-all text-xs active:scale-95"
              >
                <i className="fa-solid fa-chevron-right" />
              </button>
            </div>
          </div>

          {/* 메탈릭 행거 바 */}
          <div className="relative w-full pt-4 pb-2">
            <div className="relative w-full h-[6px] rounded-full rail-hanger-rod mb-6 z-20">
              <div className="absolute -left-1 -top-1 w-3 h-4 bg-stone-400 rounded-sm border border-stone-950" />
              <div className="absolute -right-1 -top-1 w-3 h-4 bg-stone-400 rounded-sm border border-stone-950" />
            </div>

            {/* 3D 레일 트랙 */}
            <div
              ref={trackRef}
              className="rail-perspective-stage rail-scroll-track relative w-full flex items-center justify-start sm:justify-center gap-3 sm:gap-5 overflow-x-auto py-4 px-2 select-none"
            >
              {HAIR_STYLES.map((item, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <div
                    key={item.id}
                    onClick={() => setActiveIndex(idx)}
                    className={`rail-item-card flex-shrink-0 w-44 sm:w-52 rounded-2xl overflow-hidden border cursor-pointer relative ${
                      isActive
                        ? "active border-[#C5A880] ring-2 ring-[#C5A880]/40 shadow-2xl"
                        : "resting border-stone-800 hover:border-stone-600"
                    }`}
                  >
                    {/* 카드 상단 옷걸이 고리 그래픽 */}
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 z-30">
                      <div className="w-4 h-5 border-2 border-stone-300 rounded-t-full bg-stone-900/70" />
                    </div>

                    <div className="relative h-60 sm:h-72 w-full bg-stone-900 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />

                      <div className="absolute bottom-3 left-3 right-3 text-left">
                        <span className="text-[10px] tracking-wider text-[#C5A880] font-eng block">
                          {item.tag}
                        </span>
                        <h4 className="text-sm sm:text-base font-bold text-white font-gowun line-clamp-1 mt-0.5">
                          {item.name}
                        </h4>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 선택된 스타일 상세 정보 & 실시간 예약 CTA */}
          <div className="mt-4 pt-4 border-t border-stone-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="text-left">
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#C5A880]/20 text-[#C5A880] font-eng">
                  SELECTED STYLE
                </span>
                <span className="text-xs text-stone-400 font-eng">{activeStyle.tag}</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white font-gowun">{activeStyle.name}</h3>
              <p className="text-xs sm:text-sm text-stone-300 mt-1 max-w-xl font-serif-kr">
                {activeStyle.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mt-2">
                {activeStyle.details.map((detail) => (
                  <span
                    key={detail}
                    className="text-[11px] px-2.5 py-0.5 rounded-full bg-stone-800 text-stone-300 border border-stone-700"
                  >
                    #{detail}
                  </span>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={onOpenReservation}
              className="w-full sm:w-auto flex-shrink-0 inline-flex items-center justify-center gap-2.5 rounded-full bg-[#DFD7CD] px-6 py-3 text-xs sm:text-sm font-bold tracking-wider text-stone-950 uppercase shadow-lg hover:bg-white hover:scale-105 active:scale-95 transition-all"
            >
              <span>이 스타일로 실시간 예약</span>
              <i className="fa-solid fa-calendar-check" />
            </button>
          </div>
        </div>

        {/* 5. 하단 CTA 버튼 */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
          <button
            onClick={onOpenReservation}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#DFD7CD] text-stone-950 font-eng text-xs tracking-[0.2em] font-bold hover:bg-white transition-all shadow-[0_4px_25px_rgba(223,215,205,0.25)] hover:scale-105 active:scale-95 flex items-center justify-center gap-2.5"
          >
            <i className="fa-regular fa-clock" />
            <span>BOOK AN APPOINTMENT</span>
          </button>

          <a
            href="#salon"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-stone-900 border border-stone-700 text-stone-200 font-eng text-xs tracking-[0.2em] font-semibold hover:bg-stone-800 transition-all flex items-center justify-center gap-2.5 hover:border-stone-500"
          >
            <i className="fa-solid fa-location-dot text-[#C5A880]" />
            <span>VIEW LOCATIONS</span>
          </a>
        </div>
      </div>
    </section>
  );
}
