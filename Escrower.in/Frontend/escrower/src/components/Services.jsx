import React from "react";
import MovingText from "../components/MovingText";
import Pricing from "./Pricing";

export default function Services() {
  const features = [
    {
      icon: (
        <svg className="w-14 h-14" viewBox="0 0 48 48" fill="none">
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
        <svg className="w-14 h-14" viewBox="0 0 48 48" fill="none">
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
        <svg className="w-14 h-14" viewBox="0 0 48 48" fill="none">
          <path d="M24 8L36 16V32L24 40L12 32V16L24 8Z" stroke="#a3ff00" strokeWidth="2"/>
          <path d="M24 20L30 24V30L24 34L18 30V24L24 20Z" fill="#a3ff00"/>
        </svg>
      ),
      title: "Endless possibilities",
      description: "Marketing execution is the process of carrying out the."
    },
    {
      icon: (
        <svg className="w-14 h-14" viewBox="0 0 48 48" fill="none">
          <circle cx="24" cy="24" r="8" fill="#a3ff00"/>
          <circle cx="12" cy="12" r="4" stroke="#a3ff00" strokeWidth="2"/>
          <circle cx="36" cy="12" r="4" stroke="#a3ff00" strokeWidth="2"/>
        </svg>
      ),
      title: "Unique technology",
      description: "Marketing execution is the process of carrying out the."
    }
  ];

  return (
    <div>
      <section className="bg-[#0f0f0f] pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-20">
             <h1 className="text-5xl lg:text-6xl font-bold text-white" style={{ fontWeight: '600' }}>
                Explore the power of AI tools services
            </h1>
          </div>

          {/* Transparent feature boxes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`p-12 min-h-[300px] flex flex-col justify-start
                ${index !== features.length - 1 ? "lg:border-r border-[#2a2a2a]" : ""}`}
              >
                <div className="mb-10 text-[#a3ff00]">
                  {feature.icon}
                </div>

                <h3 className="text-2xl font-bold text-white mb-6">
                  {feature.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

        </div>

        <MovingText />
      </section>

      <Pricing />
    </div>
  );
}
