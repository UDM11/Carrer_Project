import React, { useState } from 'react';

const Business = () => {
  // State for interactive elements
  const [activePath, setActivePath] = useState('all');
  const [activeSkill, setActiveSkill] = useState('all');
  const [expandedFaq, setExpandedFaq] = useState(null);

  // Sample data - in a real app this would come from an API or database
  const businessPaths = [
    {
      id: 1,
      title: "Entrepreneurship / Startups",
      description: "Learn how to ideate, validate, and launch successful business ventures",
      duration: "6-8 weeks",
      level: "Beginner to Advanced",
      category: "entrepreneurship"
    },
    {
      id: 2,
      title: "Marketing & Sales",
      description: "Master digital marketing strategies and sales techniques",
      duration: "4-6 weeks",
      level: "Intermediate",
      category: "marketing"
    },
    {
      id: 3,
      title: "Finance & Accounting",
      description: "Understand financial statements, budgeting, and financial planning",
      duration: "8-10 weeks",
      level: "Intermediate to Advanced",
      category: "finance"
    },
    {
      id: 4,
      title: "Operations & Management",
      description: "Learn to optimize business processes and manage teams effectively",
      duration: "6-8 weeks",
      level: "Beginner to Intermediate",
      category: "operations"
    },
    {
      id: 5,
      title: "Business Analytics",
      description: "Use data to drive business decisions and measure performance",
      duration: "4-6 weeks",
      level: "Advanced",
      category: "analytics"
    }
  ];

  const courses = [
    {
      id: 1,
      title: "Digital Marketing Fundamentals",
      description: "Learn SEO, social media marketing, and email campaigns",
      duration: "4 weeks",
      difficulty: "Beginner",
      category: "marketing"
    },
    {
      id: 2,
      title: "Financial Planning & Analysis",
      description: "Master budgeting, forecasting, and financial modeling",
      duration: "6 weeks",
      difficulty: "Intermediate",
      category: "finance"
    },
    {
      id: 3,
      title: "Leadership & Team Management",
      description: "Develop leadership skills and learn to manage effective teams",
      duration: "5 weeks",
      difficulty: "Intermediate",
      category: "operations"
    },
    {
      id: 4,
      title: "Business Strategy Development",
      description: "Create winning business strategies for competitive markets",
      duration: "8 weeks",
      difficulty: "Advanced",
      category: "entrepreneurship"
    }
  ];

  const mentors = [
    {
      id: 1,
      name: "Sarah Johnson",
      expertise: "Startup Growth Strategy",
      experience: "Ex-Google, 3 successful exits",
      rating: 4.9,
      reviews: 128
    },
    {
      id: 2,
      name: "Michael Chen",
      expertise: "Financial Modeling & VC Funding",
      experience: "Former Investment Banker",
      rating: 4.8,
      reviews: 96
    },
    {
      id: 3,
      name: "Priya Patel",
      expertise: "Digital Marketing & Branding",
      experience: "Marketing Director at Fortune 500",
      rating: 4.7,
      reviews: 112
    }
  ];

  const faqs = [
    {
      id: 1,
      question: "How do I choose the right business path?",
      answer: "Consider your interests, skills, and market demand. Our path explorer tool can help match you with suitable options based on your goals."
    },
    {
      id: 2,
      question: "Do you offer certifications?",
      answer: "Yes, we offer certificates of completion for all courses and specializations. These can be shared on LinkedIn and added to your resume."
    },
    {
      id: 3,
      question: "How does mentorship work?",
      answer: "After selecting a mentor, you can book 1:1 sessions, get feedback on projects, and receive guidance tailored to your specific business challenges."
    }
  ];

  // Filter business paths based on selection
  const filteredPaths = activePath === 'all' 
    ? businessPaths 
    : businessPaths.filter(path => path.category === activePath);

  // Filter courses based on selection
  const filteredCourses = activeSkill === 'all' 
    ? courses 
    : courses.filter(course => course.category === activeSkill);

  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Grow Your Business. Master Entrepreneurship.</h1>
            <p className="text-xl mb-8 opacity-90">Learn strategies, connect with mentors, and launch your business ideas globally.</p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg hover:bg-blue-50 transition">Start Learning</button>
              <button className="bg-transparent border-2 border-white text-white font-semibold py-3 px-6 rounded-lg hover:bg-white hover:bg-opacity-10 transition">Connect with Mentors</button>
              <button className="bg-transparent border-2 border-white text-white font-semibold py-3 px-6 rounded-lg hover:bg-white hover:bg-opacity-10 transition">Explore Business Programs</button>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white bg-opacity-20 p-4 rounded-xl h-40 flex items-center justify-center">
                <span className="text-5xl">📈</span>
              </div>
              <div className="bg-white bg-opacity-20 p-4 rounded-xl h-40 flex items-center justify-center mt-8">
                <span className="text-5xl">🌐</span>
              </div>
              <div className="bg-white bg-opacity-20 p-4 rounded-xl h-40 flex items-center justify-center">
                <span className="text-5xl">🤝</span>
              </div>
              <div className="bg-white bg-opacity-20 p-4 rounded-xl h-40 flex items-center justify-center mt-8">
                <span className="text-5xl">💼</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Path Explorer */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Explore Business Paths</h2>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button 
              className={`px-4 py-2 rounded-full ${activePath === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
              onClick={() => setActivePath('all')}
            >
              All Paths
            </button>
            <button 
              className={`px-4 py-2 rounded-full ${activePath === 'entrepreneurship' ? 'bg-blue-600 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
              onClick={() => setActivePath('entrepreneurship')}
            >
              Entrepreneurship
            </button>
            <button 
              className={`px-4 py-2 rounded-full ${activePath === 'marketing' ? 'bg-blue-600 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
              onClick={() => setActivePath('marketing')}
            >
              Marketing
            </button>
            <button 
              className={`px-4 py-2 rounded-full ${activePath === 'finance' ? 'bg-blue-600 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
              onClick={() => setActivePath('finance')}
            >
              Finance
            </button>
            <button 
              className={`px-4 py-2 rounded-full ${activePath === 'operations' ? 'bg-blue-600 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
              onClick={() => setActivePath('operations')}
            >
              Operations
            </button>
            <button 
              className={`px-4 py-2 rounded-full ${activePath === 'analytics' ? 'bg-blue-600 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
              onClick={() => setActivePath('analytics')}
            >
              Analytics
            </button>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPaths.map(path => (
              <div key={path.id} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition">
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2">{path.title}</h3>
                  <p className="text-gray-600 mb-4">{path.description}</p>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>{path.duration}</span>
                    <span>{path.level}</span>
                  </div>
                </div>
                <div className="bg-gray-50 px-6 py-4">
                  <button className="text-blue-600 font-semibold hover:text-blue-800 transition">
                    Explore Path →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses & Skills Library */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Courses & Skills Library</h2>
          <p className="text-center text-gray-600 mb-12">Build the essential skills needed for business success</p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button 
              className={`px-4 py-2 rounded-full ${activeSkill === 'all' ? 'bg-blue-600 text-white' : 'bg-white hover:bg-gray-100'}`}
              onClick={() => setActiveSkill('all')}
            >
              All Courses
            </button>
            <button 
              className={`px-4 py-2 rounded-full ${activeSkill === 'marketing' ? 'bg-blue-600 text-white' : 'bg-white hover:bg-gray-100'}`}
              onClick={() => setActiveSkill('marketing')}
            >
              Marketing
            </button>
            <button 
              className={`px-4 py-2 rounded-full ${activeSkill === 'finance' ? 'bg-blue-600 text-white' : 'bg-white hover:bg-gray-100'}`}
              onClick={() => setActiveSkill('finance')}
            >
              Finance
            </button>
            <button 
              className={`px-4 py-2 rounded-full ${activeSkill === 'operations' ? 'bg-blue-600 text-white' : 'bg-white hover:bg-gray-100'}`}
              onClick={() => setActiveSkill('operations')}
            >
              Management
            </button>
            <button 
              className={`px-4 py-2 rounded-full ${activeSkill === 'entrepreneurship' ? 'bg-blue-600 text-white' : 'bg-white hover:bg-gray-100'}`}
              onClick={() => setActiveSkill('entrepreneurship')}
            >
              Strategy
            </button>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredCourses.map(course => (
              <div key={course.id} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition">
                <div className="h-40 bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                  <span className="text-4xl text-white">📚</span>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-lg mb-2">{course.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{course.description}</p>
                  <div className="flex justify-between text-sm text-gray-500 mb-4">
                    <span>{course.duration}</span>
                    <span className="bg-gray-100 px-2 py-1 rounded-full">{course.difficulty}</span>
                  </div>
                  <button className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition">
                    Start Course
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real-World Projects */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Real-World Projects</h2>
          <p className="text-center text-gray-600 mb-12">Apply your knowledge to practical business challenges</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 text-xl mb-4">
                📊
              </div>
              <h3 className="font-bold text-xl mb-2">Startup Business Plan Creation</h3>
              <p className="text-gray-600 mb-4">Develop a comprehensive business plan for a new venture, including market analysis, financial projections, and operational strategy.</p>
              <div className="mb-4">
                <h4 className="font-semibold mb-2">Recommended Tools:</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Business Model Canvas</span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Excel/Sheets</span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Market Research Tools</span>
                </div>
              </div>
              <button className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-700 transition">
                Start Project
              </button>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 text-xl mb-4">
                📈
              </div>
              <h3 className="font-bold text-xl mb-2">Market Research Project</h3>
              <p className="text-gray-600 mb-4">Conduct thorough market research for a product or service, including competitor analysis, target audience identification, and pricing strategy.</p>
              <div className="mb-4">
                <h4 className="font-semibold mb-2">Recommended Tools:</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Survey Tools</span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Analytics Platforms</span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Data Visualization</span>
                </div>
              </div>
              <button className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-700 transition">
                Start Project
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Mentors & Expert Guidance */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Learn from Industry Experts</h2>
          <p className="text-center text-gray-600 mb-12">Connect with experienced business professionals</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {mentors.map(mentor => (
              <div key={mentor.id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
                <div className="h-48 bg-gradient-to-r from-blue-400 to-purple-400 relative">
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-24 h-24 bg-white rounded-full p-1">
                    <div className="w-full h-full bg-gray-200 rounded-full flex items-center justify-center text-3xl">
                      👤
                    </div>
                  </div>
                </div>
                <div className="pt-12 pb-6 px-6 text-center">
                  <h3 className="font-bold text-xl">{mentor.name}</h3>
                  <p className="text-blue-600 font-semibold">{mentor.expertise}</p>
                  <p className="text-gray-600 text-sm my-3">{mentor.experience}</p>
                  <div className="flex items-center justify-center gap-2">
                    <div className="flex text-yellow-400">
                      {"★".repeat(Math.floor(mentor.rating))}
                      {"☆".repeat(5 - Math.floor(mentor.rating))}
                    </div>
                    <span className="text-gray-500 text-sm">({mentor.reviews} reviews)</span>
                  </div>
                  <button className="mt-6 bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-700 transition">
                    Book Session
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Success Stories</h2>
          <p className="text-center text-gray-600 mb-12">Hear from entrepreneurs who transformed their ideas into reality</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-start mb-4">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center text-2xl mr-4">
                  👤
                </div>
                <div>
                  <h3 className="font-bold">Alex Morgan</h3>
                  <p className="text-blue-600">Founder, EcoSustain Solutions</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4 italic">"The mentorship program completely transformed my approach to business planning. Within 6 months, I secured funding and launched my sustainable packaging company."</p>
              <div className="h-40 bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="text-gray-400">Company Logo/Image</span>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-start mb-4">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center text-2xl mr-4">
                  👤
                </div>
                <div>
                  <h3 className="font-bold">Jessica Williams</h3>
                  <p className="text-blue-600">Marketing Director, TechGrowth Inc.</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4 italic">"The digital marketing course gave me practical skills I applied immediately. I developed and executed a campaign that increased our lead generation by 237% in one quarter."</p>
              <div className="h-40 bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="text-gray-400">Performance Chart/Graph</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="font-bold text-lg mb-2">Choose a Business Path</h3>
              <p className="text-gray-600">Select from entrepreneurship, marketing, finance, operations, or analytics based on your goals.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="font-bold text-lg mb-2">Learn Skills & Take Courses</h3>
              <p className="text-gray-600">Access curated content, video lessons, and interactive exercises to build your knowledge.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="font-bold text-lg mb-2">Apply Knowledge on Projects</h3>
              <p className="text-gray-600">Work on real-world business challenges and receive feedback from experts.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-2xl font-bold mx-auto mb-4">4</div>
              <h3 className="font-bold text-lg mb-2">Launch or Grow Your Business</h3>
              <p className="text-gray-600">Implement your learning, with ongoing support from mentors and the community.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Tools & Templates */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Business Tools & Templates</h2>
          <p className="text-center text-gray-600 mb-12">Resources to streamline your business planning and execution</p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 text-xl mb-4">
                📝
              </div>
              <h3 className="font-bold text-lg mb-2">Business Plan Template</h3>
              <p className="text-gray-600 mb-4">Comprehensive template with guided sections for creating a professional business plan.</p>
              <button className="text-blue-600 font-semibold hover:text-blue-800 transition flex items-center">
                Download Template <span className="ml-1">→</span>
              </button>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600 text-xl mb-4">
                💰
              </div>
              <h3 className="font-bold text-lg mb-2">Financial Model Spreadsheet</h3>
              <p className="text-gray-600 mb-4">Pre-built financial model with projections, cash flow analysis, and key metrics.</p>
              <button className="text-blue-600 font-semibold hover:text-blue-800 transition flex items-center">
                Access Tool <span className="ml-1">→</span>
              </button>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 text-xl mb-4">
                📊
              </div>
              <h3 className="font-bold text-lg mb-2">Marketing Plan Framework</h3>
              <p className="text-gray-600 mb-4">Step-by-step framework to develop and execute a comprehensive marketing strategy.</p>
              <button className="text-blue-600 font-semibold hover:text-blue-800 transition flex items-center">
                Download Template <span className="ml-1">→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Workshops & Webinars */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Upcoming Workshops & Webinars</h2>
          <p className="text-center text-gray-600 mb-12">Live learning sessions with business experts</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="bg-blue-100 text-blue-600 text-sm font-semibold px-3 py-1 rounded-full">Webinar</span>
                  <h3 className="font-bold text-xl mt-2">Startup Funding Strategies</h3>
                </div>
                <div className="text-right">
                  <div className="font-bold text-lg">June 15</div>
                  <div className="text-gray-500">2:00 PM EST</div>
                </div>
              </div>
              <p className="text-gray-600 mb-4">Learn how to navigate funding options, pitch to investors, and secure capital for your startup.</p>
              <button className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-700 transition">
                Register Now
              </button>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="bg-purple-100 text-purple-600 text-sm font-semibold px-3 py-1 rounded-full">Workshop</span>
                  <h3 className="font-bold text-xl mt-2">Digital Marketing Bootcamp</h3>
                </div>
                <div className="text-right">
                  <div className="font-bold text-lg">June 22</div>
                  <div className="text-gray-500">10:00 AM EST</div>
                </div>
              </div>
              <p className="text-gray-600 mb-4">Hands-on session covering SEO, social media advertising, and content marketing strategies.</p>
              <button className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-700 transition">
                Register Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Networking & Community */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Networking & Community</h2>
          <p className="text-center text-gray-600 mb-12">Connect with peers, mentors, and entrepreneurs</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-3xl mx-auto mb-4">
                💬
              </div>
              <h3 className="font-bold text-lg mb-2">Discussion Forums</h3>
              <p className="text-gray-600">Join topic-specific groups to ask questions, share insights, and get feedback.</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-3xl mx-auto mb-4">
                👥
              </div>
              <h3 className="font-bold text-lg mb-2">Peer Collaboration</h3>
              <p className="text-gray-600">Find partners for projects, form mastermind groups, and collaborate on business ideas.</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 text-3xl mx-auto mb-4">
                🌐
              </div>
              <h3 className="font-bold text-lg mb-2">Networking Events</h3>
              <p className="text-gray-600">Attend virtual and in-person events to expand your professional network.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            {faqs.map(faq => (
              <div key={faq.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <button 
                  className="w-full text-left p-6 font-semibold text-lg flex justify-between items-center"
                  onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
                >
                  {faq.question}
                  <span>{expandedFaq === faq.id ? '−' : '+'}</span>
                </button>
                {expandedFaq === faq.id && (
                  <div className="px-6 pb-6 text-gray-600">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Start Your Business Journey Today</h2>
          <p className="text-xl mb-10 opacity-90">Join thousands of entrepreneurs building the next generation of businesses</p>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-blue-50 transition">
              Explore Courses
            </button>
            <button className="bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:bg-opacity-10 transition">
              Connect with Mentors
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Business;