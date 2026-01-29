import React, { useState } from 'react';

const tags = [
  "Color Grading",
  "Depth of Field",
  "TXAA",
  "Beautiful",
  "Moody Lighting",
  "Backlight",
  "8K Resolution",
  "Hyper Realistic",
  "Cinematic",
  "Volumetric",
  "Ray Tracing",
  "HDR",
];

const Tagscroller = () => {
  const [activeTag, setActiveTag] = useState("Backlight");

  // Duplicate for infinite scroll
  const allTags = [...tags, ...tags, ...tags];

  return (
    <div className="bg-[#0a0a0a] py-8 overflow-hidden">
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute top-0 bottom-0 left-0 w-20 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 bottom-0 right-0 w-20 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>

        {/* Scrolling container */}
        <div className="flex overflow-x-auto hide-scrollbar py-4 px-4 gap-4 animate-scroll-tags">
          {allTags.map((tag, index) => (
            <button
              key={index}
              onClick={() => setActiveTag(tag)}
              className={`flex-shrink-0 px-6 py-3 rounded-full font-semibold text-sm whitespace-nowrap transition-all duration-300 ${
                activeTag === tag
                  ? "bg-white text-black"
                  : "bg-[#1f1f1f] text-white hover:bg-[#2a2a2a]"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Auto-scroll animation */}
      <style>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        
        @keyframes scroll-tags {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }
        
        .animate-scroll-tags {
          animation: scroll-tags 5s linear infinite;
        }
        
        .animate-scroll-tags:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

// Alternative: Manual scroll with drag (no auto-scroll)
const TagScrollerManual = () => {
  const [activeTag, setActiveTag] = useState("Backlight");
  const scrollRef = React.useRef(null);

  const handleMouseDown = (e) => {
    const ele = scrollRef.current;
    if (!ele) return;
    
    const startX = e.pageX - ele.offsetLeft;
    const scrollLeft = ele.scrollLeft;
    
    const handleMouseMove = (e) => {
      const x = e.pageX - ele.offsetLeft;
      const walk = (x - startX) * 2;
      ele.scrollLeft = scrollLeft - walk;
    };
    
    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  return (
    <div className="bg-[#0a0a0a] py-8">
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute top-0 bottom-0 left-0 w-20 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 bottom-0 right-0 w-20 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>

        {/* Draggable scroll container */}
        <div 
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          className="flex overflow-x-auto hide-scrollbar py-4 px-8 gap-4 cursor-grab active:cursor-grabbing"
        >
          {tags.map((tag, index) => (
            <button
              key={index}
              onClick={() => setActiveTag(tag)}
              className={`flex-shrink-0 px-6 py-3 rounded-full font-semibold text-sm whitespace-nowrap transition-all duration-300 select-none ${
                activeTag === tag
                  ? "bg-white text-black"
                  : "bg-[#1f1f1f] text-white hover:bg-[#2a2a2a]"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      <style>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default Tagscroller