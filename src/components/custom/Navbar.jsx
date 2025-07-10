import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, ChevronDown } from "lucide-react";
import { FcLock, FcAbout } from "react-icons/fc";
import Header from "./Header";

const courses = [
  { name: "Saudi Arabia", icon: "🇸🇦" },
  { name: "Bahrain", icon: "🇧🇭" },
  { name: "Dubai", icon: "🇦🇪" },
  { name: "Qatar", icon: "🇶🇦" },
  { name: "Oman", icon: "🇴🇲" },
  { name: "Japan", icon: "🇯🇵" },
  { name: "Libya", icon: "🇱🇾" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinkClass = `
    relative 
    text-white 
    visited:text-[#ffffff]
    transition-all 
    duration-300 
    hover:text-red-400
    after:content-[''] 
    after:absolute 
    after:left-0 
    after:-bottom-1 
    after:w-0 
    after:h-[2px] 
    after:bg-white
    after:transition-all 
    after:duration-1000 
    hover:after:w-full
  `;

  return (
    <>
      <Header />
      <header className="bg-gray-700 shadow-lg z-50 relative py-6">
        <div className="container mx-auto">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0 font-league">
              <Link to="/" className="flex flex-col items-start text-white leading-tight">
                <span className="text-3xl pt-4 font-bold text-black">BOSSMI</span>
                <div className="flex items-center gap-2">
                  <div className="h-5 w-[70px] h-[4px] bg-red-500 rounded-sm"></div>
                  <span className="text-sm tracking-wide"> Travel Agency</span>
                </div>
                <span className="text-red-500 text-lg mt-1 ">Escape The Ordinary</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/" className={navLinkClass}>
                <p className="font-bold text-sm">Home</p>
              </Link>
{/* 
              {/* Gulf Countries Dropdown */}
              <div className="relative group">
                <div className={`${navLinkClass} flex items-center gap-1 cursor-pointer`}>
                  <span className="text-sm font-bold">About</span>
                  <ChevronDown className="w-4 h-4 text-[#FED16A] transition-transform duration-300 group-hover:rotate-180" />
                </div>

                {/* Dropdown Panel */}
                <div className="absolute bg-black px-8 left-0 mt-8 w-[600px] max-h-[500px] rounded-xl shadow-2xl border border-blue-300 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-3 invisible group-hover:visible scale-95 group-hover:scale-100 transform transition-all duration-500 z-50 p-6 overflow-y-auto">
                  <h4 className="text-xl font-bold text-gray-200 mb-3 flex items-center gap-3">
                Learrn About BOSSMI Travel Agency 
                  </h4>

               
               

                  <Link
                    to="/about"
                    className="mt-6 inline-block text-base font-semibold text-white hover:text-gray-500 transition duration-300"
                  >
                     About Us
                  </Link>
                </div>
              </div>

              <Link to="/available-jobs" className={navLinkClass}>
                <p className="text-sm font-bold">Jobs Available</p>
              </Link>
              <Link to="/book-appointment" className={navLinkClass}>
                <p className="text-sm font-bold">Book Appointment</p>
              </Link>
              <Link to="/testimonials" className={navLinkClass}>
                <p className="text-sm font-bold">Testimonials</p>
              </Link>
              <Link to="/bossmiTeam" className={navLinkClass}>
                <p className="text-sm font-bold">Our Team</p>
              </Link>

              {/* Visit Office Button */}
              <div className="hidden md:block">
                <div className="relative group rounded-md p-[2px] via-blue-500 to-purple-600 animate-gradient-border hover:animate-pulse">
                  <button className="flex text-sm bg-white font-bold text-[#1b8cfc] group-hover:text-red-600 py-2 px-6 rounded-md transition-all duration-300">
                    <Link className="flex" to="/Offices">Visit Our Offices</Link>
                  </button>
                </div>
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-3 md:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 text-gray-700"
                onClick={toggleMenu}
                aria-label="Open main menu"
              >
                <Menu className="h-8 font-bold w-8 rounded text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About" },
                { to: "/jobs-available", label: "Job Vacancies" },
                { to: "/book-appointment", label: "Book Appointment" },
                { to: "/testimonials", label: "Testimonials" },
                { to: "/bossmi-team", label: "BossmiTeam" },
              ].map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`${navLinkClass} block px-3 py-2`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              <div className="mt-3">
                <div className="relative group rounded-md hover:animate-pulse">
                  <button className="items-center flex bg-white font-bold text-[#1b8cfc] group-hover:text-red-800 py-2 px-6 rounded-md w-full h-full transition-all duration-300">
                    <Link className="flex" to="/Login">
                      Our Offices <FcLock className="text-xl ml-2" />
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
