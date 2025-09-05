import React from 'react';
import TestimonialCarousel from './TestimonialCarousel';

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

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Suman Reddy",
    location: "Hyderabad",
    condition: "Cervical Spondylosis",
    rating: 5,
    testimonial: "I had been suffering from severe cervical spondylosis and chronic neck pain for over 5 years. After trying various allopathic treatments with only temporary relief, I decided to explore Ayurveda. Dr. Haresh took the time to understand my prakriti and the root cause of my issue. Within 3 weeks of treatment, my pain reduced by 80%. I can now sleep peacefully and work without constant discomfort.",
    image: "/testomonial suman.jpg",
    treatment: "Abhyanga, Nasya, Shirovasti"
  },
  {
    id: 2,
    name: "Ravi Kumar",
    location: "Hyderabad",
    condition: "Psoriasis",
    rating: 5,
    testimonial: "I was diagnosed with psoriasis over 8 years ago. The itching, flaking, and embarrassment made it extremely hard to lead a normal life. Dr. Haresh patiently explained the root cause from an Ayurvedic point of view and prescribed a personalized treatment plan. After 2 months of consistent therapy, my skin started clearing up. Now, 6 months later, I'm 90% clear and feel confident again!",
    image: "/ravi testamonial.png",
    treatment: "Panchakarma, Herbal Medicines"
  },
  {
    id: 3,
    name: "Priya Sharma",
    location: "Hyderabad",
    condition: "Chronic Migraines",
    rating: 5,
    testimonial: "I suffered from debilitating migraines for over 10 years. The pain was so severe that I couldn't function normally. At Ayurparishkar Kendra, Dr. Haresh diagnosed my condition as a Pitta imbalance and recommended Shirodhara therapy. After just 4 sessions, my migraine frequency reduced dramatically. It's been 8 months now, and I rarely get headaches.",
    image: "/testamonial of priya sharma.png",
    treatment: "Shirodhara, Dietary Counseling"
  },
  {
    id: 4,
    name: "Meera Patel",
    location: "Hyderabad",
    condition: "PCOD",
    rating: 5,
    testimonial: "I was struggling with PCOD for 5 years, which caused irregular periods, weight gain, and hormonal imbalances. Dr. Haresh's approach was completely different — he focused on balancing my doshas through Panchakarma and herbal formulations. Within 4 months, my cycles became regular, I lost 12 kg naturally, and my energy levels improved significantly.",
    image: "/testimoinal meera patel.png",
    treatment: "Panchakarma, Yoga Therapy, Herbal Formulations"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-amber-50 to-green-50 relative overflow-hidden">
      {/* Floating Ayurvedic Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 text-6xl opacity-10 animate-float">🌿</div>
        <div className="absolute top-40 right-20 text-4xl opacity-10 animate-bounce" style={{ animationDelay: '1s' }}>🕉️</div>
        <div className="absolute bottom-40 left-20 text-5xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }}>🧘‍♀️</div>
        <div className="absolute bottom-20 right-10 text-4xl opacity-10 animate-float" style={{ animationDelay: '3s' }}>🌺</div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-green-800 mb-4">What Our Patients Say</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-amber-500 to-green-500 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-700 text-lg">
            Real stories of healing and transformation from our patients who have experienced the power of authentic Ayurvedic treatment.
          </p>
        </div>
        
        {/* Testimonial Carousel */}
        <div className="max-w-6xl mx-auto mb-16">
          <TestimonialCarousel testimonials={testimonials} />
        </div>
        
        <div className="text-center">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-green-800 mb-4">Ready to Start Your Healing Journey?</h3>
            <p className="text-gray-700 mb-6 text-lg">
              Join thousands of satisfied patients who have found relief through our authentic Ayurvedic treatments.
            </p>
            <a 
              href="#contact" 
              className="inline-block px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white rounded-full transition-all duration-300 transform hover:scale-105 font-semibold text-lg shadow-lg hover:shadow-xl"
            >
              Book Your Consultation Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;