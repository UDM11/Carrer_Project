import { useState } from 'react';
import { FiShoppingCart, FiTrash2, FiHeart, FiClock, FiChevronRight, FiArrowLeft, FiTag, FiCheck } from 'react-icons/fi';
import { FaChalkboardTeacher, FaLaptopCode } from 'react-icons/fa';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      type: 'course',
      title: 'Advanced React Development',
      instructor: 'Sarah Johnson',
      price: 89.99,
      originalPrice: 129.99,
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      duration: '12h 30m',
      category: 'Development',
      quantity: 1
    },
    {
      id: 2,
      type: 'course',
      title: 'UI/UX Design Masterclass',
      instructor: 'Michael Chen',
      price: 79.99,
      originalPrice: 99.99,
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      duration: '15h 15m',
      category: 'Design',
      quantity: 1
    },
    {
      id: 3,
      type: 'project',
      title: 'E-Commerce Mobile App',
      creator: 'Alex Johnson',
      price: 49.99,
      image: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      duration: '3 months',
      category: 'Development',
      quantity: 1
    }
  ]);

  const [savedItems, setSavedItems] = useState([
    {
      id: 4,
      type: 'course',
      title: 'Python for Data Science',
      instructor: 'Emily Zhang',
      price: 69.99,
      originalPrice: 89.99,
      image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      duration: '14h 10m',
      category: 'Data Science'
    }
  ]);

  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [appliedPromo, setAppliedPromo] = useState(false);

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const moveToSaved = (item) => {
    setSavedItems([...savedItems, item]);
    setCartItems(cartItems.filter(cartItem => cartItem.id !== item.id));
  };

  const moveToCart = (item) => {
    setCartItems([...cartItems, {...item, quantity: 1}]);
    setSavedItems(savedItems.filter(savedItem => savedItem.id !== item.id));
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    
    setCartItems(cartItems.map(item => 
      item.id === id ? {...item, quantity: newQuantity} : item
    ));
  };

  const applyPromoCode = () => {
    if (promoCode.toUpperCase() === 'LEARN20') {
      setDiscount(20);
      setAppliedPromo(true);
    } else {
      alert('Invalid promo code. Try "LEARN20" for a 20% discount.');
    }
  };

  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const discountAmount = (subtotal * discount) / 100;
  const total = subtotal - discountAmount;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center mb-4">
            <FiShoppingCart className="text-3xl mr-3" />
            <h1 className="text-3xl md:text-4xl font-bold">Your Cart</h1>
          </div>
          <p className="text-xl opacity-90">Review your selected courses, projects, or subscriptions before checkout.</p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto max-w-6xl px-4 py-8">
        {cartItems.length > 0 ? (
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Cart Items */}
            <div className="lg:w-2/3">
              <div className="bg-white rounded-xl shadow-md p-6 mb-6">
                <h2 className="text-2xl font-bold mb-6">Cart Items ({cartItems.length})</h2>
                
                {cartItems.map(item => (
                  <div key={item.id} className="flex flex-col md:flex-row border-b border-gray-200 py-6 last:border-b-0">
                    <div className="md:w-1/4 mb-4 md:mb-0">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-32 object-cover rounded-lg"
                      />
                    </div>
                    
                    <div className="md:w-2/4 md:pl-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <span className="inline-block px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full mb-2">
                            {item.type === 'course' ? 'COURSE' : 'PROJECT'}
                          </span>
                          <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                          <p className="text-gray-600 mb-2">
                            {item.type === 'course' ? `By ${item.instructor}` : `By ${item.creator}`}
                          </p>
                          <div className="flex items-center text-sm text-gray-500 mb-2">
                            <FiClock className="mr-1" />
                            {item.duration}
                          </div>
                          <span className="inline-block px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md">
                            {item.category}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="md:w-1/4 mt-4 md:mt-0 flex flex-col justify-between items-end">
                      <div className="text-right">
                        {item.originalPrice && (
                          <p className="text-gray-500 line-through text-sm">${item.originalPrice.toFixed(2)}</p>
                        )}
                        <p className="font-bold text-lg">${item.price.toFixed(2)}</p>
                      </div>
                      
                      <div className="flex items-center space-x-2 mt-4">
                        <button 
                          onClick={() => removeItem(item.id)}
                          className="text-gray-500 hover:text-red-500"
                          aria-label="Remove item"
                        >
                          <FiTrash2 />
                        </button>
                        <button 
                          onClick={() => moveToSaved(item)}
                          className="text-gray-500 hover:text-blue-500"
                          aria-label="Save for later"
                        >
                          <FiHeart />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Saved for Later */}
              {savedItems.length > 0 && (
                <div className="bg-white rounded-xl shadow-md p-6">
                  <h2 className="text-2xl font-bold mb-6">Saved for Later ({savedItems.length})</h2>
                  
                  {savedItems.map(item => (
                    <div key={item.id} className="flex flex-col md:flex-row border-b border-gray-200 py-6 last:border-b-0">
                      <div className="md:w-1/4 mb-4 md:mb-0">
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          className="w-full h-32 object-cover rounded-lg"
                        />
                      </div>
                      
                      <div className="md:w-2/4 md:pl-6">
                        <div className="flex justify-between items-start">
                          <div>
                            <span className="inline-block px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full mb-2">
                              {item.type === 'course' ? 'COURSE' : 'PROJECT'}
                            </span>
                            <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                            <p className="text-gray-600 mb-2">
                              {item.type === 'course' ? `By ${item.instructor}` : `By ${item.creator}`}
                            </p>
                            <div className="flex items-center text-sm text-gray-500 mb-2">
                              <FiClock className="mr-1" />
                              {item.duration}
                            </div>
                            <span className="inline-block px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md">
                              {item.category}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="md:w-1/4 mt-4 md:mt-0 flex flex-col justify-between items-end">
                        <div className="text-right">
                          {item.originalPrice && (
                            <p className="text-gray-500 line-through text-sm">${item.originalPrice.toFixed(2)}</p>
                          )}
                          <p className="font-bold text-lg">${item.price.toFixed(2)}</p>
                        </div>
                        
                        <button 
                          onClick={() => moveToCart(item)}
                          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
                        >
                          Move to Cart
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Price Summary */}
            <div className="lg:w-1/3">
              <div className="bg-white rounded-xl shadow-md p-6 sticky top-6">
                <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span>Subtotal ({cartItems.length} items)</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  
                  {discount > 0 && (
                    <div className="flex justify-between text-green-600">
                      <span>Discount ({discount}%)</span>
                      <span>-${discountAmount.toFixed(2)}</span>
                    </div>
                  )}
                  
                  <div className="border-t border-gray-200 pt-4 flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>

                {/* Promo Code */}
                <div className="mb-6">
                  <div className="flex items-center mb-2">
                    <FiTag className="text-gray-500 mr-2" />
                    <span className="font-medium">Promo Code</span>
                  </div>
                  <div className="flex">
                    <input
                      type="text"
                      placeholder="Enter promo code"
                      className="flex-1 p-3 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      disabled={appliedPromo}
                    />
                    <button
                      onClick={applyPromoCode}
                      disabled={appliedPromo}
                      className={`px-4 py-3 rounded-r-lg ${appliedPromo ? 'bg-green-600 text-white' : 'bg-gray-800 text-white hover:bg-gray-900'} transition duration-300`}
                    >
                      {appliedPromo ? <FiCheck /> : 'Apply'}
                    </button>
                  </div>
                  {appliedPromo && (
                    <p className="text-green-600 text-sm mt-2">Promo code applied successfully!</p>
                  )}
                </div>

                <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300 font-medium mb-4">
                  Proceed to Checkout
                </button>
                
                <button className="w-full bg-white border border-gray-300 text-gray-800 py-3 rounded-lg hover:bg-gray-50 transition duration-300 font-medium flex items-center justify-center">
                  <FiArrowLeft className="mr-2" />
                  Continue Shopping
                </button>

                {/* Security Badge */}
                <div className="mt-6 p-4 bg-gray-50 rounded-lg text-center">
                  <div className="flex justify-center mb-2">
                    <div className="flex items-center text-green-600">
                      <FiCheck className="mr-1" />
                      <span className="text-sm font-medium">Secure checkout</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600">All transactions are secure and encrypted</p>
                </div>
              </div>

              {/* Bundle Offer */}
              <div className="bg-white rounded-xl shadow-md p-6 mt-6">
                <h3 className="font-bold text-lg mb-3">Special Offer</h3>
                <p className="text-gray-700 mb-4">Add 2 more courses & get 10% off your entire order!</p>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-blue-800 text-sm">You're 1 course away from this discount</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Empty Cart State */
          <div className="bg-white rounded-xl shadow-md p-8 text-center max-w-2xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center">
                <FiShoppingCart className="text-gray-400 text-3xl" />
              </div>
            </div>
            <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-8">Looks like you haven't added anything to your cart yet.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300 font-medium">
                Browse Courses
              </button>
              <button className="bg-white border border-gray-300 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-50 transition duration-300 font-medium">
                Explore Projects
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 mt-12">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">LearnHub</h3>
              <p className="text-gray-400">Expand your skills with our curated courses and projects.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Shopping With Us</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Delivery Information</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Returns Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Terms & Conditions</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Customer Service</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Contact Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Help Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">FAQ</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Payment Methods</h4>
              <div className="grid grid-cols-3 gap-2">
                <div className="bg-white p-2 rounded-md flex items-center justify-center">
                  <span className="text-xs font-bold text-gray-800">VISA</span>
                </div>
                <div className="bg-white p-2 rounded-md flex items-center justify-center">
                  <span className="text-xs font-bold text-gray-800">MC</span>
                </div>
                <div className="bg-white p-2 rounded-md flex items-center justify-center">
                  <span className="text-xs font-bold text-gray-800">PP</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>© 2025 LearnHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Cart;