import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Always show solid background on non-home pages
  const shouldShowSolidBg = location.pathname !== '/' || isScrolled;

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${shouldShowSolidBg ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <a href="/" className="flex items-center">
            <img 
              src="/APK LOGO-01.jpg" 
              alt="Ayurvaidik Parishkar Kendra Logo" 
              className="h-12 w-12 object-contain"
            />
            <span className={`ml-2 text-xl font-serif font-semibold transition-colors ${shouldShowSolidBg ? 'text-green-800' : 'text-white'}`}>
              Ayurvaidik Parishkar Kendra
            </span>
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="/" className={`transition-colors ${shouldShowSolidBg ? 'text-green-800 hover:text-green-600' : 'text-white hover:text-green-200'}`}>Home</a>
            <a href="/#about" className={`transition-colors ${shouldShowSolidBg ? 'text-green-800 hover:text-green-600' : 'text-white hover:text-green-200'}`}>About</a>
            <a href="/#treatments" className={`transition-colors ${shouldShowSolidBg ? 'text-green-800 hover:text-green-600' : 'text-white hover:text-green-200'}`}>Treatments</a>
            <a href="/know-your-prakriti" className={`transition-colors ${shouldShowSolidBg ? 'text-green-800 hover:text-green-600' : 'text-white hover:text-green-200'}`}>Know Your Prakriti</a>
            <a href="/#blog" className={`transition-colors ${shouldShowSolidBg ? 'text-green-800 hover:text-green-600' : 'text-white hover:text-green-200'}`}>Blog</a>
            <a href="/#contact" className={`transition-colors ${shouldShowSolidBg ? 'text-green-800 hover:text-green-600' : 'text-white hover:text-green-200'}`}>Contact</a>
          </div>
          
          {/* Mobile Navigation Button */}
          <button 
            className={`md:hidden transition-colors ${shouldShowSolidBg ? 'text-green-800' : 'text-white'}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
        
        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <a href="/" className={`transition-colors ${shouldShowSolidBg ? 'text-green-800 hover:text-green-600' : 'text-white hover:text-green-200'}`} onClick={() => setIsOpen(false)}>Home</a>
              <a href="/#about" className={`transition-colors ${shouldShowSolidBg ? 'text-green-800 hover:text-green-600' : 'text-white hover:text-green-200'}`} onClick={() => setIsOpen(false)}>About</a>
              <a href="/#treatments" className={`transition-colors ${shouldShowSolidBg ? 'text-green-800 hover:text-green-600' : 'text-white hover:text-green-200'}`} onClick={() => setIsOpen(false)}>Treatments</a>
              <a href="/know-your-prakriti" className={`transition-colors ${shouldShowSolidBg ? 'text-green-800 hover:text-green-600' : 'text-white hover:text-green-200'}`} onClick={() => setIsOpen(false)}>Know Your Prakriti</a>
              <a href="/#blog" className={`transition-colors ${shouldShowSolidBg ? 'text-green-800 hover:text-green-600' : 'text-white hover:text-green-200'}`} onClick={() => setIsOpen(false)}>Blog</a>
              <a href="/#contact" className={`transition-colors ${shouldShowSolidBg ? 'text-green-800 hover:text-green-600' : 'text-white hover:text-green-200'}`} onClick={() => setIsOpen(false)}>Contact</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;