import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
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

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <a href="#" className="flex items-center">
            <img 
              src="/APK LOGO-01.jpg" 
              alt="Ayurvaidik Parishkar Kendra Logo" 
              className="h-12 w-12 object-contain"
            />
            <span className="ml-2 text-xl font-serif font-semibold text-green-800">
              Ayurvaidik Parishkar Kendra
            </span>
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-green-800 hover:text-green-600 transition-colors">Home</a>
            <a href="#about" className="text-green-800 hover:text-green-600 transition-colors">About</a>
            <a href="#treatments" className="text-green-800 hover:text-green-600 transition-colors">Treatments</a>
            <a href="#blog" className="text-green-800 hover:text-green-600 transition-colors">Blog</a>
            <a href="#contact" className="text-green-800 hover:text-green-600 transition-colors">Contact</a>
          </div>
          
          {/* Mobile Navigation Button */}
          <button 
            className="md:hidden text-green-800" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
        
        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-green-800 hover:text-green-600 transition-colors" onClick={() => setIsOpen(false)}>Home</a>
              <a href="#about" className="text-green-800 hover:text-green-600 transition-colors" onClick={() => setIsOpen(false)}>About</a>
              <a href="#treatments" className="text-green-800 hover:text-green-600 transition-colors" onClick={() => setIsOpen(false)}>Treatments</a>
              <a href="#blog" className="text-green-800 hover:text-green-600 transition-colors" onClick={() => setIsOpen(false)}>Blog</a>
              <a href="#contact" className="text-green-800 hover:text-green-600 transition-colors" onClick={() => setIsOpen(false)}>Contact</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;