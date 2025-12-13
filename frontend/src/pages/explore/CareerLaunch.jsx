import React, { useState } from 'react';
import {
  ChevronDownIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  ChartBarIcon,
  UserGroupIcon,
  BookOpenIcon,
  ChatIcon,
  CalendarIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  ExternalLinkIcon
} from '@heroicons/react/outline';

const CareerLaunch = () => {
  // State for interactive components
  const [selectedRole, setSelectedRole] = useState('');
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [expandedFaq, setExpandedFaq] = useState(null);

  // Sample data (would typically come from API/database)
  const careerRoles = ['Data Scientist', 'Web Developer', 'UI/UX Designer', 'DevOps Engineer', 'Product Manager'];
  const testimonials = [
    { name: 'Sarah Johnson', role: 'Data Scientist', location: 'New York', text: 'This platform helped me transition from marketing to data science in just 9 months. The mentorship program was invaluable!' },
    { name: 'Michael Chen', role: 'Full Stack Developer', location: 'Toronto', text: 'As a self-taught developer, the roadmap guidance and project opportunities gave me the practical experience I needed to land my first job.' },
    { name: 'Emma Rodriguez', role: 'UX Designer', location: 'London', text: 'The community support and curated learning path helped me build a portfolio that impressed employers and doubled my salary.' }
  ];
  const trendingSkills = [
    { name: 'Machine Learning', description: 'Build AI systems that learn from data' },
    { name: 'React Development', description: 'Create modern web applications' },
    { name: 'Cloud Architecture', description: 'Design scalable cloud infrastructure' },
    { name: 'UX Research', description: 'Understand user needs and behaviors' }
  ];
  const faqs = [
    { question: 'How long does it take to transition to a new career?', answer: 'Most students land a new job within 6-12 months, depending on the chosen field and time commitment.' },
    { question: 'Do I need prior experience?', answer: 'No! Our programs are designed for complete beginners, with personalized learning paths based on your background.' },
    { question: 'How does the mentorship program work?', answer: 'You\'ll be matched with an experienced professional who provides guidance, code reviews, and career advice through regular sessions.' }
  ];

  // Toggle FAQ expansion
  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20 px-4">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Launch Your New Career Today</h1>
            <p className="text-xl mb-8">Gain in-demand skills, receive expert mentorship, and access global opportunities in tech's fastest-growing fields.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition flex items-center justify-center">
                Explore Careers <ArrowRightIcon className="ml-2 h-5 w-5" />
              </button>
              <button className="bg-transparent border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition">
                Join as Mentor
              </button>
              <button className="bg-blue-800 px-6 py-3 rounded-lg font-semibold hover:bg-blue-900 transition">
                Schedule Consultation
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="bg-white/20 rounded-xl p-2 backdrop-blur-sm">
              <div className="bg-gray-800 h-64 w-full rounded-lg flex items-center justify-center">
                <span className="text-white">Professional Career Image</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Explorer */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Find Your Dream Career Path</h2>
          
          <div className="bg-white rounded-xl shadow-lg p-6 mb-12">
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
                      <option key={role} value={role}>{role}</option>
                    ))}
                  </select>
                  <ChevronDownIcon className="absolute right-3 top-3.5 h-5 w-5 text-gray-400" />
                </div>
              </div>
              
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">Filter by Industry</label>
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option>All Industries</option>
                  <option>Technology</option>
                  <option>Finance</option>
                  <option>Healthcare</option>
                  <option>E-commerce</option>
                </select>
              </div>
              
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">Work Preference</label>
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option>Any</option>
                  <option>Remote</option>
                  <option>On-site</option>
                  <option>Hybrid</option>
                </select>
              </div>
            </div>
            
            {selectedRole && (
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Career Path: {selectedRole}</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  {['Entry', 'Intermediate', 'Advanced', 'Expert'].map((level, index) => (
                    <div key={level} className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-500">
                      <h4 className="font-medium mb-2">{level} Level</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Salary: ${(60000 + index * 20000).toLocaleString()}</li>
                        <li>• Skills: {index + 3} key competencies</li>
                        <li>• Timeline: {index * 6 + 6} months</li>
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Salary Insights */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-4">Salary Insights by Role & Experience</h2>
          <p className="text-gray-600 text-center mb-12">Compare compensation across different career stages and locations</p>
          
          <div className="bg-gray-50 rounded-xl p-6 shadow-lg">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold">Web Developer Salaries</h3>
              <button className="text-blue-600 font-medium flex items-center">
                See salary trends <ExternalLinkIcon className="ml-1 h-4 w-4" />
              </button>
            </div>
            
            <div className="h-64 flex items-end space-x-4 justify-center mb-8">
              {[
                { level: 'Junior', salary: 65000, color: 'bg-blue-400' },
                { level: 'Mid', salary: 95000, color: 'bg-blue-500' },
                { level: 'Senior', salary: 125000, color: 'bg-blue-600' },
                { level: 'Lead', salary: 155000, color: 'bg-blue-700' }
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="text-sm mb-2">${(item.salary/1000).toFixed(0)}K</div>
                  <div 
                    className={`${item.color} w-16 rounded-t-lg transition-all hover:opacity-90`}
                    style={{ height: `${(item.salary / 155000) * 200}px` }}
                  ></div>
                  <div className="text-sm mt-2">{item.level}</div>
                </div>
              ))}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-medium mb-2">By Location</h4>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>San Francisco</span>
                    <span className="font-medium">$145K</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>New York</span>
                    <span className="font-medium">$135K</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Remote US</span>
                    <span className="font-medium">$120K</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>London</span>
                    <span className="font-medium">£75K</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-medium mb-2">By Specialization</h4>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Frontend</span>
                    <span className="font-medium">$115K</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Backend</span>
                    <span className="font-medium">$125K</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Full Stack</span>
                    <span className="font-medium">$130K</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>DevOps</span>
                    <span className="font-medium">$140K</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-medium mb-2">Benefits & Perks</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2" />
                    <span>Flexible work (92%)</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2" />
                    <span>Learning budget (85%)</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2" />
                    <span>Health insurance (96%)</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2" />
                    <span>Stock options (78%)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Roadmaps */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-4">Success Roadmaps</h2>
          <p className="text-gray-600 text-center mb-12">Step-by-step guides to reach your career goals</p>
          
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex overflow-x-auto pb-4 scrollbar-hide">
              {['Data Analysis', 'Web Development', 'UX Design', 'Cloud Engineering'].map((path, index) => (
                <button 
                  key={index}
                  className={`px-6 py-2 mr-4 rounded-full whitespace-nowrap ${index === 0 ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                >
                  {path}
                </button>
              ))}
            </div>
            
            <div className="mt-8 border-l-2 border-blue-200 pl-6 ml-3 relative">
              {[
                { title: 'Foundation Skills', duration: '1-2 months', skills: 'Basic programming, Data literacy, Problem-solving' },
                { title: 'Core Competencies', duration: '3-4 months', skills: 'Specialized tools, Intermediate concepts, Mini-projects' },
                { title: 'Portfolio Development', duration: '2-3 months', skills: 'Real-world projects, GitHub profile, Case studies' },
                { title: 'Job Preparation', duration: '1 month', skills: 'Interview practice, Resume building, Networking' }
              ].map((step, index) => (
                <div key={index} className="mb-10 relative">
                  <div className="absolute -left-9 mt-1.5 bg-blue-500 rounded-full p-1.5 border-4 border-white"></div>
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <div className="text-sm text-gray-500 mt-1">{step.duration}</div>
                  <div className="mt-2 bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-medium text-sm mb-1">Key Skills & Activities:</h4>
                    <p className="text-sm">{step.skills}</p>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Recommended Courses</span>
                    <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Projects</span>
                    <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Certifications</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-4">Success Stories</h2>
          <p className="text-gray-600 text-center mb-12">Hear from people who transformed their careers</p>
          
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className={`bg-gray-50 p-6 rounded-xl transition-all duration-300 ${activeTestimonial === index ? 'ring-2 ring-blue-500 transform scale-105' : 'opacity-90 hover:opacity-100'}`}
                  onMouseEnter={() => setActiveTestimonial(index)}
                >
                  <div className="flex items-center mb-4">
                    <div className="h-12 w-12 bg-blue-200 rounded-full flex items-center justify-center text-blue-800 font-bold">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold">{testimonial.name}</h3>
                      <p className="text-sm text-gray-600">{testimonial.role} • {testimonial.location}</p>
                    </div>
                  </div>
                  <p className="text-gray-700">"{testimonial.text}"</p>
                </div>
              ))}
            </div>
            
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`h-3 w-3 rounded-full ${activeTestimonial === index ? 'bg-blue-600' : 'bg-gray-300'}`}
                  onClick={() => setActiveTestimonial(index)}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trending Skills Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-4">Trending Skills in Tech</h2>
          <p className="text-gray-600 text-center mb-12">High-demand skills that employers are looking for</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trendingSkills.map((skill, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <BookOpenIcon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{skill.name}</h3>
                <p className="text-gray-600 text-sm">{skill.description}</p>
                <button className="mt-4 text-blue-600 font-medium text-sm flex items-center">
                  Explore path <ArrowRightIcon className="ml-1 h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 text-center mb-12">Everything you need to know about career transitioning</p>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  className="w-full p-4 text-left font-medium flex justify-between items-center bg-gray-50 hover:bg-gray-100"
                  onClick={() => toggleFaq(index)}
                >
                  {faq.question}
                  <ChevronDownIcon 
                    className={`h-5 w-5 transition-transform ${expandedFaq === index ? 'transform rotate-180' : ''}`} 
                  />
                </button>
                {expandedFaq === index && (
                  <div className="p-4 bg-white">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Your New Career Today</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">Join thousands of students who have transformed their careers with our guided paths and mentorship programs.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition">
              Create Free Account
            </button>
            <button className="bg-transparent border-2 border-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-700 transition">
              Schedule Consultation
            </button>
          </div>
          <p className="mt-6 text-blue-100">No credit card required • 7-day free trial • Cancel anytime</p>
        </div>
      </section>
    </div>
  );
};

export default CareerLaunch;