import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  GraduationCap, User, Briefcase, Trophy, Users, Globe, Menu, X, 
  ChevronDown, Search, Heart, ShoppingCart, MessageCircle, Phone, Mail, Home 
} from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchCategory, setSearchCategory] = useState('all');
  const [headerHeight, setHeaderHeight] = useState(0);
  
  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const headerRef = useRef(null);
  const navigate = useNavigate();

  // Mock auth context
  const isAuthenticated = false;
  const user = null;
  const logout = () => console.log('Logout');

  // Calculate header height dynamically
  useEffect(() => {
    const updateHeaderHeight = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    };
    
    updateHeaderHeight();
    window.addEventListener('resize', updateHeaderHeight);
    
    return () => window.removeEventListener('resize', updateHeaderHeight);
  }, []);

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
      console.log('Search:', searchQuery, searchCategory);
      setSearchQuery('');
      closeMobileMenu();
    }
  };

  const handleMobileLinkClick = (path) => {
    navigate(path);
    closeMobileMenu();
  };

  const handleLogout = () => {
    logout();
    closeMobileMenu();
  };

  return (
    <>
      {/* SINGLE Fixed Header Container - All headers stack inside here */}
      <div ref={headerRef} className="fixed top-0 left-0 right-0 z-50">
        
        {/* Top Bar - Desktop Only */}
        <div className="bg-gray-100 py-2 px-4 text-sm hidden md:block">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-2 md:mb-0">
              <div className="flex items-center">
                <Mail className="text-gray-600 mr-1 w-4 h-4" />
                <span className="text-xs md:text-sm">info@careerbox.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="text-gray-600 mr-1 w-4 h-4" />
                <span className="text-xs md:text-sm">+1 (555) 123-4567</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 flex-wrap justify-center">
              <div className="border-l border-gray-300 h-4 mx-2 hidden md:block"></div>
              
              <a href="/premium" className="text-blue-600 font-medium hover:text-blue-800 text-xs md:text-sm">
                Subscribe to Premium
              </a>
              
              <div className="border-l border-gray-300 h-4 mx-2 hidden md:block"></div>
              
              <div className="relative" ref={dropdownRef}>
                <button 
                  onClick={toggleLanguageDropdown}
                  className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 text-xs md:text-sm"
                >
                  <img src="https://flagcdn.com/w40/gb.png" alt="English" className="w-4 h-3 rounded-sm" />
                  <span>English</span>
                  <ChevronDown className="w-3 h-3" />
                </button>
                
                {isLanguageDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white border border-gray-200 z-50">
                    <div className="py-1">
                      <a href="/language/nepali" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                        <img src="https://flagcdn.com/w40/np.png" alt="Nepali" className="w-4 h-3 mr-2 rounded-sm" />
                        Nepali
                      </a>
                      <a href="/language/english" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                        <img src="https://flagcdn.com/w40/gb.png" alt="English" className="w-4 h-3 mr-2 rounded-sm" />
                        English
                      </a>
                      <a href="/language/chinese" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                        <img src="https://flagcdn.com/w40/cn.png" alt="Chinese" className="w-4 h-3 mr-2 rounded-sm" />
                        Chinese
                      </a>
                      <a href="/language/hindi" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                        <img src="https://flagcdn.com/w40/in.png" alt="Hindi" className="w-4 h-3 mr-2 rounded-sm" />
                        Hindi
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <nav className={`bg-white shadow-sm py-4 px-4 ${isSticky ? 'shadow-md' : ''}`}>
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center">
              <button
                onClick={toggleMobileMenu}
                className="lg:hidden text-gray-700 hover:text-blue-600 focus:outline-none p-2 rounded-lg hover:bg-blue-50 mr-2"
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
              
              <a href="/" className="flex items-center text-xl font-bold">
                <GraduationCap className="text-2xl mr-2 text-black w-6 h-6" />
                <span className="text-black">Career<span className="text-blue-600">Box</span></span>
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6">
              <div className="relative group">
                <button className="text-gray-700 font-medium hover:text-blue-600 transition-colors flex items-center group ml-2">
                  Explore
                  <ChevronDown className="ml-1 w-3 h-3 transition-transform group-hover:rotate-180" />
                </button>
                <div className="absolute left-0 mt-2 w-48 rounded-lg shadow-xl bg-white border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="py-2">
                    <a href="/career-launch" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Launch a new career</a>
                    <a href="/learn-ai" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Learn AI</a>
                    <a href="/certifications" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Prepare For Certifications</a>
                    <a href="/role-play" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Practice with role play</a>
                    <a href="/development" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Development</a>
                    <a href="/business" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Business</a>
                    <a href="/it-software" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">IT & Software</a>
                    <a href="/design" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Design</a>
                    <a href="/marketing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Marketing</a>
                  </div>
                </div>
              </div>
              
              <div className="relative group">
                <button className="text-gray-700 font-medium hover:text-blue-600 transition-colors flex items-center group">
                  About
                  <ChevronDown className="ml-1 w-3 h-3 transition-transform group-hover:rotate-180" />
                </button>
                <div className="absolute left-0 mt-2 w-48 rounded-lg shadow-xl bg-white border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="py-2">
                    <a href="/about" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">About</a>
                    <a href="/contact" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Contact</a>
                    <a href="/blog" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Blog</a>
                    <a href="/support" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Support</a>
                    <a href="/how-it-works" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">How it works?</a>
                  </div>
                </div>
              </div>
              
              <div className="relative group">
                <button className="text-gray-700 font-medium hover:text-blue-600 transition-colors flex items-center group">
                  Services
                  <ChevronDown className="ml-1 w-3 h-3 transition-transform group-hover:rotate-180" />
                </button>
                <div className="absolute left-0 mt-2 w-48 rounded-lg shadow-xl bg-white border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="py-2">
                    <a href="/courses" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Be a Student</a>
                    <a href="/trainers" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Be a Trainer</a>
                    <a href="/post-job" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Be a Recruiter</a>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <form onSubmit={handleSearch} className="flex items-center">
                  <div className="relative">
                    <input 
                      type="text" 
                      placeholder="Search"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 pr-24 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-100"
                    />
                    <Search className="absolute left-3 top-3 text-gray-400 w-4 h-4" />
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
                  <button type="submit" className="ml-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                    Search
                  </button>
                </form>
              </div>
            </div>

            {/* Right Side Icons */}
            <div className="flex items-center space-x-4 ml-2">
              <a href="/wishlist" className="text-gray-700 hover:text-blue-600 hidden md:block">
                <Heart className="text-xl w-5 h-5" />
              </a>
              <a href="/cart" className="text-gray-700 hover:text-blue-600 hidden md:block">
                <ShoppingCart className="text-xl w-5 h-5" />
              </a>
              <a href="/community" className="text-gray-700 hover:text-blue-600 hidden md:block">
                <MessageCircle className="text-xl w-5 h-5" />
              </a>
              
              <button 
                onClick={() => handleDropdownToggle('mobile-search')}
                className="lg:hidden text-gray-700 hover:text-blue-600 p-2 rounded-lg hover:bg-blue-50"
              >
                <Search className="text-xl w-5 h-5" />
              </button>
              
              {isAuthenticated ? (
                <div className="relative group">
                  <button className="flex items-center space-x-2 bg-blue-50 rounded-full p-2 hover:bg-blue-100">
                    <User className="text-blue-600 w-5 h-5" />
                  </button>
                  <div className="absolute right-0 mt-2 w-48 rounded-lg shadow-xl bg-white border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <div className="py-2">
                      <a href="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">My Profile</a>
                      <a href="/my-learning" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">My Learning</a>
                      <a href="/my-project" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">My Projects</a>
                      <a href="/cart" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Cart</a>
                      <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Logout</button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <a href="/login" className="text-gray-700 font-medium hover:text-blue-600 hidden md:block">
                    Login
                  </a>
                  <a href="/signup" className="bg-blue-600 text-white font-medium px-4 py-2 rounded-lg hover:bg-blue-700 hidden md:block">
                    Sign Up
                  </a>
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
                  <Search className="absolute left-3 top-3 text-gray-400 w-4 h-4" />
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
        </nav>

        {/* Secondary Navbar - MOVED OUTSIDE main nav */}
        <div className="bg-white py-4 border-t border-gray-100 hidden lg:block">
          <div className="max-w-7xl mx-auto px-4 flex items-center justify-center space-x-3 md:space-x-4 lg:space-x-8 flex-wrap gap-y-2">
            <div className="relative group">
              <button className="text-gray-700 font-medium hover:text-blue-600 transition-colors flex items-center group text-sm lg:text-base">
                Learn
                <ChevronDown className="ml-1 w-3 h-3 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute left-0 mt-2 w-56 rounded-lg shadow-xl bg-white border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="py-2">
                  <a href="/courses" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Explore Courses</a>
                  <a href="/all-category" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">By Category</a>
                  <a href="/certified" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Certified Career Paths</a>
                  <a href="/free-workshops" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Free Workshops</a>
                  <a href="/my-learning" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">My Learning</a>
                  <a href="/trainers" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Find a trainer</a>
                </div>
              </div>
            </div>

            <div className="relative group">
              <button className="text-gray-700 font-medium hover:text-blue-600 transition-colors flex items-center group text-sm lg:text-base">
                Projects
                <ChevronDown className="ml-1 w-3 h-3 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute left-0 mt-2 w-56 rounded-lg shadow-xl bg-white border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="py-2">
                  <a href="/browse-projects" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Browse Live Projects</a>
                  <a href="/company-paid" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">From Companies (Paid)</a>
                  <a href="/projects" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Practice Projects (Unpaid)</a>
                  <a href="/hackathon" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Hackathons (Prize Money)</a>
                  <a href="/my-project" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">My Project</a>
                  <a href="/post-project" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Post a Project</a>
                </div>
              </div>
            </div>

            <div className="relative group">
              <button className="text-gray-700 font-medium hover:text-blue-600 transition-colors flex items-center group text-sm lg:text-base">
                Hire
                <ChevronDown className="ml-1 w-3 h-3 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute left-0 mt-2 w-56 rounded-lg shadow-xl bg-white border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="py-2">
                  <a href="/find-talent" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Find Talent</a>
                  <a href="/browse-student-portfolio" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Browse Student Portfolios</a>
                  <a href="/post-job" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 font-semibold text-blue-600">Post a Job</a>
                  <a href="/full-time-roles" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Full-Time Roles</a>
                  <a href="/internships" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 font-semibold text-blue-600">Internships</a>
                  <a href="/manage-hiring" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Manage Hiring</a>
                </div>
              </div>
            </div>

            <a href="/complete" className="text-gray-700 font-medium hover:text-blue-600 transition-colors text-sm lg:text-base">
              Compete
            </a>

            <a href="/trainers" className="text-gray-700 font-medium hover:text-blue-600 transition-colors text-sm lg:text-base">
              For Trainers
            </a>

            <a href="/community" className="text-gray-700 font-medium hover:text-blue-600 transition-colors text-sm lg:text-base">
              Community
            </a>
            
            <div className="relative group">
              <button className="text-gray-700 font-medium hover:text-blue-600 transition-colors flex items-center group text-sm lg:text-base">
                Resources
                <ChevronDown className="ml-1 w-3 h-3 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute left-0 mt-2 w-56 rounded-lg shadow-xl bg-white border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="py-2">
                  <a href="/career-center" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Career Center</a>
                  <a href="/help" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Help Center</a>
                  <a href="/mobile-app" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Download Mobile app</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu - Uses dynamic headerHeight */}
      {isMobileMenuOpen && (
        <div 
          ref={mobileMenuRef}
          className="lg:hidden bg-white border-t border-gray-200 fixed left-0 right-0 bottom-0 overflow-y-auto transition-all duration-300 ease-in-out z-40"
          style={{ top: `${headerHeight}px` }}
        >
          <div className="px-4 pt-2 pb-32 space-y-1">
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
                  <Search className="absolute left-3 top-3.5 text-gray-400 w-4 h-4" />
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
              <span>Home</span>
            </div>
            
            <button 
              onClick={() => handleDropdownToggle('explore-mobile')} 
              className="w-full flex justify-between items-center py-3 text-gray-700 font-medium border-b border-gray-100"
            >
              <span>Explore</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'explore-mobile' ? 'rotate-180' : ''}`} />
            </button>
            {activeDropdown === 'explore-mobile' && (
              <div className="pl-4 space-y-1 bg-gray-50 py-2 rounded-lg mt-1">
                <div onClick={() => handleMobileLinkClick('/career-launch')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded cursor-pointer">Launch a new career</div>
                <div onClick={() => handleMobileLinkClick('/learn-ai')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded cursor-pointer">Learn AI</div>
                <div onClick={() => handleMobileLinkClick('/certifications')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded cursor-pointer">Prepare For Certifications</div>
                <div onClick={() => handleMobileLinkClick('/role-play')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded cursor-pointer">Practice with role play</div>
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
              <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'about-mobile' ? 'rotate-180' : ''}`} />
            </button>
            {activeDropdown === 'about-mobile' && (
              <div className="pl-4 space-y-1 bg-gray-50 py-2 rounded-lg mt-1">
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
              <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'services-mobile' ? 'rotate-180' : ''}`} />
            </button>
            {activeDropdown === 'services-mobile' && (
              <div className="pl-4 space-y-1 bg-gray-50 py-2 rounded-lg mt-1">
                <div onClick={() => handleMobileLinkClick('/courses')} className="block py-2 text-gray-600 text-sm cursor-pointer">Be a Student</div>
                <div onClick={() => handleMobileLinkClick('/trainers')} className="block py-2 text-gray-600 text-sm cursor-pointer">Be a Trainer</div>
                <div onClick={() => handleMobileLinkClick('/post-job')} className="block py-2 text-gray-600 text-sm cursor-pointer">Be a Recruiter</div>
              </div>
            )}

            {/* Secondary nav items in mobile */}
            <div className="pt-4 border-t border-gray-200 mt-2">
              <button 
                onClick={() => handleDropdownToggle('learn-mobile')} 
                className="w-full flex justify-between items-center py-3 text-gray-700 font-medium border-b border-gray-100"
              >
                <span>Learn</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'learn-mobile' ? 'rotate-180' : ''}`} />
              </button>
              {activeDropdown === 'learn-mobile' && (
                <div className="pl-4 space-y-1 bg-gray-50 py-2 rounded-lg mt-1">
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
                <span>Projects</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'projects-mobile' ? 'rotate-180' : ''}`} />
              </button>
              {activeDropdown === 'projects-mobile' && (
                <div className="pl-4 space-y-1 bg-gray-50 py-2 rounded-lg mt-1">
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
                <span>Hire</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'hire-mobile' ? 'rotate-180' : ''}`} />
              </button>
              {activeDropdown === 'hire-mobile' && (
                <div className="pl-4 space-y-1 bg-gray-50 py-2 rounded-lg mt-1">
                  <div onClick={() => handleMobileLinkClick('/find-talent')} className="block py-2 text-gray-600 text-sm cursor-pointer">Find Talent</div>
                  <div onClick={() => handleMobileLinkClick('/browse-student-portfolio')} className="block py-2 text-gray-600 text-sm cursor-pointer">Browse Student Portfolios</div>
                  <div onClick={() => handleMobileLinkClick('/post-job')} className="block py-2 text-gray-600 text-sm font-semibold text-blue-600 cursor-pointer">Post a Job</div>
                  <div onClick={() => handleMobileLinkClick('/full-time-roles')} className="block py-2 text-gray-600 text-sm cursor-pointer">Full-Time Roles</div>
                  <div onClick={() => handleMobileLinkClick('/internships')} className="block py-2 text-gray-600 text-sm font-semibold text-blue-600 cursor-pointer">Internships</div>
                  <div onClick={() => handleMobileLinkClick('/manage-hiring')} className="block py-2 text-gray-600 text-sm cursor-pointer">Manage Hiring</div>
                </div>
              )}

              <div onClick={() => handleMobileLinkClick('/complete')} className="block py-3 text-gray-700 font-medium border-b border-gray-100 cursor-pointer">Compete</div>
              <div onClick={() => handleMobileLinkClick('/trainers')} className="block py-3 text-gray-700 font-medium border-b border-gray-100 cursor-pointer">For Trainers</div>
              <div onClick={() => handleMobileLinkClick('/community')} className="block py-3 text-gray-700 font-medium border-b border-gray-100 cursor-pointer">Community</div>
              
              <button 
                onClick={() => handleDropdownToggle('resources-mobile')} 
                className="w-full flex justify-between items-center py-3 text-gray-700 font-medium border-b border-gray-100"
              >
                <span>Resources</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'resources-mobile' ? 'rotate-180' : ''}`} />
              </button>
              {activeDropdown === 'resources-mobile' && (
                <div className="pl-4 space-y-1 bg-gray-50 py-2 rounded-lg mt-1">
                  <div onClick={() => handleMobileLinkClick('/career-center')} className="block py-2 text-gray-600 text-sm cursor-pointer">Career Center</div>
                  <div onClick={() => handleMobileLinkClick('/help')} className="block py-2 text-gray-600 text-sm cursor-pointer">Help Center</div>
                  <div onClick={() => handleMobileLinkClick('/mobile-app')} className="block py-2 text-gray-600 text-sm cursor-pointer">Download Mobile app</div>
                </div>
              )}
            </div>

            <div className="pt-8 border-t border-gray-200 mt-6 fixed bottom-0 left-0 right-0 bg-white p-4 shadow-lg">
              <div className="flex space-x-2">
                {isAuthenticated ? (
                  <button onClick={handleLogout} className="w-full text-center py-3 text-white font-medium bg-red-600 rounded-lg cursor-pointer">
                    Logout
                  </button>
                ) : (
                  <>
                    <div onClick={() => handleMobileLinkClick('/login')} className="flex-1 text-center py-3 text-gray-700 font-medium border border-gray-300 rounded-lg cursor-pointer">
                      Login
                    </div>
                    <div onClick={() => handleMobileLinkClick('/signup')} className="flex-1 text-center py-3 text-white font-medium bg-blue-600 rounded-lg cursor-pointer">
                      Sign Up
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Spacer for fixed header - uses dynamic height */}
      <div style={{ height: `${headerHeight}px` }}></div>
    </>
  );
};

export default Navbar;