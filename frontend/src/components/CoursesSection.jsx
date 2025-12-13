// import { useRef, useState, useEffect } from "react";
// import { Star, ChevronLeft, ChevronRight, Users, BookOpen, Clock } from "lucide-react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// function CoursesSection({ user }) {
//   const [courses, setCourses] = useState([]);
//   const [appliedCourses, setAppliedCourses] = useState([]);
//   const [activeCategory, setActiveCategory] = useState("Data Science");
//   const [activeTag, setActiveTag] = useState("ChatGPT");

//   const tagsRef = useRef(null);
//   const coursesRef = useRef(null);
//   const navigate = useNavigate();

//   const categories = [
//     "Data Science",
//     "IT Certifications",
//     "Leadership",
//     "Web Development",
//     "Communication",
//     "Business Analytics & Intelligence",
//   ];

//   const tags = [
//     { name: "ChatGPT", learners: "4M+", icon: "🤖" },
//     { name: "Data Science", learners: "8M+", icon: "📊" },
//     { name: "Python", learners: "49.9M+", icon: "🐍" },
//     { name: "Machine Learning", learners: "9M+", icon: "🧠" },
//     { name: "Deep Learning", learners: "2M+", icon: "🔍" },
//     { name: "Artificial Intelligence (AI)", learners: "4M+", icon: "⚡" },
//     { name: "Statistics", learners: "1M+", icon: "📈" },
//   ];

//   useEffect(() => {
//     // Fetch courses from backend
//     const fetchCourses = async () => {
//       const res = await axios.get("http://localhost:5000/api/courses");
//       setCourses(res.data);
//     };

//     // Fetch user's applied courses if logged in
//     const fetchAppliedCourses = async () => {
//       if (user) {
//         const res = await axios.get(`http://localhost:5000/api/users/applied`, {
//           headers: { Authorization: `Bearer ${user.token}` },
//         });
//         setAppliedCourses(res.data.appliedCourses.map(c => c._id));
//       }
//     };

//     fetchCourses();
//     fetchAppliedCourses();
//   }, [user]);

//   const scrollRow = (ref, direction) => {
//     if (ref.current) {
//       const scrollAmount = 300;
//       ref.current.scrollBy({
//         left: direction === "left" ? -scrollAmount : scrollAmount,
//         behavior: "smooth",
//       });
//     }
//   };

//   const handleApply = async (courseId) => {
//     if (!user) {
//       navigate("/login");
//       return;
//     }

//     if (appliedCourses.includes(courseId)) {
//       alert("You already applied for this course");
//       return;
//     }

//     try {
//       await axios.post(
//         `http://localhost:5000/api/courses/apply/${courseId}`,
//         {},
//         { headers: { Authorization: `Bearer ${user.token}` } }
//       );
//       setAppliedCourses(prev => [...prev, courseId]);
//       alert("Course applied successfully!");
//     } catch (error) {
//       alert(error.response?.data?.message || "Failed to apply");
//     }
//   };

//   const handleViewAll = (type) => {
//     alert(`View all ${type} clicked! (Replace with navigation)`);
//   };

//   return (
//     <section className="px-6 py-10 max-w-7xl mx-auto bg-gradient-to-b from-blue-50 to-white">
//       {/* Header */}
//       <div className="text-center mb-10">
//         <h1 className="text-3xl md:text-4xl font-bold text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
//           All the skills you need in one place
//         </h1>
//         <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
//           From critical skills to technical topics, Udemy supports your professional development.
//         </p>
//       </div>

//       {/* Categories Nav */}
//       <div className="flex gap-6 mt-6 overflow-x-auto pb-2 scrollbar-hide">
//         {categories.map((cat) => (
//           <button
//             key={cat}
//             onClick={() => setActiveCategory(cat)}
//             className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
//               activeCategory === cat
//                 ? "bg-blue-600 text-white shadow-lg"
//                 : "bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-700 shadow-md"
//             }`}
//           >
//             {cat}
//           </button>
//         ))}
//       </div>

//       {/* Tags Pills */}
//       <div className="relative mt-8">
//         <h2 className="text-xl font-semibold text-gray-800 mb-4">Popular Topics</h2>
        
