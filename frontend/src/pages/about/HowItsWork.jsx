import React, { useState } from 'react';
import { 
  FaUserGraduate, FaChalkboardTeacher, FaBriefcase, 
  FaSearch, FaBookOpen, FaComments, FaAward, FaRocket,
  FaCheckCircle, FaMoneyBillWave, FaUserTie, FaHandshake,
  FaStar, FaArrowRight, FaPlayCircle
} from 'react-icons/fa';

const HowItsWorks = () => {
  const [activeRole, setActiveRole] = useState('students');

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">How It Works</h1>
          <p className="text-xl text-center max-w-3xl mx-auto mb-8">
            Whether you're here to learn, teach, or hire — we make the journey simple and effective.
          </p>
          <div className="flex justify-center space-x-8 mt-10">
            <div className="flex flex-col items-center">
              <div className="bg-white/20 p-4 rounded-full mb-2">
                <FaUserGraduate className="text-2xl" />
              </div>
              <span className="font-medium">Student</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-white/20 p-4 rounded-full mb-2">
                <FaChalkboardTeacher className="text-2xl" />
              </div>
              <span className="font-medium">Mentor</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-white/20 p-4 rounded-full mb-2">
                <FaBriefcase className="text-2xl" />
              </div>
              <span className="font-medium">Employer</span>
            </div>
          </div>
        </div>
      </section>

      {/* Choose Your Role */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Choose Your Role</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div 
              className={`p-6 rounded-xl shadow-md cursor-pointer transition-all duration-300 ${
                activeRole === 'students' 
                  ? 'bg-blue-600 text-white transform -translate-y-2 shadow-lg' 
                  : 'bg-white hover:shadow-lg'
              }`}
              onClick={() => setActiveRole('students')}
            >
              <div className={`p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4 ${
                activeRole === 'students' ? 'bg-white/20' : 'bg-blue-100 text-blue-600'
              }`}>
                <FaUserGraduate className="text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2">For Students</h3>
              <p className={activeRole === 'students' ? 'text-blue-100' : 'text-gray-600'}>
                Learn skills & build your career
              </p>
            </div>
            
            <div 
              className={`p-6 rounded-xl shadow-md cursor-pointer transition-all duration-300 ${
                activeRole === 'mentors' 
                  ? 'bg-purple-600 text-white transform -translate-y-2 shadow-lg' 
                  : 'bg-white hover:shadow-lg'
              }`}
              onClick={() => setActiveRole('mentors')}
            >
              <div className={`p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4 ${
                activeRole === 'mentors' ? 'bg-white/20' : 'bg-purple-100 text-purple-600'
              }`}>
                <FaChalkboardTeacher className="text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2">For Trainers/Mentors</h3>
              <p className={activeRole === 'mentors' ? 'text-purple-100' : 'text-gray-600'}>
                Share knowledge & earn
              </p>
            </div>
            
            <div 
              className={`p-6 rounded-xl shadow-md cursor-pointer transition-all duration-300 ${
                activeRole === 'employers' 
                  ? 'bg-green-600 text-white transform -translate-y-2 shadow-lg' 
                  : 'bg-white hover:shadow-lg'
              }`}
              onClick={() => setActiveRole('employers')}
            >
              <div className={`p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4 ${
                activeRole === 'employers' ? 'bg-white/20' : 'bg-green-100 text-green-600'
              }`}>
                <FaBriefcase className="text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2">For Employers</h3>
              <p className={activeRole === 'employers' ? 'text-green-100' : 'text-gray-600'}>
                Hire skilled professionals
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Student Journey */}
      {activeRole === 'students' && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12">How It Works for Learners</h2>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>
              
              <div className="space-y-12">
                {[
                  { icon: <FaSearch />, title: "Explore Careers & Skills", desc: "Browse AI, IT, design, business, and more" },
                  { icon: <FaBookOpen />, title: "Enroll in Courses", desc: "Learn with structured roadmaps" },
                  { icon: <FaComments />, title: "Get Mentorship", desc: "Connect with trainers & mentors" },
                  { icon: <FaAward />, title: "Earn Certifications", desc: "Validate your skills" },
                  { icon: <FaRocket />, title: "Launch Your Career", desc: "Apply for jobs & internships" }
                ].map((step, index) => (
                  <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className="w-1/2 pr-8 flex justify-end">
                      {index % 2 === 0 && (
                        <div className="bg-white p-6 rounded-lg shadow-md max-w-md">
                          <div className="flex items-center mb-3">
                            <div className="bg-blue-100 p-3 rounded-full text-blue-600 mr-4">
                              {step.icon}
                            </div>
                            <h3 className="text-xl font-semibold">{step.title}</h3>
                          </div>
                          <p className="text-gray-600">{step.desc}</p>
                        </div>
                      )}
                    </div>
                    
                    <div className="relative w-12 h-12 flex items-center justify-center">
                      <div className="absolute w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white z-10">
                        {step.icon}
                      </div>
                      <div className="absolute w-16 h-16 bg-blue-200 rounded-full opacity-40"></div>
                    </div>
                    
                    <div className="w-1/2 pl-8">
                      {index % 2 !== 0 && (
                        <div className="bg-white p-6 rounded-lg shadow-md max-w-md">
                          <div className="flex items-center mb-3">
                            <div className="bg-blue-100 p-3 rounded-full text-blue-600 mr-4">
                              {step.icon}
                            </div>
                            <h3 className="text-xl font-semibold">{step.title}</h3>
                          </div>
                          <p className="text-gray-600">{step.desc}</p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="text-center mt-12">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full transition duration-300">
                Start Learning
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Mentor Journey */}
      {activeRole === 'mentors' && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12">Mentor / Trainer Journey</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: <FaUserTie />, title: "Apply as a Mentor/Trainer", desc: "Create your profile" },
                { icon: <FaChalkboardTeacher />, title: "Upload Courses / Conduct Sessions", desc: "Share knowledge" },
                { icon: <FaComments />, title: "Guide Students", desc: "Offer mentorship & Q&A" },
                { icon: <FaMoneyBillWave />, title: "Earn & Grow", desc: "Get paid & build your brand" }
              ].map((step, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md border-t-4 border-purple-500 hover:shadow-lg transition duration-300">
                  <div className="bg-purple-100 p-3 rounded-full w-14 h-14 flex items-center justify-center text-purple-600 mb-4">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.desc}</p>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-8 rounded-full transition duration-300">
                Become a Mentor
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Employer Journey */}
      {activeRole === 'employers' && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12">Employer / Hiring Journey</h2>
            <div className="flex flex-col space-y-8">
              {[
                { icon: <FaUserTie />, title: "Create Employer Account", desc: "Post hiring needs" },
                { icon: <FaSearch />, title: "Browse Talent Pool", desc: "Explore certified students" },
                { icon: <FaComments />, title: "Shortlist & Connect", desc: "Directly message or invite to interview" },
                { icon: <FaHandshake />, title: "Hire with Confidence", desc: "Verified & skilled candidates" }
              ].map((step, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-green-100 p-4 rounded-full text-green-600 mr-6 flex-shrink-0">
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.desc}</p>
                  </div>
                  {index < 3 && (
                    <div className="ml-auto text-green-500 text-2xl">
                      <FaArrowRight />
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-8 rounded-full transition duration-300">
                Hire Talent
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Why It Works */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Why It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center text-blue-600 mb-6">
                <FaUserGraduate className="text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-4">For Students</h3>
              <ul className="space-y-3">
                <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Learn in-demand skills</li>
                <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Get certified</li>
                <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Launch your career</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300">
              <div className="bg-purple-100 p-3 rounded-full w-14 h-14 flex items-center justify-center text-purple-600 mb-6">
                <FaChalkboardTeacher className="text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-4">For Trainers</h3>
              <ul className="space-y-3">
                <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Teach passionate learners</li>
                <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Mentor future professionals</li>
                <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Earn recognition & income</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300">
              <div className="bg-green-100 p-3 rounded-full w-14 h-14 flex items-center justify-center text-green-600 mb-6">
                <FaBriefcase className="text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-4">For Employers</h3>
              <ul className="space-y-3">
                <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Hire pre-trained professionals</li>
                <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Access job-ready candidates</li>
                <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Reduce hiring costs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-blue-500">
              <div className="text-blue-500 text-4xl mb-4">"</div>
              <p className="text-gray-700 mb-6">
                This platform helped me transition into tech with practical skills that employers actually want!
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-semibold">Alex Johnson</h4>
                  <p className="text-gray-600 text-sm">Software Developer at TechCorp</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-purple-500">
              <div className="text-purple-500 text-4xl mb-4">"</div>
              <p className="text-gray-700 mb-6">
                Teaching here has allowed me to reach students globally while building my personal brand.
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-semibold">Maria Rodriguez</h4>
                  <p className="text-gray-600 text-sm">AI Specialist & Mentor</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-green-500">
              <div className="text-green-500 text-4xl mb-4">"</div>
              <p className="text-gray-700 mb-6">
                We've hired 5 candidates from this platform and all have exceeded our expectations.
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-semibold">James Wilson</h4>
                  <p className="text-gray-600 text-sm">HR Director at InnovateCo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to start your journey?</h2>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-white text-blue-600 hover:bg-blue-50 font-medium py-3 px-6 rounded-full transition duration-300 flex items-center justify-center">
              <FaUserGraduate className="mr-2" /> Join as Student
            </button>
            <button className="bg-white text-purple-600 hover:bg-purple-50 font-medium py-3 px-6 rounded-full transition duration-300 flex items-center justify-center">
              <FaChalkboardTeacher className="mr-2" /> Become a Mentor
            </button>
            <button className="bg-white text-green-600 hover:bg-green-50 font-medium py-3 px-6 rounded-full transition duration-300 flex items-center justify-center">
              <FaBriefcase className="mr-2" /> Hire Talent
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItsWorks;