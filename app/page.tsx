"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SignatureCards from "@/components/SignatureCards";
import SalonLocations from "@/components/SalonLocations";
import InteriorTour from "@/components/InteriorTour";
import StyleBook from "@/components/StyleBook";
import Membership from "@/components/Membership";
import InstagramFeed from "@/components/InstagramFeed";
import Footer from "@/components/Footer";
import ReservationModal from "@/components/ReservationModal";
import EventPopup from "@/components/EventPopup";

export default function Home() {
  const [reservationOpen, setReservationOpen] = useState(false);
  const [eventOpen, setEventOpen] = useState(false);

  useEffect(() => {
    // 자동 팝업 노출 (오늘 하루 보지 않기 확인)
    const hideDate = localStorage.getItem("ameu_hide_event_popup");
    if (hideDate !== new Date().toDateString()) {
      const timer = setTimeout(() => {
        setEventOpen(true);
      }, 600);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <main className="min-h-screen bg-white">
      {/* 0. 첫방문 50% 이벤트 팝업 (미아사거리점 / 성신여대점 포스터 연동) */}
      <EventPopup 
        isOpen={eventOpen} 
        onClose={() => setEventOpen(false)} 
      />

      {/* 1. 상단 유틸리티 바 & 대형 로고 메인 네비게이션 */}
      <Navbar 
        onOpenReservation={() => setReservationOpen(true)} 
        onOpenEvent={() => setEventOpen(true)}
      />

      {/* 2. 손님이 미용실에 문을 열고 입장한 듯한 웰컴 슬라이더 (로고 리드 & 한글 타이틀) */}
      <Hero 
        onOpenReservation={() => setReservationOpen(true)} 
        onOpenEvent={() => setEventOpen(true)}
      />

      {/* 3. 준오헤어 레퍼런스 스타일 2대 시그니처 카드 [실시간 예약하기] & [AMEU CARE] */}
      <SignatureCards onOpenReservation={() => setReservationOpen(true)} />

      {/* 4. 미아사거리점 & 성신여대점 네이버 플레이스 연동 지점 안내 */}
      <SalonLocations />

      {/* 5. 살롱 내부 인테리어 공간 투어 (입장 경험) */}
      <InteriorTour />

      {/* 6. 시그니처 헤어 스타일 컬렉션 */}
      <StyleBook onOpenReservation={() => setReservationOpen(true)} />

      {/* 7. VIP 멤버십 정액권 안내 */}
      <Membership onOpenReservation={() => setReservationOpen(true)} />

      {/* 8. # INSTAGRAM 피드 그리드 (준오헤어 스타일) */}
      <InstagramFeed />

      {/* 9. 푸터 */}
      <Footer />

      {/* 10. 지점 실시간 예약 선택 팝업 모달 */}
      <ReservationModal 
        isOpen={reservationOpen} 
        onClose={() => setReservationOpen(false)} 
      />
    </main>
  );
}
