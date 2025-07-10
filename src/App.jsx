import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import CourseDetail from '@/components/custom/CourseDetail';


import Navbar from "@/components/custom/Navbar";
import Footer from "@/components/custom/Footer";
import Home from './pages/Home';
import About from './pages/About';
import BookAppointment from './pages/BookAppointment';
import Testimonial from './pages/Testimonial';
import AvailableJobs from './pages/AvailableJobs';
import BossmiTeam from './pages/BossmiTeam';
import Offices from './pages/Offices';

function App() {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 400); // Slight delay to show the spinner
    return () => clearTimeout(timeout);
  }, [location]);

  return (
    <>
      <Navbar />
{/* {loading && (
  <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 to-white backdrop-blur-md">
    <div className="slick-spinner"></div>
    <p className="mt-4 text-gray-600 font-medium animate-pulse">Loading, please wait...</p>
  </div>
)} */}

     {loading && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30">
    <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
  </div>
)}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/book-appointment" element={<BookAppointment />} />
         <Route path="/testimonials" element={<Testimonial />} /> 
        <Route path="/available-jobs" element={<AvailableJobs />} /> 
        <Route path="/bossmiTeam" element={<BossmiTeam />} />
        <Route path="/offices" element={<Offices />} />
        <Route path="/CourseDetails/:courseSlug" element={<CourseDetail />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
