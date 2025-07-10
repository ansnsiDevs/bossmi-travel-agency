import React from "react";

const PlayfulCard = ({ title, description, icon, buttonText = "Explore" }) => {
  return (
    <div className="relative bg-gradient-to-tr from-[#4ade80] via-[#22d3ee] to-[#3b82f6] rounded-xl shadow-xl p-6 max-w-sm mx-auto cursor-pointer
                    transform transition-transform duration-300 hover:scale-105 hover:rotate-1 hover:shadow-2xl
                    active:scale-95 active:rotate-0"
    >
      {/* Icon container */}
      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 shadow-md">
        {icon ? (
          React.cloneElement(icon, { className: "w-8 h-8 text-[#3b82f6]" })
        ) : (
          <div className="w-8 h-8 bg-[#3b82f6] rounded-full" />
        )}
      </div>

      {/* Title */}
      <h3 className="text-white text-xl font-extrabold mb-2 drop-shadow-md">{title}</h3>

      {/* Description */}
      <p className="text-white/90 text-sm mb-6 drop-shadow">{description}</p>

      {/* Button */}
      <button
        className="bg-white text-[#3b82f6] font-semibold px-5 py-2 rounded-full
                   shadow-lg hover:bg-[#60a5fa] hover:text-white transition-colors duration-300
                   active:scale-95"
      >
        {buttonText}
      </button>
    </div>
  );
};

export default PlayfulCard;
