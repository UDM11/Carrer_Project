import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaGraduationCap, FaUser, FaBriefcase, FaTrophy, FaChalkboardTeacher, 
         FaUsers, FaGlobe, FaBars, FaTimes, FaChevronDown, FaSignInAlt, 
         FaSearch, FaHeart, FaShoppingCart, FaComments, FaPhone, FaEnvelope, FaHome } from 'react-icons/fa';
import "./css/Navbar.css";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchCategory, setSearchCategory] = useState('all');
  const navigate = useNavigate();
  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);

  // Make navbar sticky on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
        setIsLanguageDropdownOpen(false);
      }
      
      // Close mobile menu when clicking outside
      if (isMobileMenuOpen && mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        closeMobileMenu();
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setActiveDropdown(null);
    setIsLanguageDropdownOpen(false);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  const handleDropdownToggle = (dropdown) => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdown);
      setIsLanguageDropdownOpen(false);
    }
  };

  const toggleLanguageDropdown = (e) => {
    e.stopPropagation();
    setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
    setActiveDropdown(null);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Navigate to search results page with query parameters
      navigate(`/search?q=${encodeURIComponent(searchQuery)}&category=${searchCategory}`);
      setSearchQuery('');
      closeMobileMenu();
    }
  };

  // Handle navigation for mobile menu links
  const handleMobileLinkClick = (path) => {
    navigate(path);
    closeMobileMenu();
  };

  // Sample user data
  const user = {
    isLoggedIn: false,
    role: null,
  };

  return (
    <>
      {/* Header Navbar (Top Bar) - Fixed */}
      <div className="bg-gray-100 py-2 px-4 text-sm fixed top-0 w-full z-50 hidden md:block">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4 mb-2 md:mb-0">
            <div className="flex items-center">
              <FaEnvelope className="text-gray-600 mr-1" />
              <span className="text-xs md:text-sm">info@careerbox.com</span>
            </div>
            <div className="flex items-center">
              <FaPhone className="text-gray-600 mr-1" />
              <span className="text-xs md:text-sm">+1 (555) 123-4567</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-4 flex-wrap justify-center">
            <div className="border-l border-gray-300 h-4 mx-2 hidden md:block"></div>
            
            {/* Subscription Link */}
            <Link to="/premium" className="text-blue-600 font-medium hover:text-blue-800 text-xs md:text-sm">
              Subscribe to Premium
            </Link>
            
            <div className="border-l border-gray-300 h-4 mx-2 hidden md:block"></div>
            
            {/* Language Dropdown Only */}
            <div className="relative" ref={dropdownRef}>
              <button 
                onClick={toggleLanguageDropdown}
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 text-xs md:text-sm"
              >
                <img src="https://flagcdn.com/w40/gb.png" alt="English" className="w-4 h-3 rounded-sm" />
                <span>English</span>
                <FaChevronDown className="w-2 h-2" />
              </button>
              
              {isLanguageDropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white border border-gray-200 z-50">
                  <div className="py-1">
                    <Link to="/language/nepali" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                      <img src="https://flagcdn.com/w40/np.png" alt="Nepali" className="w-4 h-3 mr-2 rounded-sm" />
                      Nepali
                    </Link>
                    <Link to="/language/english" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                      <img src="https://flagcdn.com/w40/gb.png" alt="English" className="w-4 h-3 mr-2 rounded-sm" />
                      English
                    </Link>
                    <Link to="/language/chinese" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                      <img src="https://flagcdn.com/w40/cn.png" alt="Chinese" className="w-4 h-3 mr-2 rounded-sm" />
                      Chinese
                    </Link>
                    <Link to="/language/hindi" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                      <img src="https://flagcdn.com/w40/in.png" alt="Hindi" className="w-4 h-3 mr-2 rounded-sm" />
                      Hindi
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar - Fixed with offset for top bar */}
      <nav className={`bg-white shadow-sm py-4 px-4 sticky top-0 md:top-8 z-40 ${isSticky ? 'shadow-md' : ''}`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo and Mobile Menu Button */}
          <div className="flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden text-gray-700 hover:text-blue-600 focus:outline-none p-2 rounded-lg hover:bg-blue-50 mr-2"
            >
              {isMobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
            
            <Link to="/" className="flex items-center text-xl font-bold">
              <FaGraduationCap className="text-2xl mr-2 text-black" />
              <span className="text-black">Career<span className="text-blue-600">Box</span></span>
            </Link>
          </div>

          {/* Desktop Navigation - Main */}
          <div className="hidden lg:flex items-center space-x-6">
            {/* Explore Dropdown */}
            <div className="relative group">
              <button className="text-gray-700 font-medium hover:text-blue-600 transition-colors flex items-center group ml-2">
                Explore
                <FaChevronDown className="ml-1 w-3 h-3 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute left-0 mt-2 w-48 rounded-lg shadow-xl bg-white border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="py-2">
                  <Link to="/career-launch" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Launch a new career</Link>
                  <Link to="/learn-ai" className="block px-4 py-2 text-sm text-gray-极00 hover:bg-blue-50">Learn AI</Link>
                  <Link to="/certifications" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Prepare For Certifications</Link>
                  <Link to="/role-play" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Practice with role play</Link>
                  <Link to="/development" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Development</Link>
                  <Link to="/business" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Business</Link>
                  <Link to="/it-software" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">IT & Software</Link>
                  <Link to="/design" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Design</Link>
                  <Link to="/marketing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Marketing</Link>
                </div>
              </div>
            </div>
            
            {/* About Dropdown */}
            <div className="relative group">
              <button className="text-gray-700 font-medium hover:text-blue-600 transition-colors flex items-center group">
                About
                <FaChevronDown className="ml-1 w-3 h-3 transition-transform极group-hover:rotate-180" />
              </button>
              <div className="absolute left-0 mt-2 w-48 rounded-lg shadow-xl bg-white border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="py-2">
                  <Link to="/about" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">About</Link>
                  <Link to="/contact" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Contact</Link>
                  <Link to="/blog" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Blog</Link>
                  <Link to="/support" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Support</Link>
                  <Link to="/how-it-works" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">How it works?</Link>
                </div>
              </div>
            </div>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button className="text-gray-700 font-medium hover:text-blue-600 transition-colors flex items-center group">
                Services
                <FaChevronDown className="ml-1 w-3 h-3 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute left-0 mt-2 w-48 rounded-lg shadow-xl bg-white border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="py-2">
                  <Link to="/courses" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Be a Student</Link>
                  <Link to="/trainers" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Be a Trainer</Link>
                  <Link to="/post-job" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Be a Recruiter</Link>
                </div>
              </div>
            </div>
            
            {/* Search Bar */}
            <div className="relative">
              <form onSubmit={handleSearch} className="flex items-center">
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 pr-24 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64"
                  />
                  <FaSearch className="absolute left-3 top-3 text-gray-400" />
                  <div className="absolute right-0 top-0 h-full flex items-center">
                    <div className="h-4/5 border-l border-gray-300 mr-2"></div>
                    <select 
                      value={searchCategory}
                      onChange={(e) => setSearchCategory(e.target.value)}
                      className="text-sm border-none bg-transparent focus:outline-none pr-2 text-gray-500"
                    >
                      <option value="all">All Categories</option>
                      <option value="courses">Courses</option>
                      <option value="projects">Projects</option>
                      <option value="jobs">Jobs</option>
                      <option value="trainers">Trainers</option>
                    </select>
                  </div>
                </div>
                <button type="submit" className="ml-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:极g-blue-700">
                  Search
                </button>
              </form>
            </div>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4 ml-2">
            <Link to="/wishlist" className="text-gray-700 hover:text-blue-600 hidden md:block">
              <FaHeart className="text-xl" />
            </Link>
            <Link to="/cart" className="text-gray-700 hover:text-blue-600 hidden md:block">
              <FaShoppingCart className="text-xl" />
            </Link>
            <Link to="/community" className="text-gray-700 hover:text-blue-600 hidden md:block">
              <FaComments className="text-xl" />
            </Link>
            
            {/* Mobile Search Icon */}
            <button 
              onClick={() => handleDropdownToggle('mobile-search')}
              className="lg:hidden text-gray-700 hover:text-blue-600 p-2 rounded-lg hover:bg-blue-50"
            >
              <FaSearch className="text-xl" />
            </button>
            
            {user.isLoggedIn ? (
              <div className="relative group">
                <button className="flex items-center space-x-2 bg-blue-50 rounded-full p-2 hover:bg-blue-100">
                  <FaUser className="text-blue-600" />
                </button>
                <div className="absolute right-0 mt-2 w-48 rounded-lg shadow-xl bg-white border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="py-2">
                    <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">My Profile</Link>
                    <Link to="/my-learning" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">My Learning</Link>
                    <Link to="/my-project" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">My Projects</Link>
                    <Link to="/cart" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Cart</Link>
                    <Link to="/logout" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Logout</Link>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Link to="/login" className="text-gray-700 font-medium hover:text-blue-600 hidden md:block">
                  Login
                </Link>
                <Link to="/signup" className="bg-blue-600 text-white font-medium px-4 py-2 rounded-lg hover:bg-blue-700 hidden md:block">
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Search Bar */}
        {activeDropdown === 'mobile-search' && (
          <div className="lg:hidden mt-4 bg-white py-2">
            <form onSubmit={handleSearch} className="px-4 flex items-center">
              <div className="relative flex-grow">
                <input 
                  type="text" 
                  placeholder="Search CareerBox"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <FaSearch className="absolute left-3 top-3 text-gray-400" />
              </div>
              <button 
                type="button" 
                onClick={() => setActiveDropdown(null)}
                className="ml-2 text-gray-500 hover:text-gray-700"
              >
                Cancel
              </button>
            </form>
          </div>
        )}

        {/* Secondary Navbar - Fixed */}
        <div className="hidden lg:block mt-4 bg-white py-2 sticky top-28 z-30">
          <div className="max-w-7xl mx-auto flex items-center space-x-6">
            <div className="relative group">
              <button className="text-gray-700 font-medium hover:text-blue-600 transition-colors flex items-center group">
                Learn 👨‍🎓
                <FaChevronDown className="ml-1 w-3 h-3 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute left-0 mt-2 w-56 rounded-lg shadow-xl bg-white border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="py-2">
                  <Link to="/courses" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Explore Courses</Link>
                  <Link to="/all-category" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">By Category</Link>
                  <Link to="/certified" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Certified Career Paths</Link>
                  <Link to="/free-workshops" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Free Workshops</Link>
                  <Link to="/my-learning" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">My Learning</Link>
                  <Link to="/trainers" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Find a trainer</Link>
                </div>
              </div>
            </div>

            <div className="relative group">
              <button className="text-gray-700 font-medium hover:text-blue-600 transition-colors flex items-center group">
                Projects ⚙️
                <FaChevronDown className="ml-1 w-3 h-3 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute left-0 mt-2 w-56 rounded-lg shadow-xl bg-white border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="py-2">
                  <Link to="/browse-projects" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Browse Live Projects</Link>
                  <Link to="/company-paid" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">From Companies (Paid)</Link>
                  <Link to="/projects" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Practice Projects (Unpaid)</Link>
                  <Link to="/hackathon" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Hackathons (Prize Money)</Link>
                  <Link to="/my-project" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">My Project</Link>
                  <Link to="/post-project" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Post a Project</Link>
                </div>
              </div>
            </div>

            <div className="relative group">
              <button className="text-gray-700 font-medium hover:text-blue-600 transition-colors flex items-center group">
                Hire 👔
                <FaChevronDown className="ml-1 w-3 h-3 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute left-0 mt-2 w-56 rounded-lg shadow-xl bg-white border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="py-2">
                  <Link to="/find-talent" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Find Talent</Link>
                  <Link to="/browse-student-portfolio" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Browse Student Portfolios</Link>
                  <Link to="/post-job" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 font-semibold text-blue-600">Post a Job</Link>
                  <Link to="/full-time-roles" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Full-Time Roles</Link>
                  <Link to="/internships" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 font-semibold text-blue-600">Internships</Link>
                  <Link to="/manage-hiring" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Manage Hiring</Link>
                </div>
              </div>
            </div>

            <Link to="/complete" className="text-gray-700 font-medium hover:text-blue-600 transition-colors">
              Compete 🏆
            </Link>

            <Link to="/trainers" className="text-gray-700 font-medium hover:text-blue-600 transition-colors">
              For Trainers 👨‍🏫
            </Link>

            <Link to="/community" className="text-gray-700 font-medium hover:text-blue-600 transition-colors">
              Community 🤝
            </Link>
            
            <div className="relative group">
              <button className="text-gray-700 font-medium hover:text-blue-600 transition-colors flex items-center group">
                Resources
                <FaChevronDown className="ml-1 w-3 h-3 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute left-0 mt-2 w-56 rounded-lg shadow-xl bg-white border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="py-2">
                  <Link to="/career-center" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Career Center</Link>
                  <Link to="/help" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Help Center</Link>
                  <Link to="/mobile-app" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Download Mobile app</Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div 
            ref={mobileMenuRef}
            className="lg:hidden bg-white border-t border-gray-200 fixed inset-0 top-20 z-50 overflow-y-auto transition-all duration-300 ease-in-out"
          >
            <div className="px-4 pt-2 pb-32 space-y-1">
              {/* Mobile Search */}
              <div className="relative mb-4 pt-4">
                <form onSubmit={handleSearch} className="flex items-center">
                  <div className="relative flex-grow">
                    <input 
                      type="text" 
                      placeholder="Search CareerBox"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <FaSearch className="absolute left-3 top-3.5 text-gray-400" />
                  </div>
                  <button 
                    type="button" 
                    onClick={closeMobileMenu}
                    className="ml-2 text-gray-500 hover:text-gray-700 font-medium"
                  >
                    Cancel
                  </button>
                </form>
              </div>
              
              <div onClick={() => handleMobileLinkClick('/')} className="flex items-center py-3 text-gray-700 font-medium border-b border-gray-100 cursor-pointer">
                <FaHome className="mr-2" />
                <span>Home</span>
              </div>
              
              <button 
                onClick={() => handleDropdownToggle('explore-mobile')} 
                className="w-full flex justify-between items-center py-3 text-gray-700 font-medium border-b border-gray-100"
              >
                <span>Explore</span>
                <FaChevronDown className={`w-3 h-3 transition-transform ${activeDropdown === 'explore-mobile' ? 'rotate-180' : ''}`} />
              </button>
              {activeDropdown === 'explore-mobile' && (
                <div className="pl-4 space-y-1 bg-gray-50 py-2 rounded-lg mt-1 animate-fadeIn">
                  <div onClick={() => handleMobileLinkClick('/career-launch')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded cursor-pointer">Launch a new career</div>
                  <div onClick={() => handleMobileLinkClick('/learn-ai')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded cursor-pointer">Learn AI</div>
                  <div onClick={() => handleMobileLinkClick('/certifications')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded cursor-pointer">Prepare For Certifications</div>
                  <div onClick={() => handleMobileLinkClick('/role-play')} className="block px极4 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded cursor-pointer">Practice with role play</div>
                  <div onClick={() => handleMobileLinkClick('/development')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded cursor-pointer">Development</div>
                  <div onClick={() => handleMobileLinkClick('/business')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded cursor-pointer">Business</div>
                  <div onClick={() => handleMobileLinkClick('/it-software')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded cursor-pointer">IT & Software</div>
                  <div onClick={() => handleMobileLinkClick('/design')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded cursor-pointer">Design</div>
                  <div onClick={() => handleMobileLinkClick('/marketing')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded cursor-pointer">Marketing</div>
                </div>
              )}
              
              <button 
                onClick={() => handleDropdownToggle('about-mobile')} 
                className="w-full flex justify-between items-center py-3 text-gray-700 font-medium border-b border-gray-100"
              >
                <span>About</span>
                <FaChevronDown className={`w-3 h-3 transition-transform ${activeDropdown === 'about-mobile' ? 'rotate-180' : ''}`} />
              </button>
              {activeDropdown === 'about-mobile' && (
                <div className="pl-4 space-y-1 bg-gray-50 py-2 rounded-lg mt-1 animate-fadeIn">
                  <div onClick={() => handleMobileLinkClick('/about')} className="block py-2 text-gray-600 text-sm cursor-pointer">About</div>
                  <div onClick={() => handleMobileLinkClick('/contact')} className="block py-2 text-gray-600 text-sm cursor-pointer">Contact</div>
                  <div onClick={() => handleMobileLinkClick('/blog')} className="block py-2 text-gray-600 text-sm cursor-pointer">Blog</div>
                  <div onClick={() => handleMobileLinkClick('/support')} className="block py-2 text-gray-600 text-sm cursor-pointer">Support</div>
                  <div onClick={() => handleMobileLinkClick('/how-it-works')} className="block py-2 text-gray-600 text-sm cursor-pointer">How it works?</div>
                </div>
              )}

              <button 
                onClick={() => handleDropdownToggle('services-mobile')} 
                className="w-full flex justify-between items-center py-3 text-gray-700 font-medium border-b border-gray-100"
              >
                <span>Services</span>
                <FaChevronDown className={`w-3 h-3 transition-transform ${activeDropdown === 'services-mobile' ? 'rotate-180' : ''}`} />
              </button>
              {activeDropdown === 'services-mobile' && (
                <div className="pl-4 space-y-1 bg-gray-50 py-2 rounded-lg mt-1 animate-fadeIn">
                  <div onClick={() => handleMobileLinkClick('/courses')} className="block py-2 text-gray-600 text-sm cursor-pointer">Be a Student</div>
                  <div onClick={() => handleMobileLinkClick('/trainers')} className="block py-2 text-gray-600 text-sm cursor-pointer">Be a Trainer</div>
                  <div onClick={() => handleMobileLinkClick('/post-job')} className="block py-2 text-gray-600 text-sm cursor-pointer">Be a Recruiter</div>
                </div>
              )}

              {/* Secondary nav items in mobile */}
              <div className="pt-4 border-t border-gray-200 mt-2">
                <button 
                  onClick={() => handleDropdownToggle('learn-mobile')} 
                  className="极-full flex justify-between items-center py-3 text-gray-700 font-medium border-b border-gray-100"
                >
                  <span>Learn 👨‍🎓</span>
                  <FaChevronDown className={`w-3 h-3 transition-transform ${activeDropdown === 'learn-mobile' ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'learn-mobile' && (
                  <div className="pl-4 space-y-1 bg-gray-50 py-2 rounded-lg mt-1 animate-fadeIn">
                    <div onClick={() => handleMobileLinkClick('/courses')} className="block py-2 text-gray-600 text-sm cursor-pointer">Explore Courses</div>
                    <div onClick={() => handleMobileLinkClick('/all-category')} className="block py-2 text-gray-600 text-sm cursor-pointer">By Category</div>
                    <div onClick={() => handleMobileLinkClick('/certified')} className="block py-2 text-gray-600 text-sm cursor-pointer">Certified Career Paths</div>
                    <div onClick={() => handleMobileLinkClick('/free-workshops')} className="block py-2 text-gray-600 text-sm cursor-pointer">Free Workshops</div>
                    <div onClick={() => handleMobileLinkClick('/my-learning')} className="block py-2 text-gray-600 text-sm cursor-pointer">My Learning</div>
                    <div onClick={() => handleMobileLinkClick('/trainers')} className="block py-2 text-gray-600 text-sm cursor-pointer">Find a trainer</div>
                  </div>
                )}

                <button 
                  onClick={() => handleDropdownToggle('projects-mobile')} 
                  className="w-full flex justify-between items-center py-3 text-gray-700 font-medium border-b border-gray-100"
                >
                  <span>Projects ⚙️</span>
                  <FaChevronDown className={`w-3 h-3 transition-transform ${activeDropdown === 'projects-mobile' ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'projects-mobile' && (
                  <div className="pl-4 space-y-1 bg-gray-50 py-2 rounded-lg mt-1 animate-fadeIn">
                    <div onClick={() => handleMobileLinkClick('/browse-projects')} className="block py-2 text-gray-600 text-sm cursor-pointer">Browse Live Projects</div>
                    <div onClick={() => handleMobileLinkClick('/company-paid')} className="block py-2 text-gray-600 text-sm cursor-pointer">From Companies (Paid)</div>
                    <div onClick={() => handleMobileLinkClick('/projects')} className="block py-2 text-gray-600 text-sm cursor-pointer">Practice Projects (Unpaid)</div>
                    <div onClick={() => handleMobileLinkClick('/hackathon')} className="block py-2 text-gray-600 text-sm cursor-pointer">Hackathons (Prize Money)</div>
                    <div onClick={() => handleMobileLinkClick('/my-project')} className="block py-2 text-gray-600 text-sm cursor-pointer">My Project</div>
                    <div onClick={() => handleMobileLinkClick('/post-project')} className="block py-2 text-gray-600 text-sm cursor-pointer">Post a Project</div>
                  </div>
                )}

                <button 
                  onClick={() => handleDropdownToggle('hire-mobile')} 
                  className="w-full flex justify-between items-center py-3 text-gray-700 font-medium border-b border-gray-100"
                >
                  <span>Hire 👔</span>
                  <FaChevronDown className={`w-3 h-3 transition-transform ${activeDropdown === 'hire-mobile' ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'hire-mobile' && (
                  <div className="pl-4 space-y-1 bg-gray-50 py-2 rounded-lg mt-1 animate-fadeIn">
                    <div onClick={() => handleMobileLinkClick('/find-talent')} className="block py-2 text-gray-600 text-sm cursor-pointer">Find Talent</div>
                    <div onClick={() => handleMobileLinkClick('/browse-student-portfolio')} className="block py-2 text-gray-600 text-sm cursor-pointer">Browse Student Portfolios</div>
                    <div onClick={() => handleMobileLinkClick('/post-job')} className="block py-2 text-gray-600 text-sm font-semibold text-blue-600 cursor-pointer">Post a Job</div>
                    <div onClick={() => handleMobileLinkClick('/full-time-roles')} className="block py-2 text-gray-600 text-sm cursor-pointer">Full-Time Roles</div>
                    <div onClick={() => handleMobileLinkClick('/internships')} className="block py-2 text-gray-600 text-sm font-semibold text-blue-600 cursor-pointer">Internships</div>
                    <div onClick={() => handleMobileLinkClick('/manage-hiring')} className="block py-2 text-gray-600 text-sm cursor-pointer">Manage Hiring</div>
                  </div>
                )}

                <div onClick={() => handleMobileLinkClick('/complete')} className="block py-3 text-gray-700 font-medium border-b border-gray-100 cursor-pointer">Compete 🏆</div>
                <div onClick={() => handleMobileLinkClick('/trainers')} className="block py-3 text-gray-700 font-medium border-b border-gray-100 cursor-pointer">For Trainers 👨‍🏫</div>
                <div onClick={() => handleMobileLinkClick('/community')} className="block py-3 text-gray-700 font-medium border-b border-gray-100 cursor-pointer">Community 🤝</div>
                
                <button 
                  onClick={() => handleDropdownToggle('resources-mobile')} 
                  className="w-full flex justify-between items-center py-3 text-gray-700 font-medium border-b border-gray-100"
                >
                  <span>Resources</span>
                  <FaChevronDown className={`w-3 h-3 transition-transform ${activeDropdown === 'resources-mobile' ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'resources-mobile' && (
                  <div className="pl-4 space-y-1 bg-gray-50 py-2 rounded-lg mt-1 animate-fadeIn">
                    <div onClick={() => handleMobileLinkClick('/career-center')} className="block py-2 text-gray-600 text-sm cursor-pointer">Career Center</div>
                    <div onClick={() => handleMobileLinkClick('/help')} className="block py-2 text-gray-600 text-sm cursor-pointer">Help Center</div>
                    <div onClick={() => handleMobileLinkClick('/mobile-app')} className="block py-2 text-gray-600 text-sm cursor-pointer">Download Mobile app</div>
                  </div>
                )}
              </div>

              <div className="pt-8 border-t border-gray-200 mt-6 fixed bottom-0 left-0 right-0 bg-white p-4 shadow-lg">
                <div className="flex space-x-2">
                  <div onClick={() => handleMobileLinkClick('/login')} className="flex-1 text-center py-3 text-gray-700 font-medium border border-gray-300 rounded-lg cursor-pointer">
                    Login
                  </div>
                  <div onClick={() => handleMobileLinkClick('/signup')} className="flex-1 text-center py-3 text-white font-medium bg-blue-600 rounded-lg cursor-pointer">
                    Sign Up
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;