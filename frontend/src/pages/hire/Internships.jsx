import React, { useState } from 'react';
import { FaSearch, FaBriefcase, FaUserTie, FaMapMarkerAlt, FaClock, FaMoneyBillWave, FaLaptop, FaBuilding, FaGraduationCap, FaChartLine, FaBookOpen, FaQuoteLeft, FaArrowRight } from 'react-icons/fa';

const Internships = () => {
  const [activeTab, setActiveTab] = useState('students');
  
  // Sample data for internships
  const featuredInternships = [
    {
      id: 1,
      title: "Frontend Developer Intern",
      company: "TechCorp",
      logo: "/placeholder-company-logo.png",
      duration: "3 months",
      location: "Remote",
      stipend: "$1,500/month",
      skills: ["React", "JavaScript", "HTML/CSS"]
    },
    {
      id: 2,
      title: "UX Designer Intern",
      company: "DesignHub",
      logo: "/placeholder-company-logo.png",
      duration: "6 months",
      location: "San Francisco, CA",
      stipend: "$2,000/month",
      skills: ["Figma", "UI/UX", "Wireframing"]
    },
    {
      id: 3,
      title: "Data Science Intern",
      company: "DataWorks",
      logo: "/placeholder-company-logo.png",
      duration: "4 months",
      location: "New York, NY",
      stipend: "$2,200/month",
      skills: ["Python", "Machine Learning", "SQL"]
    }
  ];

  const allInternships = [
    ...featuredInternships,
    {
      id: 4,
      title: "Marketing Intern",
      company: "GrowthGurus",
      logo: "/placeholder-company-logo.png",
      duration: "3 months",
      location: "Remote",
      stipend: "$1,200/month",
      skills: ["SEO", "Content Creation", "Social Media"]
    },
    {
      id: 5,
      title: "Backend Developer Intern",
      company: "ServerStack",
      logo: "/placeholder-company-logo.png",
      duration: "5 months",
      location: "Austin, TX",
      stipend: "$2,500/month",
      skills: ["Node.js", "MongoDB", "API Development"]
    },
    {
      id: 6,
      title: "Product Management Intern",
      company: "ProductPioneers",
      logo: "/placeholder-company-logo.png",
      duration: "4 months",
      location: "Remote",
      stipend: "$2,300/month",
      skills: ["Product Strategy", "User Research", "Analytics"]
    }
  ];

  const studentProfiles = [
    {
      id: 1,
      name: "Alex Johnson",
      role: "Computer Science Student",
      skills: ["JavaScript", "React", "Node.js", "Python"],
      progress: 85,
      availability: "May - August 2024"
    },
    {
      id: 2,
      name: "Samantha Lee",
      role: "Design Student",
      skills: ["UI/UX", "Figma", "Illustrator", "Photoshop"],
      progress: 92,
      availability: "June - September 2024"
    },
    {
      id: 3,
      name: "Michael Chen",
      role: "Data Science Student",
      skills: ["Python", "R", "SQL", "Machine Learning"],
      progress: 78,
      availability: "Flexible"
    }
  ];

  const testimonials = [
    {
      id: 1,
      text: "This platform helped me land my dream internship at a tech startup. The application process was smooth and I got responses quickly!",
      author: "Jessica Kim",
      role: "Software Engineering Intern"
    },
    {
      id: 2,
      text: "As a small business, we found amazing talent through this platform. The filtering tools made it easy to find candidates with the right skills.",
      author: "David Miller",
      role: "Startup Founder"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Kickstart Your Career with Internships</h1>
              <p className="text-xl mb-8">Find the right internship or discover top student talent for your organization.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition duration-300 flex items-center justify-center">
                  <FaBriefcase className="mr-2" /> Explore Internships
                </button>
                <button className="bg-indigo-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-900 transition duration-300 flex items-center justify-center">
                  <FaUserTie className="mr-2" /> Post Internship
                </button>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1925" 
                alt="Students collaborating" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Search & Filters Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Find Your Perfect Internship</h2>
          
          <div className="bg-white rounded-xl shadow-md p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1 relative">
                <FaSearch className="absolute left-3 top-3 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Search by role, skills, or company" 
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex-1 relative">
                <FaMapMarkerAlt className="absolute left-3 top-3 text-gray-400" />
                <select className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="">All Locations</option>
                  <option value="remote">Remote</option>
                  <option value="hybrid">Hybrid</option>
                  <option value="new-york">New York</option>
                  <option value="san-francisco">San Francisco</option>
                </select>
              </div>
              <div className="flex-1 relative">
                <FaBriefcase className="absolute left-3 top-3 text-gray-400" />
                <select className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="">All Categories</option>
                  <option value="development">Development</option>
                  <option value="design">Design</option>
                  <option value="marketing">Marketing</option>
                  <option value="business">Business</option>
                </select>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center">
                <span className="mr-2 font-medium">Experience:</span>
                <select className="flex-1 border border-gray-300 rounded-lg px-2 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500">
                  <option value="">Any</option>
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                </select>
              </div>
              <div className="flex items-center">
                <span className="mr-2 font-medium">Duration:</span>
                <select className="flex-1 border border-gray-300 rounded-lg px-2 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500">
                  <option value="">Any</option>
                  <option value="1-3">1-3 months</option>
                  <option value="3-6">3-6 months</option>
                  <option value="6+">6+ months</option>
                </select>
              </div>
              <div className="flex items-center">
                <span className="mr-2 font-medium">Stipend:</span>
                <select className="flex-1 border border-gray-300 rounded-lg px-2 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500">
                  <option value="">Any</option>
                  <option value="paid">Paid</option>
                  <option value="unpaid">Unpaid</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Internships Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Featured Internships</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredInternships.map(internship => (
              <div key={internship.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center mr-4">
                      <FaBuilding className="text-gray-500 text-xl" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{internship.title}</h3>
                      <p className="text-gray-600">{internship.company}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-gray-600 mb-3">
                    <FaClock className="mr-2" />
                    <span className="text-sm">{internship.duration}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-600 mb-3">
                    <FaMapMarkerAlt className="mr-2" />
                    <span className="text-sm">{internship.location}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-600 mb-4">
                    <FaMoneyBillWave className="mr-2" />
                    <span className="text-sm">{internship.stipend}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {internship.skills.map((skill, index) => (
                      <span key={index} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Internships Listings */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">All Internship Opportunities</h2>
            <select className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="latest">Sort by: Latest</option>
              <option value="stipend">Sort by: Stipend</option>
              <option value="duration">Sort by: Duration</option>
              <option value="location">Sort by: Location</option>
            </select>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            {allInternships.map(internship => (
              <div key={internship.id} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300">
                <div className="flex flex-col md:flex-row justify-between">
                  <div className="mb-4 md:mb-0">
                    <h3 className="font-bold text-xl">{internship.title}</h3>
                    <div className="flex items-center mt-2">
                      <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center mr-3">
                        <FaBuilding className="text-gray-500" />
                      </div>
                      <div>
                        <p className="font-medium">{internship.company}</p>
                        <div className="flex items-center text-sm text-gray-600 mt-1">
                          <FaMapMarkerAlt className="mr-1" />
                          <span className="mr-3">{internship.location}</span>
                          <FaClock className="mr-1" />
                          <span>{internship.duration}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-end">
                    <p className="text-lg font-semibold text-green-600 mb-2">{internship.stipend}</p>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
                      Apply Now
                    </button>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="flex flex-wrap gap-2">
                    {internship.skills.map((skill, index) => (
                      <span key={index} className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <button className="bg-gray-100 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition duration-300">
              Load More Internships
            </button>
          </div>
        </div>
      </section>

      {/* Student Profiles / Talent Directory */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Student Talent Directory</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
            Discover talented students ready to contribute to your organization. Browse profiles and invite candidates to apply.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {studentProfiles.map(student => (
              <div key={student.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                      <FaGraduationCap className="text-gray-500 text-2xl" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{student.name}</h3>
                      <p className="text-gray-600">{student.role}</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium">Skill proficiency</span>
                      <span className="text-sm font-semibold">{student.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full" 
                        style={{ width: `${student.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-medium mb-2">Skills & Expertise</h4>
                    <div className="flex flex-wrap gap-2">
                      {student.skills.map((skill, index) => (
                        <span key={index} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-medium mb-1">Availability</h4>
                    <p className="text-sm text-gray-600">{student.availability}</p>
                  </div>
                  
                  <button className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300 flex items-center justify-center">
                    Invite to Apply <FaArrowRight className="ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">How It Works</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Our platform makes it easy for students to find internships and for companies to discover talent
          </p>
          
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-6 text-center">For Students</h3>
              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center font-bold mr-4">1</div>
                  <div>
                    <h4 className="font-semibold">Create Your Profile</h4>
                    <p className="text-gray-600">Showcase your skills, experience, and availability to potential employers.</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center font-bold mr-4">2</div>
                  <div>
                    <h4 className="font-semibold">Search & Apply</h4>
                    <p className="text-gray-600">Browse internships that match your skills and interests with our advanced filters.</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center font-bold mr-4">3</div>
                  <div>
                    <h4 className="font-semibold">Get Hired</h4>
                    <p className="text-gray-600">Complete interviews and start your internship journey with your new company.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-6 text-center">For Employers</h3>
              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-100 text-indigo-800 flex items-center justify-center font-bold mr-4">1</div>
                  <div>
                    <h4 className="font-semibold">Post Opportunities</h4>
                    <p className="text-gray-600">Create detailed internship listings with requirements, duration, and compensation.</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-100 text-indigo-800 flex items-center justify-center font-bold mr-4">2</div>
                  <div>
                    <h4 className="font-semibold">Review Applications</h4>
                    <p className="text-gray-600">Screen candidates, review profiles, and shortlist the best talent for your roles.</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-100 text-indigo-800 flex items-center justify-center font-bold mr-4">3</div>
                  <div>
                    <h4 className="font-semibold">Hire Talent</h4>
                    <p className="text-gray-600">Connect with selected candidates and onboard them to your team.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map(testimonial => (
              <div key={testimonial.id} className="bg-white rounded-xl shadow-md p-6">
                <FaQuoteLeft className="text-blue-600 text-2xl mb-4" />
                <p className="text-gray-700 italic mb-6">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Find Your Internship or Hire Talent Today</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            Join thousands of students and companies already using our platform to connect and grow together.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition duration-300 flex items-center justify-center">
              <FaBriefcase className="mr-2" /> Explore Internships
            </button>
            <button className="bg-indigo-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-900 transition duration-300 flex items-center justify-center">
              <FaUserTie className="mr-2" /> Post Internship
            </button>
          </div>
        </div>
      </section>

     
    </div>
  );
};

export default Internships;