import React from 'react';
import { Link } from 'react-router-dom';
import { FaExclamationTriangle, FaHome, FaArrowLeft } from 'react-icons/fa';

const Unauthorized = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <FaExclamationTriangle className="text-3xl text-red-600" />
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Access Denied</h1>
          <p className="text-gray-600 mb-8">
            You don't have permission to access this page. Please contact your administrator if you believe this is an error.
          </p>
          
          <div className="space-y-3">
            <Link 
              to="/"
              className="w-full bg-blue-600 text-white font-medium py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
            >
              <FaHome className="mr-2" />
              Go to Homepage
            </Link>
            
            <button 
              onClick={() => window.history.back()}
              className="w-full bg-gray-100 text-gray-700 font-medium py-3 px-6 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center"
            >
              <FaArrowLeft className="mr-2" />
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Unauthorized;