import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  FaEye, 
  FaEyeSlash, 
  FaGoogle, 
  FaLinkedinIn,
  FaUser,
  FaLock,
  FaEnvelope,
  FaArrowRight,
  FaGraduationCap,
  FaCheckCircle,
  FaShieldAlt,
  FaRocket,
  FaGlobe
} from 'react-icons/fa';

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [isAnimated, setIsAnimated] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    setIsAnimated(true);
  }, []);

  // Password strength checker
  useEffect(() => {
    const password = formData.password;
    let strength = 0;
    
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;
    
    setPasswordStrength(strength);
  }, [formData.password]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = 'You must agree to the terms and conditions';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      navigate('/login');
    } catch (error) {
      setErrors({ general: 'Registration failed. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  const getPasswordStrengthColor = () => {
    if (passwordStrength <= 2) return 'bg-red-500';
    if (passwordStrength <= 3) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  const getPasswordStrengthText = () => {
    if (passwordStrength <= 2) return 'Weak';
    if (passwordStrength <= 3) return 'Medium';
    return 'Strong';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="flex flex-col lg:flex-row min-h-[700px]">
            
            {/* Left Side - Sign Up Form */}
            <div className="lg:w-3/5 p-8 lg:p-12 flex flex-col justify-center">
              <div className={`transform transition-all duration-1000 ${isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                
                {/* Form Header */}
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-800 mb-2">Create Account</h2>
                  <p className="text-gray-600">Join thousands of learners advancing their careers</p>
                </div>

                {/* Social Sign Up */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <button className="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-xl hover:bg-gray-50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg group relative overflow-hidden">
                    <FaGoogle className="text-red-500 mr-2 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-gray-700 font-medium">Google</span>
                  </button>
                  <button className="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-xl hover:bg-gray-50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg group relative overflow-hidden">
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
                    <span className="px-4 bg-white text-gray-500">Or sign up with email</span>
                  </div>
                </div>

                {/* Sign Up Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  {errors.general && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-600 text-sm animate-pulse">
                      {errors.general}
                    </div>
                  )}

                  {/* Name Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">First Name</label>
                      <div className="relative">
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-4 border rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 ${
                            errors.firstName ? 'border-red-300 bg-red-50' : 'border-gray-300 bg-white'
                          }`}
                          placeholder="John"
                        />
                      </div>
                      {errors.firstName && (
                        <p className="text-red-500 text-sm">⚠️ {errors.firstName}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Last Name</label>
                      <div className="relative">
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-4 border rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 ${
                            errors.lastName ? 'border-red-300 bg-red-50' : 'border-gray-300 bg-white'
                          }`}
                          placeholder="Doe"
                        />
                      </div>
                      {errors.lastName && (
                        <p className="text-red-500 text-sm">⚠️ {errors.lastName}</p>
                      )}
                    </div>
                  </div>

                  {/* Email Field */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Email Address</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <FaEnvelope className="text-gray-400" />
                      </div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full pl-12 pr-4 py-4 border rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 ${
                          errors.email ? 'border-red-300 bg-red-50' : 'border-gray-300 bg-white'
                        }`}
                        placeholder="john@example.com"
                      />
                    </div>
                    {errors.email && (
                      <p className="text-red-500 text-sm">⚠️ {errors.email}</p>
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
                        className={`w-full pl-12 pr-12 py-4 border rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 ${
                          errors.password ? 'border-red-300 bg-red-50' : 'border-gray-300 bg-white'
                        }`}
                        placeholder="Create a strong password"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 transition-colors duration-300"
                      >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                      </button>
                    </div>
                    
                    {/* Password Strength Indicator */}
                    {formData.password && (
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-600">Password strength:</span>
                          <span className={`font-medium ${passwordStrength <= 2 ? 'text-red-500' : passwordStrength <= 3 ? 'text-yellow-500' : 'text-green-500'}`}>
                            {getPasswordStrengthText()}
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full transition-all duration-300 ${getPasswordStrengthColor()}`}
                            style={{ width: `${(passwordStrength / 5) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    )}
                    
                    {errors.password && (
                      <p className="text-red-500 text-sm">⚠️ {errors.password}</p>
                    )}
                  </div>

                  {/* Confirm Password Field */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Confirm Password</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <FaLock className="text-gray-400" />
                      </div>
                      <input
                        type={showConfirmPassword ? 'text' : 'password'}
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        className={`w-full pl-12 pr-12 py-4 border rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 ${
                          errors.confirmPassword ? 'border-red-300 bg-red-50' : 'border-gray-300 bg-white'
                        }`}
                        placeholder="Confirm your password"
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 transition-colors duration-300"
                      >
                        {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                      </button>
                    </div>
                    {errors.confirmPassword && (
                      <p className="text-red-500 text-sm">⚠️ {errors.confirmPassword}</p>
                    )}
                  </div>

                  {/* Terms Agreement */}
                  <div className="space-y-2">
                    <label className="flex items-start">
                      <input
                        type="checkbox"
                        name="agreeToTerms"
                        checked={formData.agreeToTerms}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500 transition-colors duration-300 mt-1"
                      />
                      <span className="ml-3 text-sm text-gray-600">
                        I agree to the{' '}
                        <Link to="/terms" className="text-purple-600 hover:text-purple-700 font-medium">
                          Terms of Service
                        </Link>{' '}
                        and{' '}
                        <Link to="/privacy" className="text-purple-600 hover:text-purple-700 font-medium">
                          Privacy Policy
                        </Link>
                      </span>
                    </label>
                    {errors.agreeToTerms && (
                      <p className="text-red-500 text-sm">⚠️ {errors.agreeToTerms}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 focus:ring-4 focus:ring-purple-200 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -translate-x-full group-hover:translate-x-full transition-all duration-500"></div>
                    {isLoading ? (
                      <div className="flex items-center relative z-10">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Creating Account...
                      </div>
                    ) : (
                      <div className="flex items-center relative z-10">
                        Create Account
                        <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    )}
                  </button>
                </form>

                {/* Sign In Link */}
                <div className="mt-8 text-center">
                  <p className="text-gray-600">
                    Already have an account?{' '}
                    <Link
                      to="/login"
                      className="text-purple-600 hover:text-purple-700 font-semibold transition-colors duration-300"
                    >
                      Sign in here
                    </Link>
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - Benefits */}
            <div className="lg:w-2/5 bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 p-8 lg:p-12 flex flex-col justify-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full" style={{
                  backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.1) 2px, transparent 2px), radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.1) 2px, transparent 2px)`,
                  backgroundSize: '50px 50px',
                  backgroundPosition: '0 0, 25px 25px'
                }}></div>
              </div>
              
              <div className={`transform transition-all duration-1000 delay-300 ${isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} relative z-10`}>
                <div className="mb-8">
                  <Link to="/" className="flex items-center text-white text-2xl font-bold mb-8">
                    <FaGraduationCap className="text-3xl mr-3" />
                    Career<span className="text-yellow-300">Box</span>
                  </Link>
                  
                  <h3 className="text-3xl font-bold text-white mb-6">
                    Start Your Journey Today
                  </h3>
                  <p className="text-blue-100 text-lg mb-8">
                    Join our global community and unlock unlimited learning opportunities.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                      <FaRocket className="text-white text-xl" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Career Advancement</h4>
                      <p className="text-blue-100 text-sm">Fast-track your professional growth</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                      <FaGlobe className="text-white text-xl" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Global Network</h4>
                      <p className="text-blue-100 text-sm">Connect with learners worldwide</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                      <FaCheckCircle className="text-white text-xl" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Certified Learning</h4>
                      <p className="text-blue-100 text-sm">Earn recognized certifications</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">Free Forever</div>
                    <div className="text-blue-100">Start learning today, upgrade anytime</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;