//         <div className="lg:hidden relative">
//           <button 
//             onClick={() => scrollRow(tagsRef, "left")} 
//             className="absolute left-0 top-1/2 -translate-y-1/2 bg-white border border-gray-200 rounded-full shadow-md p-2 hover:bg-blue-50 z-10"
//           >
//             <ChevronLeft size={20} className="text-blue-600" />
//           </button>

//           <div ref={tagsRef} className="flex gap-3 overflow-x-auto scrollbar-hide pb-2 px-8">
//             {tags.map((tag) => (
//               <button
//                 key={tag.name}
//                 onClick={() => setActiveTag(tag.name)}
//                 className={`px-4 py-3 rounded-xl border flex flex-col items-center min-w-[120px] transition-all ${
//                   activeTag === tag.name
//                     ? "bg-blue-600 text-white shadow-lg border-blue-700"
//                     : "bg-white text-gray-700 hover:bg-blue-50 shadow-md border-gray-200"
//                 }`}
//               >
//                 <span className="text-xl mb-1">{tag.icon}</span>
//                 <span className="text-xs font-medium">{tag.name}</span>
//                 <span className="text-xs mt-1 text-blue-100 bg-blue-500 px-2 py-1 rounded-full">
//                   {tag.learners}
//                 </span>
//               </button>
//             ))}
//             <button 
//               onClick={() => handleViewAll("tags")} 
//               className="px-4 py-3 rounded-xl border text-sm bg-white hover:bg-blue-50 whitespace-nowrap shadow-md border-gray-200 flex items-center justify-center text-blue-600 font-medium"
//             >
//               View All <ChevronRight size={16} className="ml-1" />
//             </button>
//           </div>

//           <button 
//             onClick={() => scrollRow(tagsRef, "right")} 
//             className="absolute right-0 top-1/2 -translate-y-1/2 bg-white border border-gray-200 rounded-full shadow-md p-2 hover:bg-blue-50 z-10"
//           >
//             <ChevronRight size={20} className="text-blue-600" />
//           </button>
//         </div>

//         <div className="hidden lg:grid lg:grid-cols-4 xl:grid-cols-7 gap-4 mt-4">
//           {tags.map((tag) => (
//             <button
//               key={tag.name}
//               onClick={() => setActiveTag(tag.name)}
//               className={`px-4 py-3 rounded-xl border flex flex-col items-center transition-all ${
//                 activeTag === tag.name
//                   ? "bg-blue-600 text-white shadow-lg border-blue-700"
//                   : "bg-white text-gray-700 hover:bg-blue-50 shadow-md border-gray-200"
//               }`}
//             >
//               <span className="text-xl mb-1">{tag.icon}</span>
//               <span className="text-xs font-medium text-center">{tag.name}</span>
//               <span className="text-xs mt-1 text-blue-100 bg-blue-500 px-2 py-1 rounded-full">
//                 {tag.learners}
//               </span>
//             </button>
//           ))}
//           <button 
//             onClick={() => handleViewAll("tags")} 
//             className="px-4 py-3 rounded-xl border text-sm bg-white hover:bg-blue-50 shadow-md border-gray-200 flex flex-col items-center justify-center text-blue-600 font-medium"
//           >
//             View All <ChevronRight size={16} className="mt-1" />
//           </button>
//         </div>
//       </div>

//       {/* Courses Section */}
//       <div className="mt-10">
//         <div className="flex justify-between items-center mb-6">
//           <h2 className="text-2xl font-bold text-gray-800">Featured Courses</h2>
//           <button 
//             onClick={() => handleViewAll("courses")}
//             className="text-blue-600 font-medium flex items-center hover:text-blue-800"
//           >
//             View All <ChevronRight size={18} className="ml-1" />
//           </button>
//         </div>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//           {courses.map((course) => (
//             <div key={course._id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
//               <div className="relative">
//                 <img src={course.img} alt={course.title} className="w-full h-48 object-cover" />
//                 <div className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">
//                   Bestseller
//                 </div>
//               </div>
              
//               <div className="p-4">
//                 <h3 className="font-bold text-gray-900 line-clamp-2">{course.title}</h3>
//                 <p className="text-sm text-gray-600 mt-1">{course.author}</p>

