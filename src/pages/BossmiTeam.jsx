import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {Link} from "react-router-dom"
import staff from "../assets/staff.jpeg";
import staff1 from "../assets/staff1.jpeg";
import staff3 from "../assets/staff3.jpeg";
import sponsor from "../assets/staff4.jpeg";
import sponsor2 from "../assets/staff5.jpeg";

const staffData = [
  {
    image: staff,
    title: "🔑 Escape the Ordinary, Embrace the Global.",
     mwessage: "We don’t just book trips — we unlock futures..",
  },
  {
    image: sponsor,
    title:"💼 Where Ambition Meets the World.",
    message: "BOSSMI is the bridge between talent and global opportunity.",
  },
  {
    image: staff1,
    title:"🚀 Your Journey, Our Mission.",
    message: "Every traveler is a story. We help you write yours right.",
  },
  {
    image: sponsor2,
    title:"🌍 From Here to Anywhere — Seamlessly.",
    message: "We connect people to places, dreams to destinations.",
  },
  {
    image: staff3,
    title: "✈️ We Move You to New Possibilities.",
    message: " BOSSMI, travel isn’t just a trip — it’s a door to your next big opportunity.",
  },
];

const BossmiTeam = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % staffData.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-auto md:h-[60vh] overflow-hidden rounded-xl shadow-lg bg-gray-700 my-10 flex flex-col md:flex-row">
      {/* Left: Message */}
      <motion.div
        key={staffData[index].message}
        className="w-full md:w-1/2 flex items-center justify-center p-6 z-20 text-white bg-black bg-opacity-70"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 30 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-lg md:text-2xl font-semibold text-left md:text-center max-w-xl">
                   <p className="grid-cols-1 pb-4"> <span className="text-4xl text-white">‘</span> <p className=""></p>{staffData[index].title}</p>
         <p className="grid-cols-1 ">  <p className=""></p>{staffData[index].message}</p>
        </h2>
      </motion.div>

      {/* Right: Image */}
      <div className="relative w-full md:w-1/2 h-[40vh] md:h-auto">
             <div className="flex-shrink-0 font-league">
        <Link to="/" className="flex flex-col items-start text-white leading-tight">
          
          <span className="text-3xl pt-4 font-bold text-black">
            BOSSMI TEAM
          </span>
      
    
            {/* Red vertical line */}
            <div className="h-5 w-[70px] h-[4px] bg-red-500 rounded-sm"></div>
      
      
        </Link>
      </div>
      
        <AnimatePresence mode="wait">
          <motion.img
            key={staffData[index].image}
            src={staffData[index].image}
            alt="Staff"
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 1 }}
            className="absolute w-full h-full object-cover object-center"
          />
        </AnimatePresence>

        {/* Overlay gradient for legibility on small screens */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10 md:hidden" />
      </div>
    </div>
  );
};

export default BossmiTeam;
