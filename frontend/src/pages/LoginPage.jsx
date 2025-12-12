import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';
import { 
  FaEye, 
  FaEyeSlash, 
  FaGoogle, 
  FaFacebookF, 
  FaLinkedinIn,
  FaGithub,
  FaUser,
  FaLock,
  FaArrowRight,
  FaGraduationCap,
  FaShieldAlt,
  FaRocket,
  FaCheckCircle
} from 'react-icons/fa';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [isAnimated, setIsAnimated] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();
  const { login } = useUser();

  // Animation trigger
  useEffect(() => {
    setIsAnimated(true);
  }, []);

  // Carousel for features
  const features = [
    {
      icon: <FaGraduationCap className="text-4xl text-blue-600" />,
      title: "Learn from Experts",
      description: "Access courses from industry professionals worldwide"
    },
    {
      icon: <FaRocket className="text-4xl text-purple-600" />,
      title: "Boost Your Career",
      description: "Get certified and advance your professional journey"
    },
    {
      icon: <FaShieldAlt className="text-4xl text-green-600" />,
      title: "Secure Platform",
      description: "Your data is protected with enterprise-grade security"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % features.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [features.length]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Static user credentials for different roles
  const staticUsers = {
    'student@gmail.com': { password: 'student123', role: 'student', name: 'John Student' },
    'trainer@gmail.com': { password: 'trainer123', role: 'trainer', name: 'Sarah Trainer' },
    'company@gmail.com': { password: 'company123', role: 'company', name: 'Tech Corp' },
    'admin@gmail.com': { password: 'admin123', role: 'admin', name: 'Admin User' }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Check if user exists in static data
      const user = staticUsers[formData.email.toLowerCase()];
      
      if (!user) {
        setErrors({ general: 'User not found. Please check your email.' });
        return;
      }
      
      if (user.password !== formData.password) {
        setErrors({ general: 'Invalid password. Please try again.' });
        return;
      }
      
      // Use context login function
      login({
        email: formData.email,
        role: user.role,
        name: user.name
      });
      
      // Redirect based on role
      switch (user.role) {
        case 'student':
          navigate('/student');
          break;
        case 'trainer':
          navigate('/trainer');
          break;
        case 'company':
          navigate('/company');
          break;
        case 'admin':
          navigate('/admin');
          break;
        default:
          navigate('/');
      }
      
    } catch (error) {
      setErrors({ general: 'Login failed. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialLogin = (provider) => {
    console.log(`Login with ${provider}`);
    // Implement social login logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="flex flex-col lg:flex-row min-h-[600px]">
            
            {/* Left Side - Features Carousel */}
            <div className="lg:w-1/2 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 p-8 lg:p-12 flex flex-col justify-center relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full" style={{
                  backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.1) 2px, transparent 2px), radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.1) 2px, transparent 2px)`,
                  backgroundSize: '50px 50px',
                  backgroundPosition: '0 0, 25px 25px'
                }}></div>
              </div>
              
              {/* Logo */}
              <div className={`transform transition-all duration-1000 ${isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} mb-8`}>
                <Link to="/" className="flex items-center text-white text-2xl font-bold">
                  <FaGraduationCap className="text-3xl mr-3" />
                  Career<span className="text-yellow-300">Box</span>
                </Link>
              </div>

              {/* Welcome Message */}
              <div className={`transform transition-all duration-1000 delay-300 ${isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} mb-8`}>
                <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                  Welcome Back!
                </h1>
                <p className="text-blue-100 text-lg leading-relaxed">
                  Continue your learning journey and unlock new career opportunities with our global platform.
                </p>
              </div>

              {/* Features Carousel */}
              <div className={`transform transition-all duration-1000 delay-500 ${isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} relative`}>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="flex items-center mb-4">
                    {features[currentSlide].icon}
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {features[currentSlide].title}
                      </h3>
                      <p className="text-blue-100">
                        {features[currentSlide].description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Carousel Indicators */}
                  <div className="flex space-x-2 mt-6">
                    {features.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          index === currentSlide ? 'bg-white' : 'bg-white/30'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className={`transform transition-all duration-1000 delay-700 ${isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} mt-8 grid grid-cols-3 gap-4`}>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">50K+</div>
                  <div className="text-blue-100 text-sm">Students</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">1000+</div>
                  <div className="text-blue-100 text-sm">Courses</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">50+</div>
                  <div className="text-blue-100 text-sm">Countries</div>
                </div>
              </div>
            </div>

            {/* Right Side - Login Form */}
            <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
              <div className={`transform transition-all duration-1000 delay-200 ${isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                
                {/* Form Header */}
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-800 mb-2">Sign In</h2>
                  <p className="text-gray-600">Enter your credentials to access your account</p>
                </div>

                {/* Social Login Buttons */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <button
                    onClick={() => handleSocialLogin('google')}
                    className="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-xl hover:bg-gray-50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg group relative overflow-hidden"
                  >
                    <FaGoogle className="text-red-500 mr-2 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-gray-700 font-medium">Google</span>
                  </button>
                  <button
                    onClick={() => handleSocialLogin('linkedin')}
                    className="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-xl hover:bg-gray-50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg group relative overflow-hidden"
                  >
                    <FaLinkedinIn className="text-blue-600 mr-2 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-gray-700 font-medium">LinkedIn</span>
                  </button>
                </div>

                {/* Divider */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-white text-gray-500">Or continue with email</span>
                  </div>
                </div>

                {/* Login Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  {errors.general && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-600 text-sm">
                      {errors.general}
                    </div>
                  )}

                  {/* Email Field */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Email Address</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <FaUser className="text-gray-400" />
                      </div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full pl-12 pr-4 py-4 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ${
                          errors.email ? 'border-red-300 bg-red-50' : 'border-gray-300 bg-white'
                        }`}
                        placeholder="Enter your email"
                      />
                    </div>
                    {errors.email && (
                      <p className="text-red-500 text-sm flex items-center">
                        <span className="mr-1">⚠️</span> {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Password Field */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Password</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <FaLock className="text-gray-400" />
                      </div>
                      <input
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        className={`w-full pl-12 pr-12 py-4 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ${
                          errors.password ? 'border-red-300 bg-red-50' : 'border-gray-300 bg-white'
                        }`}
                        placeholder="Enter your password"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 transition-colors duration-300"
                      >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                      </button>
                    </div>
                    {errors.password && (
                      <p className="text-red-500 text-sm flex items-center">
                        <span className="mr-1">⚠️</span> {errors.password}
                      </p>
                    )}
                  </div>

                  {/* Remember Me & Forgot Password */}
                  <div className="flex items-center justify-between">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="rememberMe"
                        checked={formData.rememberMe}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 transition-colors duration-300"
                      />
                      <span className="ml-2 text-sm text-gray-600">Remember me</span>
                    </label>
                    <Link
                      to="/forgot-password"
                      className="text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors duration-300"
                    >
                      Forgot password?
                    </Link>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 focus:ring-4 focus:ring-blue-200 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -translate-x-full group-hover:translate-x-full transition-all duration-500"></div>
                    {isLoading ? (
                      <div className="flex items-center relative z-10">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Signing In...
                      </div>
                    ) : (
                      <div className="flex items-center relative z-10">
                        Sign In
                        <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    )}
                  </button>
                </form>

                {/* Sign Up Link */}
                <div className="mt-8 text-center">
                  <p className="text-gray-600">
                    Don't have an account?{' '}
                    <Link
                      to="/signup"
                      className="text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-300"
                    >
                      Sign up for free
                    </Link>
                  </p>
                </div>

                {/* Demo Credentials */}
                <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <h4 className="text-sm font-semibold text-blue-800 mb-3 flex items-center">
                    <FaUser className="mr-2" />
                    Demo Login Credentials
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                    <div className="bg-white p-2 rounded border">
                      <div className="font-medium text-blue-700">Student</div>
                      <div className="text-gray-600">student@gmail.com</div>
                      <div className="text-gray-600">student123</div>
                    </div>
                    <div className="bg-white p-2 rounded border">
                      <div className="font-medium text-purple-700">Trainer</div>
                      <div className="text-gray-600">trainer@gmail.com</div>
                      <div className="text-gray-600">trainer123</div>
                    </div>
                    <div className="bg-white p-2 rounded border">
                      <div className="font-medium text-green-700">Company</div>
                      <div className="text-gray-600">company@gmail.com</div>
                      <div className="text-gray-600">company123</div>
                    </div>
                    <div className="bg-white p-2 rounded border">
                      <div className="font-medium text-red-700">Admin</div>
                      <div className="text-gray-600">admin@gmail.com</div>
                      <div className="text-gray-600">admin123</div>
                    </div>
                  </div>
                </div>

                {/* Security Notice */}
                <div className="mt-6 flex items-center justify-center text-sm text-gray-500">
                  <FaShieldAlt className="mr-2" />
                  Your information is protected by 256-bit SSL encryption
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
      </div>
    </div>
  );
};

export default LoginPage;