import React, { useState } from 'react';
import {
  FaSearch, FaBriefcase, FaUserTie, FaGraduationCap,
  FaCalendarAlt, FaBookOpen, FaChartLine, FaRocket,
  FaMapMarkerAlt, FaClock, FaLaptop, FaBuilding,
  FaStar, FaArrowRight, FaPlayCircle, FaFilter,
  FaBookmark, FaRegBookmark, FaUsers, FaQuestionCircle
} from 'react-icons/fa';

const CareerCenter = () => {
  const [activeTab, setActiveTab] = useState('jobs');
  const [savedJobs, setSavedJobs] = useState([1, 3]); // Example saved job IDs

  // Sample job listings
  const jobListings = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "TechSolutions Inc.",
      location: "San Francisco, CA",
      type: "Full-time",
      remote: true,
      posted: "2 days ago",
      logo: "https://via.placeholder.com/50/4a86e8/ffffff?text=TS"
    },
    {
      id: 2,
      title: "UX/UI Designer",
      company: "CreativeMinds",
      location: "New York, NY",
      type: "Full-time",
      remote: false,
      posted: "1 week ago",
      logo: "https://via.placeholder.com/50/3cbe6e/ffffff?text=CM"
    },
    {
      id: 3,
      title: "Data Science Intern",
      company: "DataGenius",
      location: "Remote",
      type: "Internship",
      remote: true,
      posted: "3 days ago",
      logo: "https://via.placeholder.com/50/ff9900/ffffff?text=DG"
    },
    {
      id: 4,
      title: "Backend Engineer",
      company: "CloudSystems",
      location: "Austin, TX",
      type: "Full-time",
      remote: true,
      posted: "5 days ago",
      logo: "https://via.placeholder.com/50/cc65fe/ffffff?text=CS"
    }
  ];

  // Sample mentors
  const mentors = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Senior Product Manager",
      company: "TechInnovate",
      expertise: "Product Management, Career Growth",
      rating: 4.9,
      sessions: 142,
      avatar: "https://randomuser.me/api/portraits/women/65.jpg"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Lead Software Engineer",
      company: "DataWorks",
      expertise: "Software Development, Interview Prep",
      rating: 4.8,
      sessions: 98,
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      id: 3,
      name: "Priya Sharma",
      role: "UX Director",
      company: "DesignHub",
      expertise: "UI/UX Design, Portfolio Review",
      rating: 4.95,
      sessions: 117,
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    }
  ];

  // Sample success stories
  const successStories = [
    {
      id: 1,
      name: "Alex Rodriguez",
      role: "Software Developer",
      company: "TechCorp",
      story: "The career guidance and mentorship I received helped me transition from support to development in just 6 months.",
      avatar: "https://randomuser.me/api/portraits/men/22.jpg"
    },
    {
      id: 2,
      name: "Jessica Williams",
      role: "Product Designer",
      company: "DesignStudio",
      story: "I landed my dream job with portfolio feedback and interview preparation from my mentor on this platform.",
      avatar: "https://randomuser.me/api/portraits/women/33.jpg"
    },
    {
      id: 3,
      name: "David Kim",
      role: "Data Analyst",
      company: "DataInsights",
      story: "The career path guidance and skill recommendations were exactly what I needed to advance my career.",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg"
    }
  ];

  // Sample recommended courses
  const recommendedCourses = [
    {
      id: 1,
      title: "Advanced React Patterns",
      category: "Web Development",
      level: "Intermediate",
      duration: "12 hours",
      icon: <FaRocket className="text-blue-500 text-xl" />
    },
    {
      id: 2,
      title: "UX Research Methods",
      category: "Design",
      level: "Beginner",
      duration: "8 hours",
      icon: <FaUsers className="text-green-500 text-xl" />
    },
    {
      id: 3,
      title: "Python for Data Analysis",
      category: "Data Science",
      level: "Intermediate",
      duration: "15 hours",
      icon: <FaChartLine className="text-orange-500 text-xl" />
    }
  ];

  // Sample career resources
  const careerResources = [
    {
      id: 1,
      title: "How to Tailor Your Resume for Tech Jobs",
      category: "Resume",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 2,
      title: "Ace Your Technical Interview: Top Tips",
      category: "Interview",
      readTime: "12 min read",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 3,
      title: "Navigating Career Transitions in Tech",
      category: "Career Growth",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  ];

  // Sample events
  const upcomingEvents = [
    {
      id: 1,
      title: "Tech Interview Workshop",
      host: "Career Center",
      date: "2023-11-15",
      time: "6:00 PM EST",
      type: "Webinar",
      image: "https://images.unsplash.com/photo-1589652717521-10c0d092dea9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 2,
      title: "Networking Night: Tech Professionals",
      host: "Career Community",
      date: "2023-11-20",
      time: "7:30 PM EST",
      type: "Virtual Event",
      image: "https://images.unsplash.com/photo-1515168833906-d2a3b82b3029?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 3,
      title: "Resume Review Clinic",
      host: "Career Advisors",
      date: "2023-11-25",
      time: "2:00 PM EST",
      type: "Workshop",
      image: "https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  ];

  // Toggle saved job
  const toggleSavedJob = (id) => {
    if (savedJobs.includes(id)) {
      setSavedJobs(savedJobs.filter(jobId => jobId !== id));
    } else {
      setSavedJobs([...savedJobs, id]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Your Career, Your Future</h1>
              <p className="text-xl mb-8 opacity-90">Explore opportunities, get guidance, and launch your career with expert mentorship.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-blue-700 hover:bg-blue-50 font-semibold py-3 px-6 rounded-lg transition duration-300 flex items-center">
                  <FaBriefcase className="mr-2" /> Explore Jobs & Internships
                </button>
                <button className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-700 font-semibold py-3 px-6 rounded-lg transition duration-300 flex items-center">
                  <FaUserTie className="mr-2" /> Schedule Career Consultation
                </button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="bg-white p-4 rounded-2xl shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                  alt="Career professionals" 
                  className="rounded-xl w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Dashboard */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Your Career Dashboard</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <FaBriefcase className="mr-2 text-blue-600" /> Applications
              </h3>
              <p className="text-3xl font-bold text-blue-700 mb-2">12</p>
              <p className="text-gray-600">Jobs applied to</p>
              <div className="mt-4 pt-4 border-t border-blue-100">
                <p className="text-sm text-blue-600">3 pending responses</p>
              </div>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg border border-green-100">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <FaGraduationCap className="mr-2 text-green-600" /> Learning
              </h3>
              <p className="text-3xl font-bold text-green-700 mb-2">5</p>
              <p className="text-gray-600">Recommended courses</p>
              <div className="mt-4 pt-4 border-t border-green-100">
                <p className="text-sm text-green-600">2 in progress</p>
              </div>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-lg border border-purple-100">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <FaCalendarAlt className="mr-2 text-purple-600" /> Upcoming
              </h3>
              <p className="text-3xl font-bold text-purple-700 mb-2">3</p>
              <p className="text-gray-600">Events scheduled</p>
              <div className="mt-4 pt-4 border-t border-purple-100">
                <p className="text-sm text-purple-600">Next: Interview Workshop</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Careers */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Explore Career Paths</h2>
          
          <div className="flex justify-center mb-10">
            <div className="flex bg-white rounded-lg p-1 shadow-md">
              <button 
                className={`px-6 py-2 rounded-lg ${activeTab === 'webdev' ? 'bg-blue-600 text-white' : 'text-gray-600'}`}
                onClick={() => setActiveTab('webdev')}
              >
                Web Development
              </button>
              <button 
                className={`px-6 py-2 rounded-lg ${activeTab === 'design' ? 'bg-blue-600 text-white' : 'text-gray-600'}`}
                onClick={() => setActiveTab('design')}
              >
                Design
              </button>
              <button 
                className={`px-6 py-2 rounded-lg ${activeTab === 'data' ? 'bg-blue-600 text-white' : 'text-gray-600'}`}
                onClick={() => setActiveTab('data')}
              >
                Data Science
              </button>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-md mb-12">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
              <h3 className="text-2xl font-semibold">Web Development Career Path</h3>
              <button className="text-blue-600 font-semibold flex items-center mt-4 md:mt-0">
                View Full Path <FaArrowRight className="ml-2" />
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-700 font-bold">1</span>
                </div>
                <h4 className="font-semibold mb-2">Entry Level</h4>
                <p className="text-sm text-gray-600">Frontend Developer, Junior Web Developer</p>
              </div>
              
              <div className="bg-blue-100 p-4 rounded-lg text-center">
                <div className="bg-blue-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-800 font-bold">2</span>
                </div>
                <h4 className="font-semibold mb-2">Intermediate</h4>
                <p className="text-sm text-gray-600">Full Stack Developer, Web Application Developer</p>
              </div>
              
              <div className="bg-blue-200 p-4 rounded-lg text-center">
                <div className="bg-blue-300 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-900 font-bold">3</span>
                </div>
                <h4 className="font-semibold mb-2">Advanced</h4>
                <p className="text-sm text-gray-600">Senior Developer, Tech Lead, Solution Architect</p>
              </div>
              
              <div className="bg-blue-300 p-4 rounded-lg text-center">
                <div className="bg-blue-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-950 font-bold">4</span>
                </div>
                <h4 className="font-semibold mb-2">Expert</h4>
                <p className="text-sm text-gray-600">Principal Engineer, Engineering Manager, CTO</p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="relative w-full max-w-2xl">
              <input
                type="text"
                placeholder="Search for careers, roles, or industries..."
                className="w-full py-3 px-5 pr-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <FaSearch className="absolute right-4 top-3.5 text-gray-400" />
            </div>
          </div>
        </div>
      </section>

      {/* Job & Internship Listings */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-10">
            <h2 className="text-3xl font-bold">Job & Internship Opportunities</h2>
            <div className="flex items-center mt-4 md:mt-0">
              <div className="relative mr-4">
                <select className="py-2 pl-3 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>All Job Types</option>
                  <option>Full-time</option>
                  <option>Part-time</option>
                  <option>Internship</option>
                  <option>Contract</option>
                </select>
                <FaFilter className="absolute right-3 top-3 text-gray-400" />
              </div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg flex items-center">
                <FaSearch className="mr-2" /> Filter
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            {jobListings.map(job => (
              <div key={job.id} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow duration-300">
                <div className="flex flex-col md:flex-row items-start md:items-center">
                  <img src={job.logo} alt={job.company} className="w-14 h-14 rounded-lg mb-4 md:mb-0 md:mr-6" />
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-1">{job.title}</h3>
                    <p className="text-gray-600 mb-2">{job.company} • {job.location} {job.remote && <span className="bg-blue-100 text-blue-700 text-xs py-1 px-2 rounded-full ml-2">Remote</span>}</p>
                    <div className="flex items-center text-sm text-gray-500">
                      <span className="mr-4">{job.type}</span>
                      <span>{job.posted}</span>
                    </div>
                  </div>
                  <div className="flex items-center mt-4 md:mt-0">
                    <button 
                      className="text-gray-400 hover:text-blue-600 mr-4"
                      onClick={() => toggleSavedJob(job.id)}
                    >
                      {savedJobs.includes(job.id) ? <FaBookmark className="text-blue-600" /> : <FaRegBookmark />}
                    </button>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg">
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <button className="text-blue-600 font-semibold hover:text-blue-800 flex items-center justify-center">
              View All Opportunities <FaArrowRight className="ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* Mentorship & Guidance */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-10">
            <h2 className="text-3xl font-bold">Connect with Career Mentors</h2>
            <button className="text-blue-600 font-semibold hover:text-blue-800 flex items-center mt-4 md:mt-0">
              View All Mentors <FaArrowRight className="ml-2" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mentors.map(mentor => (
              <div key={mentor.id} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <img src={mentor.avatar} alt={mentor.name} className="w-16 h-16 rounded-full mr-4 object-cover" />
                  <div>
                    <h3 className="font-semibold">{mentor.name}</h3>
                    <p className="text-gray-600 text-sm">{mentor.role} at {mentor.company}</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">{mentor.expertise}</p>
                <div className="flex items-center mb-4">
                  <div className="flex mr-4">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className={i < Math.floor(mentor.rating) ? "text-yellow-400" : "text-gray-300"} />
                    ))}
                  </div>
                  <span className="text-gray-600 text-sm">{mentor.rating}</span>
                </div>
                <p className="text-gray-600 text-sm mb-6">{mentor.sessions} mentoring sessions</p>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg">
                  Request Mentorship
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Career Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map(story => (
              <div key={story.id} className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <img src={story.avatar} alt={story.name} className="w-12 h-12 rounded-full mr-4 object-cover" />
                  <div>
                    <h3 className="font-semibold">{story.name}</h3>
                    <p className="text-gray-600 text-sm">{story.role} at {story.company}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{story.story}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skill & Course Recommendations */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10">Recommended Skills & Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recommendedCourses.map(course => (
              <div key={course.id} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                    {course.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold">{course.title}</h3>
                    <p className="text-gray-600 text-sm">{course.category}</p>
                  </div>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <span className="bg-gray-100 text-gray-700 text-xs py-1 px-2 rounded-full">{course.level}</span>
                  <span className="text-gray-600 text-sm flex items-center">
                    <FaClock className="mr-1" /> {course.duration}
                  </span>
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg mt-4">
                  Start Learning
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Resources */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-10">
            <h2 className="text-3xl font-bold">Career Resources</h2>
            <div className="flex mt-4 md:mt-0">
              <button className="bg-gray-100 text-gray-700 hover:bg-gray-200 py-2 px-4 rounded-l-lg">
                All
              </button>
              <button className="bg-gray-100 text-gray-700 hover:bg-gray-200 py-2 px-4 border-l border-gray-300">
                Resume
              </button>
              <button className="bg-gray-100 text-gray-700 hover:bg-gray-200 py-2 px-4 border-l border-gray-300">
                Interview
              </button>
              <button className="bg-gray-100 text-gray-700 hover:bg-gray-200 py-2 px-4 rounded-r-lg border-l border-gray-300">
                Career Growth
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {careerResources.map(resource => (
              <div key={resource.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow duration-300">
                <img src={resource.image} alt={resource.title} className="w-full h-40 object-cover" />
                <div className="p-6">
                  <span className="bg-blue-100 text-blue-700 text-xs py-1 px-2 rounded-full">{resource.category}</span>
                  <h3 className="font-semibold mt-3 mb-2">{resource.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{resource.readTime}</p>
                  <button className="text-blue-600 font-semibold hover:text-blue-800 flex items-center">
                    Read More <FaArrowRight className="ml-2 text-sm" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Career Events */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-10">
            <h2 className="text-3xl font-bold">Upcoming Career Events</h2>
            <button className="text-blue-600 font-semibold hover:text-blue-800 flex items-center mt-4 md:mt-0">
              View All Events <FaArrowRight className="ml-2" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingEvents.map(event => (
              <div key={event.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <img src={event.image} alt={event.title} className="w-full h-40 object-cover" />
                <div className="p-6">
                  <span className="bg-purple-100 text-purple-700 text-xs py-1 px-2 rounded-full">{event.type}</span>
                  <h3 className="font-semibold mt-3 mb-2">{event.title}</h3>
                  <p className="text-gray-600 text-sm mb-1">Hosted by {event.host}</p>
                  <div className="flex items-center text-gray-600 text-sm mb-4">
                    <FaCalendarAlt className="mr-2" /> {event.date} • <FaClock className="mx-2" /> {event.time}
                  </div>
                  <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg">
                    Register Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">How Our Career Center Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-700 font-bold text-xl">1</span>
              </div>
              <h3 className="font-semibold mb-2">Explore Careers</h3>
              <p className="text-gray-600 text-sm">Discover various career paths and opportunities</p>
            </div>
            
            <div className="flex justify-center items-start pt-6">
              <FaArrowRight className="text-gray-300 text-2xl" />
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-700 font-bold text-xl">2</span>
              </div>
              <h3 className="font-semibold mb-2">Learn Skills</h3>
              <p className="text-gray-600 text-sm">Acquire in-demand skills through recommended courses</p>
            </div>
            
            <div className="flex justify-center items-start pt-6">
              <FaArrowRight className="text-gray-300 text-2xl" />
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-700 font-bold text-xl">3</span>
              </div>
              <h3 className="font-semibold mb-2">Connect with Mentors</h3>
              <p className="text-gray-600 text-sm">Get guidance from industry professionals</p>
            </div>
            
            <div className="flex justify-center items-start pt-6">
              <FaArrowRight className="text-gray-300 text-2xl" />
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-700 font-bold text-xl">4</span>
              </div>
              <h3 className="font-semibold mb-2">Apply for Jobs</h3>
              <p className="text-gray-600 text-sm">Find and apply to relevant opportunities</p>
            </div>
            
            <div className="flex justify-center items-start pt-6">
              <FaArrowRight className="text-gray-300 text-2xl" />
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-700 font-bold text-xl">5</span>
              </div>
              <h3 className="font-semibold mb-2">Launch Your Career</h3>
              <p className="text-gray-600 text-sm">Start your professional journey with confidence</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-md mb-6">
              <h3 className="font-semibold text-lg mb-3 flex items-center">
                <FaQuestionCircle className="text-blue-600 mr-2" /> How do I apply for jobs through the Career Center?
              </h3>
              <p className="text-gray-600">You can browse available opportunities in the Jobs section, filter based on your preferences, and apply directly through our platform. Make sure your profile is complete to increase your chances.</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md mb-6">
              <h3 className="font-semibold text-lg mb-3 flex items-center">
                <FaQuestionCircle className="text-blue-600 mr-2" /> Is mentorship really free?
              </h3>
              <p className="text-gray-600">Yes, basic mentorship through our platform is completely free. We believe in making career guidance accessible to everyone. Some mentors may offer premium services, but these are clearly marked.</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md mb-6">
              <h3 className="font-semibold text-lg mb-3 flex items-center">
                <FaQuestionCircle className="text-blue-600 mr-2" /> How are course recommendations personalized?
              </h3>
              <p className="text-gray-600">Our algorithm analyzes your career interests, skills assessment results, and learning history to recommend courses that will help you achieve your specific career goals.</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-semibold text-lg mb-3 flex items-center">
                <FaQuestionCircle className="text-blue-600 mr-2" /> Can I schedule a one-on-one career consultation?
              </h3>
              <p className="text-gray-600">Absolutely! You can book a personalized career consultation with our experts through the Career Center dashboard. These sessions are tailored to your specific needs and goals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Take the Next Step in Your Career Today</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">Join thousands of professionals who have accelerated their careers with our comprehensive resources and support.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-blue-700 hover:bg-blue-50 font-semibold py-4 px-8 rounded-lg transition duration-300 text-lg">
              Join Career Center
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-700 font-semibold py-4 px-8 rounded-lg transition duration-300 text-lg">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareerCenter;