"use client";

import React, { useState } from "react";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "Q. 컴퓨터나 마케팅을 전혀 몰라도 홈페이지/블로그 운영이 가능한가요?",
      a: "네, 당연합니다! 아미유는 복잡한 코딩이나 관리를 원장님께 요구하지 않습니다. 고객 예약 링크(네이버예약, 카카오채널 등)와 시술 사진만 전달해 주시면 모든 기술적 세팅과 포스팅 관리는 아미유가 전담해 드립니다."
    },
    {
      q: "Q. 홈페이지 제작 기간은 얼마나 걸리나요?",
      a: "원페이지 랜딩형 기준 자료 전달 후 약 5~7영업일 내 완성되며, 블로그 스킨 디자인은 2~3일 이내 세팅 완료됩니다. 오픈 일정이나 프로모션 일정이 급하신 경우 긴급 제작도 조율 가능합니다."
    },
    {
      q: "Q. 시술 사진이 별로 없는데 포스팅 대행이 가능한가요?",
      a: "핸드폰으로 찍은 원본 사진만 전달해 주셔도 저희 그래픽 디자이너가 조명/피부/헤어결 보정을 거쳐 고퀄리티 매거진 화보 스타일로 가공해 드립니다. 또한 사진 촬영 가이드도 무료로 제공해 드립니다."
    }
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 bg-brand-100/50">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-bold tracking-widest uppercase text-brand-600">FAQ</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 mt-2">
            원장님들이 가장 자주 묻는 질문
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx}
              onClick={() => toggle(idx)}
              className="bg-white rounded-2xl p-5 border border-brand-200/80 cursor-pointer shadow-sm transition-all hover:border-brand-300"
            >
              <div className="flex justify-between items-center font-bold text-stone-900 text-sm">
                <span>{faq.q}</span>
                <i className={`fa-solid fa-chevron-down text-xs text-stone-400 transition-transform ${openIndex === idx ? "rotate-180" : ""}`}></i>
              </div>
              {openIndex === idx && (
                <div className="pt-3 mt-3 border-t border-stone-100 text-xs text-stone-600 leading-relaxed animate-fade-in">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
