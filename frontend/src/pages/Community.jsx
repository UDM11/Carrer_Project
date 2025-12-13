import React, { useState } from 'react';
import { 
  FaUsers, 
  FaComments, 
  FaUserFriends, 
  FaCalendarAlt, 
  FaShareAlt,
  FaRegSmile,
  FaSearch,
  FaHeart,
  FaRegComment,
  FaArrowRight,
  FaGlobe,
  FaGraduationCap,
  FaRocket,
  FaAward,
  FaCheckCircle,
  FaQuestionCircle,
  FaUserPlus
} from 'react-icons/fa';

const Community = () => {
  const [activeTopic, setActiveTopic] = useState('all');

  // Community features
  const features = [
    {
      title: 'Discussion Forums',
      description: 'Ask questions, share experiences, and get answers from community members',
      icon: <FaComments className="text-3xl text-blue-600" />
    },
    {
      title: 'Groups & Interests',
      description: 'Join groups based on skills, careers, or industries that match your interests',
      icon: <FaUsers className="text-3xl text-green-600" />
    },
    {
      title: 'Events & Webinars',
      description: 'Attend live sessions with experts and industry professionals',
      icon: <FaCalendarAlt className="text-3xl text-purple-600" />
    },
    {
      title: 'Mentorship Circles',
      description: 'Connect with trainers and mentors for personalized guidance',
      icon: <FaUserFriends className="text-3xl text-yellow-600" />
    },
    {
      title: 'Resource Sharing',
      description: 'Share notes, guides, projects, and learning materials with others',
      icon: <FaShareAlt className="text-3xl text-red-600" />
    }
  ];

  // How it works steps
  const howItWorks = [
    {
      step: '1',
      title: 'Sign Up & Set Up Profile',
      description: 'Create your account and set up your profile with your role, skills, and interests',
      icon: <FaUserPlus className="text-2xl text-blue-600" />
    },
    {
      step: '2',
      title: 'Join Groups & Forums',
      description: 'Find and join communities that match your interests and career goals',
      icon: <FaUsers className="text-2xl text-green-600" />
    },
    {
      step: '3',
      title: 'Engage & Contribute',
      description: 'Post questions, answer others, and share valuable resources with the community',
      icon: <FaComments className="text-2xl text-purple-600" />
    },
    {
      step: '4',
      title: 'Attend Events & Webinars',
      description: 'Participate in live sessions to learn from experts and expand your network',
      icon: <FaCalendarAlt className="text-2xl text-yellow-600" />
    },
    {
      step: '5',
      title: 'Collaborate & Grow',
      description: 'Build meaningful connections, get support, and advance your skills together',
      icon: <FaRocket className="text-2xl text-red-600" />
    }
  ];

  // Featured community members
  const featuredMembers = [
    {
      name: 'Sarah Johnson',
      role: 'Data Scientist',
      expertise: 'Machine Learning, Python, Data Visualization',
      achievements: 'Top Contributor, Mentor of the Month',
      image: 'https://via.placeholder.com/150x150?text=SJ'
    },
    {
      name: 'Marcus Chen',
      role: 'UX Designer',
      expertise: 'UI Design, User Research, Prototyping',
      achievements: 'Community Leader, Workshop Host',
      image: 'https://via.placeholder.com/150x150?text=MC'
    },
    {
      name: 'Priya Patel',
      role: 'Web Developer',
      expertise: 'React, Node.js, Full-Stack Development',
      achievements: 'Problem Solver, Code Reviewer',
      image: 'https://via.placeholder.com/150x150?text=PP'
    },
    {
      name: 'David Kim',
      role: 'Career Coach',
      expertise: 'Resume Building, Interview Prep, Career Strategy',
      achievements: 'Career Advisor, Mock Interviewer',
      image: 'https://via.placeholder.com/150x150?text=DK'
    }
  ];

  // Trending discussions
  const trendingDiscussions = [
    {
      title: 'Best resources for learning React in 2023?',
      description: 'Looking for the most up-to-date tutorials and courses for mastering React',
      replies: 42,
      likes: 87,
      category: 'Web Development',
      author: 'Alex R.',
      authorImage: 'https://via.placeholder.com/40x40?text=AR'
    },
    {
      title: 'How to transition from graphic design to UX/UI?',
      description: 'Seeking advice on making the switch and building a portfolio',
      replies: 28,
      likes: 64,
      category: 'Design',
      author: 'Maya T.',
      authorImage: 'https://via.placeholder.com/40x40?text=MT'
    },
    {
      title: 'Python vs R for data analysis - which to focus on?',
      description: 'Debating which language to prioritize for a career in data science',
      replies: 56,
      likes: 102,
      category: 'Data Science',
      author: 'James L.',
      authorImage: 'https://via.placeholder.com/40x40?text=JL'
    },
    {
      title: 'Preparing for technical interviews - tips and strategies',
      description: 'Share your experiences and advice for acing technical interviews',
      replies: 37,
      likes: 91,
      category: 'Career Development',
      author: 'Sophia M.',
      authorImage: 'https://via.placeholder.com/40x40?text=SM'
    }
  ];

  // Upcoming events
  const upcomingEvents = [
    {
      title: 'AI Career Pathways Workshop',
      host: 'Dr. Emily Watson, AI Research Lead',
      date: 'June 15, 2023',
      time: '2:00 PM PST',
      image: 'https://via.placeholder.com/100x100?text=AI+Workshop'
    },
    {
      title: 'Frontend Development AMA',
      host: 'Michael Torres, Senior Frontend Engineer',
      date: 'June 18, 2023',
      time: '11:00 AM PST',
      image: 'https://via.placeholder.com/100x100?text=Frontend+AMA'
    },
    {
      title: 'Building Your Personal Brand',
      host: 'Jessica Lee, Career Strategist',
      date: 'June 22, 2023',
      time: '1:00 PM PST',
      image: 'https://via.placeholder.com/100x100?text=Personal+Brand'
    },
    {
      title: 'UX Design Portfolio Review',
      host: 'Carlos Rodriguez, Design Director',
      date: 'June 25, 2023',
      time: '3:00 PM PST',
      image: 'https://via.placeholder.com/100x100?text=Portfolio+Review'
    }
  ];

  // Testimonials
  const testimonials = [
    {
      name: 'Alex Morgan',
      role: 'Software Developer',
      location: 'Toronto, Canada',
      quote: 'The community helped me transition from self-taught programmer to professional developer. The mentorship and code reviews were invaluable!',
      image: 'https://via.placeholder.com/80x80?text=AM'
    },
    {
      name: 'Lina Park',
      role: 'UX Designer',
      location: 'Seoul, South Korea',
      quote: 'I found my current job through a connection I made in the community. The design feedback sessions improved my portfolio tremendously.',
      image: 'https://via.placeholder.com/80x80?text=LP'
    },
    {
      name: 'Rajiv Sharma',
      role: 'Data Analyst',
      location: 'Bangalore, India',
      quote: 'The study groups and project collaborations gave me practical experience that directly helped me advance in my career.',
      image: 'https://via.placeholder.com/80x80?text=RS'
    }
  ];

  // FAQ items
  const faqItems = [
    {
      question: 'Who can join the community?',
      answer: 'Our community is open to everyone - learners at all levels, mentors, trainers, and industry professionals. Whether you\'re just starting out or are an experienced practitioner, you\'ll find value in our community.'
    },
    {
      question: 'How do I start a discussion?',
      answer: 'Simply navigate to the relevant forum or group and click the "Start New Discussion" button. Make sure to choose a descriptive title and provide enough context for others to understand your question or topic.'
    },
    {
      question: 'How can I connect with mentors?',
      answer: 'You can browse our mentor directory, join mentorship circles, or attend office hours events. Many mentors also actively participate in forum discussions and are happy to help with specific questions.'
    },
    {
      question: 'Is there a cost to join the community?',
      answer: 'Basic community access is free for all members. Some specialized mentorship programs or premium events may have associated costs, but most community features are available at no charge.'
    },
    {
      question: 'How do I join interest-based groups?',
      answer: 'You can browse all available groups in the "Groups" section and join those that match your interests. Some groups may require approval from moderators, but most are open for immediate joining.'
    }
  ];

  return (
    <div className="community- bg-gray-50 min-h-screen">
      {/* 1. Hero Section */}
      <section className="hero-section bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16 px-4">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Global Learning Community</h1>
            <p className="text-xl mb-8">
              Connect, collaborate, and grow with learners, trainers, and mentors worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-blue-600 font-bold py-3 px-6 rounded-lg hover:bg-blue-50 transition duration-300 flex items-center justify-center">
                <FaUserPlus className="mr-2" /> Join the Community
              </button>
              <button className="bg-transparent border-2 border-white text-white font-bold py-3 px-6 rounded-lg hover:bg-white hover:bg-opacity-10 transition duration-300 flex items-center justify-center">
                <FaComments className="mr-2" /> Explore Discussions
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="bg-white p-2 rounded-lg shadow-2xl">
              <img 
                src="https://via.placeholder.com/500x350?text=Community+Illustration" 
                alt="Community interaction illustration" 
                className="rounded-md"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto max-w-6xl py-12 px-4">
        {/* 2. Community Features */}
        <section className="features-section mb-16">
          <h2 className="text-3xl font-bold mb-12 text-center">Community Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition duration-300">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 3. How It Works */}
        <section className="how-it-works-section mb-16">
          <h2 className="text-3xl font-bold mb-12 text-center">How It Works</h2>
          <div className="space-y-8">
            {howItWorks.map((step, index) => (
              <div key={index} className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-md p-6">
                <div className="md:w-1/4 flex justify-center mb-6 md:mb-0">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center text-blue-600 font-bold text-2xl">
                    {step.step}
                  </div>
                </div>
                <div className="md:w-3/4 text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start mb-3">
                    <div className="bg-blue-50 p-2 rounded-lg mr-3">
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                  </div>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Featured Community Members */}
        <section className="featured-members-section mb-16">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Community Members</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition duration-300">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                <p className="text-blue-600 mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm mb-3">{member.expertise}</p>
                <div className="bg-blue-50 text-blue-700 text-xs font-medium px-3 py-1 rounded-full inline-block">
                  {member.achievements}
                </div>
                <button className="mt-4 text-blue-600 text-sm font-medium flex items-center justify-center">
                  View Profile <FaArrowRight className="ml-1 text-xs" />
                </button>
              </div>
            ))}
          </div>
        </section>

        <div className="flex flex-col lg:flex-row gap-8 mb-16">
          {/* Left Column - Trending Discussions */}
          <div className="lg:w-2/3">
            {/* 5. Trending Discussions & Topics */}
            <section className="trending-discussions-section mb-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Trending Discussions</h2>
                <button className="text-blue-600 font-medium flex items-center">
                  View All <FaArrowRight className="ml-1" />
                </button>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                {trendingDiscussions.map((discussion, index) => (
                  <div key={index} className="border-b last:border-b-0 p-6 hover:bg-gray-50 transition duration-300">
                    <div className="flex items-start">
                      <img 
                        src={discussion.authorImage} 
                        alt={discussion.author} 
                        className="w-10 h-10 rounded-full mr-4"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1">{discussion.title}</h3>
                        <p className="text-gray-600 text-sm mb-3">{discussion.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="bg-gray-100 text-gray-700 text-xs font-medium px-2 py-1 rounded">
                            {discussion.category}
                          </span>
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center text-gray-500 text-sm">
                              <FaHeart className="mr-1 text-red-500" /> {discussion.likes}
                            </div>
                            <div className="flex items-center text-gray-500 text-sm">
                              <FaRegComment className="mr-1 text-blue-500" /> {discussion.replies}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-6 bg-blue-600 text-white font-medium py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300 flex items-center justify-center">
                Join the Discussion <FaComments className="ml-2" />
              </button>
            </section>
          </div>

          {/* Right Column - Upcoming Events */}
          <div className="lg:w-1/3">
            {/* 6. Upcoming Community Events */}
            <section className="upcoming-events-section">
              <h2 className="text-2xl font-bold mb-6">Upcoming Events</h2>
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="space-y-6">
                  {upcomingEvents.map((event, index) => (
                    <div key={index} className="flex items-start pb-4 border-b last:border-b-0 last:pb-0">
                      <img 
                        src={event.image} 
                        alt={event.title} 
                        className="w-16 h-16 rounded-lg object-cover mr-4"
                      />
                      <div>
                        <h3 className="font-semibold mb-1">{event.title}</h3>
                        <p className="text-gray-600 text-sm mb-2">by {event.host}</p>
                        <div className="flex items-center text-gray-500 text-xs">
                          <FaCalendarAlt className="mr-1" /> {event.date} • {event.time}
                        </div>
                        <button className="mt-2 text-blue-600 text-xs font-medium">
                          Register Now
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-6 bg-white border border-blue-600 text-blue-600 font-medium py-2 px-4 rounded-lg hover:bg-blue-50 transition duration-300">
                  View All Events
                </button>
              </div>
            </section>
          </div>
        </div>

        {/* 7. Testimonials / Success Stories */}
        <section className="testimonials-section mb-16">
          <h2 className="text-3xl font-bold mb-12 text-center">Success Stories</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-16 h-16 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-blue-600">{testimonial.role}</p>
                    <p className="text-gray-500 text-sm">{testimonial.location}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </section>

        {/* 8. FAQ Section */}
        <section className="faq-section mb-16">
          <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            {faqItems.map((faq, index) => (
              <div key={index} className="border-b last:border-b-0">
                <button className="w-full px-6 py-4 text-left focus:outline-none flex items-center justify-between">
                  <h3 className="text-lg font-medium">{faq.question}</h3>
                  <span className="text-blue-600 text-xl">+</span>
                </button>
                <div className="px-6 pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 9. CTA Section */}
        <section className="cta-section bg-gradient-to-r from-blue-600 to-purple-700 text-white p-10 rounded-xl text-center">
          <h2 className="text-3xl font-bold mb-4">Be Part of the Community Today</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of learners and professionals who are advancing their careers together.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition duration-300">
              Create Free Account
            </button>
            <button className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:bg-opacity-10 transition duration-300">
              Explore Forums
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Community;