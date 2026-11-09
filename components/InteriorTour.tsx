import React from "react";

export default function InteriorTour() {
  const zones = [
    {
      tag: "ZONE 01",
      title: "웰컴 라운지 & 1:1 상담 존",
      image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=800&q=80",
      desc: "시술에 들어가기 전, 웰컴 티와 함께 고객님의 평소 손질 습관, 모발 컨디션, 얼굴형을 정밀 진단하는 프라이빗 컨설팅 공간입니다.",
      feature: "웰컴 티 서비스 & 퍼스널 모발 진단",
      icon: "fa-mug-hot"
    },
    {
      tag: "ZONE 02",
      title: "프라이빗 스타일링 홀",
      image: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=800&q=80",
      desc: "옆 사람과의 시선이 차단되는 여유로운 좌석 간격과 부드러운 간접 조명으로, 긴 시술 시간에도 편안하고 아늑하게 머무실 수 있습니다.",
      feature: "인체공학 가죽 체어 & 독립 미러",
      icon: "fa-chair"
    },
    {
      tag: "ZONE 03",
      title: "힐링 헤드스파 & 샴푸 룸",
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80",
      desc: "어두운 조명과 클래식 음악, 프리미엄 스파 베드가 완비되어 있어 두피 마사지와 스파 케어를 받는 동안 깊은 휴식을 선사합니다.",
      feature: "전동 풀 플랫 스파 베드 & 아로마 테라피",
      icon: "fa-spa"
    }
  ];

  return (
    <section id="interior" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-bold tracking-[0.25em] text-[#4A3B32] uppercase">Salon Interior Tour</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 mt-2 mb-4 leading-tight">
            손님이 문을 열고 입장했을 때,<br />
            아미유가 선사하는 3가지 특별한 공간
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            단순히 머리를 자르고 가꾸는 공간을 넘어, 온전히 나에게 집중할 수 있도록 인테리어와 조명, 좌석 간격 하나까지 섬세하게 설계했습니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {zones.map(z => (
            <div key={z.tag} className="group rounded-3xl overflow-hidden bg-stone-50 border border-stone-200 shadow-sm hover:shadow-xl transition-all">
              <div className="relative h-64 overflow-hidden bg-stone-200">
                <img src={z.image} alt={z.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 text-white text-[11px]">{z.tag}</span>
              </div>
              <div className="p-6">
                <h4 className="text-lg font-bold text-stone-900 mb-2">{z.title}</h4>
                <p className="text-xs text-stone-600 leading-relaxed mb-4">{z.desc}</p>
                <div className="text-[11px] font-semibold text-[#4A3B32] flex items-center gap-1.5">
                  <i className={`fa-solid ${z.icon}`}></i>
                  <span>{z.feature}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
