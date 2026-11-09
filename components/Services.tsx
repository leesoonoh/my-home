import React from "react";

interface ServicesProps {
  onOpenModal: (title: string) => void;
}

export default function Services({ onOpenModal }: ServicesProps) {
  return (
    <section id="services" class="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest uppercase text-brand-600">Our Services</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 mt-2 mb-4">
            미용실 맞춤 원스톱 성장 솔루션
          </h2>
          <p className="text-stone-600 text-sm sm:text-base">
            브랜딩 기초부터 온라인 예약 유입까지, 원장님께 가장 필요한 실전 서비스만 제공합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="group p-8 rounded-3xl bg-brand-50/70 border border-brand-200/60 hover:bg-white hover:shadow-2xl hover:border-brand-300 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-brand-900 text-brand-gold flex items-center justify-center text-2xl mb-6 shadow-sm group-hover:scale-110 transition-transform">
                <i className="fa-solid fa-laptop-code"></i>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-brand-200 text-brand-800">Next.js & 반응형</span>
                <span className="text-xs text-stone-400">모바일 100% 최적화</span>
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">감성 헤어살롱 홈페이지 제작</h3>
              <p className="text-stone-600 text-sm leading-relaxed mb-6">
                첫인상에서 시술 감성을 전달하는 맞춤 웹사이트. 1초 미만 초고속 로딩, 원클릭 네이버예약 & 카카오헤어샵 연동, 인스타그램 피드 자동 연동을 지원합니다.
              </p>
              <ul className="space-y-2.5 text-xs text-stone-600 border-t border-brand-200/50 pt-5 mb-6">
                <li className="flex items-center gap-2">
                  <i className="fa-solid fa-check text-brand-600"></i>
                  <span>디자이너별 포트폴리오 & 가격표 투명 공개</span>
                </li>
                <li className="flex items-center gap-2">
                  <i className="fa-solid fa-check text-brand-600"></i>
                  <span>네이버 스마트플레이스 / 카카오 지도 최적화</span>
                </li>
                <li className="flex items-center gap-2">
                  <i className="fa-solid fa-check text-brand-600"></i>
                  <span>SSL 보안인증서 및 검색엔진(SEO) 등록 무료</span>
                </li>
              </ul>
            </div>
            <button 
              onClick={() => onOpenModal("홈페이지 제작 문의")}
              className="w-full py-3 rounded-xl border border-brand-300 text-brand-900 text-xs font-bold hover:bg-brand-900 hover:text-white transition-colors"
            >
              홈페이지 제작 상담 신청
            </button>
          </div>

          {/* Service 2 */}
          <div className="group p-8 rounded-3xl bg-brand-50/70 border border-brand-200/60 hover:bg-white hover:shadow-2xl hover:border-brand-300 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-brand-800 text-brand-gold flex items-center justify-center text-2xl mb-6 shadow-sm group-hover:scale-110 transition-transform">
                <i className="fa-solid fa-palette"></i>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-brand-200 text-brand-800">프리미엄 브랜딩</span>
                <span className="text-xs text-stone-400">PC/모바일 와이드 스킨</span>
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">홈페이지형 블로그 디자인</h3>
              <p className="text-stone-600 text-sm leading-relaxed mb-6">
                방문자가 블로그에 들어오자마자 고급 살롱의 분위기를 느끼도록 와이드 스킨과 투명 위젯을 세팅합니다. 클릭 한 번으로 예약창으로 바로 연결됩니다.
              </p>
              <ul className="space-y-2.5 text-xs text-stone-600 border-t border-brand-200/50 pt-5 mb-6">
                <li className="flex items-center gap-2">
                  <i className="fa-solid fa-check text-brand-600"></i>
                  <span>바로가기 맞춤 위젯 (예약, 위치, 가격표, 인스타)</span>
                </li>
                <li className="flex items-center gap-2">
                  <i className="fa-solid fa-check text-brand-600"></i>
                  <span>모바일 메인 커버 이미지 & 프로필 세팅</span>
                </li>
                <li className="flex items-center gap-2">
                  <i className="fa-solid fa-check text-brand-600"></i>
                  <span>카테고리 구조화 및 썸네일 템플릿 제공</span>
                </li>
              </ul>
            </div>
            <button 
              onClick={() => onOpenModal("블로그 디자인 문의")}
              className="w-full py-3 rounded-xl border border-brand-300 text-brand-900 text-xs font-bold hover:bg-brand-900 hover:text-white transition-colors"
            >
              블로그 디자인 상담 신청
            </button>
          </div>

          {/* Service 3 */}
          <div className="group p-8 rounded-3xl bg-brand-50/70 border border-brand-200/60 hover:bg-white hover:shadow-2xl hover:border-brand-300 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-brand-700 text-brand-gold flex items-center justify-center text-2xl mb-6 shadow-sm group-hover:scale-110 transition-transform">
                <i className="fa-solid fa-pen-nib"></i>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800">예약 직결 마케팅</span>
                <span className="text-xs text-stone-400">지역 키워드 타겟팅</span>
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">시술 중심 블로그 포스팅 대행</h3>
              <p className="text-stone-600 text-sm leading-relaxed mb-6">
                영혼 없는 복사 붙여넣기 원고는 사절합니다. '강남역 레이어드컷', '홍대 빌드펌' 등 고객이 실제 검색하는 고단가 키워드로 정성스러운 포스팅을 정기 발행합니다.
              </p>
              <ul className="space-y-2.5 text-xs text-stone-600 border-t border-brand-200/50 pt-5 mb-6">
                <li className="flex items-center gap-2">
                  <i className="fa-solid fa-check text-brand-600"></i>
                  <span>시술 전/후 사진 전문 보정 및 스토리텔링 원고</span>
                </li>
                <li className="flex items-center gap-2">
                  <i className="fa-solid fa-check text-brand-600"></i>
                  <span>네이버 스마트블록 & VIEW 탭 상위노출 최적화</span>
                </li>
                <li className="flex items-center gap-2">
                  <i className="fa-solid fa-check text-brand-600"></i>
                  <span>매월 키워드 검색량 및 유입 통계 리포트 발송</span>
                </li>
              </ul>
            </div>
            <button 
              onClick={() => onOpenModal("블로그 포스팅 대행 문의")}
              className="w-full py-3 rounded-xl border border-brand-300 text-brand-900 text-xs font-bold hover:bg-brand-900 hover:text-white transition-colors"
            >
              포스팅 대행 상담 신청
            </button>
          </div>
        </div>

        {/* All-in-One Package Callout */}
        <div className="mt-12 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-brand-900 via-stone-900 to-brand-800 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="max-w-2xl">
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-brand-gold/30 text-brand-gold border border-brand-gold/40">원장님 최다 선택 패키지</span>
            <h3 className="text-2xl sm:text-3xl font-bold mt-3 mb-2 font-serif-luxury tracking-wide">아미유 올인원 살롱 부스터 패키지</h3>
            <p className="text-stone-300 text-sm">
              [맞춤 반응형 홈페이지 + 홈페이지형 블로그 스킨 + 월 8회 상위노출 포스팅 + 네이버 플레이스 세팅]을 한 번에 결합하여 개별 신청 대비 최대 25% 비용을 절감하세요.
            </p>
          </div>
          <div className="w-full md:w-auto flex-shrink-0">
            <button 
              onClick={() => onOpenModal("올인원 살롱 부스터 패키지 상담")}
              className="w-full md:w-auto px-8 py-4 rounded-full bg-brand-gold text-brand-900 font-bold hover:bg-amber-300 transition-all shadow-md"
            >
              패키지 특별 할인 혜택 상담받기
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
