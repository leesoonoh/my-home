"use client";

import React, { useState, useEffect } from "react";

interface EventPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EventPopup({ isOpen, onClose }: EventPopupProps) {
  const [activeTab, setActiveTab] = useState<"mia" | "sungshin">("mia");
  const [dontShowToday, setDontShowToday] = useState(false);

  const handleClose = () => {
    if (dontShowToday) {
      localStorage.setItem("ameu_hide_event_popup", new Date().toDateString());
    }
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-xl w-full overflow-hidden shadow-2xl border border-stone-200 relative flex flex-col max-h-[92vh]">
        
        {/* Header */}
        <div className="bg-stone-900 text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-lime-400 animate-ping"></span>
            <span className="font-bold text-sm text-lime-400">AMEU HAIR SPECIAL EVENT</span>
          </div>
          <button onClick={handleClose} className="text-stone-400 hover:text-white text-lg">
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        {/* Tab Selection */}
        <div className="flex border-b border-stone-200 bg-stone-100">
          <button 
            onClick={() => setActiveTab("mia")} 
            className={`flex-1 py-3 text-xs sm:text-sm font-bold border-b-2 flex items-center justify-center gap-1.5 transition-all ${
              activeTab === "mia" 
                ? "border-stone-900 bg-white text-stone-900" 
                : "border-transparent text-stone-500 hover:text-stone-800"
            }`}
          >
            <i className="fa-solid fa-scissors text-emerald-600"></i>
            <span>미아사거리점 첫방문 50%</span>
          </button>
          <button 
            onClick={() => setActiveTab("sungshin")} 
            className={`flex-1 py-3 text-xs sm:text-sm font-bold border-b-2 flex items-center justify-center gap-1.5 transition-all ${
              activeTab === "sungshin" 
                ? "border-stone-900 bg-white text-stone-900" 
                : "border-transparent text-stone-500 hover:text-stone-800"
            }`}
          >
            <i className="fa-solid fa-wand-magic-sparkles text-[#C5A880]"></i>
            <span>성신여대점 첫방문 50%</span>
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-5 sm:p-6 space-y-4">
          {activeTab === "mia" ? (
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden shadow-md border border-stone-200 bg-stone-100 max-h-[50vh] flex items-center justify-center">
                <img 
                  src="/event-mia.jpg" 
                  alt="아미유 헤어 미아사거리점 첫방문 50% 이벤트" 
                  className="w-full h-auto max-h-[50vh] object-contain"
                />
              </div>
              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-center">
                <p className="text-sm text-stone-800 font-bold">
                  "당신의 첫 선택, 가장 빛나는 변화"
                </p>
                <p className="text-xs text-stone-500 mt-1">
                  미아사거리점 첫방문 고객 대상 커트 · 펌 · 염색 <strong>50% 할인 혜택</strong>
                </p>
              </div>
              <a 
                href="https://map.naver.com/p/entry/place/1809226710?placePath=%2Fstylist%3Ffrom%3Dmap%26fromPanelNum%3D1%26additionalHeight%3D76%26timestamp%3D202611091600%26locale%3Dko%26svcName%3Dmap_pcv5&c=15.00,0,0,0,dh" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full py-4 rounded-xl bg-emerald-600 text-white font-bold text-sm text-center hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2 shadow-md"
              >
                <i className="fa-solid fa-calendar-check"></i>
                <span>미아사거리점 50% 할인 예약 바로가기</span>
              </a>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden shadow-md border border-stone-200 bg-stone-100 max-h-[50vh] flex items-center justify-center">
                <img 
                  src="/event-sungshin.jpg" 
                  alt="아미유 헤어 성신여대점 첫방문 50% 이벤트" 
                  className="w-full h-auto max-h-[50vh] object-contain"
                />
              </div>
              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-center">
                <p className="text-sm text-stone-800 font-bold">
                  AMEU HAIR 성신여대점 첫방문 50% EVENT
                </p>
                <p className="text-xs text-stone-600 mt-1">
                  CUT <strong>13,900원</strong> · PERM <strong>40,000원</strong> · COLOR <strong>40,000원</strong> · 열펌 <strong>65,000원</strong>
                </p>
              </div>
              <a 
                href="https://m.place.naver.com/hairshop/1423704026/stylist?entry=plt&utm_source=ig&utm_medium=social&utm_content=link_in_bio" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full py-4 rounded-xl bg-stone-900 text-lime-400 font-bold text-sm text-center hover:bg-stone-800 transition-colors flex items-center justify-center gap-2 shadow-md"
              >
                <i className="fa-solid fa-calendar-check"></i>
                <span>성신여대점 50% 할인 예약 바로가기</span>
              </a>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-stone-100 border-t border-stone-200 flex items-center justify-between text-xs text-stone-600">
          <label className="flex items-center gap-2 cursor-pointer select-none">
            <input 
              type="checkbox" 
              checked={dontShowToday} 
              onChange={(e) => setDontShowToday(e.target.checked)}
              className="rounded text-stone-900 focus:ring-0" 
            />
            <span>오늘 하루 보지 않기</span>
          </label>
          <button 
            onClick={handleClose} 
            className="px-4 py-1.5 rounded-lg bg-stone-300 hover:bg-stone-400 text-stone-800 font-medium"
          >
            닫기
          </button>
        </div>

      </div>
    </div>
  );
}

