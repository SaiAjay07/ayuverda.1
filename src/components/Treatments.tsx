import React from 'react';
import TreatmentCarousel from './TreatmentCarousel';

// Treatment data
const treatments = [
  {
    id: 1,
    title: 'Musculoskeletal Disorders',
    sanskrit: 'Asthi-Sandhi Vikara',
    description: 'Comprehensive relief for neck and back pain, arthritis, gout, sciatica, and cervical spondylosis through traditional Ayurvedic therapies.',
    image: '/new commit chnages/muscloskeletal.jpg',
    color: 'bg-amber-50',
    borderColor: 'border-amber-200',
    iconColor: 'text-amber-600',
    path: '/treatments/musculoskeletal'
  },
  {
    id: 2,
    title: 'Respiratory Ailments',
    sanskrit: 'Shwasa Roga',
    description: 'Natural therapies including Nasya treatment for asthma, bronchitis, sinusitis, and related respiratory conditions.',
    image: '/new commit chnages/respiratory .jpg',
    color: 'bg-teal-50',
    borderColor: 'border-teal-200',
    iconColor: 'text-teal-600',
    path: '/treatments/respiratory'
  },
  {
    id: 3,
    title: 'Digestive Disorders',
    sanskrit: 'Annavaha Srotas',
    description: 'Holistic solutions for gastric discomfort, IBS, constipation, and digestive imbalances using time-tested Ayurvedic principles.',
    image: '/new commit chnages/digestive dissorde.jpg',
    color: 'bg-green-50',
    borderColor: 'border-green-200',
    iconColor: 'text-green-600'
  },
  {
    id: 4,
    title: "Women's Health",
    sanskrit: 'Stri Roga',
    description: 'Specialized care for menstrual irregularities, menopausal symptoms, leucorrhoea, and other women-specific health concerns.',
    image: '/new commit chnages/womens health.jpg',
    color: 'bg-rose-50',
    borderColor: 'border-rose-200',
    iconColor: 'text-rose-600'
  },
  {
    id: 5,
    title: 'Skin Conditions',
    sanskrit: 'Twak Vikara',
    description: 'Effective treatments for psoriasis, eczema, urticaria (hives), and other chronic dermatological issues using purifying therapies.',
    image: '/new commit chnages/skin conditionds.jpg',
    color: 'bg-orange-50',
    borderColor: 'border-orange-200',
    iconColor: 'text-orange-600'
  },
  {
    id: 6,
    title: 'Neurological Concerns',
    sanskrit: 'Vatavyadhi',
    description: 'Comprehensive support for migraines, headaches, paralysis, and neuropathies through specialized treatments like Shirodhara.',
    image: '/new commit chnages/shirodhara(neuro).jpg',
    color: 'bg-purple-50',
    borderColor: 'border-purple-200',
    iconColor: 'text-purple-600'
  },
  {
    id: 7,
    title: 'Metabolic & Lifestyle Conditions',
    sanskrit: 'Prameha',
    description: 'Holistic management of diabetes, obesity, and hypertension through Ayurvedic wisdom, dietary guidance, and lifestyle modifications.',
    image: '/new commit chnages/welcome page.jpeg',
    color: 'bg-blue-50',
    borderColor: 'border-blue-200',
    iconColor: 'text-blue-600'
  }
];

const Treatments = () => {
  return (
    <section id="treatments" className="min-h-screen w-full bg-gradient-to-b from-stone-100 to-white flex flex-col">
      {/* Header Section */}
      <div className="w-full px-4 md:px-6 py-12 md:py-16 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-green-800 mb-4">Our Areas of Specialization</h2>
        <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
        <p className="max-w-3xl mx-auto text-gray-700 text-base md:text-lg">
          We provide authentic Ayurvedic treatments for a wide range of health concerns, 
          tailored to restore balance and promote holistic well-being through time-tested traditional practices.
        </p>
      </div>
      
      {/* Full Screen Carousel */}
      <div className="flex-1 w-full flex items-center justify-center px-4 md:px-6">
        <div className="w-full max-w-7xl">
          <TreatmentCarousel treatments={treatments} />
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="w-full px-4 md:px-6 py-12 md:py-16 text-center">
        <a 
          href="#contact" 
          className="inline-block px-6 md:px-8 py-3 bg-green-700 hover:bg-green-800 text-white rounded-full transition-all duration-300 transform hover:scale-105 text-base md:text-lg font-semibold shadow-lg hover:shadow-xl"
        >
          Book a Consultation
        </a>
      </div>
    </section>
  );
};

export default Treatments;