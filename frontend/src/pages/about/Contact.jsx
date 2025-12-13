import React, { useState } from 'react';
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaClock,
  FaLinkedin, 
  FaTwitter, 
  FaFacebook, 
  FaInstagram, 
  FaYoutube,
  FaComments,
  FaQuestionCircle,
  FaUsers,
  FaPaperPlane
} from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    if (!formData.subject.trim()) errors.subject = 'Subject is required';
    if (!formData.message.trim()) errors.message = 'Message is required';
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    
    if (Object.keys(errors).length === 0) {
      // Here you would integrate with EmailJS or your backend API
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
      // Reset form after submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      // Reset submission status after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <div className="contact- bg-gray-50">
      {/* 1. Hero Section */}
      <section className="hero-section bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch With Us</h1>
          <p className="text-xl max-w-2xl mx-auto">
            We'd love to hear from you. Whether you're a learner, mentor, or partner, our team is here to help.
          </p>
          <div className="mt-10 flex justify-center">
            <img 
              src="https://via.placeholder.com/600x300?text=Communication+Illustration" 
              alt="Communication illustration" 
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Main Content - 2-column layout */}
      <div className="container mx-auto max-w-6xl py-16 px-4">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Column - Contact Form */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold mb-8">Send Us a Message</h2>
            
            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
              {isSubmitted && (
                <div className="bg-green-100 text-green-700 p-4 rounded-md mb-6">
                  Thank you for your message! We'll get back to you soon.
                </div>
              )}
              
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    formErrors.name ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Your full name"
                />
                {formErrors.name && (
                  <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>
                )}
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    formErrors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="your.email@example.com"
                />
                {formErrors.email && (
                  <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
                )}
              </div>
              
              <div className="mb-6">
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                  Phone Number (Optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="+1 (234) 567-8900"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    formErrors.subject ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="What is this regarding?"
                />
                {formErrors.subject && (
                  <p className="text-red-500 text-sm mt-1">{formErrors.subject}</p>
                )}
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    formErrors.message ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="How can we help you?"
                ></textarea>
                {formErrors.message && (
                  <p className="text-red-500 text-sm mt-1">{formErrors.message}</p>
                )}
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300 flex items-center justify-center"
              >
                <FaPaperPlane className="mr-2" />
                Send Message
              </button>
            </form>
          </div>
          
          {/* Right Column - Contact Information */}
          <div className="lg:w-1/2">
            {/* 3. Contact Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4 text-blue-600">
                    <FaMapMarkerAlt className="text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Office Address</h3>
                    <p className="text-gray-600">123 Education Street<br />San Francisco, CA 94105<br />United States</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4 text-blue-600">
                    <FaEnvelope className="text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                    <p className="text-gray-600">support@careerdev.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4 text-blue-600">
                    <FaPhone className="text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Phone Number</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4 text-blue-600">
                    <FaClock className="text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Business Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 9am - 6pm PST<br />Saturday: 10am - 4pm PST<br />Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* 4. Map Integration */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Find Us</h2>
              <div className="bg-gray-200 h-64 rounded-lg overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100940.14245968236!2d-122.43759999999999!3d37.75769999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1653000000000!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location"
                ></iframe>
              </div>
            </div>
            
            {/* 5. Social Media Links */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Follow Us</h2>
              <p className="text-gray-600 mb-4">Stay connected with us on social media</p>
              <div className="flex space-x-4">
                <a href="#" className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition duration-300">
                  <FaLinkedin className="text-xl" />
                </a>
                <a href="#" className="bg-blue-400 text-white p-3 rounded-full hover:bg-blue-500 transition duration-300">
                  <FaTwitter className="text-xl" />
                </a>
                <a href="#" className="bg-blue-800 text-white p-3 rounded-full hover:bg-blue-900 transition duration-300">
                  <FaFacebook className="text-xl" />
                </a>
                <a href="#" className="bg-pink-600 text-white p-3 rounded-full hover:bg-pink-700 transition duration-300">
                  <FaInstagram className="text-xl" />
                </a>
                <a href="#" className="bg-red-600 text-white p-3 rounded-full hover:bg-red-700 transition duration-300">
                  <FaYoutube className="text-xl" />
                </a>
              </div>
            </div>
            
            {/* 6. Support Options */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Support Options</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <a href="#" className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 flex items-center">
                  <FaQuestionCircle className="text-blue-600 text-2xl mr-3" />
                  <span>Help Center / FAQ</span>
                </a>
                <a href="#" className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 flex items-center">
                  <FaUsers className="text-blue-600 text-2xl mr-3" />
                  <span>Community Forum</span>
                </a>
                <a href="#" className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 flex items-center">
                  <FaComments className="text-blue-600 text-2xl mr-3" />
                  <span>Live Chat</span>
                </a>
              </div>
            </div>
            
            {/* 7. Partnerships & Collaborations */}
            <div className="bg-blue-50 p-6 rounded-lg">
              <h2 className="text-xl font-bold mb-3">Partnerships & Collaborations</h2>
              <p className="text-gray-600 mb-4">
                Interested in partnering with us? Reach out at{" "}
                <a href="mailto:partnerships@careerdev.com" className="text-blue-600 font-semibold">
                  partnerships@careerdev.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 8. Call to Action (CTA) */}
      <section className="cta-section bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">We're here to support your learning journey</h2>
          <p className="text-xl mb-10">Reach out today!</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition duration-300 mb-4 sm:mb-0">
              Explore Courses
            </button>
            <button className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:bg-opacity-10 transition duration-300">
              Join as Mentor
            </button>
            <button className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:bg-opacity-10 transition duration-300">
              Visit Help Center
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;