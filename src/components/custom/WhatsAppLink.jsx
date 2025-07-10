import React from 'react';
import { FaWhatsapp } from "react-icons/fa";


const WhatsAppLink = () => {
  const phoneNumber = '254794789494'; // Kenya: 0794789494 ➜ 254794789494
  const message = 'Hello! I would like to know more about your services.';
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <span className='flex'>Chat with us on WhatsApp <FaWhatsapp className='text-green-500 text-[20px] mx-2'/></span>
    </a>
  );
};

export default WhatsAppLink;
