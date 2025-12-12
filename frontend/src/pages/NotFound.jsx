import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  FaHome, 
  FaSearch, 
  FaArrowLeft, 
  FaExclamationTriangle,
  FaRocket,
  FaLightbulb,
  FaQuestionCircle,
  FaEnvelope,
  FaPhone,
  FaGraduationCap,
  FaRedo,
  FaShareAlt
} from 'react-icons/fa';

const NotFound = () => {
  const [countdown, setCountdown] = useState(10);
  const [isAnimated, setIsAnimated] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showParticles, setShowParticles] = useState(true);
  const [currentUrl, setCurrentUrl] = useState('');
  const navigate = useNavigate();

  // Get current URL for display
  useEffect(() => {
    setCurrentUrl(window.location.pathname);
  }, []);

  // Auto redirect countdown
  useEffect(() => {
    setIsAnimated(true);
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          navigate('/');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  const handleRefresh = () => {
    window.location.reload();
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'CareerBox - Page Not Found',
          text: 'Check out CareerBox for career development!',
          url: window.location.origin,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.origin);
      alert('Link copied to clipboard!');
    }
  };

  // Generate particles
  const generateParticles = () => {
    const particles = [];
    for (let i = 0; i < 20; i++) {
      particles.push(
        <div
          key={i}
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 6}s`,
            animationDuration: `${6 + Math.random() * 4}s`
          }}
        />
      );
    }
    return particles;
  };

  const quickLinks = [
    { name: 'Home', path: '/', icon: FaHome, color: 'text-blue-600' },
    { name: 'Courses', path: '/courses', icon: FaGraduationCap, color: 'text-green-600' },
    { name: 'About Us', path: '/about', icon: FaLightbulb, color: 'text-purple-600' },
    { name: 'Contact', path: '/contact', icon: FaEnvelope, color: 'text-red-600' },
  ];

  const helpfulResources = [
    {
      title: 'Browse Courses',
      description: 'Explore our wide range of professional courses',
      path: '/courses',
      icon: FaGraduationCap,
      color: 'bg-blue-50 text-blue-600 border-blue-200'
    },
    {
      title: 'Career Guidance',
      description: 'Get personalized career advice from experts',
      path: '/career-guidance',
      icon: FaRocket,
      color: 'bg-green-50 text-green-600 border-green-200'
    },
    {
      title: 'Help Center',
      description: 'Find answers to frequently asked questions',
      path: '/help',
      icon: FaQuestionCircle,
      color: 'bg-purple-50 text-purple-600 border-purple-200'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center px-4 py-8">
      <div className="max-w-6xl mx-auto text-center">
        {/* Main 404 Section */}
        <div className={`transform transition-all duration-1000 ${isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {/* Current URL Display */}
          <div className="mb-4">
            <div className="inline-block bg-red-50 border border-red-200 rounded-lg px-4 py-2">
              <span className="text-red-600 font-mono text-sm">
                {window.location.origin}<span className="text-red-800 font-bold">{currentUrl}</span>
              </span>
            </div>
          </div>

          {/* 404 Number with Animation */}
          <div className="relative mb-8">
            <h1 className="gradient-text text-8xl md:text-9xl lg:text-[12rem] font-black animate-float">
              404
            </h1>
            <div className="absolute inset-0 text-8xl md:text-9xl lg:text-[12rem] font-black text-gray-200 -z-10 blur-sm">
              404
            </div>
          </div>

          {/* Error Icon */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <FaExclamationTriangle className="text-white text-3xl" />
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full animate-ping"></div>
            </div>
          </div>

          {/* Main Message */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Oops! Page Not Found
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            The page you're looking for seems to have taken a different career path. 
            Don't worry, we'll help you get back on track to success!
          </p>

          {/* Auto Redirect Notice */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8 max-w-md mx-auto">
            <p className="text-blue-800 font-medium">
              Redirecting to homepage in{' '}
              <span className="inline-block w-8 h-8 bg-blue-600 text-white rounded-full text-sm font-bold leading-8 mx-1">
                {countdown}
              </span>
              seconds
            </p>
          </div>
        </div>

        {/* Search Section */}
        <div className={`transform transition-all duration-1000 delay-300 ${isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} mb-12`}>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Looking for something specific?
          </h3>
          <form onSubmit={handleSearch} className="max-w-md mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search courses, careers, or topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 pr-12 text-gray-700 bg-white border-2 border-gray-200 rounded-full focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-100 transition-all duration-300 shadow-lg"
              />
              <button
                type="submit"
                className="absolute right-2 top-2 bottom-2 px-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center"
              >
                <FaSearch className="text-sm" />
              </button>
            </div>
          </form>
        </div>

        {/* Quick Navigation Links */}
        <div className={`transform transition-all duration-1000 delay-500 ${isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} mb-12`}>
          <h3 className="text-xl font-semibold text-gray-800 mb-6">
            Quick Navigation
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {quickLinks.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <link.icon className={`text-3xl ${link.color} mb-3 group-hover:scale-110 transition-transform duration-300`} />
                <p className="font-medium text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                  {link.name}
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/* Helpful Resources */}
        <div className={`transform transition-all duration-1000 delay-700 ${isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} mb-12`}>
          <h3 className="text-xl font-semibold text-gray-800 mb-6">
            Helpful Resources
          </h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {helpfulResources.map((resource, index) => (
              <Link
                key={index}
                to={resource.path}
                className={`group p-6 rounded-xl border-2 ${resource.color} hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}
              >
                <resource.icon className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h4 className="font-bold text-lg mb-2 group-hover:underline">
                  {resource.title}
                </h4>
                <p className="text-sm opacity-80">
                  {resource.description}
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className={`transform transition-all duration-1000 delay-900 ${isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} flex flex-col sm:flex-row gap-4 justify-center items-center`}>
          <Link
            to="/"
            className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl flex items-center gap-3 hover-lift"
          >
            <FaHome className="group-hover:scale-110 transition-transform duration-300" />
            Go to Homepage
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="group bg-white text-gray-700 px-8 py-4 rounded-full font-semibold border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg flex items-center gap-3 hover-lift"
          >
            <FaArrowLeft className="group-hover:scale-110 transition-transform duration-300" />
            Go Back
          </button>
          
          <button
            onClick={handleRefresh}
            className="group bg-green-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg flex items-center gap-3 hover-lift"
          >
            <FaRedo className="group-hover:scale-110 transition-transform duration-300" />
            Refresh Page
          </button>
          
          <button
            onClick={handleShare}
            className="group bg-orange-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-orange-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg flex items-center gap-3 hover-lift"
          >
            <FaShareAlt className="group-hover:scale-110 transition-transform duration-300" />
            Share
          </button>
        </div>

        {/* Contact Support */}
        <div className={`transform transition-all duration-1000 delay-1100 ${isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} mt-16 pt-8 border-t border-gray-200`}>
          <h4 className="text-lg font-semibold text-gray-800 mb-4">
            Still need help?
          </h4>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/contact"
              className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors duration-300"
            >
              <FaEnvelope />
              Contact Support
            </Link>
            <span className="hidden sm:block text-gray-400">|</span>
            <a
              href="tel:+1-555-123-4567"
              className="flex items-center gap-2 text-green-600 hover:text-green-700 font-medium transition-colors duration-300"
            >
              <FaPhone />
              Call Us: +1 (555) 123-4567
            </a>
          </div>
        </div>

        {/* Footer Message */}
        <div className={`transform transition-all duration-1000 delay-1300 ${isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} mt-8`}>
          <p className="text-sm text-gray-500">
            © 2025 CareerBox. Helping you navigate your career journey, even when you're lost.
          </p>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-2000"></div>
        
        {/* Animated Particles */}
        {showParticles && (
          <div className="particles">
            {generateParticles()}
          </div>
        )}
      </div>
      
      {/* Particle Toggle Button */}
      <button
        onClick={() => setShowParticles(!showParticles)}
        className="fixed bottom-4 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300 z-50"
        title={showParticles ? 'Hide Particles' : 'Show Particles'}
      >
        ✨
      </button>
    </div>
  );
};

export default NotFound;