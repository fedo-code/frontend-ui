import React from "react";
import HeroSection from "../components/HeroSection";
import CardsGrid from "../components/CardsGrid";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f5f5f5] flex flex-col items-center py-8 px-2">
      <HeroSection />
      <CardsGrid />
    </div>
  );
}
