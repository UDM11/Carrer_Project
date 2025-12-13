import { useState } from 'react';
import { FiSearch, FiFilter, FiChevronRight, FiChevronDown, FiHeart, FiMapPin, FiBriefcase, FiDollarSign, FiClock, FiUser, FiBookmark, FiSend, FiCheck } from 'react-icons/fi';
import { FaLinkedin, FaTwitter, FaFacebook, FaRegSmileBeam, FaLaptopCode, FaPaintBrush, FaChartLine } from 'react-icons/fa';

const Jobs = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showJobForm, setShowJobForm] = useState(false);
  const [savedJobs, setSavedJobs] = useState([]);

  // Sample job data
  const jobs = [
    {
      id: 1,
      title: 'Senior Frontend Developer',
      company: 'TechInnovate',
      logo: 'https://images.unsplash.com/photo-1569012871812-f38ee64cd54c?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
      location: 'San Francisco, CA',
      type: 'Full-time',
      experience: 'Senior',
      salary: '$120,000 - $150,000',
      category: 'development',
      skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'],
      posted: '2 days ago',
      featured: true,
      description: 'We are looking for an experienced Frontend Developer to join our growing team. You will be responsible for building the next generation of web applications.',
      responsibilities: [
        'Develop responsive web applications using React',
        'Collaborate with UX designers and backend developers',
        'Write clean, maintainable code and perform code reviews',
        'Optimize applications for maximum speed and scalability'
      ],
      requirements: [
        '5+ years of experience with React and modern JavaScript',
        'Strong knowledge of TypeScript',
        'Experience with state management libraries (Redux, Zustand)',
        'Familiarity with testing frameworks (Jest, Cypress)'
      ],
      benefits: [
        'Health, dental, and vision insurance',
        'Flexible working hours and remote options',
        'Professional development budget',
        '401(k) matching'
      ]
    },
    {
      id: 2,
      title: 'UX/UI Designer',
      company: 'CreativeMinds',
      logo: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
      location: 'Remote',
      type: 'Full-time',
      experience: 'Mid-level',
      salary: '$80,000 - $100,000',
      category: 'design',
      skills: ['Figma', 'Sketch', 'User Research', 'Prototyping'],
      posted: '5 days ago',
      featured: true,
      description: 'Join our design team to create beautiful and functional user interfaces for our digital products.',
      responsibilities: [
        'Create wireframes, prototypes, and high-fidelity designs',
        'Conduct user research and usability testing',
        'Collaborate with product managers and developers',
        'Maintain and evolve our design system'
      ],
      requirements: [
        '3+ years of experience in UX/UI design',
        'Proficiency in Figma and other design tools',
        'Strong portfolio showcasing your design process',
        'Understanding of responsive design principles'
      ]
    },
    {
      id: 3,
      title: 'Data Scientist',
      company: 'DataInsights Inc.',
      logo: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
      location: 'New York, NY',
      type: 'Full-time',
      experience: 'Mid-level',
      salary: '$110,000 - $140,000',
      category: 'ai',
      skills: ['Python', 'Machine Learning', 'SQL', 'TensorFlow'],
      posted: '1 week ago',
      featured: true,
      description: 'Help us extract insights from complex data sets and build predictive models to drive business decisions.'
    },
    {
      id: 4,
      title: 'Marketing Specialist',
      company: 'GrowthHackers',
      logo: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
      location: 'Austin, TX',
      type: 'Full-time',
      experience: 'Entry-level',
      salary: '$50,000 - $65,000',
      category: 'marketing',
      skills: ['SEO', 'Content Marketing', 'Google Analytics', 'Social Media'],
      posted: '3 days ago',
      featured: false,
      description: 'We are looking for a creative Marketing Specialist to develop and implement marketing strategies.'
    },
    {
      id: 5,
      title: 'Product Manager',
      company: 'InnovateTech',
      logo: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
      location: 'Remote',
      type: 'Full-time',
      experience: 'Senior',
      salary: '$130,000 - $160,000',
      category: 'business',
      skills: ['Product Strategy', 'Agile', 'User Stories', 'Roadmapping'],
      posted: '1 day ago',
      featured: false,
      description: 'Lead product development from conception to launch and ensure alignment with business goals.'
    },
    {
      id: 6,
      title: 'DevOps Engineer',
      company: 'CloudSolutions',
      logo: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
      location: 'Seattle, WA',
      type: 'Full-time',
      experience: 'Mid-level',
      salary: '$100,000 - $130,000',
      category: 'it-software',
      skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'],
      posted: '4 days ago',
      featured: false,
      description: 'Implement and maintain our cloud infrastructure and ensure high availability of our services.'
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Michael Chen',
      role: 'Software Engineer',
      company: 'Google',
      story: 'I found my dream job through this platform. The application process was smooth, and I was able to connect with recruiters directly.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      role: 'Product Designer',
      company: 'Airbnb',
      story: 'As a hiring manager, this platform helped me find qualified candidates quickly. The filtering tools saved me countless hours.',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    {
      id: 3,
      name: 'David Kim',
      role: 'Data Scientist',
      company: 'Netflix',
      story: 'The personalized job recommendations matched my skills perfectly. I received multiple offers within two weeks of using the platform.',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    }
  ];

  const companies = [
    { name: 'Google', logo: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80' },
    { name: 'Microsoft', logo: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80' },
    { name: 'Amazon', logo: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80' },
    { name: 'Netflix', logo: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80' },
    { name: 'Meta', logo: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80' },
    { name: 'Apple', logo: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80' }
  ];

  const categories = [
    { id: 'all', name: 'All Categories', icon: <FiBriefcase className="mr-2" /> },
    { id: 'development', name: 'Development', icon: <FaLaptopCode className="mr-2" /> },
    { id: 'design', name: 'Design', icon: <FaPaintBrush className="mr-2" /> },
    { id: 'ai', name: 'AI & Data Science', icon: <FaRegSmileBeam className="mr-2" /> },
    { id: 'marketing', name: 'Marketing', icon: <FaChartLine className="mr-2" /> },
    { id: 'business', name: 'Business', icon: <FiBriefcase className="mr-2" /> },
    { id: 'it-software', name: 'IT & Software', icon: <FaLaptopCode className="mr-2" /> }
  ];

  const jobTypes = ['All Types', 'Full-time', 'Part-time', 'Contract', 'Internship', 'Freelance'];
  const experienceLevels = ['Any Experience', 'Entry-level', 'Mid-level', 'Senior', 'Executive'];
  const salaryRanges = ['Any Salary', '$0 - $50,000', '$50,000 - $100,000', '$100,000 - $150,000', '$150,000+'];

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          job.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || job.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredJobs = jobs.filter(job => job.featured);

  const toggleSavedJob = (jobId) => {
    if (savedJobs.includes(jobId)) {
      setSavedJobs(savedJobs.filter(id => id !== jobId));
    } else {
      setSavedJobs([...savedJobs, jobId]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Find Your Dream Job or Hire Top Talent</h1>
              <p className="text-xl mb-8 opacity-90">Browse thousands of job opportunities or post your openings to reach skilled professionals.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-blue-700 font-semibold py-3 px-6 rounded-lg hover:bg-blue-50 transition duration-300 flex items-center justify-center">
                  Explore Jobs
                </button>
                <button 
                  className="bg-transparent border-2 border-white text-white font-semibold py-3 px-6 rounded-lg hover:bg-white hover:bg-opacity-10 transition duration-300 flex items-center justify-center"
                  onClick={() => setShowJobForm(true)}
                >
                  Post a Job
                </button>
                <button className="bg-blue-800 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-900 transition duration-300 flex items-center justify-center">
                  Sign Up to Apply
                </button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-yellow-400 rounded-full opacity-20"></div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-green-400 rounded-full opacity-20"></div>
                <div className="relative bg-white p-6 rounded-2xl shadow-2xl max-w-md">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <FiBriefcase className="text-blue-600 text-xl" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-gray-800">Curated Job Listings</h3>
                      <p className="text-sm text-gray-600">Handpicked opportunities from top companies</p>
                    </div>
                  </div>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                      <FiUser className="text-purple-600 text-xl" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-gray-800">Direct Applications</h3>
                      <p className="text-sm text-gray-600">Apply directly to companies without middlemen</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <FiSend className="text-green-600 text-xl" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-gray-800">Quick Hiring Process</h3>
                      <p className="text-sm text-gray-600">Get responses faster with our streamlined system</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Companies */}
      <section className="py-8 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <p className="text-center text-gray-600 mb-6">Trusted by leading companies worldwide</p>
          <div className="flex flex-wrap justify-center gap-8">
            {companies.map((company, index) => (
              <img key={index} src={company.logo} alt={company.name} className="h-10 object-contain opacity-70 hover:opacity-100 transition-opacity" />
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-white shadow-sm">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="relative w-full md:w-1/2 mb-4 md:mb-0">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiSearch className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search jobs by title, company, or skills"
                className="pl-10 pr-4 py-3 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <button 
              className="flex items-center text-blue-600 font-medium"
              onClick={() => setShowFilters(!showFilters)}
            >
              <FiFilter className="mr-2" />
              Filters
              {showFilters ? <FiChevronDown className="ml-2" /> : <FiChevronRight className="ml-2" />}
            </button>
          </div>

          {/* Filters */}
          {showFilters && (
            <div className="mt-6 p-6 bg-gray-50 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <h3 className="font-medium mb-2">Category</h3>
                  <select 
                    className="w-full p-2 border border-gray-300 rounded-md"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  >
                    {categories.map(category => (
                      <option key={category.id} value={category.id}>{category.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Job Type</h3>
                  <select className="w-full p-2 border border-gray-300 rounded-md">
                    {jobTypes.map(type => (
                      <option key={type}>{type}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Experience Level</h3>
                  <select className="w-full p-2 border border-gray-300 rounded-md">
                    {experienceLevels.map(level => (
                      <option key={level}>{level}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Salary Range</h3>
                  <select className="w-full p-2 border border-gray-300 rounded-md">
                    {salaryRanges.map(range => (
                      <option key={range}>{range}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="font-medium mb-2">Location</h3>
                <div className="flex items-center">
                  <input 
                    type="text" 
                    placeholder="City, state, or remote" 
                    className="flex-1 p-2 border border-gray-300 rounded-md mr-2"
                  />
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Apply</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Browse by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.slice(1).map(category => (
              <div 
                key={category.id} 
                className={`p-6 rounded-lg border cursor-pointer transition-all duration-300 flex flex-col items-center justify-center ${selectedCategory === category.id ? 'bg-blue-50 border-blue-500' : 'bg-gray-50 border-gray-200 hover:shadow-md'}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                <div className="text-3xl text-blue-600 mb-3">{category.icon}</div>
                <h3 className="font-medium text-center">{category.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Jobs */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Featured Jobs</h2>
            <button className="text-blue-600 font-medium flex items-center">
              View all <FiChevronRight className="ml-1" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredJobs.map(job => (
              <div key={job.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border-l-4 border-blue-500">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center">
                      <img src={job.logo} alt={job.company} className="w-12 h-12 rounded-lg object-cover mr-4" />
                      <div>
                        <h3 className="font-bold text-lg">{job.title}</h3>
                        <p className="text-gray-600">{job.company}</p>
                      </div>
                    </div>
                    <button 
                      onClick={() => toggleSavedJob(job.id)}
                      className="text-gray-400 hover:text-blue-500"
                    >
                      {savedJobs.includes(job.id) ? (
                        <FiBookmark className="fill-current text-blue-500" />
                      ) : (
                        <FiBookmark />
                      )}
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <FiMapPin className="mr-1" />
                      {job.location}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <FiBriefcase className="mr-1" />
                      {job.type}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <FiUser className="mr-1" />
                      {job.experience}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {job.skills.slice(0, 3).map((skill, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md">
                        {skill}
                      </span>
                    ))}
                    {job.skills.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md">
                        +{job.skills.length - 3} more
                      </span>
                    )}
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-gray-500">
                      <FiClock className="inline mr-1" />
                      {job.posted}
                    </div>
                    {job.salary && (
                      <div className="font-medium text-blue-600">
                        {job.salary}
                      </div>
                    )}
                  </div>
                  <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Jobs */}
      <section className="py-12 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">All Job Listings</h2>
            <div className="flex items-center space-x-4">
              <span className="text-gray-600">Sort by:</span>
              <select className="p-2 border border-gray-300 rounded-md">
                <option>Newest</option>
                <option>Salary: High to Low</option>
                <option>Salary: Low to High</option>
                <option>Relevance</option>
              </select>
            </div>
          </div>
          <div className="space-y-6">
            {filteredJobs.map(job => (
              <div key={job.id} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex flex-col md:flex-row justify-between">
                  <div className="flex items-start mb-4 md:mb-0">
                    <img src={job.logo} alt={job.company} className="w-16 h-16 rounded-lg object-cover mr-6" />
                    <div>
                      <h3 className="font-bold text-xl">{job.title}</h3>
                      <p className="text-gray-600">{job.company}</p>
                      <div className="flex flex-wrap gap-4 mt-2">
                        <div className="flex items-center text-sm text-gray-500">
                          <FiMapPin className="mr-1" />
                          {job.location}
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <FiBriefcase className="mr-1" />
                          {job.type}
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <FiUser className="mr-1" />
                          {job.experience}
                        </div>
                        {job.salary && (
                          <div className="flex items-center text-sm text-gray-500">
                            <FiDollarSign className="mr-1" />
                            {job.salary}
                          </div>
                        )}
                      </div>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {job.skills.slice(0, 4).map((skill, index) => (
                          <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md">
                            {skill}
                          </span>
                        ))}
                        {job.skills.length > 4 && (
                          <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md">
                            +{job.skills.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <div className="flex items-center mb-4">
                      <div className="text-sm text-gray-500 mr-4">
                        <FiClock className="inline mr-1" />
                        {job.posted}
                      </div>
                      <button 
                        onClick={() => toggleSavedJob(job.id)}
                        className="text-gray-400 hover:text-blue-500"
                      >
                        {savedJobs.includes(job.id) ? (
                          <FiBookmark className="fill-current text-blue-500" />
                        ) : (
                          <FiBookmark />
                        )}
                      </button>
                    </div>
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map(testimonial => (
              <div key={testimonial.id} className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center mb-4">
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover" />
                  <div className="ml-4">
                    <h3 className="font-bold">{testimonial.name}</h3>
                    <p className="text-gray-600 text-sm">{testimonial.role} • {testimonial.company}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.story}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto max-w-4xl text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Your Career or Hire Top Talent Today</h2>
          <p className="text-xl mb-8 opacity-90">Join thousands of professionals and companies connecting through our platform</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-blue-700 font-semibold py-3 px-8 rounded-lg hover:bg-blue-50 transition duration-300">
              Explore Jobs
            </button>
            <button className="bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:bg-opacity-10 transition duration-300">
              Post a Job
            </button>
            <button className="bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:bg-opacity-10 transition duration-300">
              Sign Up
            </button>
          </div>
        </div>
      </section>

      {/* Job Posting Modal */}
      {showJobForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-screen overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold">Post a Job</h3>
                <button 
                  className="text-gray-400 hover:text-gray-600"
                  onClick={() => setShowJobForm(false)}
                >
                  &times;
                </button>
              </div>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Job Title*</label>
                    <input type="text" className="w-full p-3 border border-gray-300 rounded-md" placeholder="e.g. Senior Frontend Developer" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Company Name*</label>
                    <input type="text" className="w-full p-3 border border-gray-300 rounded-md" placeholder="Your company name" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Job Category*</label>
                    <select className="w-full p-3 border border-gray-300 rounded-md" required>
                      {categories.slice(1).map(category => (
                        <option key={category.id}>{category.name}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Job Type*</label>
                    <select className="w-full p-3 border border-gray-300 rounded-md" required>
                      {jobTypes.slice(1).map(type => (
                        <option key={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Location*</label>
                    <input type="text" className="w-full p-3 border border-gray-300 rounded-md" placeholder="e.g. Remote, San Francisco, CA" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Experience Level*</label>
                    <select className="w-full p-3 border border-gray-300 rounded-md" required>
                      {experienceLevels.slice(1).map(level => (
                        <option key={level}>{level}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Salary Range</label>
                    <select className="w-full p-3 border border-gray-300 rounded-md">
                      {salaryRanges.map(range => (
                        <option key={range}>{range}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Application Email/URL*</label>
                    <input type="text" className="w-full p-3 border border-gray-300 rounded-md" placeholder="Email or application link" required />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Required Skills*</label>
                  <input type="text" className="w-full p-3 border border-gray-300 rounded-md" placeholder="Add skills (comma separated)" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Job Description*</label>
                  <textarea className="w-full p-3 border border-gray-300 rounded-md" rows="4" placeholder="Describe the role, responsibilities, and requirements" required></textarea>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">About the Company</label>
                  <textarea className="w-full p-3 border border-gray-300 rounded-md" rows="3" placeholder="Tell candidates about your company"></textarea>
                </div>
                <div className="flex justify-end space-x-4 pt-4">
                  <button 
                    type="button" 
                    className="px-6 py-3 text-gray-600 hover:text-gray-800"
                    onClick={() => setShowJobForm(false)}
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit" 
                    className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                  >
                    Post Job
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">CareerConnect</h3>
              <p className="text-gray-400">Connecting talented professionals with great companies worldwide.</p>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-gray-400 hover:text-white"><FaLinkedin /></a>
                <a href="#" className="text-gray-400 hover:text-white"><FaTwitter /></a>
                <a href="#" className="text-gray-400 hover:text-white"><FaFacebook /></a>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">For Job Seekers</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Browse Jobs</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Career Advice</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Upload Resume</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Job Alerts</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">For Employers</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Post a Job</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Browse Candidates</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Pricing Plans</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Employer Resources</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Help Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>© 2025 CareerConnect. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Jobs;