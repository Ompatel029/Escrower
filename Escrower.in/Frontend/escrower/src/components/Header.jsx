import React, { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Pricing", href: "/pricing" },
    { label: "Team", href: "/team" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
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
        <Link to="/" className="text-3xl font-bold">
          <span className="text-white">Zex</span>
          <span className="text-[#a3ff00]">.ai</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex">
          <ul className="flex items-center gap-x-8">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.href}
                  onClick={() => handleNavClick(item)}
                  className={`
                    font-semibold transition-colors duration-300 hover:text-[#a3ff00]
                    ${activeItem === item.label ? "text-[#a3ff00]" : "text-white"}
                  `}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Link
            to="/contact"
            onClick={() => setActiveItem("Contact")}
            className="inline-block bg-white text-black font-bold py-2.5 px-7 rounded-full hover:bg-gray-200 transition-colors"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile button */}
        <div className="lg:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ?
              <XMarkIcon className="h-7 w-7 text-white" /> :
              <Bars3Icon className="h-7 w-7 text-white" />
            }
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#121212] border-t border-gray-800">
          <nav className="flex flex-col items-center text-center p-8 gap-y-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                onClick={() => handleNavClick(item)}
                className="font-semibold text-lg text-white hover:text-[#a3ff00]"
              >
                {item.label}
              </Link>
            ))}

            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="inline-block bg-white text-black font-bold py-2.5 px-7 rounded-full"
            >
              Get Started
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
