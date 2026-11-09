"use client";

import React from "react";

interface SignatureCardsProps {
  onOpenReservation: () => void;
}

export default function SignatureCards({ onOpenReservation }: SignatureCardsProps) {
  return (
    <section className="py-12 md:py-16 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* 준오헤어 참고 사진 2대 시그니처 카드 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          
          {/* CARD 1: 실시간 예약하기 */}
          <div 
            onClick={onOpenReservation} 
            className="group cursor-pointer relative h-64 sm:h-72 lg:h-80 rounded-2xl overflow-hidden shadow-md flex items-center p-8 sm:p-12 text-white"
          >
            <div className="absolute inset-0 bg-stone-900 z-0 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1000&q=80" 
                alt="아미유 미용실 실시간 예약" 
                className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-stone-950/90 via-stone-950/60 to-transparent"></div>
            </div>

            <div className="relative z-10 max-w-md">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[11px] font-bold tracking-widest text-[#C5A880] uppercase font-eng">ONLINE RESERVATION</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-3 flex items-center gap-3">
                <span className="font-gowun">실시간 예약하기</span>
                <span className="text-xl sm:text-2xl text-[#DFD7CD] group-hover:translate-x-2 transition-transform">&rarr;</span>
              </h3>
              <p className="text-stone-200 text-xs sm:text-sm font-normal leading-relaxed mb-6 font-serif-kr">
                쉽고 간편한 매장 예약과 디자이너를 추천해 드립니다.<br />
                미아사거리점 & 성신여대점 네이버 실시간 예약 바로가기
              </p>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-[11px] font-medium border border-white/30 group-hover:bg-white group-hover:text-stone-900 transition-colors">
                  <i className="fa-solid fa-scissors text-xs"></i>
                  <span>매장 & 디자이너 선택</span>
                </span>
              </div>
            </div>
          </div>

          {/* CARD 2: AMEU CARE 이용하기 */}
          <a 
            href="#membership" 
            className="group cursor-pointer relative h-64 sm:h-72 lg:h-80 rounded-2xl overflow-hidden shadow-md flex items-center p-8 sm:p-12 text-white"
          >
            <div className="absolute inset-0 bg-stone-900 z-0 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=80" 
                alt="아미유 프리미엄 케어" 
                className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-stone-950/90 via-stone-950/60 to-transparent"></div>
            </div>

            <div className="relative z-10 max-w-md">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[11px] font-bold tracking-widest text-[#C5A880] uppercase font-eng">AMEU CARE & MEMBERSHIP</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-3 flex items-center gap-3">
                <span className="font-gowun">AMEU CARE 이용하기</span>
                <span className="text-xl sm:text-2xl text-[#DFD7CD] group-hover:translate-x-2 transition-transform">&rarr;</span>
              </h3>
              <p className="text-stone-200 text-xs sm:text-sm font-normal leading-relaxed mb-6 font-serif-kr">
                건강한 모발과 두피를 위한 뷰티 제품과<br />
                VIP 멤버십 프리미엄 혜택을 만나보세요.
              </p>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-[11px] font-medium border border-white/30 group-hover:bg-white group-hover:text-stone-900 transition-colors">
                  <i className="fa-solid fa-crown text-xs text-[#C5A880]"></i>
                  <span>VIP 혜택 확인하기</span>
                </span>
              </div>
            </div>
          </a>

        </div>

      </div>
    </section>
  );
}

