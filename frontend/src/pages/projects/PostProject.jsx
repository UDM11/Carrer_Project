import React, { useState } from 'react';
import { FiUpload, FiCalendar, FiDollarSign, FiUsers, FiGlobe, FiEye, FiEyeOff, FiPlus, FiX } from 'react-icons/fi';

const PostProject = () => {
  // State for form data
  const [Data, setData] = useState({
    title: '',
    description: '',
    type: 'paid',
    skills: [],
    category: '',
    budgetType: 'fixed',
    budgetAmount: '',
    startDate: '',
    endDate: '',
    completionTime: '',
    teamMembers: [],
    files: [],
    visibility: 'public',
    currentSkill: ''
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...Data,
      [name]: value
    });
  };

  // Add skill to the skills array
  const addSkill = () => {
    if (Data.currentSkill && !Data.skills.includes(Data.currentSkill)) {
      setData({
        ...Data,
        skills: [...Data.skills, Data.currentSkill],
        currentSkill: ''
      });
    }
  };

  // Remove skill from the skills array
  const removeSkill = (skillToRemove) => {
    setData({
      ...Data,
      skills: Data.skills.filter(skill => skill !== skillToRemove)
    });
  };

  // Handle file upload
  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    setData({
      ...Data,
      files: [...Data.files, ...files]
    });
  };

  // Remove file from the files array
  const removeFile = (fileToRemove) => {
    setData({
      ...Data,
      files: Data.files.filter(file => file !== fileToRemove)
    });
  };

  // Add team member
  const addTeamMember = (e) => {
    if (e.key === 'Enter' && e.target.value) {
      setData({
        ...Data,
        teamMembers: [...Data.teamMembers, e.target.value],
        currentTeamMember: ''
      });
      e.target.value = '';
    }
  };

  // Remove team member
  const removeTeamMember = (memberToRemove) => {
    setData({
      ...Data,
      teamMembers: Data.teamMembers.filter(member => member !== memberToRemove)
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log(' Data:', Data);
    // Show success message
    setShowSuccess(true);
  };

  const [showSuccess, setShowSuccess] = useState(false);

  if (showSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2"> Posted Successfully!</h2>
          <p className="text-gray-600 mb-6">Your  has been successfully posted and is now visible to potential collaborators.</p>
          <div className="flex flex-col gap-3">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-200">
              View 
            </button>
            <button className="border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium py-2 px-4 rounded-lg transition duration-200">
              Edit 
            </button>
            <button className="border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium py-2 px-4 rounded-lg transition duration-200">
              Browse Talent
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Your  & Find the Right Talent</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Share your  requirements and connect with skilled learners, freelancers, or professionals.
          </p>
          <div className="flex justify-center gap-4 mt-8">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition duration-200">
              Browse Talent
            </button>
            <button className="border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium py-2 px-6 rounded-lg transition duration-200">
              View Posted s
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/*  Details Section */}
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6"> Details</h2>
            
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2"> Title</label>
              <input
                type="text"
                name="title"
                value={Data.title}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter a short, descriptive title"
                required
              />
            </div>
            
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2"> Description</label>
              <textarea
                name="description"
                value={Data.description}
                onChange={handleInputChange}
                rows="5"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Provide a detailed overview of the work required..."
                required
              ></textarea>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2"> Type</label>
                <select
                  name="type"
                  value={Data.type}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="paid">Paid </option>
                  <option value="unpaid">Unpaid / Practice </option>
                  <option value="hackathon">Hackathon / Prize </option>
                </select>
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2">Category / Industry</label>
                <select
                  name="category"
                  value={Data.category}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                >
                  <option value="">Select a category</option>
                  <option value="it">IT & Software</option>
                  <option value="design">Design & Creative</option>
                  <option value="marketing">Marketing</option>
                  <option value="business">Business</option>
                  <option value="writing">Writing</option>
                  <option value="education">Education</option>
                </select>
              </div>
            </div>
            
            <div className="mt-6">
              <label className="block text-gray-700 font-medium mb-2">Skills Required</label>
              <div className="flex flex-wrap gap-2 mb-2">
                {Data.skills.map((skill, index) => (
                  <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm flex items-center">
                    {skill}
                    <button type="button" onClick={() => removeSkill(skill)} className="ml-1 text-blue-600 hover:text-blue-800">
                      <FiX size={16} />
                    </button>
                  </span>
                ))}
              </div>
              <div className="flex">
                <input
                  type="text"
                  value={Data.currentSkill}
                  onChange={(e) => setData({...Data, currentSkill: e.target.value})}
                  className="flex-grow px-4 py-2 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Add skills (e.g., React, UI/UX, Python)"
                />
                <button 
                  type="button" 
                  onClick={addSkill}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 rounded-r-lg"
                >
                  <FiPlus size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Budget Section */}
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
              <FiDollarSign className="mr-2" /> Budget / Compensation
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Payment Type</label>
                <select
                  name="budgetType"
                  value={Data.budgetType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="fixed">Fixed Price</option>
                  <option value="hourly">Hourly Rate</option>
                  <option value="prize">Prize / Contest</option>
                </select>
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  {Data.budgetType === 'hourly' ? 'Hourly Rate' : 
                   Data.budgetType === 'prize' ? 'Prize Amount' : 'Budget Amount'}
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">$</span>
                  <input
                    type="number"
                    name="budgetAmount"
                    value={Data.budgetAmount}
                    onChange={handleInputChange}
                    className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="0.00"
                  />
                </div>
              </div>
            </div>
          </div>

          {/*  Duration Section */}
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
              <FiCalendar className="mr-2" />  Duration
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Start Date</label>
                <input
                  type="date"
                  name="startDate"
                  value={Data.startDate}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2">End Date</label>
                <input
                  type="date"
                  name="endDate"
                  value={Data.endDate}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-gray-700 font-medium mb-2">Expected Completion Time</label>
              <select
                name="completionTime"
                value={Data.completionTime}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select timeframe</option>
                <option value="1week">Less than 1 week</option>
                <option value="2weeks">1-2 weeks</option>
                <option value="1month">3-4 weeks</option>
                <option value="2months">1-2 months</option>
                <option value="3months">2-3 months</option>
                <option value="6months">3-6 months</option>
                <option value="longer">6+ months</option>
              </select>
            </div>
          </div>

          {/* Team Section */}
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
              <FiUsers className="mr-2" /> Team / Collaborators
            </h2>
            
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Invite Team Members (by email)</label>
              <input
                type="text"
                onKeyPress={addTeamMember}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter email and press Enter"
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              {Data.teamMembers.map((member, index) => (
                <span key={index} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm flex items-center">
                  {member}
                  <button type="button" onClick={() => removeTeamMember(member)} className="ml-1 text-purple-600 hover:text-purple-800">
                    <FiX size={16} />
                  </button>
                </span>
              ))}
            </div>
          </div>

          {/* File Upload Section */}
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
              <FiUpload className="mr-2" /> Files & Resources
            </h2>
            
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Upload Files</label>
              <div className="flex items-center justify-center w-full">
                <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <FiUpload className="w-8 h-8 text-gray-400 mb-3" />
                    <p className="mb-2 text-sm text-gray-500">Click to upload or drag and drop</p>
                    <p className="text-xs text-gray-500">PDF, DOC, ZIP, etc. (Max 10MB)</p>
                  </div>
                  <input 
                    type="file" 
                    className="hidden" 
                    multiple 
                    onChange={handleFileUpload}
                  />
                </label>
              </div>
            </div>
            
            <div className="grid grid-cols-1 gap-2 mt-4">
              {Data.files.map((file, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <div className="p-2 bg-blue-100 rounded-md mr-3">
                      <FiUpload className="text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-800">{file.name}</p>
                      <p className="text-xs text-gray-500">{(file.size / 1024).toFixed(2)} KB</p>
                    </div>
                  </div>
                  <button 
                    type="button" 
                    onClick={() => removeFile(file)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <FiX size={18} />
                  </button>
                </div>
              ))}
            </div>
            
            <div className="mt-6">
              <label className="block text-gray-700 font-medium mb-2">External Links</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mb-2"
                placeholder="e.g., GitHub repository link"
              />
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="e.g., Figma design link"
              />
            </div>
          </div>

          {/* Visibility Section */}
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
              <FiGlobe className="mr-2" /> Visibility Settings
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="public"
                  name="visibility"
                  value="public"
                  checked={Data.visibility === 'public'}
                  onChange={handleInputChange}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                />
                <label htmlFor="public" className="ml-3 flex items-center">
                  <FiEye className="mr-2 text-gray-600" />
                  <span className="block text-sm font-medium text-gray-700">Public</span>
                  <span className="block ml-2 text-xs text-gray-500">(Anyone can view and apply)</span>
                </label>
              </div>
              
              <div className="flex items-center">
                <input
                  type="radio"
                  id="private"
                  name="visibility"
                  value="private"
                  checked={Data.visibility === 'private'}
                  onChange={handleInputChange}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                />
                <label htmlFor="private" className="ml-3 flex items-center">
                  <FiEyeOff className="mr-2 text-gray-600" />
                  <span className="block text-sm font-medium text-gray-700">Private</span>
                  <span className="block ml-2 text-xs text-gray-500">(Only invited users can view)</span>
                </label>
              </div>
              
              <div className="flex items-center">
                <input
                  type="radio"
                  id="hackathon"
                  name="visibility"
                  value="hackathon"
                  checked={Data.visibility === 'hackathon'}
                  onChange={handleInputChange}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                />
                <label htmlFor="hackathon" className="ml-3">
                  <span className="block text-sm font-medium text-gray-700">Hackathon / Contest</span>
                  <span className="block ml-0 text-xs text-gray-500">(Open for competition with prizes)</span>
                </label>
              </div>
            </div>
          </div>

          {/* Submit Section */}
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Review & Submit</h2>
            
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <h3 className="font-medium text-gray-700 mb-2"> Preview</h3>
              <div className="border border-gray-200 rounded-md p-4 bg-white">
                <h4 className="font-semibold text-lg text-gray-800">{Data.title || "Your  Title"}</h4>
                <p className="text-gray-600 text-sm mt-2">
                  {Data.description ? 
                    (Data.description.length > 150 
                      ? `${Data.description.substring(0, 150)}...` 
                      : Data.description) 
                    : "Your  description will appear here"}
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {Data.skills.slice(0, 5).map((skill, index) => (
                    <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                      {skill}
                    </span>
                  ))}
                  {Data.skills.length > 5 && (
                    <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs">
                      +{Data.skills.length - 5} more
                    </span>
                  )}
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition duration-200 flex-1"
              >
                Post 
              </button>
              <button
                type="button"
                className="border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium py-3 px-6 rounded-lg transition duration-200 flex-1"
              >
                Save as Draft
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostProject;