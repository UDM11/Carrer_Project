import { useState } from 'react';
import { FiSearch, FiBook, FiCode, FiBriefcase, FiMonitor, FiTrendingUp, FiStar, FiClock, FiDollarSign, FiGlobe, FiFilter, FiArrowRight, FiChevronLeft, FiChevronRight, FiCheck, FiUser } from 'react-icons/fi';
import { FaPalette } from "react-icons/fa";


const Courses = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [selectedDuration, setSelectedDuration] = useState('all');
  const [selectedLanguage, setSelectedLanguage] = useState('all');
  const [selectedPrice, setSelectedPrice] = useState('all');
  const [sortOption, setSortOption] = useState('popularity');

  // Sample data for courses
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
      thumbnail: 'https://via.placeholder.com/300x200/3B82F6/FFFFFF?text=React',
      category: 'development',
      isNew: true,
      isHot: true
    },
    {
      id: 2,
      title: 'Data Science Fundamentals',
      description: 'Learn the core concepts of data science and machine learning algorithms.',
      trainer: 'Michael Chen',
      rating: 4.7,
      reviews: 95,
      duration: '18 hours',
      level: 'Intermediate',
      price: 79.99,
      thumbnail: 'https://via.placeholder.com/300x200/10B981/FFFFFF?text=Data+Science',
      category: 'ai-data',
      isNew: false,
      isHot: true
    },
    {
      id: 3,
      title: 'UI/UX Design Masterclass',
      description: 'Create stunning user interfaces and improve user experience in your designs.',
      trainer: 'Emma Wilson',
      rating: 4.8,
      reviews: 142,
      duration: '15 hours',
      level: 'Intermediate',
      price: 69.99,
      thumbnail: 'https://via.placeholder.com/300x200/8B5CF6/FFFFFF?text=UI/UX',
      category: 'design',
      isNew: true,
      isHot: false
    },
    {
      id: 4,
      title: 'Digital Marketing Strategy',
      description: 'Develop effective digital marketing strategies to grow your business online.',
      trainer: 'Alex Rodriguez',
      rating: 4.6,
      reviews: 87,
      duration: '10 hours',
      level: 'Beginner',
      price: 59.99,
      thumbnail: 'https://via.placeholder.com/300x200/EC4899/FFFFFF?text=Marketing',
      category: 'marketing',
      isNew: false,
      isHot: true
    },
    {
      id: 5,
      title: 'Python for Beginners',
      description: 'Learn Python programming from scratch with practical examples and projects.',
      trainer: 'David Kim',
      rating: 4.5,
      reviews: 210,
      duration: '8 hours',
      level: 'Beginner',
      price: 0,
      thumbnail: 'https://via.placeholder.com/300x200/F59E0B/FFFFFF?text=Python',
      category: 'development',
      isNew: false,
      isHot: false
    },
    {
      id: 6,
      title: 'Business Analytics',
      description: 'Use data analytics to drive business decisions and improve performance.',
      trainer: 'Jessica Williams',
      rating: 4.7,
      reviews: 76,
      duration: '14 hours',
      level: 'Intermediate',
      price: 74.99,
      thumbnail: 'https://via.placeholder.com/300x200/6366F1/FFFFFF?text=Analytics',
      category: 'business',
      isNew: true,
      isHot: false
    }
  ];

  // Sample data for categories
  const categories = [
    { id: 'ai-data', name: 'AI & Data Science', icon: <FiTrendingUp className="text-xl" /> },
    { id: 'development', name: 'Development', icon: <FiCode className="text-xl" /> },
    { id: 'business', name: 'Business', icon: <FiBriefcase className="text-xl" /> },
    { id: 'it-software', name: 'IT & Software', icon: <FiMonitor className="text-xl" /> },
    { id: 'design', name: 'Design', icon: <FaPalette className="text-xl" /> },
    { id: 'marketing', name: 'Marketing', icon: <FiTrendingUp className="text-xl" /> }
  ];

  // Sample data for testimonials
  const testimonials = [
    {
      id: 1,
      quote: "These courses completely transformed my career. I went from junior developer to team lead in just one year!",
      name: "Alex Thompson",
      role: "Software Engineer",
      course: "Advanced React Patterns",
      avatar: "https://via.placeholder.com/50/3B82F6/FFFFFF?text=A"
    },
    {
      id: 2,
      quote: "The quality of instruction is exceptional. I've implemented strategies that increased our conversion rate by 35%.",
      name: "Maria Garcia",
      role: "Marketing Director",
      course: "Digital Marketing Strategy",
      avatar: "https://via.placeholder.com/50/10B981/FFFFFF?text=M"
    },
    {
      id: 3,
      quote: "As a beginner, I found the courses incredibly accessible. The step-by-step approach made complex topics easy to understand.",
      name: "James Wilson",
      role: "Data Analyst",
      course: "Python for Beginners",
      avatar: "https://via.placeholder.com/50/8B5CF6/FFFFFF?text=J"
    }
  ];

  // Sample data for trainers
  const trainers = [
    {
      id: 1,
      name: "Sarah Johnson",
      expertise: "React & Frontend Development",
      courses: 12,
      rating: 4.9,
      avatar: "https://via.placeholder.com/80/3B82F6/FFFFFF?text=SJ"
    },
    {
      id: 2,
      name: "Michael Chen",
      expertise: "Data Science & AI",
      courses: 8,
      rating: 4.8,
      avatar: "https://via.placeholder.com/80/10B981/FFFFFF?text=MC"
    },
    {
      id: 3,
      name: "Emma Wilson",
      expertise: "UI/UX Design",
      courses: 10,
      rating: 4.9,
      avatar: "https://via.placeholder.com/80/8B5CF6/FFFFFF?text=EW"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero / Search Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Explore Courses & Learn New Skills</h1>
              <p className="text-xl mb-8 opacity-90">Choose from hundreds of courses taught by industry experts.</p>
              <div className="flex space-x-4">
                <button className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
                  Browse All
                </button>
                <button className="bg-transparent border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition">
                  Start Learning Free
                </button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl w-full max-w-md">
                <div className="relative mb-4">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiSearch className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search for courses, skills, or trainers..."
                    className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <select className="bg-white/10 border border-white/30 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-white/50">
                    <option>Category</option>
                    <option>Development</option>
                    <option>Design</option>
                    <option>Marketing</option>
                  </select>
                  <select className="bg-white/10 border border-white/30 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-white/50">
                    <option>Level</option>
                    <option>Beginner</option>
                    <option>Intermediate</option>
                    <option>Advanced</option>
                  </select>
                  <select className="bg-white/10 border border-white/30 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-white/50">
                    <option>Duration</option>
                    <option>Short (&lt;5 hrs)</option>
                    <option>Medium (5-20 hrs)</option>
                    <option>Long (&gt;20 hrs)</option>
                  </select>
                  <select className="bg-white/10 border border-white/30 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-white/50">
                    <option>Language</option>
                    <option>English</option>
                    <option>Spanish</option>
                    <option>French</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Browse by Topics</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <div 
                key={category.id} 
                className={`flex flex-col items-center p-6 rounded-xl cursor-pointer transition-all hover:shadow-lg ${activeCategory === category.id ? 'bg-blue-50 border-2 border-blue-500' : 'bg-white border border-gray-200'}`}
                onClick={() => setActiveCategory(category.id)}
              >
                <div className={`p-3 rounded-full mb-3 ${activeCategory === category.id ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'}`}>
                  {category.icon}
                </div>
                <h3 className="font-semibold text-center">{category.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="py-12 px-4 bg-gray-100">
        <div className="container mx-auto max-w-6xl">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Featured Courses</h2>
            <div className="flex space-x-2">
              <button className="p-2 rounded-full bg-white border border-gray-300 hover:bg-gray-50">
                <FiChevronLeft />
              </button>
              <button className="p-2 rounded-full bg-white border border-gray-300 hover:bg-gray-50">
                <FiChevronRight />
              </button>
            </div>
          </div>
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
                      HOT
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
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-lg">
                      {course.price === 0 ? 'Free' : `$${course.price}`}
                    </span>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition">
                      Enroll Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter & Course Explorer Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-start mb-8">
            <h2 className="text-3xl font-bold mb-4 md:mb-0">Course Explorer</h2>
            
            <div className="flex flex-wrap gap-4">
              <select 
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="bg-white border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Levels</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
              
              <select 
                value={selectedDuration}
                onChange={(e) => setSelectedDuration(e.target.value)}
                className="bg-white border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Durations</option>
                <option value="short">Short (&lt;5 hrs)</option>
                <option value="medium">Medium (5-20 hrs)</option>
                <option value="long">Long (&gt;20 hrs)</option>
              </select>
              
              <select 
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
                className="bg-white border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Languages</option>
                <option value="english">English</option>
                <option value="spanish">Spanish</option>
                <option value="french">French</option>
              </select>
              
              <select 
                value={selectedPrice}
                onChange={(e) => setSelectedPrice(e.target.value)}
                className="bg-white border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Prices</option>
                <option value="free">Free</option>
                <option value="paid">Paid</option>
              </select>
              
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <div key={course.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition">
                <img src={course.thumbnail} alt={course.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-lg">{course.title}</h3>
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${course.level === 'Beginner' ? 'bg-green-100 text-green-800' : course.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}`}>
                      {course.level}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{course.description}</p>
                  
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 rounded-full bg-gray-300 mr-2 overflow-hidden">
                      <FiUser className="w-full h-full p-2 text-gray-500" />
                    </div>
                    <span className="text-sm">{course.trainer}</span>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="flex text-yellow-400 mr-1">
                        {[...Array(5)].map((_, i) => (
                          <FiStar key={i} className={i < Math.floor(course.rating) ? "fill-current" : ""} />
                        ))}
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
                    <button className="text-blue-600 font-semibold hover:text-blue-800 transition flex items-center">
                      View Details <FiArrowRight className="ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trainers Section */}
      <section className="py-12 px-4 bg-gray-100">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Trainers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trainers.map((trainer) => (
              <div key={trainer.id} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition text-center">
                <img src={trainer.avatar} alt={trainer.name} className="w-20 h-20 rounded-full mx-auto mb-4" />
                <h3 className="font-bold text-xl mb-1">{trainer.name}</h3>
                <p className="text-gray-600 mb-3">{trainer.expertise}</p>
                <div className="flex justify-center items-center mb-4">
                  <div className="flex text-yellow-400 mr-1">
                    {[...Array(5)].map((_, i) => (
                      <FiStar key={i} className={i < Math.floor(trainer.rating) ? "fill-current" : ""} />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">({trainer.rating})</span>
                </div>
                <p className="text-sm text-gray-600 mb-4">{trainer.courses} courses</p>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition">
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
          <h2 className="text-3xl font-bold text-center mb-12">Student Success Stories</h2>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Exploring & Learning Today</h2>
          <p className="text-xl mb-10 opacity-90">Join thousands of students advancing their careers with our courses</p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition">
              Explore All Courses
            </button>
            <button className="bg-transparent border-2 border-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition">
              Join as Trainer
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;