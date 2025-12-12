import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import Student from './pages/Student';
import Trainer from './pages/Trainer';
import Company from './pages/Company';
import Admin from './pages/Admin';

// Placeholder component for coming soon pages
const ComingSoon = ({ title, icon, color = "blue" }) => (
  <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
    <div className="text-center max-w-md">
      <div className={`w-24 h-24 bg-${color}-100 rounded-full flex items-center justify-center mx-auto mb-6`}>
        {icon}
      </div>
      <h1 className="text-3xl font-bold text-gray-800 mb-4">{title}</h1>
      <p className="text-gray-600 mb-6">This feature is coming soon. Stay tuned for updates!</p>
      <button 
        onClick={() => window.history.back()}
        className={`bg-${color}-600 text-white px-6 py-3 rounded-lg hover:bg-${color}-700 transition-colors duration-300`}
      >
        Go Back
      </button>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/student" element={<Student />} />
            <Route path="/trainer" element={<Trainer />} />
            <Route path="/company" element={<Company />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/premium" element={<ComingSoon title="Premium Subscription" icon={<span className="text-4xl">⭐</span>} color="yellow" />} />
            {/* Language routes */}
            <Route path="/language/:lang" element={<ComingSoon title="Language Settings" icon={<span className="text-4xl">🌐</span>} color="indigo" />} />
            {/* Catch all unmatched routes */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;