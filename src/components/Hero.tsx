import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-110"
        style={{ 
          backgroundImage: 'url("/new commit chnages/welcome page.jpeg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          transform: `translateY(${scrollY * 0.5}px) scale(1.1)`
        }}
      ></div>
      
      {/* Enhanced Overlay with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/70"></div>
      
      {/* Floating Ayurvedic Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 text-6xl opacity-20 animate-float">🌿</div>
        <div className="absolute top-40 right-20 text-4xl opacity-20 animate-bounce" style={{ animationDelay: '1s' }}>🕉️</div>
        <div className="absolute bottom-40 left-20 text-5xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}>🧘‍♀️</div>
        <div className="absolute bottom-20 right-10 text-4xl opacity-20 animate-float" style={{ animationDelay: '3s' }}>🌺</div>
        <div className="absolute top-60 left-1/4 text-3xl opacity-15 animate-kerala-breeze" style={{ animationDelay: '4s' }}>🌴</div>
        <div className="absolute bottom-60 right-1/4 text-3xl opacity-15 animate-coconut-sway" style={{ animationDelay: '5s' }}>🥥</div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-white mb-6 animate-fade-in leading-tight">
            Discover the Healing Power of 
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-amber-400 animate-pulse">
              Ayurveda
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-8 max-w-4xl mx-auto animate-fade-in-delayed leading-relaxed">
            Over 30 Years of Personalized Ayurvedic Care
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 max-w-3xl mx-auto animate-fade-in-delayed-more">
            <p className="text-white/80 text-lg italic font-serif">
              "Authentic healing rooted in ancient wisdom, guided by modern understanding"
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6 animate-fade-in-delayed-more">
            <a 
              href="#treatments" 
              className="group px-8 md:px-10 py-4 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white rounded-full transition-all duration-300 transform hover:scale-105 text-lg md:text-xl font-semibold shadow-xl hover:shadow-2xl"
            >
              <span className="flex items-center justify-center">
                Explore Treatments
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </span>
            </a>
            
            <a 
              href="#contact" 
              className="group px-8 md:px-10 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-800 rounded-full transition-all duration-300 transform hover:scale-105 text-lg md:text-xl font-semibold backdrop-blur-sm"
            >
              <span className="flex items-center justify-center">
                Book Consultation
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
      
      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-10 left-0 right-0 flex flex-col items-center animate-bounce">
        <p className="text-white/80 text-sm mb-2 font-medium">Discover More</p>
        <a href="#about" className="text-white/80 hover:text-white transition-colors duration-300">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;