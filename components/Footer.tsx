import React from "react";

export default function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-400 py-16 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          
          {/* Logo & Intro */}
          <div className="md:col-span-2">
            <img 
              src="/logo2.png" 
              alt="아미유 헤어 로고" 
              className="h-16 w-auto object-contain brightness-110 mb-4" 
            />
            <p className="text-xs text-stone-400 leading-relaxed max-w-md mb-6 font-serif-kr">
              아미유 헤어(AMEU HAIR)는 프리미엄 1:1 맞춤 헤어 디자인과 프라이빗 힐링 스파 서비스를 제공하는 살롱입니다. 고객 한 분 한 분의 고유한 아름다움을 완성합니다.
            </p>
            <div className="text-[11px] text-stone-400 space-y-1.5">
              <p>
                <strong className="text-stone-300">미아사거리점:</strong> 서울 강북구 미아사거리역 인근 | 
                <a href="tel:02-980-0951" className="hover:text-white ml-1">TEL. 02-980-0951</a> | 
                <a href="https://www.instagram.com/ameu_ms" target="_blank" rel="noopener noreferrer" className="hover:text-rose-400 ml-1">INSTA. @ameu_ms</a>
              </p>
              <p>
                <strong className="text-stone-300">성신여대점:</strong> 서울 성북구 성신여대입구역 인근 | 
                <a href="tel:02-922-0111" className="hover:text-white ml-1">TEL. 02-922-0111</a> | 
                <a href="https://www.instagram.com/ameu_ss/" target="_blank" rel="noopener noreferrer" className="hover:text-rose-400 ml-1">INSTA. @ameu_ss</a>
              </p>
              <p className="text-stone-500 pt-1">상호명: 아미유 헤어살롱 (AMEU HAIR) | MEU.COMPANY | 대표자: 홍길동 | 사업자등록번호: 000-00-00000</p>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-bold text-white tracking-wider uppercase mb-4 font-eng">Salons & Booking</h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a 
                  href="https://map.naver.com/p/entry/place/1809226710?placePath=%2Fstylist" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-[#C5A880] transition-colors flex items-center gap-1.5"
                >
                  <i className="fa-solid fa-arrow-right text-[10px] text-emerald-500"></i>
                  <span>미아사거리점 네이버 예약</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://m.place.naver.com/hairshop/1423704026/stylist?entry=plt" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-[#C5A880] transition-colors flex items-center gap-1.5"
                >
                  <i className="fa-solid fa-arrow-right text-[10px] text-emerald-500"></i>
                  <span>성신여대점 네이버 예약</span>
                </a>
              </li>
              <li><a href="#interior" className="hover:text-white transition-colors">살롱 인테리어 둘러보기</a></li>
              <li><a href="#stylebook" className="hover:text-white transition-colors">시그니처 스타일북</a></li>
              <li><a href="#membership" className="hover:text-white transition-colors">VIP 멤버십 안내</a></li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="text-sm font-bold text-white tracking-wider uppercase mb-4 font-eng">Customer Care</h4>
            <p className="text-xs text-stone-300 mb-1">미아사거리점: <a href="tel:02-980-0951" className="hover:underline font-bold text-white">02-980-0951</a></p>
            <p className="text-xs text-stone-300 mb-3">성신여대점: <a href="tel:02-922-0111" className="hover:underline font-bold text-white">02-922-0111</a></p>
            <p className="text-xs text-stone-400 mb-4">운영시간: 10:00 ~ 20:00 (네이버 예약 및 전화 문의 환영)</p>
            <div className="flex items-center gap-4 text-xl text-[#DFD7CD]">
              <a href="https://www.instagram.com/ameu_ms" target="_blank" rel="noopener noreferrer" className="hover:text-rose-400 transition-colors" title="미아사거리점 인스타그램">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://www.instagram.com/ameu_ss/" target="_blank" rel="noopener noreferrer" className="hover:text-rose-400 transition-colors" title="성신여대점 인스타그램">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="tel:02-980-0951" className="hover:text-white transition-colors" title="전화 문의">
                <i className="fa-solid fa-phone"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between text-[11px] text-stone-500 gap-4">
          <p>&copy; 2026 AMEU HAIR SALON (MEU.COMPANY). All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:underline">이용약관</a>
            <a href="#" className="hover:underline">개인정보처리방침</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
