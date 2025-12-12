import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [dropdown, setDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setDropdown(dropdown === menu ? null : menu);
  };

  return (
    <header className="w-full font-sans">
      {/* Header Top Bar */}
      <div className="bg-gray-100 text-gray-700 text-sm py-2 px-4 flex justify-between items-center">
        <div>
          📞 +977 123456789 | ✉️ info@yourschool.edu
        </div>
        <div className="flex items-center gap-4">
          <a href="#notices" className="hover:text-blue-600">📢 Notices</a>
          <div className="flex gap-2">
            <a href="#" className="hover:text-blue-600">🌐 FB</a>
            <a href="#" className="hover:text-pink-600">IG</a>
            <a href="#" className="hover:text-red-600">YT</a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo / School Name */}
          <h1 className="text-xl font-bold text-blue-700">My School</h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-6 font-medium text-gray-800">
            <li><a href="#home" className="hover:text-blue-600">Home</a></li>

            {/* About Dropdown */}
            <li className="relative group">
              <button className="flex items-center gap-1 hover:text-blue-600">
                About Us <ChevronDown size={16} />
              </button>
              <ul className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                <li><a href="#vision" className="block px-4 py-2 hover:bg-gray-100">Vision & Mission</a></li>
                <li><a href="#principal" className="block px-4 py-2 hover:bg-gray-100">Principal’s Message</a></li>
                <li><a href="#team" className="block px-4 py-2 hover:bg-gray-100">Our Team</a></li>
              </ul>
            </li>

            {/* Academics Dropdown */}
            <li className="relative group">
              <button className="flex items-center gap-1 hover:text-blue-600">
                Academics <ChevronDown size={16} />
              </button>
              <ul className="absolute left-0 mt-2 w-44 bg-white shadow-lg rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                <li><a href="#curriculum" className="block px-4 py-2 hover:bg-gray-100">Curriculum</a></li>
                <li><a href="#calendar" className="block px-4 py-2 hover:bg-gray-100">Calendar</a></li>
                <li><a href="#results" className="block px-4 py-2 hover:bg-gray-100">Results</a></li>
              </ul>
            </li>

            <li><a href="#admission" className="hover:text-blue-600">Admission</a></li>
            <li><a href="#teachers" className="hover:text-blue-600">Teachers</a></li>
            <li><a href="#students" className="hover:text-blue-600">Students</a></li>
            <li><a href="#parents" className="hover:text-blue-600">Parents</a></li>
            <li><a href="#events" className="hover:text-blue-600">Events</a></li>
            <li><a href="#notices" className="hover:text-blue-600">News & Notices</a></li>
            <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="md:hidden text-gray-800"
          >
            {mobileMenu ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenu && (
          <div className="md:hidden bg-white shadow-lg px-4 py-3 space-y-2">
            <a href="#home" className="block hover:text-blue-600">Home</a>
            <button
              onClick={() => toggleDropdown("about")}
              className="w-full flex justify-between hover:text-blue-600"
            >
              About Us <ChevronDown size={16} />
            </button>
            {dropdown === "about" && (
              <div className="pl-4 space-y-1">
                <a href="#vision" className="block hover:text-blue-600">Vision & Mission</a>
                <a href="#principal" className="block hover:text-blue-600">Principal’s Message</a>
                <a href="#team" className="block hover:text-blue-600">Our Team</a>
              </div>
            )}
            <a href="#academics" className="block hover:text-blue-600">Academics</a>
            <a href="#admission" className="block hover:text-blue-600">Admission</a>
            <a href="#teachers" className="block hover:text-blue-600">Teachers</a>
            <a href="#students" className="block hover:text-blue-600">Students</a>
            <a href="#parents" className="block hover:text-blue-600">Parents</a>
            <a href="#events" className="block hover:text-blue-600">Events</a>
            <a href="#notices" className="block hover:text-blue-600">News & Notices</a>
            <a href="#contact" className="block hover:text-blue-600">Contact</a>
          </div>
        )}
      </nav>
    </header>
  );
}
