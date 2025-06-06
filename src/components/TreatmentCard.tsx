import React from 'react';
import { useNavigate } from 'react-router-dom';

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
  treatment: Treatment;
  index: number;
}

const TreatmentCard: React.FC<Props> = ({ treatment, index }) => {
  const navigate = useNavigate();
  const isEven = index % 2 === 0;

  const handleClick = () => {
    if (treatment.path) {
      navigate(treatment.path);
    }
  };

  return (
    <div className="mb-16 last:mb-0">
      <div className={`flex flex-col lg:flex-row items-center gap-8 ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
        {/* Image Section */}
        <div className="lg:w-1/2 w-full">
          <div className="relative h-64 md:h-72 lg:h-80 xl:h-96 rounded-xl overflow-hidden shadow-xl group cursor-pointer" onClick={handleClick}>
            <img 
              src={treatment.image} 
              alt={treatment.title} 
              className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300"></div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="bg-white/90 text-green-800 px-6 py-2 rounded-full font-semibold">
                Learn More
              </span>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="lg:w-1/2 w-full">
          <div className={`${treatment.color} ${treatment.borderColor} border rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col justify-center`}>
            <div className="flex flex-col mb-6">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-serif font-bold text-green-800 mb-2">{treatment.title}</h3>
              <p className={`text-base md:text-lg italic ${treatment.iconColor} font-serif`}>{treatment.sanskrit}</p>
            </div>
            
            <p className="text-gray-700 mb-6 md:mb-8 text-base md:text-lg leading-relaxed">{treatment.description}</p>
            
            <button 
              onClick={handleClick}
              className={`inline-flex items-center px-6 py-3 ${treatment.iconColor.replace('text-', 'bg-').replace('-600', '-600')} hover:${treatment.iconColor.replace('text-', 'bg-').replace('-600', '-700')} text-white rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${!treatment.path ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={!treatment.path}
            >
              {treatment.path ? 'Learn More' : 'Coming Soon'}
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TreatmentCard;