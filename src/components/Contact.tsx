import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-green-50 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg width="100%" height="100%" className="text-green-800">
          <pattern id="pattern-circles" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse">
            <circle id="pattern-circle" cx="10" cy="10" r="1.6257413380501518" fill="currentColor"></circle>
          </pattern>
          <rect id="rect" x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)"></rect>
        </svg>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-green-800 mb-4">Start Your Healing Journey Today</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-700">
            We're here to guide you on your path to wellness. Contact us to schedule a consultation or learn more about our treatments.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2 bg-white rounded-xl shadow-xl p-8 order-2 lg:order-1">
            <h3 className="text-2xl font-serif font-semibold text-green-800 mb-6">Get in Touch</h3>
            
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Your email"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Your phone number"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-green-700 hover:bg-green-800 text-white py-3 rounded-md transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
          
          <div className="lg:w-1/2 order-1 lg:order-2">
            <div className="bg-white rounded-xl shadow-xl p-8 mb-8">
              <h3 className="text-2xl font-serif font-semibold text-green-800 mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-amber-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-green-800">Address</h4>
                    <p className="text-gray-600">1st floor, G94C+WWP BLOCK-1, LAKSHMI NARAYANA ESTATES, 24, High Tension Line Rd, Nadigada Tanda, Miyapur, Hyderabad, Telangana 500049</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-amber-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-green-800">Phone</h4>
                    <p className="text-gray-600">+91-7842207799</p>
                    <p className="text-gray-600">+91-7842202255</p>
                    <p className="text-gray-600">040-42024933</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-amber-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-green-800">Email</h4>
                    <p className="text-gray-600">ayurparishkarkendra@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-amber-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-green-800">Clinic Hours</h4>
                    <p className="text-gray-600">Monday - Saturday: 10:00 AM - 7:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="h-64 rounded-xl overflow-hidden shadow-xl">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.5234567890123!2d78.3456789!3d17.4567890!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI3JzI0LjQiTiA3OMKwMjAnNDQuNCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;