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
    <div className={`${isCenter ? 'max-w-md mx-auto' : 'flex-1'} group`}>
      <div className={`${treatment.color} ${treatment.borderColor} border-2 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 h-full`}>
        {/* Image Section */}
        <div className="relative h-48 md:h-56 overflow-hidden">
          <img 
            src={treatment.image} 
            alt={treatment.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        
        {/* Content Section */}
        <div className="p-6">
          <h3 className="text-xl md:text-2xl font-bold text-green-800 mb-2 group-hover:text-green-900 transition-colors duration-300">
            {treatment.title}
          </h3>
          <p className={`text-sm md:text-base italic ${treatment.iconColor} font-serif mb-3`}>
            {treatment.sanskrit}
          </p>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
            {treatment.description}
          </p>
          
          {treatment.path && (
            <button 
              onClick={() => window.location.href = treatment.path}
              className={`inline-flex items-center px-4 py-2 ${treatment.iconColor.replace('text-', 'bg-').replace('-600', '-600')} hover:${treatment.iconColor.replace('text-', 'bg-').replace('-600', '-700')} text-white rounded-full font-medium transition-all duration-300 transform hover:scale-105 text-sm`}
            >
              Learn More
              <ChevronRight className="ml-1 w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div 
      className="relative w-full bg-gradient-to-br from-green-50 via-white to-amber-50 rounded-3xl p-6 md:p-8 shadow-xl overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg width="100%" height="100%" className="text-green-600">
          <pattern id="treatment-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            <circle cx="30" cy="30" r="2" fill="currentColor"></circle>
          </pattern>
          <rect width="100%" height="100%" fill="url(#treatment-pattern)"></rect>
        </svg>
      </div>

      {/* Carousel Container */}
      <div className="relative overflow-hidden rounded-2xl">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, slideIndex) => (
            <div key={slideIndex} className="w-full flex-shrink-0 px-4">
              <div className={`flex gap-6 ${slide.length === 1 ? 'justify-center' : 'justify-between'}`}>
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
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-green-700 hover:text-green-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-10 group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-green-700 hover:text-green-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-10 group"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
      </button>

      {/* Slide Indicators */}
      <div className="flex justify-center mt-6 space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-green-600 scale-125 shadow-lg'
                : 'bg-green-300 hover:bg-green-400 hover:scale-110'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Auto-play indicator */}
      <div className="absolute top-4 right-4 flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-3 py-2 rounded-full">
        <div className={`w-2 h-2 rounded-full ${isHovered ? 'bg-amber-500' : 'bg-green-500 animate-pulse'}`}></div>
        <span className="text-xs font-medium text-gray-700">
          {isHovered ? 'Paused' : 'Auto-play'}
        </span>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-green-200">
        <div 
          className="h-full bg-gradient-to-r from-green-500 to-teal-500 transition-all duration-300"
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