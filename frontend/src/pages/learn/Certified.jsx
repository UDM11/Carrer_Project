import { useState } from 'react';
import { FiSearch, FiBook, FiCode, FiBriefcase, FiMonitor, FiTrendingUp, FiStar, FiClock, FiDollarSign, FiAward, FiUser, FiArrowRight, FiCheck, FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { FaPalette } from "react-icons/fa";


const Certified = () => {
  const [expandedPath, setExpandedPath] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');

  // Sample data for career path categories
  const careerCategories = [
    {
      id: 'ai-data',
      name: 'AI & Data Science',
      description: 'Become an expert in artificial intelligence, machine learning, and data analysis',
      icon: <FiTrendingUp className="text-2xl" />,
      color: 'bg-purple-100 text-purple-800'
    },
    {
      id: 'development',
      name: 'Development',
      description: 'Master web, mobile, and software development skills',
      icon: <FiCode className="text-2xl" />,
      color: 'bg-blue-100 text-blue-800'
    },
    {
      id: 'business',
      name: 'Business',
      description: 'Learn digital marketing, analysis, and management',
      icon: <FiBriefcase className="text-2xl" />,
      color: 'bg-green-100 text-green-800'
    },
    {
      id: 'design',
      name: 'Design',
      description: 'Create stunning user interfaces and experiences',
      icon: <FaPalette className="text-2xl" />,
      color: 'bg-pink-100 text-pink-800'
    },
    {
      id: 'it-software',
      name: 'IT & Software',
      description: 'Specialize in cloud, cybersecurity, and systems',
      icon: <FiMonitor className="text-2xl" />,
      color: 'bg-orange-100 text-orange-800'
    }
  ];

  // Sample data for career paths
  const careerPaths = [
    {
      id: 1,
      title: 'Full-Stack Developer',
      category: 'development',
      description: 'Master both frontend and backend development to build complete web applications',
      duration: '6 months',
      level: 'Beginner to Advanced',
      certification: 'Full-Stack Web Developer Certificate',
      rating: 4.8,
      reviews: 1240,
      price: 299,
      thumbnail: 'https://via.placeholder.com/300x200/3B82F6/FFFFFF?text=Full+Stack',
      roles: ['Frontend Developer', 'Backend Developer', 'Full-Stack Engineer'],
      roadmap: [
        {
          stage: 1,
          title: 'Foundations',
          description: 'HTML, CSS, JavaScript fundamentals',
          duration: '4 weeks',
          courses: 5
        },
        {
          stage: 2,
          title: 'Frontend Development',
          description: 'React, Vue, or Angular frameworks',
          duration: '8 weeks',
          courses: 6
        },
        {
          stage: 3,
          title: 'Backend Development',
          description: 'Node.js, Express, databases, and APIs',
          duration: '8 weeks',
          courses: 7
        },
        {
          stage: 4,
          title: 'Advanced Topics & Projects',
          description: 'Authentication, deployment, and real-world projects',
          duration: '4 weeks',
          courses: 4
        },
        {
          stage: 5,
          title: 'Certification',
          description: 'Final project and certification exam',
          duration: '2 weeks',
          courses: 1
        }
      ],
      salary: {
        entry: 65000,
        average: 95000,
        senior: 125000
      },
      jobs: 12500
    },
    {
      id: 2,
      title: 'Data Scientist',
      category: 'ai-data',
      description: 'Learn to extract insights from data using statistical and machine learning techniques',
      duration: '8 months',
      level: 'Intermediate to Advanced',
      certification: 'Data Science Professional Certificate',
      rating: 4.9,
      reviews: 980,
      price: 349,
      thumbnail: 'https://via.placeholder.com/300x200/8B5CF6/FFFFFF?text=Data+Science',
      roles: ['Data Analyst', 'Data Scientist', 'ML Engineer'],
      roadmap: [
        {
          stage: 1,
          title: 'Programming & Data Basics',
          description: 'Python, SQL, and data manipulation',
          duration: '6 weeks',
          courses: 4
        },
        {
          stage: 2,
          title: 'Statistics & Visualization',
          description: 'Statistical analysis and data visualization',
          duration: '6 weeks',
          courses: 5
        },
        {
          stage: 3,
          title: 'Machine Learning',
          description: 'ML algorithms, model training, and evaluation',
          duration: '10 weeks',
          courses: 7
        },
        {
          stage: 4,
          title: 'Advanced ML & Big Data',
          description: 'Deep learning and big data technologies',
          duration: '6 weeks',
          courses: 4
        },
        {
          stage: 5,
          title: 'Certification',
          description: 'Capstone project and certification exam',
          duration: '2 weeks',
          courses: 1
        }
      ],
      salary: {
        entry: 75000,
        average: 110000,
        senior: 145000
      },
      jobs: 8900
    },
    {
      id: 3,
      title: 'UI/UX Designer',
      category: 'design',
      description: 'Create intuitive and beautiful user interfaces and experiences',
      duration: '5 months',
      level: 'Beginner to Advanced',
      certification: 'UI/UX Design Professional Certificate',
      rating: 4.7,
      reviews: 850,
      price: 279,
      thumbnail: 'https://via.placeholder.com/300x200/EC4899/FFFFFF?text=UI/UX+Design',
      roles: ['UI Designer', 'UX Designer', 'Product Designer'],
      roadmap: [
        {
          stage: 1,
          title: 'Design Principles',
          description: 'Fundamentals of design and user psychology',
          duration: '4 weeks',
          courses: 4
        },
        {
          stage: 2,
          title: 'Wireframing & Prototyping',
          description: 'Figma, Sketch, and Adobe XD',
          duration: '6 weeks',
          courses: 5
        },
        {
          stage: 3,
          title: 'UI Design & Interaction',
          description: 'Visual design, typography, and micro-interactions',
          duration: '6 weeks',
          courses: 5
        },
        {
          stage: 4,
          title: 'UX Research & Testing',
          description: 'User research, testing, and iteration',
          duration: '4 weeks',
          courses: 3
        },
        {
          stage: 5,
          title: 'Certification',
          description: 'Portfolio project and certification exam',
          duration: '2 weeks',
          courses: 1
        }
      ],
      salary: {
        entry: 60000,
        average: 85000,
        senior: 115000
      },
      jobs: 7200
    }
  ];

  // Sample data for mentors
  const mentors = [
    {
      id: 1,
      name: "Sarah Johnson",
      expertise: "Full-Stack Development",
      role: "Senior Developer at TechCorp",
      courses: 8,
      rating: 4.9,
      students: 12000,
      avatar: "https://via.placeholder.com/80/3B82F6/FFFFFF?text=SJ"
    },
    {
      id: 2,
      name: "Michael Chen",
      expertise: "Data Science & AI",
      role: "Lead Data Scientist at DataWorks",
      courses: 6,
      rating: 4.8,
      students: 8500,
      avatar: "https://via.placeholder.com/80/8B5CF6/FFFFFF?text=MC"
    },
    {
      id: 3,
      name: "Emma Wilson",
      expertise: "UI/UX Design",
      role: "Product Design Lead at CreativeLabs",
      courses: 7,
      rating: 4.9,
      students: 9800,
      avatar: "https://via.placeholder.com/80/EC4899/FFFFFF?text=EW"
    }
  ];

  // Sample data for success stories
  const successStories = [
    {
      id: 1,
      name: "Alex Rodriguez",
      role: "Full-Stack Developer",
      company: "TechStart Inc",
      companyLogo: "https://via.placeholder.com/40/3B82F6/FFFFFF?text=TS",
      quote: "The Full-Stack Developer path gave me all the skills I needed to transition from marketing to tech. I got hired within 2 months of completing the program!",
      path: "Full-Stack Developer",
      avatar: "https://via.placeholder.com/50/3B82F6/FFFFFF?text=AR"
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "Data Scientist",
      company: "DataInsights",
      companyLogo: "https://via.placeholder.com/40/8B5CF6/FFFFFF?text=DI",
      quote: "As a biology major, I never thought I'd work in tech. The Data Science path made the transition smooth with its structured approach and real-world projects.",
      path: "Data Scientist",
      avatar: "https://via.placeholder.com/50/8B5CF6/FFFFFF?text=PS"
    },
    {
      id: 3,
      name: "James Wilson",
      role: "UI/UX Designer",
      company: "DesignHub",
      companyLogo: "https://via.placeholder.com/40/EC4899/FFFFFF?text=DH",
      quote: "The UI/UX Design path helped me build a portfolio that stood out to employers. I received multiple job offers before even completing the certification!",
      path: "UI/UX Designer",
      avatar: "https://via.placeholder.com/50/EC4899/FFFFFF?text=JW"
    }
  ];

  // Sample data for certification details
  const certificationDetails = [
    {
      title: "Verified Certificate",
      description: "Share your achievement on LinkedIn and with employers",
      icon: <FiAward className="text-2xl" />
    },
    {
      title: "Mentor Endorsement",
      description: "Get personalized feedback and endorsement from industry experts",
      icon: <FiUser className="text-2xl" />
    },
    {
      title: "Industry Recognition",
      description: "Our certificates are recognized by top companies in the industry",
      icon: <FiCheck className="text-2xl" />
    },
    {
      title: "Portfolio Projects",
      description: "Build real-world projects to showcase your skills",
      icon: <FiBriefcase className="text-2xl" />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Start Your Certified Career Path</h1>
              <p className="text-xl mb-8 opacity-90">Follow structured learning journeys, earn certifications, and launch your career.</p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
                  Explore Career Paths
                </button>
                <button className="bg-transparent border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition">
                  Get Certified
                </button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="bg-white/20 p-6 rounded-2xl w-full max-w-md">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                    <FiAward className="text-3xl mx-auto mb-2" />
                    <p className="text-center text-sm">Industry-Recognized Certificates</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                    <FiBriefcase className="text-3xl mx-auto mb-2" />
                    <p className="text-center text-sm">Job-Ready Skills</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                    <FiUser className="text-3xl mx-auto mb-2" />
                    <p className="text-center text-sm">Mentor Support</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                    <FiTrendingUp className="text-3xl mx-auto mb-2" />
                    <p className="text-center text-sm">Career Advancement</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Path Categories */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Explore Career Path Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {careerCategories.map((category) => (
              <div 
                key={category.id} 
                className={`flex flex-col items-center p-6 rounded-xl cursor-pointer transition-all hover:shadow-lg ${activeCategory === category.id ? 'bg-blue-50 border-2 border-blue-500' : 'bg-white border border-gray-200'}`}
                onClick={() => setActiveCategory(category.id)}
              >
                <div className={`p-3 rounded-full mb-3 ${category.color}`}>
                  {category.icon}
                </div>
                <h3 className="font-semibold text-center mb-2">{category.name}</h3>
                <p className="text-sm text-gray-600 text-center">{category.description}</p>
                <button className="mt-4 text-blue-600 font-medium text-sm flex items-center">
                  Explore Path <FiArrowRight className="ml-1" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Path Roadmaps */}
      <section className="py-12 px-4 bg-gray-100">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Structured Learning Paths</h2>
          <div className="space-y-6">
            {careerPaths.map((path) => (
              <div key={path.id} className="bg-white rounded-xl overflow-hidden shadow-md">
                <div className="p-6 border-b border-gray-200">
                  <div className="flex flex-col md:flex-row items-start md:items-center">
                    <img src={path.thumbnail} alt={path.title} className="w-full md:w-48 h-32 object-cover rounded-lg mb-4 md:mb-0" />
                    <div className="md:ml-6 flex-1">
                      <h3 className="text-2xl font-bold mb-2">{path.title}</h3>
                      <p className="text-gray-600 mb-4">{path.description}</p>
                      <div className="flex flex-wrap gap-4 mb-4">
                        <div className="flex items-center text-sm text-gray-600">
                          <FiClock className="mr-1" />
                          {path.duration}
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <FiAward className="mr-1" />
                          {path.certification}
                        </div>
                        <div className="flex items-center text-sm">
                          <div className="flex text-yellow-400 mr-1">
                            <FiStar className="fill-current" />
                          </div>
                          <span className="text-gray-600">{path.rating} ({path.reviews} reviews)</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-xl">
                          ${path.price} or <span className="text-green-600">Free with Premium</span>
                        </span>
                        <button 
                          onClick={() => setExpandedPath(expandedPath === path.id ? null : path.id)}
                          className="flex items-center text-blue-600 font-semibold"
                        >
                          {expandedPath === path.id ? 'Hide Details' : 'View Roadmap'} 
                          {expandedPath === path.id ? <FiChevronUp className="ml-1" /> : <FiChevronDown className="ml-1" />}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                
                {expandedPath === path.id && (
                  <div className="p-6 bg-gray-50">
                    <h4 className="text-lg font-semibold mb-4">Learning Roadmap</h4>
                    <div className="relative">
                      {/* Timeline */}
                      <div className="absolute left-4 top-0 h-full w-0.5 bg-blue-200"></div>
                      
                      <div className="space-y-8 ml-12">
                        {path.roadmap.map((stage) => (
                          <div key={stage.stage} className="relative">
                            <div className="absolute -left-8 top-2 w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center">
                              {stage.stage}
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                              <h5 className="font-semibold mb-1">{stage.title}</h5>
                              <p className="text-gray-600 text-sm mb-2">{stage.description}</p>
                              <div className="flex justify-between text-sm text-gray-500">
                                <span>{stage.duration}</span>
                                <span>{stage.courses} courses</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Salary Information */}
                    <div className="mt-8 p-4 bg-white rounded-lg shadow-sm border border-gray-200">
                      <h4 className="font-semibold mb-3">Career Outlook</h4>
                      <div className="grid grid-cols-3 gap-4 mb-4">
                        <div className="text-center p-3 bg-blue-50 rounded-lg">
                          <div className="text-2xl font-bold text-blue-700">${path.salary.entry.toLocaleString()}</div>
                          <div className="text-sm text-gray-600">Entry Level</div>
                        </div>
                        <div className="text-center p-3 bg-blue-100 rounded-lg">
                          <div className="text-2xl font-bold text-blue-800">${path.salary.average.toLocaleString()}</div>
                          <div className="text-sm text-gray-600">Average</div>
                        </div>
                        <div className="text-center p-3 bg-blue-200 rounded-lg">
                          <div className="text-2xl font-bold text-blue-900">${path.salary.senior.toLocaleString()}</div>
                          <div className="text-sm text-gray-600">Senior Level</div>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600">{path.jobs.toLocaleString()}+ job openings</p>
                      <button className="mt-4 text-blue-600 font-semibold flex items-center">
                        View Job Opportunities <FiArrowRight className="ml-1" />
                      </button>
                    </div>
                    
                    <div className="mt-6 text-center">
                      <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                        Enroll Now
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certification Details */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">What's Included in Your Certification</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certificationDetails.map((detail, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition">
                <div className="text-blue-600 mb-4 flex justify-center">
                  {detail.icon}
                </div>
                <h3 className="font-semibold mb-2">{detail.title}</h3>
                <p className="text-gray-600 text-sm">{detail.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
              Earn Your Certificate
            </button>
          </div>
        </div>
      </section>

      {/* Mentors Section */}
      <section className="py-12 px-4 bg-gray-100">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Learn From Industry Experts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mentors.map((mentor) => (
              <div key={mentor.id} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition">
                <div className="flex items-center mb-4">
                  <img src={mentor.avatar} alt={mentor.name} className="w-16 h-16 rounded-full mr-4" />
                  <div>
                    <h3 className="font-bold text-lg">{mentor.name}</h3>
                    <p className="text-gray-600">{mentor.role}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-4">Expertise: {mentor.expertise}</p>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center">
                    <div className="flex text-yellow-400 mr-1">
                      <FiStar className="fill-current" />
                    </div>
                    <span className="text-sm text-gray-600">{mentor.rating}</span>
                  </div>
                  <span className="text-sm text-gray-600">{mentor.courses} courses</span>
                  <span className="text-sm text-gray-600">{mentor.students.toLocaleString()}+ students</span>
                </div>
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition">
                  View Courses
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {successStories.map((story) => (
              <div key={story.id} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition">
                <div className="flex items-start mb-4">
                  <div className="text-3xl text-gray-300 mr-2">"</div>
                  <p className="text-gray-700 italic">{story.quote}</p>
                </div>
                <div className="flex items-center mt-6">
                  <img src={story.avatar} alt={story.name} className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <h4 className="font-semibold">{story.name}</h4>
                    <p className="text-sm text-gray-600">{story.role}</p>
                    <div className="flex items-center mt-1">
                      <img src={story.companyLogo} alt={story.company} className="w-5 h-5 mr-2" />
                      <span className="text-sm text-gray-600">{story.company}</span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <span className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded">
                    Completed: {story.path}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Get Certified. Get Hired.</h2>
          <p className="text-xl mb-10 opacity-90">Join thousands of students who have transformed their careers with our certified paths</p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition">
              Explore Career Paths
            </button>
            <button className="bg-transparent border-2 border-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition">
              Start Learning Free
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Certified;