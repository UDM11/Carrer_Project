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
  CashIcon,
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
  UserIcon,
  UsersIcon,
  ArrowRightIcon,
  ExternalLinkIcon
} from '@heroicons/react/outline';

const LearnAI = () => {
  // State for interactive components
  const [activePath, setActivePath] = useState('ai-engineer');
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [activeProjectFilter, setActiveProjectFilter] = useState('all');
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeResourceFilter, setActiveResourceFilter] = useState('all');

  // Sample data
  const learningPaths = [
    { id: 'ai-engineer', title: 'AI Engineer', icon: <CodeIcon className="w-6 h-6" /> },
    { id: 'data-scientist', title: 'Data Scientist', icon: <ChartBarIcon className="w-6 h-6" /> },
    { id: 'ml-researcher', title: 'ML Researcher', icon: <LightBulbIcon className="w-6 h-6" /> },
    { id: 'nlp-specialist', title: 'NLP Specialist', icon: <ChatIcon className="w-6 h-6" /> },
    { id: 'computer-vision', title: 'Computer Vision Engineer', icon: <EyeIcon className="w-6 h-6" /> }
  ];

  const courses = [
    { title: 'Introduction to Machine Learning', level: 'Beginner', duration: '6 weeks', format: 'Video & Projects', rating: 4.8 },
    { title: 'Deep Learning Fundamentals', level: 'Intermediate', duration: '8 weeks', format: 'Live Sessions', rating: 4.9 },
    { title: 'Natural Language Processing', level: 'Advanced', duration: '10 weeks', format: 'Project-based', rating: 4.7 },
    { title: 'Computer Vision with Python', level: 'Intermediate', duration: '7 weeks', format: 'Video & Projects', rating: 4.8 },
    { title: 'Reinforcement Learning', level: 'Advanced', duration: '9 weeks', format: 'Live Sessions', rating: 4.6 },
    { title: 'AI Ethics & Responsible AI', level: 'Beginner', duration: '4 weeks', format: 'Video', rating: 4.5 }
  ];

  const skills = [
    { name: 'Python', description: 'The primary programming language for AI development' },
    { name: 'Machine Learning', description: 'Algorithms that learn patterns from data' },
    { name: 'Deep Learning', description: 'Neural networks for complex pattern recognition' },
    { name: 'Natural Language Processing', description: 'Techniques for understanding human language' },
    { name: 'Computer Vision', description: 'Algorithms to interpret visual information' },
    { name: 'TensorFlow/PyTorch', description: 'Popular frameworks for building AI models' }
  ];

  const projects = [
    { title: 'Sentiment Analysis Tool', skills: ['NLP', 'Python'], duration: '2 weeks', difficulty: 'Intermediate' },
    { title: 'Image Classification Model', skills: ['Computer Vision', 'Deep Learning'], duration: '3 weeks', difficulty: 'Advanced' },
    { title: 'Predictive Analytics Dashboard', skills: ['Machine Learning', 'Data Visualization'], duration: '2 weeks', difficulty: 'Intermediate' },
    { title: 'Chatbot Development', skills: ['NLP', 'Python'], duration: '4 weeks', difficulty: 'Advanced' },
    { title: 'Recommendation System', skills: ['Machine Learning', 'Python'], duration: '3 weeks', difficulty: 'Intermediate' },
    { title: 'AI-powered Game', skills: ['Reinforcement Learning', 'Python'], duration: '5 weeks', difficulty: 'Advanced' }
  ];

  const mentors = [
    { name: 'Dr. Sarah Chen', expertise: 'Deep Learning Research', rating: 4.9, courses: 12, students: 2400 },
    { name: 'Michael Rodriguez', expertise: 'NLP Applications', rating: 4.8, courses: 8, students: 1800 },
    { name: 'Emma Wilson', expertise: 'Computer Vision', rating: 4.9, courses: 10, students: 2200 },
    { name: 'David Kim', expertise: 'ML Infrastructure', rating: 4.7, courses: 6, students: 1500 }
  ];

  const caseStudies = [
    { company: 'TechCorp', description: 'Increased efficiency by 40% with AI-powered workflow automation', result: '40% efficiency gain' },
    { company: 'HealthPlus', description: 'Diagnostic accuracy improved by 35% using computer vision algorithms', result: '35% accuracy improvement' },
    { company: 'FinanceGlobal', description: 'Fraud detection enhanced by 60% with machine learning models', result: '60% better detection' },
    { company: 'RetailHub', description: 'Customer recommendations increased sales by 25%', result: '25% sales increase' }
  ];

  const faqs = [
    { question: 'Do I need a background in math to learn AI?', answer: 'While helpful, our courses are designed to teach necessary math concepts as you go. We provide supplementary materials to get you up to speed regardless of your background.' },
    { question: 'How long does it take to become job-ready in AI?', answer: 'Most students become job-ready within 6-9 months of dedicated study. Our career paths are designed to get you employable as quickly as possible with the right skills.' },
    { question: 'What programming language should I learn first?', answer: 'Python is the most widely used language in AI and we recommend starting there. It has an extensive ecosystem of AI libraries and is relatively easy to learn.' },
    { question: 'Are the certificates recognized by employers?', answer: 'Yes, our certificates are recognized by top tech companies worldwide. We partner with industry leaders to ensure our curriculum meets current hiring standards.' },
    { question: 'Can I learn AI while working full-time?', answer: 'Absolutely! Our courses are designed for flexibility. Most students study part-time, and we offer self-paced learning options that you can fit around your schedule.' }
  ];

  const webinars = [
    { title: 'Building Your First Neural Network', date: 'May 15, 2023', time: '2:00 PM EST', speaker: 'Dr. Sarah Chen' },
    { title: 'NLP in Practice: Real World Applications', date: 'May 22, 2023', time: '3:00 PM EST', speaker: 'Michael Rodriguez' },
    { title: 'Career Transition into AI', date: 'May 30, 2023', time: '1:00 PM EST', speaker: 'Emma Wilson' },
    { title: 'Ethics in AI: Building Responsible Systems', date: 'June 5, 2023', time: '4:00 PM EST', speaker: 'David Kim' }
  ];

  const resources = [
    { title: 'The Complete Guide to Neural Networks', category: 'Deep Learning', readTime: '12 min' },
    { title: '10 Python Libraries Every AI Developer Should Know', category: 'Programming', readTime: '8 min' },
    { title: 'Understanding Transformers in NLP', category: 'NLP', readTime: '15 min' },
    { title: 'Computer Vision for Beginners: Key Concepts', category: 'Computer Vision', readTime: '10 min' },
    { title: 'How to Build an AI Portfolio That Gets You Hired', category: 'Career', readTime: '9 min' },
    { title: 'The Future of AI: Trends to Watch in 2023', category: 'Industry', readTime: '11 min' }
  ];

  const communityTopics = [
    { title: 'Help with my first CNN model', category: 'Computer Vision', replies: 24, author: 'NewLearner' },
    { title: 'Which specialization has the best job prospects?', category: 'Career', replies: 42, author: 'CareerChanger' },
    { title: 'Share your latest AI projects here!', category: 'Projects', replies: 87, author: 'ProjectMaster' },
    { title: 'How to prepare for ML engineer interviews', category: 'Interview', replies: 31, author: 'JobSeeker' }
  ];

  // Toggle FAQ expansion
  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-900 via-blue-900 to-purple-900 text-white py-20 px-4">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Master Artificial Intelligence Today</h1>
            <p className="text-xl mb-8">Learn AI from basics to advanced, guided by experts, with real-world projects.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-purple-700 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition flex items-center justify-center">
                Explore Courses <ArrowRightIcon className="ml-2 h-5 w-5" />
              </button>
              <button className="bg-transparent border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-700 transition">
                Join AI Mentorship
              </button>
              <button className="bg-purple-800 px-6 py-3 rounded-lg font-semibold hover:bg-purple-900 transition flex items-center">
                Schedule Consultation <MailIcon className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="bg-white/20 rounded-xl p-2 backdrop-blur-sm transform rotate-3">
                <div className="bg-gray-800 h-64 w-full rounded-lg flex items-center justify-center">
                  <div className="text-center p-4">
                    <SparklesIcon className="h-12 w-12 mx-auto text-yellow-400 mb-2" />
                    <span className="text-white">AI Neural Network Visualization</span>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white/20 rounded-lg p-2 backdrop-blur-sm transform -rotate-6">
                <div className="bg-gray-800 h-24 w-24 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <CodeIcon className="h-6 w-6 mx-auto text-green-400" />
                    <span className="text-xs text-white">AI Code</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Learning Paths */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-4">AI Learning Paths & Specializations</h2>
          <p className="text-gray-600 text-center mb-12">Choose your specialization and follow a structured learning journey</p>
          
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <div className="flex overflow-x-auto pb-4 scrollbar-hide mb-8">
              {learningPaths.map((path) => (
                <button
                  key={path.id}
                  onClick={() => setActivePath(path.id)}
                  className={`flex flex-col items-center px-6 py-4 mr-4 rounded-lg whitespace-nowrap min-w-max ${activePath === path.id ? 'bg-purple-100 text-purple-700 border-2 border-purple-500' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                >
                  <span className="mb-2">{path.icon}</span>
                  <span className="font-medium">{path.title}</span>
                </button>
              ))}
            </div>
            
            <div className="border-l-2 border-purple-500 pl-6 ml-3 relative">
              {['Beginner', 'Intermediate', 'Advanced', 'Expert'].map((level, index) => (
                <div key={level} className="mb-10 relative">
                  <div className="absolute -left-9 mt-1.5 bg-purple-500 rounded-full p-1.5 border-4 border-white"></div>
                  <h3 className="text-xl font-semibold">{level} Level</h3>
                  <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Skills to Master:</h4>
                      <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                        <li>Python programming fundamentals</li>
                        <li>Data preprocessing techniques</li>
                        <li>Basic machine learning algorithms</li>
                        <li>Intro to neural networks</li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Projects:</h4>
                      <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                        <li>Predict housing prices</li>
                        <li>Image classification with CNN</li>
                        <li>Sentiment analysis on reviews</li>
                        <li>Basic chatbot implementation</li>
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Popular AI Courses */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-4">Popular AI Courses</h2>
          <p className="text-gray-600 text-center mb-12">Handpicked courses to accelerate your AI journey</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="h-40 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center relative">
                  <PlayIcon className="h-12 w-12 text-white opacity-80" />
                  <div className="absolute top-4 right-4 bg-white text-purple-700 px-2 py-1 rounded-full text-sm font-medium">
                    {course.level}
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
                  <button className="w-full bg-purple-600 text-white py-2 rounded-lg font-medium hover:bg-purple-700 transition">
                    Enroll Now
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="text-purple-700 font-semibold flex items-center justify-center mx-auto">
              View All Courses <ChevronDownIcon className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Skills & Tools */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-4">AI Skills & Tools</h2>
          <p className="text-gray-600 text-center mb-12">Master the essential technologies powering modern AI</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition">
                <div className="flex items-start mb-4">
                  <div className="bg-purple-100 p-3 rounded-lg mr-4">
                    <CodeIcon className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{skill.name}</h3>
                    <p className="text-gray-600 text-sm mt-1">{skill.description}</p>
                  </div>
                </div>
                <button className="text-purple-700 text-sm font-medium flex items-center">
                  Explore related courses <ArrowRightIcon className="ml-1 h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects & Hands-on Labs */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-4">AI Projects & Hands-on Labs</h2>
          <p className="text-gray-600 text-center mb-12">Apply your skills to real-world challenges</p>
          
          <div className="flex overflow-x-auto pb-4 scrollbar-hide mb-8">
            {['all', 'beginner', 'intermediate', 'advanced'].map((level) => (
              <button
                key={level}
                onClick={() => setActiveProjectFilter(level)}
                className={`px-6 py-2 mr-4 rounded-full whitespace-nowrap capitalize ${activeProjectFilter === level ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              >
                {level === 'all' ? 'All Projects' : level}
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
                    {project.skills.map((skill, i) => (
                      <span key={i} className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">
                        {skill}
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
                  <button className="w-full bg-white border border-purple-600 text-purple-700 py-2 rounded-lg font-medium hover:bg-purple-50 transition">
                    Start Project
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mentors & Experts */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-4">Learn from AI Experts</h2>
          <p className="text-gray-600 text-center mb-12">Get guidance from industry professionals and researchers</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mentors.map((mentor, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm text-center hover:shadow-md transition">
                <div className="h-20 w-20 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <UserIcon className="h-12 w-12 text-purple-600" />
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
                <button className="w-full bg-purple-600 text-white py-2 rounded-lg font-medium text-sm hover:bg-purple-700 transition">
                  Book Session
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI in Action / Case Studies */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-4">AI in Action: Case Studies</h2>
          <p className="text-gray-600 text-center mb-12">Real-world applications of AI across industries</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition">
                <div className="flex items-start mb-4">
                  <div className="bg-purple-100 p-3 rounded-lg mr-4">
                    <DocumentTextIcon className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{study.company}</h3>
                    <p className="text-gray-600 mt-2">{study.description}</p>
                    <div className="mt-4 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium inline-block">
                      {study.result}
                    </div>
                  </div>
                </div>
                <button className="text-purple-700 text-sm font-medium flex items-center mt-4">
                  Learn how they did it <ArrowRightIcon className="ml-1 h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certification & Career Impact */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-4">Certification & Career Impact</h2>
          <p className="text-gray-600 text-center mb-12">How our programs transform careers</p>
          
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
              <div className="text-center">
                <div className="bg-purple-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DocumentTextIcon className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Industry-Recognized Certificates</h3>
                <p className="text-gray-600">Credentials valued by top employers worldwide</p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BriefcaseIcon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Career Services</h3>
                <p className="text-gray-600">Resume reviews, interview prep, and job placement support</p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CashIcon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Salary Increase</h3>
                <p className="text-gray-600">Average salary boost of 35% after certification</p>
              </div>
            </div>
            
            <div className="bg-purple-50 rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-4">Career Outcomes</h3>
              <div className="h-48 flex items-end space-x-4 justify-center">
                {[
                  { role: 'AI Engineer', salary: 145000, barHeight: 180 },
                  { role: 'Data Scientist', salary: 135000, barHeight: 160 },
                  { role: 'ML Engineer', salary: 155000, barHeight: 200 },
                  { role: 'NLP Specialist', salary: 142000, barHeight: 175 },
                  { role: 'Computer Vision Engineer', salary: 148000, barHeight: 185 }
                ].map((job, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className="text-sm mb-2">${(job.salary/1000).toFixed(0)}K</div>
                    <div 
                      className="bg-purple-600 w-14 rounded-t-lg transition-all hover:opacity-90"
                      style={{ height: `${job.barHeight}px` }}
                    ></div>
                    <div className="text-xs mt-2 text-center" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
                      {job.role}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-4">How It Works</h2>
          <p className="text-gray-600 text-center mb-12">Your journey to AI mastery in 4 simple steps</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <SearchIcon className="h-8 w-8 text-purple-600" />, title: 'Choose Your Path', description: 'Select from specialized AI career tracks based on your goals' },
              { icon: <BookOpenIcon className="h-8 w-8 text-purple-600" />, title: 'Learn & Practice', description: 'Master skills through courses, projects, and hands-on labs' },
              { icon: <DocumentTextIcon className="h-8 w-8 text-purple-600" />, title: 'Get Certified', description: 'Earn industry-recognized certificates and build your portfolio' },
              { icon: <BriefcaseIcon className="h-8 w-8 text-purple-600" />, title: 'Launch Career', description: 'Apply for jobs with our career support and mentorship' }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-purple-100 h-20 w-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  {step.icon}
                </div>
                <div className="bg-purple-600 text-white h-8 w-8 rounded-full flex items-center justify-center mx-auto mb-4 -mt-6 z-10 relative">
                  {index + 1}
                </div>
                <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources / AI Guides */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-4">AI Resources & Guides</h2>
          <p className="text-gray-600 text-center mb-8">Expand your knowledge with our curated content</p>
          
          <div className="flex overflow-x-auto pb-4 scrollbar-hide mb-8 justify-center">
            {['all', 'deep learning', 'nlp', 'computer vision', 'career', 'programming'].map((category) => (
              <button
                key={category}
                onClick={() => setActiveResourceFilter(category)}
                className={`px-6 py-2 mr-4 rounded-full whitespace-nowrap capitalize ${activeResourceFilter === category ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              >
                {category === 'all' ? 'All Resources' : category}
              </button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition">
                <div className="h-40 bg-gradient-to-r from-gray-100 to-gray-200 flex items-center justify-center">
                  <DocumentTextIcon className="h-12 w-12 text-gray-400" />
                </div>
                <div className="p-6">
                  <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-medium mb-3 inline-block">
                    {resource.category}
                  </span>
                  <h3 className="font-semibold text-lg mb-2">{resource.title}</h3>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <ClockIcon className="h-4 w-4 mr-1" />
                    <span>{resource.readTime} read</span>
                  </div>
                  <button className="text-purple-700 text-sm font-medium flex items-center">
                    Read More <ArrowRightIcon className="ml-1 h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 text-center mb-12">Find answers to common questions about learning AI</p>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  className="flex justify-between items-center w-full p-6 text-left font-medium bg-gray-50 hover:bg-gray-100 transition"
                  onClick={() => toggleFaq(index)}
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

      {/* Upcoming Webinars / Events */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-4">Upcoming AI Events & Webinars</h2>
          <p className="text-gray-600 text-center mb-12">Join live sessions with experts and peers</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {webinars.map((webinar, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition">
                <div className="h-40 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center relative">
                  <PlayIcon className="h-12 w-12 text-white opacity-80" />
                  <div className="absolute top-4 left-4 bg-white text-purple-700 px-2 py-1 rounded-full text-xs font-medium">
                    Live
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2">{webinar.title}</h3>
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <CalendarIcon className="h-4 w-4 mr-1" />
                    <span>{webinar.date}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <ClockIcon className="h-4 w-4 mr-1" />
                    <span>{webinar.time}</span>
                    <span className="mx-2">•</span>
                    <UserIcon className="h-4 w-4 mr-1" />
                    <span>{webinar.speaker}</span>
                  </div>
                  <button className="w-full bg-purple-600 text-white py-2 rounded-lg font-medium hover:bg-purple-700 transition">
                    Register Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community / Forums */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-4">AI Community & Forums</h2>
          <p className="text-gray-600 text-center mb-12">Connect with fellow learners and experts</p>
          
          <div className="bg-gray-50 rounded-xl p-8 mb-8">
            <div className="flex flex-col md:flex-row items-center justify-between mb-8">
              <h3 className="text-xl font-semibold mb-4 md:mb-0">Active Discussions</h3>
              <button className="bg-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-purple-700 transition flex items-center">
                Start New Thread <PaperAirplaneIcon className="ml-2 h-5 w-5" />
              </button>
            </div>
            
            <div className="space-y-6">
              {communityTopics.map((topic, index) => (
                <div key={index} className="bg-white rounded-lg p-6 hover:shadow-md transition">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="font-semibold text-lg">{topic.title}</h4>
                    <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-medium">
                      {topic.category}
                    </span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <span>By {topic.author}</span>
                    <span className="mx-2">•</span>
                    <span>{topic.replies} replies</span>
                    <span className="mx-2">•</span>
                    <span>Last activity: 2 hours ago</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center">
            <button className="text-purple-700 font-semibold flex items-center justify-center mx-auto">
              Browse All Discussions <ArrowRightIcon className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-900 via-blue-900 to-purple-900 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Learning AI Today</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">Join thousands of students mastering AI with our structured paths, expert mentorship, and real-world projects.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-50 transition">
              Explore Courses
            </button>
            <button className="bg-transparent border-2 border-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-700 transition">
              Join Mentorship
            </button>
          </div>
          <p className="mt-8 text-purple-200">7-day free trial • Cancel anytime • Money-back guarantee</p>
        </div>
      </section>
    </div>
  );
};

// Helper components for icons not in heroicons v2
const ChatIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>
);

const CalendarIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

export default LearnAI;