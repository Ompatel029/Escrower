import React from 'react';
import MovingText from './MovingText';

const Features = () => {
  const features = [
    {
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
          <path d="M12 20H8V36H12V20Z" fill="#a3ff00"/>
          <path d="M20 16H16V36H20V16Z" fill="#a3ff00"/>
          <path d="M28 12H24V36H28V12Z" fill="#a3ff00"/>
          <path d="M36 8H32V36H36V8Z" fill="#a3ff00"/>
          <rect x="6" y="36" width="36" height="4" rx="2" fill="#a3ff00"/>
        </svg>
      ),
      title: "Excellent support",
      description: "Marketing execution is the process of carrying out the."
    },
    {
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
          <rect x="8" y="8" width="32" height="24" rx="4" stroke="#a3ff00" strokeWidth="3"/>
          <rect x="16" y="36" width="16" height="4" rx="2" fill="#a3ff00"/>
          <rect x="20" y="32" width="8" height="4" fill="#a3ff00"/>
        </svg>
      ),
      title: "Reliable experts",
      description: "Marketing execution is the process of carrying out the."
    },
    {
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
          <path d="M24 8L36 16V32L24 40L12 32V16L24 8Z" stroke="#a3ff00" strokeWidth="2" fill="none"/>
          <path d="M24 20L30 24V30L24 34L18 30V24L24 20Z" fill="#a3ff00"/>
          <path d="M24 8V20" stroke="#a3ff00" strokeWidth="2"/>
          <path d="M36 16L30 20" stroke="#a3ff00" strokeWidth="2"/>
          <path d="M12 16L18 20" stroke="#a3ff00" strokeWidth="2"/>
        </svg>
      ),
      title: "Endless possibilities",
      description: "Marketing execution is the process of carrying out the."
    },
    {
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
          <circle cx="24" cy="24" r="8" fill="#a3ff00"/>
          <circle cx="12" cy="12" r="4" stroke="#a3ff00" strokeWidth="2"/>
          <circle cx="36" cy="12" r="4" stroke="#a3ff00" strokeWidth="2"/>
          <circle cx="12" cy="36" r="4" stroke="#a3ff00" strokeWidth="2"/>
          <circle cx="36" cy="36" r="4" stroke="#a3ff00" strokeWidth="2"/>
          <line x1="15" y1="15" x2="18" y2="18" stroke="#a3ff00" strokeWidth="2"/>
          <line x1="33" y1="15" x2="30" y2="18" stroke="#a3ff00" strokeWidth="2"/>
          <line x1="15" y1="33" x2="18" y2="30" stroke="#a3ff00" strokeWidth="2"/>
          <line x1="33" y1="33" x2="30" y2="30" stroke="#a3ff00" strokeWidth="2"/>
        </svg>
      ),
      title: "Unique technology",
      description: "Marketing execution is the process of carrying out the."
    }
  ];

  return (
    <section className="bg-[#0f0f0f] py-15 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gray-400 text-sm font-semibold tracking-widest uppercase mb-4 block">
            Features
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
            Create your dream with Ai
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-[#161616] rounded-2xl p-8 transition-all duration-300 hover:bg-[#1f1f1f]"
            >
              {/* Top lime border */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#a3ff00] rounded-t-2xl" />
              
              {/* Icon */}
              <div className="mb-6 text-[#a3ff00]">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
      <MovingText />
    </section>
  );
};

export default Features;