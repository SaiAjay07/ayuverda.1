import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-stone-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-green-800 mb-4">About Our Clinic</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/5240677/pexels-photo-5240677.jpeg" 
                alt="Ayurvedic consultation" 
                className="rounded-lg shadow-xl w-full object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-amber-100 p-6 rounded-lg shadow-lg max-w-xs hidden md:block">
                <p className="text-green-800 italic font-serif">
                  "Healing the body begins with understanding the soul."
                </p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-serif font-semibold text-green-800 mb-4">
              A Legacy of Traditional Healing
            </h3>
            <p className="text-gray-700 mb-4">
              Established in 2004 with the spiritual guidance and blessings of Sri Sri Swaroopananda Saraswati Maharaj, 
              Ayurvaidik Parishkar Kendra has been dedicated to authentic Ayurvedic healing for over two decades.
            </p>
            <p className="text-gray-700 mb-6">
              Our clinic is led by Dr. L. Haresh, a veteran Ayurvedic physician with more than 30 years of experience. 
              His deep understanding of traditional practices combined with contemporary wellness approaches has helped 
              thousands of patients find balance and healing.
            </p>
            
            <div className="mb-8">
              <h4 className="font-semibold text-xl text-green-800 mb-2">Our Mission</h4>
              <p className="text-gray-700">
                To provide authentic, personalized Ayurvedic treatments that restore harmony between body, mind, and spirit, 
                while honoring the ancient wisdom of this healing tradition.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-xl text-green-800 mb-2">A Tradition of Trust and Authenticity</h4>
              <p className="text-gray-700">
                Our therapies are performed by skilled professionals trained in the classical Ayurvedic traditions of Kerala. 
                We use only the highest-quality Ayurvedic medicines, ethically sourced from the renowned Kottakal Arya Vaidya Sala, 
                ensuring purity, safety, and authenticity in every remedy we offer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;