import { useState } from 'react';
import { FiMail, FiLock, FiEye, FiEyeOff, FiUser, FiCheck, FiBook, FiUsers, FiShield } from 'react-icons/fi';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaFacebook, FaGraduationCap, FaChalkboardTeacher, FaUserTie, FaBriefcase } from 'react-icons/fa';

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'student'
  });
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate signup process
    setTimeout(() => {
      setIsLoading(false);
      alert('Signup functionality would be implemented here');
    }, 1500);
  };

  // Password strength indicator
  const getPasswordStrength = (password) => {
    if (password.length === 0) return { strength: 0, label: '', color: '' };
    if (password.length < 6) return { strength: 1, label: 'Weak', color: 'bg-red-500' };
    if (password.length < 8) return { strength: 2, label: 'Fair', color: 'bg-yellow-500' };
    
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    
    const strengthCount = [hasUpperCase, hasLowerCase, hasNumbers, hasSpecialChar].filter(Boolean).length;
    
    if (strengthCount < 2) return { strength: 2, label: 'Fair', color: 'bg-yellow-500' };
    if (strengthCount < 4) return { strength: 3, label: 'Good', color: 'bg-blue-500' };
    return { strength: 4, label: 'Strong', color: 'bg-green-500' };
  };

  const passwordStrength = getPasswordStrength(formData.password);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Left Side - Illustration and Welcome Message */}
          <div className="md:w-1/2 bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-8 md:p-12 flex flex-col justify-center">
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Join the Community</h1>
              <p className="text-lg opacity-90">Create your account to start learning, connect with mentors, and grow your career.</p>
            </div>
            
            <div className="hidden md:block mt-8">
              <div className="relative">
                <div className="absolute -top-10 -left-6 w-24 h-24 bg-yellow-400 rounded-full opacity-20"></div>
                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-green-400 rounded-full opacity-20"></div>
                
                <div className="relative bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                      <FiBook className="text-xl" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold">Access All Courses</h3>
                      <p className="text-sm opacity-80">Learn from industry experts</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                      <FiUsers className="text-xl" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold">Join a Community</h3>
                      <p className="text-sm opacity-80">Connect with like-minded learners</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                      <FaGraduationCap className="text-xl" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold">Track Progress</h3>
                      <p className="text-sm opacity-80">Achieve your learning goals</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Side - Signup Form */}
          <div className="md:w-1/2 p-8 md:p-12">
            <div className="max-w-md mx-auto">
              <div className="text-center mb-8 md:mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Create your account</h2>
                <p className="text-gray-600 mt-2">Join thousands of learners and professionals</p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FiUser className="text-gray-400" />
                    </div>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      autoComplete="name"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      className="pl-10 pr-4 py-3 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Your full name"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FiMail className="text-gray-400" />
                    </div>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="pl-10 pr-4 py-3 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
                    I am a
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setFormData({...formData, role: 'student'})}
                      className={`p-3 border rounded-lg flex items-center justify-center ${formData.role === 'student' ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}`}
                    >
                      <FaGraduationCap className={`mr-2 ${formData.role === 'student' ? 'text-blue-600' : 'text-gray-400'}`} />
                      <span className={formData.role === 'student' ? 'text-blue-600 font-medium' : 'text-gray-600'}>Student</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData({...formData, role: 'trainer'})}
                      className={`p-3 border rounded-lg flex items-center justify-center ${formData.role === 'trainer' ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}`}
                    >
                      <FaChalkboardTeacher className={`mr-2 ${formData.role === 'trainer' ? 'text-blue-600' : 'text-gray-400'}`} />
                      <span className={formData.role === 'trainer' ? 'text-blue-600 font-medium' : 'text-gray-600'}>Trainer</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData({...formData, role: 'mentor'})}
                      className={`p-3 border rounded-lg flex items-center justify-center ${formData.role === 'mentor' ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}`}
                    >
                      <FaUserTie className={`mr-2 ${formData.role === 'mentor' ? 'text-blue-600' : 'text-gray-400'}`} />
                      <span className={formData.role === 'mentor' ? 'text-blue-600 font-medium' : 'text-gray-600'}>Mentor</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData({...formData, role: 'employer'})}
                      className={`p-3 border rounded-lg flex items-center justify-center ${formData.role === 'employer' ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}`}
                    >
                      <FaBriefcase className={`mr-2 ${formData.role === 'employer' ? 'text-blue-600' : 'text-gray-400'}`} />
                      <span className={formData.role === 'employer' ? 'text-blue-600 font-medium' : 'text-gray-600'}>Employer</span>
                    </button>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                    Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FiLock className="text-gray-400" />
                    </div>
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      autoComplete="new-password"
                      required
                      value={formData.password}
                      onChange={handleChange}
                      className="pl-10 pr-12 py-3 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Create a password"
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <FiEyeOff className="text-gray-400 hover:text-gray-600" />
                      ) : (
                        <FiEye className="text-gray-400 hover:text-gray-600" />
                      )}
                    </button>
                  </div>
                  
                  {formData.password && (
                    <div className="mt-2">
                      <div className="flex items-center justify-between mb-1">
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full ${passwordStrength.color}`} 
                            style={{ width: `${passwordStrength.strength * 25}%` }}
                          ></div>
                        </div>
                      </div>
                      <p className="text-xs text-gray-600">
                        Strength: <span className="font-medium">{passwordStrength.label}</span>
                      </p>
                    </div>
                  )}
                </div>
                
                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FiLock className="text-gray-400" />
                    </div>
                    <input
                      id="confirmPassword"
                      name="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      autoComplete="new-password"
                      required
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className="pl-10 pr-12 py-3 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Confirm your password"
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                      {showConfirmPassword ? (
                        <FiEyeOff className="text-gray-400 hover:text-gray-600" />
                      ) : (
                        <FiEye className="text-gray-400 hover:text-gray-600" />
                      )}
                    </button>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <button
                    type="button"
                    onClick={() => setAcceptTerms(!acceptTerms)}
                    className="flex items-center"
                  >
                    <div className={`w-5 h-5 flex items-center justify-center border rounded-md ${acceptTerms ? 'bg-blue-600 border-blue-600' : 'border-gray-300'}`}>
                      {acceptTerms && <FiCheck className="text-white text-sm" />}
                    </div>
                    <span className="ml-2 text-sm text-gray-700">
                      I agree to the <a href="#" className="text-blue-600 hover:underline">Terms of Service</a> and <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>
                    </span>
                  </button>
                </div>
                
                <div>
                  <button
                    type="submit"
                    disabled={isLoading || !acceptTerms}
                    className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${isLoading || !acceptTerms ? 'opacity-75 cursor-not-allowed' : ''}`}
                  >
                    {isLoading ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Creating account...
                      </span>
                    ) : (
                      'Create Account'
                    )}
                  </button>
                </div>
              </form>
              
              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">Or sign up with</span>
                  </div>
                </div>
                
                <div className="mt-6 grid grid-cols-3 gap-3">
                  <button
                    type="button"
                    className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    <FcGoogle className="h-5 w-5" />
                  </button>
                  
                  <button
                    type="button"
                    className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    <FaLinkedin className="h-5 w-5 text-blue-700" />
                  </button>
                  
                  <button
                    type="button"
                    className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    <FaFacebook className="h-5 w-5 text-blue-600" />
                  </button>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-sm text-gray-600">
                  Already have an account?{' '}
                  <Link to="/login" className="font-medium text-blue-600 hover:text-blue-500">
                    Log in here
                  </Link>
                </p>
              </div>
              
              {/* Security & Trust Section */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-center">
                  <FiShield className="text-gray-400 mr-2" />
                  <span className="text-xs text-gray-500">Your data is private and secure. We use encryption to protect your information.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;