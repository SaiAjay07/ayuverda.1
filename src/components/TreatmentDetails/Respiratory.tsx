import React from 'react';

const Respiratory = () => {
  return (
    <div className="min-h-screen bg-stone-50 py-20 pt-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Side - Image */}
          <div className="lg:w-1/2">
            <div className="relative rounded-xl overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/3735215/pexels-photo-3735215.jpeg"
                alt="Nasya therapy" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="lg:w-1/2">
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-green-800 mb-6">
              Nasya Therapy
            </h1>

            <div className="space-y-8">
              {/* Overview Section */}
              <div>
                <h2 className="text-xl font-serif font-semibold text-green-800 mb-3">Overview</h2>
                <p className="text-gray-700">
                  Nasya is a specialized Ayurvedic treatment that focuses on nasal administration of 
                  medicinal herbs and oils. It is particularly effective for treating respiratory 
                  ailments, sinusitis, allergies, and other conditions affecting the head and neck 
                  region. The term "Nasya" refers to the nasal passage, which is considered a gateway 
                  to the brain in Ayurvedic medicine.
                </p>
              </div>

              {/* Procedure Section */}
              <div>
                <h2 className="text-xl font-serif font-semibold text-green-800 mb-3">Procedure</h2>
                <p className="text-gray-700">
                  The treatment begins with a gentle facial massage and steam inhalation to prepare 
                  the nasal passages. Medicated oils or herbal extracts are then carefully administered 
                  into the nostrils while the patient lies in a specific position with their head 
                  tilted back. The therapy may include various types of nasya, such as Snehana 
                  (oleation), Shodhana (cleansing), or Brimhana (nourishing), depending on the 
                  condition being treated.
                </p>
              </div>

              {/* Duration Section */}
              <div>
                <h2 className="text-xl font-serif font-semibold text-green-800 mb-3">Duration</h2>
                <p className="text-gray-700">
                  A typical Nasya session lasts 30-45 minutes. The treatment course may vary from 
                  7-21 days based on the condition and severity. Some conditions may require regular 
                  maintenance sessions.
                </p>
              </div>

              {/* Benefits Section */}
              <div>
                <h2 className="text-xl font-serif font-semibold text-green-800 mb-3">Benefits</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Clears nasal passages and sinuses</li>
                  <li>Relieves headaches and migraines</li>
                  <li>Improves respiratory function</li>
                  <li>Reduces allergic reactions</li>
                  <li>Enhances sense of smell</li>
                  <li>Promotes mental clarity</li>
                  <li>Helps with sleep disorders</li>
                </ul>
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <a 
                  href="#contact" 
                  className="inline-block px-8 py-3 bg-green-700 hover:bg-green-800 text-white rounded-full transition-all duration-300 transform hover:scale-105"
                >
                  Book a Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Respiratory;