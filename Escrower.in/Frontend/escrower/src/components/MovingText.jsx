import React from 'react';

const MovingText = () => {
  // Text to display
  const text = "BI IMAGE GENERATE";

  return (
    <div className=" mt-10 pt-8 pb-2 overflow-hidden ">
      <div className="relative">
        {/* Scrolling container */}
        <div className="flex animate-marquee-outline whitespace-nowrap">
          {/* Repeat multiple times for seamless loop */}
          {[...Array(10)].map((_, i) => (
            <span 
              key={i} 
              className="text-5xl sm:text-5xl md:text-5xl lg:text-8xl font-bold mx-4 flex items-center gap-4"
              style={{
                WebkitTextStroke: '1px #4a4a4a',
                WebkitTextFillColor: 'transparent',
                color: 'transparent',
              }}
            >
              {text}
              <span className="" style={{ }}>✱</span>
            </span>
          ))}
        </div>
      </div>

      {/* Animation Styles */}
      <style>{`
        @keyframes marquee-outline {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-marquee-outline {
          animation: marquee-outline 20s linear infinite;
          will-change: transform;
        }

        .animate-marquee-outline:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default MovingText;