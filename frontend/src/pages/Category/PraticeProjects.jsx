import React, { useState } from 'react';
import { FaSearch, FaCode, FaPaintBrush, FaRobot, FaBullhorn, FaLaptopCode, FaUserFriends, FaClock, FaGraduationCap, FaBook, FaLink, FaPlus, FaChartLine, FaBookOpen, FaQuoteLeft, FaArrowRight, FaHandshake, FaUsers, FaBriefcase, FaCertificate, FaCheckCircle } from 'react-icons/fa';

const PraticeProjects = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [showProjectForm, setShowProjectForm] = useState(false);
  
  // Sample data for learners
  const learners = [
    {
      id: 1,
      name: "Alex Johnson",
      field: "Frontend Development",
      skills: ["React", "JavaScript", "HTML/CSS", "UI Design"],
      education: "Computer Science Student",
      portfolio: "alexjohnson.dev",
      availability: "15-20 hrs/week",
      completedProjects: 3
    },
    {
      id: 2,
      name: "Samantha Lee",
      field: "UX/UI Design",
      skills: ["Figma", "User Research", "Wireframing", "Prototyping"],
      education: "Design Institute Graduate",
      portfolio: "samanthalee.design",
      availability: "10-15 hrs/week",
      completedProjects: 5
    },
    {
      id: 3,
      name: "Michael Chen",
      field: "Data Science",
      skills: ["Python", "Machine Learning", "SQL", "Data Visualization"],
      education: "Data Science Bootcamp",
      portfolio: "michaelchen.ai",
      availability: "20-25 hrs/week",
      completedProjects: 2
    },
    {
      id: 4,
      name: "Priya Sharma",
      field: "Full Stack Development",
      skills: ["Node.js", "React", "MongoDB", "Express"],
      education: "Computer Engineering Student",
      portfolio: "priyasharma.dev",
      availability: "10-12 hrs/week",
      completedProjects: 4
    }
  ];

  const projectCategories = [
    { name: "All", icon: <FaCode />, count: 24 },
    { name: "Web Development", icon: <FaCode />, count: 12 },
    { name: "Design", icon: <FaPaintBrush />, count: 6 },
    { name: "AI/ML", icon: <FaRobot />, count: 3 },
    { name: "Marketing", icon: <FaBullhorn />, count: 2 },
    { name: "Mobile Development", icon: <FaLaptopCode />, count: 1 }
  ];

  const benefits = [
    {
      title: "Help Learners Gain Experience",
      description: "Provide hands-on learning opportunities for aspiring professionals",
      icon: <FaHandshake />
    },
    {
      title: "Discover Emerging Talent",
      description: "Identify promising individuals for future hiring opportunities",
      icon: <FaUsers />
    },
    {
      title: "Build Project Portfolios",
      description: "Create real-world projects that benefit both learners and your organization",
      icon: <FaBriefcase />
    },
    {
      title: "Connect with Mentors",
      description: "Network with educators and industry professionals",
      icon: <FaCertificate />
    }
  ];

  const successStories = [
    {
      id: 1,
      title: "E-Commerce Website Redesign",
      learners: ["Alex Johnson", "Samantha Lee"],
      outcome: "Learners built a fully responsive e-commerce site and gained UI/UX design experience",
      skills: ["React", "Figma", "Responsive Design"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=2070"
    },
    {
      id: 2,
      title: "Community Health App",
      learners: ["Michael Chen", "Priya Sharma"],
      outcome: "Created a health awareness app with data visualization features",
      skills: ["React Native", "Python", "Data Visualization"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&q=80&w=2070"
    },
    {
      id: 3,
      title: "Nonprofit Marketing Campaign",
      learners: ["Jessica Williams", "David Kim"],
      outcome: "Developed a complete digital marketing strategy for a local nonprofit",
      skills: ["SEO", "Content Strategy", "Social Media"],
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8f5a07a?auto=format&fit=crop&q=80&w=2074"
    }
  ];

  const learnerBenefits = [
    {
      title: "Build Real-World Skills",
      description: "Gain practical experience working on actual projects"
    },
    {
      title: "Portfolio Projects",
      description: "Create work samples to showcase to future employers"
    },
    {
      title: "Professional Mentorship",
      description: "Receive guidance from experienced professionals"
    },
    {
      title: "Industry Networking",
      description: "Connect with companies and potential employers"
    }
  ];

  const resources = [
    {
      title: "Making the Most of Practice Projects",
      description: "How to maximize learning from unpaid project experiences",
      icon: <FaBook />
    },
    {
      title: "Portfolio Building Guide",
      description: "Tips for showcasing your project work effectively",
      icon: <FaBriefcase />
    },
    {
      title: "Project Management for Beginners",
      description: "Learn how to manage your time and tasks on collaborative projects",
      icon: <FaChartLine />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-teal-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Practice, Learn & Build Your Portfolio</h1>
              <p className="text-xl mb-8">Post unpaid projects or internships to help learners gain real-world experience.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => setShowProjectForm(true)}
                  className="bg-white text-green-700 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition duration-300 flex items-center justify-center"
                >
                  <FaPlus className="mr-2" /> Post a Practice Project
                </button>
                <button className="bg-teal-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-900 transition duration-300 flex items-center justify-center">
                  <FaUserFriends className="mr-2" /> Browse Learners
                </button>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=2071" 
                alt="Students collaborating" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Post a Practice Project?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                  {benefit.icon}
                </div>
                <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Project Categories</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Find the right category for your practice project or internship
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {projectCategories.map((category, index) => (
              <button
                key={index}
                className={`flex items-center px-4 py-2 rounded-full ${activeCategory === category.name.toLowerCase() ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                onClick={() => setActiveCategory(category.name.toLowerCase())}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
                <span className="ml-2 bg-gray-300 text-gray-700 rounded-full px-2 py-1 text-xs">
                  {category.count}
                </span>
              </button>
            ))}
          </div>
          
          <div className="text-center">
            <button 
              onClick={() => setShowProjectForm(true)}
              className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition duration-300 flex items-center justify-center mx-auto"
            >
              <FaPlus className="mr-2" /> Post Your Practice Project
            </button>
          </div>
        </div>
      </section>

      {/* Browse Learners Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Browse Learners & Students</h2>
            <div className="flex items-center">
              <div className="relative">
                <FaSearch className="absolute left-3 top-3 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Search by skill or field..." 
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {learners.map(learner => (
              <div key={learner.id} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300">
                <div className="flex items-start">
                  <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                    <FaGraduationCap className="text-gray-500 text-2xl" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-bold text-lg">{learner.name}</h3>
                        <p className="text-gray-600">{learner.field}</p>
                      </div>
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded">
                        {learner.availability}
                      </span>
                    </div>
                    
                    <div className="my-4">
                      <h4 className="font-medium mb-2">Education</h4>
                      <p className="text-gray-600 text-sm">{learner.education}</p>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-medium mb-2">Skills & Interests</h4>
                      <div className="flex flex-wrap gap-2">
                        {learner.skills.map((skill, index) => (
                          <span key={index} className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center text-sm text-gray-600 mb-4">
                      <FaLink className="mr-2" />
                      <a href={`https://${learner.portfolio}`} className="text-blue-600 hover:underline">
                        {learner.portfolio}
                      </a>
                    </div>
                    
                    <div className="text-sm text-gray-600">
                      <span className="font-medium">{learner.completedProjects}</span> practice projects completed
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-end mt-4 pt-4 border-t border-gray-200">
                  <button className="bg-green-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-700 transition duration-300">
                    Invite to Project
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <button className="bg-gray-100 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition duration-300 flex items-center justify-center mx-auto">
              Load More Learners <FaArrowRight className="ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Practice Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map(project => (
              <div key={project.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{project.outcome}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-medium mb-2">Participants</h4>
                    <p className="text-gray-600 text-sm">{project.learners.join(", ")}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Skills Gained</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.skills.map((skill, index) => (
                        <span key={index} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
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
            Simple process for companies and learners to collaborate on practice projects
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                1
              </div>
              <h3 className="font-bold text-lg mb-2">Post Project</h3>
              <p className="text-gray-600">Companies post practice/unpaid project opportunities</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                2
              </div>
              <h3 className="font-bold text-lg mb-2">Apply or Invite</h3>
              <p className="text-gray-600">Learners apply or companies invite specific learners</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                3
              </div>
              <h3 className="font-bold text-lg mb-2">Collaborate</h3>
              <p className="text-gray-600">Work together on the project with guidance and mentorship</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                4
              </div>
              <h3 className="font-bold text-lg mb-2">Build Portfolio</h3>
              <p className="text-gray-600">Learners add completed projects to their portfolios</p>
            </div>
          </div>
        </div>
      </section>

      {/* Learner Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Benefits for Learners</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {learnerBenefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mr-4">
                    <FaCheckCircle className="text-xl" />
                  </div>
                  <h3 className="font-bold text-lg">{benefit.title}</h3>
                </div>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Resources & Guides</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {resources.map((resource, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition duration-300">
                <div className="text-green-600 text-2xl mb-4">
                  {resource.icon}
                </div>
                <h3 className="font-bold text-lg mb-2">{resource.title}</h3>
                <p className="text-gray-600">{resource.description}</p>
                <button className="text-green-600 font-semibold mt-4 flex items-center">
                  Read Guide <FaArrowRight className="ml-2" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-teal-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Posting or Join a Practice Project Today</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            Join our community of learners and companies collaborating on meaningful practice projects
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={() => setShowProjectForm(true)}
              className="bg-white text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition duration-300 flex items-center justify-center"
            >
              <FaPlus className="mr-2" /> Post Practice Project
            </button>
            <button className="bg-teal-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-900 transition duration-300 flex items-center justify-center">
              <FaUserFriends className="mr-2" /> Browse Learners
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
                <h3 className="text-2xl font-bold">Post a Practice Project</h3>
                <button 
                  onClick={() => setShowProjectForm(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  &times;
                </button>
              </div>
              
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Project/Internship Title</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="e.g., Website Redesign for Nonprofit"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Project Description</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Describe the project goals, tasks, and learning opportunities..."
                  ></textarea>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
                      <option value="">Select a category</option>
                      <option value="web-dev">Web Development</option>
                      <option value="design">Design</option>
                      <option value="ai-ml">AI/ML</option>
                      <option value="marketing">Marketing</option>
                      <option value="mobile">Mobile Development</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Skills Required</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="e.g., HTML, CSS, JavaScript"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Duration</label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
                      <option value="">Select duration</option>
                      <option value="1-2">1-2 weeks</option>
                      <option value="2-4">2-4 weeks</option>
                      <option value="1-3">1-3 months</option>
                      <option value="3-6">3-6 months</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Team Size Needed</label>
                    <input 
                      type="number" 
                      min="1"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="Number of learners"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
                      <option value="remote">Remote</option>
                      <option value="onsite">On-site</option>
                      <option value="hybrid">Hybrid</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Deadline (Optional)</label>
                    <input 
                      type="date" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Reference Materials (Optional)</label>
                  <input 
                    type="file" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
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
                    className="px-6 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition duration-300"
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

export default PraticeProjects;