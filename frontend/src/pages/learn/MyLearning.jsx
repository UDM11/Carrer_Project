import React, { useState } from 'react';
import { 
  FiBook, 
  FiAward, 
  FiClock, 
  FiCalendar, 
  FiBookmark, 
  FiStar, 
  FiPlay,
  FiDownload,
  FiEye,
  FiChevronRight
} from 'react-icons/fi';

const MyLearning = () => {
  const [user] = useState({
    name: "Alex Johnson",
    enrolledCourses: 5,
    certificates: 3,
    learningHours: 47
  });

  const [inProgressCourses] = useState([
    {
      id: 1,
      title: "Advanced React Patterns",
      progress: 65,
      lastAccessed: "2 days ago",
      thumbnail: "https://via.placeholder.com/300x180?text=React+Course"
    },
    {
      id: 2,
      title: "UI/UX Design Fundamentals",
      progress: 30,
      lastAccessed: "1 day ago",
      thumbnail: "https://via.placeholder.com/300x180?text=UI/UX+Course"
    }
  ]);

  const [completedCourses] = useState([
    {
      id: 1,
      title: "JavaScript Mastery",
      completionDate: "Sept 15, 2025",
      thumbnail: "https://via.placeholder.com/300x180?text=JS+Course"
    },
    {
      id: 2,
      title: "Tailwind CSS Fundamentals",
      completionDate: "Aug 28, 2025",
      thumbnail: "https://via.placeholder.com/300x180?text=Tailwind+Course"
    }
  ]);

  const [recommendedCourses] = useState([
    {
      id: 1,
      title: "React Performance Optimization",
      description: "Learn to build high-performance React applications",
      duration: "6 hours",
      thumbnail: "https://via.placeholder.com/300x180?text=Performance+Course"
    },
    {
      id: 2,
      title: "Advanced CSS Animations",
      description: "Create stunning animations with modern CSS",
      duration: "4 hours",
      thumbnail: "https://via.placeholder.com/300x180?text=Animations+Course"
    },
    {
      id: 3,
      title: "Full-Stack Development",
      description: "Build complete applications from frontend to backend",
      duration: "12 hours",
      thumbnail: "https://via.placeholder.com/300x180?text=FullStack+Course"
    }
  ]);

  const [certificates] = useState([
    {
      id: 1,
      title: "JavaScript Mastery",
      date: "Sept 15, 2025",
      thumbnail: "https://via.placeholder.com/250x150?text=Certificate+1"
    },
    {
      id: 2,
      title: "Tailwind CSS Fundamentals",
      date: "Aug 28, 2025",
      thumbnail: "https://via.placeholder.com/250x150?text=Certificate+2"
    },
    {
      id: 3,
      title: "React Basics",
      date: "Jul 10, 2025",
      thumbnail: "https://via.placeholder.com/250x150?text=Certificate+3"
    }
  ]);

  const [upcomingSessions] = useState([
    {
      id: 1,
      date: "Sep 22, 2025",
      time: "10:00 AM",
      topic: "Live Q&A: React Best Practices",
      trainer: "Sarah Miller"
    },
    {
      id: 2,
      date: "Sep 25, 2025",
      time: "2:00 PM",
      topic: "Advanced State Management Workshop",
      trainer: "James Wilson"
    }
  ]);

  const [savedCourses] = useState([
    {
      id: 1,
      title: "Node.js Backend Development",
      thumbnail: "https://via.placeholder.com/300x180?text=Node.js+Course"
    },
    {
      id: 2,
      title: "GraphQL API Design",
      thumbnail: "https://via.placeholder.com/300x180?text=GraphQL+Course"
    }
  ]);

  const [achievements] = useState([
    {
      id: 1,
      title: "First Course Completed",
      icon: "🥇",
      description: "Completed your first course"
    },
    {
      id: 2,
      title: "100 Hours of Learning",
      icon: "⏱️",
      description: "Logged 100+ learning hours"
    },
    {
      id: 3,
      title: "Top 10% Learner",
      icon: "🏆",
      description: "Ranked in top 10% of learners"
    }
  ]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">LearnHub</h1>
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-semibold">
              {user.name.charAt(0)}
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-8 text-white shadow-lg">
            <h2 className="text-3xl font-bold mb-2">Welcome Back, {user.name} 👋</h2>
            <p className="text-blue-100 mb-6">Continue your learning journey and track your progress.</p>
            
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center">
                <div className="bg-white/20 p-3 rounded-lg mr-3">
                  <FiBook className="text-xl" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{user.enrolledCourses}</p>
                  <p className="text-blue-100 text-sm">Courses Enrolled</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-white/20 p-3 rounded-lg mr-3">
                  <FiAward className="text-xl" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{user.certificates}</p>
                  <p className="text-blue-100 text-sm">Certificates Earned</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-white/20 p-3 rounded-lg mr-3">
                  <FiClock className="text-xl" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{user.learningHours}</p>
                  <p className="text-blue-100 text-sm">Learning Hours</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Continue Learning Section */}
        <section className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold text-gray-900">Continue Learning</h3>
            <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
              View all <FiChevronRight className="ml-1" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {inProgressCourses.map(course => (
              <div key={course.id} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
                <div className="relative">
                  <img src={course.thumbnail} alt={course.title} className="w-full h-40 object-cover" />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                    <h4 className="text-white font-semibold">{course.title}</h4>
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-500">Progress: {course.progress}%</span>
                    <span className="text-sm text-gray-500">{course.lastAccessed}</span>
                  </div>
                  
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                    <div 
                      className="bg-blue-600 h-2 rounded-full" 
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                  
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg flex items-center justify-center">
                    <FiPlay className="mr-2" /> Resume
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Completed Courses Section */}
        <section className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold text-gray-900">Completed Courses</h3>
            <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
              View all <FiChevronRight className="ml-1" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {completedCourses.map(course => (
              <div key={course.id} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
                <img src={course.thumbnail} alt={course.title} className="w-full h-40 object-cover" />
                
                <div className="p-4">
                  <h4 className="font-semibold text-lg mb-2">{course.title}</h4>
                  <p className="text-gray-500 text-sm mb-4">Completed on {course.completionDate}</p>
                  
                  <div className="flex space-x-3">
                    <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg flex items-center justify-center">
                      <FiEye className="mr-2" /> Review
                    </button>
                    <button className="flex-1 border border-gray-300 hover:bg-gray-50 text-gray-700 py-2 px-4 rounded-lg flex items-center justify-center">
                      <FiDownload className="mr-2" /> Certificate
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Certificates Section */}
        <section className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold text-gray-900">Your Certificates</h3>
            <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
              View all <FiChevronRight className="ml-1" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {certificates.map(cert => (
              <div key={cert.id} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
                <img src={cert.thumbnail} alt={cert.title} className="w-full h-40 object-cover" />
                
                <div className="p-4">
                  <h4 className="font-semibold text-lg mb-1">{cert.title}</h4>
                  <p className="text-gray-500 text-sm mb-4">Earned on {cert.date}</p>
                  
                  <div className="flex space-x-2">
                    <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm">
                      Download
                    </button>
                    <button className="flex-1 border border-gray-300 hover:bg-gray-50 text-gray-700 py-2 px-4 rounded-lg text-sm">
                      Share
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Recommended Courses Section */}
        <section className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold text-gray-900">Recommended for You</h3>
            <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
              View all <FiChevronRight className="ml-1" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recommendedCourses.map(course => (
              <div key={course.id} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200 hover:shadow-md transition-shadow">
                <img src={course.thumbnail} alt={course.title} className="w-full h-40 object-cover" />
                
                <div className="p-4">
                  <h4 className="font-semibold text-lg mb-2">{course.title}</h4>
                  <p className="text-gray-600 text-sm mb-3">{course.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 text-sm flex items-center">
                      <FiClock className="mr-1" /> {course.duration}
                    </span>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm">
                      Start Learning
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Learning Calendar Section */}
        <section className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold text-gray-900">Upcoming Sessions</h3>
            <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
              View calendar <FiChevronRight className="ml-1" />
            </button>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <FiCalendar className="text-blue-600 text-xl" />
                </div>
                <h4 className="font-semibold text-lg">Your Learning Schedule</h4>
              </div>
              
              <div className="space-y-4">
                {upcomingSessions.map(session => (
                  <div key={session.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div>
                      <p className="font-medium">{session.topic}</p>
                      <p className="text-gray-500 text-sm">With {session.trainer}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">{session.date}</p>
                      <p className="text-gray-500 text-sm">{session.time}</p>
                    </div>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm">
                      Join Session
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Saved Courses Section */}
        <section className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold text-gray-900">Saved Courses</h3>
            <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
              View all <FiChevronRight className="ml-1" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {savedCourses.map(course => (
              <div key={course.id} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
                <div className="flex">
                  <img src={course.thumbnail} alt={course.title} className="w-32 h-24 object-cover" />
                  
                  <div className="p-4 flex-1">
                    <h4 className="font-semibold mb-2">{course.title}</h4>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm">
                      Start Now
                    </button>
                  </div>
                  
                  <button className="p-3 text-gray-400 hover:text-gray-600">
                    <FiBookmark className="text-xl" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Achievements Section */}
        <section className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold text-gray-900">Your Achievements</h3>
            <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
              View all <FiChevronRight className="ml-1" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map(achievement => (
              <div key={achievement.id} className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 text-center">
                <div className="text-4xl mb-4">{achievement.icon}</div>
                <h4 className="font-semibold text-lg mb-2">{achievement.title}</h4>
                <p className="text-gray-600">{achievement.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="mb-12 text-center">
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-8 text-white shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Keep Learning & Growing 🚀</h3>
            <p className="text-blue-100 mb-6">Continue your journey with our curated learning paths</p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-blue-600 hover:bg-gray-100 py-3 px-6 rounded-lg font-medium">
                Explore More Courses
              </button>
              <button className="bg-blue-800 hover:bg-blue-900 text-white py-3 px-6 rounded-lg font-medium border border-blue-700">
                Continue Career Path
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default MyLearning;