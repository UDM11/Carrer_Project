import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  GraduationCap, User, Menu, X, ChevronDown, Search, Heart, ShoppingCart, 
  MessageCircle, Phone, Mail 
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

  // Authentication state - Change this to true/false to test different states
  const isAuthenticated = false;
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
      
      // Don't close mobile menu if clicking on a Link element or its children
      const isLinkClick = event.target.closest('a[href]');
      
      if (isMobileMenuOpen && mobileMenuRef.current && !mobileMenuRef.current.contains(event.target) && !isLinkClick) {
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

  const handleMobileLinkClick = () => {
    // Add small delay to ensure navigation completes before closing menu
    setTimeout(() => {
      closeMobileMenu();
    }, 100);
  };

  const handleLogout = () => {
    logout();
    closeMobileMenu();
  };

  return (
    <>
      {/* Fixed Header Container */}
      <div ref={headerRef} className="fixed top-0 left-0 right-0 z-50">
        
        {/* Top Bar - Desktop Only - Only show for authenticated users */}
        {isAuthenticated && (
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
        )}

        {/* Main Navbar */}
        <nav className={`bg-white shadow-sm py-4 px-4 ${isSticky ? 'shadow-md' : ''}`}>
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            
            {/* Logo & Brand Name (Left Side) */}
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

            {/* Desktop Navigation - Conditional Rendering */}
            <div className="hidden lg:flex items-center space-x-6">
              {isAuthenticated ? (
                // STATE B: LOGGED-IN USER - Complex navbar
                <>
                  <div className="relative group">
                    <button className="text-gray-700 font-medium hover:text-blue-600 transition-colors flex items-center group">
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
                </>
              ) : (
                // STATE A: NON-LOGGED-IN/GUEST USER - Simple navbar matching reference images
                <>
                  {/* Explore Dropdown */}
                  <div className="relative group">
                    <button className="text-gray-600 font-medium hover:text-blue-600 transition-colors flex items-center group">
                      Explore
                      <ChevronDown className="ml-1 w-3 h-3 transition-transform group-hover:rotate-180" />
                    </button>
                    <div className="absolute left-0 mt-2 w-48 rounded-lg shadow-xl bg-white border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                      <div className="py-2">
                        <a href="/about" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">About Career</a>
                        <a href="/contact" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Contact Us</a>
                        <a href="/how-it-works" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">How it works</a>
                      </div>
                    </div>
                  </div>
                  
                  {/* Simple Links */}
                  <a href="/courses" className="text-gray-600 font-medium hover:text-blue-600 transition-colors">
                    Learn
                  </a>
                  
                  <a href="/blog" className="text-gray-600 font-medium hover:text-blue-600 transition-colors">
                    Blog
                  </a>
                  
                  <a href="/support" className="text-gray-600 font-medium hover:text-blue-600 transition-colors">
                    Support
                  </a>
                  
                  <a href="/community" className="text-gray-600 font-medium hover:text-blue-600 transition-colors">
                    Community
                  </a>
                </>
              )}
            </div>

            {/* Right Side - Conditional Rendering */}
            <div className="flex items-center space-x-4 ml-2">
              {isAuthenticated ? (
                // STATE B: LOGGED-IN USER - Icons and user dropdown
                <>
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
                </>
              ) : (
                // STATE A: NON-LOGGED-IN/GUEST USER - Action buttons matching reference images
                <>

                  <Link 
                    to="/signup"
                    className="lg:hidden bg-white text-black-400 font-bold px-3 py-2 rounded-lg text-lg"
                  >
                    Join
                  </Link>
                  
                  <div className="flex items-center space-x-2">
                    {/* Language Dropdown */}
                    <div className="relative hidden md:block">
                      <button 
                        onClick={toggleLanguageDropdown}
                        className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 px-2 py-1 rounded"
                      >
                        <img src="https://flagcdn.com/w40/gb.png" alt="English" className="w-4 h-3 rounded-sm" />
                        <span className="text-sm">EN</span>
                        <ChevronDown className="w-3 h-3" />
                      </button>
                      
                      {isLanguageDropdownOpen && (
                        <div className="absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white border border-gray-200 z-50">
                          <div className="py-1">
                            <a href="/language/english" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                              <img src="https://flagcdn.com/w40/gb.png" alt="English" className="w-4 h-3 mr-2 rounded-sm" />
                              English
                            </a>
                            <a href="/language/spanish" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                              <img src="https://flagcdn.com/w40/es.png" alt="Spanish" className="w-4 h-3 mr-2 rounded-sm" />
                              Spanish
                            </a>
                            <a href="/language/french" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                              <img src="https://flagcdn.com/w40/fr.png" alt="French" className="w-4 h-3 mr-2 rounded-sm" />
                              French
                            </a>
                            <a href="/language/german" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                              <img src="https://flagcdn.com/w40/de.png" alt="German" className="w-4 h-3 mr-2 rounded-sm" />
                              German
                            </a>
                          </div>
                        </div>
                      )}
                    </div>
                    
                    {/* Become a Student - Blue button */}
                    <a href="/courses" className="bg-blue-600 text-white font-medium px-4 py-2 rounded-lg hover:bg-blue-700 hidden md:block">
                      Become a Student
                    </a>
                    
                    {/* Sign In - Text link */}
                    <a href="/login" className="text-gray-600 font-medium hover:text-blue-600 hidden md:block">
                      Sign In
                    </a>
                    
                    {/* Join - Gray button */}
                    <a href="/signup" className="bg-gray-100 text-gray-600 font-medium px-4 py-2 rounded-lg hover:bg-gray-200 hidden md:block">
                      Join
                    </a>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Mobile Search Bar - Only for authenticated users */}
          {isAuthenticated && activeDropdown === 'mobile-search' && (
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

        {/* Secondary Navbar - Only show for authenticated users */}
        {isAuthenticated && (
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
        )}
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div 
          ref={mobileMenuRef}
          className="lg:hidden bg-white border-t border-gray-200 fixed left-0 right-0 bottom-0 overflow-y-auto transition-all duration-300 ease-in-out z-40"
          style={{ top: `${headerHeight}px` }}
        >
          <div className="px-4 pt-2 pb-32 space-y-1">
            
            {/* Mobile Search Bar - Only for authenticated users */}
            {isAuthenticated && (
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
            )}
            
            <Link to="/" onClick={handleMobileLinkClick} className="flex items-center py-3 text-gray-700 font-medium border-b border-gray-100">
              <span>Home</span>
            </Link>
            
            {isAuthenticated ? (
              // STATE B: LOGGED-IN MOBILE MENU - Complex menu
              <>
                <button 
                  onClick={() => handleDropdownToggle('explore-mobile')} 
                  className="w-full flex justify-between items-center py-3 text-gray-700 font-medium border-b border-gray-100"
                >
                  <span>Explore</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'explore-mobile' ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'explore-mobile' && (
                  <div className="pl-4 space-y-1 bg-gray-50 py-2 rounded-lg mt-1">
                    <Link to="/career-launch" onClick={handleMobileLinkClick} className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded">Launch a new career</Link>
                    <Link to="/learn-ai" onClick={handleMobileLinkClick} className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded">Learn AI</Link>
                    <Link to="/certifications" onClick={handleMobileLinkClick} className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded">Prepare For Certifications</Link>
                    <Link to="/role-play" onClick={handleMobileLinkClick} className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded">Practice with role play</Link>
                    <Link to="/development" onClick={handleMobileLinkClick} className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded">Development</Link>
                    <Link to="/business" onClick={handleMobileLinkClick} className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded">Business</Link>
                    <Link to="/it-software" onClick={handleMobileLinkClick} className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded">IT & Software</Link>
                    <Link to="/design" onClick={handleMobileLinkClick} className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded">Design</Link>
                    <Link to="/marketing" onClick={handleMobileLinkClick} className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded">Marketing</Link>
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
                    <Link to="/about" onClick={handleMobileLinkClick} className="block py-2 text-gray-600 text-sm">About</Link>
                    <Link to="/contact" onClick={handleMobileLinkClick} className="block py-2 text-gray-600 text-sm">Contact</Link>
                    <Link to="/blog" onClick={handleMobileLinkClick} className="block py-2 text-gray-600 text-sm">Blog</Link>
                    <Link to="/support" onClick={handleMobileLinkClick} className="block py-2 text-gray-600 text-sm">Support</Link>
                    <Link to="/how-it-works" onClick={handleMobileLinkClick} className="block py-2 text-gray-600 text-sm">How it works?</Link>
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
                    <Link to="/courses" onClick={handleMobileLinkClick} className="block py-2 text-gray-600 text-sm">Be a Student</Link>
                    <Link to="/trainers" onClick={handleMobileLinkClick} className="block py-2 text-gray-600 text-sm">Be a Trainer</Link>
                    <Link to="/post-job" onClick={handleMobileLinkClick} className="block py-2 text-gray-600 text-sm">Be a Recruiter</Link>
                  </div>
                )}

                {/* Secondary nav items in mobile for logged-in users */}
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
                      <Link to="/courses" onClick={handleMobileLinkClick} className="block py-2 text-gray-600 text-sm">Explore Courses</Link>
                      <Link to="/all-category" onClick={handleMobileLinkClick} className="block py-2 text-gray-600 text-sm">By Category</Link>
                      <Link to="/certified" onClick={handleMobileLinkClick} className="block py-2 text-gray-600 text-sm">Certified Career Paths</Link>
                      <Link to="/free-workshops" onClick={handleMobileLinkClick} className="block py-2 text-gray-600 text-sm">Free Workshops</Link>
                      <Link to="/my-learning" onClick={handleMobileLinkClick} className="block py-2 text-gray-600 text-sm">My Learning</Link>
                      <Link to="/trainers" onClick={handleMobileLinkClick} className="block py-2 text-gray-600 text-sm">Find a trainer</Link>
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
                      <Link to="/browse-projects" onClick={handleMobileLinkClick} className="block py-2 text-gray-600 text-sm">Browse Live Projects</Link>
                      <Link to="/company-paid" onClick={handleMobileLinkClick} className="block py-2 text-gray-600 text-sm">From Companies (Paid)</Link>
                      <Link to="/projects" onClick={handleMobileLinkClick} className="block py-2 text-gray-600 text-sm">Practice Projects (Unpaid)</Link>
                      <Link to="/hackathon" onClick={handleMobileLinkClick} className="block py-2 text-gray-600 text-sm">Hackathons (Prize Money)</Link>
                      <Link to="/my-project" onClick={handleMobileLinkClick} className="block py-2 text-gray-600 text-sm">My Project</Link>
                      <Link to="/post-project" onClick={handleMobileLinkClick} className="block py-2 text-gray-600 text-sm">Post a Project</Link>
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
                      <Link to="/find-talent" onClick={handleMobileLinkClick} className="block py-2 text-gray-600 text-sm">Find Talent</Link>
                      <Link to="/browse-student-portfolio" onClick={handleMobileLinkClick} className="block py-2 text-gray-600 text-sm">Browse Student Portfolios</Link>
                      <Link to="/post-job" onClick={handleMobileLinkClick} className="block py-2 text-gray-600 text-sm font-semibold text-blue-600">Post a Job</Link>
                      <Link to="/full-time-roles" onClick={handleMobileLinkClick} className="block py-2 text-gray-600 text-sm">Full-Time Roles</Link>
                      <Link to="/internships" onClick={handleMobileLinkClick} className="block py-2 text-gray-600 text-sm font-semibold text-blue-600">Internships</Link>
                      <Link to="/manage-hiring" onClick={handleMobileLinkClick} className="block py-2 text-gray-600 text-sm">Manage Hiring</Link>
                    </div>
                  )}

                  <Link to="/complete" onClick={handleMobileLinkClick} className="block py-3 text-gray-700 font-medium border-b border-gray-100">Compete</Link>
                  <Link to="/trainers" onClick={handleMobileLinkClick} className="block py-3 text-gray-700 font-medium border-b border-gray-100">For Trainers</Link>
                  <Link to="/community" onClick={handleMobileLinkClick} className="block py-3 text-gray-700 font-medium border-b border-gray-100">Community</Link>
                  
                  <button 
                    onClick={() => handleDropdownToggle('resources-mobile')} 
                    className="w-full flex justify-between items-center py-3 text-gray-700 font-medium border-b border-gray-100"
                  >
                    <span>Resources</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'resources-mobile' ? 'rotate-180' : ''}`} />
                  </button>
                  {activeDropdown === 'resources-mobile' && (
                    <div className="pl-4 space-y-1 bg-gray-50 py-2 rounded-lg mt-1">
                      <Link to="/career-center" onClick={handleMobileLinkClick} className="block py-2 text-gray-600 text-sm">Career Center</Link>
                      <Link to="/help" onClick={handleMobileLinkClick} className="block py-2 text-gray-600 text-sm">Help Center</Link>
                      <Link to="/mobile-app" onClick={handleMobileLinkClick} className="block py-2 text-gray-600 text-sm">Download Mobile app</Link>
                    </div>
                  )}
                </div>
              </>
            ) : (
              // STATE A: NON-LOGGED-IN MOBILE MENU - Simple menu matching reference images
              <>
                <button 
                  onClick={() => handleDropdownToggle('explore-mobile')} 
                  className="w-full flex justify-between items-center py-3 text-gray-700 font-medium border-b border-gray-100"
                >
                  <span>Explore</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'explore-mobile' ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'explore-mobile' && (
                  <div className="pl-4 space-y-1 bg-gray-50 py-2 rounded-lg mt-1">
                    <Link to="/about" onClick={handleMobileLinkClick} className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded">About Career</Link>
                    <Link to="/contact" onClick={handleMobileLinkClick} className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded">Contact Us</Link>
                    <Link to="/how-it-works" onClick={handleMobileLinkClick} className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded">How it works</Link>
                  </div>
                )}
                
                <Link to="/courses" onClick={handleMobileLinkClick} className="block py-3 text-gray-700 font-medium border-b border-gray-100">Learn</Link>
                
                <Link to="/blog" onClick={handleMobileLinkClick} className="block py-3 text-gray-700 font-medium border-b border-gray-100">Blog</Link>
                
                <Link to="/support" onClick={handleMobileLinkClick} className="block py-3 text-gray-700 font-medium border-b border-gray-100">Support</Link>
                
                <Link to="/community" onClick={handleMobileLinkClick} className="block py-3 text-gray-700 font-medium border-b border-gray-100">Community</Link>
              </>
            )}

            {/* Bottom Action Buttons */}
            <div className="pt-8 border-t border-gray-200 mt-6 fixed bottom-0 left-0 right-0 bg-white p-4 shadow-lg">
              <div className="flex space-x-2">
                {isAuthenticated ? (
                  <button onClick={handleLogout} className="w-full text-center py-3 text-white font-medium bg-red-600 rounded-lg cursor-pointer">
                    Logout
                  </button>
                ) : (
                  <>
                    <Link to="/courses" onClick={handleMobileLinkClick} className="flex-1 text-center py-2 text-white font-medium bg-blue-600 rounded-lg text-sm">
                      Become a Student
                    </Link>
                    <Link to="/login" onClick={handleMobileLinkClick} className="flex-1 text-center py-2 text-gray-600 font-medium border border-gray-300 rounded-lg text-sm">
                      Sign In
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Spacer for fixed header */}
      <div style={{ height: `${headerHeight}px` }}></div>
    </>
  );
};

export default Navbar;