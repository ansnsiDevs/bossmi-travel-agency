import React from 'react';
import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpg";
import { MdAddIcCall } from "react-icons/md";
import { MdAttachEmail } from "react-icons/md";



import { IoIosCall } from "react-icons/io";
import { MdMarkEmailUnread } from "react-icons/md";
import "./Header.css"; // Add this import if you're placing animation styles in a separate CSS file

const Header = () => {
  return (
    <div className="bg-white p-4">
      <div className="md:flex gap-6 items-center justify-center">
        <div>
          <Link className="flex gap-2 items-center">
            <MdAttachEmail className=" text-red-500 animate-icon" />
            <p className="text-gray-950 text-sm hover:text-red-800 text-sm font-bold">
              bossmirecruitmentagency@gmail.com
            </p>
          </Link>
        </div>

        <div>
          <Link to="/" className="flex gap-2 items-center">
          <MdAddIcCall className="text-l text-green-500 animate-icon" />
            <p className="text-gray-800 text-sm font-bold hover:text-red-800 ">+254 743 635 098 </p> /
            <p className="text-gray-800 text-sm font-bold hover:text-red-800 ">+254 794 789 494 </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
