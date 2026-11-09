import React from "react";

export default function InstagramFeed() {
  const photos = [
    {
      src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=400&q=80",
      url: "https://www.instagram.com/ameu_ms",
      branch: "미아사거리점"
    },
    {
      src: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=400&q=80",
      url: "https://www.instagram.com/ameu_ss/",
      branch: "성신여대점"
    },
    {
      src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=400&q=80",
      url: "https://www.instagram.com/ameu_ms",
      branch: "미아사거리점"
    },
    {
      src: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=400&q=80",
      url: "https://www.instagram.com/ameu_ss/",
      branch: "성신여대점"
    },
    {
      src: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=400&q=80",
      url: "https://www.instagram.com/ameu_ms",
      branch: "미아사거리점"
    },
    {
      src: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=400&q=80",
      url: "https://www.instagram.com/ameu_ss/",
      branch: "성신여대점"
    },
  ];

  return (
    <section className="py-20 bg-stone-50 border-t border-stone-200">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="mb-10">
          <h3 className="font-bold text-2xl tracking-[0.2em] text-stone-900 font-eng">
            # INSTAGRAM
          </h3>
          <p className="text-xs text-stone-500 mt-1 mb-4">각 지점의 최신 스타일 시술 영상과 고객 후기를 만나보세요.</p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-8 text-xs sm:text-sm text-stone-700 font-eng">
            <a 
              href="https://www.instagram.com/ameu_ms" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-4 py-2 rounded-full bg-white border border-stone-300 hover:border-rose-400 hover:text-rose-600 flex items-center gap-2 transition-all shadow-sm group"
            >
              <i className="fa-brands fa-instagram text-rose-500 text-base group-hover:scale-110 transition-transform"></i>
              <span className="font-bold">미아사거리점 @ameu_ms</span>
              <span className="text-[11px] text-stone-400">TEL. 02-980-0951</span>
            </a>
            
            <a 
              href="https://www.instagram.com/ameu_ss/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-4 py-2 rounded-full bg-white border border-stone-300 hover:border-rose-400 hover:text-rose-600 flex items-center gap-2 transition-all shadow-sm group"
            >
              <i className="fa-brands fa-instagram text-rose-500 text-base group-hover:scale-110 transition-transform"></i>
              <span className="font-bold">성신여대점 @ameu_ss</span>
              <span className="text-[11px] text-stone-400">TEL. 02-922-0111</span>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
          {photos.map((item, idx) => (
            <a 
              key={idx} 
              href={item.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="aspect-square rounded-xl overflow-hidden bg-stone-200 group relative block"
            >
              <img src={item.src} alt={`아미유 ${item.branch} 인스타 피드`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white p-2">
                <i className="fa-brands fa-instagram text-2xl mb-1 text-rose-400"></i>
                <span className="text-[10px] font-bold tracking-wider">{item.branch}</span>
                <span className="text-[9px] text-stone-300">피드 보러가기</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
