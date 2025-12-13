import React, { useState } from 'react';
import { 
  FaSearch, 
  FaUser, 
  FaGraduationCap, 
  FaCreditCard, 
  FaCertificate,
  FaBriefcase, 
  FaCog, 
  FaEnvelope, 
  FaComments, 
  FaPhone,
  FaFileAlt,
  FaUsers,
  FaCheckCircle,
  FaQuestionCircle,
  FaArrowRight
} from 'react-icons/fa';

const Support = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Quick Help Categories
  const helpCategories = [
    {
      id: 'account',
      title: 'Account & Login',
      icon: <FaUser className="text-2xl text-blue-600" />,
      description: 'Manage your account settings, password, and login issues'
    },
    {
      id: 'courses',
      title: 'Courses & Learning',
      icon: <FaGraduationCap className="text-2xl text-green-600" />,
      description: 'Access courses, track progress, and learning resources'
    },
    {
      id: 'payments',
      title: 'Payments & Billing',
      icon: <FaCreditCard className="text-2xl text-purple-600" />,
      description: 'Billing inquiries, refunds, and payment methods'
    },
    {
      id: 'certifications',
      title: 'Certifications',
      icon: <FaCertificate className="text-2xl text-yellow-600" />,
      description: 'Certification exams, preparation, and credentials'
    },
    {
      id: 'career',
      title: 'Career Services',
      icon: <FaBriefcase className="text-2xl text-red-600" />,
      description: 'Career coaching, job search, and mentorship'
    },
    {
      id: 'technical',
      title: 'Technical Support',
      icon: <FaCog className="text-2xl text-gray-600" />,
      description: 'Technical issues, bugs, and platform problems'
    }
  ];

  // Popular FAQs
  const faqs = [
    {
      id: 1,
      question: 'How do I reset my password?',
      answer: 'To reset your password, go to the login  and click "Forgot Password". Enter your email address and we\'ll send you a link to create a new password.'
    },
    {
      id: 2,
      question: 'How can I access my course?',
      answer: 'After enrolling in a course, you can access it from your dashboard. Click on "My Courses" and select the course you want to continue learning.'
    },
    {
      id: 3,
      question: 'What payment methods are accepted?',
      answer: 'We accept all major credit cards, PayPal, and in some regions, bank transfers. All payments are securely processed.'
    },
    {
      id: 4,
      question: 'How do I schedule a career consultation?',
      answer: 'You can schedule a career consultation from your dashboard under "Career Services". Select a time that works for you and one of our career coaches will connect with you.'
    },
    {
      id: 5,
      question: 'Can I download course materials for offline use?',
      answer: 'Yes, most course materials can be downloaded for offline use. Look for the download icon next to videos and resources.'
    },
    {
      id: 6,
      question: 'How do I get my certification after completing a course?',
      answer: 'After successfully completing all course requirements and any final assessments, your certificate will be available for download from your dashboard.'
    }
  ];

  // Guides & Resources
  const guides = [
    {
      title: 'Getting Started with Our Platform',
      description: 'A comprehensive guide to setting up your account and navigating the platform',
      icon: <FaFileAlt className="text-xl text-blue-600" />
    },
    {
      title: 'Step-by-Step Course Enrollment',
      description: 'Learn how to find and enroll in courses that match your career goals',
      icon: <FaGraduationCap className="text-xl text-green-600" />
    },
    {
      title: 'Preparing for Certification Exams',
      description: 'Tips and strategies to help you prepare for and pass certification exams',
      icon: <FaCertificate className="text-xl text-yellow-600" />
    },
    {
      title: 'Career Mentorship Explained',
      description: 'How to make the most of our career mentorship program',
      icon: <FaBriefcase className="text-xl text-red-600" />
    }
  ];

  // Toggle FAQ accordion
  const toggleFAQ = (id) => {
    setActiveFAQ(activeFAQ === id ? null : id);
  };

  return (
    <div className="support- bg-gray-50 min-h-screen">
      {/* 1. Hero Section */}
      <section className="hero-section bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16 px-4">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">How Can We Help You?</h1>
            <p className="text-xl mb-8">
              Find answers, explore guides, or reach out to our team anytime.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="bg-white p-2 rounded-lg shadow-2xl">
              <img 
                src="https://via.placeholder.com/500x350?text=Support+Illustration" 
                alt="Customer support illustration" 
                className="rounded-md"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto max-w-6xl py-12 px-4">
        {/* 2. Search Bar */}
        <section className="search-section mb-16">
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-2xl font-bold mb-6 text-center">Find Answers Quickly</h2>
            <div className="relative max-w-2xl mx-auto">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaSearch className="text-gray-400 text-xl" />
              </div>
              <input
                type="text"
                placeholder="Search for help articles..."
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="mt-4 text-center text-gray-500">
              Popular searches: password reset, course access, payment issues
            </div>
          </div>
        </section>

        {/* 3. Quick Help Categories */}
        <section className="categories-section mb-16">
          <h2 className="text-3xl font-bold mb-12 text-center">Quick Help Categories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {helpCategories.map((category) => (
              <div key={category.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-50 p-3 rounded-lg mr-4">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <button className="text-blue-600 font-medium flex items-center">
                  Explore Articles <FaArrowRight className="ml-2" />
                </button>
              </div>
            ))}
          </div>
        </section>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - FAQs and Guides */}
          <div className="lg:w-2/3">
            {/* 4. Popular FAQs */}
            <section className="faq-section mb-12">
              <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                {faqs.map((faq) => (
                  <div key={faq.id} className="border-b last:border-b-0">
                    <button
                      className="w-full px-6 py-4 text-left focus:outline-none"
                      onClick={() => toggleFAQ(faq.id)}
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-medium">{faq.question}</h3>
                        <span className="text-blue-600">
                          {activeFAQ === faq.id ? '−' : '+'}
                        </span>
                      </div>
                    </button>
                    {activeFAQ === faq.id && (
                      <div className="px-6 pb-4">
                        <p className="text-gray-600">{faq.answer}</p>
                        <button className="mt-3 text-blue-600 text-sm font-medium flex items-center">
                          Read more <FaArrowRight className="ml-1 text-xs" />
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* 6. Guides & Resources */}
            <section className="guides-section mb-12">
              <h2 className="text-3xl font-bold mb-8">Helpful Guides & Resources</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {guides.map((guide, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
                    <div className="flex items-center mb-4">
                      <div className="bg-blue-50 p-2 rounded-lg mr-4">
                        {guide.icon}
                      </div>
                      <h3 className="text-lg font-semibold">{guide.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-4">{guide.description}</p>
                    <button className="text-blue-600 font-medium flex items-center">
                      Read Guide <FaArrowRight className="ml-2" />
                    </button>
                  </div>
                ))}
              </div>
            </section>

            {/* 7. Community Support */}
            <section className="community-section mb-12">
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-600 p-3 rounded-full mr-4">
                    <FaUsers className="text-white text-xl" />
                  </div>
                  <h2 className="text-2xl font-bold">Community Support</h2>
                </div>
                <p className="text-gray-600 mb-6">
                  Ask questions, share experiences, and learn from others in our community forums. 
                  Connect with peers and experts to get the support you need.
                </p>
                <button className="bg-blue-600 text-white font-medium py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
                  Visit Community Forums
                </button>
              </div>
            </section>
          </div>

          {/* Right Column - Contact and Status */}
          <div className="lg:w-1/3">
            {/* 5. Contact Support */}
            <section className="contact-section bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold mb-6">Contact Support</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4 text-blue-600">
                    <FaEnvelope className="text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email Support</h3>
                    <p className="text-gray-600">support@careerdev.com</p>
                    <p className="text-sm text-gray-500">Typically responds within 2 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-full mr-4 text-green-600">
                    <FaComments className="text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Live Chat</h3>
                    <p className="text-gray-600">Available 24/7</p>
                    <button className="mt-2 text-green-600 font-medium">Start Chat</button>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-purple-100 p-3 rounded-full mr-4 text-purple-600">
                    <FaPhone className="text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Phone Support</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                    <p className="text-sm text-gray-500">Mon-Fri, 9am-6pm PST</p>
                  </div>
                </div>
              </div>
              
              <button className="w-full mt-6 bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
                Submit a Support Request
              </button>
            </section>

            {/* 8. System Status */}
            <section className="status-section bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold mb-6">System Status</h2>
              <div className="flex items-center mb-4">
                <FaCheckCircle className="text-green-500 text-xl mr-3" />
                <span className="text-lg font-medium">All systems operational</span>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span>Learning Platform</span>
                  <span className="text-green-600">Online</span>
                </div>
                <div className="flex justify-between">
                  <span>Payment Processing</span>
                  <span className="text-green-600">Online</span>
                </div>
                <div className="flex justify-between">
                  <span>Video Streaming</span>
                  <span className="text-green-600">Online</span>
                </div>
                <div className="flex justify-between">
                  <span>Community Forums</span>
                  <span className="text-green-600">Online</span>
                </div>
              </div>
              <button className="w-full mt-4 text-blue-600 text-sm font-medium">
                View incident history
              </button>
            </section>

            {/* Sticky Contact Button */}
            <div className="sticky top-4">
              <button className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 flex items-center justify-center">
                <FaComments className="mr-2" />
                Need Help? Chat Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 9. Call to Action */}
      <section className="cta-section bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Still need help? Our support team is here 24/7.</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition duration-300 mb-4 sm:mb-0">
              Contact Support
            </button>
            <button className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:bg-opacity-10 transition duration-300">
              Visit Help Center
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Support;