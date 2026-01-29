import React from 'react';
import MovingText from './MovingText';

const Blog = () => {
  const articles = [
    {
      title: "Why is the next level art called intelligent?",
      description: "Rapidiously re-engineer 24/365 bandwidth with highly efficient information."
    },
    {
      title: "Art's Next Level Intelligence Unveiled",
      description: "Rapidiously re-engineer 24/365 bandwidth with highly efficient information."
    }
  ];

  return (
    <section className="bg-[#0a0a0a] py-24 px-6">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-12">
          
          {/* Left - Title */}
          <div>
            <span className="text-gray-400 text-xs font-semibold tracking-widest uppercase mb-2 block">
              From Our Blog
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white">
              News & articles
            </h2>
          </div>

          {/* Right - Button */}
          <button className="px-6 py-2.5 rounded-full border border-[#a3ff00] text-[#a3ff00] text-sm font-medium hover:bg-[#a3ff00] hover:text-black transition-all duration-300">
            View All
          </button>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {articles.map((article, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] rounded-2xl p-8 sm:p-10 group hover:bg-[#202020] transition-colors duration-300"
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 leading-tight">
                {article.title}
              </h3>
              
              <p className="text-gray-400 mb-6 leading-relaxed">
                {article.description}
              </p>
              
              <a 
                href="#" 
                className="inline-flex items-center gap-2 text-[#a3ff00] font-medium hover:gap-3 transition-all duration-300"
              >
                Read more
                <span className="text-lg">→</span>
              </a>
            </div>
          ))}
        </div>

      </div>
      <MovingText />
    </section>
  );
};

export default Blog;