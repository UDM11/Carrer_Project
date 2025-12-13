import React, { useState } from 'react';
import { FaSearch, FaCode, FaLink, FaTrophy, FaUsers, FaCalendar, FaClock, FaMoneyBillWave, FaLaptop, FaMapMarkerAlt, FaUserTie, FaBookOpen, FaQuestionCircle, FaPlus, FaArrowRight, FaMedal, FaLightbulb, FaNetworkWired, FaBriefcase, FaLeaf, FaCheckCircle, FaStar, FaRegStar } from 'react-icons/fa';
import { FaPaintBrush } from "react-icons/fa";

const Hackathon = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [showHostForm, setShowHostForm] = useState(false);
  
  // Sample data for hackathons
  const upcomingHackathons = [
    {
      id: 1,
      title: "AI Innovation Challenge",
      category: "AI",
      type: "Online",
      startDate: "2024-10-15",
      endDate: "2024-10-17",
      prize: "$10,000",
      description: "Build innovative AI solutions to solve real-world problems",
      participants: 250,
      featured: true
    },
    {
      id: 2,
      title: "Web3 Buildathon",
      category: "Web Development",
      type: "Online",
      startDate: "2024-11-05",
      endDate: "2024-11-07",
      prize: "$15,000",
      description: "Create decentralized applications for the future of the web",
      participants: 180,
      featured: true
    },
    {
      id: 3,
      title: "UX Design Sprint",
      category: "UI/UX",
      type: "Onsite",
      startDate: "2024-10-25",
      endDate: "2024-10-27",
      prize: "$7,500",
      description: "Design user experiences that delight and engage users",
      participants: 120,
      featured: false
    },
    {
      id: 4,
      title: "ClimateTech Hackathon",
      category: "Sustainability",
      type: "Hybrid",
      startDate: "2024-11-15",
      endDate: "2024-11-17",
      prize: "$12,000",
      description: "Develop tech solutions to address climate change challenges",
      participants: 200,
      featured: true
    }
  ];

  const pastWinners = [
    {
      id: 1,
      hackathon: "FinTech Innovation Challenge 2024",
      team: "PaySolutions",
      prize: "1st Place ($15,000)",
      project: "AI-powered fraud detection system",
      skills: ["Machine Learning", "Python", "Data Analysis"]
    },
    {
      id: 2,
      hackathon: "HealthTech Hackathon 2024",
      team: "MediConnect",
      prize: "1st Place ($12,000)",
      project: "Telemedicine platform for rural areas",
      skills: ["React", "Node.js", "WebRTC"]
    },
    {
      id: 3,
      hackathon: "EdTech Buildathon 2024",
      team: "LearnSphere",
      prize: "1st Place ($10,000)",
      project: "Personalized learning recommendation engine",
      skills: ["AI", "React Native", "Data Science"]
    }
  ];

  const mentors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      expertise: "AI & Machine Learning",
      experience: "5+ hackathons as mentor",
      role: "Lead Data Scientist, TechCorp",
      rating: 4.9
    },
    {
      id: 2,
      name: "Michael Chen",
      expertise: "Full Stack Development",
      experience: "8+ hackathons as mentor",
      role: "CTO, StartupHub",
      rating: 4.8
    },
    {
      id: 3,
      name: "Priya Sharma",
      expertise: "UI/UX Design",
      experience: "6+ hackathons as mentor",
      role: "Design Lead, CreativeMinds",
      rating: 4.9
    },
    {
      id: 4,
      name: "David Wilson",
      expertise: "Blockchain & Web3",
      experience: "4+ hackathons as mentor",
      role: "Blockchain Architect, ChainTech",
      rating: 4.7
    }
  ];

  const benefits = [
    {
      title: "Learn by Doing",
      description: "Gain hands-on experience with real-world projects",
      icon: <FaLightbulb />
    },
    {
      title: "Network with Experts",
      description: "Connect with industry mentors and like-minded peers",
      icon: <FaNetworkWired />
    },
    {
      title: "Win Amazing Prizes",
      description: "Compete for cash prizes, internships, and recognition",
      icon: <FaTrophy />
    },
    {
      title: "Build Your Portfolio",
      description: "Create impressive projects to showcase your skills",
      icon: <FaBriefcase />
    }
  ];

  const resources = [
    {
      title: "Hackathon Participation Guide",
      description: "How to make the most of your hackathon experience",
      icon: <FaBookOpen />
    },
    {
      title: "Team Formation Strategies",
      description: "Tips for building effective hackathon teams",
      icon: <FaUsers />
    },
    {
      title: "Project Submission Best Practices",
      description: "How to present your project for maximum impact",
      icon: <FaCode />
    }
  ];

  const faqs = [
    {
      question: "How do I register for a hackathon?",
      answer: "Click on any hackathon card and press the 'Join Now' button. You'll need to create an account if you don't have one already."
    },
    {
      question: "What is the maximum team size?",
      answer: "Most hackathons allow teams of 2-5 participants. Some also allow solo participation. Check individual hackathon rules for specifics."
    },
    {
      question: "What are the submission requirements?",
      answer: "Typically, you'll need to submit your source code, a demo video, and a presentation deck. Specific requirements vary by hackathon."
    },
    {
      question: "Who can participate in hackathons?",
      answer: "Most hackathons are open to students, professionals, and enthusiasts. Some may have specific eligibility criteria based on age, location, or experience level."
    }
  ];

  const categories = [
    { name: "All", icon: <FaCode />, count: 12 },
    { name: "AI", icon: <FaLaptop />, count: 4 },
    { name: "Web Development", icon: <FaCode />, count: 3 },
    { name: "UI/UX", icon: <FaPaintBrush />, count: 2 },
    { name: "Blockchain", icon: <FaLink />, count: 1 },
    { name: "Sustainability", icon: <FaLeaf />, count: 2 }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Join Exciting Hackathons & Win Prizes</h1>
              <p className="text-xl mb-8">Showcase your skills, collaborate with teams, and compete for amazing rewards.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-purple-700 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition duration-300 flex items-center justify-center">
                  <FaCode className="mr-2" /> Browse Hackathons
                </button>
                <button 
                  onClick={() => setShowHostForm(true)}
                  className="bg-indigo-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-900 transition duration-300 flex items-center justify-center"
                >
                  <FaPlus className="mr-2" /> Host a Hackathon
                </button>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=2070" 
                alt="Team collaborating at a hackathon" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Participate in Hackathons?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                  {benefit.icon}
                </div>
                <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Hackathons Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Upcoming Hackathons</h2>
            <div className="flex items-center gap-4">
              <div className="relative">
                <FaSearch className="absolute left-3 top-3 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Search hackathons..." 
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingHackathons.map(hackathon => (
              <div key={hackathon.id} className={`bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300 ${hackathon.featured ? 'border-2 border-purple-500' : ''}`}>
                <div className="p-6">
                  {hackathon.featured && (
                    <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded-full mb-3 inline-block">
                      Featured
                    </span>
                  )}
                  <h3 className="font-bold text-xl mb-2">{hackathon.title}</h3>
                  <p className="text-gray-600 mb-4">{hackathon.description}</p>
                  
                  <div className="flex items-center text-gray-600 mb-3">
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold mr-3 ${hackathon.category === 'AI' ? 'bg-blue-100 text-blue-800' : hackathon.category === 'Web Development' ? 'bg-green-100 text-green-800' : hackathon.category === 'UI/UX' ? 'bg-pink-100 text-pink-800' : 'bg-teal-100 text-teal-800'}`}>
                      {hackathon.category}
                    </span>
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold ${hackathon.type === 'Online' ? 'bg-gray-100 text-gray-800' : 'bg-yellow-100 text-yellow-800'}`}>
                      <FaMapMarkerAlt className="mr-1" /> {hackathon.type}
                    </span>
                  </div>
                  
                  <div className="flex items-center text-gray-600 mb-3">
                    <FaCalendar className="mr-2" />
                    <span className="text-sm">{new Date(hackathon.startDate).toLocaleDateString()} - {new Date(hackathon.endDate).toLocaleDateString()}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-600 mb-4">
                    <FaUsers className="mr-2" />
                    <span className="text-sm">{hackathon.participants} participants registered</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex items-center text-lg font-semibold text-purple-600">
                      <FaTrophy className="mr-2" />
                      {hackathon.prize} in prizes
                    </div>
                    <button className="bg-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-purple-700 transition duration-300">
                      Join Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <button className="bg-gray-100 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition duration-300 flex items-center justify-center mx-auto">
              View All Hackathons <FaArrowRight className="ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* Submission Guidelines Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Hackathon Submission Guidelines</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="font-bold text-lg mb-2">Register</h3>
              <p className="text-gray-600">Sign up for the hackathon through our platform</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="font-bold text-lg mb-2">Form a Team</h3>
              <p className="text-gray-600">Create a team or join an existing one</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="font-bold text-lg mb-2">Build & Submit</h3>
              <p className="text-gray-600">Create your project and submit before the deadline</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                4
              </div>
              <h3 className="font-bold text-lg mb-2">Win Prizes</h3>
              <p className="text-gray-600">Judges review projects and announce winners</p>
            </div>
          </div>
        </div>
      </section>

      {/* Past Winners Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Hackathons & Past Winners</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pastWinners.map(winner => (
              <div key={winner.id} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mr-4">
                    <FaMedal className="text-yellow-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold">{winner.hackathon}</h3>
                    <p className="text-sm text-gray-600">Winning Team: {winner.team}</p>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4">{winner.project}</p>
                
                <div className="mb-4">
                  <h4 className="font-medium mb-2">Prize</h4>
                  <p className="text-purple-600 font-semibold">{winner.prize}</p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Skills Demonstrated</h4>
                  <div className="flex flex-wrap gap-2">
                    {winner.skills.map((skill, index) => (
                      <span key={index} className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Host a Hackathon Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">Host Your Own Hackathon</h2>
              <p className="text-gray-600 mb-6">Reach talented developers, promote your brand, and discover innovative solutions to your challenges.</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-2" />
                  <span>Access to thousands of developers</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-2" />
                  <span>Customizable hackathon platform</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-2" />
                  <span>Dedicated support team</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-2" />
                  <span>Judging and winner selection assistance</span>
                </li>
              </ul>
              <button 
                onClick={() => setShowHostForm(true)}
                className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition duration-300 flex items-center justify-center"
              >
                <FaPlus className="mr-2" /> Host a Hackathon
              </button>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2070" 
                alt="Hackathon hosting" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mentors Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Hackathon Mentors & Judges</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mentors.map(mentor => (
              <div key={mentor.id} className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition duration-300">
                <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaUserTie className="text-gray-500 text-2xl" />
                </div>
                <h3 className="font-bold text-lg mb-1">{mentor.name}</h3>
                <p className="text-purple-600 font-medium mb-2">{mentor.expertise}</p>
                <p className="text-gray-600 text-sm mb-3">{mentor.role}</p>
                
                <div className="flex items-center justify-center mb-3">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      i < Math.floor(mentor.rating) ? 
                        <FaStar key={i} size={14} /> : 
                        <FaRegStar key={i} size={14} />
                    ))}
                  </div>
                  <span className="ml-2 text-sm font-semibold">{mentor.rating}</span>
                </div>
                
                <p className="text-gray-600 text-sm mb-4">{mentor.experience}</p>
                
                <button className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-200 transition duration-300">
                  View Profile
                </button>
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
                <div className="text-purple-600 text-2xl mb-4">
                  {resource.icon}
                </div>
                <h3 className="font-bold text-lg mb-2">{resource.title}</h3>
                <p className="text-gray-600">{resource.description}</p>
                <button className="text-purple-600 font-semibold mt-4 flex items-center">
                  Read Guide <FaArrowRight className="ml-2" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-start mb-3">
                  <FaQuestionCircle className="text-purple-600 text-xl mr-3 mt-1" />
                  <h3 className="font-bold text-lg">{faq.question}</h3>
                </div>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Participate in a Hackathon Today & Win</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            Join thousands of developers competing, learning, and winning in our hackathon community
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-purple-700 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition duration-300 flex items-center justify-center">
              <FaCode className="mr-2" /> Browse Hackathons
            </button>
            <button 
              onClick={() => setShowHostForm(true)}
              className="bg-indigo-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-900 transition duration-300 flex items-center justify-center"
            >
              <FaPlus className="mr-2" /> Host a Hackathon
            </button>
          </div>
        </div>
      </section>

      {/* Host Hackathon Modal */}
      {showHostForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold">Host a Hackathon</h3>
                <button 
                  onClick={() => setShowHostForm(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  &times;
                </button>
              </div>
              
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Hackathon Title</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="e.g., AI Innovation Challenge"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                  <textarea 
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Describe your hackathon goals, themes, and challenges..."
                  ></textarea>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
                      <option value="">Select a category</option>
                      <option value="ai">AI & Machine Learning</option>
                      <option value="web">Web Development</option>
                      <option value="design">UI/UX Design</option>
                      <option value="blockchain">Blockchain</option>
                      <option value="sustainability">Sustainability</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
                      <option value="online">Online</option>
                      <option value="onsite">Onsite</option>
                      <option value="hybrid">Hybrid</option>
                    </select>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
                    <input 
                      type="date" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
                    <input 
                      type="date" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Prize Money & Rewards</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="e.g., $10,000 cash prizes, internships, etc."
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Judges/Mentors (Optional)</label>
                  <textarea 
                    rows={2}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="List any confirmed judges or mentors..."
                  ></textarea>
                </div>
                
                <div className="flex justify-end gap-4 pt-4">
                  <button 
                    type="button"
                    onClick={() => setShowHostForm(false)}
                    className="px-4 py-2 text-gray-700 hover:text-gray-900 font-medium"
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit"
                    className="px-6 py-2 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition duration-300"
                  >
                    Submit for Review
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

export default Hackathon;