//                 {/* Rating */}
//                 <div className="flex items-center mt-3">
//                   <span className="text-orange-500 font-bold mr-1">{course.rating}</span>
//                   <div className="flex items-center">
//                     {Array.from({ length: 5 }, (_, i) => (
//                       <Star 
//                         key={i} 
//                         size={14} 
//                         className={`${i < Math.round(course.rating) ? "text-orange-400 fill-orange-400" : "text-gray-300"}`} 
//                       />
//                     ))}
//                   </div>
//                   <span className="text-gray-500 text-sm ml-1">({course.learners})</span>
//                 </div>

//                 {/* Course Info */}
//                 <div className="flex items-center text-gray-500 text-xs mt-3 space-x-3">
//                   <div className="flex items-center">
//                     <Clock size={14} className="mr-1" />
//                     <span>12h</span>
//                   </div>
//                   <div className="flex items-center">
//                     <BookOpen size={14} className="mr-1" />
//                     <span>56 lectures</span>
//                   </div>
//                 </div>

//                 {/* Price */}
//                 <div className="flex items-center mt-3">
//                   <span className="text-lg font-bold text-gray-900">{course.price}</span>
//                   <span className="text-sm text-gray-500 line-through ml-2">{course.oldPrice}</span>
//                 </div>

//                 {/* Apply Button */}
//                 <button
//                   onClick={() => handleApply(course._id)}
//                   className={`mt-4 w-full py-3 rounded-lg font-medium transition-all ${
//                     appliedCourses.includes(course._id)
//                       ? "bg-gray-200 text-gray-600 cursor-not-allowed"
//                       : "bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg"
//                   }`}
//                   disabled={appliedCourses.includes(course._id)}
//                 >
//                   {appliedCourses.includes(course._id) ? "Applied ✓" : "Apply Now"}
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default CoursesSection;
























