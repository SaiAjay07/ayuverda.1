import React from 'react';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ 
        backgroundImage: 'url("/new commit chnages/welcome page.jpeg")' 
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-brown/30 to-primary-brown/60"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-beige mb-4 animate-fade-in">
          Ancient Healing. Modern Care.
        </h1>
        <p className="text-xl md:text-2xl text-primary-beige/90 mb-8 max-w-3xl mx-auto animate-fade-in-delayed">
          Experience authentic Ayurvedic healing with personalized care
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-delayed-more">
          <a 
            href="#treatments" 
            className="px-8 py-3 bg-primary-gold hover:bg-primary-gold/90 text-primary-brown font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
          >
            Explore Treatments
          </a>
          <a 
            href="#contact" 
            className="px-8 py-3 bg-transparent border-2 border-primary-beige text-primary-beige hover:bg-primary-beige/20 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            Book Consultation
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <a href="#about" className="text-primary-beige">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;