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
        
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Expanded Get in Touch Form */}
          <div className="lg:w-2/3 bg-white rounded-xl shadow-xl p-8">
            <h3 className="text-2xl font-serif font-semibold text-green-800 mb-6">Get in Touch</h3>
            
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Your email"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Your phone number"
                  />
                </div>
                <div>
                  <label htmlFor="treatment" className="block text-sm font-medium text-gray-700 mb-1">Treatment Interest</label>
                  <select 
                    id="treatment" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
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
                <label htmlFor="preferred-time" className="block text-sm font-medium text-gray-700 mb-1">Preferred Appointment Time</label>
                <input 
                  type="datetime-local" 
                  id="preferred-time" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                <textarea 
                  id="message" 
                  rows={5} 
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Please describe your health concerns or questions..."
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-green-700 hover:bg-green-800 text-white py-4 rounded-md transition-colors duration-300 font-semibold text-lg"
              >
                Send Message
              </button>
            </form>
            
            {/* Map positioned under the form */}
            <div className="mt-8">
              <h4 className="text-xl font-serif font-semibold text-green-800 mb-4">Visit Our Clinic</h4>
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
          
          {/* Right sidebar with additional info */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-xl shadow-xl p-8 mb-8">
              <h3 className="text-2xl font-serif font-semibold text-green-800 mb-6">Why Choose Us?</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-full mr-4 flex-shrink-0">
                    <span className="text-green-600 text-xl">🏥</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-green-800 mb-1">20+ Years Experience</h4>
                    <p className="text-gray-600 text-sm">Established in 2004 with authentic Ayurvedic practices</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-full mr-4 flex-shrink-0">
                    <span className="text-green-600 text-xl">👨‍⚕️</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-green-800 mb-1">Expert Physician</h4>
                    <p className="text-gray-600 text-sm">Dr. L. Haresh with 30+ years of experience</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-full mr-4 flex-shrink-0">
                    <span className="text-green-600 text-xl">🌿</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-green-800 mb-1">Authentic Medicines</h4>
                    <p className="text-gray-600 text-sm">Quality herbs from Kottakal Arya Vaidya Sala</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-full mr-4 flex-shrink-0">
                    <span className="text-green-600 text-xl">🎯</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-green-800 mb-1">Personalized Care</h4>
                    <p className="text-gray-600 text-sm">Treatments tailored to your unique constitution</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-xl p-8 text-white">
              <h3 className="text-xl font-serif font-semibold mb-4">Quick Contact</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="text-lg mr-3">📞</span>
                  <span className="text-sm">+91-7842207799</span>
                </div>
                <div className="flex items-center">
                  <span className="text-lg mr-3">✉️</span>
                  <span className="text-sm">ayurparishkarkendra@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <span className="text-lg mr-3">🕒</span>
                  <span className="text-sm">Mon-Sat: 10AM-7PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;