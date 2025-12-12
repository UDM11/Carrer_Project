import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';

const ProtectedRoute = ({ children, allowedRoles = [], requireAuth = true }) => {
  const { isLoggedIn, userRole, isLoading } = useUser();
  const location = useLocation();

  // Show loading spinner while checking authentication
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  // If authentication is required but user is not logged in
  if (requireAuth && !isLoggedIn) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // If specific roles are required and user doesn't have the right role
  if (allowedRoles.length > 0 && !allowedRoles.includes(userRole)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
};

export default ProtectedRoute;