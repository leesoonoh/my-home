"use client";

import React, { useState } from "react";

interface ContactModalProps {
  isOpen: boolean;
  title: string;
  onClose: () => void;
}

export default function ContactModal({ isOpen, title, onClose }: ContactModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [shopName, setShopName] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("올인원 패키지");
  const [message, setMessage] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl animate-fade-in border border-brand-200">
        <button 
          onClick={handleResetAndClose} 
          className="absolute top-5 right-5 text-stone-400 hover:text-stone-800 text-lg"
          aria-label="Close modal"
        >
          <i className="fa-solid fa-xmark"></i>
        </button>

        {!submitted ? (
          <>
            <div className="text-center mb-6">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-brand-100 text-brand-700">1:1 맞춤 상담 신청</span>
              <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mt-2">{title || "아미유 무료 상담 신청"}</h3>
              <p className="text-xs text-stone-500 mt-1">접수 후 1시간 이내에 담당자가 친절히 안내드립니다.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">매장명 (헤어살롱 / 뷰티샵) *</label>
                <input 
                  type="text" 
                  required 
                  value={shopName}
                  onChange={(e) => setShopName(e.target.value)}
                  placeholder="예: 살롱드 아미유 강남점" 
                  className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-xs focus:ring-2 focus:ring-brand-500 focus:outline-none" 
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">원장님 성함 *</label>
                  <input 
                    type="text" 
                    required 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="홍길동 원장" 
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-xs focus:ring-2 focus:ring-brand-500 focus:outline-none" 
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">연락처 *</label>
                  <input 
                    type="tel" 
                    required 
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="010-0000-0000" 
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-xs focus:ring-2 focus:ring-brand-500 focus:outline-none" 
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">관심 서비스 선택</label>
                <select 
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-xs focus:ring-2 focus:ring-brand-500 focus:outline-none bg-white"
                >
                  <option value="홈페이지 제작">감성 홈페이지 제작 (Next.js)</option>
                  <option value="블로그 디자인">홈페이지형 블로그 디자인</option>
                  <option value="포스팅 대행">상위노출 블로그 포스팅 대행</option>
                  <option value="올인원 패키지">올인원 살롱 부스터 패키지 (추천)</option>
                  <option value="견적 계산기 상담">계산기 견적 기반 상담</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">현재 고민 또는 요청사항 (선택)</label>
                <textarea 
                  rows={3} 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="예: 신규 고객 유입이 저조해서 블로그와 홈페이지로 예약 전환을 올리고 싶습니다." 
                  className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-xs focus:ring-2 focus:ring-brand-500 focus:outline-none" 
                />
              </div>

              <div className="text-[11px] text-stone-500 flex items-center gap-2">
                <input type="checkbox" id="modalPrivacy" defaultChecked required className="w-3.5 h-3.5 text-brand-700 rounded" />
                <label htmlFor="modalPrivacy">개인정보 수집 및 상담 연락에 동의합니다.</label>
              </div>

              <button 
                type="submit" 
                className="w-full py-3.5 rounded-xl bg-brand-900 text-brand-gold font-bold text-sm hover:bg-brand-800 transition-colors shadow-md"
              >
                상담 신청 완료하기
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-8">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
              <i className="fa-solid fa-check"></i>
            </div>
            <h4 className="text-lg font-bold text-stone-900 mb-1">상담 신청이 완료되었습니다!</h4>
            <p className="text-xs text-stone-600 mb-6">
              [{shopName}] {name} 원장님, 상권 분석 자료와 함께 1시간 내로 연락드리겠습니다.
            </p>
            <button 
              onClick={handleResetAndClose} 
              className="px-6 py-2.5 rounded-xl bg-stone-900 text-white text-xs font-bold"
            >
              확인
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
