import React, { useState } from 'react';
import { 
  AcademicCapIcon, 
  BookOpenIcon, 
  UserGroupIcon, 
  BriefcaseIcon, 
  ChartBarIcon, 
  CheckCircleIcon,
  ChevronDownIcon,
  ClockIcon,
  CodeIcon,
  CurrencyDollarIcon,
  DesktopComputerIcon,
  DocumentTextIcon,
  EmojiHappyIcon,
  EyeIcon,
  FireIcon,
  LightBulbIcon,
  MailIcon,
  PaperAirplaneIcon,
  PlayIcon,
  QuestionMarkCircleIcon,
  SearchIcon,
  SparklesIcon,
  StarIcon,
  TagIcon,
  UserCircleIcon,
  UsersIcon,
  CloudIcon,
  ShieldCheckIcon,
  TerminalIcon,
  DatabaseIcon
} from '@heroicons/react/outline';

const ItSoftware = () => {
  // State for interactive components
  const [selectedRole, setSelectedRole] = useState('');
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [activeCourseFilter, setActiveCourseFilter] = useState('all');
  const [activeProjectFilter, setActiveProjectFilter] = useState('all');
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Sample data
  const careerRoles = [
    { id: 'software-developer', title: 'Software Developer', icon: <CodeIcon className="w-6 h-6" /> },
    { id: 'web-developer', title: 'Web Developer', icon: <DesktopComputerIcon className="w-6 h-6" /> },
    { id: 'data-scientist', title: 'Data Scientist', icon: <ChartBarIcon className="w-6 h-6" /> },
    { id: 'devops-engineer', title: 'DevOps Engineer', icon: <CloudIcon className="w-6 h-6" /> },
    { id: 'cybersecurity', title: 'Cybersecurity Specialist', icon: <ShieldCheckIcon className="w-6 h-6" /> },
    { id: 'ai-engineer', title: 'AI Engineer', icon: <LightBulbIcon className="w-6 h-6" /> }
  ];

  const courses = [
    { 
      title: 'Full-Stack Web Development', 
      category: 'Web Development',
      level: 'Beginner', 
      duration: '12 weeks', 
      format: 'Project-based', 
      rating: 4.8,
      technologies: ['HTML/CSS', 'JavaScript', 'React', 'Node.js']
    },
    { 
      title: 'Python for Data Science', 
      category: 'Data Science',
      level: 'Intermediate', 
      duration: '8 weeks', 
      format: 'Video & Projects', 
      rating: 4.7,
      technologies: ['Python', 'Pandas', 'NumPy', 'Matplotlib']
    },
    { 
      title: 'AWS Cloud Practitioner', 
      category: 'Cloud Computing',
      level: 'Beginner', 
      duration: '6 weeks', 
      format: 'Video & Labs', 
      rating: 4.9,
      technologies: ['AWS', 'Cloud Fundamentals', 'EC2', 'S3']
    },
    { 
      title: 'React Native Mobile Development', 
      category: 'Mobile Development',
      level: 'Intermediate', 
      duration: '10 weeks', 
      format: 'Project-based', 
      rating: 4.6,
      technologies: ['React Native', 'JavaScript', 'iOS', 'Android']
    },
    { 
      title: 'Cybersecurity Fundamentals', 
      category: 'Cybersecurity',
      level: 'Beginner', 
      duration: '8 weeks', 
      format: 'Video & Labs', 
      rating: 4.8,
      technologies: ['Network Security', 'Encryption', 'Ethical Hacking']
    },
    { 
      title: 'Machine Learning with Python', 
      category: 'AI/ML',
      level: 'Advanced', 
      duration: '14 weeks', 
      format: 'Project-based', 
      rating: 4.7,
      technologies: ['Python', 'TensorFlow', 'Scikit-learn', 'Neural Networks']
    }
  ];

  const technologies = [
    { name: 'Python', description: 'Versatile programming language for web, data, and AI' },
    { name: 'JavaScript', description: 'The language of the web for frontend and backend' },
    { name: 'React', description: 'Popular library for building user interfaces' },
    { name: 'Node.js', description: 'JavaScript runtime for server-side development' },
    { name: 'AWS', description: 'Leading cloud computing platform' },
    { name: 'Docker', description: 'Containerization platform for DevOps' },
    { name: 'TensorFlow', description: 'Open-source library for machine learning' },
    { name: 'Kubernetes', description: 'Container orchestration system' }
  ];

  const projects = [
    { 
      title: 'E-commerce Website', 
      technologies: ['React', 'Node.js', 'MongoDB'], 
      duration: '4 weeks', 
      difficulty: 'Intermediate',
      category: 'web-development'
    },
    { 
      title: 'Data Visualization Dashboard', 
      technologies: ['Python', 'Pandas', 'D3.js'], 
      duration: '3 weeks', 
      difficulty: 'Intermediate',
      category: 'data-science'
    },
    { 
      title: 'RESTful API Service', 
      technologies: ['Express.js', 'MongoDB', 'JWT'], 
      duration: '2 weeks', 
      difficulty: 'Beginner',
      category: 'backend'
    },
    { 
      title: 'Mobile Todo App', 
      technologies: ['React Native', 'Firebase'], 
      duration: '3 weeks', 
      difficulty: 'Intermediate',
      category: 'mobile'
    },
    { 
      title: 'CI/CD Pipeline', 
      technologies: ['Jenkins', 'Docker', 'AWS'], 
      duration: '4 weeks', 
      difficulty: 'Advanced',
      category: 'devops'
    },
    { 
      title: 'Password Strength Checker', 
      technologies: ['Python', 'Cryptography'], 
      duration: '2 weeks', 
      difficulty: 'Beginner',
      category: 'cybersecurity'
    }
  ];

  const mentors = [
    { name: 'Alex Johnson', expertise: 'Full-Stack Development', rating: 4.9, courses: 15, students: 3200 },
    { name: 'Maria Rodriguez', expertise: 'Data Science & AI', rating: 4.8, courses: 12, students: 2800 },
    { name: 'David Kim', expertise: 'Cloud Architecture', rating: 4.9, courses: 10, students: 2500 },
    { name: 'Sarah Williams', expertise: 'Cybersecurity', rating: 4.7, courses: 8, students: 1800 }
  ];

  const certifications = [
    { name: 'AWS Certified Solutions Architect', provider: 'Amazon', difficulty: 'Advanced', duration: '8 weeks' },
    { name: 'Google Cloud Professional', provider: 'Google', difficulty: 'Advanced', duration: '10 weeks' },
    { name: 'CompTIA Security+', provider: 'CompTIA', difficulty: 'Intermediate', duration: '6 weeks' },
    { name: 'React Developer Certification', provider: 'Meta', difficulty: 'Intermediate', duration: '6 weeks' },
    { name: 'Python Institute PCAP', provider: 'Python Institute', difficulty: 'Beginner', duration: '4 weeks' },
    { name: 'Cisco CCNA', provider: 'Cisco', difficulty: 'Intermediate', duration: '8 weeks' }
  ];

  const successStories = [
    { name: 'James Wilson', role: 'Frontend Developer', company: 'TechCorp', text: 'The web development course gave me the practical skills I needed to transition from marketing to tech in just 6 months.' },
    { name: 'Sophia Chen', role: 'Data Analyst', company: 'DataInsights', text: 'The Python data science program helped me build a portfolio that impressed employers and landed me my dream job.' },
    { name: 'Michael Thompson', role: 'DevOps Engineer', company: 'CloudSolutions', text: 'The cloud computing certification prepared me for real-world scenarios and helped me get a 40% salary increase.' }
  ];

  const trendingSkills = [
    { name: 'Cloud Computing', demand: 'High', description: 'Designing and managing cloud infrastructure' },
    { name: 'Cybersecurity', demand: 'Very High', description: 'Protecting systems and networks from digital attacks' },
    { name: 'AI & Machine Learning', demand: 'High', description: 'Building intelligent systems and algorithms' },
    { name: 'DevOps', demand: 'High', description: 'Combining software development and IT operations' },
    { name: 'Blockchain', demand: 'Growing', description: 'Developing decentralized applications and systems' },
    { name: 'IoT Development', demand: 'Growing', description: 'Creating connected devices and systems' }
  ];

  const jobOpportunities = [
    { title: 'Junior Frontend Developer', company: 'WebSolutions Inc.', location: 'Remote', type: 'Full-time' },
    { title: 'Data Science Intern', company: 'DataWorks', location: 'New York, NY', type: 'Internship' },
    { title: 'Cloud Engineer', company: 'CloudTech', location: 'San Francisco, CA', type: 'Full-time' },
    { title: 'Cybersecurity Analyst', company: 'SecureNet', location: 'Remote', type: 'Contract' },
    { title: 'Backend Developer', company: 'API Masters', location: 'Austin, TX', type: 'Full-time' },
    { title: 'DevOps Intern', company: 'InfraScale', location: 'Boston, MA', type: 'Internship' }
  ];

  const resources = [
    { title: 'JavaScript Cheat Sheet 2023', category: 'Web Development', type: 'Cheat Sheet' },
    { title: 'Python for Beginners Guide', category: 'Programming', type: 'eBook' },
    { title: 'Cloud Computing Terminology', category: 'Cloud', type: 'Glossary' },
    { title: 'Git Commands Reference', category: 'DevOps', type: 'Cheat Sheet' },
    { title: 'Cybersecurity Best Practices', category: 'Security', type: 'Guide' },
    { title: 'API Design Principles', category: 'Backend', type: 'eBook' }
  ];

  const faqs = [
    { question: 'Do I need a college degree to work in IT?', answer: 'While some positions require degrees, many tech roles prioritize skills and experience. Our programs focus on building practical skills that employers value.' },
    { question: 'How long does it take to become job-ready?', answer: 'Most students become job-ready in 6-12 months, depending on the chosen specialization and time commitment.' },
    { question: 'Which programming language should I learn first?', answer: 'Python and JavaScript are excellent first languages with wide applications across web development, data science, and automation.' },
    { question: 'Are IT certifications worth it?', answer: 'Yes, certifications validate your skills and can significantly improve job prospects and earning potential, especially in specialized areas like cloud and security.' },
    { question: 'What is the best IT field for beginners?', answer: 'Web development and IT support are great starting points with relatively low barriers to entry and strong job markets.' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-20 px-4">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Build Your IT & Software Career</h1>
            <p className="text-xl mb-8">Learn in-demand technologies, develop projects, and get certified for the tech industry.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition flex items-center justify-center">
                Explore IT Careers <ArrowRightIcon className="ml-2 h-5 w-5" />
              </button>
              <button className="bg-transparent border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition">
                Join as Mentor
              </button>
              <button className="bg-blue-800 px-6 py-3 rounded-lg font-semibold hover:bg-blue-900 transition flex items-center">
                Start Learning <AcademicCapIcon className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="bg-white/20 rounded-xl p-2 backdrop-blur-sm transform rotate-3">
                <div className="bg-gray-800 h-64 w-full rounded-lg flex items-center justify-center">
                  <div className="text-center p-4">
                    <CodeIcon className="h-12 w-12 mx-auto text-blue-400 mb-2" />
                    <span className="text-white">Coding & Development Visual</span>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white/20 rounded-lg p-2 backdrop-blur-sm transform -rotate-6">
                <div className="bg-gray-800 h-24 w-24 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <CloudIcon className="h-6 w-6 mx-auto text-green-400" />
                    <span className="text-xs text-white">Cloud</span>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -left-4 bg-white/20 rounded-lg p-2 backdrop-blur-sm transform rotate-12">
                <div className="bg-gray-800 h-16 w-16 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <ShieldCheckIcon className="h-5 w-5 mx-auto text-yellow-400" />
                    <span className="text-xs text-white">Security</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career & Role Explorer */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-4">IT Career Path Explorer</h2>
          <p className="text-gray-600 text-center mb-12">Discover your ideal tech career path and how to get there</p>
          
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">Select a Role</label>
                <div className="relative">
                  <select 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    value={selectedRole}
                    onChange={(e) => setSelectedRole(e.target.value)}
                  >
                    <option value="">Choose a career path</option>
                    {careerRoles.map(role => (
                      <option key={role.id} value={role.id}>{role.title}</option>
                    ))}
                  </select>
                  <ChevronDownIcon className="absolute right-3 top-3.5 h-5 w-5 text-gray-400" />
                </div>
              </div>
              
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">Filter by Technology</label>
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option>All Technologies</option>
                  <option>Python</option>
                  <option>JavaScript</option>
                  <option>Java</option>
                  <option>Cloud</option>
                  <option>Security</option>
                </select>
              </div>
              
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">Experience Level</label>
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option>All Levels</option>
                  <option>Entry Level</option>
                  <option>Mid Level</option>
                  <option>Senior Level</option>
                </select>
              </div>
            </div>
            
            {selectedRole && (
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Career Path: {careerRoles.find(r => r.id === selectedRole)?.title}</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  {['Entry', 'Intermediate', 'Advanced', 'Expert'].map((level, index) => (
                    <div key={level} className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-500">
                      <h4 className="font-medium mb-2">{level} Level</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Salary: ${(60000 + index * 25000).toLocaleString()}</li>
                        <li>• Skills: {index + 4} key technologies</li>
                        <li>• Timeline: {index * 8 + 6} months</li>
                        {index > 0 && <li>• Certifications: {index}</li>}
                      </ul>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <h4 className="font-medium mb-2">Recommended Learning Path:</h4>
                  <div className="flex overflow-x-auto pb-4 scrollbar-hide">
                    {['Fundamentals', 'Core Skills', 'Specialization', 'Projects', 'Certification'].map((step, i) => (
                      <div key={i} className="flex flex-col items-center px-4 py-2 mr-4 rounded-lg bg-white min-w-max">
                        <div className="bg-blue-500 text-white h-8 w-8 rounded-full flex items-center justify-center mb-2">
                          {i + 1}
                        </div>
                        <span className="text-sm font-medium">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Courses & Skills Library */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-4">Courses & Skills Library</h2>
          <p className="text-gray-600 text-center mb-8">Master in-demand technologies with our comprehensive courses</p>
          
          <div className="flex overflow-x-auto pb-4 scrollbar-hide mb-8 justify-center">
            {['all', 'web-development', 'data-science', 'cloud-computing', 'cybersecurity', 'ai-ml'].map((category) => (
              <button
                key={category}
                onClick={() => setActiveCourseFilter(category)}
                className={`px-6 py-2 mr-4 rounded-full whitespace-nowrap capitalize ${activeCourseFilter === category ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              >
                {category === 'all' ? 'All Courses' : category.replace('-', ' ')}
              </button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="h-40 bg-gradient-to-r from-blue-500 to-blue-700 flex items-center justify-center relative">
                  <CodeIcon className="h-12 w-12 text-white opacity-80" />
                  <div className="absolute top-4 right-4 bg-white text-blue-700 px-2 py-1 rounded-full text-sm font-medium">
                    {course.level}
                  </div>
                  <div className="absolute top-4 left-4 bg-blue-800 text-white px-2 py-1 rounded-full text-xs font-medium">
                    {course.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      <StarIcon className="h-5 w-5" />
                      <StarIcon className="h-5 w-5" />
                      <StarIcon className="h-5 w-5" />
                      <StarIcon className="h-5 w-5" />
                      <StarIcon className="h-5 w-5" />
                    </div>
                    <span className="ml-2 text-gray-600">{course.rating}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <ClockIcon className="h-4 w-4 mr-1" />
                    <span className="mr-4">{course.duration}</span>
                    <DesktopComputerIcon className="h-4 w-4 mr-1" />
                    <span>{course.format}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {course.technologies.slice(0, 3).map((tech, i) => (
                      <span key={i} className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                    {course.technologies.length > 3 && (
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        +{course.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                  <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition">
                    Start Course
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="text-blue-700 font-semibold flex items-center justify-center mx-auto">
              View All Courses <ChevronDownIcon className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Technologies & Skills Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-4">Technologies & Skills</h2>
          <p className="text-gray-600 text-center mb-12">Master the tools and technologies used by industry professionals</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition">
                <div className="flex items-start mb-4">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <CodeIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{tech.name}</h3>
                    <p className="text-gray-600 text-sm mt-1">{tech.description}</p>
                  </div>
                </div>
                <button className="text-blue-700 text-sm font-medium flex items-center">
                  Explore courses <ArrowRightIcon className="ml-1 h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects & Practical Labs */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-4">Projects & Practical Labs</h2>
          <p className="text-gray-600 text-center mb-12">Apply your skills to real-world projects and build your portfolio</p>
          
          <div className="flex overflow-x-auto pb-4 scrollbar-hide mb-8">
            {['all', 'web-development', 'data-science', 'mobile', 'backend', 'devops', 'cybersecurity'].map((category) => (
              <button
                key={category}
                onClick={() => setActiveProjectFilter(category)}
                className={`px-6 py-2 mr-4 rounded-full whitespace-nowrap capitalize ${activeProjectFilter === category ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              >
                {category === 'all' ? 'All Projects' : category.replace('-', ' ')}
              </button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="h-40 bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center">
                  <BriefcaseIcon className="h-12 w-12 text-white opacity-90" />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                    <span className="flex items-center">
                      <ClockIcon className="h-4 w-4 mr-1" />
                      {project.duration}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      project.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                      project.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {project.difficulty}
                    </span>
                  </div>
                  <button className="w-full bg-white border border-blue-600 text-blue-700 py-2 rounded-lg font-medium hover:bg-blue-50 transition">
                    Start Project
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mentors & Expert Guidance */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-4">Learn from Industry Experts</h2>
          <p className="text-gray-600 text-center mb-12">Get guidance from experienced IT professionals</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mentors.map((mentor, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm text-center hover:shadow-md transition">
                <div className="h-20 w-20 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <UserCircleIcon className="h-12 w-12 text-blue-600" />
                </div>
                <h3 className="font-semibold text-lg">{mentor.name}</h3>
                <p className="text-gray-600 text-sm mb-3">{mentor.expertise}</p>
                <div className="flex items-center justify-center mb-4">
                  <div className="flex text-yellow-400">
                    <StarIcon className="h-4 w-4" />
                    <StarIcon className="h-4 w-4" />
                    <StarIcon className="h-4 w-4" />
                    <StarIcon className="h-4 w-4" />
                    <StarIcon className="h-4 w-4" />
                  </div>
                  <span className="ml-2 text-sm text-gray-600">{mentor.rating}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-500 mb-4">
                  <span>{mentor.courses} courses</span>
                  <span>{mentor.students.toLocaleString()}+ students</span>
                </div>
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium text-sm hover:bg-blue-700 transition">
                  Book Session
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certification Preparation */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-4">Certification Preparation</h2>
          <p className="text-gray-600 text-center mb-12">Get ready for industry-recognized certifications</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="h-40 bg-gradient-to-r from-blue-500 to-blue-700 flex items-center justify-center relative">
                  <DocumentTextIcon className="h-12 w-12 text-white opacity-80" />
                  <div className="absolute top-4 right-4 bg-white text-blue-700 px-2 py-1 rounded-full text-sm font-medium">
                    {cert.difficulty}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{cert.name}</h3>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-medium mr-2">
                      {cert.provider}
                    </span>
                    <ClockIcon className="h-4 w-4 mr-1" />
                    <span>{cert.duration}</span>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-medium mb-2">What's included:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li className="flex items-center">
                        <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2" />
                        Practice exams
                      </li>
                      <li className="flex items-center">
                        <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2" />
                        Study guides
                      </li>
                      <li className="flex items-center">
                        <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2" />
                        Hands-on labs
                      </li>
                    </ul>
                  </div>
                  <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition">
                    Start Preparation
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-4">Success Stories</h2>
          <p className="text-gray-600 text-center mb-12">Hear from our students who launched tech careers</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 bg-blue-200 rounded-full flex items-center justify-center text-blue-800 font-bold mr-3">
                    {story.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h3 className="font-semibold">{story.name}</h3>
                    <p className="text-sm text-gray-600">{story.role} at {story.company}</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">"{story.text}"</p>
                <button className="text-blue-700 text-sm font-medium flex items-center">
                  Read full story <ArrowRightIcon className="ml-1 h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Technologies */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-4">Trending Technologies & Skills</h2>
          <p className="text-gray-600 text-center mb-12">High-demand skills that employers are looking for</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {trendingSkills.map((skill, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-semibold text-lg">{skill.name}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    skill.demand === 'Very High' ? 'bg-red-100 text-red-800' :
                    skill.demand === 'High' ? 'bg-orange-100 text-orange-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {skill.demand} Demand
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-4">{skill.description}</p>
                <button className="text-blue-700 text-sm font-medium flex items-center">
                  Explore courses <ArrowRightIcon className="ml-1 h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-4">How It Works</h2>
          <p className="text-gray-600 text-center mb-12">Your path to a successful IT career in 4 simple steps</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <SearchIcon className="h-8 w-8 text-blue-600" />, title: 'Choose Your Path', description: 'Select from specialized IT career tracks based on your goals and interests' },
              { icon: <BookOpenIcon className="h-8 w-8 text-blue-600" />, title: 'Learn Skills', description: 'Master in-demand technologies through courses, tutorials, and hands-on practice' },
              { icon: <BriefcaseIcon className="h-8 w-8 text-blue-600" />, title: 'Build Projects', description: 'Apply your skills to real-world projects and build a professional portfolio' },
              { icon: <AcademicCapIcon className="h-8 w-8 text-blue-600" />, title: 'Launch Career', description: 'Get certified, receive career support, and land your dream tech job' }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-100 h-20 w-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  {step.icon}
                </div>
                <div className="bg-blue-600 text-white h-8 w-8 rounded-full flex items-center justify-center mx-auto mb-4 -mt-6 z-10 relative">
                  {index + 1}
                </div>
                <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job & Internship Opportunities */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-4">Job & Internship Opportunities</h2>
          <p className="text-gray-600 text-center mb-12">Connect with companies looking for tech talent</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobOpportunities.map((job, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2">{job.title}</h3>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <BriefcaseIcon className="h-4 w-4 mr-1" />
                    <span className="mr-4">{job.company}</span>
                    <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs">
                      {job.type}
                    </span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{job.location}</span>
                  </div>
                  <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="text-blue-700 font-semibold flex items-center justify-center mx-auto">
              View All Opportunities <ArrowRightIcon className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Resources & Tools */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-4">Developer Resources & Tools</h2>
          <p className="text-gray-600 text-center mb-12">Essential resources to support your learning journey</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition">
                <div className="h-40 bg-gradient-to-r from-gray-100 to-gray-200 flex items-center justify-center">
                  <DocumentTextIcon className="h-12 w-12 text-gray-400" />
                </div>
                <div className="p-6">
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium mb-3 inline-block">
                    {resource.type}
                  </span>
                  <h3 className="font-semibold text-lg mb-2">{resource.title}</h3>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <TagIcon className="h-4 w-4 mr-1" />
                    <span>{resource.category}</span>
                  </div>
                  <button className="text-blue-700 text-sm font-medium flex items-center">
                    Download <ArrowRightIcon className="ml-1 h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community & Networking */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-4">Tech Community & Networking</h2>
          <p className="text-gray-600 text-center mb-12">Connect with fellow learners and industry professionals</p>
          
          <div className="bg-gray-50 rounded-xl p-8 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Discussion Forums</h3>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 hover:shadow-md transition">
                    <h4 className="font-medium mb-2">Getting started with React - tips?</h4>
                    <div className="flex items-center text-sm text-gray-500">
                      <span>24 replies</span>
                      <span className="mx-2">•</span>
                      <span>Last activity: 2 hours ago</span>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4 hover:shadow-md transition">
                    <h4 className="font-medium mb-2">Python vs JavaScript for beginners</h4>
                    <div className="flex items-center text-sm text-gray-500">
                      <span>42 replies</span>
                      <span className="mx-2">•</span>
                      <span>Last activity: 5 hours ago</span>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4 hover:shadow-md transition">
                    <h4 className="font-medium mb-2">Share your portfolio for feedback</h4>
                    <div className="flex items-center text-sm text-gray-500">
                      <span>87 replies</span>
                      <span className="mx-2">•</span>
                      <span>Last activity: 1 day ago</span>
                    </div>
                  </div>
                </div>
                <button className="text-blue-700 font-medium flex items-center mt-4">
                  Browse all discussions <ArrowRightIcon className="ml-2 h-5 w-5" />
                </button>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Upcoming Events</h3>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 hover:shadow-md transition">
                    <h4 className="font-medium mb-2">Web Development Workshop</h4>
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <CalendarIcon className="h-4 w-4 mr-1" />
                      <span>May 20, 2023 • 2:00 PM EST</span>
                    </div>
                    <p className="text-sm">Live coding session building a responsive website</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 hover:shadow-md transition">
                    <h4 className="font-medium mb-2">Tech Career Fair</h4>
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <CalendarIcon className="h-4 w-4 mr-1" />
                      <span>May 25, 2023 • 1:00 PM EST</span>
                    </div>
                    <p className="text-sm">Connect with hiring managers from top tech companies</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 hover:shadow-md transition">
                    <h4 className="font-medium mb-2">Cloud Computing Q&A</h4>
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <CalendarIcon className="h-4 w-4 mr-1" />
                      <span>May 28, 2023 • 3:00 PM EST</span>
                    </div>
                    <p className="text-sm">Get your cloud questions answered by experts</p>
                  </div>
                </div>
                <button className="text-blue-700 font-medium flex items-center mt-4">
                  View all events <ArrowRightIcon className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 text-center mb-12">Find answers to common questions about starting an IT career</p>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  className="flex justify-between items-center w-full p-6 text-left font-medium bg-gray-50 hover:bg-gray-100 transition"
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                >
                  <span>{faq.question}</span>
                  <ChevronDownIcon className={`h-5 w-5 transform transition-transform ${expandedFaq === index ? 'rotate-180' : ''}`} />
                </button>
                {expandedFaq === index && (
                  <div className="p-6 bg-white">
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Your IT & Software Career Today</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">Join thousands of students building successful tech careers with our guided paths, expert mentorship, and real-world projects.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition">
              Explore Courses
            </button>
            <button className="bg-transparent border-2 border-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-700 transition">
              Connect with Mentors
            </button>
          </div>
          <p className="mt-8 text-blue-200">7-day free trial • Cancel anytime • Money-back guarantee</p>
        </div>
      </section>
    </div>
  );
};

// Helper components for icons not in heroicons
const ArrowRightIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);

const CalendarIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const TagIcons = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
  </svg>
);

export default ItSoftware;