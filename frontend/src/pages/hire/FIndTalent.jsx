import React, { useState } from 'react';
import { 
  FiSearch, 
  FiStar, 
  FiMapPin, 
  FiDollarSign, 
  FiCalendar,
  FiCheck,
  FiMessageSquare,
  FiBriefcase,
  FiCode,
  FiPieChart,
  FiTrendingUp,
  FiUser,
  FiClock,
  FiMail,
  FiArrowRight,
  FiGithub,
  FiExternalLink
} from 'react-icons/fi';

const FindTalent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSkill, setSelectedSkill] = useState('all');
  const [selectedExperience, setSelectedExperience] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [selectedAvailability, setSelectedAvailability] = useState('all');
  const [selectedBudget, setSelectedBudget] = useState('all');
  const [selectedTalent, setSelectedTalent] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const categories = [
    { id: 'development', name: 'Development', icon: <FiCode className="text-blue-500" /> },
    { id: 'design', name: 'Design', icon: <FiPieChart className="text-purple-500" /> },
    { id: 'marketing', name: 'Marketing', icon: <FiTrendingUp className="text-green-500" /> },
    { id: 'business', name: 'Business', icon: <FiBriefcase className="text-yellow-500" /> },
    { id: 'it', name: 'IT & Software', icon: <FiUser className="text-red-500" /> }
  ];

  const skills = ['React', 'Node.js', 'Python', 'UI/UX', 'AI', 'Cloud', 'SEO', 'Cybersecurity'];
  const experienceLevels = ['Entry', 'Intermediate', 'Senior', 'Expert'];
  const locations = ['Remote', 'New York', 'San Francisco', 'London', 'Berlin', 'Tokyo'];
  const availabilityOptions = ['Full-time', 'Part-time', 'Freelance', 'Contract'];
  const budgetRanges = ['$0-$25/hr', '$25-$50/hr', '$50-$100/hr', '$100+/hr'];

  const featuredTalent = [
    {
      id: 1,
      name: 'Alex Johnson',
      role: 'Full-Stack Developer',
      rating: 4.9,
      reviews: 42,
      skills: ['React', 'Node.js', 'MongoDB', 'AWS'],
      availability: 'Full-time',
      rate: '$85/hr',
      location: 'San Francisco, CA',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
      verified: true
    },
    {
      id: 2,
      name: 'Sophia Martinez',
      role: 'UI/UX Designer',
      rating: 4.8,
      reviews: 37,
      skills: ['Figma', 'UI Design', 'UX Research', 'Prototyping'],
      availability: 'Freelance',
      rate: '$75/hr',
      location: 'Remote',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
      verified: true
    },
    {
      id: 3,
      name: 'David Kim',
      role: 'Data Scientist',
      rating: 4.7,
      reviews: 29,
      skills: ['Python', 'Machine Learning', 'TensorFlow', 'Data Analysis'],
      availability: 'Part-time',
      rate: '$95/hr',
      location: 'New York, NY',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
      verified: true
    }
  ];

  const allTalent = [
    ...featuredTalent,
    {
      id: 4,
      name: 'Emma Wilson',
      role: 'DevOps Engineer',
      rating: 4.6,
      reviews: 24,
      skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'],
      availability: 'Full-time',
      rate: '$90/hr',
      location: 'Remote',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
      verified: false
    },
    {
      id: 5,
      name: 'Michael Chen',
      role: 'Digital Marketing Specialist',
      rating: 4.5,
      reviews: 31,
      skills: ['SEO', 'Content Marketing', 'Social Media', 'Analytics'],
      availability: 'Contract',
      rate: '$65/hr',
      location: 'London, UK',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
      verified: true
    },
    {
      id: 6,
      name: 'Lisa Rodriguez',
      role: 'Product Manager',
      rating: 4.7,
      reviews: 35,
      skills: ['Agile', 'Scrum', 'Product Strategy', 'User Stories'],
      availability: 'Part-time',
      rate: '$110/hr',
      location: 'Remote',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
      verified: true
    }
  ];

  const testimonials = [
    {
      id: 1,
      company: 'TechStart Inc.',
      comment: 'We found our best React developer in just 2 days! The talent pool here is incredible.',
      author: 'Sarah Johnson, CTO',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
    },
    {
      id: 2,
      company: 'DesignStudio',
      comment: 'Hired 3 UI/UX designers through this platform. All exceeded our expectations!',
      author: 'Michael Brown, Creative Director',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
    },
    {
      id: 3,
      company: 'DataFlow Analytics',
      comment: 'The quality of data scientists here is unmatched. We built our entire AI team from this platform.',
      author: 'Emily Chen, CEO',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
    }
  ];

  const openTalentProfile = (talent) => {
    setSelectedTalent(talent);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedTalent(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
   
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <section className="mb-16 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Hire Top Talent for Your Projects & Jobs</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover skilled professionals, students, and freelancers ready to contribute to your success.
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
                  placeholder="Search for roles (e.g., React Developer, AI Engineer)"
                  className="pl-10 pr-4 py-3 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg flex items-center justify-center">
                <FiSearch className="mr-2" /> Search Talent
              </button>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
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
                value={selectedSkill}
                onChange={(e) => setSelectedSkill(e.target.value)}
              >
                <option value="all">All Skills</option>
                {skills.map(skill => (
                  <option key={skill} value={skill}>{skill}</option>
                ))}
              </select>
              
              <select 
                className="border border-gray-300 rounded-lg py-2 px-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={selectedExperience}
                onChange={(e) => setSelectedExperience(e.target.value)}
              >
                <option value="all">Any Experience</option>
                {experienceLevels.map(level => (
                  <option key={level} value={level}>{level}</option>
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
                value={selectedAvailability}
                onChange={(e) => setSelectedAvailability(e.target.value)}
              >
                <option value="all">Any Availability</option>
                {availabilityOptions.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
              
              <select 
                className="border border-gray-300 rounded-lg py-2 px-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={selectedBudget}
                onChange={(e) => setSelectedBudget(e.target.value)}
              >
                <option value="all">Any Budget</option>
                {budgetRanges.map(range => (
                  <option key={range} value={range}>{range}</option>
                ))}
              </select>
            </div>
          </div>
        </section>

        {/* Featured Talent Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Talent</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredTalent.map(talent => (
              <div key={talent.id} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="relative">
                      <img src={talent.image} alt={talent.name} className="w-16 h-16 rounded-full object-cover mr-4" />
                      {talent.verified && (
                        <div className="absolute bottom-0 right-3 bg-blue-500 rounded-full p-1">
                          <FiCheck className="text-white text-xs" />
                        </div>
                      )}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{talent.name}</h3>
                      <p className="text-gray-600 text-sm">{talent.role}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-4">
                    <div className="flex items-center text-yellow-500 mr-2">
                      <FiStar className="fill-current" />
                      <span className="ml-1 text-gray-700 font-medium">{talent.rating}</span>
                    </div>
                    <span className="text-gray-500 text-sm">({talent.reviews} reviews)</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {talent.skills.map(skill => (
                      <span key={skill} className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-gray-600 flex items-center">
                      <FiMapPin className="mr-1" /> {talent.location}
                    </span>
                    <span className="text-sm font-medium text-blue-600">{talent.availability}</span>
                  </div>
                  
                  <button 
                    onClick={() => openTalentProfile(talent)}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg"
                  >
                    View Profile
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Browse by Categories Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Browse by Categories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
            {categories.map(category => (
              <div 
                key={category.id} 
                className="bg-white rounded-xl shadow-sm p-6 text-center border border-gray-200 hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => setSelectedCategory(category.id)}
              >
                <div className="text-3xl mb-3 flex justify-center">{category.icon}</div>
                <h3 className="font-semibold">{category.name}</h3>
                <p className="text-gray-500 text-sm mt-2">View talent</p>
              </div>
            ))}
          </div>
        </section>

        {/* Talent Directory Section */}
        <section className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">All Talent</h2>
            <div className="text-gray-500">{allTalent.length} professionals available</div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {allTalent.map(talent => (
              <div key={talent.id} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200 hover:shadow-md transition-shadow">
                <div className="p-6">
                  <div className="flex">
                    <div className="relative mr-4">
                      <img src={talent.image} alt={talent.name} className="w-16 h-16 rounded-full object-cover" />
                      {talent.verified && (
                        <div className="absolute bottom-0 right-0 bg-blue-500 rounded-full p-1">
                          <FiCheck className="text-white text-xs" />
                        </div>
                      )}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <div>
                          <h3 className="font-semibold text-lg">{talent.name}</h3>
                          <p className="text-gray-600">{talent.role}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-blue-600">{talent.rate}</p>
                          <p className="text-sm text-gray-500">per hour</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center mt-2 mb-3">
                        <div className="flex items-center text-yellow-500 mr-2">
                          <FiStar className="fill-current" />
                          <span className="ml-1 text-gray-700 font-medium">{talent.rating}</span>
                        </div>
                        <span className="text-gray-500 text-sm">({talent.reviews} reviews)</span>
                        <span className="mx-2 text-gray-300">•</span>
                        <span className="text-gray-500 text-sm flex items-center">
                          <FiMapPin className="mr-1" /> {talent.location}
                        </span>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {talent.skills.map(skill => (
                          <span key={skill} className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                            {skill}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-green-600">
                          {talent.availability}
                        </span>
                        <div className="flex space-x-2">
                          <button className="border border-gray-300 text-gray-700 hover:bg-gray-50 py-2 px-4 rounded-lg text-sm">
                            Message
                          </button>
                          <button 
                            onClick={() => openTalentProfile(talent)}
                            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm"
                          >
                            Hire
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map(testimonial => (
              <div key={testimonial.id} className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
                <p className="text-gray-700 mb-4 italic">"{testimonial.comment}"</p>
                <div className="flex items-center">
                  <img src={testimonial.image} alt={testimonial.author} className="w-12 h-12 rounded-full object-cover mr-3" />
                  <div>
                    <p className="font-medium">{testimonial.author}</p>
                    <p className="text-gray-500 text-sm">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How It Works Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center">1</div>
              </div>
              <h3 className="font-semibold text-lg mb-2">Post Your Job</h3>
              <p className="text-gray-600">Describe your project, skills needed, and budget</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center">2</div>
              </div>
              <h3 className="font-semibold text-lg mb-2">Browse Talent</h3>
              <p className="text-gray-600">Review profiles or let qualified talent apply to you</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center">3</div>
              </div>
              <h3 className="font-semibold text-lg mb-2">Shortlist & Interview</h3>
              <p className="text-gray-600">Compare candidates and conduct interviews</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center">4</div>
              </div>
              <h3 className="font-semibold text-lg mb-2">Hire & Collaborate</h3>
              <p className="text-gray-600">Make an offer and start working together</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mb-16 text-center bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Find the right talent and grow your business today 🚀</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of companies who have found exceptional talent through our platform.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-blue-600 hover:bg-gray-100 py-3 px-8 rounded-lg font-semibold">
              Post a Job
            </button>
            <button className="bg-blue-800 hover:bg-blue-900 text-white py-3 px-8 rounded-lg font-semibold border border-blue-700">
              Browse Talent
            </button>
          </div>
        </section>
      </main>

      {/* Talent Profile Modal */}
      {showModal && selectedTalent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-xl max-w-4xl w-full max-h-screen overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Talent Profile</h2>
                <button onClick={closeModal} className="text-gray-400 hover:text-gray-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <div className="relative mb-4">
                    <img src={selectedTalent.image} alt={selectedTalent.name} className="w-full h-64 object-cover rounded-xl" />
                    {selectedTalent.verified && (
                      <div className="absolute top-4 right-4 bg-blue-500 text-white rounded-full p-2">
                        <FiCheck className="text-lg" />
                      </div>
                    )}
                  </div>
                  
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold">{selectedTalent.name}</h3>
                    <p className="text-gray-600">{selectedTalent.role}</p>
                    
                    <div className="flex items-center justify-center mt-2 mb-4">
                      <div className="flex items-center text-yellow-500 mr-2">
                        <FiStar className="fill-current" />
                        <span className="ml-1 text-gray-700 font-medium">{selectedTalent.rating}</span>
                      </div>
                      <span className="text-gray-500">({selectedTalent.reviews} reviews)</span>
                    </div>
                    
                    <div className="mb-4">
                      <span className="text-2xl font-bold text-blue-600">{selectedTalent.rate}</span>
                      <span className="text-gray-500"> / hour</span>
                    </div>
                    
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium mb-4">
                      Hire Now
                    </button>
                    
                    <button className="w-full border border-gray-300 text-gray-700 hover:bg-gray-50 py-3 px-4 rounded-lg font-medium mb-4">
                      Book Interview
                    </button>
                    
                    <div className="text-left space-y-2">
                      <div className="flex items-center">
                        <FiMapPin className="text-gray-500 mr-2" />
                        <span>{selectedTalent.location}</span>
                      </div>
                      <div className="flex items-center">
                        <FiClock className="text-gray-500 mr-2" />
                        <span className="text-green-600 font-medium">{selectedTalent.availability}</span>
                      </div>
                      <div className="flex items-center">
                        <FiBriefcase className="text-gray-500 mr-2" />
                        <span>Available for new projects</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="md:w-2/3">
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-3">About Me</h3>
                    <p className="text-gray-700">
                      I'm a {selectedTalent.role} with 5+ years of experience helping companies build amazing products. 
                      My expertise includes {selectedTalent.skills.join(', ')}. I'm passionate about creating 
                      efficient, scalable solutions that deliver real business value.
                    </p>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-3">Skills & Expertise</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedTalent.skills.map(skill => (
                        <span key={skill} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-3">Work Experience</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium">Senior Developer at TechCorp</h4>
                        <p className="text-gray-600 text-sm">2020 - Present</p>
                        <p className="text-gray-700 mt-1">Led frontend development for customer dashboard serving 50k+ users.</p>
                      </div>
                      <div>
                        <h4 className="font-medium">Software Engineer at StartupX</h4>
                        <p className="text-gray-600 text-sm">2018 - 2020</p>
                        <p className="text-gray-700 mt-1">Full-stack development using React, Node.js, and MongoDB.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-3">Education</h3>
                    <div>
                      <h4 className="font-medium">BS in Computer Science, Stanford University</h4>
                      <p className="text-gray-600 text-sm">2014 - 2018</p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Portfolio</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <a href="#" className="border border-gray-200 rounded-lg p-3 hover:bg-gray-50 flex items-center">
                        <FiGithub className="text-gray-500 mr-2" />
                        <span>GitHub Profile</span>
                        <FiExternalLink className="text-gray-400 ml-auto" />
                      </a>
                      <a href="#" className="border border-gray-200 rounded-lg p-3 hover:bg-gray-50 flex items-center">
                        <FiExternalLink className="text-gray-500 mr-2" />
                        <span>Personal Website</span>
                        <FiExternalLink className="text-gray-400 ml-auto" />
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

export default FindTalent;