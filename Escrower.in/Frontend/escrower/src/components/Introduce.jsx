import React from 'react';

const Introduce = () => {
  const stats = [
    { number: "30 Days", label: "Average Saved / Week" },
    { number: "20 m", label: "Worldwide Clients" },
    { number: "$ 40000", label: "Trained AI Model" },
    { number: "$ 3000 +", label: "Powerful AI Business Tools" },
  ];

  return (
    <section className="relative overflow-hidden">
      {/* Green Gradient Background Section */}
      <div className="relative min-h-screen">
        {/* Exact gradient like reference image */}
        <div className="absolute inset-0">
          {/* Base dark green from left */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a2f15] via-[#4a7c23] to-[#a3ff00]" />
          
          {/* Top-left darker overlay */}
          <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-[#0f1f0c] to-transparent" />
          
          {/* Bottom-left darker overlay */}
          <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-[#0f1f0c] to-transparent" />
          
          {/* Bright lime glow top-right */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#c8ff00] via-[#9acd32] to-transparent opacity-90" />
          
          {/* Additional glow center-right */}
          {/* <div className="absolute top-1/3 right-1/4 w-1/3 h-2/3 bg-[#d4ff00] opacity-40 blur-[80px] rounded-full" /> */}
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-20 pb-32">
          
          {/* Text Section with fade in animation */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start mb-16 animate-fade-in-up">
            
            {/* Left - Heading */}
            <div>
              <span className="text-white/70 text-xs font-bold tracking-[0.2em] uppercase mb-6 block">
                INTRODUCTIONS
              </span>
              
              <h2 className="text-5xl sm:text-6xl lg:text-5xl font-bold text-white leading-[1.1]">
                Crafted with quality <br />
                and creativity.
              </h2>
            </div>

            {/* Right - Description */}
            <div className="lg:pt-16">
              <p className="text-white/85 text-lg leading-relaxed max-w-md">
                Dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia.
              </p>
            </div>
          </div>

          {/* Large Rounded Image with slide down animation */}
          <div className="relative mx-auto max-w-5xl">
            <div className="rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 animate-slide-down">
              <img
                src="https://ul.postcrest.com/90uqa61eksfuzyj8uppr50be8tsj.png?format=webp&width=832"
                alt="AI Generated Art"
                className="w-full h-[350px] sm:h-[450px] lg:h-[550px] object-cover"
              />
            </div>
          </div>

        </div>

        {/* Bottom fade to black */}
        {/* <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0eb242] to-transparent" /> */}
      </div>

      {/* Stats Section - Black Background */}
      <div className="bg-[#0f0f0f] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center lg:text-left animate-slide-left"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <h3 className="text-4xl lg:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </h3>
                <div className="w-16 h-1 bg-white mb-3 mx-auto lg:mx-0"></div>
                <p className="text-gray-400 text-sm lg:text-base">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
          
          {/* Horizontal Line at bottom of stats section */}
          <div className="mt-16 pt-8 border-t border-gray-700"></div>
        </div>
      </div>

      {/* Animation Styles */}
      <style>{`
        /* Fade in up animation for text */
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Slide down animation for image */
        @keyframes slideDown {
          0% {
            opacity: 0;
            transform: translateY(-80px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Slide left animation for stats */
        @keyframes slideLeft {
          0% {
            opacity: 0;
            transform: translateX(50px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-slide-down {
          animation: slideDown 1s ease-out 0.3s forwards;
          opacity: 0;
        }

        .animate-slide-left {
          animation: slideLeft 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default Introduce;