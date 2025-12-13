import React, { useState } from 'react';
import {
  CodeIcon,
  TerminalIcon,
  DesktopComputerIcon,
  DeviceMobileIcon,
  ChipIcon,
  DatabaseIcon,
  ClockIcon,
  AcademicCapIcon,
  UserGroupIcon,
  ChartBarIcon,
  BookOpenIcon,
  ChatIcon,
  CalendarIcon,
  ChevronDownIcon,
  CheckCircleIcon,
  SearchIcon,
 
  StarIcon,
  PlayIcon,
  ArrowSmRightIcon
} from '@heroicons/react/outline';

const Development = () => {
  // State for interactive components
  const [activePath, setActivePath] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [openAccordion, setOpenAccordion] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [feedbackScore, setFeedbackScore] = useState(0);

  // Sample data
  const developmentPaths = [
    { 
      id: 1, 
      title: 'Frontend Development', 
      icon: <DesktopComputerIcon className="w-8 h-8" />, 
      category: 'frontend',
      skills: ['HTML/CSS', 'JavaScript', 'React', 'Vue', 'Responsive Design'],
      difficulty: 'Beginner to Advanced',
      duration: '3-6 months',
      projects: 12
    },
    { 
      id: 2, 
      title: 'Backend Development', 
      icon: <DatabaseIcon className="w-8 h-8" />, 
      category: 'backend',
      skills: ['Node.js', 'Express', 'Python', 'Django', 'API Design'],
      difficulty: 'Intermediate to Advanced',
      duration: '4-8 months',
      projects: 10
    },
    { 
      id: 3, 
      title: 'Full Stack', 
      icon: <TerminalIcon className="w-8 h-8" />, 
      category: 'fullstack',
      skills: ['MERN Stack', 'Authentication', 'Deployment', 'Database Management'],
      difficulty: 'Intermediate to Advanced',
      duration: '5-9 months',
      projects: 8
    },
    { 
      id: 4, 
      title: 'Mobile Development', 
      icon: <DeviceMobileIcon className="w-8 h-8" />, 
      category: 'mobile',
      skills: ['React Native', 'Flutter', 'iOS/Android', 'Mobile UI/UX'],
      difficulty: 'Intermediate to Advanced',
      duration: '4-7 months',
      projects: 9
    },
    { 
      id: 5, 
      title: 'AI/ML Projects', 
      icon: <ChipIcon className="w-8 h-8" />, 
      category: 'ai',
      skills: ['Python', 'TensorFlow', 'Data Analysis', 'Neural Networks'],
      difficulty: 'Advanced',
      duration: '6-10 months',
      projects: 7
    },
  ];

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Website',
      path: 'Frontend Development',
      difficulty: 'Intermediate',
      duration: '4 weeks',
      description: 'Build a fully responsive e-commerce site with product listings, cart, and checkout functionality.',
      skills: ['React', 'Redux', 'CSS', 'API Integration'],
      rating: 4.8,
      completions: 1245
    },
    {
      id: 2,
      title: 'Social Media Dashboard',
      path: 'Full Stack',
      difficulty: 'Advanced',
      duration: '6 weeks',
      description: 'Create a social media analytics dashboard with user authentication and real-time data visualization.',
      skills: ['MERN Stack', 'JWT Auth', 'Chart.js', 'WebSockets'],
      rating: 4.9,
      completions: 876
    },
    {
      id: 3,
      title: 'AI Chatbot',
      path: 'AI/ML Projects',
      difficulty: 'Advanced',
      duration: '5 weeks',
      description: 'Develop an intelligent chatbot using natural language processing and machine learning algorithms.',
      skills: ['Python', 'TensorFlow', 'NLP', 'API Development'],
      rating: 4.7,
      completions: 653
    },
    {
      id: 4,
      title: 'Fitness Mobile App',
      path: 'Mobile Development',
      difficulty: 'Intermediate',
      duration: '5 weeks',
      description: 'Build a cross-platform fitness tracking app with workout plans and progress visualization.',
      skills: ['React Native', 'Firebase', 'UI Design', 'Data Visualization'],
      rating: 4.6,
      completions: 987
    },
    {
      id: 5,
      title: 'RESTful API Service',
      path: 'Backend Development',
      difficulty: 'Intermediate',
      duration: '3 weeks',
      description: 'Design and implement a secure RESTful API with authentication, authorization, and database integration.',
      skills: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Testing'],
      rating: 4.8,
      completions: 1123
    },
    {
      id: 6,
      title: 'Data Visualization Dashboard',
      path: 'Frontend Development',
      difficulty: 'Intermediate',
      duration: '4 weeks',
      description: 'Create an interactive dashboard for visualizing complex datasets with filtering and export capabilities.',
      skills: ['React', 'D3.js', 'CSS', 'Data Processing'],
      rating: 4.5,
      completions: 765
    },
  ];

  const mentors = [
    {
      id: 1,
      name: 'Alex Johnson',
      expertise: 'Frontend & React',
      role: 'Senior Frontend Developer',
      rating: 4.9,
      reviews: 142,
      avatar: '/avatars/alex.jpg',
      availability: 'Next: Tomorrow',
      skills: ['React', 'JavaScript', 'CSS', 'UI/UX']
    },
    {
      id: 2,
      name: 'Maria Rodriguez',
      expertise: 'Full Stack Development',
      role: 'Lead Developer',
      rating: 4.8,
      reviews: 98,
      avatar: '/avatars/maria.jpg',
      availability: 'Next: Today',
      skills: ['Node.js', 'React', 'Python', 'AWS']
    },
    {
      id: 3,
      name: 'David Kim',
      expertise: 'AI/ML Engineering',
      role: 'Data Scientist',
      rating: 4.9,
      reviews: 117,
      avatar: '/avatars/david.jpg',
      availability: 'Next: Monday',
      skills: ['Python', 'TensorFlow', 'Data Analysis', 'MLOps']
    },
  ];

  const faqs = [
    {
      id: 1,
      question: 'How do I choose the right development path?',
      answer: 'Consider your interests, career goals, and the time you can commit. Frontend is great if you enjoy visual design and user experience. Backend is ideal if you prefer working with data and logic. Full Stack combines both. Our path explorer quiz can help you decide based on your preferences.'
    },
    {
      id: 2,
      question: 'Do I need prior coding experience?',
      answer: 'It depends on the path. Frontend development has beginner-friendly projects, while AI/ML typically requires some programming background. Each path indicates the recommended prerequisites, and we offer introductory courses for complete beginners.'
    },
    {
      id: 3,
      question: 'How are projects assessed?',
      answer: 'Projects are evaluated based on code quality, functionality, user experience, and best practices. You\'ll receive automated feedback through our testing suite as well as optional mentor reviews. Completing projects earns you badges and certificates.'
    },
  ];

  const steps = [
    { id: 1, title: 'Choose Development Path', description: 'Select from frontend, backend, full stack, mobile, or AI/ML' },
    { id: 2, title: 'Pick a Project', description: 'Browse real-world projects matching your skill level' },
    { id: 3, title: 'Build & Code', description: 'Use our workspace with guidance and resources' },
    { id: 4, title: 'Get Feedback & Certification', description: 'Receive assessments and add to your portfolio' },
  ];

  const resources = [
    {
      id: 1,
      title: 'JavaScript Fundamentals Course',
      type: 'Course',
      duration: '12 hours',
      level: 'Beginner',
      description: 'Master the basics of JavaScript programming language'
    },
    {
      id: 2,
      title: 'React Best Practices Guide',
      type: 'Guide',
      duration: '1 hour',
      level: 'Intermediate',
      description: 'Learn industry standards for React development'
    },
    {
      id: 3,
      title: 'API Design Principles',
      type: 'Tutorial',
      duration: '3 hours',
      level: 'Intermediate',
      description: 'Design robust and scalable RESTful APIs'
    },
    {
      id: 4,
      title: 'Deployment Strategies',
      type: 'Course',
      duration: '8 hours',
      level: 'Advanced',
      description: 'Learn to deploy applications to various platforms'
    },
  ];

  // Render the development practice 
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Build Real Projects. Master Development Skills.</h1>
            <p className="text-xl mb-10">
              Learn by doing: web, mobile, AI, and full-stack development projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition flex items-center justify-center">
                <CodeIcon className="w-5 h-5 mr-2" />
                Start a Project
              </button>
              <button className="bg-transparent border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition">
                Explore Development Paths
              </button>
              <button className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition">
                Join a Mentorship Session
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/20 p-4 rounded-xl backdrop-blur-sm">
                <div className="w-16 h-16 bg-white/30 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <DesktopComputerIcon className="w-8 h-8 text-white" />
                </div>
                <p className="text-center text-sm">Web Development</p>
              </div>
              <div className="bg-white/20 p-4 rounded-xl backdrop-blur-sm">
                <div className="w-16 h-16 bg-white/30 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <DeviceMobileIcon className="w-8 h-8 text-white" />
                </div>
                <p className="text-center text-sm">Mobile Apps</p>
              </div>
              <div className="bg-white/20 p-4 rounded-xl backdrop-blur-sm">
                <div className="w-16 h-16 bg-white/30 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <ChipIcon className="w-8 h-8 text-white" />
                </div>
                <p className="text-center text-sm">AI/ML Projects</p>
              </div>
              <div className="bg-white/20 p-4 rounded-xl backdrop-blur-sm">
                <div className="w-16 h-16 bg-white/30 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <TerminalIcon className="w-8 h-8 text-white" />
                </div>
                <p className="text-center text-sm">Full-Stack Development</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Path Explorer */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">Development Path Explorer</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Choose your specialization and follow a structured learning path
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {['all', 'frontend', 'backend', 'fullstack', 'mobile', 'ai'].map((path) => (
              <button
                key={path}
                onClick={() => setActivePath(path)}
                className={`px-4 py-2 rounded-full ${activePath === path ? 'bg-blue-100 text-blue-600 font-medium' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
              >
                {path === 'all' ? 'All Paths' : developmentPaths.find(p => p.category === path)?.title || path}
              </button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {developmentPaths.map((path) => (
              <div key={path.id} className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
                  {path.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{path.title}</h3>
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                  <span className={`px-2 py-1 rounded ${
                    path.difficulty === 'Beginner to Advanced' ? 'bg-green-100 text-green-700' :
                    path.difficulty === 'Intermediate to Advanced' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {path.difficulty}
                  </span>
                  <span className="flex items-center">
                    <ClockIcon className="w-4 h-4 mr-1" />
                    {path.duration}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{path.projects} projects</p>
                <div className="mb-6">
                  <h4 className="text-sm font-medium mb-2">Skills you'll learn:</h4>
                  <div className="flex flex-wrap gap-2">
                    {path.skills.slice(0, 3).map((skill, index) => (
                      <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                        {skill}
                      </span>
                    ))}
                    {path.skills.length > 3 && (
                      <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                        +{path.skills.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                  Explore Path
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Library */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">Project Library</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Build real-world applications to strengthen your development skills
          </p>
          
          <div className="max-w-2xl mx-auto mb-10">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search projects..." 
                className="w-full p-4 pl-12 pr-6 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <SearchIcon className="w-6 h-6 text-gray-400 absolute left-4 top-4" />
            </div>
          </div>
          
          <div className="flex gap-4 mb-6 justify-center flex-wrap">
            <select className="border border-gray-300 rounded-lg px-4 py-2">
              <option>Difficulty: All</option>
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>
            <select className="border border-gray-300 rounded-lg px-4 py-2">
              <option>Duration: Any</option>
              <option>1-2 weeks</option>
              <option>3-4 weeks</option>
              <option>5+ weeks</option>
            </select>
            <select className="border border-gray-300 rounded-lg px-4 py-2">
              <option>Sort by: Popularity</option>
              <option>Newest</option>
              <option>Rating</option>
            </select>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {projects.map((project) => (
              <div key={project.id} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-xs font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded">
                      {project.path}
                    </span>
                    <h3 className="text-xl font-semibold mt-2">{project.title}</h3>
                  </div>
                  <div className="flex items-center">
                    <StarIcon className="w-4 h-4 text-yellow-400 mr-1" />
                    <span className="text-sm">{project.rating}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                  <span className={`px-2 py-1 rounded text-xs ${
                    project.difficulty === 'Beginner' ? 'bg-green-100 text-green-700' :
                    project.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {project.difficulty}
                  </span>
                  <span className="flex items-center">
                    <ClockIcon className="w-4 h-4 mr-1" />
                    {project.duration}
                  </span>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-sm font-medium mb-2">Skills applied:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill, index) => (
                      <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{project.completions} completions</span>
                  <button 
                    onClick={() => setSelectedProject(project)}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition text-sm"
                  >
                    Start Project
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <button className="text-blue-600 font-medium hover:text-blue-800 transition flex items-center justify-center mx-auto">
              View All Projects <ArrowSmRightIcon className="w-5 h-5 ml-1" />
            </button>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">How Development Practice Works</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Our proven process to help you build practical skills and create portfolio projects
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step) => (
              <div key={step.id} className="text-center">
                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.id}
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mentors Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">Get Guidance from Expert Developers</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Learn from professionals who work in the industry every day
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mentors.map((mentor) => (
              <div key={mentor.id} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-gray-200 rounded-full mr-4 flex items-center justify-center">
                    <UserGroupIcon className="w-8 h-8 text-gray-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{mentor.name}</h3>
                    <p className="text-sm text-gray-500">{mentor.role}</p>
                  </div>
                </div>
                <div className="mb-4">
                  <span className="inline-block bg-blue-100 text-blue-700 text-xs font-medium px-2 py-1 rounded">
                    {mentor.expertise}
                  </span>
                </div>
                <div className="flex items-center mb-4">
                  <div className="flex items-center">
                    <StarIcon className="w-4 h-4 text-yellow-400 mr-1" />
                    <span>{mentor.rating}</span>
                    <span className="text-gray-500 ml-1">({mentor.reviews} reviews)</span>
                  </div>
                </div>
                <div className="text-sm text-gray-500 mb-4">{mentor.availability}</div>
                <div className="mb-6">
                  <h4 className="text-sm font-medium mb-2">Specializes in:</h4>
                  <div className="flex flex-wrap gap-2">
                    {mentor.skills.map((skill, index) => (
                      <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                  Book Session
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">Learning Resources</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Recommended courses and tutorials to support your project work
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resources.map((resource) => (
              <div key={resource.id} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-xs font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded">
                      {resource.type}
                    </span>
                    <h3 className="text-lg font-semibold mt-2">{resource.title}</h3>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded ${
                    resource.level === 'Beginner' ? 'bg-green-100 text-green-700' :
                    resource.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {resource.level}
                  </span>
                </div>
                
                <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500 flex items-center">
                    <ClockIcon className="w-4 h-4 mr-1" />
                    {resource.duration}
                  </span>
                  <button className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                    Start Learning →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Start Building Your Portfolio Today</h2>
          <p className="text-xl max-w-2xl mx-auto mb-10">
            Develop practical skills through real projects and advance your development career
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
              Explore Projects
            </button>
            <button className="bg-transparent border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition">
              Join Mentorship
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Development;