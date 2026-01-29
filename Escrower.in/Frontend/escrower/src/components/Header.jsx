import React, { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");
  const [isScrolled, setIsScrolled] = useState(false);

  // IMPORTANT: href must match section ids in Home.jsx
  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Pricing", href: "#pricing" },
    { label: "Team", href: "#team" },
    { label: "Blog", href: "#blog" },
    { label: "Contacts", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (item) => {
    setActiveItem(item.label);
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`
        fixed top-0 w-full z-50 py-4 transition-all duration-300
        ${(isScrolled || isMenuOpen) ? "bg-[#121212] shadow-lg" : "bg-transparent"}
      `}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="text-3xl font-bold">
          <span className="text-white">Zex</span>
          <span className="text-[#a3ff00]">.ai</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex">
          <ul className="flex items-center gap-x-8">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={() => handleNavClick(item)}
                  className={`
                    font-semibold transition-colors duration-300 hover:text-[#a3ff00]
                    ${activeItem === item.label ? "text-[#a3ff00]" : "text-white"}
                  `}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <a
            href="#contact"
            onClick={() => setActiveItem("Contacts")}
            className="inline-block bg-white text-black font-bold py-2.5 px-7 rounded-full hover:bg-gray-200 transition-colors"
          >
            Get Started
          </a>
        </div>

        {/* Mobile button */}
        <div className="lg:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? (
              <XMarkIcon className="h-7 w-7 text-white" />
            ) : (
              <Bars3Icon className="h-7 w-7 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#121212] border-t border-gray-800">
          <nav className="flex flex-col items-center text-center p-8 gap-y-6">
            <ul className="flex flex-col items-center gap-y-6">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={() => handleNavClick(item)}
                    className={`
                      font-semibold text-lg transition-colors duration-300 hover:text-[#a3ff00]
                      ${activeItem === item.label ? "text-[#a3ff00]" : "text-white"}
                    `}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-4">
              <a
                href="#contact"
                onClick={() => {
                  setActiveItem("Contacts");
                  setIsMenuOpen(false);
                }}
                className="inline-block bg-white text-black font-bold py-2.5 px-7 rounded-full hover:bg-gray-200 transition-colors"
              >
                Get Started
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;