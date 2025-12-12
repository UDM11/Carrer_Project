import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaBook, FaClipboardList, FaTrophy, FaChalkboardTeacher, 
  FaUserGraduate, FaChartBar, FaBriefcase, FaUsers, 
  FaBuilding, FaCog, FaUser 
} from 'react-icons/fa';

const RoleBasedNav = ({ userRole, isMobile = false }) => {
  const getNavigationItems = () => {
    const commonItems = [
      { path: '/profile', label: 'My Profile', icon: <FaUser />, color: 'text-gray-600' },
      { path: '/settings', label: 'Settings', icon: <FaCog />, color: 'text-gray-600' }
    ];

    switch (userRole) {
      case 'student':
        return [
          { path: '/my-learning', label: 'My Learning', icon: <FaBook />, color: 'text-blue-600' },
          { path: '/my-projects', label: 'My Projects', icon: <FaClipboardList />, color: 'text-purple-600' },
          { path: '/certificates', label: 'Certificates', icon: <FaTrophy />, color: 'text-yellow-600' },
          { path: '/browse-courses', label: 'Browse Courses', icon: <FaBook />, color: 'text-green-600' },
          ...commonItems
        ];
      
      case 'trainer':
        return [
          { path: '/my-courses', label: 'My Courses', icon: <FaChalkboardTeacher />, color: 'text-green-600' },
          { path: '/students', label: 'My Students', icon: <FaUserGraduate />, color: 'text-blue-600' },
          { path: '/earnings', label: 'Earnings', icon: <FaChartBar />, color: 'text-green-600' },
          { path: '/create-course', label: 'Create Course', icon: <FaBook />, color: 'text-purple-600' },
          ...commonItems
        ];
      
      case 'company':
        return [
          { path: '/job-postings', label: 'Job Postings', icon: <FaBriefcase />, color: 'text-purple-600' },
          { path: '/candidates', label: 'Candidates', icon: <FaUsers />, color: 'text-blue-600' },
          { path: '/company-profile', label: 'Company Profile', icon: <FaBuilding />, color: 'text-purple-600' },
          { path: '/post-job', label: 'Post New Job', icon: <FaBriefcase />, color: 'text-green-600' },
          ...commonItems
        ];
      
      case 'admin':
        return [
          { path: '/admin-dashboard', label: 'Dashboard', icon: <FaChartBar />, color: 'text-red-600' },
          { path: '/manage-users', label: 'Manage Users', icon: <FaUsers />, color: 'text-red-600' },
          { path: '/system-settings', label: 'System Settings', icon: <FaCog />, color: 'text-red-600' },
          { path: '/reports', label: 'Reports', icon: <FaChartBar />, color: 'text-orange-600' },
          ...commonItems
        ];
      
      default:
        return commonItems;
    }
  };

  const navigationItems = getNavigationItems();

  if (isMobile) {
    return (
      <div className="grid grid-cols-2 gap-2 p-4">
        {navigationItems.slice(0, 6).map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className="flex flex-col items-center p-3 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-sm transition-all duration-200"
          >
            <span className={`text-xl mb-1 ${item.color}`}>{item.icon}</span>
            <span className="text-xs text-gray-700 text-center">{item.label}</span>
          </Link>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-1">
      {navigationItems.map((item, index) => (
        <Link
          key={index}
          to={item.path}
          className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 transition-colors rounded-md"
        >
          <span className={`mr-3 ${item.color}`}>{item.icon}</span>
          {item.label}
        </Link>
      ))}
    </div>
  );
};

export default RoleBasedNav;