import React from 'react';
import { Facebook, Instagram, Twitter, Leaf } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Leaf className="h-8 w-8 text-amber-500" />
              <span className="ml-2 text-xl font-serif font-semibold">
                Ayurvaidik Parishkar Kendra
              </span>
            </div>
            <p className="text-green-200 mb-6">
              Authentic Ayurvedic healing since 2004, dedicated to restoring balance and promoting wellness through traditional practices.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-amber-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-amber-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-amber-400 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-green-200 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-green-200 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#treatments" className="text-green-200 hover:text-white transition-colors">Treatments</a></li>
              <li><a href="#blog" className="text-green-200 hover:text-white transition-colors">Wellness Journal</a></li>
              <li><a href="#contact" className="text-green-200 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Treatments</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-green-200 hover:text-white transition-colors">Musculoskeletal Disorders</a></li>
              <li><a href="#" className="text-green-200 hover:text-white transition-colors">Skin Conditions</a></li>
              <li><a href="#" className="text-green-200 hover:text-white transition-colors">Neurological Concerns</a></li>
              <li><a href="#" className="text-green-200 hover:text-white transition-colors">Digestive Disorders</a></li>
              <li><a href="#" className="text-green-200 hover:text-white transition-colors">Women's Health</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <address className="not-italic text-green-200">
              <p className="mb-2">1st floor, G94C+WWP BLOCK-1</p>
              <p className="mb-2">LAKSHMI NARAYANA ESTATES</p>
              <p className="mb-2">Miyapur, Hyderabad, Telangana 500049</p>
              <p className="mb-2">Phone: +91-7842207799</p>
              <p>Email: ayurparishkarkendra@gmail.com</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-green-700 mt-12 pt-6 text-center text-green-300">
          <p>&copy; {new Date().getFullYear()} Ayurvaidik Parishkar Kendra. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;