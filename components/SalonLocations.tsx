import React from "react";

export default function SalonLocations() {
  const branches = [
    {
      id: "mia",
      tag: "STORE 01",
      name: "아미유 헤어 미아사거리점",
      sub: "MIA SAGUORI STORE",
      image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=900&q=80",
      eventText: "🎉 첫방문 고객 전 품목 50% 특별 할인",
      location: "서울 강북구 미아사거리역 인근 (상세 주소 네이버 플레이스 참조)",
      hours: "매일 10:00 ~ 20:00 (디자이너별 정기 휴무 네이버 예약표 참고)",
      phone: "02-980-0951",
      phoneTel: "tel:02-980-0951",
      instagram: "https://www.instagram.com/ameu_ms",
      instagramHandle: "@ameu_ms",
      signature: "퍼스널 헤어 컨설팅, 프리미엄 헤드스파 룸, 볼륨 레이어드펌, 디자인 탈색",
      bookingUrl: "https://map.naver.com/p/entry/place/1809226710?placePath=%2Fstylist%3Ffrom%3Dmap%26fromPanelNum%3D1%26additionalHeight%3D76%26timestamp%3D202611091600%26locale%3Dko%26svcName%3Dmap_pcv5&c=15.00,0,0,0,dh",
      mapUrl: "https://map.naver.com/p/entry/place/1809226710"
    },
    {
      id: "sungshin",
      tag: "STORE 02",
      name: "아미유 헤어 성신여대점",
      sub: "SUNGSHIN UNIV. STORE",
      image: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=900&q=80",
      eventText: "🎉 첫방문 50% (CUT 13,900 / PERM 40,000 / COLOR 40,000)",
      location: "서울 성북구 성신여대입구역 도보 인근 (인스타그램 & 네이버 플레이스 연동)",
      hours: "매일 10:30 ~ 20:30 (디자이너별 예약 스케줄 실시간 확인 가능)",
      phone: "02-922-0111",
      phoneTel: "tel:02-922-0111",
      instagram: "https://www.instagram.com/ameu_ss/",
      instagramHandle: "@ameu_ss",
      signature: "트렌디 빌드펌, 슬릭컷, 솜브레 & 발레아쥬, 복구 클리닉 케어",
      bookingUrl: "https://m.place.naver.com/hairshop/1423704026/stylist?entry=plt&utm_source=ig&utm_medium=social&utm_content=link_in_bio",
      mapUrl: "https://m.place.naver.com/hairshop/1423704026/home"
    }
  ];

  return (
    <section id="salon" className="py-24 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-[0.25em] text-[#4A3B32] uppercase font-eng">Salon Locations</span>
          <h2 className="font-gowun text-3xl sm:text-4xl font-bold text-stone-900 mt-2 mb-3">
            아미유 헤어 살롱 지점 안내
          </h2>
          <p className="text-stone-600 text-sm font-serif-kr">
            미아사거리점과 성신여대점, 원하시는 지점에서 감각적인 맞춤 스타일링을 경험해 보세요.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {branches.map(b => (
            <div key={b.id} id={b.id} className="bg-white rounded-3xl overflow-hidden shadow-lg border border-stone-200 flex flex-col justify-between transition-all hover:shadow-2xl">
              <div>
                <div className="relative h-64 sm:h-72 overflow-hidden bg-stone-200">
                  <img src={b.image} alt={b.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3.5 py-1.5 rounded-full bg-stone-900/80 backdrop-blur-md text-white text-xs font-bold tracking-wider font-eng">
                      {b.tag}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 bg-stone-950/70 backdrop-blur-md p-4 rounded-2xl text-white">
                    <h3 className="text-xl font-bold font-gowun">{b.name}</h3>
                    <p className="text-xs text-[#DFD7CD] mt-0.5 font-eng">{b.sub}</p>
                  </div>
                </div>

                <div className="p-6 sm:p-8 space-y-4">
                  <div className="p-3 rounded-xl bg-lime-50 border border-lime-300 text-lime-900 text-xs font-bold flex items-center justify-between">
                    <span>{b.eventText}</span>
                  </div>

                  {/* 전화번호 & 인스타그램 하이라이트 박스 */}
                  <div className="grid grid-cols-2 gap-2.5 p-3 rounded-xl bg-stone-100 border border-stone-200 text-xs">
                    <a href={b.phoneTel} className="flex items-center gap-2 text-stone-800 hover:text-stone-950 font-medium">
                      <i className="fa-solid fa-phone text-[#4A3B32]"></i>
                      <span>TEL. <strong className="font-bold">{b.phone}</strong></span>
                    </a>
                    <a href={b.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-stone-800 hover:text-rose-600 font-medium">
                      <i className="fa-brands fa-instagram text-rose-500 text-sm"></i>
                      <span>INSTA. <strong className="font-bold">{b.instagramHandle}</strong></span>
                    </a>
                  </div>

                  <div className="flex items-start gap-3 text-xs sm:text-sm text-stone-700">
                    <i className="fa-solid fa-location-dot text-[#4A3B32] text-base mt-0.5 w-4 text-center"></i>
                    <div>
                      <span className="font-bold text-stone-900 block font-gowun">위치 안내</span>
                      <span>{b.location}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-xs sm:text-sm text-stone-700">
                    <i className="fa-regular fa-clock text-[#4A3B32] text-base mt-0.5 w-4 text-center"></i>
                    <div>
                      <span className="font-bold text-stone-900 block font-gowun">영업 시간</span>
                      <span>{b.hours}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-xs sm:text-sm text-stone-700">
                    <i className="fa-solid fa-star text-[#C5A880] text-base mt-0.5 w-4 text-center"></i>
                    <div>
                      <span className="font-bold text-stone-900 block font-gowun">시그니처 메뉴</span>
                      <span>{b.signature}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8 pt-0 flex flex-col sm:flex-row gap-2.5">
                <a 
                  href={b.bookingUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex-1 py-3.5 px-4 rounded-xl bg-emerald-600 text-white font-bold text-xs sm:text-sm text-center hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <i className="fa-solid fa-calendar-check"></i>
                  <span>네이버 실시간 예약</span>
                </a>

                <a 
                  href={b.phoneTel} 
                  className="py-3.5 px-4 rounded-xl bg-stone-900 text-white font-semibold text-xs sm:text-sm text-center hover:bg-stone-800 transition-colors flex items-center justify-center gap-2"
                >
                  <i className="fa-solid fa-phone"></i>
                  <span>전화문의</span>
                </a>

                <a 
                  href={b.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="py-3.5 px-4 rounded-xl bg-gradient-to-r from-amber-500 via-rose-500 to-purple-600 text-white font-semibold text-xs sm:text-sm text-center hover:opacity-95 transition-opacity flex items-center justify-center gap-2 shadow-sm"
                >
                  <i className="fa-brands fa-instagram text-sm"></i>
                  <span>인스타</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
