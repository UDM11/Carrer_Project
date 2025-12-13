import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaSearch, FaExclamationTriangle } from 'react-icons/fa';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div>
          <div className="mx-auto flex items-center justify-center h-24 w-24 rounded-full bg-red-100">
            <FaExclamationTriangle className="h-12 w-12 text-red-600" />
          </div>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            404 - Page Not Found
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Sorry, the page you are looking for doesn't exist or has been moved.
          </p>
        </div>
        
        <div className="rounded-md bg-blue-50 p-4 mt-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <FaSearch className="h-5 w-5 text-blue-400" />
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-blue-800">
                Looking for something specific?
              </h3>
              <div className="mt-2 text-sm text-blue-700">
                <p>
                  Try using the search bar at the top of the page to find what you're looking for.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 space-y-4">
          <Link
            to="/"
            className="group relative w-full flex justify-center items-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <FaHome className="mr-2" />
            Go Back Home
          </Link>
          
          <div className="text-sm">
            <span className="text-gray-600">Or try one of these pages:</span>
            <div className="mt-2 flex flex-wrap justify-center gap-2">
              <Link
                to="/courses"
                className="text-blue-600 hover:text-blue-800 text-sm"
              >
                Courses
              </Link>
              <span className="text-gray-400">•</span>
              <Link
                to="/projects"
                className="text-blue-600 hover:text-blue-800 text-sm"
              >
                Projects
              </Link>
              <span className="text-gray-400">•</span>
              <Link
                to="/blog"
                className="text-blue-600 hover:text-blue-800 text-sm"
              >
                Blog
              </Link>
              <span className="text-gray-400">•</span>
              <Link
                to="/contact"
                className="text-blue-600 hover:text-blue-800 text-sm"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-xs text-gray-500">
            If you believe this is an error, please{' '}
            <Link to="/contact" className="text-blue-600 hover:text-blue-800">
              contact our support team
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;