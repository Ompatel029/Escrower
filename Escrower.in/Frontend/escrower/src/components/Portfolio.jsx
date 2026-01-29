import React, { useRef, useState, useEffect } from 'react';

const Portfolio = () => {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const images = [
    {
      src: "https://images.unsplash.com/photo-1560275619-4662e36fa65c?w=600&h=800&fit=crop",
      alt: "AI Shark with glasses"
    },
    {
      src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&h=800&fit=crop",
      alt: "AI Woman with crystal ball"
    },
    {
      src: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&h=800&fit=crop",
      alt: "AI Floating castle"
    },
    {
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop",
      alt: "AI Portrait"
    },
    {
      src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&h=800&fit=crop",
      alt: "AI Art 5"
    },
    {
      src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&h=800&fit=crop",
      alt: "AI Art 6"
    }
  ];

  // Mouse drag handlers
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // Scroll speed multiplier
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  // Touch support for mobile
  const handleTouchStart = (e) => {
    setStartX(e.touches[0].pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    const x = e.touches[0].pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="bg-[#0a0a0a] py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-12">
          
          {/* Left - Title */}
          <div>
            <span className="text-gray-400 text-sm font-semibold tracking-widest uppercase mb-2 block">
              Our Portfolio
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              AI images
            </h2>
          </div>

          {/* Center - Description */}
          <p className="text-gray-300 text-base lg:text-lg max-w-md lg:max-w-lg">
            Dicta sunt explicabo. Nemo enim ipsam voluptatem quia
            voluptas sit aspernatur aut odit aut fugit, sed quia.
          </p>

          {/* Right - Button */}
          <button className="px-8 py-3 rounded-full border-2 border-[#a3ff00] text-[#a3ff00] font-semibold hover:bg-[#a3ff00] hover:text-black transition-all duration-300">
            View All
          </button>
        </div>

        {/* Draggable Image Gallery */}
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto cursor-grab active:cursor-grabbing select-none pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-72 sm:w-80 lg:w-96 aspect-[3/4] rounded-3xl overflow-hidden group"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                draggable="false"
              />
            </div>
          ))}
        </div>

      </div>

      {/* Hide scrollbar */}
      <style>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default Portfolio;