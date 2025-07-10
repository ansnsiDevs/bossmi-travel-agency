import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactInfoCard = () => {
  return (
    <div className="relative transform transition-transform duration-300 hover:scale-105  rounded-xl p-[2px] overflow-hidden max-w-4xl mx-auto my-10">
      {/* Animated Border */}
      <div className="absolute inset-0 z-0 rounded-xl blur-sm animate-spin-fast bg-gradient-to-r from-fuchsia-100 via-yellow-200 to-blue-500"></div>

      {/* Card Content */}
      <div className="relative z-10 bg-gray-200 rounded-xl shadow-lg p-6 text-black grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-10">
        {/* Contact Info Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-600">Contact Information and Office Addresses</h2>

          <div className="flex items-start gap-3">
            <MapPin className="text-blue-600" />
            <p className="text-gray-700">Kitale, Kenya</p>
          </div>

          <div className="flex items-start gap-3">
            <Phone className="text-green-600" />
            <p className="text-gray-700">0726 994 959, 0745 484 666, 0724 014 770</p>
          </div>

          <div className="flex items-start gap-3">
            <Mail className="text-red-600" />
            <p className="text-gray-700">Andersenvocationaltc@gmail.com</p>
          </div>

          <div className="mt-4 text-sm text-gray-600 border-t pt-4">
            <strong>Located in Trans-Nzoia County.</strong><br />
            Kitale-suam Rd
          </div>
        </div>

        {/* About Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">About Us</h2>
          <p className="text-gray-700 text-sm leading-relaxed">
            Andersen Vocational Training Centre is a community-driven institution in Kitale, Kenya,
            focused on equipping youth with practical skills for sustainable employment.
          </p>
          <p className="text-gray-700 text-sm">
            Our mission is to promote self-reliance, creativity, and economic empowerment through hands-on training tailored to the needs of the job market.
          </p>
        </div>
      </div>

      {/* Custom Animation */}
      <style>
        {`
          .animate-spin-fast {
            animation: spinBorder 3s linear infinite;
          }

          @keyframes spinBorder {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
};

export default ContactInfoCard;