import { useRef, useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, BookOpen, Clock, ZoomIn, Filter, X } from "lucide-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CoursesSection({ user }) {
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [appliedCourses, setAppliedCourses] = useState([]);
  const [activeCategory, setActiveCategory] = useState("Data Science");
  const [activeTag, setActiveTag] = useState("All");
  const [zoomedImage, setZoomedImage] = useState(null);
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    skill: "All",
    level: "All",
    popularity: "All"
  });

  const tagsRef = useRef(null);
  const navigate = useNavigate();

  const categories = [
    "Data Science",
    "IT Certifications",
    "Leadership",
    "Web Development",
    "Communication",
    "Business Analytics & Intelligence",
  ];

  const skillOptions = ["All", "Python", "JavaScript", "Java", "AI", "Machine Learning", "Data Analysis", "Web Development"];
  const levelOptions = ["All", "Beginner", "Intermediate", "Advanced", "Expert"];
  const popularityOptions = ["All", "Most Popular", "Highest Rated", "Newest", "Bestseller"];

  const tags = [
    { name: "All", learners: "20M+", icon: "🌟", highlighted: false },
    { name: "Python", learners: "8M+", icon: "🐍", highlighted: true },
    { name: "Artificial Intelligence (AI)", learners: "1M+", icon: "⚡", highlighted: true },
    { name: "Web Development", learners: "12M+", icon: "💻", highlighted: true },
    { name: "Data Science", learners: "8M+", icon: "📊", highlighted: true },
    { name: "ChatGPT", learners: "3M+", icon: "🤖", highlighted: false },
    { name: "Machine Learning", learners: "9M+", icon: "🧠", highlighted: false },
    { name: "Deep Learning", learners: "2M+", icon: "🔍", highlighted: false },
    { name: "Statistics", learners: "1M+", icon: "📈", highlighted: false },
    { name: "JavaScript", learners: "13M+", icon: "📜", highlighted: false },
    { name: "React", learners: "4M+", icon: "⚛️", highlighted: false },
    { name: "Java", learners: "10M+", icon: "☕", highlighted: false },
  ];

  useEffect(() => {
    // Fetch courses from backend
    const fetchCourses = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/courses");
        setCourses(res.data);
        setFilteredCourses(res.data);
      } catch (error) {
        console.error("Error fetching courses:", error);
        // Fallback to sample data if API fails
        setCourses(sampleCourses);
        setFilteredCourses(sampleCourses);
      }
    };

    // Fetch user's applied courses if logged in
    const fetchAppliedCourses = async () => {
      if (user) {
        try {
          const res = await axios.get(`http://localhost:5000/api/users/applied`, {
            headers: { Authorization: `Bearer ${user.token}` },
          });
          setAppliedCourses(res.data.appliedCourses.map(c => c._id));
        } catch (error) {
          console.error("Error fetching applied courses:", error);
        }
      }
    };

    fetchCourses();
    fetchAppliedCourses();
  }, [user]);

  useEffect(() => {
    // Filter courses based on active category, tag, and filters
    let filtered = courses;
    
    if (activeCategory !== "All") {
      filtered = filtered.filter(course => course.category === activeCategory);
    }
    
    if (activeTag !== "All") {
      filtered = filtered.filter(course => 
        course.tags && course.tags.some(tag => 
          tag.toLowerCase().includes(activeTag.toLowerCase())
        )
      );
    }
    
    // Apply additional filters
    if (filters.skill !== "All") {
      filtered = filtered.filter(course => 
        course.tags && course.tags.some(tag => 
          tag.toLowerCase().includes(filters.skill.toLowerCase())
        )
      );
    }
    
    if (filters.level !== "All") {
      filtered = filtered.filter(course => 
        course.level === filters.level
      );
    }
    
    if (filters.popularity !== "All") {
      switch(filters.popularity) {
        case "Most Popular":
          filtered = filtered.sort((a, b) => parseInt(b.learners.replace(/,/g, '')) - parseInt(a.learners.replace(/,/g, '')));
          break;
        case "Highest Rated":
          filtered = filtered.sort((a, b) => b.rating - a.rating);
          break;
        case "Bestseller":
          filtered = filtered.filter(course => course.isBestseller);
          break;
        default:
          break;
      }
    }
    
    setFilteredCourses(filtered);
  }, [activeCategory, activeTag, filters, courses]);

  // Sample course data as fallback with improved images
  const sampleCourses = [
    {
      _id: "1",
      title: "The Complete AI Guide: Learn ChatGPT, Generative AI & More",
      author: "Julian Melanson, Benza Maman, Leap...",
      rating: 4.5,
      learners: "52,570",
      price: "₹559",
      oldPrice: "₹2,699",
      img: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
      category: "Data Science",
      tags: ["ChatGPT", "AI", "Generative AI"],
      duration: "12h",
      lectures: "56",
      level: "Intermediate",
      isBestseller: true
    },
    {
      _id: "2",
      title: "ChatGPT: Complete ChatGPT Course For Work 2025 (Ethically!)",
      author: "Steve Ballinger, MBA",
      rating: 4.5,
      learners: "118,950",
      price: "₹759",
      oldPrice: "₹4,199",
      img: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
      category: "Data Science",
      tags: ["ChatGPT", "AI", "Ethics"],
      duration: "10h",
      lectures: "48",
      level: "Beginner",
      isBestseller: true
    },
    {
      _id: "3",
      title: "Python for Data Science and Machine Learning",
      author: "Jose Portilla",
      rating: 4.7,
      learners: "320,450",
      price: "₹799",
      oldPrice: "₹4,999",
      img: "https://images.unsplash.com/photo-1526379879527-8559ecfcaec0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
      category: "Data Science",
      tags: ["Python", "Machine Learning", "Data Science"],
      duration: "16h",
      lectures: "72",
      level: "Intermediate",
      isBestseller: true
    },
    {
      _id: "4",
      title: "AWS Certified Solutions Architect - Associate",
      author: "Amazon Web Services",
      rating: 4.8,
      learners: "156,320",
      price: "₹899",
      oldPrice: "₹5,499",
      img: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
      category: "IT Certifications",
      tags: ["AWS", "Cloud", "Certification"],
      duration: "20h",
      lectures: "85",
      level: "Advanced",
      isBestseller: true
    },
    {
      _id: "5",
      title: "Complete Web Development Bootcamp 2024",
      author: "Dr. Angela Yu",
      rating: 4.7,
      learners: "420,150",
      price: "₹899",
      oldPrice: "₹5,999",
      img: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
      category: "Web Development",
      tags: ["Web Development", "HTML", "CSS", "JavaScript"],
      duration: "55h",
      lectures: "220",
      level: "Beginner",
      isBestseller: true
    },
    {
      _id: "6",
      title: "React JS - Complete Guide for Beginners",
      author: "Maximilian Schwarzmüller",
      rating: 4.6,
      learners: "152,840",
      price: "₹749",
      oldPrice: "₹4,299",
      img: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
      category: "Web Development",
      tags: ["React", "JavaScript", "Frontend"],
      duration: "28h",
      lectures: "135",
      level: "Intermediate",
      isBestseller: false
    },
    {
      _id: "7",
      title: "Java Programming Masterclass",
      author: "Tim Buchalka",
      rating: 4.6,
      learners: "280,450",
      price: "₹849",
      oldPrice: "₹4,899",
      img: "https://images.unsplash.com/photo-1580494767366-6d5c36d093c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
      category: "IT Certifications",
      tags: ["Java", "Programming", "Backend"],
      duration: "80h",
      lectures: "350",
      level: "Beginner",
      isBestseller: true
    },
    {
      _id: "8",
      title: "Machine Learning A-Z: Hands-On Python & R In Data Science",
      author: "Kirill Eremenko, Hadelin de Ponteves",
      rating: 4.6,
      learners: "420,890",
      price: "₹949",
      oldPrice: "₹5,999",
      img: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
      category: "Data Science",
      tags: ["Machine Learning", "Python", "Data Science"],
      duration: "44h",
      lectures: "280",
      level: "Advanced",
      isBestseller: true
    },
    {
      _id: "9",
      title: "Data Structures & Algorithms in Python",
      author: "Jose Portilla",
      rating: 4.7,
      learners: "185,630",
      price: "₹849",
      oldPrice: "₹4,899",
      img: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
      category: "IT Certifications",
      tags: ["Python", "Algorithms", "Data Structures"],
      duration: "35h",
      lectures: "150",
      level: "Intermediate",
      isBestseller: false
    },
    {
      _id: "10",
      title: "Artificial Intelligence: Reinforcement Learning in Python",
      author: "Lazy Programmer Inc.",
      rating: 4.5,
      learners: "98,450",
      price: "₹799",
      oldPrice: "₹4,299",
      img: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
      category: "Data Science",
      tags: ["AI", "Python", "Machine Learning"],
      duration: "18h",
      lectures: "95",
      level: "Advanced",
      isBestseller: false
    }
  ];

  const scrollRow = (ref, direction) => {
    if (ref.current) {
      const scrollAmount = 300;
      ref.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleApply = async (courseId) => {
    if (!user) {
      navigate("/login");
      return;
    }

    if (appliedCourses.includes(courseId)) {
      alert("You already applied for this course");
      return;
    }

    try {
      await axios.post(
        `http://localhost:5000/api/courses/apply/${courseId}`,
        {},
        { headers: { Authorization: `Bearer ${user.token}` } }
      );
      setAppliedCourses(prev => [...prev, courseId]);
      alert("Course applied successfully!");
    } catch (error) {
      alert(error.response?.data?.message || "Failed to apply");
    }
  };

  const handleViewAll = () => {
    setActiveCategory("All");
    setActiveTag("All");
    setFilters({
      skill: "All",
      level: "All",
      popularity: "All"
    });
  };

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  const handleTagClick = (tag) => {
    setActiveTag(tag);
  };

  const handleImageZoom = (imageUrl) => {
    setZoomedImage(imageUrl);
  };

  const closeZoom = () => {
    setZoomedImage(null);
  };

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const clearAllFilters = () => {
    setActiveCategory("Data Science");
    setActiveTag("All");
    setFilters({
      skill: "All",
      level: "All",
      popularity: "All"
    });
  };

  return (
    <section className="px-6 py-10 max-w-7xl mx-auto bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          All the skills you need in one place
        </h1>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          From critical skills to technical topics, Udemy supports your professional development.
        </p>
      </div>

      {/* Categories Nav */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800">IT & Data Science Courses</h2>
        <button 
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Filter size={18} />
          Filters
        </button>
      </div>

      {/* Advanced Filters */}
      {showFilters && (
        <div className="bg-white p-6 rounded-xl shadow-md mb-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Filter Courses</h3>
            <button onClick={() => setShowFilters(false)} className="text-gray-500 hover:text-gray-700">
              <X size={20} />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">By Skill</label>
              <select 
                value={filters.skill}
                onChange={(e) => handleFilterChange("skill", e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                {skillOptions.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">By Level</label>
              <select 
                value={filters.level}
                onChange={(e) => handleFilterChange("level", e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                {levelOptions.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">By Popularity</label>
              <select 
                value={filters.popularity}
                onChange={(e) => handleFilterChange("popularity", e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                {popularityOptions.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      )}

      <div className="flex gap-6 mt-6 overflow-x-auto pb-2 scrollbar-hide">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategoryClick(cat)}
            className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
              activeCategory === cat
                ? "bg-blue-600 text-white shadow-lg"
                : "bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-700 shadow-md"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Tags Pills with Left/Right Scroll Icons */}
      <div className="relative mt-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Popular Topics</h2>
        
        <div className="relative">
          <button 
            onClick={() => scrollRow(tagsRef, "left")} 
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white border border-gray-200 rounded-full shadow-md p-2 hover:bg-blue-50 z-10"
          >
            <ChevronLeft size={20} className="text-blue-600" />
          </button>

          <div ref={tagsRef} className="flex gap-3 overflow-x-auto scrollbar-hide pb-2 px-8">
            {tags.map((tag) => (
              <button
                key={tag.name}
                onClick={() => handleTagClick(tag.name)}
                className={`px-4 py-3 rounded-xl border flex flex-col items-center min-w-[120px] transition-all ${
                  activeTag === tag.name
                    ? "bg-blue-600 text-white shadow-lg border-blue-700"
                    : tag.highlighted 
                    ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg border-blue-700"
                    : "bg-white text-gray-700 hover:bg-blue-50 shadow-md border-gray-200"
                }`}
              >
                <span className="text-xl mb-1">{tag.icon}</span>
                <span className="text-xs font-medium text-center">{tag.name}</span>
                <span className={`text-xs mt-1 px-2 py-1 rounded-full ${
                  tag.highlighted ? "bg-blue-700 text-blue-100" : "text-blue-100 bg-blue-500"
                }`}>
                  {tag.learners}
                </span>
              </button>
            ))}
          </div>

          <button 
            onClick={() => scrollRow(tagsRef, "right")} 
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white border border-gray-200 rounded-full shadow-md p-2 hover:bg-blue-50 z-10"
          >
            <ChevronRight size={20} className="text-blue-600" />
          </button>
        </div>
      </div>

      {/* Active Filters */}
      {(activeCategory !== "Data Science" || activeTag !== "All" || filters.skill !== "All" || filters.level !== "All" || filters.popularity !== "All") && (
        <div className="mt-6 flex items-center flex-wrap gap-2">
          <span className="text-sm text-gray-600">Active filters:</span>
          {activeCategory !== "Data Science" && (
            <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
              Category: {activeCategory}
              <button 
                onClick={() => setActiveCategory("Data Science")}
                className="ml-2 text-blue-600 hover:text-blue-800"
              >
                ×
              </button>
            </span>
          )}
          {activeTag !== "All" && (
            <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
              Tag: {activeTag}
              <button 
                onClick={() => setActiveTag("All")}
                className="ml-2 text-blue-600 hover:text-blue-800"
              >
                ×
              </button>
            </span>
          )}
          {filters.skill !== "All" && (
            <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
              Skill: {filters.skill}
              <button 
                onClick={() => handleFilterChange("skill", "All")}
                className="ml-2 text-blue-600 hover:text-blue-800"
              >
                ×
              </button>
            </span>
          )}
          {filters.level !== "All" && (
            <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
              Level: {filters.level}
              <button 
                onClick={() => handleFilterChange("level", "All")}
                className="ml-2 text-blue-600 hover:text-blue-800"
              >
                ×
              </button>
            </span>
          )}
          {filters.popularity !== "All" && (
            <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
              Popularity: {filters.popularity}
              <button 
                onClick={() => handleFilterChange("popularity", "All")}
                className="ml-2 text-blue-600 hover:text-blue-800"
              >
                ×
              </button>
            </span>
          )}
          <button 
            onClick={clearAllFilters}
            className="text-sm text-blue-600 hover:text-blue-800 font-medium"
          >
            Clear all filters
          </button>
        </div>
      )}

      {/* Courses Section */}
      <div className="mt-10">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            {activeCategory} Courses {filteredCourses.length > 0 ? `(${filteredCourses.length})` : ''}
          </h2>
          <button 
            onClick={handleViewAll}
            className="text-blue-600 font-medium flex items-center hover:text-blue-800 bg-blue-100 px-4 py-2 rounded-lg"
          >
            View All Courses <ChevronRight size={18} className="ml-1" />
          </button>
        </div>
        
        {filteredCourses.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-xl shadow-md">
            <p className="text-gray-600">No courses found. Try changing your filters.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCourses.map((course) => (
              <div key={course._id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={course.img} 
                    alt={course.title} 
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110 cursor-zoom-in"
                    onClick={() => handleImageZoom(course.img)}
                  />
                  <div className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">
                    {course.isBestseller ? "Bestseller" : "Popular"}
                  </div>
                  <div className="absolute top-3 right-3 bg-white/80 rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ZoomIn size={16} className="text-gray-700" />
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="font-bold text-gray-900 line-clamp-2">{course.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{course.author}</p>

                  {/* Rating */}
                  <div className="flex items-center mt-3">
                    <span className="text-orange-500 font-bold mr-1">{course.rating}</span>
                    <div className="flex items-center">
                      {Array.from({ length: 5 }, (_, i) => (
                        <Star 
                          key={i} 
                          size={14} 
                          className={`${i < Math.round(course.rating) ? "text-orange-400 fill-orange-400" : "text-gray-300"}`} 
                        />
                      ))}
                    </div>
                    <span className="text-gray-500 text-sm ml-1">({course.learners})</span>
                  </div>

                  {/* Course Info */}
                  <div className="flex items-center text-gray-500 text-xs mt-3 space-x-3">
                    <div className="flex items-center">
                      <Clock size={14} className="mr-1" />
                      <span>{course.duration || "12h"}</span>
                    </div>
                    <div className="flex items-center">
                      <BookOpen size={14} className="mr-1" />
                      <span>{course.lectures || "56"} lectures</span>
                    </div>
                  </div>

                  {/* Level Badge */}
                  {course.level && (
                    <div className="mt-2">
                      <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                        course.level === "Beginner" ? "bg-green-100 text-green-800" :
                        course.level === "Intermediate" ? "bg-yellow-100 text-yellow-800" :
                        course.level === "Advanced" ? "bg-orange-100 text-orange-800" :
                        "bg-red-100 text-red-800"
                      }`}>
                        {course.level}
                      </span>
                    </div>
                  )}

                  {/* Tags */}
                  {course.tags && (
                    <div className="flex flex-wrap gap-1 mt-3">
                      {course.tags.slice(0, 3).map((tag, index) => (
                        <span key={index} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Price */}
                  <div className="flex items-center mt-3">
                    <span className="text-lg font-bold text-gray-900">{course.price}</span>
                    <span className="text-sm text-gray-500 line-through ml-2">{course.oldPrice}</span>
                  </div>

                  {/* Apply Button */}
                  <button
                    onClick={() => handleApply(course._id)}
                    className={`mt-4 w-full py-3 rounded-lg font-medium transition-all ${
                      appliedCourses.includes(course._id)
                        ? "bg-gray-200 text-gray-600 cursor-not-allowed"
                        : "bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg"
                    }`}
                    disabled={appliedCourses.includes(course._id)}
                  >
                    {appliedCourses.includes(course._id) ? "Applied ✓" : "Apply Now"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Image Zoom Modal */}
      {zoomedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={closeZoom}
        >
          <div className="relative max-w-4xl max-h-full">
            <button 
              className="absolute -top-12 right-0 text-white text-lg bg-blue-600 rounded-full w-10 h-10 flex items-center justify-center hover:bg-blue-700 transition-colors"
              onClick={closeZoom}
            >
              ✕
            </button>
            <img 
              src={zoomedImage} 
              alt="Zoomed course" 
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default CoursesSection;