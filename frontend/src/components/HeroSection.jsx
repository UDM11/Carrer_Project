import React from 'react'
import { 

  FaGlobeAmericas
 
} from 'react-icons/fa';

const HeroSection = () => {
  return (
    <div className='font-sans text-gray-900'>
         {/* Hero Section */}
      <section className="max-w-7xl mx-auto py-16 px-6 flex flex-col md:flex-row items-center justify-between">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Build Your <span className="text-blue-500">Global Career</span><br />
            With World-Class <span className="text-blue-500">Mentorship</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Join our international career development platform connecting students, trainers, and companies across 50+ countries in one ecosystem of growth and opportunity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors shadow-md hover:shadow-lg">
              Explore Courses
            </button>
            <button className="border-2 border-blue-500 text-blue-500 px-6 py-3 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition-colors">
              Join as Trainer
            </button>
            <button className="border-2 border-blue-500 text-blue-500 px-6 py-3 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition-colors">
              Hire Global Talent
            </button>
          </div>
        </div>
        
        <div className="relative w-full md:w-1/2 max-w-md">
          <img 
            src="https://jthemes.net/themes/wp/jobbox/wp-content/uploads/2023/03/hero-image.png" 
            alt="Global team collaboration" 
            className="rounded-2xl shadow-xl p-5"
          />
          <div className="absolute -top-4 -right-4 bg-white p-2 mt-6 mr-10 rounded-full shadow-lg animate-pulse">
            <FaGlobeAmericas className="text-3xl text-blue-500" />
          </div>
        </div>
      </section>
      </div>
  )
}

export default HeroSection