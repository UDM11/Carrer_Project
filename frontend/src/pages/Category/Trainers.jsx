import React, { useState } from 'react';
import { 
  FiSearch, 
  FiStar, 
  FiMapPin, 
  FiDollarSign, 
  FiCalendar,
  FiCheck,
  FiMessageSquare,
  FiBook,
  FiCode,
  FiPieChart,
  FiBriefcase,
  FiTrendingUp,
  FiUser,
  FiClock,
  FiMail,
  FiArrowRight
} from 'react-icons/fi';

const Trainers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSkill, setSelectedSkill] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [selectedPrice, setSelectedPrice] = useState('all');
  const [selectedAvailability, setSelectedAvailability] = useState('all');
  const [selectedTrainer, setSelectedTrainer] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const categories = [
    { id: 'development', name: 'Development', icon: <FiCode className="text-blue-500" /> },
    { id: 'design', name: 'Design', icon: <FiPieChart className="text-purple-500" /> },
    { id: 'business', name: 'Business & Marketing', icon: <FiBriefcase className="text-green-500" /> },
    { id: 'it', name: 'IT & Software', icon: <FiTrendingUp className="text-red-500" /> },
    { id: 'career', name: 'Career Skills', icon: <FiUser className="text-yellow-500" /> }
  ];

  const skills = ['Python', 'JavaScript', 'UI/UX', 'React', 'Data Science', 'AI', 'Cloud', 'Leadership'];
  const locations = ['Remote', 'New York', 'San Francisco', 'London', 'Berlin', 'Tokyo'];
  const prices = ['$0-$50', '$50-$100', '$100-$200', '$200+'];
  const availabilityOptions = ['Available Now', 'This Week', 'Next Week'];

  const featuredTrainers = [
    {
      id: 1,
      name: 'Sarah Johnson',
      expertise: 'React & Frontend Development',
      rating: 4.9,
      reviews: 128,
      experience: '8+ years',
      company: 'Ex-Meta',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
      skills: ['React', 'JavaScript', 'TypeScript', 'UI/UX'],
      rate: '$120/hr',
      location: 'San Francisco, CA',
      available: 'Available Now'
    },
    {
      id: 2,
      name: 'Michael Chen',
      expertise: 'Data Science & AI',
      rating: 4.8,
      reviews: 95,
      experience: '10+ years',
      company: 'Google',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
      skills: ['Python', 'Machine Learning', 'TensorFlow', 'Data Analysis'],
      rate: '$150/hr',
      location: 'Remote',
      available: 'This Week'
    },
    {
      id: 3,
      name: 'Emma Wilson',
      expertise: 'UI/UX Design',
      rating: 4.7,
      reviews: 112,
      experience: '7+ years',
      company: 'Apple',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
      skills: ['Figma', 'UI Design', 'UX Research', 'Prototyping'],
      rate: '$130/hr',
      location: 'New York, NY',
      available: 'Available Now'
    }
  ];

  const allTrainers = [
    ...featuredTrainers,
    {
      id: 4,
      name: 'David Kim',
      expertise: 'Full-Stack Development',
      rating: 4.6,
      reviews: 87,
      experience: '6+ years',
      company: 'Microsoft',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
      skills: ['JavaScript', 'Node.js', 'React', 'AWS'],
      rate: '$110/hr',
      location: 'Remote',
      available: 'Next Week'
    },
    {
      id: 5,
      name: 'Lisa Rodriguez',
      expertise: 'Digital Marketing',
      rating: 4.5,
      reviews: 73,
      experience: '9+ years',
      company: 'Amazon',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
      skills: ['SEO', 'Content Marketing', 'Social Media', 'Analytics'],
      rate: '$100/hr',
      location: 'London, UK',
      available: 'Available Now'
    },
    {
      id: 6,
      name: 'James Wilson',
      expertise: 'Cloud & DevOps',
      rating: 4.7,
      reviews: 91,
      experience: '11+ years',
      company: 'AWS',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
      skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'],
      rate: '$140/hr',
      location: 'Remote',
      available: 'This Week'
    }
  ];

  const reviews = [
    {
      id: 1,
      name: 'Alex Thompson',
      comment: 'Sarah helped me transition to a frontend developer role. Her mentoring was invaluable!',
      rating: 5,
      date: '2 weeks ago'
    },
    {
      id: 2,
      name: 'Jessica Lee',
      comment: 'Michael explained complex ML concepts in a way that finally made sense. Highly recommend!',
      rating: 5,
      date: '1 month ago'
    },
    {
      id: 3,
      name: 'Ryan Park',
      comment: 'Emma\'s UI/UX guidance helped me redesign our product and increase user engagement by 40%.',
      rating: 4.5,
      date: '3 weeks ago'
    }
  ];

  const openTrainerProfile = (trainer) => {
    setSelectedTrainer(trainer);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedTrainer(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
   
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <section className="mb-16 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Find the Right Trainer for Your Career</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Connect with industry experts, learn from mentors, and achieve your goals faster.
          </p>
          
          {/* Search & Filter Bar */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiSearch className="text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search for skills (e.g., Python, UI/UX, AI)"
                  className="pl-10 pr-4 py-3 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg flex items-center justify-center">
                <FiSearch className="mr-2" /> Search Trainers
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <select 
                className="border border-gray-300 rounded-lg py-2 px-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="all">All Categories</option>
                {categories.map(category => (
                  <option key={category.id} value={category.id}>{category.name}</option>
                ))}
              </select>
              
              <select 
                className="border border-gray-300 rounded-lg py-2 px-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={selectedSkill}
                onChange={(e) => setSelectedSkill(e.target.value)}
              >
                <option value="all">All Skills</option>
                {skills.map(skill => (
                  <option key={skill} value={skill}>{skill}</option>
                ))}
              </select>
              
              <select 
                className="border border-gray-300 rounded-lg py-2 px-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
              >
                <option value="all">All Locations</option>
                {locations.map(location => (
                  <option key={location} value={location}>{location}</option>
                ))}
              </select>
              
              <select 
                className="border border-gray-300 rounded-lg py-2 px-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={selectedPrice}
                onChange={(e) => setSelectedPrice(e.target.value)}
              >
                <option value="all">Any Price</option>
                {prices.map(price => (
                  <option key={price} value={price}>{price}</option>
                ))}
              </select>
              
              <select 
                className="border border-gray-300 rounded-lg py-2 px-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={selectedAvailability}
                onChange={(e) => setSelectedAvailability(e.target.value)}
              >
                <option value="all">Any Availability</option>
                {availabilityOptions.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
          </div>
        </section>

        {/* Featured Trainers Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Trainers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredTrainers.map(trainer => (
              <div key={trainer.id} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <img src={trainer.image} alt={trainer.name} className="w-16 h-16 rounded-full object-cover mr-4" />
                    <div>
                      <h3 className="font-semibold text-lg">{trainer.name}</h3>
                      <p className="text-gray-600 text-sm">{trainer.expertise}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-4">
                    <div className="flex items-center text-yellow-500 mr-2">
                      <FiStar className="fill-current" />
                      <span className="ml-1 text-gray-700 font-medium">{trainer.rating}</span>
                    </div>
                    <span className="text-gray-500 text-sm">({trainer.reviews} reviews)</span>
                    <span className="mx-2 text-gray-300">•</span>
                    <span className="text-gray-500 text-sm">{trainer.experience}</span>
                  </div>
                  
                  <div className="mb-4">
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mr-2">
                      {trainer.company}
                    </span>
                  </div>
                  
                  <button 
                    onClick={() => openTrainerProfile(trainer)}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg"
                  >
                    View Profile
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Browse by Categories Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Browse by Categories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
            {categories.map(category => (
              <div 
                key={category.id} 
                className="bg-white rounded-xl shadow-sm p-6 text-center border border-gray-200 hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => setSelectedCategory(category.id)}
              >
                <div className="text-3xl mb-3 flex justify-center">{category.icon}</div>
                <h3 className="font-semibold">{category.name}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Trainer Directory Section */}
        <section className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">All Trainers</h2>
            <div className="text-gray-500">{allTrainers.length} trainers available</div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {allTrainers.map(trainer => (
              <div key={trainer.id} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200 hover:shadow-md transition-shadow">
                <div className="p-6">
                  <div className="flex">
                    <img src={trainer.image} alt={trainer.name} className="w-16 h-16 rounded-full object-cover mr-4" />
                    
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <div>
                          <h3 className="font-semibold text-lg">{trainer.name}</h3>
                          <p className="text-gray-600">{trainer.expertise}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-blue-600">{trainer.rate}</p>
                          <p className="text-sm text-gray-500">per hour</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center mt-2 mb-3">
                        <div className="flex items-center text-yellow-500 mr-2">
                          <FiStar className="fill-current" />
                          <span className="ml-1 text-gray-700 font-medium">{trainer.rating}</span>
                        </div>
                        <span className="text-gray-500 text-sm">({trainer.reviews} reviews)</span>
                        <span className="mx-2 text-gray-300">•</span>
                        <span className="text-gray-500 text-sm flex items-center">
                          <FiMapPin className="mr-1" /> {trainer.location}
                        </span>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {trainer.skills.map(skill => (
                          <span key={skill} className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                            {skill}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-green-600 flex items-center">
                          <FiClock className="mr-1" /> {trainer.available}
                        </span>
                        <div className="flex space-x-2">
                          <button className="border border-gray-300 text-gray-700 hover:bg-gray-50 py-2 px-4 rounded-lg text-sm">
                            Message
                          </button>
                          <button 
                            onClick={() => openTrainerProfile(trainer)}
                            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm"
                          >
                            Hire
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Reviews Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What Our Students Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map(review => (
              <div key={review.id} className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-500 mr-2">
                    {[...Array(5)].map((_, i) => (
                      <FiStar key={i} className={i < review.rating ? "fill-current" : ""} />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-4 italic">"{review.comment}"</p>
                <div className="flex justify-between items-center">
                  <span className="font-medium">{review.name}</span>
                  <span className="text-gray-500 text-sm">{review.date}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How It Works Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiSearch className="text-blue-600 text-2xl" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Search & Filter</h3>
              <p className="text-gray-600">Find trainers based on skills, experience, and availability</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiUser className="text-blue-600 text-2xl" />
              </div>
              <h3 className="font-semibold text-lg mb-2">View Profile</h3>
              <p className="text-gray-600">Check trainer profiles, reviews, and teaching style</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiCalendar className="text-blue-600 text-2xl" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Book Session</h3>
              <p className="text-gray-600">Schedule a session at your convenient time</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiBook className="text-blue-600 text-2xl" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Start Learning</h3>
              <p className="text-gray-600">Begin your personalized learning journey</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mb-16 text-center bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Start learning with the right trainer today 🚀</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of students who have accelerated their careers with personalized mentorship from industry experts.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-blue-600 hover:bg-gray-100 py-3 px-8 rounded-lg font-semibold">
              Browse Trainers
            </button>
            <button className="bg-blue-800 hover:bg-blue-900 text-white py-3 px-8 rounded-lg font-semibold border border-blue-700">
              Post a Training Request
            </button>
          </div>
        </section>
      </main>

      {/* Trainer Profile Modal */}
      {showModal && selectedTrainer && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-xl max-w-4xl w-full max-h-screen overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Trainer Profile</h2>
                <button onClick={closeModal} className="text-gray-400 hover:text-gray-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <img src={selectedTrainer.image} alt={selectedTrainer.name} className="w-full h-64 object-cover rounded-xl mb-4" />
                  
                  <div className="text-center">
                    <h3 className="text-xl font-bold">{selectedTrainer.name}</h3>
                    <p className="text-gray-600">{selectedTrainer.expertise}</p>
                    <p className="text-gray-500">{selectedTrainer.company}</p>
                    
                    <div className="flex items-center justify-center mt-2 mb-4">
                      <div className="flex items-center text-yellow-500 mr-2">
                        <FiStar className="fill-current" />
                        <span className="ml-1 text-gray-700 font-medium">{selectedTrainer.rating}</span>
                      </div>
                      <span className="text-gray-500">({selectedTrainer.reviews} reviews)</span>
                    </div>
                    
                    <div className="mb-4">
                      <span className="text-2xl font-bold text-blue-600">{selectedTrainer.rate}</span>
                      <span className="text-gray-500"> / hour</span>
                    </div>
                    
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium mb-4">
                      Book Session
                    </button>
                    
                    <div className="text-left">
                      <div className="flex items-center mb-2">
                        <FiMapPin className="text-gray-500 mr-2" />
                        <span>{selectedTrainer.location}</span>
                      </div>
                      <div className="flex items-center mb-2">
                        <FiClock className="text-gray-500 mr-2" />
                        <span className="text-green-600">{selectedTrainer.available}</span>
                      </div>
                      <div className="flex items-center">
                        <FiCheck className="text-gray-500 mr-2" />
                        <span>Verified Trainer</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="md:w-2/3">
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-3">About Me</h3>
                    <p className="text-gray-700">
                      {selectedTrainer.name} is a {selectedTrainer.expertise.toLowerCase()} with {selectedTrainer.experience} of experience. 
                      Previously worked at {selectedTrainer.company} and specializes in helping students 
                      master complex concepts through practical, real-world examples.
                    </p>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-3">Skills</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedTrainer.skills.map(skill => (
                        <span key={skill} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-3">Pricing Packages</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="border border-gray-200 rounded-lg p-4">
                        <h4 className="font-semibold">Single Session</h4>
                        <p className="text-2xl font-bold text-blue-600 my-2">{selectedTrainer.rate}</p>
                        <p className="text-gray-600 text-sm">One 60-minute session</p>
                      </div>
                      <div className="border border-blue-200 bg-blue-50 rounded-lg p-4">
                        <h4 className="font-semibold">5-Session Package</h4>
                        <p className="text-2xl font-bold text-blue-600 my-2">${Math.round(parseInt(selectedTrainer.rate.substring(1)) * 5 * 0.9)}</p>
                        <p className="text-gray-600 text-sm">Save 10% with package</p>
                      </div>
                      <div className="border border-gray-200 rounded-lg p-4">
                        <h4 className="font-semibold">10-Session Package</h4>
                        <p className="text-2xl font-bold text-blue-600 my-2">${Math.round(parseInt(selectedTrainer.rate.substring(1)) * 10 * 0.85)}</p>
                        <p className="text-gray-600 text-sm">Save 15% with package</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Recent Reviews</h3>
                    <div className="space-y-4">
                      {reviews.slice(0, 2).map(review => (
                        <div key={review.id} className="border border-gray-200 rounded-lg p-4">
                          <div className="flex items-center mb-2">
                            <div className="flex text-yellow-500 mr-2">
                              {[...Array(5)].map((_, i) => (
                                <FiStar key={i} className={i < review.rating ? "fill-current" : ""} />
                              ))}
                            </div>
                            <span className="text-gray-500 text-sm">{review.date}</span>
                          </div>
                          <p className="text-gray-700 mb-2">"{review.comment}"</p>
                          <span className="font-medium text-gray-900">- {review.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Trainers;