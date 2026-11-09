import React from "react";

export default function Reviews() {
  const reviews = [
    {
      initial: "김",
      color: "bg-brand-900",
      name: "김지현 대표원장",
      shop: "강남 모던헤어살롱 (홈페이지 + 포스팅 8회)",
      content: "“디자인만 예쁜 줄 알았는데, 네이버 예약창으로 넘어가는 동선이 정말 기가 막힙니다. 오픈 첫 달에 예약이 꽉 차서 디자이너 1명 더 채용했어요. 아미유 팀 진짜 뷰티 업계를 잘 아시네요.”"
    },
    {
      initial: "박",
      color: "bg-brand-700",
      name: "박서윤 원장",
      shop: "홍대 살롱드에이 (블로그 스킨 + 포스팅 패키지)",
      content: "“블로그 관리가 너무 막막해서 매번 방치하다가 아미유에 맡겼는데, 사진 보정도 샵 감성 그대로 살려주시고 키워드도 꼼꼼히 잡아주셔서 '홍대 레이어드컷' 1위에 떴습니다. 신규 문의가 매일 와요!”"
    },
    {
      initial: "이",
      color: "bg-brand-800",
      name: "이준혁 원장",
      shop: "분당 헤어스튜디오 M (올인원 부스터 패키지)",
      content: "“가격이 정찰제로 투명하게 나와 있어서 믿음이 갔습니다. 다른 에이전시들은 나중에 이것저것 추가비용 요구하는데 아미유는 약속된 기한 내에 군더더기 없이 완성해 주셨어요. 재계약 의사 100%입니다.”"
    }
  ];

  return (
    <section id="reviews" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest uppercase text-brand-600">Client Reviews</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 mt-2 mb-3">
            아미유와 함께한 원장님들의 생생한 목소리
          </h2>
          <p className="text-stone-600 text-sm">
            미용실 마케팅은 다른 분야와 다릅니다. 실제 성과를 경험하신 분들의 후기입니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div key={idx} className="p-8 rounded-3xl bg-brand-50/60 border border-brand-200/80 flex flex-col justify-between shadow-sm">
              <div>
                <div className="flex items-center text-amber-500 text-xs gap-1 mb-4">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <p className="text-stone-700 text-xs sm:text-sm leading-relaxed mb-6 font-medium">
                  {rev.content}
                </p>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-brand-200/60">
                <div className={`w-10 h-10 rounded-full ${rev.color} text-white flex items-center justify-center font-bold text-sm`}>
                  {rev.initial}
                </div>
                <div>
                  <div className="text-xs font-bold text-stone-900">{rev.name}</div>
                  <div className="text-[11px] text-stone-500">{rev.shop}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
