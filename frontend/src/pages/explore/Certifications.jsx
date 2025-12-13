import React, { useState } from 'react';
import { 
  SearchIcon, 
  ClockIcon, 
  AcademicCapIcon, 
  UserGroupIcon, 
  ChartBarIcon, 
  BookOpenIcon, 
  ChatIcon, 
  CalendarIcon, 
  ChevronDownIcon,
  PlayIcon,
  CheckCircleIcon,
  ExternalLinkIcon,
  TrendingUpIcon,
  LightBulbIcon,
  ShieldCheckIcon,
  CloudIcon,
  CodeIcon,
  DatabaseIcon
} from '@heroicons/react/outline'; // Using v2 outline icons

 const certifications = [
    { id: 1, title: 'AWS Solutions Architect', category: 'cloud', difficulty: 'Advanced', duration: '3 months', provider: 'AWS' },
    { id: 2, title: 'Google Cloud Professional', category: 'cloud', difficulty: 'Advanced', duration: '3 months', provider: 'Google' },
    { id: 3, title: 'Azure Administrator', category: 'cloud', difficulty: 'Intermediate', duration: '2 months', provider: 'Microsoft' },
    { id: 4, title: 'Certified Ethical Hacker', category: 'cybersecurity', difficulty: 'Intermediate', duration: '2 months', provider: 'EC-Council' },
    { id: 5, title: 'CompTIA Security+', category: 'cybersecurity', difficulty: 'Beginner', duration: '2 months', provider: 'CompTIA' },
    { id: 6, title: 'TensorFlow Developer', category: 'ai', difficulty: 'Intermediate', duration: '3 months', provider: 'Google' },
    { id: 7, title: 'PMP Certification', category: 'project-management', difficulty: 'Advanced', duration: '4 months', provider: 'PMI' },
  ];

