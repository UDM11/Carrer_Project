import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaPlay, FaArrowRight, FaCheck, FaStar, FaUsers, FaGlobe, 
  FaChevronLeft, FaChevronRight, FaQuoteLeft, FaAward,
  FaRocket, FaShieldAlt, FaClock, FaHandshake, FaGraduationCap,
  FaBuilding, FaChartLine, FaBriefcase, FaLaptopCode, FaUserTie,
  FaIndustry, FaNetworkWired, FaLightbulb, FaBullseye, FaGoogle,
  FaMicrosoft, FaAmazon, FaFacebook, FaApple, FaVideo, FaFilter,
  FaSearch, FaBookmark, FaCertificate, FaCode, FaPalette, FaDatabase,
  FaMobile, FaCloud, FaRobot, FaChartBar, FaCamera, FaMusic,
  FaGamepad, FaLanguage, FaHeart, FaEye, FaDownload, FaCalendarAlt
} from 'react-icons/fa';
import HeroSection from '../components/HeroSection';

const PublicHome = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentCourseSlide, setCurrentCourseSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Company logos data
  const companies = [
    { name: 'Google', icon: FaGoogle, color: 'text-red-500' },
    { name: 'Microsoft', icon: FaMicrosoft, color: 'text-blue-500' },
    { name: 'Amazon', icon: FaAmazon, color: 'text-orange-500' },
    { name: 'Meta', icon: FaFacebook, color: 'text-blue-600' },
    { name: 'Apple', icon: FaApple, color: 'text-gray-800' },
    { name: 'Netflix', icon: FaVideo, color: 'text-red-600' }
  ];

  // Categories data
  const categories = [
    { id: 'all', name: 'All Categories', icon: FaGlobe, count: '2000+' },
    { id: 'development', name: 'Development', icon: FaCode, count: '500+' },
    { id: 'design', name: 'Design', icon: FaPalette, count: '300+' },
    { id: 'business', name: 'Business', icon: FaBriefcase, count: '400+' },
    { id: 'data-science', name: 'Data Science', icon: FaDatabase, count: '250+' },
    { id: 'mobile', name: 'Mobile', icon: FaMobile, count: '200+' },
    { id: 'cloud', name: 'Cloud Computing', icon: FaCloud, count: '180+' },
    { id: 'ai', name: 'AI & ML', icon: FaRobot, count: '150+' },
    { id: 'marketing', name: 'Marketing', icon: FaBullseye, count: '120+' }
  ];

  // Featured courses data
  const featuredCourses = [
    {
      id: 1,
      title: 'Complete Web Development Bootcamp',
      instructor: 'Dr. Angela Yu',
      rating: 4.7,
      reviews: 273840,
      students: 850000,
      price: 84.99,
      originalPrice: 199.99,
      image: 'https://img-c.udemycdn.com/course/240x135/1565838_e54e_18.jpg',
      category: 'development',
      level: 'Beginner',
      duration: '65 hours',
      bestseller: true,
      updated: 'Recently updated'
    },
    {
      id: 2,
      title: 'Machine Learning A-Z™: Python & R',
      instructor: 'Kirill Eremenko',
      rating: 4.5,
      reviews: 178542,
      students: 720000,
      price: 89.99,
      originalPrice: 199.99,
      image: 'https://img-c.udemycdn.com/course/240x135/950390_270f_3.jpg',
      category: 'data-science',
      level: 'Intermediate',
      duration: '44 hours',
      bestseller: true,
      updated: 'Updated Nov 2024'
    },
    {
      id: 3,
      title: 'UI/UX Design Specialization',
      instructor: 'Daniel Schifano',
      rating: 4.6,
      reviews: 89234,
      students: 340000,
      price: 79.99,
      originalPrice: 179.99,
      image: 'https://img-c.udemycdn.com/course/240x135/2776760_f176_10.jpg',
      category: 'design',
      level: 'Beginner',
      duration: '32 hours',
      bestseller: false,
      updated: 'Updated Oct 2024'
    },
    {
      id: 4,
      title: 'AWS Certified Solutions Architect',
      instructor: 'Stephane Maarek',
      rating: 4.8,
      reviews: 156789,
      students: 580000,
      price: 94.99,
      originalPrice: 199.99,
      image: 'https://img-c.udemycdn.com/course/240x135/362070_d819_2.jpg',
      category: 'cloud',
      level: 'Advanced',
      duration: '28 hours',
      bestseller: true,
      updated: 'Updated Dec 2024'
    }
  ];

  // Learning paths data
  const learningPaths = [
    {
      title: 'Full Stack Developer',
      description: 'Master front-end and back-end development',
      courses: 8,
      duration: '6 months',
      level: 'Beginner to Advanced',
      skills: ['HTML/CSS', 'JavaScript', 'React', 'Node.js', 'MongoDB'],
      icon: FaCode,
      color: 'blue'
    },
    {
      title: 'Data Scientist',
      description: 'Learn data analysis, ML, and AI techniques',
      courses: 6,
      duration: '4 months',
      level: 'Intermediate',
      skills: ['Python', 'Pandas', 'Machine Learning', 'SQL', 'Tableau'],
      icon: FaChartLine,
      color: 'green'
    },
    {
      title: 'UX/UI Designer',
      description: 'Create beautiful and functional user experiences',
      courses: 5,
      duration: '3 months',
      level: 'Beginner',
      skills: ['Figma', 'Adobe XD', 'Prototyping', 'User Research', 'Design Systems'],
      icon: FaPalette,
      color: 'purple'
    },
    {
      title: 'Cloud Architect',
      description: 'Design and implement cloud solutions',
      courses: 7,
      duration: '5 months',
      level: 'Advanced',
      skills: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'DevOps'],
      icon: FaCloud,
      color: 'orange'
    }
  ];

  // Testimonials data
  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Senior Software Engineer',
      company: 'Google',
      content: 'CareerBox completely transformed my career. The hands-on projects and expert mentorship helped me transition from a junior developer to a senior engineer at Google in just 18 months.',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face',
      rating: 5,
      coursesTaken: 12,
      salaryIncrease: '150%'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Data Science Manager',
      company: 'Microsoft',
      content: 'The quality of instruction and real-world applications exceeded my expectations. I went from knowing nothing about data science to leading a team of 8 data scientists.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face',
      rating: 5,
      coursesTaken: 8,
      salaryIncrease: '200%'
    },
    {
      name: 'Emily Johnson',
      role: 'Product Design Lead',
      company: 'Amazon',
      content: 'CareerBox provided the perfect blend of theory and practice. The portfolio projects I built during the courses directly helped me land my dream job at Amazon.',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face',
      rating: 5,
      coursesTaken: 6,
      salaryIncrease: '120%'
    }
  ];

  // Stats data
  const stats = [
    { number: '57M+', label: 'Students worldwide', icon: FaUsers, description: 'Learning and growing' },
    { number: '213,000+', label: 'Courses available', icon: FaGraduationCap, description: 'In 2000+ topics' },
    { number: '75+', label: 'Languages supported', icon: FaLanguage, description: 'Global accessibility' },
    { number: '773M+', label: 'Course enrollments', icon: FaRocket, description: 'And counting' }
  ];

  // Instructor spotlight data
  const instructors = [
    {
      name: 'Dr. Angela Yu',
      title: 'Lead Instructor at App Brewery',
      students: '4.2M+',
      courses: 8,
      rating: 4.7,
      reviews: '500K+',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&h=120&fit=crop&crop=face',
      expertise: ['Web Development', 'Mobile Apps', 'Python'],
      bio: 'Former lead developer at a London-based fintech startup'
    },
    {
      name: 'Jose Portilla',
      title: 'Head of Data Science',
      students: '3.8M+',
      courses: 12,
      rating: 4.6,
      reviews: '400K+',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&h=120&fit=crop&crop=face',
      expertise: ['Data Science', 'Python', 'Machine Learning'],
      bio: 'PhD in Mechanical Engineering, Data Science consultant'
    },
    {
      name: 'Maximilian Schwarzmüller',
      title: 'Professional Web Developer',
      students: '2.9M+',
      courses: 15,
      rating: 4.8,
      reviews: '350K+',
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=120&h=120&fit=crop&crop=face',
      expertise: ['React', 'Vue.js', 'Angular', 'Node.js'],
      bio: 'Freelance web developer and consultant'
    }
  ];

  const filteredCourses = selectedCategory === 'all' 
    ? featuredCourses 
    : featuredCourses.filter(course => course.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection />

      {/* Trusted Companies Section */}
      <section className="py-12 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-gray-600 text-lg font-medium">Trusted by teams at over 14,000 companies</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
            {companies.map((company, index) => (
              <div key={index} className="flex flex-col items-center opacity-60 hover:opacity-100 transition-all duration-300 group">
                <company.icon className={`text-4xl ${company.color} group-hover:scale-110 transition-transform duration-300`} />
                <span className="text-sm text-gray-600 mt-2 font-medium">{company.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Explore Our <span className="text-blue-600">Course Categories</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Discover world-class courses across diverse fields and advance your career with industry-relevant skills
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {categories.slice(1).map((category, index) => (
              <div
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`group relative bg-white rounded-2xl p-4 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border-2 transform hover:-translate-y-2 ${
                  selectedCategory === category.id
                    ? 'border-blue-500 bg-gradient-to-br from-blue-50 to-purple-50 shadow-blue-200'
                    : 'border-transparent hover:border-blue-200'
                }`}
              >
                <div className="text-center">
                  <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-20 sm:h-20 rounded-2xl mb-3 sm:mb-6 transition-all duration-300 group-hover:scale-110 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg'
                      : 'bg-gradient-to-br from-gray-100 to-gray-200 text-gray-600 group-hover:from-blue-100 group-hover:to-purple-100 group-hover:text-blue-600'
                  }`}>
                    <category.icon className="text-xl sm:text-3xl" />
                  </div>
                  
                  <h3 className={`text-sm sm:text-xl font-bold mb-2 sm:mb-3 transition-colors duration-300 ${
                    selectedCategory === category.id ? 'text-blue-700' : 'text-gray-900 group-hover:text-blue-600'
                  }`}>
                    {category.name}
                  </h3>
                  
                  <div className="flex items-center justify-center space-x-1 sm:space-x-2 mb-2 sm:mb-4">
                    <span className={`text-lg sm:text-2xl font-bold ${
                      selectedCategory === category.id ? 'text-blue-600' : 'text-gray-700'
                    }`}>
                      {category.count}
                    </span>
                    <span className="text-gray-500 text-xs sm:text-sm">courses</span>
                  </div>
                  
                  <div className={`inline-flex items-center text-xs sm:text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category.id 
                      ? 'text-blue-600' 
                      : 'text-gray-500 group-hover:text-blue-600'
                  }`}>
                    Explore courses
                    <FaArrowRight className="ml-1 sm:ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                  <category.icon className="text-4xl text-blue-500" />
                </div>
                
                {selectedCategory === category.id && (
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                    <FaCheck className="text-white text-xs" />
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* View All Categories Button */}
          <div className="text-center mt-12">
            <Link 
              to="/courses"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <FaGlobe className="mr-3" />
              View All 2000+ Courses
              <FaArrowRight className="ml-3" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                Featured Courses
              </h2>
              <p className="text-gray-600">Courses that help you keep up with the latest trends</p>
            </div>
            <Link to="/courses" className="text-blue-600 hover:text-blue-700 font-semibold flex items-center whitespace-nowrap">
              View all <FaArrowRight className="ml-2" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredCourses.map((course) => (
              <div key={course.id} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="relative">
                  <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
                  {course.bestseller && (
                    <span className="absolute top-3 left-3 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">
                      Bestseller
                    </span>
                  )}
                  <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                    <FaHeart className="text-gray-400 hover:text-red-500" />
                  </button>
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                    <button className="bg-white rounded-full p-3 opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300">
                      <FaPlay className="text-blue-600" />
                    </button>
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-2">{course.instructor}</p>
                  
                  <div className="flex items-center mb-2">
                    <div className="flex items-center mr-2">
                      <span className="text-orange-500 font-bold text-sm mr-1">{course.rating}</span>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <FaStar key={i} className={`text-xs ${i < Math.floor(course.rating) ? 'text-orange-500' : 'text-gray-300'}`} />
                        ))}
                      </div>
                    </div>
                    <span className="text-gray-500 text-xs">({course.reviews.toLocaleString()})</span>
                  </div>
                  
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2 text-xs text-gray-500">
                      <span className="flex items-center">
                        <FaClock className="mr-1" />
                        {course.duration}
                      </span>
                      <span className="flex items-center">
                        <FaUsers className="mr-1" />
                        {course.students.toLocaleString()}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-lg font-bold text-gray-900">${course.price}</span>
                      <span className="text-sm text-gray-500 line-through ml-2">${course.originalPrice}</span>
                    </div>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      course.level === 'Beginner' ? 'bg-green-100 text-green-800' :
                      course.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {course.level}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Paths Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Career-Focused <span className="text-blue-600">Learning Paths</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Structured learning journeys designed to take you from beginner to job-ready professional
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {learningPaths.map((path, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 group">
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{path.title}</h3>
                <p className="text-gray-600 mb-4">{path.description}</p>
                
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Courses:</span>
                    <span className="font-medium">{path.courses}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Duration:</span>
                    <span className="font-medium">{path.duration}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Level:</span>
                    <span className="font-medium">{path.level}</span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Skills you'll learn:</h4>
                  <div className="flex flex-wrap gap-1">
                    {path.skills.slice(0, 3).map((skill, idx) => (
                      <span key={idx} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                        {skill}
                      </span>
                    ))}
                    {path.skills.length > 3 && (
                      <span className="text-xs text-gray-500">+{path.skills.length - 3} more</span>
                    )}
                  </div>
                </div>
                
                <Link 
                  to="/courses"
                  className="w-full inline-flex items-center justify-center px-4 py-3 rounded-lg font-semibold transition-all duration-300 bg-blue-600 hover:bg-blue-700 text-white"
                >
                  Start Learning <FaArrowRight className="ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instructor Spotlight */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Learn from <span className="text-blue-600">Industry Experts</span>
            </h2>
            <p className="text-xl text-gray-600">World-class instructors with real-world experience</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {instructors.map((instructor, index) => (
              <div key={index} className="bg-white rounded-2xl p-2 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-center mb-6">
                  <img 
                    src={instructor.avatar} 
                    alt={instructor.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-blue-100"
                  />
                  <h3 className="text-xl font-bold text-gray-900">{instructor.name}</h3>
                  <p className="text-blue-600 font-medium">{instructor.title}</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">{instructor.students}</div>
                    <div className="text-sm text-gray-500">Students</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">{instructor.courses}</div>
                    <div className="text-sm text-gray-500">Courses</div>
                  </div>
                </div>
                
                <div className="flex items-center justify-center mb-4">
                  <FaStar className="text-orange-500" />
                  <span className="ml-1 font-bold">{instructor.rating}</span>
                  <span className="ml-2 text-gray-500">({instructor.reviews} reviews)</span>
                </div>
                
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2 justify-center">
                    {instructor.expertise.map((skill, idx) => (
                      <span key={idx} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm text-center mb-6">{instructor.bio}</p>
                
                <Link 
                  to="/trainers"
                  className="w-full inline-flex items-center justify-center px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300"
                >
                  View Profile
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transforming Lives <span className="text-blue-300">Globally</span>
            </h2>
            <p className="text-blue-100 text-lg">Join millions of learners advancing their careers with CareerBox</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center text-white">
                <stat.icon className="text-4xl mx-auto mb-4 text-blue-300" />
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-100 font-medium mb-1">{stat.label}</div>
                <div className="text-blue-200 text-sm">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Success <span className="text-blue-600">Stories</span>
            </h2>
            <p className="text-xl text-gray-600">Real career transformations from our community</p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 md:p-12">
              <div className="grid md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-2">
                  <FaQuoteLeft className="text-4xl text-blue-300 mb-6" />
                  <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                    "{testimonials[currentTestimonial].content}"
                  </p>
                  <div className="flex items-center mb-4">
                    <img 
                      src={testimonials[currentTestimonial].avatar}
                      alt={testimonials[currentTestimonial].name}
                      className="w-16 h-16 rounded-full mr-4 border-3 border-white shadow-lg"
                    />
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">{testimonials[currentTestimonial].name}</h4>
                      <p className="text-gray-600">{testimonials[currentTestimonial].role}</p>
                      <p className="text-blue-600 font-medium">{testimonials[currentTestimonial].company}</p>
                    </div>
                  </div>
                  <div className="flex justify-center md:justify-start">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400 text-lg" />
                    ))}
                  </div>
                </div>
                
                <div className="text-center md:text-left">
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <h4 className="font-bold text-gray-900 mb-4">Career Impact</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Courses Completed:</span>
                        <span className="font-bold text-blue-600">{testimonials[currentTestimonial].coursesTaken}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Salary Increase:</span>
                        <span className="font-bold text-green-600">+{testimonials[currentTestimonial].salaryIncrease}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Time to Success:</span>
                        <span className="font-bold text-purple-600">18 months</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentTestimonial === index ? 'bg-blue-600 w-8' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Career?
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Join millions of learners and start building the skills that will advance your career today
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link 
              to="/signup"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Start Learning Today <FaArrowRight className="ml-2" />
            </Link>
            
            <Link 
              to="/courses"
              className="inline-flex items-center px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              <FaPlay className="mr-2" />
              Explore Courses
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-600">
            <div className="flex flex-col items-center">
              <FaCheck className="text-green-500 text-2xl mb-2" />
              <span className="font-medium">Free to get started</span>
              <span className="text-sm">No credit card required</span>
            </div>
            <div className="flex flex-col items-center">
              <FaCertificate className="text-blue-500 text-2xl mb-2" />
              <span className="font-medium">Industry certificates</span>
              <span className="text-sm">Recognized by employers</span>
            </div>
            <div className="flex flex-col items-center">
              <FaUsers className="text-purple-500 text-2xl mb-2" />
              <span className="font-medium">Expert support</span>
              <span className="text-sm">24/7 community help</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PublicHome;