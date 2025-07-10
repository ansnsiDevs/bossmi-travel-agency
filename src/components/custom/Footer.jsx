import React from "react";
import {Link} from "react-router-dom"
import logo from "../../assets/logo.jpg";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaXTwitter,
} from 'react-icons/fa6';


export default function Footer() {
  return (
    <footer className="bg-black text-gray-100 py-12 relative overflow-hidden">
      <div className="container mx-auto px-4 ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
           <div className="flex flex-col items-center flex justify-around">
            <div className="relative w-[150px] h-[150px]">
           
              {/* Footer Social Icons */}
                    <div className="text-center">
                      <h4 className="text-xl font-bold text-white mb-4">
                        Social Connect
                      </h4>
                      <span className="text-xs ">Connetct with BOSSMI on Social Media</span>
                      <div className="flex justify-center gap-6 text-2xl">
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                          <FaFacebookF className="text-blue-600 hover:scale-125 transition-transform" />
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                          <FaInstagram className="text-pink-500 hover:scale-125 transition-transform" />
                        </a>
                        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                          <FaYoutube className="text-red-600 hover:scale-125 transition-transform" />
                        </a>
                        <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                          <FaTiktok className="text-white hover:scale-125 transition-transform" />
                        </a>
                        <a href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter/X">
                          <FaXTwitter className="text-gray-800 hover:scale-125 transition-transform" />
                        </a>
                      </div>
                      <p className="text-sm text-200 mt-4">Follow us for updates, events, and job alerts!</p>
                    </div>
             
            </div>

          
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-3">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-red-400 text-sm">Available Positions</a></li>
              <li><a href="#" className="hover:text-red-400 text-sm">About BOSSMI</a></li>
              <li><a href="#" className="hover:text-red-400 text-sm">our Team </a></li>
              <li><a href="#" className="hover:text-red-400 text-sm">Contact and our Offices </a></li>
            </ul>
          </div>

          {/* Resources */}
        

          {/* Newsletter */}
          <div>
            <h4 className="font-bold mb-3">Newsletter</h4>
            <p className="mb-3 hover:text-red-400 text-sm">Stay updated with the latest Positions and Opportunities for you to grab</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-3 py-2 text-white border border-gray-700 rounded-l-lg focus:outline-none w-full"
              />
              <button className="bg-[#60B5FF] px-3 py-2 rounded-r-lg hover:bg-red-600">→</button>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="mt-8 flex  mx-auto hover:text-black justify-center pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center">
          <p>© 2025 BOSSMI. All rights reserved</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            {/* Social icons go here */}
          </div>
        </div>
      </div>
    </footer>
  );
}