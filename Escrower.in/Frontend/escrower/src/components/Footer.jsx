import React from 'react';

const Footer = () => {
  const menuItems = ["HOME", "ABOUT", "PORTFOLIO"];
  const resourcesItems = ["ARTICLES", "VIDEOS", "BLOG"];
  const contactItems = ["+784549 4981 00", "+8845 0100 211"];
  const socialItems = ["TWITTER", "INSTAGRAM", "FACEBOOK", "BEHANCE"];

  return (
    <footer className="bg-[#1a1a1a] w-full mx-auto relative px-8 py-16">
      <div className="max-w-7xl  mx-auto">
        
        {/* Top Section: Logo and Email */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-12">
          
          {/* Logo */}
          <div className="mb-8 lg:mb-0">
            <a href="#" className="flex items-center gap-2">
              
              <span className="text-4xl font-bold text-white">
                Zex<span className="text-[#a3ff00]">.ai</span>
              </span>
            </a>
          </div>

          {/* Contact Info */}
          <div className="lg:text-right">
            <div className="flex items-center gap-2 mb-2 lg:justify-end">
              <span className="text-[#a3ff00] text-sm font-medium">
                Want to talk us? Say hi
              </span>
              <span className="text-lg">👋</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-white">
              hello@zex.ai
            </h1>
          </div>
        </div>

        {/* Divider Line */}
        <div className="border-t border-gray-700 mb-12"></div>

        {/* Middle Section: Grid Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          
          {/* Column 1: Menu */}
          <div>
            <h3 className="text-gray-400 text-sm font-medium mb-6">Menu</h3>
            <ul className="space-y-4">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-white font-semibold hover:text-[#a3ff00] transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Resources */}
          <div>
            <h3 className="text-gray-400 text-sm font-medium mb-6">Resources</h3>
            <ul className="space-y-4">
              {resourcesItems.map((item, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-white font-semibold hover:text-[#a3ff00] transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="text-gray-400 text-sm font-medium mb-6">Contact</h3>
            <ul className="space-y-4">
              {contactItems.map((item, index) => (
                <li key={index}>
                  <a 
                    href={`tel:${item.replace(/\s/g, '')}`}
                    className="text-white font-semibold hover:text-[#a3ff00] transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Social */}
          <div>
            <h3 className="text-gray-400 text-sm font-medium mb-6">Social</h3>
            <ul className="space-y-4">
              {socialItems.map((item, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-white font-semibold hover:text-[#a3ff00] transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section: Copyright & Legal */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-700">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            ©2023 Zex.ai All Right Reserved.
          </div>
          <div className="flex gap-6">
            <a 
              href="#" 
              className="text-white text-sm font-semibold hover:text-[#a3ff00] transition-colors duration-300"
            >
              PRIVACY
            </a>
            <a 
              href="#" 
              className="text-white text-sm font-semibold hover:text-[#a3ff00] transition-colors duration-300"
            >
              TERMS
            </a>
          </div>
        </div>
      </div>

      {/* Floating Chat Button (Bottom Right) */}
      <button className="fixed bottom-8 right-8 w-14 h-14 bg-[#a3ff00] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
        <span className="text-2xl">🖐️</span>
      </button>
    </footer>
  );
};

export default Footer;