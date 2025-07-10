import React, {useState, useEffect} from 'react'
import aboutImage from "../assets/about.jpeg"

const About = () => {
const messages = [
    "🌐 BOSSMI Travel Agency connects ambitious youth to global job and learning opportunities..",
    "We specialize in placements across Gulf countries, with seamless travel and support.",
    "Our Nairobi and Kitale offices handle recruitment and pre-departure processes.",
    "At BOSSMI, we don't just book travel — we open doors to brighter futures.",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" bg-gray-500 relative max-w-6xl mx-auto m-10 rounded-2xl overflow-hidden shadow-xl">
  <div className="flex flex-col md:flex-row relative">
    {/* Image with Overlay and Flash Text */}
    <div className="relative w-full md:w-1/2 h-[250px] md:h-auto min-h-[250px]">
      <img
        src={aboutImage}
        alt="Students at Anderson VTC"
        className="object-cover w-full h-full brightness-75"
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#00879E] via-[#00879E]/20 to-transparent" />

      {/* Flashing Message */}
      <div className="absolute bottom-20 left-0 w-full text-center px-4">
        <p className="text-white text-3xl sm:text-base md:text-2xl font-semibold animate-fade-in">
          {messages[index]}
        </p>
      </div>
    </div>

    {/* Text Section */}
    <div className="w-full md:w-1/2 p-6 md:p-10 bg-white">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4">
           ✨ About BOSSMI Travel Agency
      </h2>

      <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4 ">
     Founded just over four years ago, BOSSMI Travel Agency has rapidly grown into a trusted gateway for young, ambitious individuals seeking life-changing opportunities abroad. With a strong focus on the Gulf countries, we've proudly facilitated hundreds of successful placements — from employment and internships to cultural exchange and learning programs. 
      </p>

      <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
        Our mission is to bridge the gap between education and employment through accredited programs, expert instructors, and real-world training environments. Students benefit from internships, mentorships, and job placement support.
      </p>

      <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
       We operate from two strategic locations in Kenya:

Nairobi Office – Focused on recruitment, documentation, and visa support.
 Kitale Office – Dedicated to career guidance and travel preparation for outbound ventures.

Through every flight booked and opportunity opened, we take pride in being more than a travel agency — we are a movement that helps young people escape the ordinary and embrace the global.
      </p>

      <div className="mt-6">
        <span className="inline-block  text-gray-600 text-xl font-medium px-5 py-2 rounded-full shadow hover:bg-[#FED16A] transition">
          You are welcomed to visit our offices at any time and moment
        </span>
      </div>
    </div>
  </div>
</div>

  );
};




export default About
