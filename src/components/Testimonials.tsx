import React from 'react';
import { Star, Quote } from 'lucide-react';

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
    testimonial: "I had been suffering from severe cervical spondylosis and chronic neck pain for over 5 years. After trying various allopathic treatments with only temporary relief, I decided to explore Ayurveda. Dr. Haresh took the time to understand my prakriti and the root cause of my issue. The treatment wasn't just about massage or pain relief — it was a complete, holistic approach. Within 3 weeks of Abhyanga, Nasya, and Shirovasti treatments, my pain reduced by 80%. I can now sleep peacefully and work without constant discomfort. This clinic truly changed my life!",
    image: "/testomonial suman.jpg",
    treatment: "Abhyanga, Nasya, Shirovasti"
  },
  {
    id: 2,
    name: "Ravi Kumar",
    location: "Hyderabad",
    condition: "Psoriasis",
    rating: 5,
    testimonial: "I was diagnosed with psoriasis over 8 years ago. The itching, flaking, and embarrassment made it extremely hard to lead a normal life. I tried steroid creams, pills, and even light therapy — but nothing gave lasting results. Dr. Haresh patiently explained the root cause of psoriasis from an Ayurvedic point of view and prescribed a personalized treatment plan. After 2 months of consistent Panchakarma therapy and herbal medicines, my skin started clearing up. Now, 6 months later, I'm 90% clear and feel confident again!",
    image: "https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg",
    treatment: "Panchakarma, Herbal Medicines"
  },
  {
    id: 3,
    name: "Priya Sharma",
    location: "Hyderabad",
    condition: "Chronic Migraines",
    rating: 5,
    testimonial: "I suffered from debilitating migraines for over 10 years. The pain was so severe that I couldn't function normally. Modern medicine only provided temporary relief with side effects. At Ayurparishkar Kendra, Dr. Haresh diagnosed my condition as a Pitta imbalance and recommended Shirodhara therapy along with specific dietary changes. After just 4 sessions, my migraine frequency reduced dramatically. It's been 8 months now, and I rarely get headaches. The holistic approach here is truly remarkable!",
    image: "/testamonial of priya sharma.png",
    treatment: "Shirodhara, Dietary Counseling"
  },
  {
    id: 4,
    name: "Meera Patel",
    location: "Hyderabad",
    condition: "PCOD",
    rating: 5,
    testimonial: "I was struggling with PCOD for 5 years, which caused irregular periods, weight gain, and hormonal imbalances. Multiple gynecologists prescribed hormonal treatments, but the side effects were unbearable. Dr. Haresh's approach was completely different — he focused on balancing my doshas through Panchakarma, specific yoga practices, and herbal formulations. Within 4 months, my cycles became regular, I lost 12 kg naturally, and my energy levels improved significantly. I'm now planning for a healthy pregnancy!",
    image: "https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg",
    treatment: "Panchakarma, Yoga Therapy, Herbal Formulations"
  }
];

const TestimonialCard: React.FC<{ testimonial: Testimonial; index: number }> = ({ testimonial, index }) => {
  const isEven = index % 2 === 0;
  
  return (
    <div className={`mb-16 last:mb-0 ${isEven ? '' : 'lg:flex-row-reverse'}`}>
      <div className={`flex flex-col lg:flex-row items-center gap-8 ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
        {/* Image Section */}
        <div className="lg:w-1/3 w-full">
          <div className="relative">
            <img 
              src={testimonial.image} 
              alt={testimonial.name} 
              className="w-full h-80 object-contain rounded-xl shadow-xl bg-white"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="lg:w-2/3 w-full">
          <div className="bg-white rounded-xl p-8 shadow-xl border border-green-100 relative">
            <Quote className="absolute top-4 left-4 w-8 h-8 text-green-200" />
            
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-green-800 mb-2">{testimonial.name}</h3>
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                  {testimonial.location}
                </span>
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  {testimonial.condition}
                </span>
              </div>
            </div>
            
            <p className="text-gray-700 mb-6 leading-relaxed italic">
              "{testimonial.testimonial}"
            </p>
            
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-800 mb-2">Treatment Received:</h4>
              <p className="text-green-700">{testimonial.treatment}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-amber-50 to-green-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-green-800 mb-4">What Our Patients Say</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-700">
            Real stories of healing and transformation from our patients who have experienced the power of authentic Ayurvedic treatment.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-white rounded-xl p-8 shadow-xl border border-green-200 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-green-800 mb-4">Ready to Start Your Healing Journey?</h3>
            <p className="text-gray-700 mb-6">
              Join thousands of satisfied patients who have found relief through our authentic Ayurvedic treatments.
            </p>
            <a 
              href="#contact" 
              className="inline-block px-8 py-3 bg-green-700 hover:bg-green-800 text-white rounded-full transition-all duration-300 transform hover:scale-105 font-semibold"
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