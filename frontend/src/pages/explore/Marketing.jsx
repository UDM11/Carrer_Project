import React, { useState } from 'react';
import {
  ChartBarIcon,
  TrendingUpIcon,
  UserGroupIcon,
  BookOpenIcon,
  CalendarIcon,
  ChatIcon,
  ChevronDownIcon,
  CheckCircleIcon,
  SearchIcon,
  StarIcon,
  ClockIcon,
  ArrowSmRightIcon,
  PlayIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  ClipboardListIcon,
  CogIcon,
  DocumentTextIcon,
  QuestionMarkCircleIcon,
  UsersIcon
} from '@heroicons/react/outline';

const Marketing = () => {
  // State for interactive components
  const [activePath, setActivePath] = useState('all');
  const [openAccordion, setOpenAccordion] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [activeResourceTab, setActiveResourceTab] = useState('case-studies');

  // Sample data
  const marketingPaths = [
    { 
      id: 1, 
      title: 'Digital Marketing Specialist', 
      icon: '📱', 
      category: 'digital',
      description: 'Master all aspects of digital marketing from strategy to execution',
      skills: ['SEO', 'SEM', 'Social Media', 'Email Marketing', 'Analytics'],
      difficulty: 'Beginner to Advanced',
      duration: '4-8 months',
      demand: 'High'
    },
    { 
      id: 2, 
      title: 'SEO/SEM Expert', 
      icon: '🔍', 
      category: 'seo',
      description: 'Specialize in search engine optimization and marketing',
      skills: ['Keyword Research', 'Technical SEO', 'PPC', 'Google Ads'],
      difficulty: 'Intermediate to Advanced',
      duration: '3-6 months',
      demand: 'Very High'
    },
    { 
      id: 3, 
      title: 'Social Media Manager', 
      icon: '💬', 
      category: 'social',
      description: 'Learn to build and manage social media presence across platforms',
      skills: ['Content Creation', 'Community Management', 'Ads Management', 'Analytics'],
      difficulty: 'Beginner to Intermediate',
      duration: '2-5 months',
      demand: 'High'
    },
    { 
      id: 4, 
      title: 'Content Marketer', 
      icon: '📝', 
      category: 'content',
      description: 'Create compelling content that attracts and engages audiences',
      skills: ['Copywriting', 'Content Strategy', 'SEO', 'Storytelling'],
      difficulty: 'Beginner to Advanced',
      duration: '3-6 months',
      demand: 'High'
    },
    { 
      id: 5, 
      title: 'Brand Strategist', 
      icon: '🎯', 
      category: 'branding',
      description: 'Develop brand identities and marketing strategies',
      skills: ['Brand Development', 'Market Research', 'Positioning', 'Creative Direction'],
      difficulty: 'Intermediate to Advanced',
      duration: '4-7 months',
      demand: 'Medium'
    },
    { 
      id: 6, 
      title: 'Growth Hacker', 
      icon: '🚀', 
      category: 'growth',
      description: 'Focus on rapid experimentation and scalable growth strategies',
      skills: ['Data Analysis', 'A/B Testing', 'Automation', 'Viral Marketing'],
      difficulty: 'Advanced',
      duration: '5-9 months',
      demand: 'Very High'
    },
  ];

  const courses = [
    {
      id: 1,
      title: 'SEO & SEM Fundamentals',
      category: 'seo',
      level: 'Beginner',
      duration: '6 weeks',
      description: 'Learn the core principles of search engine optimization and marketing',
      rating: 4.8,
      students: 12450
    },
    {
      id: 2,
      title: 'Social Media Marketing Mastery',
      category: 'social',
      level: 'Intermediate',
      duration: '8 weeks',
      description: 'Strategies for Facebook, Instagram, LinkedIn, and TikTok',
      rating: 4.7,
      students: 9870
    },
    {
      id: 3,
      title: 'Google Ads & PPC Campaigns',
      category: 'digital',
      level: 'Intermediate',
      duration: '6 weeks',
      description: 'Create and optimize effective pay-per-click campaigns',
      rating: 4.9,
      students: 7560
    },
    {
      id: 4,
      title: 'Email Marketing & Automation',
      category: 'digital',
      level: 'Intermediate',
      duration: '5 weeks',
      description: 'Build effective email sequences and automation workflows',
      rating: 4.6,
      students: 6530
    },
    {
      id: 5,
      title: 'Branding & Storytelling',
      category: 'branding',
      level: 'Advanced',
      duration: '7 weeks',
      description: 'Develop compelling brand narratives and identities',
      rating: 4.8,
      students: 4320
    },
    {
      id: 6,
      title: 'Analytics & Data-Driven Marketing',
      category: 'growth',
      level: 'Advanced',
      duration: '8 weeks',
      description: 'Use data to inform marketing decisions and measure ROI',
      rating: 4.9,
      students: 5670
    },
  ];

  const projects = [
    {
      id: 1,
      title: 'Run a Social Media Campaign',
      category: 'social',
      difficulty: 'Intermediate',
      duration: '2 weeks',
      description: 'Plan and execute a complete social media campaign for a mock brand',
      skills: ['Content Creation', 'Audience Targeting', 'Performance Analysis']
    },
    {
      id: 2,
      title: 'SEO Website Optimization',
      category: 'seo',
      difficulty: 'Intermediate',
      duration: '3 weeks',
      description: 'Audit and optimize a website for better search engine rankings',
      skills: ['Technical SEO', 'Keyword Strategy', 'Content Optimization']
    },
    {
      id: 3,
      title: 'Create a Content Calendar',
      category: 'content',
      difficulty: 'Beginner',
      duration: '1 week',
      description: 'Develop a comprehensive content strategy and calendar',
      skills: ['Content Planning', 'Editorial Strategy', 'Channel Selection']
    },
    {
      id: 4,
      title: 'Design a PPC Ad Campaign',
      category: 'digital',
      difficulty: 'Intermediate',
      duration: '2 weeks',
      description: 'Create and launch a pay-per-click advertising campaign',
      skills: ['Keyword Research', 'Ad Copywriting', 'Budget Management']
    },
  ];

  const tools = [
    {
      id: 1,
      name: 'Google Analytics',
      category: 'analytics',
      description: 'Web analytics service to track and report website traffic',
      difficulty: 'Intermediate'
    },
    {
      id: 2,
      name: 'Google Ads',
      category: 'advertising',
      description: 'Online advertising platform for pay-per-click campaigns',
      difficulty: 'Intermediate'
    },
    {
      id: 3,
      name: 'Facebook Business Manager',
      category: 'social',
      description: 'Manage your business presence across Facebook and Instagram',
      difficulty: 'Beginner'
    },
    {
      id: 4,
      name: 'SEMrush',
      category: 'seo',
      description: 'All-in-one marketing toolkit for SEO, PPC, and content',
      difficulty: 'Intermediate'
    },
    {
      id: 5,
      name: 'Ahrefs',
      category: 'seo',
      description: 'SEO toolset for backlink analysis, keyword research, and rank tracking',
      difficulty: 'Advanced'
    },
    {
      id: 6,
      name: 'Mailchimp',
      category: 'email',
      description: 'Marketing automation platform and email marketing service',
      difficulty: 'Beginner'
    },
    {
      id: 7,
      name: 'HubSpot',
      category: 'crm',
      description: 'Inbound marketing, sales, and customer service platform',
      difficulty: 'Intermediate'
    },
    {
      id: 8,
      name: 'Hootsuite',
      category: 'social',
      description: 'Social media management platform for scheduling and monitoring',
      difficulty: 'Beginner'
    },
  ];

  const mentors = [
    {
      id: 1,
      name: 'Sarah Johnson',
      expertise: 'Digital Marketing Strategy',
      role: 'Former Head of Marketing at Tech Startup',
      rating: 4.9,
      reviews: 128,
      campaigns: 'Managed campaigns for Nike, Apple, and Spotify',
      avatar: '/avatars/sarah.jpg'
    },
    {
      id: 2,
      name: 'Michael Chen',
      expertise: 'SEO/SEM',
      role: 'SEO Director at Digital Agency',
      rating: 4.8,
      reviews: 96,
      campaigns: 'Increased organic traffic by 300% for e-commerce clients',
      avatar: '/avatars/michael.jpg'
    },
    {
      id: 3,
      name: 'Jessica Williams',
      expertise: 'Social Media Marketing',
      role: 'Social Media Lead at Beauty Brand',
      rating: 4.7,
      reviews: 112,
      campaigns: 'Grew Instagram following from 10K to 500K in 1 year',
      avatar: '/avatars/jessica.jpg'
    },
    {
      id: 4,
      name: 'David Kim',
      expertise: 'Content Marketing',
      role: 'Content Director at Media Company',
      rating: 4.8,
      reviews: 87,
      campaigns: 'Developed viral content strategies for major brands',
      avatar: '/avatars/david.jpg'
    },
  ];

  const successStories = [
    {
      id: 1,
      name: 'Alex Rodriguez',
      role: 'Social Media Manager',
      story: 'After completing the Social Media Marketing course, I landed a job at a top agency and increased client engagement by 200% in just 3 months.',
      before: '25K',
      after: '250K',
      metric: 'Instagram Followers',
      project: 'Fitness Brand Campaign'
    },
    {
      id: 2,
      name: 'Maya Patel',
      role: 'SEO Specialist',
      story: 'The SEO program taught me practical skills that I immediately applied to my business. Organic traffic grew by 300% in 6 months.',
      before: '5K',
      after: '25K',
      metric: 'Monthly Visitors',
      project: 'E-commerce SEO Optimization'
    },
    {
      id: 3,
      name: 'James Wilson',
      role: 'Content Marketer',
      story: 'The content marketing strategies I learned helped me build an audience of 100K+ subscribers and land freelance clients.',
      before: '0',
      after: '100K',
      metric: 'Newsletter Subscribers',
      project: 'Content Strategy Implementation'
    }
  ];

  const trendingSkills = [
    {
      id: 1,
      title: 'Performance Marketing',
      description: 'Focus on measurable results and ROI-driven campaigns',
      demand: 'Very High'
    },
    {
      id: 2,
      title: 'Influencer Marketing',
      description: 'Leverage social media influencers to promote products',
      demand: 'High'
    },
    {
      id: 3,
      title: 'Content Strategy',
      description: 'Plan, create, and distribute valuable content to attract audiences',
      demand: 'High'
    },
    {
      id: 4,
      title: 'Marketing Automation',
      description: 'Use technology to automate marketing tasks and workflows',
      demand: 'High'
    },
    {
      id: 5,
      title: 'Data-Driven Decision Making',
      description: 'Use analytics and data to inform marketing strategies',
      demand: 'Very High'
    },
  ];

  const steps = [
    { id: 1, title: 'Choose Marketing Path', description: 'Select from digital, SEO, social, content, branding, or growth' },
    { id: 2, title: 'Learn & Practice Skills', description: 'Take courses and work with industry-standard tools' },
    { id: 3, title: 'Launch Real Campaigns', description: 'Execute projects with guidance from experts' },
    { id: 4, title: 'Grow Your Career', description: 'Build a portfolio and advance your marketing career' },
  ];

  const caseStudies = [
    {
      id: 1,
      title: 'Nike: Just Do It Campaign',
      description: 'How Nike built a iconic brand through emotional storytelling',
      category: 'Branding'
    },
    {
      id: 2,
      title: 'Apple: Think Different Strategy',
      description: 'Analysis of Apple\'s revolutionary marketing approach',
      category: 'Brand Strategy'
    },
    {
      id: 3,
      title: 'Spotify: Wrapped Campaign',
      description: 'How Spotify created viral personalization marketing',
      category: 'Digital Marketing'
    },
    {
      id: 4,
      title: 'Dollar Shave Club: Viral Launch',
      description: 'The marketing strategy that disrupted the shaving industry',
      category: 'Growth Marketing'
    }
  ];

  const resources = [
    {
      id: 1,
      title: 'Content Calendar Template',
      type: 'Template',
      description: 'Plan and organize your content strategy'
    },
    {
      id: 2,
      title: 'SEO Audit Checklist',
      type: 'Checklist',
      description: 'Comprehensive guide for website optimization'
    },
    {
      id: 3,
      title: 'Social Media Strategy Guide',
      type: 'Guide',
      description: 'Step-by-step approach to social media marketing'
    },
    {
      id: 4,
      title: 'PPC Campaign Setup',
      type: 'Template',
      description: 'Structure for successful paid campaigns'
    }
  ];

  const events = [
    {
      id: 1,
      title: 'SEO Bootcamp Live Workshop',
      date: 'Oct 15, 2023',
      time: '2:00 PM EST',
      description: 'Hands-on SEO optimization techniques with industry experts'
    },
    {
      id: 2,
      title: 'Social Media Trends 2024',
      date: 'Oct 22, 2023',
      time: '3:30 PM EST',
      description: 'Learn about the latest algorithms and strategies'
    },
    {
      id: 3,
      title: 'Brand Storytelling Masterclass',
      date: 'Nov 5, 2023',
      time: '1:00 PM EST',
      description: 'Craft compelling brand narratives that resonate'
    },
    {
      id: 4,
      title: 'Data-Driven Marketing Workshop',
      date: 'Nov 12, 2023',
      time: '4:00 PM EST',
      description: 'Leverage analytics to improve campaign performance'
    }
  ];

  const faqs = [
    {
      id: 1,
      question: 'Do I need a background in business or marketing?',
      answer: 'No prior experience is necessary for our beginner courses. We start with the fundamentals and gradually progress to advanced topics. Many of our successful students came from non-marketing backgrounds.'
    },
    {
      id: 2,
      question: 'How do I get campaign data if I don\'t have a company?',
      answer: 'We provide simulated business scenarios and access to practice accounts for major marketing platforms. You\'ll work with realistic data sets and case studies to practice your skills without needing an actual business.'
    },
    {
      id: 3,
      question: 'Which marketing tool should I start with?',
      answer: 'We recommend starting with Google Analytics and Facebook Business Manager, as they provide fundamental skills that apply to many marketing roles. Our learning paths are designed to introduce tools in a logical progression based on your career goals.'
    },
    {
      id: 4,
      question: 'How long does it take to complete a marketing path?',
      answer: 'Most paths take between 3-9 months depending on your prior experience and the time you can dedicate. Each path is broken down into manageable courses and projects that you can complete at your own pace.'
    },
    {
      id: 5,
      question: 'Will I get a certificate upon completion?',
      answer: 'Yes, you\'ll receive a certificate of completion for each course and path you finish. These certificates can be shared on LinkedIn and added to your resume to showcase your skills to employers.'
    },
  ];

  // Render the marketing page
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-20">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Master the Art of Marketing</h1>
            <p className="text-xl mb-10">
              Learn digital marketing, SEO, social media, and branding strategies from experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition flex items-center justify-center">
                <ChartBarIcon className="w-5 h-5 mr-2" />
                Explore Marketing Paths
              </button>
              <button className="bg-transparent border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition">
                Start Learning
              </button>
              <button className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition">
                Join a Mentor Session
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/20 p-4 rounded-xl backdrop-blur-sm">
                <div className="w-16 h-16 bg-white/30 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <TrendingUpIcon className="w-8 h-8 text-white" />
                </div>
                <p className="text-center text-sm">Analytics Dashboards</p>
              </div>
              <div className="bg-white/20 p-4 rounded-xl backdrop-blur-sm">
                <div className="w-16 h-16 bg-white/30 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <UserGroupIcon className="w-8 h-8 text-white" />
                </div>
                <p className="text-center text-sm">Social Media Campaigns</p>
              </div>
              <div className="bg-white/20 p-4 rounded-xl backdrop-blur-sm">
                <div className="w-16 h-16 bg-white/30 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <BookOpenIcon className="w-8 h-8 text-white" />
                </div>
                <p className="text-center text-sm">Content Strategy</p>
              </div>
              <div className="bg-white/20 p-4 rounded-xl backdrop-blur-sm">
                <div className="w-16 h-16 bg-white/30 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <ChatIcon className="w-8 h-8 text-white" />
                </div>
                <p className="text-center text-sm">Brand Campaigns</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marketing Path Explorer */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">Marketing Career Paths</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Choose your specialization and follow a structured learning path
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {['all', 'digital', 'seo', 'social', 'content', 'branding', 'growth'].map((path) => (
              <button
                key={path}
                onClick={() => setActivePath(path)}
                className={`px-4 py-2 rounded-full ${activePath === path ? 'bg-purple-100 text-purple-600 font-medium' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
              >
                {path === 'all' ? 'All Paths' : marketingPaths.find(p => p.category === path)?.title || path}
              </button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {marketingPaths.map((path) => (
              <div key={path.id} className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-3xl">{path.icon}</span>
                  <div>
                    <h3 className="text-xl font-semibold">{path.title}</h3>
                    <span className={`text-xs px-2 py-1 rounded ${
                      path.demand === 'Very High' ? 'bg-green-100 text-green-700' :
                      path.demand === 'High' ? 'bg-blue-100 text-blue-700' :
                      'bg-yellow-100 text-yellow-700'
                    }`}>
                      {path.demand} Demand
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4">{path.description}</p>
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                  <span className={`px-2 py-1 rounded text-xs ${
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
                <div className="mb-6">
                  <h4 className="text-sm font-medium mb-2">Key Skills:</h4>
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
                <button className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition">
                  Explore Path
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses & Skill Tracks */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">Marketing Courses & Skill Tracks</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Build expertise with structured courses designed by industry experts
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <div key={course.id} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-xs font-medium text-purple-600 bg-purple-100 px-2 py-1 rounded">
                      {course.category.toUpperCase()}
                    </span>
                    <h3 className="text-lg font-semibold mt-2">{course.title}</h3>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded ${
                    course.level === 'Beginner' ? 'bg-green-100 text-green-700' :
                    course.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {course.level}
                  </span>
                </div>
                
                <p className="text-gray-600 text-sm mb-4">{course.description}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                  <span className="flex items-center">
                    <ClockIcon className="w-4 h-4 mr-1" />
                    {course.duration}
                  </span>
                  <div className="flex items-center">
                    <StarIcon className="w-4 h-4 text-yellow-400 mr-1" />
                    <span>{course.rating}</span>
                    <span className="ml-1">({course.students.toLocaleString()})</span>
                  </div>
                </div>
                
                <button className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition">
                  View Course
                </button>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <button className="text-purple-600 font-medium hover:text-purple-800 transition flex items-center justify-center mx-auto">
              View All Courses <ArrowSmRightIcon className="w-5 h-5 ml-1" />
            </button>
          </div>
        </div>
      </section>

      {/* Real-World Campaign Projects */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">Real-World Campaign Projects</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Apply your skills to practical marketing challenges
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <div key={project.id} className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-xs font-medium text-purple-600 bg-purple-100 px-2 py-1 rounded">
                      {project.category.toUpperCase()}
                    </span>
                    <h3 className="text-lg font-semibold mt-2">{project.title}</h3>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded ${
                    project.difficulty === 'Beginner' ? 'bg-green-100 text-green-700' :
                    project.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {project.difficulty}
                  </span>
                </div>
                
                <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                  <span className="flex items-center">
                    <ClockIcon className="w-4 h-4 mr-1" />
                    {project.duration}
                  </span>
                  <span>{project.skills.length} skills</span>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-sm font-medium mb-2">Skills you'll practice:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill, index) => (
                      <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <button className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition">
                  Start Project
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Platforms */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">Marketing Tools & Platforms</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Master the industry-standard tools used by marketing professionals
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tools.map((tool) => (
              <div key={tool.id} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition text-center">
                <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <ChartBarIcon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold mb-2">{tool.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{tool.description}</p>
                <span className={`text-xs px-2 py-1 rounded ${
                  tool.difficulty === 'Beginner' ? 'bg-green-100 text-green-700' :
                  tool.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                  'bg-red-100 text-red-700'
                }`}>
                  {tool.difficulty}
                </span>
                <button className="w-full mt-4 bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition text-sm">
                  Start Learning
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mentors & Marketing Experts */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">Learn from Marketing Experts</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Get guidance from professionals with real industry experience
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                  <span className="inline-block bg-purple-100 text-purple-700 text-xs font-medium px-2 py-1 rounded">
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
                <p className="text-sm text-gray-600 mb-4">Campaigns: {mentor.campaigns}</p>
                <button className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition">
                  Book Session
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories / Campaign Highlights */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">Success Stories</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            See how our students have transformed their careers with marketing skills
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {successStories.map((story) => (
              <div key={story.id} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full mr-4 flex items-center justify-center">
                    <UserGroupIcon className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{story.name}</h3>
                    <p className="text-sm text-gray-500">{story.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-6 italic">"{story.story}"</p>
                <div className="bg-purple-50 p-4 rounded-lg mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Before</span>
                    <span className="text-sm font-medium">After</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-gray-700">{story.before}</span>
                    <ArrowSmRightIcon className="w-6 h-6 text-purple-600" />
                    <span className="text-2xl font-bold text-green-600">{story.after}</span>
                  </div>
                  <p className="text-center text-xs text-gray-500 mt-2">{story.metric}</p>
                </div>
                <div className="text-xs text-gray-500">
                  Project: {story.project}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Marketing Skills */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">Trending Marketing Skills</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            High-demand skills that employers are looking for
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {trendingSkills.map((skill) => (
              <div key={skill.id} className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-center">
                <div className="w-10 h-10 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <TrendingUpIcon className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-sm mb-2">{skill.title}</h3>
                <p className="text-gray-600 text-xs mb-3">{skill.description}</p>
                <span className={`text-xs px-2 py-1 rounded ${
                  skill.demand === 'Very High' ? 'bg-green-100 text-green-700' :
                  'bg-blue-100 text-blue-700'
                }`}>
                  {skill.demand} Demand
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">How Our Marketing Program Works</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            A clear path from beginner to marketing professional
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step) => (
              <div key={step.id} className="text-center">
                <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.id}
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies & Resources */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">Case Studies & Resources</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Learn from successful campaigns and access practical resources
          </p>
          
          <div className="flex border-b border-gray-200 mb-6">
            <button
              className={`py-3 px-6 font-medium ${activeResourceTab === 'case-studies' ? 'border-b-2 border-purple-600 text-purple-600' : 'text-gray-500'}`}
              onClick={() => setActiveResourceTab('case-studies')}
            >
              Case Studies
            </button>
            <button
              className={`py-3 px-6 font-medium ${activeResourceTab === 'resources' ? 'border-b-2 border-purple-600 text-purple-600' : 'text-gray-500'}`}
              onClick={() => setActiveResourceTab('resources')}
            >
              Resources
            </button>
          </div>
          
          {activeResourceTab === 'case-studies' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {caseStudies.map((study) => (
                <div key={study.id} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition">
                  <span className="text-xs font-medium text-purple-600 bg-purple-100 px-2 py-1 rounded">
                    {study.category}
                  </span>
                  <h3 className="text-lg font-semibold mt-2 mb-2">{study.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{study.description}</p>
                  <button className="text-purple-600 hover:text-purple-800 font-medium text-sm">
                    Read Case Study →
                  </button>
                </div>
              ))}
            </div>
          )}
          
          {activeResourceTab === 'resources' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {resources.map((resource) => (
                <div key={resource.id} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition">
                  <span className="text-xs font-medium text-purple-600 bg-purple-100 px-2 py-1 rounded">
                    {resource.type}
                  </span>
                  <h3 className="text-lg font-semibold mt-2 mb-2">{resource.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
                  <button className="text-purple-600 hover:text-purple-800 font-medium text-sm">
                    Download →
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Marketing Events & Webinars */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">Marketing Events & Webinars</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Join live sessions with industry experts
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {events.map((event) => (
              <div key={event.id} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold">{event.title}</h3>
                    <div className="flex items-center text-sm text-gray-500 mt-1">
                      <CalendarIcon className="w-4 h-4 mr-1" />
                      <span>{event.date} at {event.time}</span>
                    </div>
                  </div>
                  <span className="text-xs font-medium text-purple-600 bg-purple-100 px-2 py-1 rounded">
                    Upcoming
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-6">{event.description}</p>
                <button className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition">
                  Register
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community & Collaboration */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">Join Our Marketing Community</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Connect with fellow learners, share projects, and get feedback
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-purple-50 border border-purple-100 rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <UsersIcon className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-2">Discussion Forums</h3>
              <p className="text-gray-600 text-sm mb-4">Ask questions and share knowledge with other marketing students</p>
              <button className="text-purple-600 hover:text-purple-800 font-medium text-sm">
                Join Discussion →
              </button>
            </div>
            
            <div className="bg-purple-50 border border-purple-100 rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <ClipboardListIcon className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-2">Project Feedback</h3>
              <p className="text-gray-600 text-sm mb-4">Get constructive feedback on your campaigns from peers and experts</p>
              <button className="text-purple-600 hover:text-purple-800 font-medium text-sm">
                Share Project →
              </button>
            </div>
            
            <div className="bg-purple-50 border border-purple-100 rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <BriefcaseIcon className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-2">Networking</h3>
              <p className="text-gray-600 text-sm mb-4">Connect with marketing professionals and potential employers</p>
              <button className="text-purple-600 hover:text-purple-800 font-medium text-sm">
                Expand Network →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Find answers to common questions about our marketing programs
          </p>
          
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq) => (
              <div key={faq.id} className="mb-4 border border-gray-200 rounded-lg overflow-hidden">
                <button
                  className="flex justify-between items-center w-full p-6 bg-white text-left font-medium"
                  onClick={() => setOpenAccordion(openAccordion === faq.id ? null : faq.id)}
                >
                  <span>{faq.question}</span>
                  <ChevronDownIcon 
                    className={`w-5 h-5 transition-transform ${openAccordion === faq.id ? 'transform rotate-180' : ''}`}
                  />
                </button>
                
                {openAccordion === faq.id && (
                  <div className="p-6 bg-white border-t border-gray-200">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Start Your Marketing Journey Today</h2>
          <p className="text-xl max-w-2xl mx-auto mb-10">
            Develop in-demand skills and launch your career in marketing
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition">
              Explore Courses
            </button>
            <button className="bg-transparent border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition">
              Try a Campaign Project
            </button>
            <button className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition">
              Book Mentorship
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Marketing;