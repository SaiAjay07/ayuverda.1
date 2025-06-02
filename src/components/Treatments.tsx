import React from 'react';
import TreatmentCard from './TreatmentCard';

// Treatment data
const treatments = [
  {
    id: 1,
    title: 'Musculoskeletal Disorders',
    sanskrit: 'Asthi-Sandhi Vikara',
    description: 'Relief for neck and back pain, arthritis, gout, sciatica, and cervical spondylosis.',
    image: 'https://images.pexels.com/photos/8325861/pexels-photo-8325861.jpeg',
    color: 'bg-amber-50',
    borderColor: 'border-amber-200',
    iconColor: 'text-amber-600'
  },
  {
    id: 2,
    title: 'Respiratory Ailments',
    sanskrit: 'Shwasa Roga',
    description: 'Natural therapies for asthma, bronchitis, sinusitis, and related conditions.',
    image: 'https://images.pexels.com/photos/3094230/pexels-photo-3094230.jpeg',
    color: 'bg-teal-50',
    borderColor: 'border-teal-200',
    iconColor: 'text-teal-600'
  },
  {
    id: 3,
    title: 'Digestive Disorders',
    sanskrit: 'Annavaha Srotas',
    description: 'Solutions for gastric discomfort, IBS, constipation, and more.',
    image: 'https://images.pexels.com/photos/8355367/pexels-photo-8355367.jpeg',
    color: 'bg-green-50',
    borderColor: 'border-green-200',
    iconColor: 'text-green-600'
  },
  {
    id: 4,
    title: 'Women\'s Health',
    sanskrit: 'Stri Roga',
    description: 'Care for menstrual irregularities, menopausal symptoms, and leucorrhoea.',
    image: 'https://images.pexels.com/photos/3373716/pexels-photo-3373716.jpeg',
    color: 'bg-rose-50',
    borderColor: 'border-rose-200',
    iconColor: 'text-rose-600'
  },
  {
    id: 5,
    title: 'Skin Conditions',
    sanskrit: 'Twak Vikara',
    description: 'Treatments for psoriasis, eczema, urticaria (hives), and other chronic dermatological issues.',
    image: 'https://images.pexels.com/photos/5240754/pexels-photo-5240754.jpeg',
    color: 'bg-orange-50',
    borderColor: 'border-orange-200',
    iconColor: 'text-orange-600'
  },
  {
    id: 6,
    title: 'Neurological Concerns',
    sanskrit: 'Vatavyadhi',
    description: 'Support for migraines, headaches, paralysis, and neuropathies.',
    image: 'https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg',
    color: 'bg-purple-50',
    borderColor: 'border-purple-200',
    iconColor: 'text-purple-600'
  },
  {
    id: 7,
    title: 'Metabolic & Lifestyle Conditions',
    sanskrit: 'Prameha',
    description: 'Management of diabetes, obesity, and hypertension through Ayurvedic wisdom.',
    image: 'https://images.pexels.com/photos/7298684/pexels-photo-7298684.jpeg',
    color: 'bg-blue-50',
    borderColor: 'border-blue-200',
    iconColor: 'text-blue-600'
  }
];

const Treatments = () => {
  return (
    <section id="treatments" className="py-20 bg-gradient-to-b from-stone-100 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-green-800 mb-4">Our Areas of Specialization</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-700">
            We provide authentic Ayurvedic treatments for a wide range of health concerns, 
            tailored to restore balance and promote holistic well-being.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {treatments.map(treatment => (
            <TreatmentCard key={treatment.id} treatment={treatment} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#contact" 
            className="inline-block px-8 py-3 bg-green-700 hover:bg-green-800 text-white rounded-full transition-all duration-300 transform hover:scale-105"
          >
            Book a Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default Treatments;