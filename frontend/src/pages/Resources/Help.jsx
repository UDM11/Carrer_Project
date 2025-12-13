import React, { useState } from 'react';
import { 
  FaSearch, 
  FaUser, 
  FaCreditCard, 
  FaGraduationCap, 
  FaUserFriends,
  FaBriefcase, 
  FaCog, 
  FaQuestionCircle, 
  FaEnvelope, 
  FaPaperclip,
  FaFileAlt,
  FaPlayCircle,
  FaComments,
  FaUsers,
  FaExclamationTriangle,
  FaArrowRight,
  FaHeadset
} from 'react-icons/fa';

const Help = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [ticketSubmitted, setTicketSubmitted] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    attachment: null
  });

  // Quick links topics
  const quickLinks = [
    {
      title: 'Account & Login Issues',
      icon: <FaUser className="text-2xl text-blue-600" />,
      description: 'Password reset, account recovery, login problems'
    },
    {
      title: 'Payment & Billing',
      icon: <FaCreditCard className="text-2xl text-green-600" />,
      description: 'Payment methods, invoices, refund requests'
    },
    {
      title: 'Course Access & Completion',
      icon: <FaGraduationCap className="text-2xl text-purple-600" />,
      description: 'Accessing courses, completion certificates, progress tracking'
    },
    {
      title: 'Mentorship Requests',
      icon: <FaUserFriends className="text-2xl text-yellow-600" />,
      description: 'Finding mentors, scheduling sessions, mentorship programs'
    },
    {
      title: 'Job & Internship Applications',
      icon: <FaBriefcase className="text-2xl text-red-600" />,
      description: 'Applying to opportunities, application status, interviews'
    },
    {
      title: 'Technical Support',
      icon: <FaCog className="text-2xl text-gray-600" />,
      description: 'Platform issues, bugs, performance problems'
    }
  ];

  // FAQ items
  const faqItems = [
    {
      id: 1,
      question: 'How do I reset my password?',
      answer: 'To reset your password, go to the login page and click "Forgot Password". Enter your email address and we\'ll send you a link to create a new password. If you don\'t receive the email within 5 minutes, check your spam folder.'
    },
    {
      id: 2,
      question: 'How can I apply for an internship?',
      answer: 'Navigate to the "Career Opportunities" section in your dashboard. Browse available internships and click "Apply" on any that interest you. Make sure your profile is complete with your resume and portfolio for the best chance of acceptance.'
    },
    {
      id: 3,
      question: 'How do I become a mentor or trainer?',
      answer: 'We\'re always looking for experienced professionals to join our mentor community. Visit our "Become a Mentor" page to learn about requirements and apply. Typically, we look for 3+ years of professional experience in your field.'
    },
    {
      id: 4,
      question: 'How do I contact support?',
      answer: 'You can contact our support team through this help center by submitting a request, via email at support@careerdev.com, or through live chat during business hours (9am-6pm PST, Monday-Friday).'
    },
    {
      id: 5,
      question: 'How do I access my purchased courses?',
      answer: 'All your enrolled courses are available in your dashboard under "My Courses". Click on any course to continue learning where you left off. If you\'re having trouble accessing a course, try refreshing the page or clearing your browser cache.'
    },
    {
      id: 6,
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and in some regions, bank transfers. All payments are securely processed and encrypted.'
    }
  ];

  // Tutorials and guides
  const tutorials = [
    {
      title: 'How to Navigate Your Dashboard',
      description: 'Learn how to access all features and tools from your personalized dashboard',
      type: 'guide',
      duration: '5 min read'
    },
    {
      title: 'How to Apply for Jobs or Internships',
      description: 'Step-by-step guide to finding and applying for career opportunities',
      type: 'video',
      duration: '8 min watch'
    },
    {
      title: 'How to Complete a Course & Get Certified',
      description: 'Process for finishing courses and receiving your completion certificate',
      type: 'guide',
      duration: '7 min read'
    },
    {
      title: 'Setting Up Your Mentor Profile',
      description: 'Tips for creating an attractive mentor profile that stands out',
      type: 'video',
      duration: '6 min watch'
    }
  ];

  // Troubleshooting and announcements
  const troubleshootingItems = [
    {
      title: 'Platform Maintenance Notice',
      date: 'June 15, 2023',
      status: 'resolved',
      description: 'Scheduled maintenance completed. All systems are now operational.'
    },
    {
      title: 'Video Playback Issues',
      date: 'June 10, 2023',
      status: 'investigating',
      description: 'We\'re investigating reports of intermittent video playback problems for some users.'
    },
    {
      title: 'Mobile App Update',
      date: 'June 5, 2023',
      status: 'completed',
      description: 'New app version released with performance improvements and bug fixes.'
    }
  ];

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setTicketSubmitted(true);
    
    // Reset form after submission
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        attachment: null
      });
      setTicketSubmitted(false);
    }, 5000);
  };

  // Toggle FAQ accordion
  const toggleFAQ = (id) => {
    setActiveFAQ(activeFAQ === id ? null : id);
  };

  return (
    <div className="help-center-page bg-gray-50 min-h-screen">
      {/* 1. Hero Section */}
      <section className="hero-section bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">We're Here to Help</h1>
          <p className="text-xl max-w-2xl mx-auto mb-10">
            Find answers, guides, and support for students, mentors, trainers, and employers.
          </p>
          
          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className="text-gray-400 text-xl" />
            </div>
            <input
              type="text"
              placeholder="Search for topics, FAQs, or guides..."
              className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="mt-8 flex justify-center">
            <img 
              src="https://via.placeholder.com/600x300?text=Support+Illustration" 
              alt="Support illustration" 
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      <div className="container mx-auto max-w-6xl py-12 px-4">
        {/* 2. Quick Links / Popular Topics */}
        <section className="quick-links-section mb-16">
          <h2 className="text-3xl font-bold mb-12 text-center">Popular Topics</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quickLinks.map((link, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-50 p-3 rounded-lg mr-4">
                    {link.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{link.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{link.description}</p>
                <button className="text-blue-600 font-medium flex items-center">
                  Explore Articles <FaArrowRight className="ml-2" />
                </button>
              </div>
            ))}
          </div>
        </section>

        <div className="flex flex-col lg:flex-row gap-8 mb-16">
          {/* Left Column - FAQ */}
          <div className="lg:w-1/2">
            {/* 3. FAQ Section */}
            <section className="faq-section mb-8">
              <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                {faqItems.map((faq) => (
                  <div key={faq.id} className="border-b last:border-b-0">
                    <button
                      className="w-full px-6 py-4 text-left focus:outline-none flex items-center justify-between"
                      onClick={() => toggleFAQ(faq.id)}
                    >
                      <h3 className="text-lg font-medium">{faq.question}</h3>
                      <span className="text-blue-600 text-xl">
                        {activeFAQ === faq.id ? '−' : '+'}
                      </span>
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
          </div>

          {/* Right Column - Submit Request */}
          <div className="lg:w-1/2">
            {/* 4. Submit a Request / Contact Support */}
            <section className="submit-request-section bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-6">Submit a Support Request</h2>
              
              {ticketSubmitted ? (
                <div className="bg-green-100 text-green-700 p-4 rounded-md mb-6">
                  Thank you for your request! We've received your message and will get back to you within 24 hours.
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    >
                      <option value="">Select a topic</option>
                      <option value="account">Account Issues</option>
                      <option value="payment">Payment & Billing</option>
                      <option value="courses">Course Access</option>
                      <option value="mentorship">Mentorship</option>
                      <option value="career">Career Opportunities</option>
                      <option value="technical">Technical Support</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="5"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    ></textarea>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="attachment" className="block text-gray-700 font-medium mb-2">
                      Attachment (Optional)
                    </label>
                    <div className="flex items-center">
                      <label htmlFor="attachment" className="cursor-pointer bg-gray-100 text-gray-700 px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-200">
                        <FaPaperclip className="inline mr-2" /> Choose File
                      </label>
                      <input
                        type="file"
                        id="attachment"
                        name="attachment"
                        className="hidden"
                        onChange={(e) => setFormData({...formData, attachment: e.target.files[0]})}
                      />
                      <span className="ml-3 text-gray-500 text-sm">
                        {formData.attachment ? formData.attachment.name : 'No file chosen'}
                      </span>
                    </div>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
                  >
                    Submit Request
                  </button>
                </form>
              )}
              
              <div className="mt-6 text-center">
                <p className="text-gray-600">Or contact us directly at <span className="text-blue-600">support@careerdev.com</span></p>
              </div>
            </section>
          </div>
        </div>

        {/* 5. Tutorials / Guides */}
        <section className="tutorials-section mb-16">
          <h2 className="text-3xl font-bold mb-8">Helpful Tutorials & Guides</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {tutorials.map((tutorial, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
                <div className="flex items-center mb-4">
                  {tutorial.type === 'video' ? (
                    <FaPlayCircle className="text-2xl text-red-600 mr-3" />
                  ) : (
                    <FaFileAlt className="text-2xl text-blue-600 mr-3" />
                  )}
                  <h3 className="text-xl font-semibold">{tutorial.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{tutorial.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 text-sm">{tutorial.duration}</span>
                  <button className="text-blue-600 font-medium flex items-center">
                    {tutorial.type === 'video' ? 'Watch Video' : 'Read Guide'} <FaArrowRight className="ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="flex flex-col lg:flex-row gap-8 mb-16">
          {/* Left Column - Community Support */}
          <div className="lg:w-1/2">
            {/* 7. Community Support / Forums */}
            <section className="community-support-section bg-white rounded-lg shadow-md p-6 mb-8">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4 text-blue-600">
                  <FaUsers className="text-xl" />
                </div>
                <h2 className="text-2xl font-bold">Community Support</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Get help from our community of learners, mentors, and experts. Ask questions, 
                share knowledge, and connect with others on your learning journey.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <button className="bg-blue-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
                  Browse Forums
                </button>
                <button className="bg-white border border-blue-600 text-blue-600 font-medium py-2 px-4 rounded-lg hover:bg-blue-50 transition duration-300">
                  Ask a Question
                </button>
              </div>
            </section>
          </div>

          {/* Right Column - Troubleshooting */}
          <div className="lg:w-1/2">
            {/* 8. Troubleshooting & Announcements */}
            <section className="troubleshooting-section bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="bg-yellow-100 p-3 rounded-full mr-4 text-yellow-600">
                  <FaExclamationTriangle className="text-xl" />
                </div>
                <h2 className="text-2xl font-bold">System Status & Announcements</h2>
              </div>
              
              <div className="space-y-4">
                {troubleshootingItems.map((item, index) => (
                  <div key={index} className="border-l-4 pl-4 py-2">
                    <div className="flex justify-between items-start">
                      <h3 className="font-semibold">{item.title}</h3>
                      <span className={`text-xs font-medium px-2 py-1 rounded ${
                        item.status === 'resolved' ? 'bg-green-100 text-green-800' : 
                        item.status === 'investigating' ? 'bg-yellow-100 text-yellow-800' : 
                        'bg-blue-100 text-blue-800'
                      }`}>
                        {item.status}
                      </span>
                    </div>
                    <p className="text-gray-500 text-sm mb-1">{item.date}</p>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
              
              <button className="w-full mt-4 text-blue-600 text-sm font-medium">
                View all announcements
              </button>
            </section>
          </div>
        </div>

        {/* 9. CTA Section */}
        <section className="cta-section bg-gradient-to-r from-blue-600 to-purple-700 text-white p-10 rounded-xl text-center">
          <h2 className="text-3xl font-bold mb-4">Still Need Help?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our support team is ready to assist you with any questions or issues you may have.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition duration-300 flex items-center justify-center">
              <FaHeadset className="mr-2" /> Contact Support
            </button>
            <button className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:bg-opacity-10 transition duration-300">
              Browse FAQs
            </button>
            <button className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:bg-opacity-10 transition duration-300">
              Join Community
            </button>
          </div>
        </section>
      </div>

      {/* 6. Live Chat Widget (Fixed Position) */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition duration-300 flex items-center justify-center">
          <FaComments className="text-xl" />
          <span className="ml-2">Live Chat</span>
        </button>
      </div>
    </div>
  );
};

export default Help;