import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

// Import your page components
import Home from './pages/Home';

// About pages
import About from './pages/about/About';
import Blog from './pages/about/Blog';
import Contact from './pages/about/Contact';
import HowItsWork from './pages/about/HowItsWork';
import Support from './pages/about/Support';

// Category pages
import Courses from './pages/Category/Courses';
import Jobs from './pages/Category/Jobs';
import Projects from './pages/Category/PraticeProjects';
import Trainers from './pages/Category/Trainers';

// Explore pages
import Business from './pages/explore/Business';
import CareerLaunch from './pages/explore/CareerLaunch';
import Certifications from './pages/explore/Certifications';
import Design from './pages/explore/Design';
import Development from './pages/explore/Development';
import ItSoftware from './pages/explore/ItSoftware';
import LearnAI from './pages/explore/LearnAI';
import Marketing from './pages/explore/Marketing';
import RolePlay from './pages/explore/RolePlay';

// Hire pages
import BrowseStudentPortfolio from './pages/hire/BrowseStudentPortfolio';
import FIndTalent from './pages/hire/FIndTalent';
import FullTimesRoles from './pages/hire/FullTImesRoles';
import Internships from './pages/hire/Internships';
import ManageHiring from './pages/hire/ManageHiring';
import PostJob from './pages/hire/PostJob';

// Learn pages
import AllCategory from './pages/learn/AllCategory';
import Certified from './pages/learn/Certified';
import Freeworkshops from './pages/learn/Freeworkshops';
import MyLearning from './pages/learn/MyLearning';

// Projects pages
import BrowersProjects from './pages/projects/BrowersProjects';
import CompanyPaid from './pages/projects/CompanyPaid';
import Hackathon from './pages/projects/Hackathon';
import Myproject from './pages/projects/Myproject';
import PostProject from './pages/projects/PostProject';

// Resources pages
import CareerCenter from './pages/Resources/CareerCenter';
import Help from './pages/Resources/Help';

// Other pages
import Cart from './pages/Cart';
import Community from './pages/Community';
import Complete from './pages/Complete';
// import Favorite from './pages/Favorite';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Signup from './pages/Signup';

import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            
            {/* About routes */}
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/how-it-works" element={<HowItsWork />} />
            <Route path="/support" element={<Support />} />
            
            {/* Category routes */}
            <Route path="/courses" element={<Courses />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/trainers" element={<Trainers />} />
            
            {/* Explore routes */}
            <Route path="/business" element={<Business />} />
            <Route path="/career-launch" element={<CareerLaunch />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/design" element={<Design />} />
            <Route path="/development" element={<Development />} />
            <Route path="/it-software" element={<ItSoftware />} />
            <Route path="/learn-ai" element={<LearnAI />} />
            <Route path="/marketing" element={<Marketing />} />
            <Route path="/role-play" element={<RolePlay />} />
            
            {/* Hire routes */}
            <Route path="/browse-student-portfolio" element={<BrowseStudentPortfolio />} />
            <Route path="/find-talent" element={<FIndTalent />} />
            <Route path="/full-time-roles" element={<FullTimesRoles />} />
            <Route path="/internships" element={<Internships />} />
            <Route path="/manage-hiring" element={<ManageHiring />} />
            <Route path="/post-job" element={<PostJob />} />
            
            {/* Learn routes */}
            <Route path="/all-category" element={<AllCategory />} />
            <Route path="/certified" element={<Certified />} />
            <Route path="/free-workshops" element={<Freeworkshops />} />
            <Route path="/my-learning" element={<MyLearning />} />
            
            {/* Projects routes */}
            <Route path="/browse-projects" element={<BrowersProjects />} />
            <Route path="/company-paid" element={<CompanyPaid />} />
            <Route path="/hackathon" element={<Hackathon />} />
            <Route path="/my-project" element={<Myproject />} />
            <Route path="/post-project" element={<PostProject />} />
            
            {/* Resources routes */}
            <Route path="/career-center" element={<CareerCenter />} />
            <Route path="/help" element={<Help />} />
            
            {/* Other routes */}
            <Route path="/cart" element={<Cart />} />
            <Route path="/community" element={<Community />} />
            <Route path="/complete" element={<Complete />} />
            {/* <Route path="/favorite" element={<Favorite />} /> */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            
            {/* Catch all route for 404 pages */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;