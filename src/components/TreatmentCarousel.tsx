import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Treatment {
  id: number;
  title: string;
  sanskrit: string;
  description: string;
  image: string;
  color: string;
  borderColor: string;
  iconColor: string;
  path?: string;
}

interface Props {
  treatments: Treatment[];
}

const TreatmentCarousel: React.FC<Props> = ({ treatments }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Create slides: [0-2], [3-5], [6]
  const slides = [
    treatments.slice(0, 3),
    treatments.slice(3, 6),
    treatments.slice(6, 7)
  ];

  const totalSlides = slides.length;

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
      }, 3000); // 3 seconds per slide for better viewing

      return () => clearInterval(interval);
    }
  }, [isHovered, totalSlides]);

  const goToSlide = (slideIndex: number) => {
    setCurrentSlide(slideIndex);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const TreatmentCard: React.FC<{ treatment: Treatment; isCenter?: boolean }> = ({ 
    treatment, 
    isCenter = false 
  }) => (
    <div className={`${isCenter ? 'max-w-2xl mx-auto' : 'flex-1'} group h-full`}>
      <div className={`${treatment.color} ${treatment.borderColor} border-2 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 h-full flex flex-col`}>
        {/* Image Section */}
        <div className="relative h-64 md:h-80 lg:h-96 overflow-hidden">
          <img 
            src={treatment.image} 
            alt={treatment.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Floating treatment title overlay */}
          <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-3">
              <h3 className="text-lg font-bold text-green-800">{treatment.title}</h3>
              <p className="text-sm text-gray-600 italic">{treatment.sanskrit}</p>
            </div>
          </div>
        </div>
        
        {/* Content Section */}
        <div className="p-6 md:p-8 flex-1 flex flex-col">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-green-800 mb-3 group-hover:text-green-900 transition-colors duration-300">
            {treatment.title}
          </h3>
          <p className={`text-sm md:text-base lg:text-lg italic ${treatment.iconColor} font-serif mb-4`}>
            {treatment.sanskrit}
          </p>
          <p className="text-gray-700 text-sm md:text-base lg:text-lg leading-relaxed mb-6 flex-1">
            {treatment.description}
          </p>
          
          {treatment.path && (
            <button 
              onClick={() => window.location.href = treatment.path}
              className={`inline-flex items-center justify-center px-6 py-3 ${treatment.iconColor.replace('text-', 'bg-').replace('-600', '-600')} hover:${treatment.iconColor.replace('text-', 'bg-').replace('-600', '-700')} text-white rounded-full font-medium transition-all duration-300 transform hover:scale-105 text-sm md:text-base shadow-lg hover:shadow-xl`}
            >
              Learn More
              <ChevronRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div 
      className="relative w-full h-full min-h-[600px] md:min-h-[700px] lg:min-h-[800px] bg-gradient-to-br from-green-50 via-white to-amber-50 rounded-3xl shadow-2xl overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg width="100%" height="100%" className="text-green-600">
          <pattern id="treatment-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
            <circle cx="40" cy="40" r="3" fill="currentColor"></circle>
            <circle cx="20" cy="20" r="1" fill="currentColor"></circle>
            <circle cx="60" cy="60" r="1" fill="currentColor"></circle>
          </pattern>
          <rect width="100%" height="100%" fill="url(#treatment-pattern)"></rect>
        </svg>
      </div>

      {/* Floating Ayurvedic Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-10 text-4xl opacity-10 animate-float">🌿</div>
        <div className="absolute top-20 right-20 text-3xl opacity-10 animate-bounce" style={{ animationDelay: '1s' }}>🕉️</div>
        <div className="absolute bottom-20 left-20 text-4xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }}>🧘‍♀️</div>
        <div className="absolute bottom-10 right-10 text-3xl opacity-10 animate-float" style={{ animationDelay: '3s' }}>🌺</div>
      </div>

      {/* Carousel Container */}
      <div className="relative h-full overflow-hidden rounded-3xl p-6 md:p-8 lg:p-12">
        <div 
          className="flex h-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, slideIndex) => (
            <div key={slideIndex} className="w-full flex-shrink-0 h-full">
              <div className={`h-full flex gap-6 md:gap-8 ${slide.length === 1 ? 'justify-center items-center' : 'justify-between items-stretch'}`}>
                {slide.map((treatment) => (
                  <TreatmentCard 
                    key={treatment.id} 
                    treatment={treatment} 
                    isCenter={slide.length === 1}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 md:left-6 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-green-700 hover:text-green-800 p-3 md:p-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 z-10 group backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 md:w-8 md:h-8 group-hover:scale-110 transition-transform duration-200" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 md:right-6 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-green-700 hover:text-green-800 p-3 md:p-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 z-10 group backdrop-blur-sm"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 md:w-8 md:h-8 group-hover:scale-110 transition-transform duration-200" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-green-600 scale-125 shadow-lg'
                : 'bg-green-300 hover:bg-green-400 hover:scale-110'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Auto-play indicator */}
      <div className="absolute top-4 md:top-6 right-4 md:right-6 flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-3 py-2 rounded-full z-10">
        <div className={`w-2 h-2 rounded-full ${isHovered ? 'bg-amber-500' : 'bg-green-500 animate-pulse'}`}></div>
        <span className="text-xs font-medium text-gray-700">
          {isHovered ? 'Paused' : 'Auto-play'}
        </span>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-green-200 z-10">
        <div 
          className="h-full bg-gradient-to-r from-green-500 to-teal-500 transition-all duration-700"
          style={{ 
            width: `${((currentSlide + 1) / totalSlides) * 100}%`,
            animation: isHovered ? 'none' : 'pulse 2s infinite'
          }}
        ></div>
      </div>
    </div>
  );
};

export default TreatmentCarousel;