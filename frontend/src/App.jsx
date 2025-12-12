import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './contexts/UserContext';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import Student from './pages/Student';
import Trainer from './pages/Trainer';
import Company from './pages/Company';
import Admin from './pages/Admin';
import Unauthorized from './pages/Unauthorized';

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
    <UserProvider>
      <Router>
        <div className="App">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignUpPage />} />
              <Route path="/unauthorized" element={<Unauthorized />} />
              
              {/* Role-based protected routes */}
              <Route path="/student" element={
                <ProtectedRoute allowedRoles={['student']}>
                  <Student />
                </ProtectedRoute>
              } />
              <Route path="/trainer" element={
                <ProtectedRoute allowedRoles={['trainer']}>
                  <Trainer />
                </ProtectedRoute>
              } />
              <Route path="/company" element={
                <ProtectedRoute allowedRoles={['company']}>
                  <Company />
                </ProtectedRoute>
              } />
              <Route path="/admin" element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <Admin />
                </ProtectedRoute>
              } />
              <Route path="/premium" element={<ComingSoon title="Premium Subscription" icon={<span className="text-4xl">⭐</span>} color="yellow" />} />
              {/* Language routes */}
              <Route path="/language/:lang" element={<ComingSoon title="Language Settings" icon={<span className="text-4xl">🌐</span>} color="indigo" />} />
              {/* Role-specific placeholder routes */}
              <Route path="/profile" element={<ComingSoon title="User Profile" icon={<span className="text-4xl">👤</span>} color="blue" />} />
              <Route path="/settings" element={<ComingSoon title="Settings" icon={<span className="text-4xl">⚙️</span>} color="gray" />} />
              <Route path="/my-learning" element={<ComingSoon title="My Learning" icon={<span className="text-4xl">📚</span>} color="green" />} />
              <Route path="/my-projects" element={<ComingSoon title="My Projects" icon={<span className="text-4xl">📋</span>} color="purple" />} />
              <Route path="/certificates" element={<ComingSoon title="Certificates" icon={<span className="text-4xl">🏆</span>} color="yellow" />} />
              <Route path="/my-courses" element={<ComingSoon title="My Courses" icon={<span className="text-4xl">🎓</span>} color="blue" />} />
              <Route path="/students" element={<ComingSoon title="My Students" icon={<span className="text-4xl">👥</span>} color="green" />} />
              <Route path="/earnings" element={<ComingSoon title="Earnings" icon={<span className="text-4xl">💰</span>} color="green" />} />
              <Route path="/job-postings" element={<ComingSoon title="Job Postings" icon={<span className="text-4xl">💼</span>} color="purple" />} />
              <Route path="/candidates" element={<ComingSoon title="Candidates" icon={<span className="text-4xl">👔</span>} color="blue" />} />
              <Route path="/company-profile" element={<ComingSoon title="Company Profile" icon={<span className="text-4xl">🏢</span>} color="purple" />} />
              <Route path="/admin-dashboard" element={<ComingSoon title="Admin Dashboard" icon={<span className="text-4xl">📊</span>} color="red" />} />
              <Route path="/manage-users" element={<ComingSoon title="Manage Users" icon={<span className="text-4xl">👥</span>} color="red" />} />
              <Route path="/system-settings" element={<ComingSoon title="System Settings" icon={<span className="text-4xl">⚙️</span>} color="red" />} />
              {/* Catch all unmatched routes */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;