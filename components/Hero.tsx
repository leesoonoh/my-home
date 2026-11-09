"use client";

import React from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { RailGarment } from "@/components/ui/product-rail-gallery";

const ClothingRailHero = dynamic(
  () => import("@/components/ui/product-rail-gallery").then((mod) => mod.ClothingRailHero),
  { ssr: false }
);

interface HeroProps {
  onOpenReservation: () => void;
  onOpenEvent: () => void;
}

const HAIR_COLLECTION_ITEMS: RailGarment[] = [
  {
    id: "style-01",
    name: "시그니처 슬릭 레이어드컷",
    description: "얼굴선을 가볍고 세련되게 감싸는 아미유 대표 맞춤형 슬릭 실루엣",
    image: "/models/model-1.jpg",
    details: ["페이스라인 커버", "초경량 질감 처리", "모질 개선 슬릭 케어"],
  },
  {
    id: "style-02",
    name: "애쉬 베이지 실키 웨이브",
    description: "붉은 기를 완벽 차단한 몽환적인 톤과 탄력 있는 여신 실크 웨이브",
    image: "/models/model-2.jpg",
    details: ["퍼스널 컬러 맞춤", "손상 최소화 탈색", "고탄력 셋팅펌"],
  },
  {
    id: "style-03",
    name: "페미닌 시스루뱅 롱웨이브",
    description: "청순한 시스루뱅과 자연스럽게 흐르는 에어리 롱 텍스처",
    image: "/models/model-3.jpg",
    details: ["여성스러운 볼륨감", "사이드뱅 연결", "내추럴 드라이 무드"],
  },
  {
    id: "style-04",
    name: "소프트 C컬 미디움 레이어드",
    description: "손질이 가장 편안한 데일리 럭셔리 C컬 & 바운스 실루엣",
    image: "/models/model-4.jpg",
    details: ["드라이 필요 없는 컬", "미디움 기장 최적화", "뿌리 볼륨펌 결합"],
  },
  {
    id: "style-05",
    name: "태슬 단발 & 세미 허쉬컷",
    description: "트렌디하고 감각적인 라인감의 태슬 커트와 시크한 텍스처",
    image: "/models/model-5.jpg",
    details: ["샤프한 끝선 연출", "페이스 컨투어링", "오일 스타일링 추천"],
  },
  {
    id: "style-06",
    name: "내추럴 페미닌 빌드펌",
    description: "S컬과 C컬의 조화로 우아하고 풍성한 볼륨을 완성하는 대표 펌",
    image: "/models/model-6.jpg",
    details: ["여성스러운 볼륨 S/C컬", "유지력 극대화", "두상 맞춤 디자인"],
  },
  {
    id: "style-07",
    name: "엘레강스 여신 롱웨이브",
    description: "화사하고 고급스러운 무드를 극대화하는 아미유 시그니처 롱웨이브",
    image: "/models/model-7.jpg",
    details: ["입체적인 컬감", "윤기 코팅 트리트먼트", "포토제닉 헤어"],
  },
  {
    id: "style-08",
    name: "클래식 C컬 롱 레이어드",
    description: "차분하면서도 우아한 흐름으로 완성하는 롱헤어 필수 디자인",
    image: "/models/model-8.jpg",
    details: ["깔끔한 컬 정리", "모발 끝 갈라짐 복구", "윤기 실크 코팅"],
  },
  {
    id: "style-09",
    name: "모던 보브 단발펌",
    description: "목선을 길어 보이게 하는 단정한 볼륨감과 클래식 보브 실루엣",
    image: "/models/model-10.jpg",
    details: ["목선 극대화", "두상 보정 볼륨", "어려 보이는 분위기"],
  },
  {
    id: "style-10",
    name: "그레이스 볼륨 롱펌",
    description: "부드럽고 로맨틱한 웨이브로 세련된 분위기를 연출하는 프리미엄 펌",
    image: "/models/model-11.jpg",
    details: ["로맨틱 웨이브", "탄력 케어", "스타일링 쉬운 컬"],
  },
];

