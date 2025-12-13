import React, { useState } from 'react';
import { FaSearch, FaPlus, FaBriefcase, FaUserTie, FaCalendar, FaComment, FaChartLine, FaFilter, FaSort, FaEnvelope, FaVideo, FaCheckCircle, FaClock, FaTimesCircle, FaStar, FaGraduationCap, FaMapMarkerAlt, FaLink, FaEllipsisV, FaArrowRight } from 'react-icons/fa';

const ManageHiring = () => {
  const [activeJob, setActiveJob] = useState(1);
  const [statusFilter, setStatusFilter] = useState('all');
  const [showJobForm, setShowJobForm] = useState(false);
  const [showInterviewModal, setShowInterviewModal] = useState(false);
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  
  // Sample data for jobs
  const jobs = [
    {
      id: 1,
      title: "Frontend Developer",
      category: "Full-time",
      status: "open",
      applicants: 24,
      description: "We're looking for an experienced frontend developer with React expertise to join our team.",
      skills: ["React", "JavaScript", "CSS", "HTML"],
      location: "Remote",
      postedDate: "2024-09-15"
    },
    {
      id: 2,
      title: "UI/UX Design Intern",
      category: "Internship",
      status: "in-progress",
      applicants: 18,
      description: "Paid internship for design students interested in building real-world experience.",
      skills: ["Figma", "UI Design", "User Research", "Wireframing"],
      location: "Hybrid",
      postedDate: "2024-09-10"
    },
    {
      id: 3,
      title: "E-commerce Website",
      category: "Paid Project",
      status: "open",
      applicants: 12,
      description: "Build a responsive e-commerce site with payment integration.",
      skills: ["React", "Node.js", "MongoDB", "Stripe API"],
      location: "Remote",
      postedDate: "2024-09-18"
    },
    {
      id: 4,
      title: "AI Hackathon",
      category: "Hackathon",
      status: "closed",
      applicants: 36,
      description: "Annual AI hackathon with cash prizes and internship opportunities.",
      skills: ["Python", "Machine Learning", "Data Science", "AI"],
      location: "Onsite",
      postedDate: "2024-08-20"
    }
  ];

  // Sample data for applicants
  const applicants = {
    1: [
      {
        id: 101,
        name: "Alex Johnson",
        role: "Frontend Developer",
        skills: ["React", "JavaScript", "TypeScript", "CSS"],
        experience: "3 years",
        education: "BS Computer Science",
        portfolio: "alexjohnson.dev",
        rating: 4.8,
        status: "shortlisted",
        appliedDate: "2024-09-16",
        location: "San Francisco, CA"
      },
      {
        id: 102,
        name: "Samantha Lee",
        role: "UI Developer",
        skills: ["React", "Vue", "SASS", "UI Design"],
        experience: "2 years",
        education: "Design & Development Bootcamp",
        portfolio: "samanthalee.design",
        rating: 4.5,
        status: "applied",
        appliedDate: "2024-09-17",
        location: "Remote"
      },
      {
        id: 103,
        name: "Michael Chen",
        role: "Full Stack Developer",
        skills: ["React", "Node.js", "Python", "MongoDB"],
        experience: "4 years",
        education: "MS Computer Science",
        portfolio: "michaelchen.dev",
        rating: 4.9,
        status: "interview",
        appliedDate: "2024-09-15",
        location: "New York, NY"
      },
      {
        id: 104,
        name: "Priya Sharma",
        role: "Frontend Engineer",
        skills: ["React", "JavaScript", "Redux", "Jest"],
        experience: "2.5 years",
        education: "BS Software Engineering",
        portfolio: "priyasharma.dev",
        rating: 4.7,
        status: "hired",
        appliedDate: "2024-09-14",
        location: "Remote"
      }
    ],
    2: [
      {
        id: 201,
        name: "Jessica Williams",
        role: "UI/UX Designer",
        skills: ["Figma", "Sketch", "User Research", "Prototyping"],
        experience: "1 year",
        education: "BFA Design",
        portfolio: "jessicawilliams.design",
        rating: 4.6,
        status: "applied",
        appliedDate: "2024-09-11",
        location: "Chicago, IL"
      }
    ],
    3: [
      {
        id: 301,
        name: "David Kim",
        role: "Full Stack Developer",
        skills: ["React", "Node.js", "MongoDB", "AWS"],
        experience: "3 years",
        education: "BS Computer Engineering",
        portfolio: "davidkim.dev",
        rating: 4.8,
        status: "shortlisted",
        appliedDate: "2024-09-19",
        location: "Remote"
      }
    ],
    4: []
  };

  // Sample data for hired candidates
  const hiredCandidates = [
    {
      id: 104,
      name: "Priya Sharma",
      role: "Frontend Engineer",
      project: "Frontend Developer",
      startDate: "2024-10-01",
      deliverables: ["Component library", "User dashboard", "Responsive layouts"]
    },
    {
      id: 401,
      name: "Robert Taylor",
      role: "Backend Developer",
      project: "E-commerce Website",
      startDate: "2024-09-25",
      deliverables: ["Payment API", "Database design", "Authentication system"]
    }
  ];

  // Hiring pipeline stages
  const pipelineStages = [
    { id: 'applied', name: 'Applied', count: applicants[activeJob]?.filter(a => a.status === 'applied').length || 0 },
    { id: 'shortlisted', name: 'Shortlisted', count: applicants[activeJob]?.filter(a => a.status === 'shortlisted').length || 0 },
    { id: 'interview', name: 'Interview', count: applicants[activeJob]?.filter(a => a.status === 'interview').length || 0 },
    { id: 'hired', name: 'Hired', count: applicants[activeJob]?.filter(a => a.status === 'hired').length || 0 },
    { id: 'rejected', name: 'Rejected', count: applicants[activeJob]?.filter(a => a.status === 'rejected').length || 0 }
  ];

  // Get status icon
  const getStatusIcon = (status) => {
    switch(status) {
      case "applied": return <FaClock className="text-blue-500" />;
      case "shortlisted": return <FaStar className="text-yellow-500" />;
      case "interview": return <FaVideo className="text-purple-500" />;
      case "hired": return <FaCheckCircle className="text-green-500" />;
      case "rejected": return <FaTimesCircle className="text-red-500" />;
      default: return <FaClock className="text-gray-500" />;
    }
  };

  // Get status text
  const getStatusText = (status) => {
    switch(status) {
      case "applied": return "Applied";
      case "shortlisted": return "Shortlisted";
      case "interview": return "Interview";
      case "hired": return "Hired";
      case "rejected": return "Rejected";
      default: return "Unknown";
    }
  };

  // Get status color
  const getStatusColor = (status) => {
    switch(status) {
      case "applied": return "bg-blue-100 text-blue-800";
      case "shortlisted": return "bg-yellow-100 text-yellow-800";
      case "interview": return "bg-purple-100 text-purple-800";
      case "hired": return "bg-green-100 text-green-800";
      case "rejected": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Manage Your Hiring in One Place</h1>
              <p className="text-xl mb-6">Track applicants, review profiles, schedule interviews, and make smart hiring decisions.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => setShowJobForm(true)}
                  className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition duration-300 flex items-center justify-center"
                >
                  <FaPlus className="mr-2" /> Post New Job
                </button>
                <button className="bg-indigo-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-900 transition duration-300 flex items-center justify-center">
                  <FaUserTie className="mr-2" /> Browse Talent
                </button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2070" 
                alt="Hiring process" 
                className="rounded-lg shadow-xl max-w-md w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Job Overview Section */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Your Jobs & Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {jobs.map(job => (
              <div 
                key={job.id} 
                className={`bg-white rounded-xl shadow-md p-6 border-2 ${activeJob === job.id ? 'border-blue-500' : 'border-white'} hover:shadow-lg transition duration-300 cursor-pointer`}
                onClick={() => setActiveJob(job.id)}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-bold text-lg">{job.title}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${job.status === 'open' ? 'bg-green-100 text-green-800' : job.status === 'in-progress' ? 'bg-yellow-100 text-yellow-800' : 'bg-gray-100 text-gray-800'}`}>
                    {job.status === 'open' ? 'Open' : job.status === 'in-progress' ? 'In Progress' : 'Closed'}
                  </span>
                </div>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{job.description}</p>
                
                <div className="flex items-center text-sm text-gray-600 mb-3">
                  <FaBriefcase className="mr-2" />
                  <span>{job.category}</span>
                </div>
                
                <div className="flex items-center text-sm text-gray-600 mb-4">
                  <FaMapMarkerAlt className="mr-2" />
                  <span>{job.location}</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="text-sm text-gray-600">
                    <span className="font-semibold">{job.applicants}</span> applicants
                  </div>
                  <button className="text-blue-600 font-semibold text-sm">
                    View Applicants
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applicants Dashboard Section */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <h2 className="text-2xl font-bold">Applicants for {jobs.find(j => j.id === activeJob)?.title}</h2>
            
            <div className="flex flex-wrap gap-4">
              <div className="relative">
                <FaSearch className="absolute left-3 top-3 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Search applicants..." 
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div className="flex items-center gap-2">
                <FaFilter className="text-gray-500" />
                <select 
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">All Statuses</option>
                  {pipelineStages.map(stage => (
                    <option key={stage.id} value={stage.id}>
                      {stage.name} ({stage.count})
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex items-center gap-2">
                <FaSort className="text-gray-500" />
                <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="recent">Most Recent</option>
                  <option value="rating">Highest Rating</option>
                  <option value="experience">Most Experience</option>
                </select>
              </div>
            </div>
          </div>

          {/* Hiring Pipeline */}
          <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
            <h3 className="font-semibold mb-4">Hiring Pipeline</h3>
            <div className="flex justify-between">
              {pipelineStages.map(stage => (
                <div key={stage.id} className="text-center flex-1">
                  <div className={`font-semibold ${statusFilter === stage.id ? 'text-blue-600' : 'text-gray-700'}`}>
                    {stage.name}
                  </div>
                  <div className="text-2xl font-bold mt-2">{stage.count}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Applicants Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {applicants[activeJob]?.filter(app => statusFilter === 'all' || app.status === statusFilter).map(applicant => (
              <div key={applicant.id} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                      <FaUserTie className="text-gray-500 text-xl" />
                    </div>
                    <div>
                      <h3 className="font-bold">{applicant.name}</h3>
                      <p className="text-gray-600 text-sm">{applicant.role}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="flex text-yellow-400 mr-2">
                      <FaStar size={14} />
                      <span className="text-sm font-semibold ml-1">{applicant.rating}</span>
                    </div>
                    <button className="text-gray-500 hover:text-gray-700">
                      <FaEllipsisV />
                    </button>
                  </div>
                </div>
                
                <div className="mb-4">
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(applicant.status)}`}>
                    {getStatusIcon(applicant.status)} <span className="ml-1">{getStatusText(applicant.status)}</span>
                  </span>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-medium mb-2">Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {applicant.skills.slice(0, 3).map((skill, index) => (
                      <span key={index} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                        {skill}
                      </span>
                    ))}
                    {applicant.skills.length > 3 && (
                      <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                        +{applicant.skills.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="flex items-center text-sm text-gray-600 mb-1">
                    <FaGraduationCap className="mr-2" />
                    <span>{applicant.education}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600 mb-1">
                    <FaBriefcase className="mr-2" />
                    <span>{applicant.experience} experience</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <FaMapMarkerAlt className="mr-2" />
                    <span>{applicant.location}</span>
                  </div>
                </div>
                
                <div className="flex items-center text-sm text-gray-600 mb-4">
                  <FaLink className="mr-2" />
                  <a href={`https://${applicant.portfolio}`} className="text-blue-600 hover:underline">
                    {applicant.portfolio}
                  </a>
                </div>
                
                <div className="flex justify-between gap-2">
                  <button className="flex-1 bg-white text-blue-600 border border-blue-600 py-2 rounded-lg text-sm font-semibold hover:bg-blue-50">
                    <FaEnvelope className="inline mr-1" /> Message
                  </button>
                  <button 
                    onClick={() => {
                      setSelectedCandidate(applicant);
                      setShowInterviewModal(true);
                    }}
                    className="flex-1 bg-blue-600 text-white py-2 rounded-lg text-sm font-semibold hover:bg-blue-700"
                  >
                    <FaVideo className="inline mr-1" /> Interview
                  </button>
                </div>
                
                <div className="flex justify-between gap-2 mt-2">
                  <button className="flex-1 bg-gray-200 text-gray-800 py-2 rounded-lg text-sm font-semibold hover:bg-gray-300">
                    View Profile
                  </button>
                  {applicant.status === 'applied' && (
                    <button className="flex-1 bg-green-600 text-white py-2 rounded-lg text-sm font-semibold hover:bg-green-700">
                      Shortlist
                    </button>
                  )}
                  {applicant.status === 'shortlisted' && (
                    <button className="flex-1 bg-red-600 text-white py-2 rounded-lg text-sm font-semibold hover:bg-red-700">
                      Reject
                    </button>
                  )}
                  {applicant.status === 'interview' && (
                    <button className="flex-1 bg-green-600 text-white py-2 rounded-lg text-sm font-semibold hover:bg-green-700">
                      Hire
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {(!applicants[activeJob] || applicants[activeJob].length === 0) && (
            <div className="bg-white rounded-xl shadow-md p-8 text-center">
              <FaUserTie className="text-4xl text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No applicants yet</h3>
              <p className="text-gray-600 mb-4">When applicants apply to your job, they'll appear here.</p>
              <button className="text-blue-600 font-semibold">
                Share this job to attract applicants
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Hired Candidates Section */}
      {hiredCandidates.length > 0 && (
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">Hired Candidates</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {hiredCandidates.map(candidate => (
                <div key={candidate.id} className="bg-gray-50 rounded-xl shadow-sm p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                      <FaUserTie className="text-green-600 text-xl" />
                    </div>
                    <div>
                      <h3 className="font-bold">{candidate.name}</h3>
                      <p className="text-gray-600">{candidate.role}</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-medium mb-2">Project: {candidate.project}</h4>
                    <p className="text-sm text-gray-600">Started: {new Date(candidate.startDate).toLocaleDateString()}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Deliverables</h4>
                    <ul className="list-disc list-inside text-sm text-gray-600">
                      {candidate.deliverables.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex justify-end gap-2 mt-4">
                    <button className="bg-white text-blue-600 border border-blue-600 px-3 py-1 rounded-lg text-sm font-semibold hover:bg-blue-50">
                      Assign Mentor
                    </button>
                    <button className="bg-blue-600 text-white px-3 py-1 rounded-lg text-sm font-semibold hover:bg-blue-700">
                      View Progress
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Reports & Analytics Section */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Reports & Analytics</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white rounded-xl shadow-sm p-6 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">42</div>
              <div className="text-gray-600">Total Applications</div>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-6 text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">8</div>
              <div className="text-gray-600">Hires</div>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-6 text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">19%</div>
              <div className="text-gray-600">Conversion Rate</div>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-6 text-center">
              <div className="text-3xl font-bold text-yellow-600 mb-2">14</div>
              <div className="text-gray-600">Avg. Days to Hire</div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-6 mt-6">
            <h3 className="font-semibold mb-4">Applications by Role</h3>
            <div className="space-y-4">
              {jobs.map(job => (
                <div key={job.id}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium">{job.title}</span>
                    <span className="text-sm text-gray-600">{job.applicants} applicants</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full" 
                      style={{ width: `${(job.applicants / 42) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Find Your Next Hire?</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            Streamline your hiring process and connect with top talent
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={() => setShowJobForm(true)}
              className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition duration-300 flex items-center justify-center"
            >
              <FaPlus className="mr-2" /> Post New Job
            </button>
            <button className="bg-indigo-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-900 transition duration-300 flex items-center justify-center">
              <FaUserTie className="mr-2" /> Browse Talent
            </button>
          </div>
        </div>
      </section>

      {/* Create Job Modal */}
      {showJobForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold">Create New Job</h3>
                <button 
                  onClick={() => setShowJobForm(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  &times;
                </button>
              </div>
              
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Job Title</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., Frontend Developer"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                  <textarea 
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Describe the role, responsibilities, and requirements..."
                  ></textarea>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option value="">Select category</option>
                      <option value="full-time">Full-time</option>
                      <option value="internship">Internship</option>
                      <option value="paid-project">Paid Project</option>
                      <option value="hackathon">Hackathon</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option value="remote">Remote</option>
                      <option value="onsite">Onsite</option>
                      <option value="hybrid">Hybrid</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Required Skills</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., React, JavaScript, CSS"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Application Deadline</label>
                    <input 
                      type="date" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Compensation</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="e.g., $50,000 - $70,000 or $25/hr"
                    />
                  </div>
                </div>
                
                <div className="flex justify-end gap-4 pt-4">
                  <button 
                    type="button"
                    onClick={() => setShowJobForm(false)}
                    className="px-4 py-2 text-gray-700 hover:text-gray-900 font-medium"
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit"
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
                  >
                    Create Job
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Schedule Interview Modal */}
      {showInterviewModal && selectedCandidate && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold">Schedule Interview with {selectedCandidate.name}</h3>
                <button 
                  onClick={() => setShowInterviewModal(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  &times;
                </button>
              </div>
              
              <form className="space-y-4">
                <div className="flex items-center p-4 bg-gray-50 rounded-lg mb-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                    <FaUserTie className="text-gray-500 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{selectedCandidate.name}</h4>
                    <p className="text-gray-600">{selectedCandidate.role}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Interview Date</label>
                    <input 
                      type="date" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Interview Time</label>
                    <input 
                      type="time" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Interview Type</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="video">Video Call</option>
                    <option value="phone">Phone Call</option>
                    <option value="onsite">In-Person</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Interviewers</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter interviewer names"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Meeting Link</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Zoom, Google Meet, or other link"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Notes for Candidate</label>
                  <textarea 
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Add any preparation instructions or agenda items..."
                  ></textarea>
                </div>
                
                <div className="flex justify-end gap-4 pt-4">
                  <button 
                    type="button"
                    onClick={() => setShowInterviewModal(false)}
                    className="px-4 py-2 text-gray-700 hover:text-gray-900 font-medium"
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit"
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
                  >
                    Schedule Interview
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

export default ManageHiring;