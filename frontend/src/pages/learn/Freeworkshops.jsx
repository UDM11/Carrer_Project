import { useState } from 'react';
import { FiCalendar, FiClock, FiUser, FiVideo, FiAward, FiUsers, FiBookOpen, FiCheck, FiArrowRight, FiStar, FiMapPin } from 'react-icons/fi';

const FreeWorkshops = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  // Sample data for workshop benefits
  const benefits = [
    {
      icon: <FiUser className="text-2xl" />,
      title: "Learn from Industry Mentors",
      description: "Get trained by professionals with real-world experience"
    },
    {
      icon: <FiBookOpen className="text-2xl" />,
      title: "Hands-on Practice & Live Demos",
      description: "Apply what you learn through practical exercises"
    },
    {
      icon: <FiUsers className="text-2xl" />,
      title: "Networking with Peers",
      description: "Connect with like-minded learners and professionals"
    },
    {
      icon: <FiAward className="text-2xl" />,
      title: "Certificate of Participation",
      description: "Get recognition for your learning journey"
    },
    {
      icon: <FiVideo className="text-2xl" />,
      title: "100% Free Access",
      description: "No hidden fees or charges for any workshop"
    },
    {
      icon: <FiClock className="text-2xl" />,
      title: "Lifetime Access to Recordings",
      description: "Can't attend live? Watch the recording later"
    }
  ];

  // Sample data for upcoming workshops
  const upcomingWorkshops = [
    {
      id: 1,
      title: "Intro to AI for Beginners",
      date: "2023-10-15",
      time: "6:00 PM - 8:00 PM EST",
      trainer: {
        name: "Dr. Sarah Johnson",
        role: "AI Research Lead",
        company: "TechInnovate",
        photo: "https://via.placeholder.com/50/3B82F6/FFFFFF?text=SJ"
      },
      description: "Learn the fundamentals of artificial intelligence and how it's transforming industries. No prior experience required.",
      category: "ai-ml",
      seats: 45,
      totalSeats: 100,
      level: "Beginner",
      format: "Live Online"
    },
    {
      id: 2,
      title: "Web Development with React",
      date: "2023-10-18",
      time: "7:00 PM - 9:00 PM EST",
      trainer: {
        name: "Michael Chen",
        role: "Senior Frontend Developer",
        company: "WebSolutions Inc",
        photo: "https://via.placeholder.com/50/10B981/FFFFFF?text=MC"
      },
      description: "Build your first React application with best practices and modern development techniques.",
      category: "development",
      seats: 22,
      totalSeats: 50,
      level: "Intermediate",
      format: "Live Online"
    },
    {
      id: 3,
      title: "UI/UX Design Fundamentals",
      date: "2023-10-22",
      time: "5:00 PM - 7:00 PM EST",
      trainer: {
        name: "Emma Wilson",
        role: "Product Design Lead",
        company: "CreativeLabs",
        photo: "https://via.placeholder.com/50/EC4899/FFFFFF?text=EW"
      },
      description: "Learn the principles of good design and create user-friendly interfaces that delight users.",
      category: "design",
      seats: 78,
      totalSeats: 100,
      level: "Beginner",
      format: "Live Online"
    },
    {
      id: 4,
      title: "Digital Marketing Strategies",
      date: "2023-10-25",
      time: "6:30 PM - 8:30 PM EST",
      trainer: {
        name: "Alex Rodriguez",
        role: "Marketing Director",
        company: "GrowthHackers",
        photo: "https://via.placeholder.com/50/F59E0B/FFFFFF?text=AR"
      },
      description: "Discover effective digital marketing strategies to grow your business or personal brand.",
      category: "business",
      seats: 15,
      totalSeats: 50,
      level: "All Levels",
      format: "Live Online"
    }
  ];

  // Sample data for workshop categories
  const categories = [
    { id: 'all', name: 'All Workshops' },
    { id: 'ai-ml', name: 'AI & Machine Learning' },
    { id: 'development', name: 'Development' },
    { id: 'design', name: 'Design' },
    { id: 'business', name: 'Business & Marketing' },
    { id: 'it-software', name: 'IT & Software' }
  ];

  // Sample data for trainers
  const trainers = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      expertise: "Artificial Intelligence & Machine Learning",
      company: "TechInnovate",
      workshops: 12,
      rating: 4.9,
      photo: "https://via.placeholder.com/80/3B82F6/FFFFFF?text=SJ"
    },
    {
      id: 2,
      name: "Michael Chen",
      expertise: "Full-Stack Development",
      company: "WebSolutions Inc",
      workshops: 8,
      rating: 4.8,
      photo: "https://via.placeholder.com/80/10B981/FFFFFF?text=MC"
    },
    {
      id: 3,
      name: "Emma Wilson",
      expertise: "UI/UX & Product Design",
      company: "CreativeLabs",
      workshops: 10,
      rating: 4.9,
      photo: "https://via.placeholder.com/80/EC4899/FFFFFF?text=EW"
    },
    {
      id: 4,
      name: "Alex Rodriguez",
      expertise: "Digital Marketing & Growth",
      company: "GrowthHackers",
      workshops: 6,
      rating: 4.7,
      photo: "https://via.placeholder.com/80/F59E0B/FFFFFF?text=AR"
    }
  ];

  // Sample data for past workshops
  const pastWorkshops = [
    {
      id: 1,
      title: "Python for Data Science",
      date: "2023-09-20",
      participants: 250,
      image: "https://via.placeholder.com/300x200/3B82F6/FFFFFF?text=Python+Workshop",
      feedback: "Excellent introduction to data science concepts!"
    },
    {
      id: 2,
      title: "Figma for Beginners",
      date: "2023-09-15",
      participants: 180,
      image: "https://via.placeholder.com/300x200/EC4899/FFFFFF?text=Figma+Workshop",
      feedback: "Loved the hands-on approach to learning Figma!"
    },
    {
      id: 3,
      title: "Cloud Computing Basics",
      date: "2023-09-10",
      participants: 195,
      image: "https://via.placeholder.com/300x200/6366F1/FFFFFF?text=Cloud+Workshop",
      feedback: "Great overview of cloud services and providers."
    }
  ];

  // Sample data for testimonials
  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Student",
      location: "India",
      quote: "This free AI workshop gave me confidence to pursue a career in data science. The instructor was amazing!",
      workshop: "Intro to AI for Beginners",
      avatar: "https://via.placeholder.com/50/3B82F6/FFFFFF?text=PS"
    },
    {
      id: 2,
      name: "James Wilson",
      role: "Marketing Executive",
      location: "USA",
      quote: "I implemented strategies from the digital marketing workshop and saw a 35% increase in engagement!",
      workshop: "Digital Marketing Strategies",
      avatar: "https://via.placeholder.com/50/10B981/FFFFFF?text=JW"
    },
    {
      id: 3,
      name: "Maria Garcia",
      role: "Graphic Designer",
      location: "Spain",
      quote: "The UI/UX workshop helped me transition from graphic design to product design. So grateful for this opportunity!",
      workshop: "UI/UX Design Fundamentals",
      avatar: "https://via.placeholder.com/50/EC4899/FFFFFF?text=MG"
    }
  ];

  // Sample data for how it works
  const howItWorks = [
    {
      step: 1,
      title: "Register Online",
      description: "Sign up for free with just your email",
      icon: <FiCalendar className="text-2xl" />
    },
    {
      step: 2,
      title: "Join Live Session",
      description: "Attend the workshop at the scheduled time",
      icon: <FiVideo className="text-2xl" />
    },
    {
      step: 3,
      title: "Get Resources",
      description: "Receive materials and practice exercises",
      icon: <FiBookOpen className="text-2xl" />
    },
    {
      step: 4,
      title: "Earn Certificate",
      description: "Get a certificate of participation",
      icon: <FiAward className="text-2xl" />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Join Our Free Workshops</h1>
              <p className="text-xl mb-8 opacity-90">Learn from experts, get hands-on experience, and boost your career — all for free.</p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
                  Register Now
                </button>
                <button className="bg-transparent border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition">
                  Upcoming Workshops
                </button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="bg-white/20 p-6 rounded-2xl w-full max-w-md">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl text-center">
                    <FiVideo className="text-3xl mx-auto mb-2" />
                    <p className="text-sm">Live Online Sessions</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl text-center">
                    <FiUsers className="text-3xl mx-auto mb-2" />
                    <p className="text-sm">Expert Instructors</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl text-center">
                    <FiAward className="text-3xl mx-auto mb-2" />
                    <p className="text-sm">Free Certificate</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl text-center">
                    <FiClock className="text-3xl mx-auto mb-2" />
                    <p className="text-sm">Lifetime Access</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Why Attend Our Workshops</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
                <div className="text-blue-600 mb-4">
                  {benefit.icon}
                </div>
                <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Workshops */}
      <section className="py-12 px-4 bg-gray-100">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-8">Upcoming Workshops</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingWorkshops.map((workshop) => (
              <div key={workshop.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-bold text-xl mb-1">{workshop.title}</h3>
                      <div className="flex items-center text-gray-600 text-sm mb-2">
                        <FiCalendar className="mr-1" />
                        <span>{workshop.date}</span>
                        <FiClock className="ml-3 mr-1" />
                        <span>{workshop.time}</span>
                      </div>
                    </div>
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${workshop.level === 'Beginner' ? 'bg-green-100 text-green-800' : workshop.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' : 'bg-blue-100 text-blue-800'}`}>
                      {workshop.level}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{workshop.description}</p>
                  
                  <div className="flex items-center mb-4">
                    <img src={workshop.trainer.photo} alt={workshop.trainer.name} className="w-10 h-10 rounded-full mr-3" />
                    <div>
                      <p className="font-medium">{workshop.trainer.name}</p>
                      <p className="text-sm text-gray-600">{workshop.trainer.role}, {workshop.trainer.company}</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <FiVideo className="mr-1" />
                      <span>{workshop.format}</span>
                    </div>
                    <div className="text-sm text-gray-600">
                      <span className="font-medium">{workshop.seats}</span> of {workshop.totalSeats} seats left
                    </div>
                  </div>
                  
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                    <div 
                      className="bg-blue-600 h-2 rounded-full" 
                      style={{ width: `${(workshop.seats / workshop.totalSeats) * 100}%` }}
                    ></div>
                  </div>
                  
                  <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                    Register Now
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <button className="text-blue-600 font-semibold hover:text-blue-800 transition flex items-center justify-center">
              View All Upcoming Workshops <FiArrowRight className="ml-1" />
            </button>
          </div>
        </div>
      </section>

      {/* Workshop Categories */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-8">Browse by Category</h2>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-5 py-2 rounded-full transition ${activeCategory === category.id ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-100'}`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Trainers */}
      <section className="py-12 px-4 bg-gray-100">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Trainers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trainers.map((trainer) => (
              <div key={trainer.id} className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition">
                <img src={trainer.photo} alt={trainer.name} className="w-20 h-20 rounded-full mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-1">{trainer.name}</h3>
                <p className="text-gray-600 text-sm mb-3">{trainer.expertise}</p>
                <p className="text-gray-600 text-sm mb-4">{trainer.company}</p>
                <div className="flex items-center justify-center mb-4">
                  <div className="flex text-yellow-400 mr-1">
                    <FiStar className="fill-current" />
                  </div>
                  <span className="text-sm text-gray-600">{trainer.rating}</span>
                  <span className="text-sm text-gray-600 mx-2">•</span>
                  <span className="text-sm text-gray-600">{trainer.workshops} workshops</span>
                </div>
                <button className="text-blue-600 font-semibold hover:text-blue-800 transition flex items-center justify-center">
                  View Profile <FiArrowRight className="ml-1" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Workshops */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Past Workshops Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pastWorkshops.map((workshop) => (
              <div key={workshop.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition">
                <img src={workshop.image} alt={workshop.title} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">{workshop.title}</h3>
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center text-sm text-gray-600">
                      <FiCalendar className="mr-1" />
                      <span>{workshop.date}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <FiUsers className="mr-1" />
                      <span>{workshop.participants} participants</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 italic">"{workshop.feedback}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 px-4 bg-gray-100">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">What Participants Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition">
                <div className="flex items-start mb-4">
                  <div className="text-3xl text-gray-300 mr-2">"</div>
                  <p className="text-gray-700 italic">{testimonial.quote}</p>
                </div>
                <div className="flex items-center mt-6">
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <div className="flex items-center text-sm text-gray-600">
                      <FiMapPin className="mr-1" />
                      <span>{testimonial.location}</span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <span className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded">
                    Attended: {testimonial.workshop}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.map((step) => (
              <div key={step.step} className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition">
                <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mx-auto mb-4">
                  {step.icon}
                </div>
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                  {step.step}
                </div>
                <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Reserve Your Spot Today – It's Free!</h2>
          <p className="text-xl mb-10 opacity-90">Join thousands of learners who have benefited from our free workshops</p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition">
              Register Now
            </button>
            <button className="bg-transparent border-2 border-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition">
              Explore All Workshops
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FreeWorkshops;