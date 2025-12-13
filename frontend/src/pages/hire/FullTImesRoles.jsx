import React, { useState } from 'react';
import { 
  FiSearch, 
  FiMapPin, 
  FiBriefcase, 
  FiDollarSign, 
  FiClock,
  FiBookmark,
  FiArrowRight,
  FiUser,
  FiAward,
  FiFileText,
  FiMail,
  FiExternalLink,
  FiCheck
} from 'react-icons/fi';

const FullTimesRoles = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [selectedJob, setSelectedJob] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [applyMethod, setApplyMethod] = useState('platform');

  const categories = [
    { id: 'development', name: 'Development', icon: <FiBriefcase className="text-blue-500" /> },
    { id: 'design', name: 'Design', icon: <FiBriefcase className="text-purple-500" /> },
    { id: 'marketing', name: 'Marketing & Business', icon: <FiBriefcase className="text-green-500" /> },
    { id: 'it', name: 'IT & Networking', icon: <FiBriefcase className="text-red-500" /> },
    { id: 'education', name: 'Education & Training', icon: <FiBriefcase className="text-yellow-500" /> }
  ];

  const locations = ['Remote', 'New York', 'San Francisco', 'London', 'Berlin', 'Tokyo', 'Hybrid'];

  const featuredEmployers = [
    {
      id: 1,
      name: 'TechCorp',
      industry: 'Technology',
      logo: 'https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
      openPositions: 12
    },
    {
      id: 2,
      name: 'DesignStudio',
      industry: 'Design',
      logo: 'https://images.unsplash.com/photo-1569003339405-ea396a5a8a90?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
      openPositions: 8
    },
    {
      id: 3,
      name: 'DataFlow',
      industry: 'Data & Analytics',
      logo: 'https://images.unsplash.com/photo-1568967729548-e369dbdbe19f?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
      openPositions: 5
    }
  ];

  const jobListings = [
    {
      id: 1,
      title: 'Frontend Developer',
      company: 'TechCorp',
      logo: 'https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
      location: 'Remote',
      experience: 'Mid-level',
      salary: '$90,000 - $120,000',
      posted: '2 days ago',
      type: 'Full-time',
      category: 'development',
      description: 'We are looking for a skilled Frontend Developer to join our growing team. You will be responsible for building user interfaces and implementing visual elements that users see and interact with in web applications.',
      responsibilities: [
        'Develop new user-facing features',
        'Build reusable code and libraries for future use',
        'Ensure the technical feasibility of UI/UX designs',
        'Optimize application for maximum speed and scalability',
        'Collaborate with back-end developers and web designers'
      ],
      requirements: [
        '3+ years of experience with React.js',
        'Proficient understanding of web markup, including HTML5, CSS3',
        'Strong understanding of JavaScript and ES6+ features',
        'Experience with state management libraries (Redux, Context API)',
        'Familiarity with RESTful APIs and modern authorization mechanisms'
      ],
      benefits: [
        'Health, dental, and vision insurance',
        '401(k) matching',
        'Flexible work hours',
        'Remote work options',
        'Professional development budget'
      ],
      deadline: '2025-10-15'
    },
    {
      id: 2,
      title: 'UI/UX Designer',
      company: 'DesignStudio',
      logo: 'https://images.unsplash.com/photo-1569003339405-ea396a5a8a90?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
      location: 'San Francisco',
      experience: 'Mid-level',
      salary: '$85,000 - $110,000',
      posted: '1 day ago',
      type: 'Full-time',
      category: 'design',
      description: 'Join our design team to create beautiful, functional user experiences for our clients. You will work closely with product managers and developers to bring designs to life.',
      responsibilities: [
        'Create user-centered designs by understanding business requirements',
        'Develop UI mockups and prototypes',
        'Identify and troubleshoot UX problems',
        'Adhere to style standards on fonts, colors, and images',
        'Collaborate with developers to implement designs'
      ],
      requirements: [
        'Proven work experience as a UI/UX Designer',
        'Portfolio of design projects',
        'Knowledge of wireframe tools (Figma, Sketch, etc)',
        'Team spirit and strong communication skills',
        'Good time-management skills'
      ],
      benefits: [
        'Competitive salary',
        'Health insurance',
        'Flexible schedule',
        'Creative work environment',
        'Continuing education opportunities'
      ],
      deadline: '2025-10-20'
    },
    {
      id: 3,
      title: 'Marketing Manager',
      company: 'DataFlow',
      logo: 'https://images.unsplash.com/photo-1568967729548-e369dbdbe19f?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
      location: 'New York',
      experience: 'Senior',
      salary: '$100,000 - $140,000',
      posted: '3 days ago',
      type: 'Full-time',
      category: 'marketing',
      description: 'We are seeking an experienced Marketing Manager to develop and implement marketing strategies to promote our products and services.',
      responsibilities: [
        'Develop marketing strategies to align with business goals',
        'Manage and execute campaigns across various channels',
        'Analyze market trends and prepare forecasts',
        'Generate new leads and increase brand awareness',
        'Collaborate with sales and product development teams'
      ],
      requirements: [
        '5+ years of experience in marketing',
        'Experience with digital marketing tools and techniques',
        'Strong analytical skills and data-driven thinking',
        'Excellent communication and leadership skills',
        'BSc degree in Marketing or relevant field'
      ],
      benefits: [
        'Competitive compensation package',
        'Performance bonuses',
        'Comprehensive health benefits',
        'Flexible work arrangements',
        'Travel opportunities'
      ],
      deadline: '2025-10-25'
    },
    {
      id: 4,
      title: 'DevOps Engineer',
      company: 'TechCorp',
      logo: 'https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
      location: 'Remote',
      experience: 'Senior',
      salary: '$110,000 - $150,000',
      posted: '5 days ago',
      type: 'Full-time',
      category: 'it',
      description: 'We are looking for a DevOps Engineer to help us build functional systems that improve customer experience.',
      responsibilities: [
        'Implement automation tools and frameworks',
        'Build and maintain CI/CD pipelines',
        'Monitor and troubleshoot production systems',
        'Collaborate with software developers to ensure smooth deployment',
        'Ensure security best practices are implemented'
      ],
      requirements: [
        'Experience with AWS, Azure, or GCP',
        'Knowledge of Docker, Kubernetes, and containerization',
        'Experience with infrastructure as code (Terraform, CloudFormation)',
        'Strong background in Linux/Unix administration',
        'Understanding of network protocols and security'
      ],
      benefits: [
        'Remote work flexibility',
        'Competitive salary and stock options',
        'Learning and development budget',
        'Health and wellness programs',
        'Home office stipend'
      ],
      deadline: '2025-10-30'
    },
    {
      id: 5,
      title: 'Technical Trainer',
      company: 'DataFlow',
      logo: 'https://images.unsplash.com/photo-1568967729548-e369dbdbe19f?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
      location: 'London',
      experience: 'Mid-level',
      salary: '$70,000 - $90,000',
      posted: '1 week ago',
      type: 'Full-time',
      category: 'education',
      description: 'Join our education team to develop and deliver technical training programs for clients and internal staff.',
      responsibilities: [
        'Develop technical training programs and curriculum',
        'Deliver engaging training sessions in-person and online',
        'Create training materials and documentation',
        'Assess training effectiveness and make improvements',
        'Stay current with industry trends and technologies'
      ],
      requirements: [
        'Experience in technical training or teaching',
        'Strong knowledge of software development concepts',
        'Excellent presentation and communication skills',
        'Ability to explain complex concepts clearly',
        'Bachelor\'s degree in Computer Science or related field'
      ],
      benefits: [
        'Competitive salary',
        'Professional development opportunities',
        'Travel opportunities',
        'Flexible scheduling',
        'Comprehensive benefits package'
      ],
      deadline: '2025-11-05'
    }
  ];

  const successStories = [
    {
      id: 1,
      name: 'Alex Johnson',
      role: 'Software Engineer',
      company: 'TechStart Inc.',
      story: 'I found my dream job through this platform. The application process was smooth, and I was hired within two weeks!',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
    },
    {
      id: 2,
      name: 'Maria Rodriguez',
      role: 'Product Designer',
      company: 'DesignHub',
      story: 'The platform connected me with innovative companies that value creativity. I love my new role and the team I work with.',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
    },
    {
      id: 3,
      name: 'James Wilson',
      role: 'Data Scientist',
      company: 'DataWorks',
      story: 'After months of searching, I found the perfect role that matches my skills and career goals through this platform.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
    }
  ];

  const careerResources = [
    {
      title: 'Resume Templates',
      description: 'Professional templates to help you stand out',
      icon: <FiFileText className="text-2xl text-blue-500" />
    },
    {
      title: 'Interview Prep',
      description: 'Guides and tips for acing your interviews',
      icon: <FiUser className="text-2xl text-green-500" />
    },
    {
      title: 'Career Counseling',
      description: 'Get personalized advice from industry experts',
      icon: <FiAward className="text-2xl text-purple-500" />
    }
  ];

  const openJobDetail = (job) => {
    setSelectedJob(job);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedJob(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
     
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <section className="mb-16 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Explore Full-Time Career Opportunities</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Find your next big role with top companies and organizations.
          </p>
          
          {/* Search Bar */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiSearch className="text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search jobs (e.g., Software Engineer, Marketing Manager)"
                  className="pl-10 pr-4 py-3 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="flex-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiMapPin className="text-gray-400" />
                </div>
                <select
                  className="pl-10 pr-4 py-3 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={locationFilter}
                  onChange={(e) => setLocationFilter(e.target.value)}
                >
                  <option value="">All Locations</option>
                  {locations.map(location => (
                    <option key={location} value={location}>{location}</option>
                  ))}
                </select>
              </div>
              
              <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg flex items-center justify-center">
                <FiSearch className="mr-2" /> Search Jobs
              </button>
            </div>
          </div>
        </section>

        {/* Featured Employers Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Employers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredEmployers.map(employer => (
              <div key={employer.id} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="p-6 text-center">
                  <img src={employer.logo} alt={employer.name} className="w-16 h-16 mx-auto mb-4 rounded-full object-cover" />
                  <h3 className="font-semibold text-lg mb-2">{employer.name}</h3>
                  <p className="text-gray-600 mb-4">{employer.industry}</p>
                  <div className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full inline-block mb-4">
                    {employer.openPositions} open positions
                  </div>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg">
                    View Jobs
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Job Listings Section */}
        <section className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Available Full-Time Roles</h2>
            <span className="text-gray-500">{jobListings.length} jobs found</span>
          </div>
          
          <div className="space-y-4">
            {jobListings.map(job => (
              <div key={job.id} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200 hover:shadow-md transition-shadow">
                <div className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div className="flex items-start mb-4 md:mb-0">
                      <img src={job.logo} alt={job.company} className="w-12 h-12 rounded-lg object-cover mr-4" />
                      <div>
                        <h3 className="font-bold text-lg">{job.title}</h3>
                        <p className="text-gray-600">{job.company}</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4 md:mb-0">
                      <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full flex items-center">
                        <FiMapPin className="mr-1" /> {job.location}
                      </span>
                      <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">
                        {job.experience}
                      </span>
                      {job.salary && (
                        <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full flex items-center">
                          <FiDollarSign className="mr-1" /> {job.salary}
                        </span>
                      )}
                    </div>
                    
                    <div className="flex flex-col items-end">
                      <span className="text-gray-500 text-sm mb-2 flex items-center">
                        <FiClock className="mr-1" /> {job.posted}
                      </span>
                      <button 
                        onClick={() => openJobDetail(job)}
                        className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm"
                      >
                        Apply Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Browse by Categories Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Browse by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {categories.map(category => (
              <div 
                key={category.id} 
                className="bg-white rounded-xl shadow-sm p-4 text-center border border-gray-200 hover:shadow-md transition-shadow cursor-pointer"
              >
                <div className="text-2xl mb-2 flex justify-center">{category.icon}</div>
                <h3 className="font-semibold text-sm">{category.name}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Career Resources Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Career Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {careerResources.map((resource, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 hover:shadow-md transition-shadow">
                <div className="flex justify-center mb-4">
                  {resource.icon}
                </div>
                <h3 className="font-semibold text-lg mb-2 text-center">{resource.title}</h3>
                <p className="text-gray-600 text-center">{resource.description}</p>
                <button className="w-full mt-4 text-blue-600 hover:text-blue-800 font-medium flex items-center justify-center">
                  Explore <FiArrowRight className="ml-1" />
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Success Stories Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map(story => (
              <div key={story.id} className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
                <div className="flex items-center mb-4">
                  <img src={story.image} alt={story.name} className="w-12 h-12 rounded-full object-cover mr-4" />
                  <div>
                    <h3 className="font-medium">{story.name}</h3>
                    <p className="text-gray-600 text-sm">{story.role} at {story.company}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{story.story}"</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="mb-16 text-center bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Start Your Full-Time Career Today 🚀</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who have found their dream jobs through our platform.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-blue-600 hover:bg-gray-100 py-3 px-8 rounded-lg font-semibold">
              Explore Jobs
            </button>
            <button className="bg-blue-800 hover:bg-blue-900 text-white py-3 px-8 rounded-lg font-semibold border border-blue-700">
              Post a Job
            </button>
          </div>
        </section>
      </main>

      {/* Job Detail Modal */}
      {showModal && selectedJob && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-xl max-w-4xl w-full max-h-screen overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Job Details</h2>
                <button onClick={closeModal} className="text-gray-400 hover:text-gray-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="mb-6">
                <div className="flex items-start mb-4">
                  <img src={selectedJob.logo} alt={selectedJob.company} className="w-16 h-16 rounded-lg object-cover mr-4" />
                  <div>
                    <h3 className="text-xl font-bold">{selectedJob.title}</h3>
                    <p className="text-gray-600">{selectedJob.company}</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full flex items-center">
                        <FiMapPin className="mr-1" /> {selectedJob.location}
                      </span>
                      <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">
                        {selectedJob.experience}
                      </span>
                      {selectedJob.salary && (
                        <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full flex items-center">
                          <FiDollarSign className="mr-1" /> {selectedJob.salary}
                        </span>
                      )}
                      <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full flex items-center">
                        <FiClock className="mr-1" /> Posted {selectedJob.posted}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3">Job Description</h4>
                <p className="text-gray-700">{selectedJob.description}</p>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3">Responsibilities</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  {selectedJob.responsibilities.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3">Requirements</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  {selectedJob.requirements.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3">Benefits</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  {selectedJob.benefits.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3">Application Deadline</h4>
                <p className="text-gray-700">{new Date(selectedJob.deadline).toLocaleDateString()}</p>
              </div>
              
              <div className="border-t border-gray-200 pt-6">
                <h4 className="text-lg font-semibold mb-3">Apply for this Position</h4>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">How would you like to apply?</label>
                  <div className="flex gap-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="applyMethod"
                        value="platform"
                        checked={applyMethod === 'platform'}
                        onChange={() => setApplyMethod('platform')}
                        className="mr-2"
                      />
                      <span>Apply through platform</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="applyMethod"
                        value="external"
                        checked={applyMethod === 'external'}
                        onChange={() => setApplyMethod('external')}
                        className="mr-2"
                      />
                      <span>External application</span>
                    </label>
                  </div>
                </div>
                
                {applyMethod === 'platform' ? (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Upload Resume</label>
                      <input type="file" className="w-full border border-gray-300 rounded-lg p-2" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Cover Letter (Optional)</label>
                      <textarea className="w-full border border-gray-300 rounded-lg p-2 h-24" placeholder="Why are you interested in this position?"></textarea>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Portfolio Link (Optional)</label>
                      <input type="url" className="w-full border border-gray-300 rounded-lg p-2" placeholder="https://" />
                    </div>
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium">
                      Submit Application
                    </button>
                  </div>
                ) : (
                  <div>
                    <p className="text-gray-700 mb-4">You will be redirected to the company's career page to complete your application.</p>
                    <a 
                      href="#" 
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium flex items-center justify-center"
                    >
                      Continue to Application <FiExternalLink className="ml-2" />
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FullTimesRoles;