export default function Hero({ onOpenReservation, onOpenEvent }: HeroProps) {
  return (
    <section className="relative w-full bg-stone-950 text-stone-100 overflow-hidden pt-12 pb-20 border-b border-stone-800">
      {/* 백그라운드 앰비언트 글로우 */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[360px] bg-gradient-to-b from-[#C5A880]/15 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-10 flex flex-col items-center">
        {/* 1. 상단 리드 브랜드 로고 */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 flex flex-col items-center"
        >
          <img
            src="/logo2.png"
            alt="AMEU HAIR 아미유 로고"
            className="h-28 sm:h-36 md:h-44 w-auto object-contain drop-shadow-[0_4px_30px_rgba(255,255,255,0.35)] hover:scale-105 transition-transform duration-500"
          />
        </motion.div>

        {/* 2. 세련된 에디토리얼 서브 타이틀 */}
        <div className="text-center max-w-2xl mx-auto mb-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-stone-900/80 border border-stone-700 text-[#C5A880] text-[11px] sm:text-xs font-eng tracking-[0.25em] uppercase mb-3">
            <span>PREMIUM HAIR ATELIER</span>
            <span>&middot;</span>
            <span>SEOUL</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-[0.14em] text-white/95 uppercase font-eng mb-2">
            The Art of <span className="font-bold italic text-[#DFD7CD]">Refined Beauty</span>
          </h1>

          <p className="text-stone-400 text-xs sm:text-sm font-light tracking-wide">
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

        {/* 4. 레일 스타일 갤러리 (가격표 없이 헤어 모델 회전 연출) */}
        <div className="w-full relative mt-2 mb-8 bg-stone-900/40 rounded-3xl border border-stone-800/80 shadow-2xl p-2 sm:p-6 backdrop-blur-sm">
          <div className="text-center mb-2">
            <span className="text-[11px] tracking-[0.2em] uppercase font-eng text-[#C5A880]">
              Interactive Hairstyle Rail
            </span>
            <p className="text-xs text-stone-400 mt-1">
              마우스를 레일 위로 천천히 움직여 다양한 스타일을 마주해보세요
            </p>
          </div>

          <ClothingRailHero
            items={HAIR_COLLECTION_ITEMS}
            hanger="matte"
            eyebrow="2026 AMEU SIGNATURE COLLECTION"
            heading="살롱 레일에 걸린 아미유 대표 디자인"
            caption="레일을 터치하거나 옷걸이를 살짝 넘겨보면 정면 디자인을 감상하실 수 있습니다."
            autoplay={true}
            interval={3200}
            labels={{
              front: "정면 보기",
              back: "전체 무드",
              close: "닫기",
              show: "자세히 보기",
            }}
            action={
              <button
                type="button"
                onClick={onOpenReservation}
                className="inline-flex items-center gap-2.5 rounded-full bg-[#DFD7CD] px-6 py-3 text-xs sm:text-sm font-bold tracking-wider text-stone-950 uppercase shadow-lg hover:bg-white hover:scale-105 active:scale-95 transition-all"
              >
                <span>이 스타일로 실시간 예약하기</span>
                <i className="fa-solid fa-calendar-check" />
              </button>
            }
          />
        </div>

        {/* 5. 실시간 예약 & 안내 CTA 버튼 */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
          <button
            onClick={onOpenReservation}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#DFD7CD] text-stone-950 font-eng text-xs tracking-[0.2em] font-bold hover:bg-white transition-all shadow-[0_4px_25px_rgba(223,215,205,0.25)] hover:scale-105 active:scale-95 flex items-center justify-center gap-2.5"
          >
            <i className="fa-regular fa-clock" />
            <span>BOOK AN APPOINTMENT</span>
          </button>

          <a
            href="#salon-branches"
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
