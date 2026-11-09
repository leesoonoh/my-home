"use client";

import React, { useState } from "react";

interface EstimatorProps {
  onOpenModal: (title: string) => void;
}

export default function Estimator({ onOpenModal }: EstimatorProps) {
  const [website, setWebsite] = useState<number>(0);
  const [blogDesign, setBlogDesign] = useState<number>(0);
  const [posting, setPosting] = useState<number>(0);
  const [addonMap, setAddonMap] = useState<boolean>(false);
  const [addonBranding, setAddonBranding] = useState<boolean>(false);

  const subtotal = 
    website + 
    blogDesign + 
    posting + 
    (addonMap ? 100000 : 0) + 
    (addonBranding ? 150000 : 0);

  const majorCount = (website > 0 ? 1 : 0) + (blogDesign > 0 ? 1 : 0) + (posting > 0 ? 1 : 0);
  const hasDiscount = majorCount >= 2;
  const finalPrice = Math.round(subtotal * (hasDiscount ? 0.9 : 1.0));

  const handleRequestQuote = () => {
    onOpenModal(`실시간 예상 견적 [${finalPrice.toLocaleString()}원] 상담 신청`);
  };

  return (
    <section id="estimator" className="py-24 bg-brand-100/60 border-y border-brand-200/70">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold tracking-widest uppercase text-brand-600">Smart Estimator</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 mt-2 mb-3">
            1분 실시간 맞춤 견적 계산기
          </h2>
          <p className="text-stone-600 text-sm sm:text-base">
            우리 매장에 필요한 항목을 체크하시면 투명하고 합리적인 예상 비용을 즉시 확인하실 수 있습니다.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-brand-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Options Form */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* 1. Website */}
              <div>
                <label className="text-sm font-bold text-stone-900 mb-3 flex items-center gap-2">
                  <i className="fa-solid fa-globe text-brand-600"></i>
                  1. 홈페이지 제작 여부
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <label 
                    onClick={() => setWebsite(0)}
                    className={`cursor-pointer border rounded-2xl p-4 flex flex-col justify-between transition-all ${website === 0 ? "border-brand-700 bg-brand-50/50 shadow-sm" : "border-stone-200 hover:border-brand-300"}`}
                  >
                    <span className="text-xs font-bold text-stone-700">신청 안함</span>
                    <span className="text-xs text-stone-400 mt-2">0원</span>
                  </label>
                  <label 
                    onClick={() => setWebsite(650000)}
                    className={`cursor-pointer border rounded-2xl p-4 flex flex-col justify-between transition-all ${website === 650000 ? "border-brand-700 bg-brand-50/50 shadow-sm" : "border-stone-200 hover:border-brand-300"}`}
                  >
                    <span className="text-xs font-bold text-stone-900">원페이지 랜딩형</span>
                    <span className="text-[11px] text-stone-500 mt-1">예약 중심 필수 구성</span>
                    <span className="text-xs font-bold text-brand-700 mt-2">65만원</span>
                  </label>
                  <label 
                    onClick={() => setWebsite(1100000)}
                    className={`cursor-pointer border rounded-2xl p-4 flex flex-col justify-between transition-all ${website === 1100000 ? "border-brand-700 bg-brand-50/50 shadow-sm" : "border-stone-200 hover:border-brand-300"}`}
                  >
                    <span className="text-xs font-bold text-stone-900">다중페이지 프리미엄</span>
                    <span className="text-[11px] text-stone-500 mt-1">갤러리 + 디자이너별 룸</span>
                    <span className="text-xs font-bold text-brand-700 mt-2">110만원</span>
                  </label>
                </div>
              </div>

              {/* 2. Blog Skin */}
              <div>
                <label className="text-sm font-bold text-stone-900 mb-3 flex items-center gap-2">
                  <i className="fa-solid fa-paintbrush text-brand-600"></i>
                  2. 블로그 스킨 디자인
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <label 
                    onClick={() => setBlogDesign(0)}
                    className={`cursor-pointer border rounded-2xl p-4 flex items-center justify-between transition-all ${blogDesign === 0 ? "border-brand-700 bg-brand-50/50 shadow-sm" : "border-stone-200 hover:border-brand-300"}`}
                  >
                    <div>
                      <span className="text-xs font-bold text-stone-700 block">선택 안 함</span>
                      <span className="text-[11px] text-stone-400">기존 블로그 유지</span>
                    </div>
                    <span className="text-xs text-stone-400">0원</span>
                  </label>
                  <label 
                    onClick={() => setBlogDesign(280000)}
                    className={`cursor-pointer border rounded-2xl p-4 flex items-center justify-between transition-all ${blogDesign === 280000 ? "border-brand-700 bg-brand-50/50 shadow-sm" : "border-stone-200 hover:border-brand-300"}`}
                  >
                    <div>
                      <span className="text-xs font-bold text-stone-900 block">홈페이지형 와이드 스킨</span>
                      <span className="text-[11px] text-stone-500">투명 위젯 5종 + 모바일</span>
                    </div>
                    <span className="text-xs font-bold text-brand-700">+28만원</span>
                  </label>
                </div>
              </div>

              {/* 3. Monthly Posting */}
              <div>
                <label className="text-sm font-bold text-stone-900 mb-3 flex items-center gap-2">
                  <i className="fa-solid fa-pen text-brand-600"></i>
                  3. 시술 포스팅 대행 (월 단위)
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <label 
                    onClick={() => setPosting(0)}
                    className={`cursor-pointer border rounded-2xl p-4 flex flex-col justify-between transition-all ${posting === 0 ? "border-brand-700 bg-brand-50/50 shadow-sm" : "border-stone-200 hover:border-brand-300"}`}
                  >
                    <span className="text-xs font-bold text-stone-700">미진행</span>
                    <span className="text-xs text-stone-400 mt-2">0원</span>
                  </label>
                  <label 
                    onClick={() => setPosting(320000)}
                    className={`cursor-pointer border rounded-2xl p-4 flex flex-col justify-between transition-all ${posting === 320000 ? "border-brand-700 bg-brand-50/50 shadow-sm" : "border-stone-200 hover:border-brand-300"}`}
                  >
                    <span className="text-xs font-bold text-stone-900">월 4회 (주 1회)</span>
                    <span className="text-[11px] text-stone-500 mt-1">기본 노출 유지</span>
                    <span className="text-xs font-bold text-brand-700 mt-2">월 32만원</span>
                  </label>
                  <label 
                    onClick={() => setPosting(560000)}
                    className={`cursor-pointer border rounded-2xl p-4 flex flex-col justify-between transition-all ${posting === 560000 ? "border-brand-700 bg-brand-50/50 shadow-sm" : "border-stone-200 hover:border-brand-300"}`}
                  >
                    <span className="text-xs font-bold text-stone-900">월 8회 (주 2회) ★추천</span>
                    <span className="text-[11px] text-stone-500 mt-1">상위점유율 급상승</span>
                    <span className="text-xs font-bold text-brand-700 mt-2">월 56만원</span>
                  </label>
                </div>
              </div>

              {/* 4. Addons */}
              <div>
                <label className="text-sm font-bold text-stone-900 mb-3 flex items-center gap-2">
                  <i className="fa-solid fa-plus-circle text-brand-600"></i>
                  4. 추가 부가 혜택 (선택)
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <label 
                    onClick={() => setAddonMap(!addonMap)}
                    className={`cursor-pointer border rounded-2xl p-3 flex items-center gap-3 transition-all ${addonMap ? "border-brand-700 bg-brand-50/50" : "border-stone-200 hover:border-brand-300"}`}
                  >
                    <input type="checkbox" checked={addonMap} readOnly className="w-4 h-4 rounded text-brand-700" />
                    <div className="text-xs">
                      <span className="font-bold text-stone-800 block">네이버 플레이스 정밀 세팅</span>
                      <span className="text-stone-500 text-[11px]">+10만원 (단품)</span>
                    </div>
                  </label>
                  <label 
                    onClick={() => setAddonBranding(!addonBranding)}
                    className={`cursor-pointer border rounded-2xl p-3 flex items-center gap-3 transition-all ${addonBranding ? "border-brand-700 bg-brand-50/50" : "border-stone-200 hover:border-brand-300"}`}
                  >
                    <input type="checkbox" checked={addonBranding} readOnly className="w-4 h-4 rounded text-brand-700" />
                    <div className="text-xs">
                      <span className="font-bold text-stone-800 block">로고 & 모바일 가격표 디자인</span>
                      <span className="text-stone-500 text-[11px]">+15만원 (단품)</span>
                    </div>
                  </label>
                </div>
              </div>

            </div>

            {/* Total Card */}
            <div className="lg:col-span-5 flex flex-col justify-between bg-stone-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl">
              <div>
                <div className="flex items-center justify-between border-b border-stone-800 pb-4 mb-6">
                  <div>
                    <h4 className="font-serif-luxury text-xl font-bold tracking-wide text-brand-gold">ESTIMATION</h4>
                    <span className="text-xs text-stone-400">실시간 맞춤 견적 요약</span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-gold">
                    <i className="fa-solid fa-receipt text-sm"></i>
                  </div>
                </div>

                <div className="space-y-3 text-xs text-stone-300 mb-6">
                  {website === 650000 && <div className="flex justify-between"><span>홈페이지 (랜딩형)</span><span>650,000원</span></div>}
                  {website === 1100000 && <div className="flex justify-between"><span>홈페이지 (프리미엄)</span><span>1,100,000원</span></div>}
                  {blogDesign === 280000 && <div className="flex justify-between"><span>블로그 스킨 디자인</span><span>280,000원</span></div>}
                  {posting === 320000 && <div className="flex justify-between"><span>포스팅 대행 (월 4회)</span><span>320,000원</span></div>}
                  {posting === 560000 && <div className="flex justify-between"><span>포스팅 대행 (월 8회)</span><span>560,000원</span></div>}
                  {addonMap && <div className="flex justify-between"><span>플레이스 정밀 세팅</span><span>100,000원</span></div>}
                  {addonBranding && <div className="flex justify-between"><span>로고/가격표 디자인</span><span>150,000원</span></div>}

                  {subtotal === 0 && (
                    <div className="flex justify-between text-stone-500">
                      <span>선택된 항목이 없습니다.</span>
                      <span>0원</span>
                    </div>
                  )}
                </div>

                {hasDiscount && subtotal > 0 && (
                  <div className="p-3 rounded-xl bg-brand-gold/15 border border-brand-gold/30 text-[11px] text-brand-gold mb-4">
                    <i className="fa-solid fa-tag mr-1"></i> 패키지 동시 선택 10% 자동 할인 적용!
                  </div>
                )}
              </div>

              <div>
                <div className="border-t border-stone-800 pt-4 mb-6">
                  <div className="flex justify-between items-baseline mb-1">
                    <span className="text-xs text-stone-400">예상 총 견적 (VAT 별도)</span>
                    <div className="text-right">
                      {hasDiscount && subtotal > 0 && (
                        <span className="text-xs text-stone-500 line-through mr-2">
                          {subtotal.toLocaleString()}원
                        </span>
                      )}
                      <span className="text-2xl sm:text-3xl font-extrabold text-brand-gold">
                        {finalPrice.toLocaleString()}
                      </span>
                      <span className="text-base text-brand-gold font-bold">원</span>
                    </div>
                  </div>
                  <p className="text-[11px] text-stone-400 text-right mt-1">* 샵 규모와 세부 요구사항에 따라 조율 가능합니다.</p>
                </div>

                <button 
                  onClick={handleRequestQuote}
                  className="w-full py-4 rounded-2xl bg-brand-gold text-stone-900 font-extrabold hover:bg-amber-300 transition-all text-sm flex items-center justify-center gap-2 shadow-lg"
                >
                  <span>이 견적으로 1:1 심층 상담 신청</span>
                  <i className="fa-solid fa-arrow-right text-xs"></i>
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
