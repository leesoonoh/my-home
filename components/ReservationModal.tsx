"use client";

import React from "react";

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ReservationModal({ isOpen, onClose }: ReservationModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl border border-stone-200">
        
        {/* Close */}
        <button 
          onClick={onClose} 
          className="absolute top-5 right-5 text-stone-400 hover:text-stone-800 text-xl"
          aria-label="Close"
        >
          <i className="fa-solid fa-xmark"></i>
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <span className="text-[11px] font-bold tracking-widest text-[#4A3B32] uppercase font-eng">ONLINE RESERVATION</span>
          <h3 className="font-gowun text-2xl font-bold text-stone-900 mt-1">예약하실 아미유 지점을 선택해주세요</h3>
          <p className="text-xs text-stone-500 mt-1">디자이너별 실시간 스케줄 확인 및 네이버 스마트예약으로 연결됩니다.</p>
        </div>

        {/* Options */}
        <div className="space-y-4">
          
          {/* 미아사거리점 */}
          <div className="p-5 rounded-2xl border-2 border-stone-200 hover:border-emerald-600 bg-stone-50/70 hover:bg-emerald-50/40 transition-all">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-emerald-600 text-white flex items-center justify-center text-lg font-bold">
                  <i className="fa-solid fa-scissors"></i>
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 text-base font-gowun">
                    아미유 헤어 미아사거리점
                  </h4>
                  <p className="text-xs text-stone-500 mt-0.5">미아사거리역 인근 · 첫방문 50% 혜택</p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-stone-600 border-t border-stone-200/80 pt-3">
              <a href="tel:02-980-0951" className="hover:text-stone-950 font-medium flex items-center gap-1.5">
                <i className="fa-solid fa-phone text-[#4A3B32]"></i>
                <span>02-980-0951</span>
              </a>
              <a href="https://www.instagram.com/ameu_ms" target="_blank" rel="noopener noreferrer" className="hover:text-rose-600 font-medium flex items-center gap-1.5">
                <i className="fa-brands fa-instagram text-rose-500"></i>
                <span>@ameu_ms</span>
              </a>
              <a 
                href="https://map.naver.com/p/entry/place/1809226710?placePath=%2Fstylist%3Ffrom%3Dmap%26fromPanelNum%3D1%26additionalHeight%3D76%26timestamp%3D202611091600%26locale%3Dko%26svcName%3Dmap_pcv5&c=15.00,0,0,0,dh" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-3.5 py-1.5 rounded-lg bg-emerald-600 text-white font-bold hover:bg-emerald-700 transition-colors flex items-center gap-1"
              >
                <span>네이버 예약</span>
                <i className="fa-solid fa-arrow-right text-[10px]"></i>
              </a>
            </div>
          </div>

          {/* 성신여대점 */}
          <div className="p-5 rounded-2xl border-2 border-stone-200 hover:border-emerald-600 bg-stone-50/70 hover:bg-emerald-50/40 transition-all">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-emerald-600 text-white flex items-center justify-center text-lg font-bold">
                  <i className="fa-solid fa-scissors"></i>
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 text-base font-gowun">
                    아미유 헤어 성신여대점
                  </h4>
                  <p className="text-xs text-stone-500 mt-0.5">성신여대입구역 인근 · 첫방문 50% 혜택</p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-stone-600 border-t border-stone-200/80 pt-3">
              <a href="tel:02-922-0111" className="hover:text-stone-950 font-medium flex items-center gap-1.5">
                <i className="fa-solid fa-phone text-[#4A3B32]"></i>
                <span>02-922-0111</span>
              </a>
              <a href="https://www.instagram.com/ameu_ss/" target="_blank" rel="noopener noreferrer" className="hover:text-rose-600 font-medium flex items-center gap-1.5">
                <i className="fa-brands fa-instagram text-rose-500"></i>
                <span>@ameu_ss</span>
              </a>
              <a 
                href="https://m.place.naver.com/hairshop/1423704026/stylist?entry=plt&utm_source=ig&utm_medium=social&utm_content=link_in_bio" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-3.5 py-1.5 rounded-lg bg-emerald-600 text-white font-bold hover:bg-emerald-700 transition-colors flex items-center gap-1"
              >
                <span>네이버 예약</span>
                <i className="fa-solid fa-arrow-right text-[10px]"></i>
              </a>
            </div>
          </div>

        </div>

        {/* Footer Note */}
        <div className="mt-6 text-center text-[11px] text-stone-400">
          <p>전화 예약 및 시술 문의도 언제든 환영합니다.</p>
        </div>

      </div>
    </div>
  );
}
