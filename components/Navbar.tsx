"use client";

import React from "react";

interface NavbarProps {
  onOpenReservation: () => void;
  onOpenEvent: () => void;
}

export default function Navbar({ onOpenReservation, onOpenEvent }: NavbarProps) {
  return (
    <>
      {/* 1. 준오헤어 스타일 최상단 베이지 유틸리티 바 */}
      <div className="bg-[#DFD7CD] text-stone-700 text-[11px] font-medium border-b border-stone-300/60 hidden sm:block">
        <div className="max-w-7xl mx-auto px-6 h-9 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a href="#" className="flex items-center gap-1.5 hover:text-stone-950 font-bold">
              <i className="fa-solid fa-house text-xs"></i>
              <span>HOME</span>
            </a>
            <div className="h-3 w-[1px] bg-stone-400"></div>
            <a href="#about" className="hover:text-stone-950 font-semibold tracking-wider font-eng">AMEU HAIR</a>
            <a href="#salon" className="hover:text-stone-950 text-stone-600 font-eng">SALON LOCATIONS</a>
            <a href="#stylebook" className="hover:text-stone-950 text-stone-600 font-eng">STYLE BOOK</a>
            <a href="#membership" className="hover:text-stone-950 text-stone-600 font-eng">MEMBERSHIP</a>
          </div>

          <div className="flex items-center gap-5 text-stone-600">
            <button onClick={onOpenEvent} className="text-rose-700 font-bold hover:underline flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-600 animate-pulse"></span>
              <span>첫방문 50% 이벤트</span>
            </button>
            <div className="h-3 w-[1px] bg-stone-400"></div>
            <div className="flex items-center gap-2">
              <i className="fa-solid fa-location-dot text-[#4A3B32]"></i>
              <span className="font-bold text-stone-900">미아사거리점 · 성신여대점</span>
            </div>
            <div className="h-3 w-[1px] bg-stone-400"></div>
            <button onClick={onOpenReservation} className="hover:text-stone-950 flex items-center gap-1 font-bold text-[#4A3B32]">
              <i className="fa-regular fa-calendar-check"></i>
              <span>네이버 실시간 예약</span>
            </button>
            <div className="h-3 w-[1px] bg-stone-400"></div>
            <div className="flex items-center gap-1 text-[10px] text-stone-500 font-eng">
              <span>KOR</span>
              <i className="fa-solid fa-chevron-down text-[8px]"></i>
            </div>
          </div>
        </div>
      </div>

      {/* 2. 메인 헤더 & 큰 로고 리드 */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200 transition-all">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* 큰 로고 */}
          <a href="#" className="flex items-center gap-4 py-1 group">
            <img 
              src="/logo2.png" 
              alt="AMEU HAIR 살롱 로고" 
              className="h-16 md:h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-sm"
            />
          </a>

          {/* 메인 메뉴 링크 */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-11 text-[13px] font-bold tracking-widest text-stone-800 uppercase font-eng">
            <a href="#about" className="hover:text-[#C5A880] transition-colors py-1">ABOUT</a>
            <a href="#salon" className="hover:text-[#C5A880] transition-colors py-1">SALON</a>
            <a href="#interior" className="hover:text-[#C5A880] transition-colors py-1">INTERIOR</a>
            <a href="#stylebook" className="hover:text-[#C5A880] transition-colors py-1">STYLE BOOK</a>
            <a href="#membership" className="hover:text-[#C5A880] transition-colors py-1">MEMBERSHIP</a>
            <button onClick={onOpenReservation} className="text-[#4A3B32] hover:text-stone-900 transition-colors py-1 font-extrabold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
              <span>RESERVATION</span>
            </button>
          </nav>

          {/* 우측 빠른 예약 버튼 */}
          <div className="hidden lg:flex items-center gap-3">
            <button 
              onClick={onOpenEvent}
              className="px-4 py-2 rounded-full border border-rose-300 bg-rose-50 text-rose-700 text-xs font-bold hover:bg-rose-100 transition-all flex items-center gap-1.5"
            >
              <i className="fa-solid fa-gift text-xs"></i>
              <span>첫방문 50%</span>
            </button>
            <button 
              onClick={onOpenReservation} 
              className="px-5 py-2.5 rounded-full bg-stone-900 text-white text-xs tracking-wider font-semibold hover:bg-stone-800 transition-all flex items-center gap-2 shadow-sm font-eng"
            >
              <i className="fa-regular fa-calendar-check text-[#C5A880]"></i>
              <span>실시간 예약하기</span>
            </button>
          </div>

          {/* 모바일 뷰 */}
          <div className="md:hidden flex items-center justify-between w-full border-t border-stone-100 pt-3">
            <button onClick={onOpenEvent} className="px-3 py-1 rounded-full bg-rose-100 text-rose-700 text-xs font-bold">
              🎉 첫방문 50%
            </button>
            <button onClick={onOpenReservation} className="px-4 py-1.5 rounded-full bg-stone-900 text-white text-xs font-bold">
              실시간 예약
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
