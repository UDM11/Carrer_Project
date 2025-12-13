import React, { useState } from 'react';
import { 
  FiBriefcase, 
  FiDollarSign, 
  FiMapPin, 
  FiClock, 
  FiGlobe,
  FiCheck,
  FiUser,
  FiMessageSquare,
  FiFileText,
  FiArrowRight,
  FiAward,
  FiFilter,
  FiMail,
  FiUsers, 
  FiStar
} from 'react-icons/fi';

const PostJob = () => {
  const [jobData, setJobData] = useState({
    title: '',
    category: '',
    skills: [],
    description: '',
    jobType: '',
    workMode: '',
    duration: '',
    compensationType: '',
    minBudget: '',
    maxBudget: '',
    currency: 'USD',
    negotiable: false,
    location: '',
    timezone: '',
    applyMethod: 'platform',
    externalLink: ''
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [showPreview, setShowPreview] = useState(false);

  const categories = [
    'Web Development',
    'Mobile Development',
    'UI/UX Design',
    'Graphic Design',
    'Data Science & AI',
    'Digital Marketing',
    'Content Writing',
    'Business & Finance',
    'IT & Networking',
    'Other'
  ];

  const skillsList = [
    'React', 'JavaScript', 'Python', 'Node.js', 'HTML/CSS', 'UI/UX', 'Figma',
    'Adobe Creative Suite', 'SEO', 'Social Media', 'Content Writing', 'Data Analysis',
    'Machine Learning', 'PHP', 'WordPress', 'Swift', 'Kotlin', 'AWS', 'Docker'
  ];

  const jobTypes = ['Full-time', 'Part-time', 'Freelance', 'Internship', 'Contract'];
  const workModes = ['Remote', 'Onsite', 'Hybrid'];
  const durations = ['1 month', '3 months', '6 months', '1 year', 'Ongoing'];
  const compensationTypes = ['Hourly', 'Salary', 'Project-based'];
  const currencies = ['USD', 'EUR', 'GBP', 'CAD', 'AUD', 'INR'];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setJobData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSkillToggle = (skill) => {
    setJobData(prev => ({
      ...prev,
      skills: prev.skills.includes(skill)
        ? prev.skills.filter(s => s !== skill)
        : [...prev.skills, skill]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would submit the job data to your backend here
    alert('Job posted successfully!');
  };

  const benefits = [
    {
      icon: <FiUsers className="text-2xl text-blue-500" />,
      title: 'Access Global Talent',
      description: 'Reach students and professionals from around the world'
    },
    {
      icon: <FiFilter className="text-2xl text-blue-500" />,
      title: 'Smart Filtering',
      description: 'Automatically match with candidates who fit your requirements'
    },
    {
      icon: <FiMessageSquare className="text-2xl text-blue-500" />,
      title: 'Direct Messaging',
      description: 'Communicate directly with applicants through our platform'
    },
    {
      icon: <FiAward className="text-2xl text-blue-500" />,
      title: 'Verified Portfolios',
      description: 'View verified student work and project portfolios'
    }
  ];

  const testimonials = [
    {
      quote: "We hired a top UI/UX designer within 3 days through this platform! The quality of talent here is exceptional.",
      author: "Sarah Johnson",
      role: "Product Manager at TechStart Inc.",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
    },
    {
      quote: "Posting our internship opportunity was incredibly easy, and we received qualified applications within hours.",
      author: "Michael Chen",
      role: "CTO at DataFlow Analytics",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
    },
    {
      quote: "The platform connected us with talented students who brought fresh perspectives to our projects.",
      author: "Emma Rodriguez",
      role: "Marketing Director at BrandWorks",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
     

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <section className="mb-16 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Post a Job & Hire the Right Talent</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Connect with skilled students, freelancers, and professionals for your project or role.
          </p>
          <div className="bg-blue-100 p-6 rounded-2xl max-w-2xl mx-auto">
            <div className="text-blue-800 text-sm font-medium mb-2">💡 Quick Tip</div>
            <p className="text-blue-700">
              Detailed job posts receive 3x more applications. Be specific about your requirements!
            </p>
          </div>
        </section>

        {/* Job Posting Form */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex mb-8">
              {[1, 2, 3].map(step => (
                <div key={step} className="flex-1 flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                    currentStep >= step ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'
                  }`}>
                    {step}
                  </div>
                  <div className={`text-sm ${currentStep >= step ? 'text-blue-600 font-medium' : 'text-gray-500'}`}>
                    {step === 1 ? 'Job Details' : step === 2 ? 'Compensation' : 'Application'}
                  </div>
                </div>
              ))}
            </div>

            {!showPreview ? (
              <form onSubmit={handleSubmit}>
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Job Details</h2>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Job Title *</label>
                      <input
                        type="text"
                        name="title"
                        value={jobData.title}
                        onChange={handleInputChange}
                        placeholder="e.g., React Developer Intern"
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Job Category *</label>
                      <select
                        name="category"
                        value={jobData.category}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                      >
                        <option value="">Select a category</option>
                        {categories.map(category => (
                          <option key={category} value={category}>{category}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Skills Required *</label>
                      <div className="flex flex-wrap gap-2">
                        {skillsList.map(skill => (
                          <button
                            type="button"
                            key={skill}
                            onClick={() => handleSkillToggle(skill)}
                            className={`px-3 py-1 rounded-full text-sm flex items-center ${
                              jobData.skills.includes(skill)
                                ? 'bg-blue-100 text-blue-800 border border-blue-300'
                                : 'bg-gray-100 text-gray-800 border border-gray-300'
                            }`}
                          >
                            {skill}
                            {jobData.skills.includes(skill) && (
                              <FiCheck className="ml-1" />
                            )}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Job Description *</label>
                      <textarea
                        name="description"
                        value={jobData.description}
                        onChange={handleInputChange}
                        rows={6}
                        placeholder="Describe the role, responsibilities, and requirements..."
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Job Type *</label>
                        <select
                          name="jobType"
                          value={jobData.jobType}
                          onChange={handleInputChange}
                          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          required
                        >
                          <option value="">Select type</option>
                          {jobTypes.map(type => (
                            <option key={type} value={type}>{type}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Work Mode *</label>
                        <select
                          name="workMode"
                          value={jobData.workMode}
                          onChange={handleInputChange}
                          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          required
                        >
                          <option value="">Select mode</option>
                          {workModes.map(mode => (
                            <option key={mode} value={mode}>{mode}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Duration</label>
                        <select
                          name="duration"
                          value={jobData.duration}
                          onChange={handleInputChange}
                          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        >
                          <option value="">Select duration</option>
                          {durations.map(duration => (
                            <option key={duration} value={duration}>{duration}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="flex justify-between pt-6">
                      <div></div>
                      <button
                        type="button"
                        onClick={() => setCurrentStep(2)}
                        className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium"
                      >
                        Next: Compensation
                      </button>
                    </div>
                  </div>
                )}

                {currentStep === 2 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Compensation & Budget</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Compensation Type *</label>
                        <select
                          name="compensationType"
                          value={jobData.compensationType}
                          onChange={handleInputChange}
                          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          required
                        >
                          <option value="">Select type</option>
                          {compensationTypes.map(type => (
                            <option key={type} value={type}>{type}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Currency *</label>
                        <select
                          name="currency"
                          value={jobData.currency}
                          onChange={handleInputChange}
                          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          required
                        >
                          {currencies.map(currency => (
                            <option key={currency} value={currency}>{currency}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          {jobData.compensationType === 'Hourly' ? 'Hourly Rate' : 
                           jobData.compensationType === 'Salary' ? 'Annual Salary' : 'Project Budget'} *
                        </label>
                        <div className="flex gap-2">
                          <input
                            type="number"
                            name="minBudget"
                            value={jobData.minBudget}
                            onChange={handleInputChange}
                            placeholder="Min"
                            className="flex-1 border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            required
                          />
                          <input
                            type="number"
                            name="maxBudget"
                            value={jobData.maxBudget}
                            onChange={handleInputChange}
                            placeholder="Max"
                            className="flex-1 border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            required
                          />
                        </div>
                      </div>

                      <div className="flex items-end">
                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            name="negotiable"
                            checked={jobData.negotiable}
                            onChange={handleInputChange}
                            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                          />
                          <span className="ml-2 text-sm text-gray-700">Negotiable</span>
                        </label>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                        <input
                          type="text"
                          name="location"
                          value={jobData.location}
                          onChange={handleInputChange}
                          placeholder="City, Country"
                          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Timezone (for remote)</label>
                        <select
                          name="timezone"
                          value={jobData.timezone}
                          onChange={handleInputChange}
                          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        >
                          <option value="">Any timezone</option>
                          <option value="EST">EST (Eastern Standard Time)</option>
                          <option value="PST">PST (Pacific Standard Time)</option>
                          <option value="CET">CET (Central European Time)</option>
                          <option value="GMT">GMT (Greenwich Mean Time)</option>
                          <option value="IST">IST (Indian Standard Time)</option>
                        </select>
                      </div>
                    </div>

                    <div className="flex justify-between pt-6">
                      <button
                        type="button"
                        onClick={() => setCurrentStep(1)}
                        className="border border-gray-300 text-gray-700 hover:bg-gray-50 py-3 px-6 rounded-lg font-medium"
                      >
                        Back
                      </button>
                      <button
                        type="button"
                        onClick={() => setCurrentStep(3)}
                        className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium"
                      >
                        Next: Application
                      </button>
                    </div>
                  </div>
                )}

                {currentStep === 3 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Application Options</h2>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-4">How would you like to receive applications?</label>
                      <div className="space-y-4">
                        <label className="flex items-start">
                          <input
                            type="radio"
                            name="applyMethod"
                            value="platform"
                            checked={jobData.applyMethod === 'platform'}
                            onChange={handleInputChange}
                            className="mt-1 mr-3"
                          />
                          <div>
                            <div className="font-medium">Through our platform</div>
                            <p className="text-sm text-gray-600">Candidates apply directly through TalentHub. We'll manage applications for you.</p>
                          </div>
                        </label>

                        <label className="flex items-start">
                          <input
                            type="radio"
                            name="applyMethod"
                            value="external"
                            checked={jobData.applyMethod === 'external'}
                            onChange={handleInputChange}
                            className="mt-1 mr-3"
                          />
                          <div>
                            <div className="font-medium">External website</div>
                            <p className="text-sm text-gray-600">Redirect candidates to your company's career  or application system.</p>
                          </div>
                        </label>
                      </div>
                    </div>

                    {jobData.applyMethod === 'external' && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Application URL *</label>
                        <input
                          type="url"
                          name="externalLink"
                          value={jobData.externalLink}
                          onChange={handleInputChange}
                          placeholder="https://yourcompany.com/careers"
                          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          required
                        />
                      </div>
                    )}

                    <div className="flex justify-between pt-6">
                      <button
                        type="button"
                        onClick={() => setCurrentStep(2)}
                        className="border border-gray-300 text-gray-700 hover:bg-gray-50 py-3 px-6 rounded-lg font-medium"
                      >
                        Back
                      </button>
                      <div className="space-x-4">
                        <button
                          type="button"
                          onClick={() => setShowPreview(true)}
                          className="border border-blue-600 text-blue-600 hover:bg-blue-50 py-3 px-6 rounded-lg font-medium"
                        >
                          Preview
                        </button>
                        <button
                          type="submit"
                          className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium"
                        >
                          Post Job
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </form>
            ) : (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Preview Your Job Posting</h2>
                
                <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold">{jobData.title}</h3>
                    <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                      {jobData.jobType}
                    </span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="flex items-center text-gray-600 text-sm">
                      <FiBriefcase className="mr-1" /> {jobData.category}
                    </span>
                    <span className="flex items-center text-gray-600 text-sm">
                      <FiMapPin className="mr-1" /> {jobData.location || 'Remote'}
                    </span>
                    <span className="flex items-center text-gray-600 text-sm">
                      <FiClock className="mr-1" /> {jobData.duration || 'Ongoing'}
                    </span>
                    <span className="flex items-center text-gray-600 text-sm">
                      <FiDollarSign className="mr-1" /> 
                      {jobData.minBudget && jobData.maxBudget 
                        ? `${jobData.currency} ${jobData.minBudget} - ${jobData.maxBudget}`
                        : 'Negotiable'
                      }
                    </span>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Job Description</h4>
                    <p className="text-gray-700 whitespace-pre-line">{jobData.description}</p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Skills Required</h4>
                    <div className="flex flex-wrap gap-2">
                      {jobData.skills.map(skill => (
                        <span key={skill} className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                    <span className="text-sm text-gray-500">Posted just now</span>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm">
                      Apply Now
                    </button>
                  </div>
                </div>
                
                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={() => setShowPreview(false)}
                    className="border border-gray-300 text-gray-700 hover:bg-gray-50 py-3 px-6 rounded-lg font-medium"
                  >
                    Edit Posting
                  </button>
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium"
                  >
                    Post Job
                  </button>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Benefits of Posting on TalentHub</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm p-6 text-center border border-gray-200">
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
                <div className="flex text-yellow-500 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FiStar key={i} className="fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">How It Works for Employers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center">1</div>
              </div>
              <h3 className="font-semibold text-lg mb-2">Post a Job</h3>
              <p className="text-gray-600">Create a detailed job posting with your requirements and budget</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center">2</div>
              </div>
              <h3 className="font-semibold text-lg mb-2">Review Applications</h3>
              <p className="text-gray-600">Filter and review applications from qualified candidates</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center">3</div>
              </div>
              <h3 className="font-semibold text-lg mb-2">Hire & Collaborate</h3>
              <p className="text-gray-600">Select the best candidate and start working together</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mb-16 text-center bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Find Your Ideal Candidate?</h2>
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
    </div>
  );
};

export default PostJob;