import React, { useState } from 'react';
import { 
  FiSearch, 
  FiStar, 
  FiMapPin, 
  FiEye, 
  FiGithub,
  FiExternalLink,
  FiMessageSquare,
  FiBook,
  FiCode,
  FiPieChart,
  FiSmartphone,
  FiTrendingUp,
  FiAward,
  FiUser,
  FiFilter,
  FiHeart,
  FiShare2
} from 'react-icons/fi';

const BrowseStudentPortfolio = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTool, setSelectedTool] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [selectedRating, setSelectedRating] = useState('all');
  const [selectedPortfolio, setSelectedPortfolio] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const categories = [
    { id: 'web', name: 'Web Development', icon: <FiCode className="text-blue-500" /> },
    { id: 'mobile', name: 'Mobile Apps', icon: <FiSmartphone className="text-purple-500" /> },
    { id: 'ai', name: 'AI / Data Science', icon: <FiTrendingUp className="text-green-500" /> },
    { id: 'uiux', name: 'UI/UX Design', icon: <FiPieChart className="text-red-500" /> },
    { id: 'graphic', name: 'Graphic Design', icon: <FiBook className="text-yellow-500" /> },
    { id: 'business', name: 'Business & Marketing', icon: <FiUser className="text-indigo-500" /> }
  ];

  const tools = ['Figma', 'React', 'Python', 'Node.js', 'Adobe XD', 'Swift', 'TensorFlow', 'Sketch'];
  const locations = ['North America', 'Europe', 'Asia', 'Africa', 'South America', 'Australia'];
  const ratings = ['4+ Stars', '4.5+ Stars', '5 Stars'];

  const featuredPortfolios = [
    {
      id: 1,
      studentName: 'Alex Johnson',
      title: 'AI-Powered E-commerce Recommendation System',
      description: 'Machine learning system that provides personalized product recommendations based on user behavior.',
      tags: ['AI', 'Python', 'Machine Learning', 'E-commerce'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
      rating: 4.8,
      views: 124,
      location: 'Stanford University',
      category: 'ai'
    },
    {
      id: 2,
      studentName: 'Sophia Chen',
      title: 'Health & Fitness Mobile App UI/UX',
      description: 'Complete UI/UX design for a health tracking application with workout and nutrition features.',
      tags: ['UI/UX', 'Figma', 'Mobile App', 'Health'],
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
      avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
      rating: 4.9,
      views: 187,
      location: 'RISD',
      category: 'uiux'
    },
    {
      id: 3,
      studentName: 'Marcus Lee',
      title: 'Sustainable E-commerce Platform',
      description: 'Full-stack e-commerce website focused on eco-friendly products with React and Node.js.',
      tags: ['Web Development', 'React', 'Node.js', 'E-commerce'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
      rating: 4.7,
      views: 98,
      location: 'MIT',
      category: 'web'
    }
  ];

  const allPortfolios = [
    ...featuredPortfolios,
    {
      id: 4,
      studentName: 'Emma Wilson',
      title: 'Social Media Analytics Dashboard',
      description: 'Data visualization dashboard for social media metrics and engagement analytics.',
      tags: ['Data Science', 'React', 'Data Visualization', 'Dashboard'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
      rating: 4.6,
      views: 76,
      location: 'University of Toronto',
      category: 'web'
    },
    {
      id: 5,
      studentName: 'David Kim',
      title: 'Brand Identity for Coffee Shop',
      description: 'Complete branding package including logo, packaging, and marketing materials for a local coffee shop.',
      tags: ['Graphic Design', 'Branding', 'Illustration', 'Print'],
      image: 'https://images.unsplash.com/photo-1588200908342-23b585c03e26?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
      rating: 4.5,
      views: 112,
      location: 'Parsons School of Design',
      category: 'graphic'
    },
    {
      id: 6,
      studentName: 'Lina Rodriguez',
      title: 'Educational Game for Children',
      description: 'Interactive mobile game designed to help children learn math concepts through play.',
      tags: ['Mobile Development', 'Unity', 'Game Design', 'Education'],
      image: 'https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
      rating: 4.8,
      views: 134,
      location: 'UC Berkeley',
      category: 'mobile'
    }
  ];

  const testimonials = [
    {
      id: 1,
      text: "Alex's AI project was incredibly impressive. The recommendation algorithm was both innovative and practical.",
      author: "Dr. Emily Chen",
      role: "Professor of Computer Science, Stanford",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
    },
    {
      id: 2,
      text: "Sophia's UI/UX work demonstrates a mature understanding of user-centered design principles.",
      author: "Michael Roberts",
      role: "Design Director at TechCorp",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
    },
    {
      id: 3,
      text: "We hired Marcus for a freelance project after seeing his portfolio. His code was clean and well-documented.",
      author: "Sarah Williams",
      role: "Startup Founder",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
    }
  ];

  const openPortfolioDetail = (portfolio) => {
    setSelectedPortfolio(portfolio);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedPortfolio(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
     

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <section className="mb-16 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Discover Student Portfolios</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Explore projects, skills, and creativity from talented students worldwide.
          </p>
          
          {/* Search & Filter Bar */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiSearch className="text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search projects (e.g., E-commerce App, UI Design)"
                  className="pl-10 pr-4 py-3 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg flex items-center justify-center">
                <FiSearch className="mr-2" /> Search Portfolios
              </button>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <select 
                className="border border-gray-300 rounded-lg py-2 px-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="all">All Categories</option>
                {categories.map(category => (
                  <option key={category.id} value={category.id}>{category.name}</option>
                ))}
              </select>
              
              <select 
                className="border border-gray-300 rounded-lg py-2 px-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={selectedTool}
                onChange={(e) => setSelectedTool(e.target.value)}
              >
                <option value="all">All Tools</option>
                {tools.map(tool => (
                  <option key={tool} value={tool}>{tool}</option>
                ))}
              </select>
              
              <select 
                className="border border-gray-300 rounded-lg py-2 px-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
              >
                <option value="all">Any Location</option>
                {locations.map(location => (
                  <option key={location} value={location}>{location}</option>
                ))}
              </select>
              
              <select 
                className="border border-gray-300 rounded-lg py-2 px-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={selectedRating}
                onChange={(e) => setSelectedRating(e.target.value)}
              >
                <option value="all">Any Rating</option>
                {ratings.map(rating => (
                  <option key={rating} value={rating}>{rating}</option>
                ))}
              </select>
            </div>
          </div>
        </section>

        {/* Featured Portfolios Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Portfolios</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredPortfolios.map(portfolio => (
              <div key={portfolio.id} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => openPortfolioDetail(portfolio)}>
                <div className="relative">
                  <img src={portfolio.image} alt={portfolio.title} className="w-full h-48 object-cover" />
                  <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md">
                    <FiHeart className="text-gray-600" />
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <img src={portfolio.avatar} alt={portfolio.studentName} className="w-10 h-10 rounded-full object-cover mr-3" />
                    <div>
                      <h3 className="font-semibold">{portfolio.studentName}</h3>
                      <p className="text-gray-600 text-sm">{portfolio.location}</p>
                    </div>
                  </div>
                  
                  <h4 className="font-bold text-lg mb-2">{portfolio.title}</h4>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{portfolio.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {portfolio.tags.map(tag => (
                      <span key={tag} className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex items-center text-yellow-500">
                      <FiStar className="fill-current" />
                      <span className="ml-1 text-gray-700 font-medium">{portfolio.rating}</span>
                    </div>
                    <div className="flex items-center text-gray-500 text-sm">
                      <FiEye className="mr-1" /> {portfolio.views}
                    </div>
                    <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                      View Portfolio
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Browse by Categories Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Browse by Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map(category => (
              <div 
                key={category.id} 
                className="bg-white rounded-xl shadow-sm p-6 text-center border border-gray-200 hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => setSelectedCategory(category.id)}
              >
                <div className="text-3xl mb-3 flex justify-center">{category.icon}</div>
                <h3 className="font-semibold text-sm">{category.name}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Portfolio Gallery Section */}
        <section className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">All Portfolios</h2>
            <div className="flex items-center text-gray-500">
              <FiFilter className="mr-2" />
              <span>Filter</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allPortfolios.map(portfolio => (
              <div key={portfolio.id} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200 hover:shadow-md transition-shadow">
                <div 
                  className="relative cursor-pointer" 
                  onClick={() => openPortfolioDetail(portfolio)}
                >
                  <img src={portfolio.image} alt={portfolio.title} className="w-full h-48 object-cover" />
                  <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <FiEye className="text-white text-2xl" />
                    </div>
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="flex items-center mb-2">
                    <img src={portfolio.avatar} alt={portfolio.studentName} className="w-8 h-8 rounded-full object-cover mr-2" />
                    <span className="font-medium text-sm">{portfolio.studentName}</span>
                  </div>
                  
                  <h3 className="font-semibold text-lg mb-2">{portfolio.title}</h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{portfolio.description}</p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {portfolio.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                    {portfolio.tags.length > 3 && (
                      <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                        +{portfolio.tags.length - 3}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex items-center text-yellow-500 text-sm">
                      <FiStar className="fill-current" />
                      <span className="ml-1 text-gray-700">{portfolio.rating}</span>
                    </div>
                    <button 
                      onClick={() => openPortfolioDetail(portfolio)}
                      className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center"
                    >
                      View Full Portfolio <FiExternalLink className="ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Endorsements & Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map(testimonial => (
              <div key={testimonial.id} className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
                <div className="flex text-yellow-500 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FiStar key={i} className="fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <img src={testimonial.avatar} alt={testimonial.author} className="w-10 h-10 rounded-full object-cover mr-3" />
                  <div>
                    <p className="font-medium">{testimonial.author}</p>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How It Works Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-6 text-center text-blue-600">For Students</h3>
              <div className="space-y-8">
                <div className="flex">
                  <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">1</div>
                  <div>
                    <h4 className="font-semibold mb-2">Upload Your Projects</h4>
                    <p className="text-gray-600">Showcase your best work with images, descriptions, and tech stacks.</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">2</div>
                  <div>
                    <h4 className="font-semibold mb-2">Build Your Profile</h4>
                    <p className="text-gray-600">Add your skills, education, and career goals to create a complete portfolio.</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">3</div>
                  <div>
                    <h4 className="font-semibold mb-2">Get Noticed</h4>
                    <p className="text-gray-600">Employers and mentors browse portfolios and reach out with opportunities.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-6 text-center text-green-600">For Employers & Mentors</h3>
              <div className="space-y-8">
                <div className="flex">
                  <div className="bg-green-100 text-green-600 rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">1</div>
                  <div>
                    <h4 className="font-semibold mb-2">Browse Portfolios</h4>
                    <p className="text-gray-600">Filter by skills, projects, and categories to find talented students.</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="bg-green-100 text-green-600 rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">2</div>
                  <div>
                    <h4 className="font-semibold mb-2">Contact Students</h4>
                    <p className="text-gray-600">Reach out to students for projects, internships, or mentorship opportunities.</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="bg-green-100 text-green-600 rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">3</div>
                  <div>
                    <h4 className="font-semibold mb-2">Hire & Mentor</h4>
                    <p className="text-gray-600">Collaborate on projects or offer guidance to help students grow.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mb-16 text-center bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Showcase Your Work or Find Fresh Talent Today 🚀</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of students and employers connecting through our platform.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-blue-600 hover:bg-gray-100 py-3 px-8 rounded-lg font-semibold">
              Upload Portfolio
            </button>
            <button className="bg-blue-800 hover:bg-blue-900 text-white py-3 px-8 rounded-lg font-semibold border border-blue-700">
              Browse Portfolios
            </button>
          </div>
        </section>
      </main>

      {/* Portfolio Detail Modal */}
      {showModal && selectedPortfolio && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-xl max-w-4xl w-full max-h-screen overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Portfolio Details</h2>
                <button onClick={closeModal} className="text-gray-400 hover:text-gray-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              {/* Hero Banner */}
              <div className="mb-8">
                <img src={selectedPortfolio.image} alt={selectedPortfolio.title} className="w-full h-64 object-cover rounded-xl" />
              </div>
              
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold mb-4">{selectedPortfolio.title}</h3>
                  <p className="text-gray-700 mb-6">{selectedPortfolio.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-xl font-semibold mb-3">Project Details</h4>
                    <p className="text-gray-700">
                      This project was developed as part of {selectedPortfolio.studentName}'s coursework at {selectedPortfolio.location}. 
                      It demonstrates advanced skills in {selectedPortfolio.tags.slice(0, 2).join(' and ')}.
                    </p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-xl font-semibold mb-3">Technologies & Tools</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedPortfolio.tags.map(tag => (
                        <span key={tag} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-xl font-semibold mb-3">Project Gallery</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gray-200 h-32 rounded-lg"></div>
                      <div className="bg-gray-200 h-32 rounded-lg"></div>
                      <div className="bg-gray-200 h-32 rounded-lg"></div>
                      <div className="bg-gray-200 h-32 rounded-lg"></div>
                    </div>
                  </div>
                </div>
                
                <div className="md:w-1/3">
                  <div className="bg-gray-50 rounded-xl p-6 mb-6">
                    <div className="flex items-center mb-4">
                      <img src={selectedPortfolio.avatar} alt={selectedPortfolio.studentName} className="w-16 h-16 rounded-full object-cover mr-4" />
                      <div>
                        <h3 className="font-bold">{selectedPortfolio.studentName}</h3>
                        <p className="text-gray-600">Student at {selectedPortfolio.location}</p>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">About the Student</h4>
                      <p className="text-gray-700 text-sm">
                        Passionate {selectedPortfolio.tags[0]} student with a focus on creating innovative solutions. 
                        Looking for internship opportunities in the tech industry.
                      </p>
                    </div>
                    
                    <div className="flex items-center mb-4">
                      <div className="flex items-center text-yellow-500 mr-2">
                        <FiStar className="fill-current" />
                        <span className="ml-1 text-gray-700 font-medium">{selectedPortfolio.rating}</span>
                      </div>
                      <span className="text-gray-500">({selectedPortfolio.views} views)</span>
                    </div>
                    
                    <div className="space-y-3">
                      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium">
                        Contact Student
                      </button>
                      <button className="w-full border border-gray-300 text-gray-700 hover:bg-gray-50 py-2 px-4 rounded-lg font-medium">
                        Hire for Project
                      </button>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h4 className="font-semibold mb-3">Project Links</h4>
                    <div className="space-y-2">
                      <a href="#" className="flex items-center text-blue-600 hover:text-blue-800">
                        <FiGithub className="mr-2" /> GitHub Repository
                      </a>
                      <a href="#" className="flex items-center text-blue-600 hover:text-blue-800">
                        <FiExternalLink className="mr-2" /> Live Demo
                      </a>
                      <a href="#" className="flex items-center text-blue-600 hover:text-blue-800">
                        <FiExternalLink className="mr-2" /> Case Study
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BrowseStudentPortfolio;