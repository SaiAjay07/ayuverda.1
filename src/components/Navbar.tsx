import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      // Track active section for home page
      if (location.pathname === '/') {
        const sections = ['home', 'about', 'treatments', 'blog', 'contact'];
        const scrollPosition = window.scrollY + 100;
        
        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const offsetTop = element.offsetTop;
            const offsetHeight = element.offsetHeight;
            
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
              setActiveSection(section);
              break;
            }
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  // Always show solid background on non-home pages
  const shouldShowSolidBg = location.pathname !== '/' || isScrolled;

  const navItems = [
    { name: 'Home', href: '/', section: 'home' },
    { name: 'About', href: '/#about', section: 'about' },
    { name: 'Treatments', href: '/#treatments', section: 'treatments' },
    { name: 'Know Your Prakriti', href: '/know-your-prakriti', section: 'prakriti' },
    { name: 'Blog', href: '/#blog', section: 'blog' },
    { name: 'Contact', href: '/#contact', section: 'contact' }
  ];

  const isActiveLink = (section: string) => {
    if (location.pathname === '/know-your-prakriti') {
      return section === 'prakriti';
    }
    return location.pathname === '/' && activeSection === section;
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${shouldShowSolidBg ? 'bg-white/95 backdrop-blur-lg shadow-lg py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <a href="/" className="flex items-center group">
            <img 
              src="/APK LOGO-01.jpg" 
              alt="Ayurvaidik Parishkar Kendra Logo" 
              className="h-12 w-12 object-contain transition-transform duration-300 group-hover:scale-110"
            />
            <span className={`ml-2 text-xl font-serif font-semibold transition-all duration-300 ${shouldShowSolidBg ? 'text-green-800' : 'text-white'} group-hover:text-green-600`}>
              Ayurvaidik Parishkar Kendra
            </span>
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a 
                key={item.name}
                href={item.href} 
                className={`relative transition-all duration-300 font-medium ${
                  shouldShowSolidBg ? 'text-green-800 hover:text-green-600' : 'text-white hover:text-green-200'
                } ${isActiveLink(item.section) ? 'text-green-600' : ''}`}
              >
                {item.name}
                {/* Animated underline for active section */}
                {isActiveLink(item.section) && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-green-500 to-amber-500 animate-pulse"></div>
                )}
                {/* Hover underline */}
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-green-500 to-amber-500 scale-x-0 hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </a>
            ))}
          </div>
          
          {/* Mobile Navigation Button */}
          <button 
            className={`md:hidden transition-all duration-300 p-2 rounded-lg ${shouldShowSolidBg ? 'text-green-800 hover:bg-green-100' : 'text-white hover:bg-white/20'}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col space-y-4 bg-white/95 backdrop-blur-lg rounded-xl p-6 shadow-xl">
              {navItems.map((item) => (
                <a 
                  key={item.name}
                  href={item.href} 
                  className={`transition-all duration-300 font-medium py-2 px-4 rounded-lg ${
                    isActiveLink(item.section) 
                      ? 'text-green-600 bg-green-50 border-l-4 border-green-500' 
                      : 'text-green-800 hover:text-green-600 hover:bg-green-50'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;