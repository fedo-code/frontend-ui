import React from "react";

const HeroSection = () => (
  <div className="w-full max-w-7xl flex flex-col lg:flex-row gap-2 lg:gap-2">
    {/* Left Side: Heading */}
    <div className="flex-1 flex flex-col justify-start items-start mt-4 lg:mt-16 pl-0 pr-2 max-w-full">
      <h1
        className="
          font-black leading-[1.1] tracking-tight text-zinc-900 mb-2
          text-[1.7rem] sm:text-[2.2rem] md:text-[2.3rem] lg:text-[2.3rem]
          xl:text-[2.3rem]
          max-w-full
          [@media(max-width:1286px)]:text-[1.7rem]
          [@media(max-width:1286px)]:pl-[5%]
        "
        style={{ wordBreak: "break-word", lineHeight: "1.15" }}
      >
        QOREM IPSUM DOLOR SIT
        <br />AMET, CONSE
      </h1>
    </div>
    {/* Right Side: Paragraph + Button */}
    <div className="flex-1 flex flex-col items-start justify-start mt-2 lg:mt-16 pl-[5%] pr-0">
      <p className="text-[0.95rem] text-zinc-700 mb-4 max-w-xs leading-snug text-left">
        Qorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
        turpis molestie, dictum est a,
      </p>
      <button className="bg-zinc-900 text-white font-semibold rounded-full px-7 py-3 text-[1rem] shadow hover:bg-zinc-700 transition-all">
        LEARN MORE
      </button>
    </div>
  </div>
);

export default HeroSection;
