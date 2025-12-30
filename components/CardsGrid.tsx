import React from "react";

const cardData = [{}, {}, {}, {}];

function truncateTextLines(text: string, maxChars: number) {
  if (text.length > maxChars) {
    return text.slice(0, maxChars) + " ........";
  }
  return text;
}

const fullText =
  "Qorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, Qorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,";

const Card = ({ className = "" }) => (
  <div
    className={`
      flex flex-col items-start w-[90%] mx-auto bg-transparent ${className}
      [@media(max-width:1286px)]:pl-[5%]
    `}
  >
    <div className="relative w-full">
      <div
        className="
          bg-zinc-200 rounded-xl
          h-95 sm:h-105 md:h-117.5 lg:h-130
          w-full shadow-md shadow-zinc-200
        "
      />
      <div
        className={`
          absolute left-0 right-0 bottom-0
          bg-white 
          rounded-xl
          border-x border-b border-zinc-100 
          shadow-md shadow-zinc-200 
          flex flex-col justify-start
          px-2.5 pb-2.5 pt-3
          min-h-30
          z-10
          ml-1.25 mr-1.25 mb-1.25
        `}
        style={{
          left: 5,
          right: 5,
          height: '143px',
          maxHeight: '143px',
          overflow: 'hidden',
        }}
      >
        <div className="mb-1 text-zinc-700 font-medium text-[1rem]">
          LOREM IPSUM
        </div>
        <div className="text-zinc-500 text-[0.97rem] leading-snug">
          {/* >=1287px: full text */}
          <span className="block [@media(max-width:1286px)]:hidden">
            {fullText}
          </span>
          {/* 1286px to 351px: two lines then ........ */}
          <span className="hidden [@media(max-width:1286px)]:block [@media(max-width:350px)]:hidden">
            {truncateTextLines(fullText, 110)}
          </span>
          {/* 350px and below: two lines then ........ */}
          <span className="hidden [@media(max-width:350px)]:block">
            {truncateTextLines(fullText, 55)}
          </span>
        </div>
      </div>
    </div>
  </div>
);

const CardsGrid = () => (
  <div className="w-full max-w-7xl mt-6 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-4 px-2">
    {cardData.map((_, idx) => (
      <Card
        key={idx}
        className={idx % 2 === 1 ? "md:mt-16" : ""}
      />
    ))}
  </div>
);

export default CardsGrid;
