"use client";

import React from "react";

interface StyleBookProps {
  onOpenReservation: () => void;
}

export default function StyleBook({ onOpenReservation }: StyleBookProps) {
  const styles = [
    {
      category: "PERM",
      title: "페미닌 빌드펌",
      sub: "손질이 쉬운 볼륨 C+S컬",
      image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=600&q=80"
    },
    {
      category: "CUT",
      title: "시그니처 슬릭 컷",
      sub: "가볍고 찰랑이는 실루엣",
      image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80"
    },
    {
      category: "COLOR",
      title: "애쉬 베이지 발레아쥬",
      sub: "자연스러운 입체감의 그라데이션",
      image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=600&q=80"
    },
    {
      category: "MEN'S",
      title: "맨즈 시스루 드롭컷",
      sub: "트렌디하고 샤프한 헤어 라인",
      image: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <section id="stylebook" className="py-24 bg-stone-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-bold tracking-[0.25em] text-[#C5A880] uppercase font-eng">AMEU Collection</span>
            <h2 className="font-gowun text-3xl sm:text-4xl font-bold mt-2 tracking-wide">
              시그니처 스타일북
            </h2>
            <p className="text-stone-400 text-sm mt-2 font-serif-kr">
              아미유 수석 디자이너들의 감각이 담긴 시즌 트렌드 헤어 컬렉션입니다.
            </p>
          </div>

          <button 
            onClick={onOpenReservation} 
            className="self-start md:self-auto px-6 py-2.5 rounded-full border border-[#C5A880] text-[#C5A880] text-xs tracking-wider hover:bg-[#C5A880] hover:text-stone-950 transition-all font-eng"
          >
            스타일 상담 & 예약하기 &rarr;
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {styles.map((s, idx) => (
            <div key={idx} className="group relative rounded-2xl overflow-hidden aspect-[3/4] bg-stone-800">
              <img src={s.image} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-transparent to-transparent flex flex-col justify-end p-5">
                <span className="text-[11px] text-[#C5A880] tracking-wider uppercase font-eng">{s.category}</span>
                <h4 className="font-gowun text-base font-bold">{s.title}</h4>
                <p className="text-[11px] text-stone-300 mt-0.5">{s.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

