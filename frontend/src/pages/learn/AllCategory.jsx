import { useState } from 'react';
import { FiSearch, FiFilter, FiStar, FiClock, FiUser, FiBook, FiCode, FiBriefcase, FiMonitor, FiTrendingUp, FiArrowRight, FiCheck, FiX } from 'react-icons/fi';
import { FaPalette } from "react-icons/fa";


const AllCategory = () => {
  const [activeSubcategory, setActiveSubcategory] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [selectedDuration, setSelectedDuration] = useState('all');
  const [selectedLanguage, setSelectedLanguage] = useState('all');
  const [selectedPrice, setSelectedPrice] = useState('all');
  const [sortOption, setSortOption] = useState('popularity');
  const [showFilters, setShowFilters] = useState(false);
  
  // Sample data - this would come from props or API in a real app
  const category = {
    name: 'Web Development',
    skills: 'HTML, CSS, JavaScript, React, Node.js',
    description: 'Learn to build modern websites and web applications from industry experts, from beginner to advanced levels.',
  };

  // Sample subcategories
  const subcategories = [
    { id: 'all', name: 'All Web Dev' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'fullstack', name: 'Full Stack' },
    { id: 'react', name: 'React' },
    { id: 'vue', name: 'Vue.js' },
    { id: 'angular', name: 'Angular' },
    { id: 'node', name: 'Node.js' },
    { id: 'javascript', name: 'JavaScript' },
  ];

  // Sample courses data
  const courses = [
    {
      id: 1,
      title: 'Advanced React Patterns',
      description: 'Master advanced React patterns and techniques for building scalable applications.',
      trainer: 'Sarah Johnson',
      rating: 4.9,
      reviews: 128,
      duration: '12 hours',
      level: 'Advanced',
      price: 89.99,
      thumbnail: 'https://via.placeholder.com/300x200/3B82F6/FFFFFF?text=React+Course',
      category: 'development',
      isNew: true,
      isHot: true,
      subcategories: ['frontend', 'react']
    },
    {
      id: 2,
      title: 'Node.js Backend Mastery',
      description: 'Build robust and scalable backend services with Node.js and Express.',
      trainer: 'Michael Chen',
      rating: 4.7,
      reviews: 95,
      duration: '18 hours',
      level: 'Intermediate',
      price: 79.99,
      thumbnail: 'https://via.placeholder.com/300x200/10B981/FFFFFF?text=Node.js',
      category: 'development',
      isNew: false,
      isHot: true,
      subcategories: ['backend', 'node']
    },
    {
      id: 3,
      title: 'JavaScript Fundamentals',
      description: 'Learn the core concepts of JavaScript programming from the ground up.',
      trainer: 'Emma Wilson',
      rating: 4.8,
      reviews: 142,
      duration: '15 hours',
      level: 'Beginner',
      price: 69.99,
      thumbnail: 'https://via.placeholder.com/300x200/8B5CF6/FFFFFF?text=JavaScript',
      category: 'development',
      isNew: true,
      isHot: false,
      subcategories: ['frontend', 'javascript']
    },
    {
      id: 4,
      title: 'Vue.js Complete Guide',
      description: 'Master Vue.js framework and build modern, reactive web applications.',
      trainer: 'Alex Rodriguez',
      rating: 4.6,
      reviews: 87,
      duration: '10 hours',
      level: 'Intermediate',
      price: 59.99,
      thumbnail: 'https://via.placeholder.com/300x200/EC4899/FFFFFF?text=Vue.js',
      category: 'development',
      isNew: false,
      isHot: true,
      subcategories: ['frontend', 'vue']
    },
    {
      id: 5,
      title: 'Full Stack JavaScript',
      description: 'Become a full stack developer by learning both frontend and backend JavaScript.',
      trainer: 'David Kim',
      rating: 4.5,
      reviews: 210,
      duration: '8 hours',
      level: 'Beginner',
      price: 0,
      thumbnail: 'https://via.placeholder.com/300x200/F59E0B/FFFFFF?text=Full+Stack',
      category: 'development',
      isNew: false,
      isHot: false,
      subcategories: ['fullstack', 'javascript']
    },
    {
      id: 6,
      title: 'Angular Framework Course',
      description: 'Build enterprise-grade applications with Angular framework.',
      trainer: 'Jessica Williams',
      rating: 4.7,
      reviews: 76,
      duration: '14 hours',
      level: 'Intermediate',
      price: 74.99,
      thumbnail: 'https://via.placeholder.com/300x200/6366F1/FFFFFF?text=Angular',
      category: 'development',
      isNew: true,
      isHot: false,
      subcategories: ['frontend', 'angular']
    }
  ];

  // Sample trainers data
  const trainers = [
    {
      id: 1,
      name: "Sarah Johnson",
      title: "Senior React Developer",
      skills: ["React", "JavaScript", "Frontend"],
      rating: 4.9,
      courses: 12,
      avatar: "https://via.placeholder.com/80/3B82F6/FFFFFF?text=SJ"
    },
    {
      id: 2,
      name: "Michael Chen",
      title: "Backend Architect",
      skills: ["Node.js", "Express", "API Design"],
      rating: 4.8,
      courses: 8,
      avatar: "https://via.placeholder.com/80/10B981/FFFFFF?text=MC"
    },
    {
      id: 3,
      name: "Emma Wilson",
      title: "JavaScript Instructor",
      skills: ["JavaScript", "ES6+", "Web Fundamentals"],
      rating: 4.9,
      courses: 10,
      avatar: "https://via.placeholder.com/80/8B5CF6/FFFFFF?text=EW"
    }
  ];

  // Sample testimonials
  const testimonials = [
    {
      id: 1,
      quote: "The React course completely transformed my career. I went from junior developer to team lead in just one year!",
      name: "Alex Thompson",
      role: "Frontend Developer",
      course: "Advanced React Patterns",
      avatar: "https://via.placeholder.com/50/3B82F6/FFFFFF?text=A"
    },
    {
      id: 2,
      quote: "After completing the Node.js course, I was able to build a complete backend for my startup and secure funding.",
      name: "Maria Garcia",
      role: "Backend Engineer",
      course: "Node.js Backend Mastery",
      avatar: "https://via.placeholder.com/50/10B981/FFFFFF?text=M"
    },
    {
      id: 3,
      quote: "The JavaScript fundamentals course gave me the confidence to apply for developer jobs. I got hired within 2 months!",
      name: "James Wilson",
      role: "Junior Developer",
      course: "JavaScript Fundamentals",
      avatar: "https://via.placeholder.com/50/8B5CF6/FFFFFF?text=J"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-2/3 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Explore Courses in {category.name}</h1>
              <p className="text-xl mb-8 opacity-90">Learn {category.skills} from industry experts, from beginner to advanced.</p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
                  Browse All Courses
                </button>
                <button className="bg-transparent border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition">
                  Enroll Now
                </button>
              </div>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <div className="bg-white/20 p-6 rounded-2xl w-full max-w-xs">
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl mb-3">
                  <FiCode className="text-4xl mx-auto mb-2" />
                  <p className="text-center text-sm">Web Development</p>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-white/10 backdrop-blur-sm p-2 rounded text-center">
                    <FiBook className="mx-auto mb-1" />
                    <p className="text-xs">100+ Courses</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-2 rounded text-center">
                    <FiUser className="mx-auto mb-1" />
                    <p className="text-xs">50+ Experts</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subcategories Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-8">Specializations in {category.name}</h2>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {subcategories.map((subcat) => (
              <button
                key={subcat.id}
                onClick={() => setActiveSubcategory(subcat.id)}
                className={`px-5 py-2 rounded-full transition ${activeSubcategory === subcat.id ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-100'}`}
              >
                {subcat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="py-12 px-4 bg-gray-100">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-8">Trending in {category.name}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.slice(0, 3).map((course) => (
              <div key={course.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition">
                <div className="relative">
                  <img src={course.thumbnail} alt={course.title} className="w-full h-48 object-cover" />
                  {course.isNew && (
                    <span className="absolute top-3 left-3 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded">
                      NEW
                    </span>
                  )}
                  {course.isHot && (
                    <span className="absolute top-3 right-3 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
                      TRENDING
                    </span>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2">{course.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{course.trainer}</p>
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400 mr-2">
                      {[...Array(5)].map((_, i) => (
                        <FiStar key={i} className={i < Math.floor(course.rating) ? "fill-current" : ""} />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">({course.reviews})</span>
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${course.level === 'Beginner' ? 'bg-green-100 text-green-800' : course.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}`}>
                      {course.level}
                    </span>
                    <div className="flex items-center text-sm text-gray-600">
                      <FiClock className="mr-1" />
                      {course.duration}
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-lg">
                      {course.price === 0 ? 'Free' : `$${course.price}`}
                    </span>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition">
                      View Course
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter & Course List Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-start mb-8">
            <h2 className="text-3xl font-bold mb-4 md:mb-0">All {category.name} Courses</h2>
            
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 bg-white border border-gray-300 rounded-lg px-4 py-2 hover:bg-gray-50 md:hidden"
              >
                <FiFilter /> Filters
              </button>
              
              <select 
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="bg-white border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="popularity">Popularity</option>
                <option value="rating">Highest Rated</option>
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className={`bg-white rounded-lg shadow p-6 w-full md:w-64 h-fit ${showFilters ? 'block' : 'hidden md:block'}`}>
              <div className="flex justify-between items-center mb-6 md:hidden">
                <h3 className="font-bold text-lg">Filters</h3>
                <button onClick={() => setShowFilters(false)}>
                  <FiX className="text-xl" />
                </button>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold mb-3">Level</h4>
                {['All', 'Beginner', 'Intermediate', 'Advanced'].map(level => (
                  <div key={level} className="flex items-center mb-2">
                    <input 
                      type="radio" 
                      id={`level-${level}`} 
                      name="level" 
                      checked={selectedLevel === level.toLowerCase()} 
                      onChange={() => setSelectedLevel(level.toLowerCase())}
                      className="mr-2"
                    />
                    <label htmlFor={`level-${level}`} className="text-gray-700">{level}</label>
                  </div>
                ))}
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold mb-3">Duration</h4>
                {['All', 'Short (<5 hrs)', 'Medium (5-20 hrs)', 'Long (>20 hrs)'].map(duration => (
                  <div key={duration} className="flex items-center mb-2">
                    <input 
                      type="radio" 
                      id={`duration-${duration}`} 
                      name="duration" 
                      checked={selectedDuration === duration.toLowerCase()} 
                      onChange={() => setSelectedDuration(duration.toLowerCase())}
                      className="mr-2"
                    />
                    <label htmlFor={`duration-${duration}`} className="text-gray-700">{duration}</label>
                  </div>
                ))}
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold mb-3">Language</h4>
                {['All', 'English', 'Spanish', 'French'].map(lang => (
                  <div key={lang} className="flex items-center mb-2">
                    <input 
                      type="radio" 
                      id={`lang-${lang}`} 
                      name="language" 
                      checked={selectedLanguage === lang.toLowerCase()} 
                      onChange={() => setSelectedLanguage(lang.toLowerCase())}
                      className="mr-2"
                    />
                    <label htmlFor={`lang-${lang}`} className="text-gray-700">{lang}</label>
                  </div>
                ))}
              </div>
              
              <div>
                <h4 className="font-semibold mb-3">Price</h4>
                {['All', 'Free', 'Paid'].map(price => (
                  <div key={price} className="flex items-center mb-2">
                    <input 
                      type="radio" 
                      id={`price-${price}`} 
                      name="price" 
                      checked={selectedPrice === price.toLowerCase()} 
                      onChange={() => setSelectedPrice(price.toLowerCase())}
                      className="mr-2"
                    />
                    <label htmlFor={`price-${price}`} className="text-gray-700">{price}</label>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Course List */}
            <div className="flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {courses.map((course) => (
                  <div key={course.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition">
                    <div className="flex">
                      <img src={course.thumbnail} alt={course.title} className="w-1/3 object-cover" />
                      <div className="p-4 flex-1">
                        <h3 className="font-bold text-lg mb-1">{course.title}</h3>
                        <p className="text-gray-600 text-sm mb-2 line-clamp-2">{course.description}</p>
                        
                        <div className="flex items-center mb-2">
                          <div className="w-6 h-6 rounded-full bg-gray-300 mr-2 overflow-hidden">
                            <FiUser className="w-full h-full p-1 text-gray-500" />
                          </div>
                          <span className="text-sm">{course.trainer}</span>
                        </div>
                        
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center">
                            <div className="flex text-yellow-400 mr-1">
                              <FiStar className="fill-current" />
                              <span className="text-sm text-gray-600 ml-1">{course.rating}</span>
                            </div>
                            <span className="text-sm text-gray-600">({course.reviews})</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <FiClock className="mr-1" />
                            {course.duration}
                          </div>
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <span className="font-bold text-lg">
                            {course.price === 0 ? 'Free' : `$${course.price}`}
                          </span>
                          <button className="bg-blue-600 text-white px-3 py-1.5 rounded-lg text-sm font-semibold hover:bg-blue-700 transition">
                            Enroll
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trainers Section */}
      <section className="py-12 px-4 bg-gray-100">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Top {category.name} Instructors</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {trainers.map((trainer) => (
              <div key={trainer.id} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition">
                <div className="flex items-center mb-4">
                  <img src={trainer.avatar} alt={trainer.name} className="w-16 h-16 rounded-full mr-4" />
                  <div>
                    <h3 className="font-bold text-lg">{trainer.name}</h3>
                    <p className="text-gray-600">{trainer.title}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {trainer.skills.map((skill, index) => (
                    <span key={index} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="flex text-yellow-400 mr-1">
                      <FiStar className="fill-current" />
                    </div>
                    <span className="text-sm text-gray-600">{trainer.rating}</span>
                  </div>
                  <span className="text-sm text-gray-600">{trainer.courses} courses</span>
                </div>
                <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition">
                  View Courses
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Success Stories from Our Students</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition">
                <div className="flex items-start mb-4">
                  <div className="text-4xl text-gray-300 mr-2">"</div>
                  <p className="text-gray-700 italic">{testimonial.quote}</p>
                </div>
                <div className="flex items-center mt-6">
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-sm text-blue-600">Completed: {testimonial.course}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Master {category.name} Today</h2>
          <p className="text-xl mb-10 opacity-90">Join thousands of students who have transformed their careers with our courses</p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition">
              Explore All Courses
            </button>
            <button className="bg-transparent border-2 border-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition">
              Start Learning
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllCategory;