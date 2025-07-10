import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaLaptopCode } from "react-icons/fa";
import profile from "../../assets/profile.jpeg";

const cards = [
  { profile: "", title: "Dubai — Life-Changing Opportunity! ", content: "Thanks to BOSSMI, I landed a job opportunity in Dubai that changed my life. They handled every detail — from visa processing to flight bookings — with absolute professionalism. I felt guided and supported every step of the way.", name: ""} ,
   { profile: "", title: "Dubai — Life-Changing Opportunity! ", content: "Thanks to BOSSMI, I landed a job opportunity in Dubai that changed my life. They handled every detail — from visa processing to flight bookings — with absolute professionalism. I felt guided and supported every step of the way.", name: ""} ,
  { profile: "", title: "Dubai — Life-Changing Opportunity! ", content: "Thanks to BOSSMI, I landed a job opportunity in Dubai that changed my life. They handled every detail — from visa processing to flight bookings — with absolute professionalism. I felt guided and supported every step of the way.", name: ""} ,
  { profile: "", title: "Dubai — Life-Changing Opportunity! ", content: "Thanks to BOSSMI, I landed a job opportunity in Dubai that changed my life. They handled every detail — from visa processing to flight bookings — with absolute professionalism. I felt guided and supported every step of the way.", name: ""} , { profile: "", title: "Dubai — Life-Changing Opportunity! ", content: "Thanks to BOSSMI, I landed a job opportunity in Dubai that changed my life. They handled every detail — from visa processing to flight bookings — with absolute professionalism. I felt guided and supported every step of the way.", name: ""} ,
   { title: "Moses Mulumia", content: "I take This opportunity to thank Bossmi for a chance and opportunity they game me to work abraoa there process was easy and fast" },
];

// Card Component
const Card = ({ title, content, onEnroll }) => (
  <div className="bg-gray-200 border border-gray-200 rounded-2xl shadow-lg p-6 text-black w-96 mx-4 flex-shrink-0 hover:shadow-2xl hover:bg-gradient-to-br hover:from-blue-50 hover:to-white transition-all duration-300">
  
    <h3 className="text-sm font-bold mb-3 text-gray-800 tracking-wide">{title}</h3>
    <p className="text-sm text-gray-950 font-bold mb-6">"{content}"</p>
  
      <img className='w-8 rounded-full' src={profile} alt="" />
   
  </div>
);

// Marquee Component
const CardMarquee = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleEnrollClick = () => {
    setLoading(true);
    setTimeout(() => {
      navigate('/Admissions');
    }, 2000); // simulate loading delay
  };

  return (
    <div className="relative w-screen  py-10 px-4 overflow-hidden">
      <h2 className="text-3xl font-bold mb-4 text-center text-white tracking-wider">Testimonials</h2>
      <p className='text-2xl font-bold mx-auto text-center py-6'>What Our Clients say</p>
      {/* Marquee container */}
      <div className="relative w-full overflow-hidden group">
        <div className="flex gap-6 animate-marquee group-hover:paused">
          {cards.concat(cards).map((card, index) => (
            <Card
              key={index}
              title={card.title}
              content={card.content}
              onEnroll={handleEnrollClick}
            />
          ))}
        </div>
      </div>

      {/* Transparent full-screen loading overlay with new spinner */}
      {loading && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-transparent backdrop-blur-sm flex items-center justify-center z-20">
          <div className="flex space-x-2">
            <div className="w-4 h-4 bg-[#00879E] rounded-full animate-bounce"></div>
            <div className="w-4 h-4 bg-[#00879E] rounded-full animate-bounce [animation-delay:-0.6s]"></div>
            <div className="w-4 h-4 bg-[#00879E] rounded-full animate-bounce [animation-delay:-0.8s]"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardMarquee;
