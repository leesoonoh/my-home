import React from "react";

export default function Process() {
  const steps = [
    {
      num: "01",
      icon: "fa-comments",
      title: "1:1 심층 상담 & 상권 분석",
      desc: "살롱의 주력 시술(펌, 염색, 커트 등)과 타겟 고객 연령대, 주변 경쟁 살롱 키워드를 면밀히 분석합니다.",
      duration: "소요시간: 당일 진행"
    },
    {
      num: "02",
      icon: "fa-pen-ruler",
      title: "맞춤 기획 및 디자인 시안",
      desc: "원장님의 살롱 인테리어 감성에 맞춰 브랜드 컬러와 레이아웃 시안을 제작하고 1차 피드백을 진행합니다.",
      duration: "소요시간: 3 ~ 5영업일"
    },
    {
      num: "03",
      icon: "fa-code",
      title: "개발 & 예약 시스템 연동",
      desc: "초고속 로딩 코딩과 네이버예약, 카카오톡 채널, 지도 등록 및 모바일 최적화 테스트를 완벽히 수행합니다.",
      duration: "소요시간: 4 ~ 7영업일"
    },
    {
      num: "04",
      icon: "fa-chart-line",
      title: "런칭 & 정기 마케팅 리포트",
      desc: "검색포털 정식 등록 후 상위노출 포스팅을 개시하며, 매월 유입수와 예약 전환 데이터를 보고서로 드립니다.",
      duration: "사후 유지관리 지속 지원"
    }
  ];

  return (
    <section id="process" className="py-24 bg-brand-50 border-t border-brand-200/60">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest uppercase text-brand-600">Work Process</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 mt-2 mb-3">
            아미유의 투명하고 체계적인 4단계 프로세스
          </h2>
          <p className="text-stone-600 text-sm">
            복잡한 절차 없이, 원장님은 시술 사진만 전달해 주시면 모든 준비는 아미유가 완료합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          {steps.map(step => (
            <div key={step.num} className="bg-white p-6 rounded-3xl border border-brand-200/80 shadow-sm relative z-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-serif-luxury text-3xl font-extrabold text-brand-gold">{step.num}</span>
                  <div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center text-brand-800">
                    <i className={`fa-solid ${step.icon} text-sm`}></i>
                  </div>
                </div>
                <h3 className="font-bold text-stone-900 text-base mb-2">{step.title}</h3>
                <p className="text-xs text-stone-600 leading-relaxed">{step.desc}</p>
              </div>
              <div className="mt-4 pt-3 border-t border-stone-100 text-[11px] text-brand-700 font-medium">
                {step.duration}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
