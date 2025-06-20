import React from 'react';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url("/new commit chnages/welcome page.jpeg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center center'
        }}
      ></div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-white mb-4 animate-fade-in">
          Discover the Healing Power of Ayurveda
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-white mb-8 max-w-3xl mx-auto animate-fade-in-delayed">
          Over 30 Years of Personalized Ayurvedic Care
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-delayed-more">
          <a 
            href="#treatments" 
            className="px-6 md:px-8 py-3 bg-green-700 hover:bg-green-800 text-white rounded-full transition-all duration-300 transform hover:scale-105 text-base md:text-lg font-semibold"
          >
            Explore Treatments
          </a>
          <a 
            href="#contact" 
            className="px-6 md:px-8 py-3 bg-transparent border-2 border-white text-white hover:bg-white/20 rounded-full transition-all duration-300 transform hover:scale-105 text-base md:text-lg font-semibold"
          >
            Book Consultation
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <a href="#about" className="text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;