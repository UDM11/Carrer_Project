import React, { useState, useEffect } from 'react';
import { 
  FiHeart, FiTrash2, FiShoppingCart, FiShare2, FiFilter, 
  FiGrid, FiList, FiStar, FiClock, FiUser, FiSearch,
  FiChevronDown, FiX, FiCheck, FiEye
} from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([]);
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('recent');
  const [filterBy, setFilterBy] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItems, setSelectedItems] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Mock data
  useEffect(() => {
    setTimeout(() => {
      setWishlistItems([
        {
          id: 1,
          title: 'Advanced React Development',
          instructor: 'Sarah Johnson',
          rating: 4.8,
          reviews: 2847,
          price: 89.99,
          originalPrice: 199.99,
          duration: '12 hours',
          level: 'Advanced',
          category: 'Development',
          image: 'https://via.placeholder.com/300x200/3B82F6/FFFFFF?text=React',
          addedDate: '2024-01-15',
          isOnSale: true,
          discount: 55
        },
        {
          id: 2,
          title: 'Machine Learning Fundamentals',
          instructor: 'Dr. Michael Chen',
          rating: 4.9,
          reviews: 1523,
          price: 129.99,
          originalPrice: 249.99,
          duration: '18 hours',
          level: 'Intermediate',
          category: 'Data Science',
          image: 'https://via.placeholder.com/300x200/10B981/FFFFFF?text=ML',
          addedDate: '2024-01-10',
          isOnSale: true,
          discount: 48
        },
        {
          id: 3,
          title: 'UI/UX Design Masterclass',
          instructor: 'Emma Wilson',
          rating: 4.7,
          reviews: 3241,
          price: 79.99,
          originalPrice: 159.99,
          duration: '15 hours',
          level: 'Beginner',
          category: 'Design',
          image: 'https://via.placeholder.com/300x200/8B5CF6/FFFFFF?text=Design',
          addedDate: '2024-01-08',
          isOnSale: false,
          discount: 0
        }
      ]);
      setIsLoading(false);
    }, 1000);
  }, []);

  const filteredItems = wishlistItems
    .filter(item => {
      if (filterBy === 'all') return true;
      if (filterBy === 'on-sale') return item.isOnSale;
      return item.category.toLowerCase() === filterBy.toLowerCase();
    })
    .filter(item => 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.instructor.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low': return a.price - b.price;
        case 'price-high': return b.price - a.price;
        case 'rating': return b.rating - a.rating;
        case 'recent': return new Date(b.addedDate) - new Date(a.addedDate);
        default: return 0;
      }
    });

  const removeFromWishlist = (id) => {
    setWishlistItems(prev => prev.filter(item => item.id !== id));
    setSelectedItems(prev => prev.filter(itemId => itemId !== id));
  };

  const toggleSelectItem = (id) => {
    setSelectedItems(prev => 
      prev.includes(id) 
        ? prev.filter(itemId => itemId !== id)
        : [...prev, id]
    );
  };

  const selectAll = () => {
    setSelectedItems(filteredItems.map(item => item.id));
  };

  const clearSelection = () => {
    setSelectedItems([]);
  };

  const removeSelected = () => {
    setWishlistItems(prev => prev.filter(item => !selectedItems.includes(item.id)));
    setSelectedItems([]);
  };

  const addToCart = (item) => {
    console.log('Added to cart:', item);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your wishlist...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 flex items-center">
                <FiHeart className="mr-3 text-red-500" />
                My Wishlist
              </h1>
              <p className="mt-1 text-gray-600">
                {wishlistItems.length} {wishlistItems.length === 1 ? 'course' : 'courses'} saved
              </p>
            </div>
            
            {wishlistItems.length > 0 && (
              <div className="mt-4 sm:mt-0 flex items-center space-x-3">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <FiFilter className="mr-2" />
                  Filters
                </button>
                
                <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-50'}`}
                  >
                    <FiGrid />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-50'}`}
                  >
                    <FiList />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters Panel */}
        {showFilters && wishlistItems.length > 0 && (
          <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
                <div className="relative">
                  <FiSearch className="absolute left-3 top-3 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search courses..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                <select
                  value={filterBy}
                  onChange={(e) => setFilterBy(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="all">All Categories</option>
                  <option value="development">Development</option>
                  <option value="design">Design</option>
                  <option value="data science">Data Science</option>
                  <option value="on-sale">On Sale</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="recent">Recently Added</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>
              
              <div className="flex items-end">
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setFilterBy('all');
                    setSortBy('recent');
                  }}
                  className="w-full px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Selection Controls */}
        {selectedItems.length > 0 && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <p className="text-blue-800 font-medium">
                {selectedItems.length} {selectedItems.length === 1 ? 'item' : 'items'} selected
              </p>
              <div className="mt-2 sm:mt-0 flex items-center space-x-3">
                <button
                  onClick={clearSelection}
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Clear Selection
                </button>
                <button
                  onClick={removeSelected}
                  className="flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                >
                  <FiTrash2 className="mr-2" />
                  Remove Selected
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Content */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16">
            <FiHeart className="mx-auto h-16 w-16 text-gray-300 mb-4" />
            <h3 className="text-xl font-medium text-gray-900 mb-2">
              {wishlistItems.length === 0 ? 'Your wishlist is empty' : 'No courses match your filters'}
            </h3>
            <p className="text-gray-600 mb-6">
              {wishlistItems.length === 0 
                ? 'Start exploring courses and add them to your wishlist'
                : 'Try adjusting your search or filter criteria'
              }
            </p>
            <Link
              to="/courses"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Browse Courses
            </Link>
          </div>
        ) : (
          <>
            {/* Bulk Actions */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
              <div className="flex items-center space-x-4">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={selectedItems.length === filteredItems.length}
                    onChange={selectedItems.length === filteredItems.length ? clearSelection : selectAll}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">Select All</span>
                </label>
                <span className="text-sm text-gray-500">
                  Showing {filteredItems.length} of {wishlistItems.length} courses
                </span>
              </div>
            </div>

            {/* Items Grid/List */}
            <div className={viewMode === 'grid' 
              ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
              : 'space-y-4'
            }>
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className={`bg-white rounded-lg shadow-sm border hover:shadow-md transition-all duration-200 ${
                    selectedItems.includes(item.id) ? 'ring-2 ring-blue-500' : ''
                  } ${viewMode === 'list' ? 'flex' : ''}`}
                >
                  {/* Checkbox */}
                  <div className="absolute top-3 left-3 z-10">
                    <input
                      type="checkbox"
                      checked={selectedItems.includes(item.id)}
                      onChange={() => toggleSelectItem(item.id)}
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                  </div>

                  {/* Image */}
                  <div className={`relative ${viewMode === 'list' ? 'w-48 flex-shrink-0' : ''}`}>
                    <img
                      src={item.image}
                      alt={item.title}
                      className={`w-full object-cover ${
                        viewMode === 'list' ? 'h-32 rounded-l-lg' : 'h-48 rounded-t-lg'
                      }`}
                    />
                    {item.isOnSale && (
                      <div className="absolute top-3 right-3 bg-red-500 text-white px-2 py-1 rounded text-xs font-medium">
                        {item.discount}% OFF
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className={`p-4 flex-1 ${viewMode === 'list' ? 'flex flex-col justify-between' : ''}`}>
                    <div>
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-semibold text-gray-900 line-clamp-2 flex-1">
                          {item.title}
                        </h3>
                        <button
                          onClick={() => removeFromWishlist(item.id)}
                          className="ml-2 p-1 text-gray-400 hover:text-red-500 transition-colors"
                        >
                          <FiX />
                        </button>
                      </div>
                      
                      <p className="text-sm text-gray-600 mb-2 flex items-center">
                        <FiUser className="mr-1" />
                        {item.instructor}
                      </p>
                      
                      <div className="flex items-center mb-2">
                        <div className="flex items-center">
                          <FiStar className="text-yellow-400 fill-current" />
                          <span className="ml-1 text-sm font-medium">{item.rating}</span>
                          <span className="ml-1 text-sm text-gray-500">({item.reviews})</span>
                        </div>
                        <span className="mx-2 text-gray-300">•</span>
                        <span className="text-sm text-gray-600 flex items-center">
                          <FiClock className="mr-1" />
                          {item.duration}
                        </span>
                      </div>
                      
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-2">
                          <span className={`px-2 py-1 rounded text-xs font-medium ${
                            item.level === 'Beginner' ? 'bg-green-100 text-green-800' :
                            item.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-red-100 text-red-800'
                          }`}>
                            {item.level}
                          </span>
                          <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded text-xs">
                            {item.category}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <span className="text-lg font-bold text-gray-900">${item.price}</span>
                          {item.originalPrice > item.price && (
                            <span className="ml-2 text-sm text-gray-500 line-through">
                              ${item.originalPrice}
                            </span>
                          )}
                        </div>
                      </div>
                      
                      <div className="flex space-x-2">
                        <button
                          onClick={() => addToCart(item)}
                          className="flex-1 flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                        >
                          <FiShoppingCart className="mr-2" />
                          Add to Cart
                        </button>
                        <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                          <FiShare2 />
                        </button>
                        <Link
                          to={`/courses/${item.id}`}
                          className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <FiEye />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Wishlist;