import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, Mic, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    treatment: '',
    preferredTime: '',
    message: ''
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isListening, setIsListening] = useState(false);

  const treatments = [
    'Musculoskeletal Disorders',
    'Respiratory Ailments', 
    'Digestive Disorders',
    "Women's Health",
    'Skin Conditions',
    'Neurological Concerns',
    'Metabolic & Lifestyle',
    'General Consultation'
  ];

  const validatePhone = (phone: string) => {
    const phoneRegex = /^[+]?[\d\s\-\(\)]{10,}$/;
    return phoneRegex.test(phone);
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Real-time validation
    if (name === 'phone' && value) {
      if (!validatePhone(value)) {
        setErrors(prev => ({ ...prev, phone: 'Please enter a valid phone number' }));
      } else {
        setErrors(prev => ({ ...prev, phone: '' }));
      }
    }
    
    if (name === 'email' && value) {
      if (!validateEmail(value)) {
        setErrors(prev => ({ ...prev, email: 'Please enter a valid email address' }));
      } else {
        setErrors(prev => ({ ...prev, email: '' }));
      }
    }
  };

  const startVoiceInput = () => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition;
      const recognition = new SpeechRecognition();
      
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = 'en-US';
      
      setIsListening(true);
      
      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setFormData(prev => ({ ...prev, message: prev.message + ' ' + transcript }));
        setIsListening(false);
      };
      
      recognition.onerror = () => {
        setIsListening(false);
      };
      
      recognition.onend = () => {
        setIsListening(false);
      };
      
      recognition.start();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Validate form
    const newErrors: { [key: string]: string } = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.treatment) newErrors.treatment = 'Please select a treatment';
    if (!formData.message) newErrors.message = 'Please describe your health concerns';
    
    if (formData.phone && !validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    
    if (formData.email && !validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    setErrors(newErrors);
    
    if (Object.keys(newErrors).length === 0) {
      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false);
        setShowSuccess(true);
        setFormData({
          name: '',
          phone: '',
          email: '',
          treatment: '',
          preferredTime: '',
          message: ''
        });
        
        setTimeout(() => {
          setShowSuccess(false);
        }, 5000);
      }, 2000);
    } else {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-green-50 via-white to-amber-50 relative overflow-hidden">
      {/* Floating Ayurvedic Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-10 text-6xl opacity-10 animate-float">🌿</div>
        <div className="absolute top-32 right-20 text-4xl opacity-10 animate-bounce" style={{ animationDelay: '1s' }}>🕉️</div>
        <div className="absolute bottom-20 left-20 text-5xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }}>🧘‍♀️</div>
        <div className="absolute bottom-32 right-10 text-4xl opacity-10 animate-float" style={{ animationDelay: '3s' }}>🌺</div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-green-800 mb-4">
            Get in Touch for Your Personalized Healing Journey
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-amber-500 to-green-500 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-700 text-lg">
            Begin your path to wellness with a personalized consultation. Our experienced practitioners are here to guide you.
          </p>
        </div>
        
        {/* Enhanced Contact Form */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:p-12 border border-white/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2 transition-colors group-focus-within:text-green-600">
                    Full Name *
                  </label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border-2 rounded-xl transition-all duration-300 focus:ring-4 focus:ring-green-200 focus:border-green-500 focus:scale-105 ${
                      errors.name ? 'border-red-400 bg-red-50' : 'border-gray-300 hover:border-green-400'
                    }`}
                    placeholder="Enter your full name"
                  />
                  {errors.name && (
                    <div className="flex items-center mt-2 text-red-600 text-sm animate-fade-in">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.name}
                    </div>
                  )}
                </div>
                
                <div className="group">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 transition-colors group-focus-within:text-green-600">
                    Email Address *
                  </label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border-2 rounded-xl transition-all duration-300 focus:ring-4 focus:ring-green-200 focus:border-green-500 focus:scale-105 ${
                      errors.email ? 'border-red-400 bg-red-50' : 'border-gray-300 hover:border-green-400'
                    }`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <div className="flex items-center mt-2 text-red-600 text-sm animate-fade-in">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.email}
                    </div>
                  )}
                </div>
              </div>
              
              {/* Phone and Treatment Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2 transition-colors group-focus-within:text-green-600">
                    Phone Number *
                  </label>
                  <input 
                    type="tel" 
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border-2 rounded-xl transition-all duration-300 focus:ring-4 focus:ring-green-200 focus:border-green-500 focus:scale-105 ${
                      errors.phone ? 'border-red-400 bg-red-50' : formData.phone && validatePhone(formData.phone) ? 'border-green-400 bg-green-50' : 'border-gray-300 hover:border-green-400'
                    }`}
                    placeholder="+91 98765 43210"
                    inputMode="numeric"
                  />
                  {errors.phone && (
                    <div className="flex items-center mt-2 text-red-600 text-sm animate-fade-in">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.phone}
                    </div>
                  )}
                  {formData.phone && validatePhone(formData.phone) && !errors.phone && (
                    <div className="flex items-center mt-2 text-green-600 text-sm animate-fade-in">
                      <CheckCircle className="w-4 h-4 mr-1" />
                      Valid phone number
                    </div>
                  )}
                </div>
                
                <div className="group">
                  <label htmlFor="treatment" className="block text-sm font-medium text-gray-700 mb-2 transition-colors group-focus-within:text-green-600">
                    Treatment Interest *
                  </label>
                  <select 
                    id="treatment"
                    name="treatment"
                    value={formData.treatment}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border-2 rounded-xl transition-all duration-300 focus:ring-4 focus:ring-green-200 focus:border-green-500 focus:scale-105 ${
                      errors.treatment ? 'border-red-400 bg-red-50' : 'border-gray-300 hover:border-green-400'
                    }`}
                  >
                    <option value="">Select a treatment</option>
                    {treatments.map((treatment) => (
                      <option key={treatment} value={treatment}>{treatment}</option>
                    ))}
                  </select>
                  {errors.treatment && (
                    <div className="flex items-center mt-2 text-red-600 text-sm animate-fade-in">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.treatment}
                    </div>
                  )}
                </div>
              </div>
              
              {/* Preferred Time */}
              <div className="group">
                <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-2 transition-colors group-focus-within:text-green-600">
                  Preferred Appointment Time
                </label>
                <input 
                  type="datetime-local" 
                  id="preferredTime"
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl transition-all duration-300 focus:ring-4 focus:ring-green-200 focus:border-green-500 focus:scale-105 hover:border-green-400"
                />
              </div>
              
              {/* Message with Voice Input */}
              <div className="group">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2 transition-colors group-focus-within:text-green-600">
                  Your Message *
                </label>
                <div className="relative">
                  <textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6} 
                    className={`w-full px-4 py-3 pr-12 border-2 rounded-xl transition-all duration-300 focus:ring-4 focus:ring-green-200 focus:border-green-500 focus:scale-105 resize-none ${
                      errors.message ? 'border-red-400 bg-red-50' : 'border-gray-300 hover:border-green-400'
                    }`}
                    placeholder="Please describe your health concerns, symptoms, or questions. The more details you provide, the better we can assist you..."
                  ></textarea>
                  <button
                    type="button"
                    onClick={startVoiceInput}
                    className={`absolute right-3 top-3 p-2 rounded-lg transition-all duration-300 ${
                      isListening 
                        ? 'bg-red-500 text-white animate-pulse' 
                        : 'bg-gray-100 hover:bg-green-100 text-gray-600 hover:text-green-600'
                    }`}
                    title="Voice input"
                  >
                    <Mic className="w-5 h-5" />
                  </button>
                </div>
                {errors.message && (
                  <div className="flex items-center mt-2 text-red-600 text-sm animate-fade-in">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.message}
                  </div>
                )}
                {isListening && (
                  <div className="flex items-center mt-2 text-blue-600 text-sm animate-fade-in">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse mr-2"></div>
                    Listening... Speak now
                  </div>
                )}
              </div>
              
              {/* Submit Button */}
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white py-4 rounded-xl transition-all duration-300 font-semibold text-lg transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                    Sending Message...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Send Message & Schedule Consultation
                  </>
                )}
              </button>
            </form>
            
            {/* Success Message */}
            {showSuccess && (
              <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50 backdrop-blur-sm">
                <div className="bg-white rounded-2xl p-8 max-w-md mx-4 shadow-2xl animate-bounce">
                  <div className="text-center">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-green-800 mb-2">Message Sent Successfully!</h3>
                    <p className="text-gray-600 mb-4">
                      Thank you for reaching out. We'll contact you within 24 hours to schedule your consultation.
                    </p>
                    <button
                      onClick={() => setShowSuccess(false)}
                      className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors duration-300"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            )}
            
            {/* Contact Information */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h4 className="text-2xl font-serif font-semibold text-green-800 mb-6 text-center">Visit Our Clinic</h4>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center group">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors duration-300">
                    <MapPin className="w-8 h-8 text-green-600" />
                  </div>
                  <h5 className="font-semibold text-gray-800 mb-2">Address</h5>
                  <p className="text-gray-600 text-sm">
                    1st floor, G94C+WWP BLOCK-1<br />
                    LAKSHMI NARAYANA ESTATES<br />
                    Miyapur, Hyderabad, Telangana 500049
                  </p>
                </div>
                
                <div className="text-center group">
                  <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-200 transition-colors duration-300">
                    <Phone className="w-8 h-8 text-amber-600" />
                  </div>
                  <h5 className="font-semibold text-gray-800 mb-2">Phone</h5>
                  <p className="text-gray-600">+91-7842207799</p>
                </div>
                
                <div className="text-center group">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                    <Mail className="w-8 h-8 text-blue-600" />
                  </div>
                  <h5 className="font-semibold text-gray-800 mb-2">Email</h5>
                  <p className="text-gray-600">ayurparishkarkendra@gmail.com</p>
                </div>
              </div>
              
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