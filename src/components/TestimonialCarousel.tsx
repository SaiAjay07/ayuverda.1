import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  condition: string;
  rating: number;
  testimonial: string;
  image: string;
  treatment: string;
}

interface Props {
  testimonials: Testimonial[];
}

const TestimonialCarousel: React.FC<Props> = ({ testimonials }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Create slides with 2-3 testimonials each
  const slides = [];
  for (let i = 0; i < testimonials.length; i += 2) {
    slides.push(testimonials.slice(i, i + 2));
  }

  const totalSlides = slides.length;

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
      }, 2000); // 2 seconds as requested

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

  const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 h-full flex flex-col">
      {/* Header with image and basic info */}
      <div className="flex items-center mb-4">
        <img 
          src={testimonial.image} 
          alt={testimonial.name} 
          className="w-16 h-16 rounded-full object-cover border-4 border-green-200 shadow-lg"
        />
        <div className="ml-4 flex-1">
          <h3 className="text-lg font-bold text-green-800">{testimonial.name}</h3>
          <p className="text-sm text-gray-600">{testimonial.location}</p>
          <div className="flex items-center mt-1">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`w-4 h-4 ${i < testimonial.rating ? 'text-amber-400 fill-current' : 'text-gray-300'}`} 
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Condition badge */}
      <div className="mb-4">
        <span className="inline-block bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full font-medium">
          {testimonial.condition}
        </span>
      </div>
      
      {/* Testimonial text */}
      <blockquote className="text-gray-700 italic leading-relaxed mb-4 flex-1">
        "{testimonial.testimonial}"
      </blockquote>
      
      {/* Treatment info */}
      <div className="bg-amber-50 p-3 rounded-lg border border-amber-200">
        <h4 className="font-semibold text-amber-800 text-sm mb-1">Treatment Received:</h4>
        <p className="text-amber-700 text-sm">{testimonial.treatment}</p>
      </div>
    </div>
  );

  return (
    <div 
      className="relative w-full bg-gradient-to-br from-green-50 via-white to-amber-50 rounded-3xl p-6 md:p-8 shadow-xl overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="region"
      aria-label="Patient testimonials carousel"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg width="100%" height="100%" className="text-green-600">
          <pattern id="testimonial-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
            <circle cx="40" cy="40" r="2" fill="currentColor"></circle>
          </pattern>
          <rect width="100%" height="100%" fill="url(#testimonial-pattern)"></rect>
        </svg>
      </div>

      {/* Carousel Container */}
      <div className="relative overflow-hidden rounded-2xl">
        <div 
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, slideIndex) => (
            <div key={slideIndex} className="w-full flex-shrink-0 px-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {slide.map((testimonial) => (
                  <TestimonialCard key={testimonial.id} testimonial={testimonial} />
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
        aria-label="Previous testimonials"
      >
        <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-green-700 hover:text-green-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-10 group"
        aria-label="Next testimonials"
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
            aria-label={`Go to testimonial slide ${index + 1}`}
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

export default TestimonialCarousel;