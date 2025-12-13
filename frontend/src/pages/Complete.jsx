import React, { useState } from 'react';
import {
  FaSearch, FaFilter, FaSort, FaDownload, FaEye,
  FaStar, FaTrophy, FaShare, FaCalendarAlt,
  FaChartLine, FaFire, FaMedal, FaCertificate,
  FaCheckCircle, FaArrowRight, FaBookOpen
} from 'react-icons/fa';

const Complete = () => {
  const [filter, setFilter] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const [searchTerm, setSearchTerm] = useState('');

  // Sample data for completed courses
  const complete = [
    {
      id: 1,
      title: 'Advanced React Development',
      category: 'Web Development',
      dateCompleted: '2023-10-15',
      score: 92,
      thumbnail: 'https://via.placeholder.com/300x200/4a86e8/ffffff?text=React',
      certificateUrl: '#',
      instructor: 'Jane Smith',
      duration: '12 hours'
    },
    {
      id: 2,
      title: 'UI/UX Design Principles',
      category: 'Design',
      dateCompleted: '2023-09-22',
      score: 88,
      thumbnail: 'https://via.placeholder.com/300x200/3cbe6e/ffffff?text=UI/UX',
      certificateUrl: '#',
      instructor: 'Michael Chen',
      duration: '8 hours'
    },
    {
      id: 3,
      title: 'Python for Data Science',
      category: 'Data Science',
      dateCompleted: '2023-11-05',
      score: 95,
      thumbnail: 'https://via.placeholder.com/300x200/ff9900/ffffff?text=Python',
      certificateUrl: '#',
      instructor: 'Sarah Johnson',
      duration: '15 hours'
    },
    {
      id: 4,
      title: 'Digital Marketing Fundamentals',
      category: 'Marketing',
      dateCompleted: '2023-08-30',
      score: 85,
      thumbnail: 'https://via.placeholder.com/300x200/cc65fe/ffffff?text=Marketing',
      certificateUrl: '#',
      instructor: 'David Wilson',
      duration: '10 hours'
    },
    {
      id: 5,
      title: 'Mobile App Development with Flutter',
      category: 'Mobile Development',
      dateCompleted: '2023-10-28',
      score: 90,
      thumbnail: 'https://via.placeholder.com/300x200/4285f4/ffffff?text=Flutter',
      certificateUrl: '#',
      instructor: 'Emily Rodriguez',
      duration: '14 hours'
    },
    {
      id: 6,
      title: 'Introduction to Cloud Computing',
      category: 'Cloud',
      dateCompleted: '2023-09-10',
      score: 87,
      thumbnail: 'https://via.placeholder.com/300x200/34a853/ffffff?text=Cloud',
      certificateUrl: '#',
      instructor: 'Robert Taylor',
      duration: '9 hours'
    }
  ];

  // Sample achievements
  const achievements = [
    { id: 1, title: 'First Course Completed', icon: <FaMedal />, earned: true },
    { id: 2, title: '5 Courses Mastered', icon: <FaTrophy />, earned: true },
    { id: 3, title: 'Top Scorer (95%+)', icon: <FaStar />, earned: true },
    { id: 4, title: '10 Courses Completed', icon: <FaCertificate />, earned: false },
    { id: 5, title: '30-Day Learning Streak', icon: <FaFire />, earned: false },
    { id: 6, title: 'All Categories Explorer', icon: <FaChartLine />, earned: true }
  ];

  // Filter and sort courses based on user selection
  const filtere = complete
    .filter(course => {
      if (filter === 'all') return true;
      return course.category.toLowerCase() === filter;
    })
    .filter(course => 
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.category.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === 'newest') return new Date(b.dateCompleted) - new Date(a.dateCompleted);
      if (sortBy === 'oldest') return new Date(a.dateCompleted) - new Date(b.dateCompleted);
      if (sortBy === 'highest') return b.score - a.score;
      if (sortBy === 'alphabetical') return a.title.localeCompare(b.title);
      return 0;
    });

  // Calculate stats
  const totalCourses = complete.length;
  const averageScore = Math.round(complete.reduce((sum, course) => sum + course.score, 0) / totalCourses);
  const categoriesCompleted = [...new Set(complete.map(course => course.category))].length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex items-center mb-6">
            <FaCheckCircle className="text-3xl mr-3" />
            <h1 className="text-3xl md:text-4xl font-bold">Completed Courses</h1>
          </div>
          <div className="bg-white/10 p-4 rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium">You've completed {totalCourses} out of 20 courses</span>
              <span className="font-bold">{Math.round((totalCourses / 20) * 100)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div 
                className="bg-green-400 h-2.5 rounded-full" 
                style={{ width: `${(totalCourses / 20) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
      </header>

      {/* Stats Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">Your Learning Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center text-blue-600 mb-4">
                <FaBookOpen className="text-xl" />
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-1">{totalCourses}</h3>
                <p className="text-gray-600">Courses Completed</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
              <div className="bg-green-100 p-3 rounded-full w-14 h-14 flex items-center justify-center text-green-600 mb-4">
                <FaChartLine className="text-xl" />
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-1">{averageScore}%</h3>
                <p className="text-gray-600">Average Score</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
              <div className="bg-orange-100 p-3 rounded-full w-14 h-14 flex items-center justify-center text-orange-600 mb-4">
                <FaFire className="text-xl" />
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-1">14</h3>
                <p className="text-gray-600">Day Streak</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
              <div className="bg-purple-100 p-3 rounded-full w-14 h-14 flex items-center justify-center text-purple-600 mb-4">
                <FaMedal className="text-xl" />
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-1">{categoriesCompleted}</h3>
                <p className="text-gray-600">Categories Mastered</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Search Section */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <h2 className="text-2xl font-bold mb-4 md:mb-0">Your Completed Courses</h2>
            
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <FaSearch className="text-gray-400" />
                </div>
                <input
                  type="text"
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full"
                  placeholder="Search courses..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="flex gap-2">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <FaFilter className="text-gray-400" />
                  </div>
                  <select 
                    className="pl-10 pr-8 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none w-full"
                    value={filter} 
                    onChange={(e) => setFilter(e.target.value)}
                  >
                    <option value="all">All Categories</option>
                    <option value="web development">Web Development</option>
                    <option value="design">Design</option>
                    <option value="data science">Data Science</option>
                    <option value="marketing">Marketing</option>
                    <option value="mobile development">Mobile Development</option>
                    <option value="cloud">Cloud</option>
                  </select>
                </div>
                
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <FaSort className="text-gray-400" />
                  </div>
                  <select 
                    className="pl-10 pr-8 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none w-full"
                    value={sortBy} 
                    onChange={(e) => setSortBy(e.target.value)}
                  >
                    <option value="newest">Newest First</option>
                    <option value="oldest">Oldest First</option>
                    <option value="highest">Highest Score</option>
                    <option value="alphabetical">Alphabetical</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses List Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          {filtere.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtere.map(course => (
                <div key={course.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
                  <div className="relative">
                    <img src={course.thumbnail} alt={course.title} className="w-full h-48 object-cover" />
                    <div className="absolute top-4 right-4 bg-blue-600 text-white font-bold py-1 px-3 rounded-full">
                      {course.score}%
                    </div>
                  </div>
                  <div className="p-6">
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded mb-3">
                      {course.category}
                    </span>
                    <h3 className="text-xl font-bold mb-3 line-clamp-2 h-14">{course.title}</h3>
                    <div className="flex flex-col gap-2 mb-4">
                      <div className="flex items-center text-gray-600">
                        <FaCalendarAlt className="mr-2" />
                        <span>{new Date(course.dateCompleted).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <FaChartLine className="mr-2" />
                        <span>{course.duration}</span>
                      </div>
                    </div>
                    <div className="text-sm text-gray-500 mb-4">By {course.instructor}</div>
                    <div className="flex gap-2">
                      <button className="flex items-center justify-center gap-1 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-lg transition duration-300 flex-1">
                        <FaEye /> View
                      </button>
                      <button className="flex items-center justify-center gap-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-300 flex-1">
                        <FaDownload /> Certificate
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-5xl mb-4">📚</div>
              <h3 className="text-2xl font-bold mb-2">No courses found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">Your Achievements & Badges</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map(badge => (
              <div key={badge.id} className={`bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 ${badge.earned ? '' : 'opacity-70'}`}>
                <div className={`p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4 ${
                  badge.earned ? 'bg-yellow-100 text-yellow-600' : 'bg-gray-200 text-gray-400'
                }`}>
                  {badge.icon}
                </div>
                <h4 className="text-lg font-semibold mb-2">{badge.title}</h4>
                <div className={`inline-block px-3 py-1 text-sm font-semibold rounded-full ${
                  badge.earned ? 'bg-green-100 text-green-800' : 'bg-gray-200 text-gray-600'
                }`}>
                  {badge.earned ? 'Earned' : 'Locked'}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">What would you like to learn next?</h2>
          <p className="text-xl mb-8 opacity-90">Continue your learning journey with these recommendations</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-blue-600 hover:bg-blue-50 font-medium py-3 px-6 rounded-full transition duration-300 flex items-center justify-center">
              <FaBookOpen className="mr-2" /> Explore New Courses
            </button>
            <button className="bg-white/20 hover:bg-white/30 text-white font-medium py-3 px-6 rounded-full transition duration-300 flex items-center justify-center">
              <FaShare className="mr-2" /> Share Your Achievements
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Complete;