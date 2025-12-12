import React from 'react';
import { 

  FaChevronRight, 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube

} from 'react-icons/fa';
const Footer = () => {
  return (
    <div>
         {/* Footer */}
              <footer className="bg-gray-900 text-white pt-16 px-6 pb-8">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-6 relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-10 after:h-1 after:bg-blue-500">
                      CareerBox Global
                    </h3>
                    <p className="text-gray-400 mb-6">
                      A worldwide career development platform connecting students, trainers, and companies across borders.
                    </p>
                    <div className="flex space-x-4">
                      <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
                        <FaFacebookF />
                      </a>
                      <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
                        <FaTwitter />
                      </a>
                      <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
                        <FaLinkedinIn />
                      </a>
                      <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
                        <FaInstagram />
                      </a>
                      <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
                        <FaYoutube />
                      </a>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold mb-6 relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-10 after:h-1 after:bg-blue-500">
                      Quick Links
                    </h3>
                    <ul className="space-y-3">
                      {footerLinks.quickLinks.map((link, index) => (
                        <li key={index}>
                          <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center">
                            <FaChevronRight className="text-xs mr-2" /> {link}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold mb-6 relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-10 after:h-1 after:bg-blue-500">
                      Resources
                    </h3>
                    <ul className="space-y-3">
                      {footerLinks.resources.map((link, index) => (
                        <li key={index}>
                          <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center">
                            <FaChevronRight className="text-xs mr-2" /> {link}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold mb-6 relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-10 after:h-1 after:bg-blue-500">
                      Contact Us
                    </h3>
                    <ul className="space-y-4">
                      <li>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-start">
                          <FaEnvelope className="mt-1 mr-3" /> support@careerbox.com
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-start">
                          <FaPhone className="mt-1 mr-3" /> +91 (234) 567-8900
                        </a>
                      </li>
                      <li className="text-gray-400 flex items-start">
                        <FaMapMarkerAlt className="mt-1 mr-3" /> 
                        <span>
                          Global Headquarters: New Delhi, India
                        </span>
                      </li>
                      <li className="text-gray-400 flex items-start">
                        <FaMapMarkerAlt className="mt-1 mr-3 opacity-0" /> 
                        <span>
                          Nepal Office: Gaighat, Nepal
                        </span>
                      </li>
                      <li className="text-gray-400 flex items-start">
                        <FaMapMarkerAlt className="mt-1 mr-3 opacity-0" /> 
                        <span>
                          Asia-Pacific Office: Singapore
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-800 text-center">
                  <p className="text-gray-400 mb-6">© 2025 CareerBox Global. All rights reserved.</p>
                  <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                    <span>Choose your country:</span>
                    <div className="flex flex-wrap justify-center gap-4">
                      {countries.map((country, index) => (
                        <a key={index} href="#" className="text-gray-400 hover:text-white transition-colors flex items-center">
                          <img src={country.flag} alt={country.name} className="w-5 h-4 mr-2 rounded-sm" />
                          {country.name}
                        </a>
                      ))}
                      <a href="#" className="text-gray-400 hover:text-white transition-colors">
                        View all countries
                      </a>
                    </div>
                  </div>
                </div>
              </footer>
    </div>
  )
};

const footerLinks = {
  quickLinks: ["Home", "Courses", "For Trainers", "For Companies", "About Us"],
  resources: ["Help Center", "Blog", "Success Stories", "International Guides", "Webinars"]
};

const countries = [
  {
    name: "United States",
    flag: "https://flagcdn.com/w40/us.png"
  },
  {
    name: "United Kingdom",
    flag: "https://flagcdn.com/w40/gb.png"
  },
  {
    name: "Germany",
    flag: "https://flagcdn.com/w40/de.png"
  },
  {
    name: "Singapore",
    flag: "https://flagcdn.com/w40/sg.png"
  }
];


export default Footer