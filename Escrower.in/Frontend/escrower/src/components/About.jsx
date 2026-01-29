import React, { useState, useEffect, useRef } from 'react';
import MovingText from './MovingText';

const About = () => {
  // State to track if the element is in the viewport
  const [isInView, setIsInView] = useState(false);
  // Ref to attach to the section element we want to observe
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // The callback is executed when the observed element's visibility changes
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsInView(true);
          // We can unobserve after the animation has triggered to save resources
          observer.unobserve(entry.target);
        }
      },
      {
        // Start the animation when the element is 20% visible
        threshold: 0.2, 
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Cleanup function to unobserve the element when the component unmounts
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []); // The empty array ensures this effect runs only once on component mount

  return (
    // Attach the ref to the section
    <section ref={sectionRef} className="bg-[#121212] text-white pt-24 px-6 md:px-12 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Image Grid */}
          <div className="flex gap-4">
            {/* Main Large Image */}
            <div className="w-2/3">
              <img
                src="https://images.openai.com/static-rsc-3/tgoeG3yDtwevx05U7xN4yprrkhYFnUE0Wntp7I76MOc4j3NsDc0CBGMRR3A_GipYvPNIgdUYuYbefJYQnIMnvYLSOKmz7K9tZ6Wyh_tnSpQ?purpose=fullsize"
                alt="AI creating art"
                className={`w-full h-full object-cover rounded-2xl shadow-lg transition-all duration-700 ease-out delay-100
                  ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                `}
              />
            </div>
            {/* Two Small Images */}
            <div className="w-1/3 flex flex-col gap-4">
              <img
                src="https://d1ee3oaj5b5ueh.cloudfront.net/thumbs/635xAUTO_original_article_2021_03_6059cdac82030.jpeg"
                alt="AI art example 1"
                className={`w-full h-1/2 object-cover rounded-2xl shadow-lg transition-all duration-700 ease-out delay-200
                  ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                `}
              />
              <img
                src="https://images.presentationgo.com/2025/07/cinematic-rocky-countryside-landscape.jpg"
                alt="AI art example 2"
                className={`w-full h-1/2 object-cover rounded-2xl shadow-lg transition-all duration-700 ease-out delay-300
                  ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                `}
              />
            </div>
          </div>

          {/* Right Column: Content */}
          <div className={`flex flex-col justify-center transition-opacity duration-1000 ease-in delay-200 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
            <span className="text-sm font-bold tracking-widest text-gray-400 uppercase">
              WELCOME
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight mt-4">
              Easy ways to use <br />
              AI tools, and tools <br />
              to build AI.
            </h2>
            <p className="mt-6 text-gray-300 max-w-lg">
              Dicta sunt explicabo. Nemo enim ipsam voluptatem quia
              voluptas sit aspernatur aut odit aut fugit, sed quia.
            </p>
            <div className="mt-8">
              <div className="p-[2px] rounded-full bg-gradient-to-r from-[#a3ff00] to-[#20e9a1] inline-block">
                <button className="bg-[#121212] text-white px-8 py-3 rounded-full w-full font-semibold transition-all duration-300 hover:bg-transparent">
                  More About Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MovingText />
    </section>
  );
};

export default About;