import React from "react";
import { GiCommercialAirplane } from "react-icons/gi";
import { FcOnlineSupport } from "react-icons/fc"; // Has its own color styling
import { MdPriceCheck } from "react-icons/md";

const WhyChooseUsCard = ({ announcement }) => {
  const { title, description, icon } = announcement;

  const getIconComponent = (iconName) => {
    switch (iconName) {
      case "airplane":
        return GiCommercialAirplane;
      case "support":
        return FcOnlineSupport;
      case "price":
        return MdPriceCheck;
      default:
        return GiCommercialAirplane;
    }
  };

  const getIconColorClass = (iconName) => {
    switch (iconName) {
      case "airplane":
        return "text-red-500";
      case "support":
        return ""; // FcOnlineSupport is multicolor, so no custom color
      case "price":
        return "text-green-500";
      default:
        return "text-black";
    }
  };

  const Icon = getIconComponent(icon);
  const iconColorClass = getIconColorClass(icon);

  return (
    <div
      className="max-w-md mx-auto bg-white dark:bg-black rounded-xl shadow-md overflow-hidden border-l-8 border-yellow-500 transform transition duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
      role="article"
      tabIndex={0}
    >
      <div className="p-6 flex flex-col items-center justify-center">
        <div className="mb-4 transform transition-transform duration-300 hover:scale-110">
          <Icon className={`text-5xl ${iconColorClass}`} />
        </div>
        <h3 className="text-xl text-black dark:text-white font-bold mb-2 text-center">
          {title}
        </h3>
        <p className="text-black dark:text-gray-300 text-center">{description}</p>
      </div>
    </div>
  );
};

export default WhyChooseUsCard;
