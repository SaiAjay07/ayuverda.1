import React from 'react';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ 
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.pexels.com/photos/4021779/pexels-photo-4021779.jpeg")' 
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-green-900/40"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4 animate-fade-in">
          Discover the Healing Power of Ayurveda
        </h1>
        <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto animate-fade-in-delayed">
          Over 30 Years of Personalized Ayurvedic Care
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-delayed-more">
          <a 
            href="#treatments" 
            className="px-8 py-3 bg-green-700 hover:bg-green-800 text-white rounded-full transition-all duration-300 transform hover:scale-105"
          >
            Explore Treatments
          </a>
          <a 
            href="#contact" 
            className="px-8 py-3 bg-transparent border-2 border-white text-white hover:bg-white/20 rounded-full transition-all duration-300 transform hover:scale-105"
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