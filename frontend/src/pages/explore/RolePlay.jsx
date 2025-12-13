import React, { useState } from 'react';
import { 
  PlayIcon,
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
  BadgeCheckIcon,
  StarIcon,
  ExternalLinkIcon
} from '@heroicons/react/outline'; // Using v2 outline icons

const RolePlayPage = () => {
  // State for interactive components
  const [activeRole, setActiveRole] = useState('all');
  const [selectedScenario, setSelectedScenario] = useState(null);
  const [openAccordion, setOpenAccordion] = useState(null);
  const [activeTab, setActiveTab] = useState('instructions');
  const [feedbackScore, setFeedbackScore] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  // Sample data
  const roles = [
    { id: 1, title: 'AI Engineer', icon: '🤖', category: 'ai' },
    { id: 2, title: 'Web Developer', icon: '💻', category: 'programming' },
    { id: 3, title: 'Data Analyst', icon: '📊', category: 'data' },
    { id: 4, title: 'Customer Support', icon: '👨‍💼', category: 'support' },
    { id: 5, title: 'Sales Executive', icon: '📈', category: 'sales' },
    { id: 6, title: 'Project Manager', icon: '📋', category: 'management' },
  ];

  const scenarios = [
    {
      id: 1,
      title: 'Handling Difficult Customer Complaints',
      role: 'Customer Support',
      difficulty: 'Intermediate',
      duration: '20 mins',
      objectives: 'De-escalate tension, identify root cause, provide solution',
      skills: ['Communication', 'Empathy', 'Problem-solving'],
      rating: 4.7,
      completions: 1245
    },
    {
      id: 2,
      title: 'Debugging Production API Issues',
      role: 'Web Developer',
      difficulty: 'Advanced',
      duration: '30 mins',
      objectives: 'Identify API failure points, implement fix, communicate with team',
      skills: ['Technical Analysis', 'Debugging', 'Communication'],
      rating: 4.8,
      completions: 987
    },
    {
      id: 3,
      title: 'Presenting Data Insights to Stakeholders',
      role: 'Data Analyst',
      difficulty: 'Intermediate',
      duration: '25 mins',
      objectives: 'Translate data into business insights, create compelling narrative',
      skills: ['Data Visualization', 'Storytelling', 'Presentation'],
      rating: 4.6,
      completions: 1123
    },
    {
      id: 4,
      title: 'AI Model Ethical Review',
      role: 'AI Engineer',
      difficulty: 'Advanced',
      duration: '35 mins',
      objectives: 'Identify bias in training data, propose mitigation strategies',
      skills: ['Ethical Analysis', 'Technical Knowledge', 'Communication'],
      rating: 4.9,
      completions: 756
    },
    {
      id: 5,
      title: 'Closing Enterprise Deal',
      role: 'Sales Executive',
      difficulty: 'Advanced',
      duration: '40 mins',
      objectives: 'Negotiate terms, address concerns, secure commitment',
      skills: ['Negotiation', 'Persuasion', 'Product Knowledge'],
      rating: 4.7,
      completions: 1342
    },
    {
      id: 6,
      title: 'Project Scope Negotiation',
      role: 'Project Manager',
      difficulty: 'Intermediate',
      duration: '30 mins',
      objectives: 'Balance stakeholder expectations with team capacity',
      skills: ['Negotiation', 'Planning', 'Stakeholder Management'],
      rating: 4.5,
      completions: 876
    },
  ];

  const mentors = [
    {
      id: 1,
      name: 'Maria Rodriguez',
      expertise: 'Customer Experience',
      role: 'Customer Support',
      rating: 4.9,
      reviews: 128,
      avatar: '/avatars/maria.jpg',
      availability: 'Next: Tomorrow'
    },
    {
      id: 2,
      name: 'David Kim',
      expertise: 'Full-Stack Development',
      role: 'Web Developer',
      rating: 4.8,
      reviews: 96,
      avatar: '/avatars/david.jpg',
      availability: 'Next: Today'
    },
    {
      id: 3,
      name: 'Sophie Williams',
      expertise: 'Data Storytelling',
      role: 'Data Analyst',
      rating: 4.7,
      reviews: 112,
      avatar: '/avatars/sophie.jpg',
      availability: 'Next: Monday'
    },
  ];

  const faqs = [
    {
      id: 1,
      question: 'How does the role play scoring system work?',
      answer: 'Our scoring system evaluates your performance based on key metrics relevant to each scenario. For communication-focused roles, we assess clarity, empathy, and professionalism. For technical roles, we evaluate problem-solving approach, efficiency, and correctness of solutions.'
    },
    {
      id: 2,
      question: 'Can I retry a scenario to improve my score?',
      answer: 'Yes, you can retry any scenario as many times as you like. We encourage repeated practice to master skills. Your dashboard will track your progress and show improvement over time.'
    },
    {
      id: 3,
      question: 'How do I get mentor feedback on my role play?',
      answer: 'After completing a scenario, you can choose to submit your performance for mentor review. You\'ll receive detailed feedback within 24 hours. You can also book live sessions with mentors for real-time coaching.'
    },
  ];

  const steps = [
    { id: 1, title: 'Select Role & Scenario', description: 'Choose from various roles and realistic scenarios' },
    { id: 2, title: 'Practice in Simulation', description: 'Interact with our AI-powered simulated environment' },
    { id: 3, title: 'Get Instant Feedback', description: 'Receive scores and detailed improvement suggestions' },
    { id: 4, title: 'Apply in Real World', description: 'Use your polished skills in actual work situations' },
  ];

  // Filter scenarios based on active role and search query
  const filteredScenarios = scenarios.filter(scenario => {
    const matchesRole = activeRole === 'all' || 
                       roles.find(r => r.title === scenario.role)?.category === activeRole;
    const matchesSearch = scenario.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         scenario.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         scenario.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesRole && matchesSearch;
  });

  // Render the interactive role play page
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-20">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Learn by Doing: Practice with Role Play</h1>
            <p className="text-xl mb-10">
              Real-world scenarios, guided simulations, and hands-on projects to boost your skills.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition flex items-center justify-center">
                <PlayIcon className="w-5 h-5 mr-2" />
                Start a Role Play
              </button>
              <button className="bg-transparent border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition">
                Explore Scenarios
              </button>
              <button className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition">
                Schedule Mentorship
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/20 p-4 rounded-xl backdrop-blur-sm">
                <div className="w-16 h-16 bg-white/30 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <ChatIcon className="w-8 h-8 text-white" />
                </div>
                <p className="text-center text-sm">Customer Interaction Simulations</p>
              </div>
              <div className="bg-white/20 p-4 rounded-xl backdrop-blur-sm">
                <div className="w-16 h-16 bg-white/30 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <BookOpenIcon className="w-8 h-8 text-white" />
                </div>
                <p className="text-center text-sm">Coding Playgrounds</p>
              </div>
              <div className="bg-white/20 p-4 rounded-xl backdrop-blur-sm">
                <div className="w-16 h-16 bg-white/30 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <UserGroupIcon className="w-8 h-8 text-white" />
                </div>
                <p className="text-center text-sm">Business Meeting Role Plays</p>
              </div>
              <div className="bg-white/20 p-4 rounded-xl backdrop-blur-sm">
                <div className="w-16 h-16 bg-white/30 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <AcademicCapIcon className="w-8 h-8 text-white" />
                </div>
                <p className="text-center text-sm">AI-Powered Simulations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Role Play Explorer */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">Role Play Scenarios</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Practice with realistic scenarios tailored to your target role
          </p>
          
          <div className="max-w-2xl mx-auto mb-10">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search scenarios..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full p-4 pl-12 pr-6 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
              <SearchIcon className="w-6 h-6 text-gray-400 absolute left-4 top-4" />
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {['all', 'ai', 'programming', 'data', 'support', 'sales', 'management'].map((role) => (
              <button
                key={role}
                onClick={() => setActiveRole(role)}
                className={`px-4 py-2 rounded-full ${activeRole === role ? 'bg-indigo-100 text-indigo-600 font-medium' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
              >
                {role === 'all' ? 'All Roles' : roles.find(r => r.category === role)?.title || role}
              </button>
            ))}
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
              <option>Under 15 mins</option>
              <option>15-30 mins</option>
              <option>30+ mins</option>
            </select>
            <select className="border border-gray-300 rounded-lg px-4 py-2">
              <option>Sort by: Popularity</option>
              <option>Newest</option>
              <option>Rating</option>
            </select>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {filteredScenarios.map((scenario) => (
              <div key={scenario.id} className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">{roles.find(r => r.title === scenario.role)?.icon}</span>
                  <span className="text-sm font-medium text-gray-500">{scenario.role}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{scenario.title}</h3>
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                  <span className={`px-2 py-1 rounded ${
                    scenario.difficulty === 'Beginner' ? 'bg-green-100 text-green-700' :
                    scenario.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {scenario.difficulty}
                  </span>
                  <span className="flex items-center">
                    <ClockIcon className="w-4 h-4 mr-1" />
                    {scenario.duration}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm mb-4">
                  <div className="flex items-center">
                    <StarIcon className="w-4 h-4 text-yellow-400 mr-1" />
                    <span>{scenario.rating}</span>
                    <span className="text-gray-500 ml-1">({scenario.completions})</span>
                  </div>
                  <div className="text-gray-500">{scenario.skills.length} skills</div>
                </div>
                <button 
                  onClick={() => setSelectedScenario(scenario)}
                  className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
                >
                  Start Scenario
                </button>
              </div>
            ))}
            
            {filteredScenarios.length === 0 && (
              <div className="col-span-full text-center py-12">
                <SearchIcon className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500">No scenarios found matching your criteria</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Scenario Details */}
      {selectedScenario && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <button 
                  onClick={() => setSelectedScenario(null)}
                  className="text-indigo-600 hover:text-indigo-800 font-medium mb-4 inline-flex items-center"
                >
                  ← Back to scenarios
                </button>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">{roles.find(r => r.title === selectedScenario.role)?.icon}</span>
                  <span className="text-sm font-medium text-gray-500">{selectedScenario.role}</span>
                </div>
                <h2 className="text-2xl font-bold mb-2">{selectedScenario.title}</h2>
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
                  <span className={`px-2 py-1 rounded ${
                    selectedScenario.difficulty === 'Beginner' ? 'bg-green-100 text-green-700' :
                    selectedScenario.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {selectedScenario.difficulty}
                  </span>
                  <span className="flex items-center">
                    <ClockIcon className="w-4 h-4 mr-1" />
                    {selectedScenario.duration}
                  </span>
                  <div className="flex items-center">
                    <StarIcon className="w-4 h-4 text-yellow-400 mr-1" />
                    <span>{selectedScenario.rating}</span>
                  </div>
                </div>
                
                <div className="flex border-b border-gray-200 mb-6">
                  <button
                    className={`py-3 px-6 font-medium ${activeTab === 'instructions' ? 'border-b-2 border-indigo-600 text-indigo-600' : 'text-gray-500'}`}
                    onClick={() => setActiveTab('instructions')}
                  >
                    Instructions
                  </button>
                  <button
                    className={`py-3 px-6 font-medium ${activeTab === 'skills' ? 'border-b-2 border-indigo-600 text-indigo-600' : 'text-gray-500'}`}
                    onClick={() => setActiveTab('skills')}
                  >
                    Skills Applied
                  </button>
                  <button
                    className={`py-3 px-6 font-medium ${activeTab === 'tips' ? 'border-b-2 border-indigo-600 text-indigo-600' : 'text-gray-500'}`}
                    onClick={() => setActiveTab('tips')}
                  >
                    Tips & Resources
                  </button>
                </div>
                
                {activeTab === 'instructions' && (
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Scenario Overview</h3>
                    <p className="text-gray-600 mb-6">
                      In this scenario, you'll be facing a realistic situation that {selectedScenario.role}s often encounter. 
                      Your goal is to {selectedScenario.objectives.toLowerCase()}.
                    </p>
                    
                    <h4 className="font-medium mb-2">Objectives:</h4>
                    <ul className="list-disc list-inside text-gray-600 mb-6">
                      {selectedScenario.objectives.split(', ').map((obj, index) => (
                        <li key={index}>{obj}</li>
                      ))}
                    </ul>
                    
                    <h4 className="font-medium mb-2">Success Metrics:</h4>
                    <ul className="text-gray-600 mb-6 space-y-1">
                      <li className="flex items-center"><CheckCircleIcon className="w-4 h-4 text-green-500 mr-2" /> Effective communication</li>
                      <li className="flex items-center"><CheckCircleIcon className="w-4 h-4 text-green-500 mr-2" /> Problem-solving approach</li>
                      <li className="flex items-center"><CheckCircleIcon className="w-4 h-4 text-green-500 mr-2" /> Professionalism and tone</li>
                      <li className="flex items-center"><CheckCircleIcon className="w-4 h-4 text-green-500 mr-2" /> Achievement of scenario objectives</li>
                    </ul>
                    
                    <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition">
                      Start Role Play
                    </button>
                  </div>
                )}
                
                {activeTab === 'skills' && (
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Skills You'll Practice</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      {selectedScenario.skills.map((skill, index) => (
                        <div key={index} className="border border-gray-200 rounded-lg p-4">
                          <h4 className="font-medium mb-2">{skill}</h4>
                          <p className="text-sm text-gray-600">
                            {skill === 'Communication' && 'Express ideas clearly, listen actively, and adapt to your audience.'}
                            {skill === 'Problem-solving' && 'Analyze issues systematically and develop effective solutions.'}
                            {skill === 'Technical Analysis' && 'Evaluate technical requirements and identify optimal approaches.'}
                            {skill === 'Negotiation' && 'Find mutually beneficial solutions through persuasive dialogue.'}
                            {skill === 'Empathy' && 'Understand and acknowledge others perspectives and emotions.'}
                            {skill === 'Presentation' && 'Structure information logically and deliver it compellingly.'}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {activeTab === 'tips' && (
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Preparation Tips</h3>
                    <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                      <li>Read the scenario carefully before starting</li>
                      <li>Think about real-world examples you've encountered</li>
                      <li>Consider multiple approaches before committing to one</li>
                      <li>Remember that there's often more than one right approach</li>
                      <li>Don't rush - take time to think through your responses</li>
                    </ul>
                    
                    <h3 className="text-lg font-semibold mb-4">Related Resources</h3>
                    <div className="space-y-2">
                      <a href="#" className="flex items-center text-indigo-600 hover:text-indigo-800">
                        <BookOpenIcon className="w-4 h-4 mr-2" />
                        Communication Best Practices Guide
                      </a>
                      <a href="#" className="flex items-center text-indigo-600 hover:text-indigo-800">
                        <BookOpenIcon className="w-4 h-4 mr-2" />
                        {selectedScenario.role} Handbook
                      </a>
                      <a href="#" className="flex items-center text-indigo-600 hover:text-indigo-800">
                        <BookOpenIcon className="w-4 h-4 mr-2" />
                        Video: Expert Demonstration
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* How It Works Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">How Role Play Practice Works</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Our proven process to help you build confidence and master skills through practice
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={step.id} className="text-center">
                <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
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
          <h2 className="text-3xl font-bold text-center mb-4">Learn from Expert Mentors</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Get personalized guidance from professionals who've mastered their roles
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
                    <p className="text-sm text-gray-500">{mentor.expertise}</p>
                  </div>
                </div>
                <div className="mb-4">
                  <span className="inline-block bg-indigo-100 text-indigo-700 text-xs font-medium px-2 py-1 rounded">
                    {mentor.role}
                  </span>
                </div>
                <div className="flex items-center mb-4">
                  <div className="flex items-center">
                    <StarIcon className="w-4 h-4 text-yellow-400 mr-1" />
                    <span>{mentor.rating}</span>
                    <span className="text-gray-500 ml-1">({mentor.reviews} reviews)</span>
                  </div>
                </div>
                <div className="text-sm text-gray-500 mb-6">{mentor.availability}</div>
                <button className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition">
                  Book Session
                </button>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <button className="text-indigo-600 font-medium hover:text-indigo-800 transition">
              View All Mentors →
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Find answers to common questions about role play practice
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
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Start Practicing Today</h2>
          <p className="text-xl max-w-2xl mx-auto mb-10">
            Build confidence and master skills through realistic role play scenarios
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition">
              Explore Scenarios
            </button>
            <button className="bg-transparent border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition">
              Book Mentorship
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RolePlayPage;