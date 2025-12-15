import React from 'react';
import { useAuth } from '../context/AuthContext';
import PublicHome from '../pages/PublicHome';
import DashboardHome from '../pages/DashboardHome';

const ProtectedRoute = () => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return isAuthenticated ? <DashboardHome /> : <PublicHome />;
};

export default ProtectedRoute;