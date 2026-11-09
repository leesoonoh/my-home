import React from "react";

interface CtaBannerProps {
  onOpenModal: (title: string) => void;
}

export default function CtaBanner({ onOpenModal }: CtaBannerProps) {
  return (
    <section className="py-20 bg-stone-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-brand-900/40 via-transparent to-brand-gold/20 pointer-events-none"></div>
      <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center relative z-10">
        <span className="text-xs font-bold text-brand-gold tracking-widest uppercase">Start Growing Today</span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mt-3 mb-6 font-serif-luxury tracking-tight leading-tight">
          지금 바로 아미유와 함께<br />
          예약이 끊이지 않는 살롱을 만들어보세요.
        </h2>
        <p className="text-stone-300 text-sm sm:text-base max-w-xl mx-auto mb-10 leading-relaxed">
          망설이는 시간에도 경쟁 살롱은 지역 키워드를 선점하고 있습니다.<br />
          현재 무료 상권 및 키워드 분석 진단을 제공해 드립니다.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            onClick={() => onOpenModal("최종 CTA 무료 진단")}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-brand-gold text-stone-950 font-bold hover:bg-amber-300 transition-all shadow-lg text-sm flex items-center justify-center gap-2"
          >
            <i className="fa-solid fa-wand-magic-sparkles"></i>
            <span>우리 살롱 무료 상권 분석 & 견적 받기</span>
          </button>
          <a 
            href="https://pf.kakao.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-amber-400 text-stone-900 font-bold hover:bg-yellow-300 transition-all text-sm flex items-center justify-center gap-2"
          >
            <i className="fa-solid fa-comment"></i>
            <span>카카오톡 1초 실시간 상담</span>
          </a>
        </div>
      </div>
    </section>
  );
}
