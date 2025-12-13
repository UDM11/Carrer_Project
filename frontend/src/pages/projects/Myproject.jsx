import React, { useState } from 'react';
import { FaSearch, FaPlus, FaCode, FaPaintBrush, FaRobot, FaBullhorn, FaLaptopCode, FaClock, FaUsers, FaStar, FaTrophy, FaChartLine, FaEdit, FaCheckCircle, FaSpinner, FaFileAlt, FaComment, FaGithub, FaFigma, FaLink, FaArrowRight, FaMoneyBillWave, FaHandshake, FaBriefcase, FaCertificate } from 'react-icons/fa';

const MyProject = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [showProjectForm, setShowProjectForm] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  
  // Sample data for projects
  const projects = [
    {
      id: 1,
      title: "E-Commerce Website Redesign",
      type: "Paid",
      status: "completed",
      progress: 100,
      skills: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
      startDate: "2024-06-15",
      endDate: "2024-08-20",
      teamMembers: 3,
      description: "Complete redesign of an e-commerce platform with improved UI/UX and performance optimization.",
      deliverables: ["Figma designs", "Frontend implementation", "Backend API", "Database schema"],
      feedback: "Client was extremely satisfied with the modern design and improved loading times.",
      starred: true,
      earnings: "$2,500"
    },
    {
      id: 2,
      title: "AI-Powered Recommendation System",
      type: "Hackathon",
      status: "submitted",
      progress: 100,
      skills: ["Python", "Machine Learning", "Flask", "Data Analysis"],
      startDate: "2024-09-01",
      endDate: "2024-09-03",
      teamMembers: 4,
      description: "Built a recommendation engine for educational content during a 48-hour hackathon.",
      deliverables: ["Jupyter notebooks", "Trained model", "Web demo", "Presentation"],
      feedback: "Judges praised the innovative approach and clean implementation.",
      starred: true,
      prize: "2nd Place ($3,000)"
    },
    {
      id: 3,
      title: "Nonprofit Organization Website",
      type: "Unpaid",
      status: "in-progress",
      progress: 75,
      skills: ["WordPress", "PHP", "JavaScript", "CSS"],
      startDate: "2024-08-10",
      endDate: "2024-10-15",
      teamMembers: 2,
      description: "Creating a website for a local nonprofit to help them increase donations and awareness.",
      deliverables: ["WordPress theme", "Donation system", "Content pages", "SEO optimization"],
      feedback: "",
      starred: false
    },
    {
      id: 4,
      title: "Mobile Fitness App",
      type: "Internship",
      status: "pending",
      progress: 30,
      skills: ["React Native", "Firebase", "UI/UX Design", "API Integration"],
      startDate: "2024-09-05",
      endDate: "2024-12-05",
      teamMembers: 5,
      description: "Developing a fitness tracking app as part of a company internship program.",
      deliverables: ["App prototype", "User testing reports", "Final application", "Documentation"],
      feedback: "Mentor provided positive feedback on the initial design concepts.",
      starred: false
    },
    {
      id: 5,
      title: "Data Visualization Dashboard",
      type: "Certification",
      status: "in-progress",
      progress: 50,
      skills: ["D3.js", "React", "Data Analysis", "Data Visualization"],
      startDate: "2024-08-01",
      endDate: "2024-10-30",
      teamMembers: 1,
      description: "Building an interactive dashboard for data visualization as part of a certification course.",
      deliverables: ["Interactive charts", "Data filtering", "Responsive design", "Documentation"],
      feedback: "Instructor suggested improvements to the color scheme for better accessibility.",
      starred: true
    }
  ];

  const projectTypes = [
    { name: "All", icon: <FaCode />, count: projects.length },
    { name: "Paid", icon: <FaMoneyBillWave />, count: projects.filter(p => p.type === "Paid").length },
    { name: "Unpaid", icon: <FaHandshake />, count: projects.filter(p => p.type === "Unpaid").length },
    { name: "Hackathon", icon: <FaTrophy />, count: projects.filter(p => p.type === "Hackathon").length },
    { name: "Internship", icon: <FaBriefcase />, count: projects.filter(p => p.type === "Internship").length },
    { name: "Certification", icon: <FaCertificate />, count: projects.filter(p => p.type === "Certification").length }
  ];

  const statusTypes = [
    { name: "All", count: projects.length },
    { name: "In Progress", count: projects.filter(p => p.status === "in-progress").length },
    { name: "Completed", count: projects.filter(p => p.status === "completed").length },
    { name: "Submitted", count: projects.filter(p => p.status === "submitted").length },
    { name: "Pending", count: projects.filter(p => p.status === "pending").length }
  ];

  const skills = [
    "React", "JavaScript", "Python", "Node.js", "UI/UX", "Machine Learning", "Data Analysis", "CSS", "HTML"
  ];

  // Stats calculation
  const totalProjects = projects.length;
  const completedProjects = projects.filter(p => p.status === "completed").length;
  const inProgressProjects = projects.filter(p => p.status === "in-progress").length;
  const pendingProjects = projects.filter(p => p.status === "pending").length;

  const featuredProjects = projects.filter(p => p.starred);

  const getStatusIcon = (status) => {
    switch(status) {
      case "completed": return <FaCheckCircle className="text-green-500" />;
      case "in-progress": return <FaSpinner className="text-blue-500 animate-spin" />;
      case "submitted": return <FaFileAlt className="text-purple-500" />;
      case "pending": return <FaClock className="text-yellow-500" />;
      default: return <FaClock className="text-gray-500" />;
    }
  };

  const getStatusText = (status) => {
    switch(status) {
      case "completed": return "Completed";
      case "in-progress": return "In Progress";
      case "submitted": return "Submitted";
      case "pending": return "Pending Review";
      default: return "Unknown";
    }
  };

  const getTypeColor = (type) => {
    switch(type) {
      case "Paid": return "bg-green-100 text-green-800";
      case "Unpaid": return "bg-blue-100 text-blue-800";
      case "Hackathon": return "bg-purple-100 text-purple-800";
      case "Internship": return "bg-yellow-100 text-yellow-800";
      case "Certification": return "bg-indigo-100 text-indigo-800";
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
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Track Your Projects in One Place</h1>
              <p className="text-xl mb-6">Manage, monitor, and showcase all your projects—paid, unpaid, or hackathon submissions.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => setShowProjectForm(true)}
                  className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition duration-300 flex items-center justify-center"
                >
                  <FaPlus className="mr-2" /> Create New Project
                </button>
                <button className="bg-indigo-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-900 transition duration-300 flex items-center justify-center">
                  <FaTrophy className="mr-2" /> Browse Hackathons
                </button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&q=80&w=2069" 
                alt="Project dashboard" 
                className="rounded-lg shadow-xl max-w-md w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Overview Section */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Project Overview</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-blue-600 mb-1">{totalProjects}</div>
              <div className="text-blue-800">Total Projects</div>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-green-600 mb-1">{completedProjects}</div>
              <div className="text-green-800">Completed</div>
            </div>
            
            <div className="bg-yellow-50 p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-yellow-600 mb-1">{inProgressProjects}</div>
              <div className="text-yellow-800">In Progress</div>
            </div>
            
            <div className="bg-purple-50 p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-purple-600 mb-1">{pendingProjects}</div>
              <div className="text-purple-800">Pending Review</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <h2 className="text-2xl font-bold">My Projects</h2>
            
            <div className="flex flex-wrap gap-4">
              <div className="relative">
                <FaSearch className="absolute left-3 top-3 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Search projects..." 
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <select 
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {statusTypes.map(status => (
                  <option key={status.name} value={status.name.toLowerCase()}>
                    {status.name} ({status.count})
                  </option>
                ))}
              </select>
            </div>
          </div>
          
          {/* Project Type Filters */}
          <div className="flex flex-wrap gap-2 mb-6">
            {projectTypes.map((type, index) => (
              <button
                key={index}
                className={`flex items-center px-3 py-2 rounded-full ${activeFilter === type.name.toLowerCase() ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-100'}`}
                onClick={() => setActiveFilter(type.name.toLowerCase())}
              >
                <span className="mr-2">{type.icon}</span>
                {type.name}
                <span className="ml-2 bg-gray-200 text-gray-700 rounded-full px-2 py-1 text-xs">
                  {type.count}
                </span>
              </button>
            ))}
          </div>
          
          {/* Skills Filters */}
          <div className="mb-6">
            <h3 className="font-medium mb-2">Filter by Skills:</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <button
                  key={index}
                  className="bg-white border border-gray-300 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-100"
                >
                  {skill}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      {featuredProjects.length > 0 && (
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Featured Projects</h2>
              <button className="text-blue-600 font-semibold flex items-center">
                View All <FaArrowRight className="ml-1" />
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredProjects.map(project => (
                <div key={project.id} className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-md p-6 border border-blue-200 hover:shadow-lg transition duration-300">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <span className={`inline-block px-2 py-1 rounded-full text-xs font-semibold mr-2 ${getTypeColor(project.type)}`}>
                        {project.type}
                      </span>
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-800">
                        {getStatusIcon(project.status)} <span className="ml-1">{getStatusText(project.status)}</span>
                      </span>
                    </div>
                    <FaStar className="text-yellow-500 text-xl" />
                  </div>
                  
                  <h3 className="font-bold text-xl mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                  
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium">Progress</span>
                      <span className="text-sm font-semibold">{project.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full" 
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.skills.slice(0, 3).map((skill, index) => (
                      <span key={index} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                        {skill}
                      </span>
                    ))}
                    {project.skills.length > 3 && (
                      <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                        +{project.skills.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex items-center text-sm text-gray-600">
                      <FaClock className="mr-1" />
                      <span>{new Date(project.startDate).toLocaleDateString()} - {new Date(project.endDate).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <FaUsers className="mr-1" />
                      <span>{project.teamMembers} members</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-end gap-2 mt-4">
                    <button className="bg-white text-blue-600 border border-blue-600 px-3 py-1 rounded-lg text-sm font-semibold hover:bg-blue-50">
                      Showcase
                    </button>
                    <button 
                      onClick={() => setSelectedProject(project)}
                      className="bg-blue-600 text-white px-3 py-1 rounded-lg text-sm font-semibold hover:bg-blue-700"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Projects Section */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">All Projects</h2>
          
          <div className="grid grid-cols-1 gap-4">
            {projects.map(project => (
              <div key={project.id} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300">
                <div className="flex flex-col md:flex-row justify-between">
                  <div className="mb-4 md:mb-0 md:w-2/3">
                    <div className="flex items-center mb-2">
                      <span className={`inline-block px-2 py-1 rounded-full text-xs font-semibold mr-2 ${getTypeColor(project.type)}`}>
                        {project.type}
                      </span>
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-800">
                        {getStatusIcon(project.status)} <span className="ml-1">{getStatusText(project.status)}</span>
                      </span>
                      {project.starred && <FaStar className="text-yellow-500 ml-2" />}
                    </div>
                    
                    <h3 className="font-bold text-lg mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.skills.slice(0, 4).map((skill, index) => (
                        <span key={index} className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                          {skill}
                        </span>
                      ))}
                      {project.skills.length > 4 && (
                        <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                          +{project.skills.length - 4} more
                        </span>
                      )}
                    </div>
                    
                    <div className="flex items-center text-sm text-gray-600">
                      <FaClock className="mr-1" />
                      <span className="mr-4">{new Date(project.startDate).toLocaleDateString()} - {new Date(project.endDate).toLocaleDateString()}</span>
                      <FaUsers className="mr-1" />
                      <span>{project.teamMembers} team members</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col justify-between items-end">
                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium">Progress</span>
                        <span className="text-sm font-semibold">{project.progress}%</span>
                      </div>
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full" 
                          style={{ width: `${project.progress}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <button className="bg-gray-200 text-gray-800 p-2 rounded-lg hover:bg-gray-300">
                        <FaEdit />
                      </button>
                      <button 
                        onClick={() => setSelectedProject(project)}
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  &times;
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="md:col-span-2">
                  <div className="flex items-center mb-4">
                    <span className={`inline-block px-2 py-1 rounded-full text-xs font-semibold mr-2 ${getTypeColor(selectedProject.type)}`}>
                      {selectedProject.type}
                    </span>
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-800">
                      {getStatusIcon(selectedProject.status)} <span className="ml-1">{getStatusText(selectedProject.status)}</span>
                    </span>
                    {selectedProject.starred && <FaStar className="text-yellow-500 ml-2" />}
                  </div>
                  
                  <p className="text-gray-700 mb-6">{selectedProject.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold mb-2">Skills Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.skills.map((skill, index) => (
                        <span key={index} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold mb-2">Deliverables</h4>
                    <ul className="list-disc list-inside">
                      {selectedProject.deliverables.map((item, index) => (
                        <li key={index} className="text-gray-700">{item}</li>
                      ))}
                    </ul>
                  </div>
                  
                  {selectedProject.feedback && (
                    <div className="mb-6">
                      <h4 className="font-semibold mb-2">Feedback</h4>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <FaComment className="text-gray-400 mb-2" />
                        <p className="text-gray-700">{selectedProject.feedback}</p>
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="md:col-span-1">
                  <div className="bg-gray-50 p-4 rounded-lg mb-4">
                    <h4 className="font-semibold mb-3">Project Details</h4>
                    
                    <div className="space-y-3">
                      <div>
                        <div className="text-sm text-gray-600">Timeline</div>
                        <div className="flex items-center text-sm">
                          <FaClock className="mr-1 text-gray-500" />
                          {new Date(selectedProject.startDate).toLocaleDateString()} - {new Date(selectedProject.endDate).toLocaleDateString()}
                        </div>
                      </div>
                      
                      <div>
                        <div className="text-sm text-gray-600">Team Size</div>
                        <div className="flex items-center text-sm">
                          <FaUsers className="mr-1 text-gray-500" />
                          {selectedProject.teamMembers} members
                        </div>
                      </div>
                      
                      {selectedProject.earnings && (
                        <div>
                          <div className="text-sm text-gray-600">Earnings</div>
                          <div className="text-sm font-semibold text-green-600">{selectedProject.earnings}</div>
                        </div>
                      )}
                      
                      {selectedProject.prize && (
                        <div>
                          <div className="text-sm text-gray-600">Prize</div>
                          <div className="text-sm font-semibold text-purple-600">{selectedProject.prize}</div>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-3">Project Progress</h4>
                    
                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium">Completion</span>
                        <span className="text-sm font-semibold">{selectedProject.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full" 
                          style={{ width: `${selectedProject.progress}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <button className="w-full bg-white text-blue-600 border border-blue-600 py-2 rounded-lg text-sm font-semibold hover:bg-blue-50 flex items-center justify-center">
                        <FaGithub className="mr-2" /> GitHub Repository
                      </button>
                      <button className="w-full bg-white text-purple-600 border border-purple-600 py-2 rounded-lg text-sm font-semibold hover:bg-purple-50 flex items-center justify-center">
                        <FaFigma className="mr-2" /> Figma Design
                      </button>
                      <button className="w-full bg-white text-gray-600 border border-gray-600 py-2 rounded-lg text-sm font-semibold hover:bg-gray-50 flex items-center justify-center">
                        <FaLink className="mr-2" /> Live Demo
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end gap-4 pt-4 border-t border-gray-200">
                <button className="px-4 py-2 text-gray-700 hover:text-gray-900 font-medium">
                  Edit Project
                </button>
                <button className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700">
                  {selectedProject.status === "completed" ? "View Certificate" : "Mark as Complete"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Create Project Modal */}
      {showProjectForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold">Create New Project</h3>
                <button 
                  onClick={() => setShowProjectForm(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  &times;
                </button>
              </div>
              
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Project Title</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., E-Commerce Website Redesign"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                  <textarea 
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Describe your project goals, features, and requirements..."
                  ></textarea>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Project Type</label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option value="">Select type</option>
                      <option value="paid">Paid</option>
                      <option value="unpaid">Unpaid</option>
                      <option value="hackathon">Hackathon</option>
                      <option value="internship">Internship</option>
                      <option value="certification">Certification</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option value="in-progress">In Progress</option>
                      <option value="completed">Completed</option>
                      <option value="submitted">Submitted</option>
                      <option value="pending">Pending Review</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Skills Required</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., React, Node.js, MongoDB"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
                    <input 
                      type="date" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
                    <input 
                      type="date" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Team Members (Optional)</label>
                  <input 
                    type="number" 
                    min="1"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Number of team members"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Project Links (Optional)</label>
                  <div className="space-y-2">
                    <div className="flex">
                      <span className="inline-flex items-center px-3 border border-r-0 border-gray-300 bg-gray-50 text-gray-500 rounded-l-lg">
                        <FaGithub />
                      </span>
                      <input 
                        type="text" 
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="GitHub repository URL"
                      />
                    </div>
                    <div className="flex">
                      <span className="inline-flex items-center px-3 border border-r-0 border-gray-300 bg-gray-50 text-gray-500 rounded-l-lg">
                        <FaFigma />
                      </span>
                      <input 
                        type="text" 
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Figma design URL"
                      />
                    </div>
                    <div className="flex">
                      <span className="inline-flex items-center px-3 border border-r-0 border-gray-300 bg-gray-50 text-gray-500 rounded-l-lg">
                        <FaLink />
                      </span>
                      <input 
                        type="text" 
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Live demo URL"
                      />
                    </div>
                  </div>
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
                    Create Project
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Your Next Project Today</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            Continue building your portfolio with new challenges and opportunities
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={() => setShowProjectForm(true)}
              className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition duration-300 flex items-center justify-center"
            >
              <FaPlus className="mr-2" /> Create New Project
            </button>
            <button className="bg-indigo-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-900 transition duration-300 flex items-center justify-center">
              <FaTrophy className="mr-2" /> Explore Hackathons
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyProject;