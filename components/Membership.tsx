"use client";

import React from "react";

interface MembershipProps {
  onOpenReservation: () => void;
}

export default function Membership({ onOpenReservation }: MembershipProps) {
  return (
    <section id="membership" className="py-24 bg-[#F5F2EB]">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <span className="text-xs font-bold tracking-[0.25em] text-[#4A3B32] uppercase font-eng">VIP Privilege</span>
        <h2 className="font-gowun text-3xl sm:text-4xl font-bold text-stone-900 mt-2 mb-4">
          AMEU VIP 멤버십 혜택
        </h2>
        <p className="text-stone-600 text-sm sm:text-base max-w-xl mx-auto mb-12 font-serif-kr">
          아미유를 찾아주시는 특별한 고객님을 위한 프리미엄 정액권 혜택.<br />
          미아사거리점과 성신여대점 모두에서 자유롭게 사용하실 수 있습니다.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          
          {/* SILVER */}
          <div className="bg-white rounded-3xl p-8 border border-stone-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="text-xs font-bold tracking-widest text-stone-500 font-eng">SILVER CARD</div>
              <div className="font-gowun text-2xl font-bold text-stone-900 mt-2 mb-4">30만원권</div>
              <ul className="space-y-2 text-xs text-stone-600 mb-6 font-serif-kr">
                <li className="flex items-center gap-2"><i className="fa-solid fa-check text-[#4A3B32]"></i> 전 시술 상시 10% 추가 할인</li>
                <li className="flex items-center gap-2"><i className="fa-solid fa-check text-[#4A3B32]"></i> 모발 수분 클리닉 1회 무료</li>
                <li className="flex items-center gap-2"><i className="fa-solid fa-check text-[#4A3B32]"></i> 동반 1인 가족 함께 사용 가능</li>
              </ul>
            </div>
            <button onClick={onOpenReservation} className="w-full py-3 rounded-xl border border-stone-300 text-xs font-bold hover:bg-stone-900 hover:text-white transition-colors">
              멤버십 문의하기
            </button>
          </div>

          {/* GOLD (Best) */}
          <div className="bg-stone-900 text-white rounded-3xl p-8 shadow-xl flex flex-col justify-between relative transform md:-translate-y-2">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#C5A880] text-stone-950 text-[10px] font-bold tracking-wider font-eng">
              MOST POPULAR
            </div>
            <div>
              <div className="text-xs font-bold tracking-widest text-[#DFD7CD] font-eng">GOLD CARD</div>
              <div className="font-gowun text-2xl font-bold text-white mt-2 mb-4">50만원권</div>
              <ul className="space-y-2 text-xs text-stone-300 mb-6 font-serif-kr">
                <li className="flex items-center gap-2"><i className="fa-solid fa-check text-[#C5A880]"></i> 전 시술 상시 15% 추가 할인</li>
                <li className="flex items-center gap-2"><i className="fa-solid fa-check text-[#C5A880]"></i> 프리미엄 헤드스파 1회 무료 (8만원 상당)</li>
                <li className="flex items-center gap-2"><i className="fa-solid fa-check text-[#C5A880]"></i> 홈케어 살롱 샴푸 증정</li>
                <li className="flex items-center gap-2"><i className="fa-solid fa-check text-[#C5A880]"></i> 가족/지인 양도 가능</li>
              </ul>
            </div>
            <button onClick={onOpenReservation} className="w-full py-3 rounded-xl bg-[#C5A880] text-stone-950 text-xs font-bold hover:bg-white transition-colors">
              멤버십 문의하기
            </button>
          </div>

          {/* BLACK */}
          <div className="bg-white rounded-3xl p-8 border border-stone-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="text-xs font-bold tracking-widest text-stone-500 font-eng">BLACK VIP</div>
              <div className="font-gowun text-2xl font-bold text-stone-900 mt-2 mb-4">100만원권</div>
              <ul className="space-y-2 text-xs text-stone-600 mb-6 font-serif-kr">
                <li className="flex items-center gap-2"><i className="fa-solid fa-check text-[#4A3B32]"></i> 전 시술 상시 20% 특별 할인</li>
                <li className="flex items-center gap-2"><i className="fa-solid fa-check text-[#4A3B32]"></i> VIP 독립 프라이빗 룸 우선 배정</li>
                <li className="flex items-center gap-2"><i className="fa-solid fa-check text-[#4A3B32]"></i> 풀코스 헤드스파 2회 제공</li>
                <li className="flex items-center gap-2"><i className="fa-solid fa-check text-[#4A3B32]"></i> 프리미엄 홈케어 세트 증정</li>
              </ul>
            </div>
            <button onClick={onOpenReservation} className="w-full py-3 rounded-xl border border-stone-300 text-xs font-bold hover:bg-stone-900 hover:text-white transition-colors">
              멤버십 문의하기
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