const Certifications = () => {
  // State for various interactive components
  const [activeTab, setActiveTab] = useState('all');
  const [openAccordion, setOpenAccordion] = useState(null);
  const [selectedCert, setSelectedCert] = useState(certifications[0]); // Default to first cert
  const [searchQuery, setSearchQuery] = useState('');

  // Sample data - in a real app this would come from an API
 

  const trendingSkills = [
    { name: 'Cloud Security', growth: 42, icon: ShieldCheckIcon },
    { name: 'Machine Learning', growth: 38, icon: LightBulbIcon },
    { name: 'DevOps', growth: 35, icon: CloudIcon },
    { name: 'Python Programming', growth: 32, icon: CodeIcon },
    { name: 'Data Engineering', growth: 28, icon: DatabaseIcon },
  ];

  const mentors = [
    { id: 1, name: 'Sarah Johnson', expertise: 'Cloud Architecture', certifications: ['AWS Solutions Architect', 'Google Cloud Professional'], rating: 4.9, reviews: 128, avatar: '/avatars/sarah.jpg' },
    { id: 2, name: 'Michael Chen', expertise: 'Cybersecurity', certifications: ['CISSP', 'CEH'], rating: 4.8, reviews: 96, avatar: '/avatars/michael.jpg' },
    { id: 3, name: 'Jessica Williams', expertise: 'Data Science', certifications: ['TensorFlow Developer', 'AWS Data Analytics'], rating: 4.7, reviews: 112, avatar: '/avatars/jessica.jpg' },
  ];

  const faqs = [
    { id: 1, question: 'How long does it typically take to prepare for a certification?', answer: 'Preparation time varies based on the certification difficulty and your prior knowledge. Beginner certifications typically take 1-2 months, intermediate ones 2-3 months, and advanced certifications 3-6 months of dedicated study.' },
    { id: 2, question: 'Are practice tests similar to the actual exams?', answer: 'Our practice tests are designed to closely mimic the format, difficulty, and topic distribution of the actual certification exams. We continuously update them based on learner feedback and exam changes.' },
    { id: 3, question: 'Can I switch mentors if needed?', answer: 'Yes, you can request a mentor change at any time if you feel the pairing isn\'t working optimally for your learning style. We want to ensure you have the best possible preparation experience.' },
  ];

  // Filter certifications based on active tab and search query
  const filteredCertifications = certifications.filter(cert => {
    const matchesCategory = activeTab === 'all' || cert.category === activeTab;
    const matchesSearch = cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         cert.provider.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Ace Your Certification Exams</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Master skills, practice tests, and mentorship to pass certification with confidence.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
              Explore Certifications
            </button>
            <button className="bg-transparent border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition">
              Join Mentorship
            </button>
            <button className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition">
              Schedule Consultation
            </button>
          </div>
          <div className="mt-16 flex justify-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="bg-white/20 p-4 rounded-xl backdrop-blur-sm">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-white/30 rounded-lg mx-auto mb-3"></div>
                  <div className="h-2 bg-white/40 rounded-full">
                    <div className="h-full bg-white rounded-full" style={{ width: `${75 - item * 10}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trending Skills Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">Trending Skills in 2023</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            High-demand skills with the fastest growth in certification interest
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {trendingSkills.map((skill, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-md transition">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <skill.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">{skill.name}</h3>
                <div className="flex items-center justify-center text-green-600">
                  <TrendingUpIcon className="w-4 h-4 mr-1" />
                  <span>+{skill.growth}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certification Explorer */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Find Your Certification Path</h2>
          
          <div className="max-w-2xl mx-auto mb-10">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search certifications..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full p-4 pl-12 pr-6 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <SearchIcon className="w-6 h-6 text-gray-400 absolute left-4 top-4" />
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {['all', 'cloud', 'ai', 'cybersecurity', 'programming', 'data-science', 'project-management'].map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`px-4 py-2 rounded-full ${activeTab === category ? 'bg-blue-100 text-blue-600 font-medium' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
              >
                {category === 'all' ? 'All' : category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
              </button>
            ))}
          </div>
          
          <div className="flex flex-wrap gap-4 mb-6 justify-center">
            <select className="border border-gray-300 rounded-lg px-4 py-2">
              <option>Difficulty: All</option>
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>
            <select className="border border-gray-300 rounded-lg px-4 py-2">
              <option>Provider: All</option>
              <option>AWS</option>
              <option>Google</option>
              <option>Microsoft</option>
              <option>CompTIA</option>
            </select>
            <select className="border border-gray-300 rounded-lg px-4 py-2">
              <option>Duration: Any</option>
              <option>1-2 months</option>
              <option>2-3 months</option>
              <option>3-6 months</option>
            </select>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {filteredCertifications.map((cert) => (
              <div key={cert.id} className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <AcademicCapIcon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                  <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded">{cert.provider}</span>
                  <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded">{cert.difficulty}</span>
                </div>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <ClockIcon className="w-4 h-4 mr-1" />
                  <span>{cert.duration}</span>
                </div>
                <button 
                  onClick={() => setSelectedCert(cert)}
                  className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  Explore Path
                </button>
              </div>
            ))}
            
            {filteredCertifications.length === 0 && (
              <div className="col-span-full text-center py-12">
                <SearchIcon className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500">No certifications found matching your criteria</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Exam Roadmaps */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">Exam Preparation Roadmaps</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Step-by-step paths to efficiently prepare for your certification exams
          </p>
          
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/4">
                <div className="sticky top-24">
                  <h3 className="font-semibold text-lg mb-4">Certification Tracks</h3>
                  <ul className="space-y-2">
                    {certifications.slice(0, 5).map((cert) => (
                      <li 
                        key={cert.id} 
                        className={`py-2 px-4 rounded-lg cursor-pointer ${selectedCert?.id === cert.id ? 'bg-blue-100 text-blue-700 font-medium' : 'hover:bg-gray-100'}`}
                        onClick={() => setSelectedCert(cert)}
                      >
                        {cert.title}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="md:w-3/4 bg-white p-6 rounded-xl shadow-sm">
                {selectedCert ? (
                  <>
                    <h3 className="text-2xl font-semibold mb-6">{selectedCert.title} Roadmap</h3>
                    
                    <div className="space-y-8">
                      <div className="flex">
                        <div className="flex flex-col items-center mr-4">
                          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white">1</div>
                          <div className="w-0.5 h-16 bg-blue-300 mt-2"></div>
                        </div>
                        <div className="pb-8">
                          <h4 className="text-lg font-medium mb-2">Foundation Knowledge</h4>
                          <p className="text-gray-600">Learn core concepts and terminology</p>
                          <ul className="mt-2 space-y-1">
                            <li className="flex items-center"><CheckCircleIcon className="w-4 h-4 text-green-500 mr-2" /> Basic cloud computing concepts</li>
                            <li className="flex items-center"><CheckCircleIcon className="w-4 h-4 text-green-500 mr-2" /> Networking fundamentals</li>
                            <li className="flex items-center"><CheckCircleIcon className="w-4 h-4 text-green-500 mr-2" /> Security principles</li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="flex">
                        <div className="flex flex-col items-center mr-4">
                          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white">2</div>
                          <div className="w-0.5 h-16 bg-blue-300 mt-2"></div>
                        </div>
                        <div className="pb-8">
                          <h4 className="text-lg font-medium mb-2">Advanced Concepts</h4>
                          <p className="text-gray-600">Dive deeper into specific services and architectures</p>
                          <ul className="mt-2 space-y-1">
                            <li className="flex items-center"><CheckCircleIcon className="w-4 h-4 text-green-500 mr-2" /> Advanced storage solutions</li>
                            <li className="flex items-center"><CheckCircleIcon className="w-4 h-4 text-green-500 mr-2" /> High availability design</li>
                            <li className="flex items-center"><CheckCircleIcon className="w-4 h-4 text-green-500 mr-2" /> Cost optimization strategies</li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="flex">
                        <div className="flex flex-col items-center mr-4">
                          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white">3</div>
                          <div className="w-0.5 h-16 bg-blue-300 mt-2"></div>
                        </div>
                        <div className="pb-8">
                          <h4 className="text-lg font-medium mb-2">Hands-on Practice</h4>
                          <p className="text-gray-600">Build real-world projects and scenarios</p>
                          <ul className="mt-2 space-y-1">
                            <li className="flex items-center"><CheckCircleIcon className="w-4 h-4 text-green-500 mr-2" /> Deploy a three-tier web application</li>
                            <li className="flex items-center"><CheckCircleIcon className="w-4 h-4 text-green-500 mr-2" /> Implement disaster recovery</li>
                            <li className="flex items-center"><CheckCircleIcon className="w-4 h-4 text-green-500 mr-2" /> Migrate on-premises workload</li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="flex">
                        <div className="flex flex-col items-center mr-4">
                          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white">4</div>
                        </div>
                        <div>
                          <h4 className="text-lg font-medium mb-2">Exam Preparation</h4>
                          <p className="text-gray-600">Practice tests and exam strategies</p>
                          <ul className="mt-2 space-y-1">
                            <li className="flex items-center"><CheckCircleIcon className="w-4 h-4 text-green-500 mr-2" /> Take 3+ full practice exams</li>
                            <li className="flex items-center"><CheckCircleIcon className="w-4 h-4 text-green-500 mr-2" /> Review exam question patterns</li>
                            <li className="flex items-center"><CheckCircleIcon className="w-4 h-4 text-green-500 mr-2" /> Time management strategies</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="text-center py-12">
                    <AcademicCapIcon className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500">Select a certification to view its preparation roadmap</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Tests & Quizzes */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">Practice Tests & Quizzes</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Simulate real exam conditions with our timed practice tests
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-semibold text-lg">AWS Solutions Architect Practice Test {item}</h3>
                    <p className="text-sm text-gray-500">65 questions • 180 minutes</p>
                  </div>
                  <div className="bg-blue-100 text-blue-700 text-xs font-medium px-2 py-1 rounded">
                    {item % 2 === 0 ? 'Medium' : 'Advanced'}
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="flex justify-between text-sm text-gray-500 mb-1">
                    <span>Your best score: {75 - item * 5}%</span>
                    <span>Passing: 72%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div 
                      className="h-full bg-green-500 rounded-full" 
                      style={{ width: `${75 - item * 5}%` }}
                    ></div>
                  </div>
                </div>
                
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition flex items-center justify-center">
                  <PlayIcon className="w-5 h-5 mr-2" />
                  Start Test
                </button>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <button className="text-blue-600 font-medium hover:text-blue-800 transition">
              View All Practice Tests →
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Find answers to common questions about certification preparation
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
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Start Your Certification Journey Today</h2>
          <p className="text-xl max-w-2xl mx-auto mb-10">
            Join thousands of learners who have successfully certified with our guidance
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
              Explore Certifications
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

export default Certifications;