import React, { useState } from 'react';

const Design = () => {
  // State for interactive elements
  const [activePath, setActivePath] = useState('all');
  const [activeTool, setActiveTool] = useState('all');
  const [expandedFaq, setExpandedFaq] = useState(null);

  // Sample data
  const designPaths = [
    {
      id: 1,
      title: "UI/UX Design",
      description: "Create intuitive user interfaces and experiences for digital products",
      duration: "8-10 weeks",
      level: "Beginner to Advanced",
      category: "ui-ux"
    },
    {
      id: 2,
      title: "Graphic Design",
      description: "Master visual communication, branding, and print design",
      duration: "6-8 weeks",
      level: "Beginner to Intermediate",
      category: "graphic"
    },
    {
      id: 3,
      title: "Product Design",
      description: "Design physical and digital products from concept to production",
      duration: "10-12 weeks",
      level: "Intermediate to Advanced",
      category: "product"
    },
    {
      id: 4,
      title: "Motion Graphics",
      description: "Create engaging animations and visual effects for various media",
      duration: "6-8 weeks",
      level: "Intermediate",
      category: "motion"
    },
    {
      id: 5,
      title: "Branding & Visual Identity",
      description: "Develop comprehensive brand systems and visual identities",
      duration: "8-10 weeks",
      level: "Intermediate to Advanced",
      category: "branding"
    }
  ];

  const tools = [
    {
      id: 1,
      name: "Figma",
      description: "Collaborative interface design tool",
      useCase: "UI/UX design, prototyping, design systems",
      category: "ui-ux"
    },
    {
      id: 2,
      name: "Adobe XD",
      description: "Vector-based design tool for web and mobile apps",
      useCase: "Wireframing, prototyping, UI design",
      category: "ui-ux"
    },
    {
      id: 3,
      name: "Sketch",
      description: "Digital design platform for Mac",
      useCase: "Interface design, vector editing",
      category: "ui-ux"
    },
    {
      id: 4,
      name: "Photoshop",
      description: "Raster graphics editor",
      useCase: "Photo editing, digital art, graphics",
      category: "graphic"
    },
    {
      id: 5,
      name: "Illustrator",
      description: "Vector graphics editor",
      useCase: "Illustration, logos, icons, typography",
      category: "graphic"
    },
    {
      id: 6,
      name: "After Effects",
      description: "Motion graphics and visual effects software",
      useCase: "Animation, visual effects, motion graphics",
      category: "motion"
    }
  ];

  const courses = [
    {
      id: 1,
      title: "Wireframing & Prototyping",
      description: "Learn to create effective wireframes and interactive prototypes",
      duration: "4 weeks",
      difficulty: "Beginner",
      icon: "📐"
    },
    {
      id: 2,
      title: "UI Layouts & Components",
      description: "Master layout principles and component-based design",
      duration: "5 weeks",
      difficulty: "Intermediate",
      icon: "🎨"
    },
    {
      id: 3,
      title: "Design Systems",
      description: "Create scalable design systems for consistent UI",
      duration: "6 weeks",
      difficulty: "Advanced",
      icon: "📦"
    },
    {
      id: 4,
      title: "Color Theory & Typography",
      description: "Understand color psychology and typographic principles",
      duration: "3 weeks",
      difficulty: "Beginner",
      icon: "🌈"
    }
  ];

  const mentors = [
    {
      id: 1,
      name: "Alex Morgan",
      expertise: "UI/UX Design, Design Systems",
      experience: "Lead Designer at TechCorp",
      rating: 4.9,
      reviews: 142
    },
    {
      id: 2,
      name: "Sophia Kim",
      expertise: "Product Design, UX Research",
      experience: "Former Apple Design Team",
      rating: 4.8,
      reviews: 98
    },
    {
      id: 3,
      name: "Marcus Johnson",
      expertise: "Branding, Visual Identity",
      experience: "Creative Director at BrandStudio",
      rating: 4.7,
      reviews: 117
    }
  ];

  const faqs = [
    {
      id: 1,
      question: "Do I need a design background to start?",
      answer: "No prior experience is needed. Our courses are designed for all levels, from complete beginners to experienced designers looking to upgrade their skills."
    },
    {
      id: 2,
      question: "Which design tool should I start with?",
      answer: "We recommend starting with Figma as it's the industry standard for UI/UX design, has a free tier, and is relatively easy to learn. Our learning paths will guide you through the right tools for your goals."
    },
    {
      id: 3,
      question: "How do I build a design portfolio?",
      answer: "We help you build a portfolio through hands-on projects, case studies, and personalized feedback from mentors. You'll graduate with 3-5 portfolio-ready projects."
    }
  ];

  // Filter design paths based on selection
  const filteredPaths = activePath === 'all' 
    ? designPaths 
    : designPaths.filter(path => path.category === activePath);

  // Filter tools based on selection
  const filteredTools = activeTool === 'all' 
    ? tools 
    : tools.filter(tool => tool.category === activeTool);

  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-500 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Design Beautiful Experiences</h1>
            <p className="text-xl mb-8 opacity-90">Learn UI/UX, graphic design, and product design with hands-on tools like Figma, Adobe XD, and Sketch.</p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-purple-600 font-semibold py-3 px-6 rounded-lg hover:bg-purple-50 transition">Explore Design Paths</button>
              <button className="bg-transparent border-2 border-white text-white font-semibold py-3 px-6 rounded-lg hover:bg-white hover:bg-opacity-10 transition">Start Learning</button>
              <button className="bg-transparent border-2 border-white text-white font-semibold py-3 px-6 rounded-lg hover:bg-white hover:bg-opacity-10 transition">Join a Mentor Session</button>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white bg-opacity-20 p-4 rounded-xl h-40 flex items-center justify-center">
                <span className="text-5xl">💻</span>
              </div>
              <div className="bg-white bg-opacity-20 p-4 rounded-xl h-40 flex items-center justify-center mt-8">
                <span className="text-5xl">🎨</span>
              </div>
              <div className="bg-white bg-opacity-20 p-4 rounded-xl h-40 flex items-center justify-center">
                <span className="text-5xl">📱</span>
              </div>
              <div className="bg-white bg-opacity-20 p-4 rounded-xl h-40 flex items-center justify-center mt-8">
                <span className="text-5xl">🖌️</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Path Explorer */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Explore Design Specializations</h2>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button 
              className={`px-4 py-2 rounded-full ${activePath === 'all' ? 'bg-purple-600 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
              onClick={() => setActivePath('all')}
            >
              All Paths
            </button>
            <button 
              className={`px-4 py-2 rounded-full ${activePath === 'ui-ux' ? 'bg-purple-600 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
              onClick={() => setActivePath('ui-ux')}
            >
              UI/UX Design
            </button>
            <button 
              className={`px-4 py-2 rounded-full ${activePath === 'graphic' ? 'bg-purple-600 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
              onClick={() => setActivePath('graphic')}
            >
              Graphic Design
            </button>
            <button 
              className={`px-4 py-2 rounded-full ${activePath === 'product' ? 'bg-purple-600 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
              onClick={() => setActivePath('product')}
            >
              Product Design
            </button>
            <button 
              className={`px-4 py-2 rounded-full ${activePath === 'motion' ? 'bg-purple-600 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
              onClick={() => setActivePath('motion')}
            >
              Motion Graphics
            </button>
            <button 
              className={`px-4 py-2 rounded-full ${activePath === 'branding' ? 'bg-purple-600 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
              onClick={() => setActivePath('branding')}
            >
              Branding
            </button>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPaths.map(path => (
              <div key={path.id} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition">
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2">{path.title}</h3>
                  <p className="text-gray-600 mb-4">{path.description}</p>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>{path.duration}</span>
                    <span>{path.level}</span>
                  </div>
                </div>
                <div className="bg-gray-50 px-6 py-4">
                  <button className="text-purple-600 font-semibold hover:text-purple-800 transition">
                    Explore Path →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Platforms */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Master Design Tools</h2>
          <p className="text-center text-gray-600 mb-12">Learn industry-standard tools used by professionals</p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button 
              className={`px-4 py-2 rounded-full ${activeTool === 'all' ? 'bg-purple-600 text-white' : 'bg-white hover:bg-gray-100'}`}
              onClick={() => setActiveTool('all')}
            >
              All Tools
            </button>
            <button 
              className={`px-4 py-2 rounded-full ${activeTool === 'ui-ux' ? 'bg-purple-600 text-white' : 'bg-white hover:bg-gray-100'}`}
              onClick={() => setActiveTool('ui-ux')}
            >
              UI/UX Tools
            </button>
            <button 
              className={`px-4 py-2 rounded-full ${activeTool === 'graphic' ? 'bg-purple-600 text-white' : 'bg-white hover:bg-gray-100'}`}
              onClick={() => setActiveTool('graphic')}
            >
              Graphic Design
            </button>
            <button 
              className={`px-4 py-2 rounded-full ${activeTool === 'motion' ? 'bg-purple-600 text-white' : 'bg-white hover:bg-gray-100'}`}
              onClick={() => setActiveTool('motion')}
            >
              Motion Graphics
            </button>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTools.map(tool => (
              <div key={tool.id} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition">
                <div className="p-6">
                  <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center text-2xl mb-4">
                    {tool.name === "Figma" && "🖌️"}
                    {tool.name === "Adobe XD" && "📐"}
                    {tool.name === "Sketch" && "✏️"}
                    {tool.name === "Photoshop" && "🎨"}
                    {tool.name === "Illustrator" && "✳️"}
                    {tool.name === "After Effects" && "🎬"}
                  </div>
                  <h3 className="font-bold text-lg mb-2">{tool.name}</h3>
                  <p className="text-gray-600 mb-2">{tool.description}</p>
                  <p className="text-sm text-gray-500 mb-4">Best for: {tool.useCase}</p>
                  <button className="w-full bg-purple-600 text-white font-semibold py-2 rounded-lg hover:bg-purple-700 transition">
                    Start Learning
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses & Skill Tracks */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Design Courses & Skill Tracks</h2>
          <p className="text-center text-gray-600 mb-12">Build essential design skills through structured learning</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map(course => (
              <div key={course.id} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition">
                <div className="h-40 bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                  <span className="text-5xl text-white">{course.icon}</span>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-lg mb-2">{course.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{course.description}</p>
                  <div className="flex justify-between text-sm text-gray-500 mb-4">
                    <span>{course.duration}</span>
                    <span className="bg-gray-100 px-2 py-1 rounded-full">{course.difficulty}</span>
                  </div>
                  <button className="w-full bg-purple-600 text-white font-semibold py-2 rounded-lg hover:bg-purple-700 transition">
                    View Course
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects & Design Challenges */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Projects & Design Challenges</h2>
          <p className="text-center text-gray-600 mb-12">Apply your skills to real-world design problems</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 text-xl mb-4">
                📱
              </div>
              <h3 className="font-bold text-xl mb-2">Redesign a Landing </h3>
              <p className="text-gray-600 mb-4">Take an existing landing  and improve its design, usability, and conversion potential.</p>
              <div className="mb-4">
                <h4 className="font-semibold mb-2">Project Guidelines:</h4>
                <ul className="list-disc list-inside text-gray-600 text-sm">
                  <li>Conduct competitor analysis</li>
                  <li>Create wireframes and mockups</li>
                  <li>Build interactive prototype</li>
                  <li>Present your design decisions</li>
                </ul>
              </div>
              <div className="flex gap-4">
                <button className="bg-purple-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-purple-700 transition">
                  Start Project
                </button>
                <button className="bg-white border border-purple-600 text-purple-600 font-semibold py-2 px-6 rounded-lg hover:bg-purple-50 transition">
                  View Brief
                </button>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center text-pink-600 text-xl mb-4">
                🎯
              </div>
              <h3 className="font-bold text-xl mb-2">Mobile App Prototype</h3>
              <p className="text-gray-600 mb-4">Design a complete mobile app experience from user flows to high-fidelity interactive prototype.</p>
              <div className="mb-4">
                <h4 className="font-semibold mb-2">Project Guidelines:</h4>
                <ul className="list-disc list-inside text-gray-600 text-sm">
                  <li>Define user personas and scenarios</li>
                  <li>Create user journey maps</li>
                  <li>Design key screens and interactions</li>
                  <li>Test and iterate on your designs</li>
                </ul>
              </div>
              <div className="flex gap-4">
                <button className="bg-purple-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-purple-700 transition">
                  Start Project
                </button>
                <button className="bg-white border border-purple-600 text-purple-600 font-semibold py-2 px-6 rounded-lg hover:bg-purple-50 transition">
                  View Brief
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mentors & Expert Designers */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Learn from Design Experts</h2>
          <p className="text-center text-gray-600 mb-12">Get guidance from industry professionals</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {mentors.map(mentor => (
              <div key={mentor.id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
                <div className="h-48 bg-gradient-to-r from-purple-400 to-pink-400 relative">
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-24 h-24 bg-white rounded-full p-1">
                    <div className="w-full h-full bg-gray-200 rounded-full flex items-center justify-center text-3xl">
                      👤
                    </div>
                  </div>
                </div>
                <div className="pt-12 pb-6 px-6 text-center">
                  <h3 className="font-bold text-xl">{mentor.name}</h3>
                  <p className="text-purple-600 font-semibold">{mentor.expertise}</p>
                  <p className="text-gray-600 text-sm my-3">{mentor.experience}</p>
                  <div className="flex items-center justify-center gap-2">
                    <div className="flex text-yellow-400">
                      {"★".repeat(Math.floor(mentor.rating))}
                      {"☆".repeat(5 - Math.floor(mentor.rating))}
                    </div>
                    <span className="text-gray-500 text-sm">({mentor.reviews} reviews)</span>
                  </div>
                  <button className="mt-6 bg-purple-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-purple-700 transition">
                    Book Session
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio & Success Stories */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Portfolio & Success Stories</h2>
          <p className="text-center text-gray-600 mb-12">See what our students have created</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="h-48 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-white text-xl font-semibold">Mobile App UI Design</span>
              </div>
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-lg mr-4">
                  👤
                </div>
                <div>
                  <h3 className="font-bold">Jessica Lee</h3>
                  <p className="text-purple-600">UI Designer at TechStart</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4 italic">"The projects and mentor feedback helped me build a portfolio that got me hired within 2 months of completing the program."</p>
              <button className="text-purple-600 font-semibold hover:text-purple-800 transition flex items-center">
                View Full Case Study <span className="ml-1">→</span>
              </button>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="h-48 bg-gradient-to-r from-pink-500 to-orange-500 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-white text-xl font-semibold">Brand Identity Project</span>
              </div>
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-lg mr-4">
                  👤
                </div>
                <div>
                  <h3 className="font-bold">David Chen</h3>
                  <p className="text-purple-600">Freelance Brand Designer</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4 italic">"I transitioned from graphic design to comprehensive brand systems thanks to the mentorship and project-based learning approach."</p>
              <button className="text-purple-600 font-semibold hover:text-purple-800 transition flex items-center">
                View Full Case Study <span className="ml-1">→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Design Skills */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Trending Design Skills</h2>
          <p className="text-center text-gray-600 mb-12">Stay ahead with in-demand design capabilities</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-2xl mx-auto mb-4">
                📱
              </div>
              <h3 className="font-bold text-lg mb-2">Responsive Web Design</h3>
              <p className="text-gray-600 text-sm mb-4">Create websites that work beautifully across all device sizes</p>
              <button className="text-blue-600 font-semibold text-sm hover:text-blue-800 transition">
                Explore Skill →
              </button>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 text-2xl mx-auto mb-4">
                📦
              </div>
              <h3 className="font-bold text-lg mb-2">Design Systems</h3>
              <p className="text-gray-600 text-sm mb-4">Create scalable, consistent design systems for products</p>
              <button className="text-purple-600 font-semibold text-sm hover:text-purple-800 transition">
                Explore Skill →
              </button>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center text-pink-600 text-2xl mx-auto mb-4">
                ✍️
              </div>
              <h3 className="font-bold text-lg mb-2">UX Writing</h3>
              <p className="text-gray-600 text-sm mb-4">Craft clear, helpful text that improves user experience</p>
              <button className="text-pink-600 font-semibold text-sm hover:text-pink-800 transition">
                Explore Skill →
              </button>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-2xl mx-auto mb-4">
                ✨
              </div>
              <h3 className="font-bold text-lg mb-2">Micro-interactions</h3>
              <p className="text-gray-600 text-sm mb-4">Design subtle animations that enhance user experience</p>
              <button className="text-green-600 font-semibold text-sm hover:text-green-800 transition">
                Explore Skill →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="font-bold text-lg mb-2">Learn Design Fundamentals</h3>
              <p className="text-gray-600">Master design principles, tools, and methodologies through structured courses.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center text-pink-600 text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="font-bold text-lg mb-2">Practice with Tools & Projects</h3>
              <p className="text-gray-600">Apply your skills to real-world projects using industry-standard design tools.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="font-bold text-lg mb-2">Build a Portfolio</h3>
              <p className="text-gray-600">Create a professional portfolio showcasing your best work and design process.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-2xl font-bold mx-auto mb-4">4</div>
              <h3 className="font-bold text-lg mb-2">Land Design Jobs</h3>
              <p className="text-gray-600">Get career support, interview preparation, and connections to hiring partners.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Resources & Templates */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Resources & Templates</h2>
          <p className="text-center text-gray-600 mb-12">Free design assets to accelerate your workflow</p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 text-xl mb-4">
                📐
              </div>
              <h3 className="font-bold text-lg mb-2">Wireframe Kit</h3>
              <p className="text-gray-600 mb-4">Comprehensive set of wireframing components for web and mobile.</p>
              <button className="text-purple-600 font-semibold hover:text-purple-800 transition flex items-center">
                Download Free <span className="ml-1">→</span>
              </button>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center text-pink-600 text-xl mb-4">
                🎨
              </div>
              <h3 className="font-bold text-lg mb-2">UI Component Library</h3>
              <p className="text-gray-600 mb-4">Reusable UI components for faster design system development.</p>
              <button className="text-pink-600 font-semibold hover:text-pink-800 transition flex items-center">
                Download Free <span className="ml-1">→</span>
              </button>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 text-xl mb-4">
                🎯
              </div>
              <h3 className="font-bold text-lg mb-2">Presentation Templates</h3>
              <p className="text-gray-600 mb-4">Beautifully designed templates for case studies and client presentations.</p>
              <button className="text-blue-600 font-semibold hover:text-blue-800 transition flex items-center">
                Download Free <span className="ml-1">→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Design Events & Webinars */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Design Events & Webinars</h2>
          <p className="text-center text-gray-600 mb-12">Join live learning sessions with design experts</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="bg-purple-100 text-purple-600 text-sm font-semibold px-3 py-1 rounded-full">Design Jam</span>
                  <h3 className="font-bold text-xl mt-2">UI Design Challenge</h3>
                </div>
                <div className="text-right">
                  <div className="font-bold text-lg">June 18</div>
                  <div className="text-gray-500">6:00 PM EST</div>
                </div>
              </div>
              <p className="text-gray-600 mb-4">Collaborate with other designers to solve a real UI problem in a 2-hour timed session.</p>
              <button className="bg-purple-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-purple-700 transition">
                Register Now
              </button>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="bg-pink-100 text-pink-600 text-sm font-semibold px-3 py-1 rounded-full">Webinar</span>
                  <h3 className="font-bold text-xl mt-2">UX Case Study Deep Dive</h3>
                </div>
                <div className="text-right">
                  <div className="font-bold text-lg">June 25</div>
                  <div className="text-gray-500">4:00 PM EST</div>
                </div>
              </div>
              <p className="text-gray-600 mb-4">Senior UX designer breaks down their process for a successful product redesign.</p>
              <button className="bg-purple-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-purple-700 transition">
                Register Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Community & Collaboration */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Community & Collaboration</h2>
          <p className="text-center text-gray-600 mb-12">Connect with fellow designers and grow together</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 text-3xl mx-auto mb-4">
                👥
              </div>
              <h3 className="font-bold text-lg mb-2">Design Peer Groups</h3>
              <p className="text-gray-600">Join small groups for feedback, accountability, and collaborative learning.</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center text-pink-600 text-3xl mx-auto mb-4">
                💬
              </div>
              <h3 className="font-bold text-lg mb-2">Portfolio Reviews</h3>
              <p className="text-gray-600">Get constructive feedback on your portfolio from experienced designers.</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-3xl mx-auto mb-4">
                🏆
              </div>
              <h3 className="font-bold text-lg mb-2">Community Challenges</h3>
              <p className="text-gray-600">Participate in weekly design challenges to practice and showcase your skills.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            {faqs.map(faq => (
              <div key={faq.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <button 
                  className="w-full text-left p-6 font-semibold text-lg flex justify-between items-center"
                  onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
                >
                  {faq.question}
                  <span>{expandedFaq === faq.id ? '−' : '+'}</span>
                </button>
                {expandedFaq === faq.id && (
                  <div className="px-6 pb-6 text-gray-600">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Start Designing Your Future Today</h2>
          <p className="text-xl mb-10 opacity-90">Join thousands of designers building skills and creating beautiful experiences</p>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="bg-white text-purple-600 font-semibold py-3 px-8 rounded-lg hover:bg-purple-50 transition">
              Explore Courses
            </button>
            <button className="bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:bg-opacity-10 transition">
              Try Figma Projects
            </button>
            <button className="bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:bg-opacity-10 transition">
              Join Mentorship
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Design;