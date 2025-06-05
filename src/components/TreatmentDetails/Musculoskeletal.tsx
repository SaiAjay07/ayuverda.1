import React from 'react';

const Musculoskeletal = () => {
  return (
    <div className="min-h-screen bg-stone-50 py-20 pt-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Side - Image */}
          <div className="lg:w-1/2">
            <div className="relative rounded-xl overflow-hidden shadow-xl">
              <img 
                src="/Elakizhi.png"
                alt="Elakizhi therapy" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="lg:w-1/2">
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-green-800 mb-6">
              Elakizhi (Patra Pinda Sweda)
            </h1>

            <div className="space-y-8">
              {/* Overview Section */}
              <div>
                <h2 className="text-xl font-serif font-semibold text-green-800 mb-3">Overview</h2>
                <p className="text-gray-700">
                  Elakizhi, also known as Patra Pinda Sweda, is a traditional Ayurvedic therapy renowned 
                  for its effectiveness in treating various musculoskeletal disorders. The term "Elakizhi" 
                  is derived from Malayalam, where "Ela" means leaves and "Kizhi" refers to a bundle or bolus.
                </p>
              </div>

              {/* Procedure Section */}
              <div>
                <h2 className="text-xl font-serif font-semibold text-green-800 mb-3">Procedure</h2>
                <p className="text-gray-700">
                  The therapy involves the use of fresh medicinal leaves such as tamarind, castor, 
                  drumstick, and Calotropis gigantea. These leaves are chopped and mixed with ingredients 
                  like grated coconut, lemon, turmeric, and rock salt. This mixture is sautéed in 
                  medicated oils like Murivenna or Dhanwantharam Thailam and then tied into linen cloth 
                  to form boluses. These herbal poultices are heated and gently massaged over the body, 
                  focusing on areas affected by pain or stiffness.
                </p>
              </div>

              {/* Duration Section */}
              <div>
                <h2 className="text-xl font-serif font-semibold text-green-800 mb-3">Duration</h2>
                <p className="text-gray-700">
                  Each session typically lasts between 45 to 60 minutes, depending on the individual's 
                  condition and the areas being treated.
                </p>
              </div>

              {/* Benefits Section */}
              <div>
                <h2 className="text-xl font-serif font-semibold text-green-800 mb-3">Benefits</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Relieves joint and muscle pain, particularly in conditions like arthritis, sciatica, and spondylosis</li>
                  <li>Reduces inflammation and stiffness, enhancing mobility</li>
                  <li>Improves blood circulation, promoting relaxation of the muscles</li>
                  <li>Induces sweating, aiding in detoxification</li>
                  <li>Enhances skin health and overall wellness</li>
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

export default Musculoskeletal;