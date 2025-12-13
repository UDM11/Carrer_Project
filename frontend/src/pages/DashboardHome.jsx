// Home.jsx
import React, { useState, useEffect, useRef } from 'react';
import { 
  FaGraduationCap, 
  FaGlobeAmericas, 
  FaUserGraduate, 
  FaChalkboardTeacher, 
  FaBuilding, 
  FaTasks, 
  FaBriefcase, 
  FaPassport, 
  FaCertificate, 
  FaComments, 
  FaHandshake, 
  FaPlane, 
  FaChartLine, 
  FaLaptopHouse, 
  FaArrowRight, 
  FaChevronRight, 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaCalendarAlt,
  FaSearch,
  FaStar,
  FaRegStar,
  FaChevronLeft,
  FaChevronCircleRight,
  FaUserTie,
  FaLaptopCode,
  FaUserCheck,
  FaRocket,
  FaQuestionCircle,
  FaGoogle,
  FaMicrosoft,
  FaAmazon,
  FaFacebook,
  FaApple,
  FaMobile,
  FaCloud,
  FaShieldAlt,
  FaPaintBrush
} from 'react-icons/fa';
import CoursesSection from '../components/CoursesSection';
import HeroSection from '../components/HeroSection';


const Home = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [counters, setCounters] = useState({
    courses: 0,
    students: 0,
    trainers: 0,
    internships: 0,
    jobs: 0
  });
  const counterRef = useRef(null);

  // Testimonial carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Counter animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const targetValues = {
            courses: 500,
            students: 50000,
            trainers: 5000,
            internships: 1200,
            jobs: 3500
          };
          
          const duration = 2000; // ms
          const steps = 60;
          const stepDuration = duration / steps;
          
          let currentStep = 0;
          const timer = setInterval(() => {
            currentStep += 1;
            const progress = currentStep / steps;
            
            setCounters({
              courses: Math.floor(targetValues.courses * progress),
              students: Math.floor(targetValues.students * progress),
              trainers: Math.floor(targetValues.trainers * progress),
              internships: Math.floor(targetValues.internships * progress),
              jobs: Math.floor(targetValues.jobs * progress)
            });
            
            if (currentStep >= steps) clearInterval(timer);
          }, stepDuration);
          
          // Stop observing after animation starts
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    
    if (counterRef.current) {
      observer.observe(counterRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  return (
    <div className="font-sans text-gray-900">
      {/* Hero section */}
      <HeroSection />

      {/* Courses */}
      <CoursesSection />

      {/* Featured Technologies / Skills */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center relative pb-2 after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-orange-500">
            Trending Skills
          </h2>
          
          <div className="relative">
            <div className="flex overflow-x-auto pb-4 hide-scrollbar gap-4">
              {technologies.map((tech, index) => (
                <div key={index} className="flex-shrink-0 w-56 bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className="text-3xl text-green-500 mr-3">{tech.icon}</div>
                    <h3 className="font-bold text-lg">{tech.name}</h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{tech.description}</p>
                  <button className="text-orange-500 font-semibold text-sm flex items-center hover:text-orange-600 transition-colors">
                    Explore courses <FaChevronRight className="ml-1 text-xs" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Internship & Live Projects Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center relative pb-2 after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-green-500">
            Internships & Live Projects
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {internships.map((internship, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-40 bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center p-4">
                  <div className="text-white text-center">
                    <div className="text-2xl font-bold mb-2">{internship.company}</div>
                    <div className="text-sm bg-white bg-opacity-20 rounded-full px-3 py-1 inline-block">
                      {internship.duration}
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2">{internship.role}</h3>
                  
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                      internship.type === 'Remote' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {internship.type}
                    </span>
                    {internship.stipend && (
                      <span className="ml-2 bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs font-medium">
                        Stipend: ${internship.stipend}
                      </span>
                    )}
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Required Skills:</h4>
                    <div className="flex flex-wrap gap-2">
                      {internship.skills.map((skill, i) => (
                        <span key={i} className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job & Hiring Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center relative pb-2 after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-red-500">
            Companies Hiring Now
          </h2>
          
          <div className="mb-12">
            <div className="flex overflow-x-auto pb-4 hide-scrollbar gap-4">
              {companies.map((company, index) => (
                <div key={index} className="flex-shrink-0 w-40 h-40 bg-white rounded-xl shadow-md p-4 flex items-center justify-center hover:shadow-lg transition-shadow border border-gray-100">
                  <div className="text-center">
                    <div className="text-3xl text-blue-500 mb-2">{company.icon}</div>
                    <div className="font-semibold">{company.name}</div>
                    <div className="text-xs text-gray-500 mt-1">{company.jobs} open positions</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {jobs.map((job, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-bold text-lg">{job.title}</h3>
                    <div className="flex items-center text-sm text-gray-500 mt-1">
                      <span>{job.company}</span>
                      <span className="mx-2">•</span>
                      <span>{job.location}</span>
                    </div>
                  </div>
                  <div className="text-2xl text-blue-500">{job.icon}</div>
                </div>
                
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {job.tags.map((tag, i) => (
                      <span key={i} className="bg-white text-gray-800 text-xs px-2 py-1 rounded border border-gray-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="text-sm text-gray-500">
                    Posted {job.posted}
                  </div>
                  <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors text-sm">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trainer / Mentor Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center relative pb-2 after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-blue-500">
            Featured Trainers
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trainers.map((trainer, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow text-center">
                <div className="h-40 bg-gradient-to-r from-green-400 to-blue-500 relative">
                  <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 w-24 h-24 rounded-full border-4 border-white bg-white overflow-hidden">
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center text-3xl text-gray-400">
                      <FaUserTie />
                    </div>
                  </div>
                </div>
                
                <div className="pt-14 pb-6 px-4">
                  <h3 className="font-bold text-lg">{trainer.name}</h3>
                  <p className="text-gray-600 text-sm">{trainer.role}</p>
                  
                  <div className="flex justify-center items-center my-3">
                    {[...Array(5)].map((_, i) => (
                      i < trainer.rating ? (
                        <FaStar key={i} className="text-yellow-400 text-sm" />
                      ) : (
                        <FaRegStar key={i} className="text-yellow-400 text-sm" />
                      )
                    ))}
                    <span className="text-sm text-gray-500 ml-1">({trainer.reviews})</span>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Teaches:</h4>
                    <div className="flex flex-wrap justify-center gap-2">
                      {trainer.courses.map((course, i) => (
                        <span key={i} className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <button className="text-blue-500 font-semibold text-sm hover:text-blue-700 transition-colors">
                    View Profile
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="bg-white border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-semibold py-3 px-8 rounded-lg transition-colors">
              Become a Trainer
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials / Success Stories */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center relative pb-2 after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-green-500">
            Success Stories
          </h2>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-xl p-8 shadow-md">
              <div className="flex items-start mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-orange-400 to-red-500 flex items-center justify-center text-white text-2xl mr-6">
                  {testimonials[activeTestimonial].initials}
                </div>
                <div>
                  <h3 className="font-bold text-lg">{testimonials[activeTestimonial].name}</h3>
                  <p className="text-gray-600">{testimonials[activeTestimonial].role}</p>
                </div>
              </div>
              
              <p className="text-gray-700 italic text-lg">"{testimonials[activeTestimonial].text}"</p>
              
              <div className="flex justify-center mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full mx-1 ${index === activeTestimonial ? 'bg-orange-500' : 'bg-gray-300'}`}
                    onClick={() => setActiveTestimonial(index)}
                    aria-label={`View testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
            
            <button 
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-6 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-shadow"
              onClick={() => setActiveTestimonial((activeTestimonial - 1 + testimonials.length) % testimonials.length)}
            >
              <FaChevronLeft className="text-gray-700" />
            </button>
            
            <button 
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-6 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-shadow"
              onClick={() => setActiveTestimonial((activeTestimonial + 1) % testimonials.length)}
            >
              <FaChevronRight className="text-gray-700" />
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={counterRef} className="py-16 px-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            CareerBox in Numbers
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">{counters.courses}+</div>
              <div className="text-sm md:text-base uppercase tracking-wider">Courses</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">{counters.students}+</div>
              <div className="text-sm md:text-base uppercase tracking-wider">Students</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">{counters.trainers}+</div>
              <div className="text-sm md:text-base uppercase tracking-wider">Trainers</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">{counters.internships}+</div>
              <div className="text-sm md:text-base uppercase tracking-wider">Internships</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">{counters.jobs}+</div>
              <div className="text-sm md:text-base uppercase tracking-wider">Jobs Filled</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works / Platform Process */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center relative pb-2 after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-orange-500">
            How It Works
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-100 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-500 text-2xl mx-auto mb-6">
                <FaUserGraduate />
              </div>
              <h3 className="text-xl font-bold mb-4">For Students</h3>
              <div className="space-y-4 text-left">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center flex-shrink-0 mr-3">1</div>
                  <p>Enroll in courses and build in-demand skills</p>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center flex-shrink-0 mr-3">2</div>
                  <p>Work on real-world projects for your portfolio</p>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center flex-shrink-0 mr-3">3</div>
                  <p>Apply for internships and job opportunities</p>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center flex-shrink-0 mr-3">4</div>
                  <p>Get hired by top companies worldwide</p>
                </div>
              </div>
              <button className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors">
                Get Started
              </button>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-100 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-500 text-2xl mx-auto mb-6">
                <FaChalkboardTeacher />
              </div>
              <h3 className="text-xl font-bold mb-4">For Trainers</h3>
              <div className="space-y-4 text-left">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center flex-shrink-0 mr-3">1</div>
                  <p>Register as a trainer on our platform</p>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center flex-shrink-0 mr-3">2</div>
                  <p>Create and publish your courses</p>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center flex-shrink-0 mr-3">3</div>
                  <p>Mentor students and help them grow</p>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center flex-shrink-0 mr-3">4</div>
                  <p>Earn income from your expertise</p>
                </div>
              </div>
              <button className="mt-6 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors">
                Become a Trainer
              </button>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-100 text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center text-red-500 text-2xl mx-auto mb-6">
                <FaBuilding />
              </div>
              <h3 className="text-xl font-bold mb-4">For Companies</h3>
              <div className="space-y-4 text-left">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center flex-shrink-0 mr-3">1</div>
                  <p>Post jobs and internship opportunities</p>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center flex-shrink-0 mr-3">2</div>
                  <p>Access our global talent pool</p>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center flex-shrink-0 mr-3">3</div>
                  <p>Review candidate profiles and portfolios</p>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center flex-shrink-0 mr-3">4</div>
                  <p>Hire skilled professionals and track progress</p>
                </div>
              </div>
              <button className="mt-6 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors">
                Post a Job
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Webinars / Events */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center relative pb-2 after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-red-500">
            Upcoming Events
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-40 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-90"></div>
                  <div className="absolute inset-0 flex items-center justify-center text-white text-3xl">
                    {event.icon}
                  </div>
                  <div className="absolute top-4 right-4 bg-white text-blue-500 font-bold text-sm px-3 py-1 rounded-full">
                    {event.date}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2">{event.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{event.description}</p>
                  
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <FaCalendarAlt className="mr-2" />
                    <span>{event.time}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 text-sm mr-2">
                        <FaUserTie />
                      </div>
                      <span className="text-sm text-gray-600">{event.speaker}</span>
                    </div>
                    
                    <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold py-2 px-4 rounded-lg transition-colors">
                      Register
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community / Forum Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center relative pb-2 after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-green-500">
            Join Our Community
          </h2>
          
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 md:p-12 shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Connect with Peers & Experts</h3>
                <p className="text-gray-700 mb-6">
                  Our community platform is where students, trainers, and professionals come together to share knowledge, ask questions, and collaborate on projects.
                </p>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs mr-3 flex-shrink-0">✓</div>
                    <span>Get answers to your technical questions</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs mr-3 flex-shrink-0">✓</div>
                    <span>Share your projects and get feedback</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs mr-3 flex-shrink-0">✓</div>
                    <span>Network with professionals in your field</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs mr-3 flex-shrink-0">✓</div>
                    <span>Participate in coding challenges and events</span>
                  </li>
                </ul>
                
                <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors flex items-center">
                  Join the Community <FaChevronCircleRight className="ml-2" />
                </button>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h4 className="font-bold text-lg mb-4">Recent Discussions</h4>
                
                <div className="space-y-4">
                  {discussions.map((discussion, index) => (
                    <div key={index} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                      <h5 className="font-semibold text-blue-500 hover:text-blue-700 cursor-pointer">
                        {discussion.title}
                      </h5>
                      <div className="flex items-center text-xs text-gray-500 mt-2">
                        <span>{discussion.author}</span>
                        <span className="mx-2">•</span>
                        <span>{discussion.replies} replies</span>
                        <span className="mx-2">•</span>
                        <span>{discussion.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
                
                <button className="text-blue-500 font-semibold text-sm mt-4 flex items-center hover:text-blue-700 transition-colors">
                  Ask a Question <FaChevronRight className="ml-1 text-xs" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog / Resources Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center relative pb-2 after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-orange-500">
            Learning Resources
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-r from-orange-400 to-red-500 flex items-center justify-center text-white text-5xl">
                  {resource.icon}
                </div>
                <div className="p-6">
                  <div className="flex items-center text-gray-500 text-sm mb-3">
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">{resource.category}</span>
                    <span className="mx-2">•</span>
                    <span>{resource.date}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{resource.title}</h3>
                  <p className="text-gray-600 mb-4">{resource.excerpt}</p>
                  <a href="#" className="text-orange-500 font-semibold flex items-center hover:text-orange-700 transition-colors">
                    Read more <FaArrowRight className="ml-2 text-xs" />
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="bg-white border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-semibold py-3 px-8 rounded-lg transition-colors">
              Explore All Resources
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated</h2>
          <p className="text-lg opacity-90 mb-8">
            Get weekly updates on new courses, internships, and job opportunities
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="py-3 px-6 rounded-lg text-gray-900 flex-grow max-w-md focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
          
          <p className="text-sm opacity-80 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center relative pb-2 after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-blue-500">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <button 
                  className="flex justify-between items-center w-full p-6 text-left bg-gray-50 hover:bg-gray-100 transition-colors"
                  onClick={() => {
                    const updatedFaqs = [...faqs];
                    updatedFaqs[index].open = !updatedFaqs[index].open;
                    // In a real implementation, you would set this to state
                  }}
                >
                  <span className="font-semibold">{faq.question}</span>
                  <FaChevronRight className={`transform transition-transform ${faq.open ? 'rotate-90' : ''}`} />
                </button>
                
                {faq.open && (
                  <div className="p-6 bg-white">
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Launch Your Career?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Join thousands of students, trainers, and companies already benefiting from our platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
              Create Free Account
            </button>
            <button className="border-2 border-blue-500 text-blue-500 px-8 py-3 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition-colors">
              Schedule a Demo
            </button>
          </div>
        </div>
      </section>

     
    </div>
  );
};

// Data arrays
const technologies = [
  {
    icon: <FaLaptopCode />,
    name: "Web Development",
    description: "HTML, CSS, JavaScript, React, Node.js and more"
  },
  {
    icon: <FaRocket />,
    name: "Data Science",
    description: "Python, ML, AI, Data Visualization and Analytics"
  },
  {
    icon: <FaMobile />,
    name: "Mobile Development",
    description: "iOS, Android, React Native, Flutter"
  },
  {
    icon: <FaCloud />,
    name: "Cloud Computing",
    description: "AWS, Azure, Google Cloud, DevOps"
  },
  {
    icon: <FaShieldAlt />,
    name: "Cybersecurity",
    description: "Ethical Hacking, Network Security, Cryptography"
  },
  {
    icon: <FaPaintBrush />,
    name: "UI/UX Design",
    description: "Figma, Adobe XD, User Research, Prototyping"
  }
];

const internships = [
  {
    company: "TechInnovate",
    role: "Frontend Developer Intern",
    duration: "3 months",
    type: "Remote",
    stipend: 1500,
    skills: ["React", "JavaScript", "CSS", "HTML"]
  },
  {
    company: "DataSphere",
    role: "Data Science Intern",
    duration: "6 months",
    type: "Hybrid",
    stipend: 2000,
    skills: ["Python", "Machine Learning", "Pandas", "SQL"]
  },
  {
    company: "CloudSolutions",
    role: "Cloud Engineer Intern",
    duration: "4 months",
    type: "On-site",
    stipend: 1800,
    skills: ["AWS", "Docker", "Kubernetes", "Linux"]
  }
];

const companies = [
  { name: "Google", icon: <FaGoogle />, jobs: 24 },
  { name: "Microsoft", icon: <FaMicrosoft />, jobs: 18 },
  { name: "Amazon", icon: <FaAmazon />, jobs: 32 },
  { name: "Meta", icon: <FaFacebook />, jobs: 15 },
  { name: "Netflix", icon: <FaYoutube />, jobs: 8 },
  { name: "Apple", icon: <FaApple />, jobs: 12 }
];

const jobs = [
  {
    title: "Junior React Developer",
    company: "WebTech Solutions",
    location: "Remote",
    icon: <FaLaptopCode />,
    tags: ["React", "JavaScript", "CSS", "Junior"],
    posted: "2 days ago"
  },
  {
    title: "Data Analyst",
    company: "AnalyticsPro",
    location: "New York, NY",
    icon: <FaChartLine />,
    tags: ["SQL", "Python", "Tableau", "Mid-level"],
    posted: "1 week ago"
  }
];

const trainers = [
  {
    name: "Sarah Johnson",
    role: "Senior Web Developer",
    rating: 4.9,
    reviews: 128,
    courses: ["React Masterclass", "JavaScript Fundamentals", "Web Performance"]
  },
  {
    name: "Michael Chen",
    role: "Data Scientist",
    rating: 4.8,
    reviews: 96,
    courses: ["Machine Learning", "Python for Data Science", "SQL Databases"]
  },
  {
    name: "Emma Rodriguez",
    role: "UX Designer",
    rating: 4.7,
    reviews: 87,
    courses: ["UI/UX Design", "Figma Workshop", "Design Thinking"]
  },
  {
    name: "David Kim",
    role: "Cloud Architect",
    rating: 4.9,
    reviews: 112,
    courses: ["AWS Certified", "DevOps Practices", "Cloud Security"]
  }
];

const testimonials = [
  {
    text: "CareerBox helped me transition from a local marketing role to a global position at a tech company in Berlin. The international courses and mentorship were invaluable.",
    initials: "SM",
    name: "Sarah Müller",
    role: "Digital Marketing Manager, Berlin"
  },
  {
    text: "As a trainer based in Nigeria, I've been able to share my expertise with students across Africa and Europe. The platform makes cross-border education seamless.",
    initials: "JA",
    name: "James Adebayo",
    role: "Software Engineering Mentor, Lagos"
  },
  {
    text: "We've hired exceptional talent from Southeast Asia and Latin America through CareerBox. The platform's vetting process and cultural preparation are outstanding.",
    initials: "TL",
    name: "TechLead Solutions",
    role: "International HR Director, Singapore"
  }
];

const events = [
  {
    title: "React Workshop: Advanced Patterns",
    description: "Learn advanced React patterns and best practices from industry experts.",
    date: "Jun 25",
    time: "10:00 AM - 12:00 PM EST",
    speaker: "Alex Johnson",
    icon: <FaLaptopCode />
  },
  {
    title: "Data Science Career Q&A",
    description: "Get your questions answered about starting a career in data science.",
    date: "Jun 28",
    time: "2:00 PM - 3:30 PM EST",
    speaker: "Maria Garcia",
    icon: <FaChartLine />
  },
  {
    title: "Interview Preparation Workshop",
    description: "Prepare for technical interviews with mock sessions and tips.",
    date: "Jul 2",
    time: "11:00 AM - 1:00 PM EST",
    speaker: "David Kim",
    icon: <FaUserCheck />
  }
];

const discussions = [
  {
    title: "How to transition from frontend to fullstack development?",
    author: "Rahul S.",
    replies: 24,
    time: "3 hours ago"
  },
  {
    title: "Best resources for learning cloud computing from scratch?",
    author: "Lisa M.",
    replies: 17,
    time: "yesterday"
  },
  {
    title: "Share your experience with CareerBox internships",
    author: "Moderator",
    replies: 42,
    time: "2 days ago"
  }
];

const resources = [
  {
    title: "Top 5 In-Demand Skills in the Global Market 2023",
    excerpt: "Discover which skills are most sought after by employers worldwide and how to develop them.",
    category: "Career Guide",
    date: "June 15, 2023",
    icon: <FaChartLine />
  },
  {
    title: "Navigating International Job Markets: A Complete Guide",
    excerpt: "Learn how to adapt your resume, interview skills, and professional profile for different countries.",
    category: "Job Search",
    date: "July 3, 2023",
    icon: <FaBriefcase />
  },
  {
    title: "How Remote Work is Changing Global Career Opportunities",
    excerpt: "Explore how the rise of remote work has created new possibilities for international careers.",
    category: "Trends",
    date: "August 10, 2023",
    icon: <FaLaptopHouse />
  }
];

const faqs = [
  {
    question: "How do I enroll in a course?",
    answer: "To enroll in a course, simply create an account, browse our course catalog, and click the 'Enroll' button on any course page. You can start learning immediately after payment processing.",
    open: false
  },
  {
    question: "Are there any prerequisites for the courses?",
    answer: "Prerequisites vary by course. Beginner courses typically require no prior knowledge, while advanced courses may require foundational understanding of the topic. Check individual course descriptions for specific requirements.",
    open: false
  },
  {
    question: "How does the internship placement work?",
    answer: "After completing relevant courses and building your portfolio, you can apply to internships through our platform. Our algorithm matches your skills with suitable opportunities, and our team provides preparation support.",
    open: false
  },
  {
    question: "Can I become a trainer on CareerBox?",
    answer: "Yes! We welcome industry professionals to share their expertise. Visit our 'Become a Trainer' page to apply. We look for practical experience and teaching ability.",
    open: false
  }
];

export default Home;