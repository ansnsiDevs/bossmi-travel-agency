import React, { useState } from 'react';
import CourseCard from './CourseCard';

import nurse from '../../assets/nurse.jpeg';
import housemanager from '../../assets/house-managers-img.jpeg';
import masonry from '../../assets/masonry.jpg';
import carpentry from '../../assets/carpentry.jpg';
import nanny from "../../assets/nanny.jpeg";
import driver from "../../assets/driver.jpeg";
import { FcFilledFilter } from "react-icons/fc";
import { CiSearch } from "react-icons/ci";
import { BsWhatsapp } from "react-icons/bs";



const courses = [
  {
    image: housemanager,
    title: "House Managers",
    country: "Oman",
    gender: "female",
    description: "Requirements: passport, Medical Screening, Age 22yrs-33yrs..."
  },
  {
    image: nurse,
    title: "Nurses",
    country: "Qatar",
    gender: "both",
    description: "Requirements: Degree in Nursing, 37yrs and below, male and female CV....."
  },
  {
    image: nanny,
    title: "Foreign Nannies",
    country: "Saudi Arabia",
    gender: "female",
    description: "Requirements: Passport, Medical Screening, Good Conduct, Zoom interview ..."
  },
  {
    image: driver,
    title: "Taxi Drivers",
    country: "Dubai",
    gender: "male",
    description: "Requirements: Passport, Medical Screening, English Test a must..."
  },
  {
    image: carpentry,
    title: "Carpentry & Joinery",
    country: "Japan",
    gender: "male",
    description: "Craft wooden furniture and structures."
  },
  {
    image: masonry,
    title: "Masonry",
    country: "Serbia",
    gender: "male",
    description: "Train in construction using bricks, stones, and concrete."
  },
];

const CoursesGrid = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedGender, setSelectedGender] = useState('');

  const countries = ['All', 'Oman', 'Qatar', 'Dubai', 'Saudi Arabia', 'Japan', 'Serbia'];
  const genders = ['All', 'male', 'female', 'both'];

  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCountry =
      selectedCountry === '' || selectedCountry === 'All' || course.country === selectedCountry;

    const matchesGender =
      selectedGender === '' || selectedGender === 'All' || course.gender === selectedGender;

    return matchesSearch && matchesCountry && matchesGender;
  });

  return (
    <div className="p-6 min-h-screen bg-gray-50">
      <h2 className="text-2xl font-bold text-center mb-2 text-gray-800">
        Explore Job Positions Available for You
      </h2>
      <p className="text-center text-sm text-black font-bold mb-6">
      <span className='flex mx-auto justify-center'> Search <CiSearch className='text-[20px] mx-2'/>and filter < FcFilledFilter className='text-[20px] mx-2'/> job opportunities across the Gulf, Japan, and more. Find roles that match your skills and qualifications.</span> 
      </p>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-8">

        {/* Search with icon */}
        <div className="relative w-full md:w-1/3">
          <input
            type="text"
            placeholder="Search job title or requirement..."
            className="border border-gray-300 text-black placeholder-gray-500 rounded px-10 py-2 w-full focus:outline-none focus:ring-1 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="absolute top-2.5 left-3 text-gray-400 text-lg">🔍</div>
        </div>

        {/* Country Filter */}
        <select
          className="border border-gray-300 text-black rounded px-4 py-2 w-full md:w-1/4 focus:outline-none"
          value={selectedCountry}
          onChange={(e) => setSelectedCountry(e.target.value)}
        >
          
          {countries.map((country, index) => (
            <option key={index} value={country}>{country}</option>
          ))}
        </select>

        {/* Gender Filter */}
        <select
          className="border border-gray-300 text-black rounded px-4 py-2 w-full md:w-1/4 focus:outline-none"
          value={selectedGender}
          onChange={(e) => setSelectedGender(e.target.value)}
        >
          {genders.map((gender, index) => (
            <option key={index} value={gender}>
              {gender === 'both' ? 'Male & Female' : gender.charAt(0).toUpperCase() + gender.slice(1)}
            </option>
          ))}
        </select>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 pb-4">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course, index) => (
            <div key={index} className="bg-white rounded shadow overflow-hidden">
              <img
                src={course.image}
                alt={course.title}
                className="w-full  h-38 object-cover"
              /> 
              <div className="p-4">
                <h3 className="font-semibold text-lg text-gray-800 mb-2">
                  {course.title} - {course.country}
                  
                </h3>
                <p className="text-sm text-gray-600">{course.description}</p>
              </div>
               <button className='text-black font-bold text-sm flex'>Chat With Us On Whatsapp <BsWhatsapp className='text-green-400 text-[20px] font-bold mx-2'/></button>
            </div>
           
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">No jobs match your search.</p>
        )}
      </div>
    </div>
  );
};

export default CoursesGrid;
