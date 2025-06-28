import React from 'react';

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
        
        {/* Full Width Get in Touch Form */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-xl p-8 md:p-12">
            <h3 className="text-3xl font-serif font-semibold text-green-800 mb-8 text-center">Get in Touch</h3>
            
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                    placeholder="Your email"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                    placeholder="Your phone number"
                  />
                </div>
                <div>
                  <label htmlFor="treatment" className="block text-sm font-medium text-gray-700 mb-2">Treatment Interest</label>
                  <select 
                    id="treatment" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select a treatment</option>
                    <option value="musculoskeletal">Musculoskeletal Disorders</option>
                    <option value="respiratory">Respiratory Ailments</option>
                    <option value="digestive">Digestive Disorders</option>
                    <option value="womens">Women's Health</option>
                    <option value="skin">Skin Conditions</option>
                    <option value="neurological">Neurological Concerns</option>
                    <option value="metabolic">Metabolic & Lifestyle</option>
                    <option value="consultation">General Consultation</option>
                  </select>
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="preferred-time" className="block text-sm font-medium text-gray-700 mb-2">Preferred Appointment Time</label>
                <input 
                  type="datetime-local" 
                  id="preferred-time" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                />
              </div>
              
              <div className="mb-8">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Your Message</label>
                <textarea 
                  id="message" 
                  rows={6} 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Please describe your health concerns, symptoms, or questions. The more details you provide, the better we can assist you..."
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-green-700 hover:bg-green-800 text-white py-4 rounded-lg transition-all duration-300 font-semibold text-lg transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
              >
                Send Message & Schedule Consultation
              </button>
            </form>
            
            {/* Map positioned under the form */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h4 className="text-2xl font-serif font-semibold text-green-800 mb-6 text-center">Visit Our Clinic</h4>
              <div className="h-80 rounded-xl overflow-hidden shadow-xl">
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
      </div>
    </section>
  );
};

export default Contact;