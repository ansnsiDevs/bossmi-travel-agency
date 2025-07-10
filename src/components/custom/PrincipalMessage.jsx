import React from 'react';
import principalImage from '../../assets/principal.jpg'; // Replace with actual path



const PrincipalMessage = () => {
  return (
    <section className="bg-[#222224] py-12 px-4 sm:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
        {/* Text Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold text- mb-4">
            Principal's Message
          </h2>
          <p className="text-gray-100 text-lg leading-relaxed mb-6">
            <span className="text-2xl text-cyan-400 font-semibold">"Welcome to Anderson Vocational Training Center"</span> – where skills meet opportunity.
            We are dedicated to nurturing practical talents and building confident professionals ready to shape the future.
            Whether you're starting or upgrading your skills, Anderson is your home for hands-on learning, innovation, and growth.
          </p>
          <p className="text-[#FED16A] italic">— Principal, Anderson Vocational Training Center</p>

          <div className="mt-6">
            <span className="inline-block  text-cyan-600 font-medium px-5 py-2 rounded-full shadow-sm">
              Empowering Hands. Building Futures.
            </span>
          </div>
        </div>

        {/* Image */}
        <div className="lg:w-1/2 flex justify-center">
          <div className="relative group">
            <img
              src={principalImage}
              alt="Principal"
              className="rounded-2xl shadow-xl w-80 h-auto object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-600/80 to-transparent text-white p-4 rounded-b-2xl">
              <p className="text-sm font-semibold">Meet Our Principal</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrincipalMessage;
