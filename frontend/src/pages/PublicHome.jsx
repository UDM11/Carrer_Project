import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaPlay, FaArrowRight, FaCheck, FaStar, FaUsers, FaGlobe, 
  FaChevronLeft, FaChevronRight, FaQuoteLeft, FaAward,
  FaRocket, FaShieldAlt, FaClock, FaHandshake
} from 'react-icons/fa';
import HeroSection from '../components/HeroSection';

const PublicHome = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentService, setCurrentService] = useState(0);
  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Auto-rotate services
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentService((prev) => (prev + 1) % services.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      title: "Find Talent",
      description: "Discover skilled professionals from around the world",
      icon: "🎯",
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "Learn Skills",
      description: "Master new technologies with expert guidance",
      icon: "📚",
      color: "from-green-500 to-teal-600"
    },
    {
      title: "Build Projects",
      description: "Work on real-world projects and gain experience",
      icon: "🚀",
      color: "from-orange-500 to-red-600"
    },
    {
      title: "Get Hired",
      description: "Connect with top companies worldwide",
      icon: "💼",
      color: "from-purple-500 to-pink-600"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Software Engineer at Google",
      content: "CareerBox helped me transition from marketing to tech. The mentorship program was incredible!",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      rating: 5
    },
    {
      name: "Ahmed Hassan",
      role: "Data Scientist at Microsoft",
      content: "The global network and quality of trainers exceeded my expectations. Highly recommended!",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5
    },
    {
      name: "Maria Garcia",
      role: "UX Designer at Apple",
      content: "Found my dream job through CareerBox. The platform connects you with real opportunities.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5
    }
  ];

  const stats = [
    { number: "2M+", label: "Active Users", icon: FaUsers },
    { number: "50+", label: "Countries", icon: FaGlobe },
    { number: "10K+", label: "Success Stories", icon: FaAward },
    { number: "95%", label: "Job Placement Rate", icon: FaRocket }
  ];

  const features = [
    {
      icon: FaRocket,
      title: "Fast Track Your Career",
      description: "Accelerate your professional growth with personalized learning paths"
    },
    {
      icon: FaShieldAlt,
      title: "Verified Professionals",
      description: "Connect with vetted trainers and employers from top companies"
    },
    {
      icon: FaClock,
      title: "Flexible Learning",
      description: "Learn at your own pace with 24/7 access to resources"
    },
    {
      icon: FaHandshake,
      title: "Global Network",
      description: "Join a worldwide community of professionals and opportunities"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <HeroSection />

      {/* Animated Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-700 relative overflow-hidden"
      >

        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Professionals <span className="text-blue-400">Worldwide</span>
            </h2>
            <p className="text-blue-100 text-lg">Join our growing community of learners and achievers</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center text-white transform hover:scale-110 transition-all duration-300 group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <stat.icon className="text-5xl mx-auto mb-4" />
                <div className="text-4xl md:text-5xl font-bold mb-2 text-white">
                  {stat.number}
                </div>
                <div className="text-blue-100 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Showcase */}
      <section className="py-20 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Everything You Need to <span className="text-blue-600">Succeed</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From learning new skills to landing your dream job, we've got you covered
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 hover:shadow-xl ${
                    currentService === index 
                      ? 'bg-white shadow-2xl border-l-4 border-blue-500' 
                      : 'bg-white/50 hover:bg-white shadow-lg'
                  }`}
                  onClick={() => setCurrentService(index)}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`text-4xl p-4 rounded-full bg-gradient-to-r ${service.color} text-white transition-transform duration-300 hover:scale-110`}>
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative">
              <div className="bg-white rounded-3xl shadow-2xl p-8 transition-all duration-300 hover:shadow-3xl">
                <div className={`h-64 rounded-2xl bg-gradient-to-r ${services[currentService].color} flex items-center justify-center text-8xl text-white mb-6`}>
                  {services[currentService].icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-gradient-animate">{services[currentService].title}</h3>
                <p className="text-gray-600 mb-6">{services[currentService].description}</p>
                <Link 
                  to="/signup"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 hover-glow btn-bounce"
                >
                  Get Started <FaArrowRight className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose <span className="text-blue-600">CareerBox</span>?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="p-8 bg-white rounded-2xl shadow-lg border border-gray-100"
              >
                <div className="text-blue-600 mb-6">
                  <feature.icon className="text-4xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Success <span className="text-blue-600">Stories</span>
            </h2>
            <p className="text-xl text-gray-600">Hear from professionals who transformed their careers</p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
              <FaQuoteLeft className="absolute top-6 left-6 text-4xl text-blue-200" />
              
              <div className="text-center">
                <img 
                  src={testimonials[currentTestimonial].avatar}
                  alt={testimonials[currentTestimonial].name}
                  className="w-20 h-20 rounded-full mx-auto mb-6 border-4 border-blue-100"
                />
                
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-xl" />
                  ))}
                </div>
                
                <p className="text-xl text-gray-700 mb-6 italic">
                  "{testimonials[currentTestimonial].content}"
                </p>
                
                <div>
                  <h4 className="text-lg font-bold text-gray-900">{testimonials[currentTestimonial].name}</h4>
                  <p className="text-blue-600">{testimonials[currentTestimonial].role}</p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <button 
              onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg"
            >
              <FaChevronLeft className="text-blue-600" />
            </button>
            
            <button 
              onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg"
            >
              <FaChevronRight className="text-blue-600" />
            </button>

            {/* Dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full ${
                    currentTestimonial === index ? 'bg-blue-600 w-8' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700"
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Career?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join millions of professionals who are already building their future with CareerBox
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/signup"
              className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 flex items-center"
            >
              Start Your Journey
              <FaArrowRight className="ml-2" />
            </Link>
            
            <button className="flex items-center px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600">
              <FaPlay className="mr-2" />
              Watch Demo
            </button>
          </div>

          <div className="mt-12 flex flex-wrap justify-center items-center gap-8 opacity-75">
            <div className="flex items-center text-white">
              <FaCheck className="mr-2" />
              Free to join
            </div>
            <div className="flex items-center text-white">
              <FaCheck className="mr-2" />
              No hidden fees
            </div>
            <div className="flex items-center text-white">
              <FaCheck className="mr-2" />
              Cancel anytime
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PublicHome;