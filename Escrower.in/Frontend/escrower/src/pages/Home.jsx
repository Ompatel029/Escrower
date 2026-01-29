import React from 'react';
import Tagscroller from '../components/Tagscroller';
import About from '../components/About';
import Introduce from '../components/Introduce';
import Features from '../components/Features';
import Portfolio from '../components/Portfolio';
import FAQ from '../components/FAQ';
import Blog from '../components/Blog';
import Newsletter from '../components/Newlatter';
import Imagescroller from '../components/Imagescroller';

const images = [
  "https://images.openai.com/thumbnails/url/xRax0Hicu5mZUVJSUGylr5-al1xUWVCSmqJbkpRnoJdeXJJYkpmsl5yfq5-Zm5ieWmxfaAuUsXL0S7F0Tw5yyXUzCXP1T8vISSvOK_dxCqsILwnLdc439k31K831yfH1zgpwqbTIMqqoMq7Mq0hWKwYAbp0nGA",
  "https://b2.upsampler.com/blog_portrait/realism_white_girl_before.jpeg",
  "https://lensa.app/_astro/beaty2.Bm_eyorg_grJQN.webp",
  "https://media.easy-peasy.ai/1e1b89aa-6446-4a82-9e0f-8607089a84ea/e9c19237-ca67-41c1-a33b-5912004bc789_medium.webp",
  "https://ul.postcrest.com/oepug8sir4z5m1z09c81j9zbwck0.png?format=webp&width=832",
  "https://b2.upsampler.com/blog_portrait/realism_white_girl.jpg",
  "https://images.openai.com/static-rsc-1/S-Yx94vKkAtMKsI16ycvCarGSgqx6dwrFuPX6I8wFYVM6Cp0pjMTY2LfixV3urLkXvSZXMphB6TQg7a7ByIEfLT5cP6fkWwJbedPTRtVv7w-lIIUUUfO1p6fxs7-kJKxmXk_zRd4K1pUhVFAT7OG5A",
];

const Home = () => {
  // Duplicate images for seamless infinite scroll
  const allImages = [...images, ...images, ...images, ...images];

  return (
    <main className="bg-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center min-h-screen pt-20 pb-32 px-4 overflow-hidden">
        
        {/* Pixelated Grid Pattern Background */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(rgba(163, 255, 0, 0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(163, 255, 0, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
            maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)'
          }}
        />

        {/* Large Green Gradient Blob - Top Left */}
        <div 
          className="absolute top-[-10%] left-[-10%] w-[70%] h-[80%] rounded-full opacity-60 blur-[120px]"
          style={{
            background: 'radial-gradient(circle, #a3ff00 0%, #4ade80 50%, transparent 70%)'
          }}
        />

        {/* Cyan/Green Gradient Blob - Top Right */}
        <div 
          className="absolute top-[5%] right-[-15%] w-[60%] h-[70%] rounded-full opacity-50 blur-[100px]"
          style={{
            background: 'radial-gradient(circle, #22d3ee 0%, #a3ff00 40%, transparent 70%)'
          }}
        />

        {/* Dark overlay for bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black to-transparent" />

        {/* Content */}
        <div className="relative z-10">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight drop-shadow-2xl">
            Generate image <br /> 
            with <span className="text-white">Zex.ai</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-200 font-medium">
            Create Anything - AI With No Restrictions.
          </p>

          <button 
            className="mt-10 font-bold text-black py-4 px-10 rounded-full text-lg 
                       bg-gradient-to-r from-[#22d3ee] via-[#a3ff00] to-[#a3ff00]
                       hover:scale-105 hover:shadow-lg hover:shadow-lime-500/40
                       transition-all duration-300"
          >
            Get Started
          </button>
        </div>
      </section>

      {/* Image Scroller Section - Overlapping Hero */}
      <section className="relative w-full -mt-20 pb-20">
        {/* Fade edges */}
        <div className="absolute top-0 bottom-0 left-0 w-40 bg-gradient-to-r from-black to-transparent z-20 pointer-events-none"></div>
        <div className="absolute top-0 bottom-0 right-0 w-40 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none"></div>

        {/* Scrolling container */}
        <div className="relative w-full overflow-hidden">
          <div 
            className="flex gap-5 animate-scroll"
            style={{
              width: 'max-content',
              animation: 'scroll 25s linear infinite'
            }}
          >
            {allImages.map((src, index) => (
              <div 
                key={index} 
                className="flex-shrink-0  transition-transform duration-300"
              >
                <img
                  src={src}
                  alt={`Generated art ${(index % images.length) + 1}`}
                  className="h-64 w-48 object-cover rounded-3xl border-2 border-blue-50 hover:border-[#37d3c3] transition-colors duration-300 shadow-2xl shadow-black/50"
                />
              </div>
            ))}
          </div>
        </div>
        <Tagscroller />
        <About/>
        <Introduce />
        <Features />
        <Portfolio />
        <FAQ />
        <Blog />
        <Newsletter />
        <Imagescroller />
      </section>

      {/* Inline styles for animation */}
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-25%);
          }
        }
        
        .animate-scroll {
          will-change: transform;
        }

        .animate-scroll:hover {
          animation-play-state: paused !important;
        }
      `}</style>
    </main>
  );
};

export default Home;