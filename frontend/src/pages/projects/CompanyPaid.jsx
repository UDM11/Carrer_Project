import React, { useState } from 'react';
import { FaSearch, FaBriefcase, FaUserTie, FaCheckCircle, FaClock, FaMoneyBillWave, FaShieldAlt, FaCreditCard, FaChartLine, FaBookOpen, FaQuoteLeft, FaStar, FaRegStar, FaArrowRight } from 'react-icons/fa';

const CompanyPaid = () => {
  const [activePackage, setActivePackage] = useState('standard');
  const [showProjectForm, setShowProjectForm] = useState(false);
  
  // Sample data for talent
  const talentProfiles = [
    {
      id: 1,
      name: "Alex Johnson",
      role: "Frontend Developer",
      skills: ["React", "JavaScript", "TypeScript", "CSS"],
      certifications: ["React Certified", "Web Development Professional"],
      rate: "$45/hr",
      rating: 4.8,
      projects: 12,
      available: true
    },
    {
      id: 2,
      name: "Samantha Lee",
      role: "UX/UI Designer",
      skills: ["Figma", "UI Design", "User Research", "Prototyping"],
      certifications: ["Google UX Certified", "Design Thinking Expert"],
      rate: "$50/hr",
      rating: 4.9,
      projects: 8,
      available: true
    },
    {
      id: 3,
      name: "Michael Chen",
      role: "Data Scientist",
      skills: ["Python", "Machine Learning", "SQL", "Data Visualization"],
      certifications: ["AWS Certified", "Data Science Professional"],
      rate: "$60/hr",
      rating: 4.7,
      projects: 15,
      available: false
    },
    {
      id: 4,
      name: "Priya Sharma",
      role: "Full Stack Developer",
      skills: ["Node.js", "React", "MongoDB", "Express"],
      certifications: ["MERN Stack Certified", "AWS Developer"],
      rate: "$55/hr",
      rating: 4.9,
      projects: 10,
      available: true
    }
  ];

  const packages = [
    {
      id: 'basic',
      name: 'Basic',
      price: '$99',
      features: [
        'Post 1 project/job',
        'Up to 10 applications',
        'Basic talent filtering',
        'Standard support'
      ],
      recommended: false
    },
    {
      id: 'standard',
      name: 'Standard',
      price: '$249',
      features: [
        'Post 3 projects/jobs',
        'Unlimited applications',
        'Advanced talent filtering',
        'Highlighted listings',
        'Priority support'
      ],
      recommended: true
    },
    {
      id: 'premium',
      name: 'Premium',
      price: '$499',
      features: [
        'Unlimited projects/jobs',
        'Unlimited applications',
        'Featured listings',
        'Mentor consultation',
        'Dedicated account manager',
        '24/7 premium support'
      ],
      recommended: false
    }
  ];

  const successStories = [
    {
      id: 1,
      company: "TechStart Inc.",
      talent: "Frontend Developer",
      outcome: "Redesigned customer portal leading to 35% increase in user engagement",
      duration: "3 months",
      rating: 4.9
    },
    {
      id: 2,
      company: "DataDrive Solutions",
      talent: "Data Scientist",
      outcome: "Built predictive model that improved forecasting accuracy by 42%",
      duration: "5 months",
      rating: 4.8
    },
    {
      id: 3,
      company: "DesignStudio",
      talent: "UX/UI Designer",
      outcome: "Created new design system that reduced development time by 25%",
      duration: "2 months",
      rating: 5.0
    }
  ];

  const benefits = [
    {
      title: "Verified, Certified Talent",
      description: "All talents are verified and hold relevant certifications",
      icon: <FaCheckCircle />
    },
    {
      title: "Pay for Results",
      description: "Only pay for completed milestones and deliverables",
      icon: <FaMoneyBillWave />
    },
    {
      title: "Real-time Progress Tracking",
      description: "Monitor project progress with our dashboard tools",
      icon: <FaChartLine />
    },
    {
      title: "Expert Mentorship",
      description: "Connect with industry experts and mentors",
      icon: <FaUserTie />
    }
  ];

  const paymentMethods = [
    { name: "Credit Card", icon: <FaCreditCard /> },
    { name: "Bank Transfer", icon: <FaMoneyBillWave /> },
    { name: "Escrow Protection", icon: <FaShieldAlt /> }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Hire Top Talent or Sponsor Learning Programs</h1>
              <p className="text-xl mb-8">Access skilled students, certified learners, and industry-ready professionals. Post paid projects or jobs and get results fast.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => setShowProjectForm(true)}
                  className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition duration-300 flex items-center justify-center"
                >
                  <FaBriefcase className="mr-2" /> Post a Paid Project
                </button>
                <button className="bg-indigo-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-900 transition duration-300 flex items-center justify-center">
                  <FaUserTie className="mr-2" /> Hire Certified Talent
                </button>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=2069" 
                alt="Professionals collaborating" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Companies Choose Us</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                  {benefit.icon}
                </div>
                <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Paid Project Packages</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Choose the package that works best for your hiring needs
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div 
                key={pkg.id} 
                className={`bg-white rounded-xl shadow-md overflow-hidden ${pkg.recommended ? 'border-2 border-blue-500 relative' : 'border border-gray-200'}`}
              >
                {pkg.recommended && (
                  <div className="bg-blue-500 text-white text-center py-1 text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-center mb-2">{pkg.name}</h3>
                  <div className="text-3xl font-bold text-center mb-6 text-blue-600">{pkg.price}</div>
                  
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <FaCheckCircle className="text-green-500 mr-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button 
                    className={`w-full py-3 rounded-lg font-semibold transition duration-300 ${pkg.recommended ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
                    onClick={() => setActivePackage(pkg.id)}
                  >
                    Select Package
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Talent Browse Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Browse Certified Talent</h2>
            <div className="flex items-center">
              <div className="relative">
                <FaSearch className="absolute left-3 top-3 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Search by skill or role..." 
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {talentProfiles.map(talent => (
              <div key={talent.id} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300">
                <div className="flex items-start">
                  <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                    <FaUserTie className="text-gray-500 text-2xl" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-bold text-lg">{talent.name}</h3>
                        <p className="text-gray-600">{talent.role}</p>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${talent.available ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                        {talent.available ? 'Available' : 'Not Available'}
                      </span>
                    </div>
                    
                    <div className="flex items-center mt-2 mb-4">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          i < Math.floor(talent.rating) ? 
                            <FaStar key={i} /> : 
                            <FaRegStar key={i} />
                        ))}
                      </div>
                      <span className="ml-2 text-sm text-gray-600">{talent.rating} ({talent.projects} projects)</span>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-medium mb-2">Skills</h4>
                      <div className="flex flex-wrap gap-2">
                        {talent.skills.map((skill, index) => (
                          <span key={index} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-medium mb-2">Certifications</h4>
                      <div className="flex flex-wrap gap-2">
                        {talent.certifications.map((cert, index) => (
                          <span key={index} className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                            {cert}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-200">
                  <div className="text-lg font-semibold">{talent.rate}</div>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
                    {talent.available ? 'Hire Now' : 'View Profile'}
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <button className="bg-gray-100 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition duration-300 flex items-center justify-center mx-auto">
              Load More Talent <FaArrowRight className="ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map(story => (
              <div key={story.id} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <FaBriefcase className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold">{story.company}</h3>
                    <p className="text-sm text-gray-600">Hired: {story.talent}</p>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4">{story.outcome}</p>
                
                <div className="flex justify-between items-center mb-4">
                  <div className="text-sm text-gray-600">
                    <FaClock className="inline mr-1" /> {story.duration}
                  </div>
                  <div className="flex items-center">
                    <div className="flex text-yellow-400 mr-1">
                      {[...Array(5)].map((_, i) => (
                        i < Math.floor(story.rating) ? 
                          <FaStar key={i} size={14} /> : 
                          <FaRegStar key={i} size={14} />
                      ))}
                    </div>
                    <span className="text-sm font-semibold">{story.rating}</span>
                  </div>
                </div>
                
                <button className="w-full bg-gray-100 text-gray-800 py-2 rounded-lg font-semibold hover:bg-gray-200 transition duration-300">
                  Read Full Case Study
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">How It Works</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Simple process to find and hire the best talent for your projects
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                1
              </div>
              <h3 className="font-bold text-lg mb-2">Choose & Post</h3>
              <p className="text-gray-600">Select a package and post your project or job requirements</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                2
              </div>
              <h3 className="font-bold text-lg mb-2">Browse & Select</h3>
              <p className="text-gray-600">Review applications or browse our certified talent directory</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                3
              </div>
              <h3 className="font-bold text-lg mb-2">Collaborate & Track</h3>
              <p className="text-gray-600">Work with your talent and track progress through our platform</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                4
              </div>
              <h3 className="font-bold text-lg mb-2">Pay & Review</h3>
              <p className="text-gray-600">Pay securely and review the talent based on their performance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Payment & Security Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Secure Payment & Protection</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {paymentMethods.map((method, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center">
                <div className="text-3xl text-blue-600 mb-4 flex justify-center">
                  {method.icon}
                </div>
                <h3 className="font-bold text-lg mb-2">{method.name}</h3>
                <p className="text-gray-600">Secure and reliable payment method with full protection</p>
              </div>
            ))}
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-8">
            <div className="flex items-center mb-6">
              <FaShieldAlt className="text-3xl text-blue-600 mr-4" />
              <h3 className="text-2xl font-bold">Your Security is Our Priority</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Escrow Protection</h4>
                <p className="text-gray-600">Funds are held securely until project milestones are completed to your satisfaction</p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Dispute Resolution</h4>
                <p className="text-gray-600">Our team mediates any issues to ensure fair outcomes for both parties</p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Data Encryption</h4>
                <p className="text-gray-600">All sensitive information and payments are encrypted end-to-end</p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Verified Professionals</h4>
                <p className="text-gray-600">Every talent on our platform is thoroughly vetted and certified</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Hiring or Post Your Paid Project Today</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            Join thousands of companies that have found success with our platform
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={() => setShowProjectForm(true)}
              className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition duration-300 flex items-center justify-center"
            >
              <FaBriefcase className="mr-2" /> Post Paid Project
            </button>
            <button className="bg-indigo-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-900 transition duration-300 flex items-center justify-center">
              <FaUserTie className="mr-2" /> Browse Certified Talent
            </button>
          </div>
        </div>
      </section>

      {/* Project Submission Modal */}
      {showProjectForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold">Post a Paid Project</h3>
                <button 
                  onClick={() => setShowProjectForm(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  &times;
                </button>
              </div>
              
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Project/Job Title</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., React Developer Needed for E-commerce Site"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Project Description</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Describe the project scope, requirements, and deliverables..."
                  ></textarea>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option value="">Select a category</option>
                      <option value="development">Development</option>
                      <option value="design">Design</option>
                      <option value="marketing">Marketing</option>
                      <option value="writing">Writing & Content</option>
                      <option value="business">Business & Consulting</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Skills Required</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="e.g., React, Node.js, MongoDB"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Budget</label>
                    <div className="flex">
                      <span className="inline-flex items-center px-3 border border-r-0 border-gray-300 bg-gray-50 text-gray-500 rounded-l-lg">
                        $
                      </span>
                      <input 
                        type="number" 
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Amount"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Duration</label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option value="">Select duration</option>
                      <option value="1-2">1-2 weeks</option>
                      <option value="2-4">2-4 weeks</option>
                      <option value="1-3">1-3 months</option>
                      <option value="3-6">3-6 months</option>
                      <option value="6+">6+ months</option>
                    </select>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Team Size Needed</label>
                    <input 
                      type="number" 
                      min="1"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Number of people"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Deadline</label>
                    <input 
                      type="date" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Reference Files (Optional)</label>
                  <input 
                    type="file" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                <div className="flex justify-end gap-4 pt-4">
                  <button 
                    type="button"
                    onClick={() => setShowProjectForm(false)}
                    className="px-4 py-2 text-gray-700 hover:text-gray-900 font-medium"
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit"
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
                  >
                    Post Project
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

     
    </div>
  );
};

export default CompanyPaid;