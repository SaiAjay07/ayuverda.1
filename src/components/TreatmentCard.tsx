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
}

const TreatmentCard: React.FC<Props> = ({ treatment }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (treatment.path) {
      navigate(treatment.path);
    }
  };

  return (
    <div 
      className={`group rounded-xl overflow-hidden shadow-lg border ${treatment.borderColor} ${treatment.color} transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer`}
      onClick={handleClick}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={treatment.image} 
          alt={treatment.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300"></div>
      </div>
      
      <div className="p-6">
        <div className="flex flex-col mb-4">
          <h3 className="text-xl font-semibold text-green-800">{treatment.title}</h3>
          <p className={`text-sm italic ${treatment.iconColor}`}>{treatment.sanskrit}</p>
        </div>
        
        <p className="text-gray-700 mb-6">{treatment.description}</p>
        
        <span 
          className={`inline-flex items-center text-sm font-medium ${treatment.iconColor} hover:underline`}
        >
          Learn more
          <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </span>
      </div>
    </div>
  );
};

export default TreatmentCard