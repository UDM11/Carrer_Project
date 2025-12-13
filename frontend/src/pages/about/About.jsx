import React, { useState, useEffect, useRef } from 'react';
import { 
  FaGlobe, 
  FaGraduationCap, 
  FaUsers, 
  FaRocket, 
  FaHandshake, 
  FaAward,
  FaLightbulb,
  FaHeart,
  FaStar,
  FaChartLine,
  FaUserTie,
  FaLaptopCode,
  FaMapMarkerAlt,
  FaClock
} from 'react-icons/fa';
import { 
  IoAccessibility, 
  IoPeople, 
  IoStatsChart, 
  IoBook 
} from 'react-icons/io5';
import { 
  GiWorld, 
  GiAchievement, 
  GiProgression 
} from 'react-icons/gi';

const About = () => {
  // State for animated counters
  const [learnersTrained, setLearnersTrained] = useState(0);
  const [countriesReached, setCountriesReached] = useState(0);
  const [projectsCompleted, setProjectsCompleted] = useState(0);
  const [mentorsOnboarded, setMentorsOnboarded] = useState(0);
  
  // Refs for scroll animation
  const missionRef = useRef(null);
  const storyRef = useRef(null);
  const valuesRef = useRef(null);
  const teamRef = useRef(null);
  const impactRef = useRef(null);
  const testimonialsRef = useRef(null);
  const partnersRef = useRef(null);
  const whyUsRef = useRef(null);
  
  // Team data
  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "CEO & Founder",
      bio: "Former education director with 10+ years in edtech",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      linkedin: "#"
    },
    {
      name: "Maria Rodriguez",
      role: "Head of Learning",
      bio: "Curriculum expert with background in computer science",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      linkedin: "#"
    },
    {
      name: "David Kim",
      role: "Lead Developer",
      bio: "Full-stack developer passionate about accessible education",
      image: "https://randomuser.me/api/portraits/men/22.jpg",
      linkedin: "#"
    },
    {
      name: "Sarah Williams",
      role: "Community Manager",
      bio: "Connects learners with mentors globally",
      image: "https://randomuser.me/api/portraits/women/28.jpg",
      linkedin: "#"
    }
  ];
  
  // Testimonials data
  const testimonials = [
    {
      name: "James Wilson",
      role: "Software Engineer",
      quote: "The mentorship program completely transformed my career path. Landed my dream job in 3 months!",
      image: "https://randomuser.me/api/portraits/men/75.jpg"
    },
    {
      name: "Priya Patel",
      role: "Data Analyst",
      quote: "The project-based learning approach gave me practical skills that I use every day at work.",
      image: "https://randomuser.me/api/portraits/women/65.jpg"
    },
    {
      name: "Michael Chen",
      role: "UX Designer",
      quote: "The global community exposed me to diverse perspectives that enhanced my design thinking.",
      image: "https://randomuser.me/api/portraits/men/45.jpg"
    }
  ];
  
  // Partners data
  const partners = [
    { name: "TechCorp", logo: "https://via.placeholder.com/150x80?text=TechCorp" },
    { name: "Global University", logo: "https://via.placeholder.com/150x80?text=Global+Uni" },
    { name: "Innovate Inc", logo: "https://via.placeholder.com/150x80?text=Innovate+Inc" },
    { name: "Future Labs", logo: "https://via.placeholder.com/150x80?text=Future+Labs" }
  ];
  
  // Core values data
  const coreValues = [
    {
      title: "Accessibility",
      description: "Making quality education available to everyone regardless of background",
      icon: <IoAccessibility className="text-3xl mb-4" />
    },
    {
      title: "Innovation",
      description: "Continuously evolving our methods to provide cutting-edge learning",
      icon: <FaLightbulb className="text-3xl mb-4" />
    },
    {
      title: "Community",
      description: "Building supportive networks that foster growth and collaboration",
      icon: <IoPeople className="text-3xl mb-4" />
    },
    {
      title: "Excellence",
      description: "Maintaining high standards in all our programs and mentorship",
      icon: <FaAward className="text-3xl mb-4" />
    }
  ];
  
  // Why choose us data
  const advantages = [
    {
      title: "Real-world Projects",
      description: "Gain practical experience with projects used by real companies",
      icon: <FaLaptopCode className="text-2xl" />
    },
    {
      title: "Mentor-Driven Learning",
      description: "Learn from industry experts who provide personalized guidance",
      icon: <FaUserTie className="text-2xl" />
    },
    {
      title: "Career-Focused Roadmaps",
      description: "Structured learning paths designed to get you job-ready",
      icon: <GiProgression className="text-2xl" />
    },
    {
      title: "Global Community",
      description: "Connect with peers and professionals from around the world",
      icon: <GiWorld className="text-2xl" />
    }
  ];

  // Animate counters when component mounts
  useEffect(() => {
    const interval = setInterval(() => {
      setLearnersTrained(prev => (prev < 10000 ? prev + 100 : prev));
      setCountriesReached(prev => (prev < 120 ? prev + 1 : prev));
      setProjectsCompleted(prev => (prev < 5000 ? prev + 50 : prev));
      setMentorsOnboarded(prev => (prev < 500 ? prev + 5 : prev));
    }, 50);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="about-">
      {/* 1. Hero Section */}
      <section className="hero-section bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20 px-4">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us – Empowering Careers, Transforming Futures</h1>
            <p className="text-xl mb-8">
              We're on a mission to democratize education by providing global learning opportunities, 
              expert mentorship, and career pathways for everyone, everywhere.
            </p>
            <button className="bg-white text-blue-600 font-bold py-3 px-6 rounded-lg hover:bg-blue-50 transition duration-300">
              Join Our Community
            </button>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="bg-white p-2 rounded-lg shadow-2xl">
              <img 
                src="https://via.placeholder.com/500x350?text=Team+Collaboration" 
                alt="Team working together" 
                className="rounded-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Mission & Vision */}
      <section ref={missionRef} className="mission-vision py-16 bg-gray-50">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Mission & Vision</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaRocket className="text-2xl text-blue-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
              <p className="text-gray-600">
                Making world-class learning accessible for everyone, breaking down barriers 
                to education and creating pathways to meaningful careers.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaGlobe className="text-2xl text-purple-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To become the world's most trusted career development platform, transforming 
                how people learn and grow professionally throughout their lives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Our Story */}
      <section ref={storyRef} className="our-story py-16">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Story</h2>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <p className="text-gray-600 mb-6">
                Our platform was born out of frustration with the traditional education system's 
                inability to keep pace with rapidly changing industry needs. In 2018, our founders 
                recognized a growing gap between academic learning and real-world job requirements.
              </p>
              <p className="text-gray-600 mb-6">
                What started as a small mentorship program has evolved into a global learning 
                ecosystem serving thousands of students across six continents. We've maintained 
                our core belief: that everyone deserves access to education that leads to meaningful work.
              </p>
              <p className="text-gray-600">
                Today, we continue to innovate, expanding our course offerings and strengthening 
                our mentor network to serve an increasingly diverse community of learners.
              </p>
            </div>
            <div className="md:w-1/2 md:pl-12">
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-center">Our Journey</h3>
                <div className="space-y-8">
                  <div className="flex">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white mr-4">
                      <FaClock />
                    </div>
                    <div>
                      <h4 className="font-semibold">2018 - Foundation</h4>
                      <p className="text-gray-600">Launched with 5 courses and 12 mentors</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white mr-4">
                      <FaChartLine />
                    </div>
                    <div>
                      <h4 className="font-semibold">2020 - Growth</h4>
                      <p className="text-gray-600">Expanded to 50+ courses and 200+ mentors</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white mr-4">
                      <GiAchievement />
                    </div>
                    <div>
                      <h4 className="font-semibold">2023 - Impact</h4>
                      <p className="text-gray-600">10,000+ learners trained across 120 countries</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Core Values */}
      <section ref={valuesRef} className="core-values py-16 bg-gray-50">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-blue-600 flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Meet the Team */}
      <section ref={teamRef} className="meet-team py-16">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
                <img src={member.image} alt={member.name} className="w-full h-56 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-blue-600 mb-3">{member.role}</p>
                  <p className="text-gray-600 mb-4">{member.bio}</p>
                  <a href={member.linkedin} className="text-blue-500 hover:text-blue-700 flex items-center">
                    <FaHandshake className="mr-2" /> Connect
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Global Impact / Achievements */}
      <section ref={impactRef} className="global-impact py-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Our Global Impact</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white bg-opacity-20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaGraduationCap className="text-3xl" />
              </div>
              <div className="text-4xl font-bold mb-2">{learnersTrained}+</div>
              <p>Learners Trained</p>
            </div>
            <div className="text-center">
              <div className="bg-white bg-opacity-20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <GiWorld className="text-3xl" />
              </div>
              <div className="text-4xl font-bold mb-2">{countriesReached}+</div>
              <p>Countries Reached</p>
            </div>
            <div className="text-center">
              <div className="bg-white bg-opacity-20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <IoStatsChart className="text-3xl" />
              </div>
              <div className="text-4xl font-bold mb-2">{projectsCompleted}+</div>
              <p>Projects Completed</p>
            </div>
            <div className="text-center">
              <div className="bg-white bg-opacity-20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaUserTie className="text-3xl" />
              </div>
              <div className="text-4xl font-bold mb-2">{mentorsOnboarded}+</div>
              <p>Mentors Onboarded</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Testimonials */}
      <section ref={testimonialsRef} className="testimonials py-16 bg-gray-50">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Voices of Trust</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-blue-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                <div className="flex mt-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Partnerships & Collaborations */}
      <section ref={partnersRef} className="partnerships py-16">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Partners & Collaborations</h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            We work with leading organizations, universities, and companies worldwide to deliver 
            exceptional learning experiences and career opportunities.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="flex items-center justify-center p-4 bg-gray-100 rounded-lg h-32">
                <img src={partner.logo} alt={partner.name} className="max-h-16 max-w-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Why Choose Us? */}
      <section ref={whyUsRef} className="why-choose-us py-16 bg-gray-50">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Platform?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4 text-blue-600">
                  {advantage.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{advantage.title}</h3>
                  <p className="text-gray-600">{advantage.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Behind the Scenes (Optional) */}
      <section className="behind-scenes py-16">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Behind the Scenes</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <img 
              src="https://via.placeholder.com/400x300?text=Workspace" 
              alt="Our workspace" 
              className="rounded-lg shadow-md"
            />
            <img 
              src="https://via.placeholder.com/400x300?text=Team+Meeting" 
              alt="Team meeting" 
              className="rounded-lg shadow-md"
            />
            <img 
              src="https://via.placeholder.com/400x300?text=Learning+Session" 
              alt="Learning session" 
              className="rounded-lg shadow-md"
            />
          </div>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mt-8">
            We believe in transparency, collaboration, and continuous improvement. Our team works 
            remotely across different time zones, coming together regularly to innovate and improve 
            the learning experience for our community.
          </p>
        </div>
      </section>

      {/* 11. Call to Action */}
      <section className="cta-section py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto max-w-4xl text-center px-4">
          <h2 className="text-4xl font-bold mb-6">Join Us and Be Part of the Future of Learning</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            Start your journey today and join thousands of learners transforming their careers
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition duration-300 mb-4 sm:mb-0">
              Explore Courses
            </button>
            <button className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:bg-opacity-10 transition duration-300">
              Meet Our Mentors
            </button>
            <button className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:bg-opacity-10 transition duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;