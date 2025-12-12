import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import HeroSection from '../components/HeroSection';
import {
  FaUsers, FaGlobe, FaAward, FaCertificate, FaBuilding, FaGraduationCap,
  FaLinkedin, FaTwitter, FaInstagram, FaFacebook, FaMapMarkerAlt,
  FaPhone, FaEnvelope, FaClock, FaArrowUp, FaPlay, FaQuoteLeft,
  FaChevronDown, FaFilter, FaCalendarAlt, FaNewspaper, FaHandshake,
  FaHeart, FaLeaf, FaPeopleCarry, FaRocket, FaLightbulb, FaLock
} from 'react-icons/fa';

const CompanyPage = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [expandedTeamMember, setExpandedTeamMember] = useState(null);
  const [selectedJobFilter, setSelectedJobFilter] = useState('all');

  // Counter animation hook
  const useCounter = (end, duration = 2000) => {
    const [count, setCount] = useState(0);
    const ref = useRef();
    const inView = useInView(ref);

    useEffect(() => {
      if (inView) {
        let startTime;
        const animate = (currentTime) => {
          if (!startTime) startTime = currentTime;
          const progress = Math.min((currentTime - startTime) / duration, 1);
          setCount(Math.floor(progress * end));
          if (progress < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
      }
    }, [inView, end, duration]);

    return [count, ref];
  };

  // Scroll to top functionality
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const scaleOnHover = {
    hover: { scale: 1.05, transition: { duration: 0.3 } }
  };

  // Sample data
  const achievements = [
    { number: 50000, label: 'Students Trained', icon: FaGraduationCap },
    { number: 1200, label: 'Companies Partnered', icon: FaBuilding },
    { number: 45, label: 'Countries Served', icon: FaGlobe },
    { number: 500, label: 'Courses Offered', icon: FaCertificate },
    { number: 25000, label: 'Certifications Issued', icon: FaAward }
  ];

  const teamMembers = [
    {
      id: 1,
      name: 'Sarah Johnson',
      title: 'Chief Executive Officer',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
      bio: 'Sarah brings over 15 years of experience in global education technology and has led the company to become a leader in international career development.',
      linkedin: '#',
      expertise: ['Strategic Leadership', 'EdTech Innovation', 'Global Expansion']
    },
    {
      id: 2,
      name: 'Michael Chen',
      title: 'Chief Technology Officer',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      bio: 'Michael oversees our technology infrastructure and platform development, ensuring scalable solutions for our global user base.',
      linkedin: '#',
      expertise: ['Platform Architecture', 'AI/ML Integration', 'Scalable Systems']
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      title: 'Head of Global Partnerships',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
      bio: 'Emily manages our international partnerships and corporate relationships, expanding our reach across multiple continents.',
      linkedin: '#',
      expertise: ['Partnership Development', 'International Relations', 'Business Strategy']
    },
    {
      id: 4,
      name: 'David Kumar',
      title: 'Head of Learning & Development',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      bio: 'David leads our curriculum development and ensures the quality of our educational programs meets international standards.',
      linkedin: '#',
      expertise: ['Curriculum Design', 'Quality Assurance', 'Educational Innovation']
    }
  ];

  const partners = [
    { name: 'Microsoft', logo: 'https://img.icons8.com/color/96/microsoft.png' },
    { name: 'Google', logo: 'https://img.icons8.com/color/96/google-logo.png' },
    { name: 'Amazon', logo: 'https://img.icons8.com/color/96/amazon.png' },
    { name: 'IBM', logo: 'https://img.icons8.com/color/96/ibm.png' },
    { name: 'Oracle', logo: 'https://img.icons8.com/color/96/oracle-logo.png' },
    { name: 'Salesforce', logo: 'https://img.icons8.com/color/96/salesforce.png' }
  ];

  const jobOpenings = [
    {
      id: 1,
      title: 'Senior Software Engineer',
      department: 'Engineering',
      location: 'Remote / San Francisco',
      type: 'Full-time',
      posted: '2 days ago'
    },
    {
      id: 2,
      title: 'Product Manager',
      department: 'Product',
      location: 'New York / Remote',
      type: 'Full-time',
      posted: '1 week ago'
    },
    {
      id: 3,
      title: 'UX Designer',
      department: 'Design',
      location: 'London / Remote',
      type: 'Full-time',
      posted: '3 days ago'
    },
    {
      id: 4,
      title: 'Marketing Specialist',
      department: 'Marketing',
      location: 'Remote',
      type: 'Contract',
      posted: '5 days ago'
    }
  ];

  const coreValues = [
    {
      icon: FaRocket,
      title: 'Innovation',
      description: 'We continuously push boundaries to create cutting-edge solutions for global career development.'
    },
    {
      icon: FaUsers,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and building strong partnerships across cultures and continents.'
    },
    {
      icon: FaLightbulb,
      title: 'Excellence',
      description: 'We strive for the highest quality in everything we do, from our platform to our customer service.'
    },
    {
      icon: FaLock,
      title: 'Integrity',
      description: 'We operate with transparency, honesty, and ethical practices in all our business relationships.'
    },
    {
      icon: FaGlobe,
      title: 'Global Impact',
      description: 'We are committed to making quality education and career opportunities accessible worldwide.'
    },
    {
      icon: FaHeart,
      title: 'Empowerment',
      description: 'We empower individuals to achieve their career goals and reach their full potential.'
    }
  ];

  const offices = [
    {
      city: 'San Francisco',
      country: 'USA',
      address: '123 Tech Street, San Francisco, CA 94105',
      phone: '+1 (555) 123-4567',
      email: 'sf@company.com',
      teamSize: 150,
      coordinates: { lat: 37.7749, lng: -122.4194 }
    },
    {
      city: 'London',
      country: 'UK',
      address: '456 Innovation Ave, London EC2A 4BX',
      phone: '+44 20 7123 4567',
      email: 'london@company.com',
      teamSize: 85,
      coordinates: { lat: 51.5074, lng: -0.1278 }
    },
    {
      city: 'Singapore',
      country: 'Singapore',
      address: '789 Business Blvd, Singapore 018956',
      phone: '+65 6123 4567',
      email: 'singapore@company.com',
      teamSize: 120,
      coordinates: { lat: 1.3521, lng: 103.8198 }
    },
    {
      city: 'Mumbai',
      country: 'India',
      address: '321 Tech Park, Mumbai 400001',
      phone: '+91 22 1234 5678',
      email: 'mumbai@company.com',
      teamSize: 200,
      coordinates: { lat: 19.0760, lng: 72.8777 }
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Keep existing Hero Section */}
      <HeroSection />

      {/* About Company Section */}
      <motion.section 
        className="py-20 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl font-bold text-gray-900 mb-6"
              variants={fadeInUp}
            >
              About Our Company
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              variants={fadeInUp}
            >
              Empowering global careers through innovative education and mentorship since 2015
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div variants={fadeInUp}>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                To bridge the global skills gap by connecting talented individuals with world-class 
                mentorship and career opportunities, creating a more inclusive and accessible pathway 
                to professional success.
              </p>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To become the world's leading platform for international career development, 
                where geography is no barrier to accessing quality education and meaningful 
                employment opportunities.
              </p>
            </motion.div>
            <motion.div 
              className="relative"
              variants={fadeInUp}
            >
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop" 
                alt="Team collaboration" 
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute inset-0 bg-blue-500 bg-opacity-10 rounded-2xl"></div>
            </motion.div>
          </div>

          {/* Core Values */}
          <motion.div 
            className="mb-16"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Core Values</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreValues.map((value, index) => (
                <motion.div 
                  key={index}
                  className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow duration-300"
                  variants={fadeInUp}
                  whileHover={scaleOnHover.hover}
                >
                  <value.icon className="text-4xl text-blue-500 mb-4" />
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h4>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Leadership Team Section */}
      <motion.section 
        className="py-20 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the visionary leaders driving our mission to transform global career development
            </p>
          </div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
            variants={staggerContainer}
          >
            {teamMembers.map((member) => (
              <motion.div 
                key={member.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                variants={fadeInUp}
                whileHover={scaleOnHover.hover}
                onClick={() => setExpandedTeamMember(expandedTeamMember === member.id ? null : member.id)}
              >
                <div className="relative">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute bottom-4 right-4">
                    <a 
                      href={member.linkedin}
                      className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FaLinkedin className="text-lg" />
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.title}</p>
                  {expandedTeamMember === member.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="border-t pt-4"
                    >
                      <p className="text-gray-600 mb-4">{member.bio}</p>
                      <div className="flex flex-wrap gap-2">
                        {member.expertise.map((skill, index) => (
                          <span 
                            key={index}
                            className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                  <div className="flex justify-center mt-4">
                    <FaChevronDown 
                      className={`text-gray-400 transition-transform duration-300 ${
                        expandedTeamMember === member.id ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Team Statistics */}
          <motion.div 
            className="grid md:grid-cols-4 gap-8 bg-white rounded-2xl p-8 shadow-lg"
            variants={staggerContainer}
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">555+</div>
              <div className="text-gray-600">Total Employees</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">45</div>
              <div className="text-gray-600">Countries Represented</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">12</div>
              <div className="text-gray-600">Departments</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">8.5</div>
              <div className="text-gray-600">Avg Years Experience</div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Partners & Clients Section */}
      <motion.section 
        className="py-20 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Trusted Partners</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We collaborate with industry leaders to provide the best opportunities for our community
            </p>
          </div>

          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16"
            variants={staggerContainer}
          >
            {partners.map((partner, index) => (
              <motion.div 
                key={index}
                className="flex items-center justify-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300"
                variants={fadeInUp}
                whileHover={scaleOnHover.hover}
              >
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="h-12 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Testimonials */}
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
          >
            <motion.div 
              className="bg-gray-50 p-8 rounded-xl"
              variants={fadeInUp}
            >
              <FaQuoteLeft className="text-3xl text-blue-500 mb-4" />
              <p className="text-gray-600 mb-6">
                "This platform has transformed how we recruit global talent. The quality of candidates is exceptional."
              </p>
              <div className="flex items-center">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=60&h=60&fit=crop&crop=face" 
                  alt="Client" 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <div className="font-semibold text-gray-900">John Smith</div>
                  <div className="text-gray-600 text-sm">HR Director, TechCorp</div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="bg-gray-50 p-8 rounded-xl"
              variants={fadeInUp}
            >
              <FaQuoteLeft className="text-3xl text-blue-500 mb-4" />
              <p className="text-gray-600 mb-6">
                "The partnership has enabled us to reach students worldwide and expand our educational impact."
              </p>
              <div className="flex items-center">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=60&h=60&fit=crop&crop=face" 
                  alt="Client" 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <div className="font-semibold text-gray-900">Dr. Sarah Wilson</div>
                  <div className="text-gray-600 text-sm">Dean, Global University</div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="bg-gray-50 p-8 rounded-xl"
              variants={fadeInUp}
            >
              <FaQuoteLeft className="text-3xl text-blue-500 mb-4" />
              <p className="text-gray-600 mb-6">
                "Outstanding platform for professional development. Our employees love the learning opportunities."
              </p>
              <div className="flex items-center">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face" 
                  alt="Client" 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <div className="font-semibold text-gray-900">Michael Chen</div>
                  <div className="text-gray-600 text-sm">CTO, InnovateLab</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Achievements & Impact Section */}
      <motion.section 
        className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Global Impact</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Numbers that showcase our commitment to transforming careers worldwide
            </p>
          </div>

          <motion.div 
            className="grid md:grid-cols-5 gap-8"
            variants={staggerContainer}
          >
            {achievements.map((achievement, index) => {
              const [count, ref] = useCounter(achievement.number);
              return (
                <motion.div 
                  key={index}
                  ref={ref}
                  className="text-center"
                  variants={fadeInUp}
                >
                  <achievement.icon className="text-5xl mb-4 mx-auto opacity-80" />
                  <div className="text-4xl font-bold mb-2">
                    {count.toLocaleString()}+
                  </div>
                  <div className="text-lg opacity-90">{achievement.label}</div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Awards Section */}
          <motion.div 
            className="mt-16 grid md:grid-cols-4 gap-8"
            variants={staggerContainer}
          >
            <motion.div 
              className="text-center bg-white bg-opacity-10 p-6 rounded-xl"
              variants={fadeInUp}
            >
              <FaAward className="text-4xl mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-2">Best EdTech Platform 2023</h3>
              <p className="opacity-80">Global Education Awards</p>
            </motion.div>
            <motion.div 
              className="text-center bg-white bg-opacity-10 p-6 rounded-xl"
              variants={fadeInUp}
            >
              <FaAward className="text-4xl mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-2">Innovation Leader</h3>
              <p className="opacity-80">Tech Innovation Summit</p>
            </motion.div>
            <motion.div 
              className="text-center bg-white bg-opacity-10 p-6 rounded-xl"
              variants={fadeInUp}
            >
              <FaAward className="text-4xl mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-2">Top Employer 2023</h3>
              <p className="opacity-80">Great Place to Work</p>
            </motion.div>
            <motion.div 
              className="text-center bg-white bg-opacity-10 p-6 rounded-xl"
              variants={fadeInUp}
            >
              <FaAward className="text-4xl mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-2">Sustainability Champion</h3>
              <p className="opacity-80">Green Business Awards</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Careers Section */}
      <motion.section 
        className="py-20 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Join Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Be part of a global mission to transform careers and education worldwide
            </p>
          </div>

          {/* Job Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['all', 'Engineering', 'Product', 'Design', 'Marketing'].map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedJobFilter(filter)}
                className={`px-6 py-3 rounded-full font-medium transition-colors duration-300 ${
                  selectedJobFilter === filter
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-blue-50'
                }`}
              >
                {filter === 'all' ? 'All Positions' : filter}
              </button>
            ))}
          </div>

          {/* Job Listings */}
          <motion.div 
            className="grid gap-6 mb-12"
            variants={staggerContainer}
          >
            {jobOpenings
              .filter(job => selectedJobFilter === 'all' || job.department === selectedJobFilter)
              .map((job) => (
                <motion.div 
                  key={job.id}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  variants={fadeInUp}
                  whileHover={scaleOnHover.hover}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{job.title}</h3>
                      <div className="flex flex-wrap gap-4 text-gray-600 mb-4">
                        <span className="flex items-center">
                          <FaBuilding className="mr-2" />
                          {job.department}
                        </span>
                        <span className="flex items-center">
                          <FaMapMarkerAlt className="mr-2" />
                          {job.location}
                        </span>
                        <span className="flex items-center">
                          <FaClock className="mr-2" />
                          {job.type}
                        </span>
                        <span className="flex items-center">
                          <FaCalendarAlt className="mr-2" />
                          {job.posted}
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                        Apply Now
                      </button>
                      <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors">
                        Learn More
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))
            }
          </motion.div>

          {/* Employee Benefits */}
          <motion.div 
            className="grid md:grid-cols-4 gap-8 mb-12"
            variants={staggerContainer}
          >
            <motion.div 
              className="text-center bg-white p-8 rounded-xl shadow-lg"
              variants={fadeInUp}
            >
              <FaHeart className="text-4xl text-red-500 mb-4 mx-auto" />
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Health & Wellness</h3>
              <p className="text-gray-600">Comprehensive health insurance, mental health support, and wellness programs</p>
            </motion.div>
            <motion.div 
              className="text-center bg-white p-8 rounded-xl shadow-lg"
              variants={fadeInUp}
            >
              <FaGraduationCap className="text-4xl text-blue-500 mb-4 mx-auto" />
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Learning & Development</h3>
              <p className="text-gray-600">Continuous learning opportunities, conferences, and skill development programs</p>
            </motion.div>
            <motion.div 
              className="text-center bg-white p-8 rounded-xl shadow-lg"
              variants={fadeInUp}
            >
              <FaGlobe className="text-4xl text-green-500 mb-4 mx-auto" />
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Remote Flexibility</h3>
              <p className="text-gray-600">Work from anywhere with flexible hours and global collaboration opportunities</p>
            </motion.div>
            <motion.div 
              className="text-center bg-white p-8 rounded-xl shadow-lg"
              variants={fadeInUp}
            >
              <FaRocket className="text-4xl text-purple-500 mb-4 mx-auto" />
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Career Growth</h3>
              <p className="text-gray-600">Clear career paths, mentorship programs, and leadership development opportunities</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Culture & Values in Action */}
      <motion.section 
        className="py-20 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Culture in Action</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how our values come to life through our daily activities and initiatives
            </p>
          </div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8 mb-12"
            variants={staggerContainer}
          >
            <motion.div 
              className="relative group overflow-hidden rounded-xl"
              variants={fadeInUp}
              whileHover={scaleOnHover.hover}
            >
              <img 
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=300&fit=crop" 
                alt="Team collaboration" 
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-xl font-semibold mb-2">Team Collaboration</h3>
                  <p className="opacity-90">Daily standups and cross-functional teamwork</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="relative group overflow-hidden rounded-xl"
              variants={fadeInUp}
              whileHover={scaleOnHover.hover}
            >
              <img 
                src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop" 
                alt="Learning sessions" 
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-xl font-semibold mb-2">Learning Sessions</h3>
                  <p className="opacity-90">Weekly knowledge sharing and skill development</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="relative group overflow-hidden rounded-xl"
              variants={fadeInUp}
              whileHover={scaleOnHover.hover}
            >
              <img 
                src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=400&h=300&fit=crop" 
                alt="Community service" 
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-xl font-semibold mb-2">Community Impact</h3>
                  <p className="opacity-90">Volunteer programs and social responsibility</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Culture Highlights */}
          <motion.div 
            className="grid md:grid-cols-4 gap-6"
            variants={staggerContainer}
          >
            <motion.div 
              className="text-center bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl"
              variants={fadeInUp}
            >
              <FaPeopleCarry className="text-4xl text-blue-600 mb-4 mx-auto" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Diversity & Inclusion</h3>
              <p className="text-gray-600 text-sm">Celebrating differences and fostering belonging</p>
            </motion.div>
            <motion.div 
              className="text-center bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl"
              variants={fadeInUp}
            >
              <FaLeaf className="text-4xl text-green-600 mb-4 mx-auto" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Sustainability</h3>
              <p className="text-gray-600 text-sm">Environmental responsibility in everything we do</p>
            </motion.div>
            <motion.div 
              className="text-center bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl"
              variants={fadeInUp}
            >
              <FaRocket className="text-4xl text-purple-600 mb-4 mx-auto" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Innovation</h3>
              <p className="text-gray-600 text-sm">Encouraging creativity and breakthrough thinking</p>
            </motion.div>
            <motion.div 
              className="text-center bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-xl"
              variants={fadeInUp}
            >
              <FaHeart className="text-4xl text-red-600 mb-4 mx-auto" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Well-being</h3>
              <p className="text-gray-600 text-sm">Supporting physical and mental health</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Global Presence Section */}
      <motion.section 
        className="py-20 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Global Presence</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our offices around the world enable us to serve our global community 24/7
            </p>
          </div>

          {/* World Map Placeholder */}
          <motion.div 
            className="bg-white rounded-2xl shadow-lg p-8 mb-12"
            variants={fadeInUp}
          >
            <div className="relative bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-12 text-center">
              <FaGlobe className="text-8xl text-blue-500 mx-auto mb-6 opacity-50" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Interactive World Map</h3>
              <p className="text-gray-600">Click on office locations to learn more about our global teams</p>
            </div>
          </motion.div>

          {/* Office Locations */}
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
          >
            {offices.map((office, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                variants={fadeInUp}
                whileHover={scaleOnHover.hover}
              >
                <div className="flex items-center mb-4">
                  <FaMapMarkerAlt className="text-2xl text-blue-500 mr-3" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{office.city}</h3>
                    <p className="text-gray-600">{office.country}</p>
                  </div>
                </div>
                <div className="space-y-3 text-sm text-gray-600">
                  <p>{office.address}</p>
                  <div className="flex items-center">
                    <FaPhone className="mr-2" />
                    <span>{office.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <FaEnvelope className="mr-2" />
                    <span>{office.email}</span>
                  </div>
                  <div className="flex items-center">
                    <FaUsers className="mr-2" />
                    <span>{office.teamSize} team members</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Company News & Updates */}
      <motion.section 
        className="py-20 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Latest News & Updates</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with our latest announcements, achievements, and industry insights
            </p>
          </div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
          >
            <motion.article 
              className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
              variants={fadeInUp}
              whileHover={scaleOnHover.hover}
            >
              <img 
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=250&fit=crop" 
                alt="News" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <FaNewspaper className="mr-2" />
                  <span>Press Release</span>
                  <span className="mx-2">•</span>
                  <span>Dec 15, 2023</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Company Expands to 5 New Countries
                </h3>
                <p className="text-gray-600 mb-4">
                  We're excited to announce our expansion into five new markets, bringing our platform to over 50 countries worldwide.
                </p>
                <button className="text-blue-600 font-medium hover:text-blue-700 transition-colors">
                  Read More →
                </button>
              </div>
            </motion.article>

            <motion.article 
              className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
              variants={fadeInUp}
              whileHover={scaleOnHover.hover}
            >
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=250&fit=crop" 
                alt="News" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <FaAward className="mr-2" />
                  <span>Achievement</span>
                  <span className="mx-2">•</span>
                  <span>Dec 10, 2023</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Wins Best EdTech Platform Award
                </h3>
                <p className="text-gray-600 mb-4">
                  Our platform has been recognized as the Best EdTech Platform at the Global Education Awards 2023.
                </p>
                <button className="text-blue-600 font-medium hover:text-blue-700 transition-colors">
                  Read More →
                </button>
              </div>
            </motion.article>

            <motion.article 
              className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
              variants={fadeInUp}
              whileHover={scaleOnHover.hover}
            >
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop" 
                alt="News" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <FaHandshake className="mr-2" />
                  <span>Partnership</span>
                  <span className="mx-2">•</span>
                  <span>Dec 5, 2023</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Strategic Partnership with Global Tech Leaders
                </h3>
                <p className="text-gray-600 mb-4">
                  New partnerships with leading technology companies will enhance our course offerings and career opportunities.
                </p>
                <button className="text-blue-600 font-medium hover:text-blue-700 transition-colors">
                  Read More →
                </button>
              </div>
            </motion.article>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact & Inquiry Section */}
      <motion.section 
        className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Ready to partner with us or have questions? We'd love to hear from you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div 
              className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8"
              variants={fadeInUp}
            >
              <h3 className="text-2xl font-semibold mb-6">Send us a Message</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">First Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-white placeholder-gray-300"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Last Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-white placeholder-gray-300"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-white placeholder-gray-300"
                    placeholder="john@company.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Company</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-white placeholder-gray-300"
                    placeholder="Your Company"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Inquiry Type</label>
                  <select className="w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-white">
                    <option value="">Select inquiry type</option>
                    <option value="partnership">Partnership</option>
                    <option value="recruitment">Recruitment</option>
                    <option value="support">Support</option>
                    <option value="media">Media</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-white placeholder-gray-300"
                    placeholder="Tell us about your inquiry..."
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div 
              className="space-y-8"
              variants={fadeInUp}
            >
              <div>
                <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <FaBuilding className="text-2xl text-blue-400 mr-4 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Sales & Partnerships</h4>
                      <p className="opacity-90">partnerships@company.com</p>
                      <p className="opacity-90">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <FaUsers className="text-2xl text-blue-400 mr-4 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Careers & HR</h4>
                      <p className="opacity-90">careers@company.com</p>
                      <p className="opacity-90">+1 (555) 123-4568</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <FaNewspaper className="text-2xl text-blue-400 mr-4 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Media & Press</h4>
                      <p className="opacity-90">press@company.com</p>
                      <p className="opacity-90">+1 (555) 123-4569</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Response Time</h4>
                <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <FaClock className="text-blue-400 mr-2" />
                    <span className="font-medium">We typically respond within:</span>
                  </div>
                  <ul className="space-y-1 opacity-90">
                    <li>• Partnership inquiries: 24 hours</li>
                    <li>• Career questions: 48 hours</li>
                    <li>• General inquiries: 24 hours</li>
                    <li>• Media requests: 12 hours</li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="bg-white bg-opacity-20 p-3 rounded-full hover:bg-opacity-30 transition-colors">
                    <FaLinkedin className="text-xl" />
                  </a>
                  <a href="#" className="bg-white bg-opacity-20 p-3 rounded-full hover:bg-opacity-30 transition-colors">
                    <FaTwitter className="text-xl" />
                  </a>
                  <a href="#" className="bg-white bg-opacity-20 p-3 rounded-full hover:bg-opacity-30 transition-colors">
                    <FaInstagram className="text-xl" />
                  </a>
                  <a href="#" className="bg-white bg-opacity-20 p-3 rounded-full hover:bg-opacity-30 transition-colors">
                    <FaFacebook className="text-xl" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default CompanyPage;