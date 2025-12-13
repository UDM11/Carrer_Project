import React, { useState } from 'react';
import { FaSearch, FaCode, FaPaintBrush, FaRobot, FaBullhorn, FaLaptopCode, FaUserFriends, FaClock, FaStar, FaPlus, FaChartLine, FaBookOpen, FaQuoteLeft, FaArrowRight } from 'react-icons/fa';

const BrowsersProjects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [showProjectForm, setShowProjectForm] = useState(false);
  
  // Sample data for projects
  const featuredProjects = [
    {
      id: 1,
      title: "E-Commerce Platform Redesign",
      category: "Design",
      skills: ["UI/UX", "Figma", "Wireframing"],
      mentor: "Sarah Johnson",
      status: "Active",
      description: "Redesigning a modern e-commerce platform with improved user experience and conversion optimization.",
      teamSize: "3/5",
      duration: "3 months",
      popularity: 4.8
    },
    {
      id: 2,
      title: "AI-Powered Recommendation Engine",
      category: "AI",
      skills: ["Python", "Machine Learning", "NLP"],
      mentor: "David Chen",
      status: "In Progress",
      description: "Building a recommendation system for educational content based on user preferences and behavior.",
      teamSize: "4/6",
      duration: "5 months",
      popularity: 4.9
    },
    {
      id: 3,
      title: "Community Health Awareness App",
      category: "Development",
      skills: ["React Native", "Firebase", "Google Maps API"],
      mentor: "Michelle Rodriguez",
      status: "Active",
      description: "Developing a mobile app to promote health awareness and connect communities with local resources.",
      teamSize: "2/4",
      duration: "4 months",
      popularity: 4.7
    }
  ];

  const allProjects = [
    ...featuredProjects,
    {
      id: 4,
      title: "Sustainable E-commerce Website",
      category: "Development",
      skills: ["React", "Node.js", "MongoDB"],
      mentor: "Alex Turner",
      status: "Active",
      description: "Creating a sustainable e-commerce platform focused on eco-friendly products and practices.",
      teamSize: "3/5",
      duration: "4 months",
      popularity: 4.5
    },
    {
      id: 5,
      title: "Social Media Marketing Campaign",
      category: "Marketing",
      skills: ["Content Strategy", "SEO", "Analytics"],
      mentor: "Jessica Williams",
      status: "Completed",
      description: "Designing and executing a social media campaign for a nonprofit organization.",
      teamSize: "4/4",
      duration: "2 months",
      popularity: 4.6
    },
    {
      id: 6,
      title: "IoT Home Automation System",
      category: "IT",
      skills: ["Arduino", "Python", "IoT Protocols"],
      mentor: "Robert Kim",
      status: "In Progress",
      description: "Building a smart home automation system with energy monitoring capabilities.",
      teamSize: "2/3",
      duration: "6 months",
      popularity: 4.8
    }
  ];

  const testimonials = [
    {
      id: 1,
      text: "Working on the AI recommendation engine project gave me practical experience that was directly relevant to my career goals. The mentorship was exceptional!",
      author: "Michael Zhang",
      role: "Computer Science Student"
    },
    {
      id: 2,
      text: "As a mentor, I've been able to guide talented students through real-world projects. The platform makes collaboration seamless and rewarding for everyone involved.",
      author: "Dr. Emily Watson",
      role: "Senior Developer & Mentor"
    }
  ];

  const resources = [
    {
      title: "Project Collaboration Guide",
      description: "Best practices for working effectively in team projects",
      icon: <FaUserFriends />
    },
    {
      title: "Git Version Control Tutorial",
      description: "Learn how to use Git for collaborative development",
      icon: <FaCode />
    },
    {
      title: "Project Management Templates",
      description: "Agile and Scrum templates for student projects",
      icon: <FaChartLine />
    }
  ];

  const categories = [
    { name: "All", icon: <FaCode />, count: 12 },
    { name: "Development", icon: <FaCode />, count: 5 },
    { name: "Design", icon: <FaPaintBrush />, count: 3 },
    { name: "AI", icon: <FaRobot />, count: 2 },
    { name: "Marketing", icon: <FaBullhorn />, count: 1 },
    { name: "IT", icon: <FaLaptopCode />, count: 1 }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Explore Live Projects & Real-World Work</h1>
              <p className="text-xl mb-8">Discover projects, collaborate with mentors, and showcase your skills in action.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-purple-700 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition duration-300 flex items-center justify-center">
                  <FaCode className="mr-2" /> Browse Projects
                </button>
                <button 
                  onClick={() => setShowProjectForm(true)}
                  className="bg-indigo-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-900 transition duration-300 flex items-center justify-center"
                >
                  <FaPlus className="mr-2" /> Submit Your Project
                </button>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=2071" 
                alt="Team collaboration" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Search & Filters Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Find Your Next Project</h2>
          
          <div className="bg-white rounded-xl shadow-md p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1 relative">
                <FaSearch className="absolute left-3 top-3 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Search projects by title, skills, or mentor" 
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div className="flex-1 relative">
                <FaUserFriends className="absolute left-3 top-3 text-gray-400" />
                <select className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
                  <option value="">All Statuses</option>
                  <option value="active">Active</option>
                  <option value="in-progress">In Progress</option>
                  <option value="completed">Completed</option>
                </select>
              </div>
              <div className="flex-1 relative">
                <FaStar className="absolute left-3 top-3 text-gray-400" />
                <select className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
                  <option value="">Any Skill Level</option>
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </select>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center">
                <span className="mr-2 font-medium">Team Size:</span>
                <select className="flex-1 border border-gray-300 rounded-lg px-2 py-1 focus:outline-none focus:ring-1 focus:ring-purple-500">
                  <option value="">Any Size</option>
                  <option value="solo">Solo</option>
                  <option value="small">Small (2-4)</option>
                  <option value="large">Large (5+)</option>
                </select>
              </div>
              <div className="flex items-center">
                <span className="mr-2 font-medium">Sort By:</span>
                <select className="flex-1 border border-gray-300 rounded-lg px-2 py-1 focus:outline-none focus:ring-1 focus:ring-purple-500">
                  <option value="latest">Latest</option>
                  <option value="popular">Most Popular</option>
                  <option value="skill">Skill Match</option>
                </select>
              </div>
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`flex items-center px-4 py-2 rounded-full ${activeFilter === category.name.toLowerCase() ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                onClick={() => setActiveFilter(category.name.toLowerCase())}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
                <span className="ml-2 bg-gray-300 text-gray-700 rounded-full px-2 py-1 text-xs">
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Featured Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map(project => (
              <div key={project.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <span className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${project.status === 'Active' ? 'bg-green-100 text-green-800' : project.status === 'In Progress' ? 'bg-yellow-100 text-yellow-800' : 'bg-gray-100 text-gray-800'}`}>
                        {project.status}
                      </span>
                      <h3 className="font-bold text-lg mt-2">{project.title}</h3>
                    </div>
                    <div className="flex items-center text-yellow-500">
                      <FaStar className="mr-1" />
                      <span className="text-sm font-semibold">{project.popularity}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-gray-600 mb-3">
                    <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded mr-2">{project.category}</span>
                    <FaClock className="mr-1" />
                    <span className="text-sm">{project.duration}</span>
                  </div>
                  
                  <p className="text-gray-600 mb-4 text-sm">{project.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-medium mb-2 text-sm">Skills Needed</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.skills.map((skill, index) => (
                        <span key={index} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <p className="text-sm font-medium">Mentor</p>
                      <p className="text-sm text-gray-600">{project.mentor}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Team Size</p>
                      <p className="text-sm text-gray-600">{project.teamSize}</p>
                    </div>
                  </div>
                  
                  <button className="w-full bg-purple-600 text-white py-2 rounded-lg font-semibold hover:bg-purple-700 transition duration-300">
                    View Project
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects Listings */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">All Live Projects</h2>
            <div className="flex items-center">
              <span className="mr-2 text-gray-600">Sort by:</span>
              <select className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500">
                <option value="latest">Latest</option>
                <option value="popular">Most Popular</option>
                <option value="skill">Skill Match</option>
              </select>
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            {allProjects.map(project => (
              <div key={project.id} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300">
                <div className="flex flex-col md:flex-row justify-between">
                  <div className="mb-4 md:mb-0">
                    <div className="flex items-center mb-2">
                      <span className={`inline-block px-2 py-1 rounded-full text-xs font-semibold mr-3 ${project.status === 'Active' ? 'bg-green-100 text-green-800' : project.status === 'In Progress' ? 'bg-yellow-100 text-yellow-800' : 'bg-gray-100 text-gray-800'}`}>
                        {project.status}
                      </span>
                      <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">{project.category}</span>
                    </div>
                    <h3 className="font-bold text-xl">{project.title}</h3>
                    <p className="text-gray-600 mt-2">{project.description}</p>
                    
                    <div className="flex items-center mt-4">
                      <div className="flex items-center text-sm text-gray-600 mr-4">
                        <FaUserFriends className="mr-1" />
                        <span>{project.teamSize} members</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600 mr-4">
                        <FaClock className="mr-1" />
                        <span>{project.duration}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <FaStar className="mr-1 text-yellow-500" />
                        <span>{project.popularity}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-end">
                    <p className="text-lg font-semibold mb-2">Mentor: {project.mentor}</p>
                    <button className="bg-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-purple-700 transition duration-300">
                      View Project
                    </button>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <h4 className="font-medium mb-2">Skills Required</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill, index) => (
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
              Load More Projects
            </button>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">How It Works</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Follow these simple steps to find projects, contribute, or share your own
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                1
              </div>
              <h3 className="font-bold text-lg mb-2">Browse Projects</h3>
              <p className="text-gray-600">Explore active projects across various categories and find ones that match your skills.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                2
              </div>
              <h3 className="font-bold text-lg mb-2">Apply to Join</h3>
              <p className="text-gray-600">Submit your application to contribute to projects that interest you.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                3
              </div>
              <h3 className="font-bold text-lg mb-2">Collaborate & Learn</h3>
              <p className="text-gray-600">Work with mentors and team members to complete real-world projects.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                4
              </div>
              <h3 className="font-bold text-lg mb-2">Showcase Work</h3>
              <p className="text-gray-600">Add completed projects to your portfolio and showcase your skills.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Resources & Guides</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {resources.map((resource, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition duration-300">
                <div className="text-purple-600 text-2xl mb-4">
                  {resource.icon}
                </div>
                <h3 className="font-bold text-lg mb-2">{resource.title}</h3>
                <p className="text-gray-600">{resource.description}</p>
                <button className="text-purple-600 font-semibold mt-4 flex items-center">
                  Learn More <FaArrowRight className="ml-2" />
                </button>
              </div>
            ))}
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
                <FaQuoteLeft className="text-purple-600 text-2xl mb-4" />
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
      <section className="py-16 bg-gradient-to-r from-purple-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Contributing or Share Your Project Today</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            Join our community of learners and mentors working on real-world projects to build skills and portfolios.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-purple-700 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition duration-300 flex items-center justify-center">
              <FaCode className="mr-2" /> Browse Projects
            </button>
            <button className="bg-indigo-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-900 transition duration-300 flex items-center justify-center">
              <FaPlus className="mr-2" /> Submit Your Project
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
                <h3 className="text-2xl font-bold">Submit a New Project</h3>
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Enter project title"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Project Description</label>
                  <textarea 
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Describe your project"
                  ></textarea>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
                      <option value="">Select a category</option>
                      <option value="development">Development</option>
                      <option value="design">Design</option>
                      <option value="ai">AI</option>
                      <option value="marketing">Marketing</option>
                      <option value="it">IT</option>
                      <option value="business">Business</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
                      <option value="active">Active</option>
                      <option value="in-progress">In Progress</option>
                      <option value="completed">Completed</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Skills Required</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Add skills (comma separated)"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Team Size</label>
                    <input 
                      type="number" 
                      min="1"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Number of team members needed"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Project Duration</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="e.g., 3 months"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Project Resources (Optional)</label>
                  <input 
                    type="file" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
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
                    className="px-6 py-2 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition duration-300"
                  >
                    Submit Project
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

export default BrowsersProjects;