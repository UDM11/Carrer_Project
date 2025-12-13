import React, { useState } from 'react';
import { 
  FaSearch, 
  FaCalendarAlt, 
  FaUser, 
  FaTag, 
  FaArrowRight,
  FaBookOpen,
  FaGraduationCap,
  FaLaptopCode,
  FaPalette,
  FaChartLine,
  FaRocket,
  FaEnvelope,
  FaHeart,
  FaShare
} from 'react-icons/fa';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Blog categories
  const categories = [
    { id: 'all', name: 'All Topics' },
    { id: 'ai', name: 'AI & Machine Learning' },
    { id: 'career', name: 'Career Development' },
    { id: 'business', name: 'Business & Marketing' },
    { id: 'it', name: 'IT & Software' },
    { id: 'design', name: 'Design & UI/UX' },
    { id: 'stories', name: 'Success Stories' }
  ];

  // Sample blog posts
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Software Development',
      excerpt: 'How artificial intelligence is transforming the way we build and deploy applications.',
      category: 'ai',
      author: 'Sarah Chen',
      date: 'May 15, 2023',
      readTime: '8 min read',
      image: 'https://via.placeholder.com/600x400?text=AI+Future',
      tags: ['AI', 'Development', 'Technology'],
      featured: true
    },
    {
      id: 2,
      title: '10 UX Design Principles for Better Conversion',
      excerpt: 'Improve your website usability and conversion rates with these proven design principles.',
      category: 'design',
      author: 'Marcus Johnson',
      date: 'May 12, 2023',
      readTime: '6 min read',
      image: 'https://via.placeholder.com/600x400?text=UX+Design',
      tags: ['UX', 'Design', 'Conversion'],
      featured: false
    },
    {
      id: 3,
      title: 'How to Transition into a Tech Career in 2023',
      excerpt: 'Practical steps to make a successful career change into the technology industry.',
      category: 'career',
      author: 'Jamie Smith',
      date: 'May 10, 2023',
      readTime: '10 min read',
      image: 'https://via.placeholder.com/600x400?text=Tech+Career',
      tags: ['Career', 'Tech', 'Guide'],
      featured: false
    },
    {
      id: 4,
      title: 'The Rise of No-Code Development Platforms',
      excerpt: 'Exploring how no-code platforms are democratizing software development.',
      category: 'it',
      author: 'Alex Rivera',
      date: 'May 8, 2023',
      readTime: '7 min read',
      image: 'https://via.placeholder.com/600x400?text=No+Code',
      tags: ['Development', 'No-Code', 'Trends'],
      featured: false
    },
    {
      id: 5,
      title: 'Data-Driven Marketing Strategies for 2023',
      excerpt: 'Leverage analytics and data to create more effective marketing campaigns.',
      category: 'business',
      author: 'Priya Patel',
      date: 'May 5, 2023',
      readTime: '9 min read',
      image: 'https://via.placeholder.com/600x400?text=Data+Marketing',
      tags: ['Marketing', 'Data', 'Strategy'],
      featured: false
    },
    {
      id: 6,
      title: 'From Student to Senior Developer: A Success Story',
      excerpt: 'How our mentorship program helped Maria advance her career in just 18 months.',
      category: 'stories',
      author: 'Maria Gonzalez',
      date: 'May 3, 2023',
      readTime: '11 min read',
      image: 'https://via.placeholder.com/600x400?text=Success+Story',
      tags: ['Success', 'Development', 'Career'],
      featured: false
    }
  ];

  // Popular posts for sidebar
  const popularPosts = [
    {
      id: 1,
      title: 'The Future of AI in Software Development',
      category: 'ai',
      date: 'May 15, 2023',
      image: 'https://via.placeholder.com/100x70?text=AI+Future'
    },
    {
      id: 2,
      title: '10 UX Design Principles for Better Conversion',
      category: 'design',
      date: 'May 12, 2023',
      image: 'https://via.placeholder.com/100x70?text=UX+Design'
    },
    {
      id: 3,
      title: 'How to Transition into a Tech Career in 2023',
      category: 'career',
      date: 'May 10, 2023',
      image: 'https://via.placeholder.com/100x70?text=Tech+Career'
    }
  ];

  // Tags for filtering
  const tags = ['AI', 'UX', 'Career', 'Development', 'Marketing', 'Design', 'Data', 'Technology', 'Success', 'Tips'];

  // Authors section
  const authors = [
    {
      name: 'Sarah Chen',
      role: 'AI Specialist',
      bio: '10+ years experience in machine learning and AI applications',
      image: 'https://via.placeholder.com/150x150?text=SC',
      posts: 24
    },
    {
      name: 'Marcus Johnson',
      role: 'UX Lead',
      bio: 'Award-winning designer with focus on user-centered design',
      image: 'https://via.placeholder.com/150x150?text=MJ',
      posts: 18
    },
    {
      name: 'Jamie Smith',
      role: 'Career Coach',
      bio: 'Helped hundreds transition into tech careers successfully',
      image: 'https://via.placeholder.com/150x150?text=JS',
      posts: 32
    }
  ];

  // Filter posts by category and search query
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === 'all' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && (searchQuery === '' || matchesSearch);
  });

  // Get featured post
  const featuredPost = blogPosts.find(post => post.featured);

  return (
    <div className="blog- bg-gray-50">
      {/* 1. Hero Section */}
      <section className="hero-section bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Insights & Resources for Your Career Growth</h1>
          <p className="text-xl max-w-2xl mx-auto mb-10">
            Stay updated with the latest trends, tips, and guides in AI, IT, Design, Marketing, and more.
          </p>
          <div className="mt-8 flex justify-center">
            <img 
              src="https://via.placeholder.com/600x300?text=Learning+Illustration" 
              alt="Learning illustration" 
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      <div className="container mx-auto max-w-6xl py-12 px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-2/3">
            {/* 2. Blog Categories / Filters */}
            <section className="categories-section mb-12">
              <div className="flex flex-wrap gap-2 mb-6">
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      activeCategory === category.id
                        ? 'bg-blue-600 text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
              
              {/* Search Bar */}
              <div className="relative max-w-md">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaSearch className="text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </section>

            {/* 3. Featured Blog / Highlighted Post */}
            {featuredPost && activeCategory === 'all' && (
              <section className="featured-post mb-12">
                <h2 className="text-2xl font-bold mb-6">Featured Post</h2>
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title} 
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                        {featuredPost.category.toUpperCase()}
                      </span>
                      <span className="mx-2 text-gray-400">•</span>
                      <span className="text-gray-500 text-sm flex items-center">
                        <FaCalendarAlt className="mr-1" /> {featuredPost.date}
                      </span>
                      <span className="mx-2 text-gray-400">•</span>
                      <span className="text-gray-500 text-sm flex items-center">
                        <FaUser className="mr-1" /> {featuredPost.author}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{featuredPost.title}</h3>
                    <p className="text-gray-600 mb-4">{featuredPost.excerpt}</p>
                    <div className="flex justify-between items-center">
                      <button className="text-blue-600 font-medium flex items-center">
                        Read More <FaArrowRight className="ml-2" />
                      </button>
                      <div className="flex space-x-2">
                        {featuredPost.tags.map(tag => (
                          <span key={tag} className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* 4. Blog Grid */}
            <section className="blog-grid mb-12">
              <h2 className="text-2xl font-bold mb-6">
                {activeCategory === 'all' ? 'Latest Articles' : categories.find(c => c.id === activeCategory)?.name}
              </h2>
              
              {filteredPosts.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-500">No articles found matching your criteria.</p>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 gap-8">
                  {filteredPosts
                    .filter(post => !post.featured || activeCategory !== 'all')
                    .map(post => (
                      <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img 
                          src={post.image} 
                          alt={post.title} 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                          <div className="flex items-center mb-3">
                            <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                              {post.category.toUpperCase()}
                            </span>
                            <span className="mx-2 text-gray-400">•</span>
                            <span className="text-gray-500 text-sm">{post.date}</span>
                          </div>
                          <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                          <p className="text-gray-600 mb-4">{post.excerpt}</p>
                          <div className="flex justify-between items-center">
                            <div className="flex items-center text-sm text-gray-500">
                              <FaUser className="mr-1" /> {post.author}
                            </div>
                            <button className="text-blue-600 text-sm font-medium flex items-center">
                              Read More <FaArrowRight className="ml-1" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))
                  }
                </div>
              )}
            </section>

            {/* 8. Tags / Keywords Section */}
            <section className="tags-section mb-12">
              <h2 className="text-2xl font-bold mb-6">Browse by Tags</h2>
              <div className="flex flex-wrap gap-2">
                {tags.map(tag => (
                  <button
                    key={tag}
                    onClick={() => setSearchQuery(tag)}
                    className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-md text-sm hover:bg-gray-200 transition-colors"
                  >
                    #{tag}
                  </button>
                ))}
              </div>
            </section>

            {/* 7. Author Section */}
            <section className="authors-section mb-12">
              <h2 className="text-2xl font-bold mb-6">Our Contributors</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {authors.map(author => (
                  <div key={author.name} className="bg-white p-6 rounded-lg shadow-md text-center">
                    <img 
                      src={author.image} 
                      alt={author.name} 
                      className="w-20 h-20 rounded-full mx-auto mb-4"
                    />
                    <h3 className="text-lg font-bold mb-1">{author.name}</h3>
                    <p className="text-blue-600 mb-3">{author.role}</p>
                    <p className="text-gray-600 text-sm mb-4">{author.bio}</p>
                    <p className="text-gray-500 text-xs">{author.posts} articles</p>
                  </div>
                ))}
              </div>
            </section>

            {/* 9. Call to Action */}
            <section className="cta-section bg-gradient-to-r from-blue-600 to-purple-700 text-white p-8 rounded-xl text-center">
              <h2 className="text-2xl font-bold mb-4">Ready to take the next step?</h2>
              <p className="mb-6">Explore our career programs and mentorship opportunities.</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="bg-white text-blue-600 font-bold py-3 px-6 rounded-lg hover:bg-blue-50 transition duration-300">
                  Explore Courses
                </button>
                <button className="bg-transparent border-2 border-white text-white font-bold py-3 px-6 rounded-lg hover:bg-white hover:bg-opacity-10 transition duration-300">
                  Join as Mentor
                </button>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            {/* 5. Popular / Trending Posts Sidebar */}
            <section className="popular-posts bg-white p-6 rounded-lg shadow-md mb-8">
              <h2 className="text-xl font-bold mb-6 flex items-center">
                <FaHeart className="text-red-500 mr-2" /> Popular Posts
              </h2>
              <div className="space-y-4">
                {popularPosts.map(post => (
                  <div key={post.id} className="flex items-center">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-16 h-12 object-cover rounded"
                    />
                    <div className="ml-4">
                      <h3 className="text-sm font-semibold line-clamp-2">{post.title}</h3>
                      <p className="text-xs text-gray-500">{post.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 6. Newsletter Signup */}
            <section className="newsletter bg-white p-6 rounded-lg shadow-md mb-8">
              <div className="text-center">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaEnvelope className="text-blue-600 text-xl" />
                </div>
                <h2 className="text-xl font-bold mb-3">Get the Latest Career Insights in Your Inbox</h2>
                <p className="text-gray-600 text-sm mb-4">Subscribe to our newsletter for exclusive content and updates</p>
                <form className="space-y-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </section>

            {/* Category Icons */}
            <section className="categories-icons bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-6">Browse Categories</h2>
              <div className="space-y-4">
                <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                  <div className="bg-blue-100 p-2 rounded-lg mr-4">
                    <FaLaptopCode className="text-blue-600 text-xl" />
                  </div>
                  <span className="font-medium">AI & Machine Learning</span>
                </div>
                <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                  <div className="bg-green-100 p-2 rounded-lg mr-4">
                    <FaGraduationCap className="text-green-600 text-xl" />
                  </div>
                  <span className="font-medium">Career Development</span>
                </div>
                <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                  <div className="bg-purple-100 p-2 rounded-lg mr-4">
                    <FaChartLine className="text-purple-600 text-xl" />
                  </div>
                  <span className="font-medium">Business & Marketing</span>
                </div>
                <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                  <div className="bg-red-100 p-2 rounded-lg mr-4">
                    <FaRocket className="text-red-600 text-xl" />
                  </div>
                  <span className="font-medium">IT & Software</span>
                </div>
                <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                  <div className="bg-yellow-100 p-2 rounded-lg mr-4">
                    <FaPalette className="text-yellow-600 text-xl" />
                  </div>
                  <span className="font-medium">Design & UI/UX</span>
                </div>
                <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                  <div className="bg-indigo-100 p-2 rounded-lg mr-4">
                    <FaBookOpen className="text-indigo-600 text-xl" />
                  </div>
                  <span className="font-medium">Success Stories</span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;