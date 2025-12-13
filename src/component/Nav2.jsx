import { Phone, Mail, MapPin, Menu, X } from "lucide-react";
import { useState } from "react";

const Nav2 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/home", label: "Home" },
    { href: "/service", label: "Services" },
    { href: "/about", label: "About Us" },
    { href: "/process", label: "Testing Process" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 shadow-lg">
      {/* Top bar */}
      <div className="bg-linear-to-r from-red-500 via-pink-500 to-purple-500 text-white py-2">
        <div className="container mx-auto px-4 flex flex-wrap justify-center md:justify-between items-center gap-4 text-sm">
          <div className="flex items-center gap-6">
            <a
              href="tel:+918526453645"
              className="flex items-center gap-2 hover:text-yellow-200 transition-colors"
            >
              <Phone size={14} />
              <span>+91 8526453645</span>
            </a>
            <a
              href="mailto:info@minulab.com"
              className="hidden sm:flex items-center gap-2 hover:text-yellow-200 transition-colors"
            >
              <Mail size={14} />
              <span>info@minulab.com</span>
            </a>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <MapPin size={14} />
            <span>Sector-148, Greater Noida</span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="bg-black/90 backdrop-blur-md text-white">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-linear-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center shadow-md">
              <span className="text-white font-display font-bold text-xl">M</span>
            </div>
            <div>
              <h1 className="font-display font-bold text-xl">Minu Laboratory</h1>
              <p className="text-xs text-gray-300">Quality & Testing</p>
            </div>
          </a>

          {/* Desktop nav with hover effects */}
          <div className="hidden lg:flex items-center gap-10 ml-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative font-medium text-gray-300 hover:text-white transition-colors duration-300 group"
              >
                {link.label}
                {/* Animated underline */}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-linear-to-r from-red-400 to-pink-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile nav */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md border-t border-gray-700 py-6 px-6 animate-slideDown">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative text-gray-300 hover:text-white font-medium py-2 transition-colors group"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-linear-to-r from-red-400 to-pink-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Nav2;