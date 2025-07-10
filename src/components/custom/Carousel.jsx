import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import WhatsAppLink from "./WhatsAppLink";


const slideTexts = [
  "Trusted Travel Agency",
  "Work Abroad",
  "Opportunities in Qatar, Saudi Arabia, Oman,  Dubai",
  "Opportunities To study In Japan",
  "Our Team Japan is learning Japane for the preparation To Travel to Tokyo",
];

const Carousel = ({ autoSlide = false, autoSlideInterval = 3000, children }) => {
  const [curr, setCurr] = useState(0);
  const [textKey, setTextKey] = useState(0);
  const navigate = useNavigate();

  const prev = () =>
    setCurr((curr) =>
      curr === 0 ? React.Children.count(children) - 1 : curr - 1
    );

  const next = () => {
    setCurr((curr) =>
      curr === React.Children.count(children) - 1 ? 0 : curr + 1
    );
    setTextKey((prev) => prev + 1);
  };

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [curr, autoSlide]);

  const [loading, setLoading] = useState(false);
  const handleEnrollClick = () => {
    setLoading(true);
    setTimeout(() => {
      navigate("/Admissions");
    }, 2000);
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.3, duration: 0.6 },
    },
    exit: { opacity: 0, y: -10, transition: { duration: 0.4 } },
  };
    const phoneNumber = '+254 794789494'; // Replace with your number
  const message = 'Hello! I would like to know more about your services.';
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="relative h-full w-full overflow-hidden rounded-xl">
      <div
        className="flex transition-transform ease-out duration-700 h-full"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {React.Children.map(children, (index) => (
          <div key={index} className="w-full flex-shrink-0 h-full relative">
            {index}

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent z-10 rounded-xl" />

            {/* Animated Text */}
            <div className="absolute bottom-24 left-6 z-20 text-white max-w-xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={textKey}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={textVariants}
                  className="text-2xl sm:text-4xl font-bold"
                >
                  {slideTexts[curr % slideTexts.length]}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        ))}
      </div>

      {/* Unified Button: Responsive */}
      <div className="absolute z-30 w-full px-4 bottom-6 flex justify-center lg:justify-end">
        <motion.button
          onClick={handleEnrollClick}
          className="bg-white text-red-800 px-6 py-3 rounded-full text-base sm:text-lg font-semibold hover:bg-red-700 transition"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <a href={url} target="_blank" rel="noopener noreferrer">
           <WhatsAppLink/>
        </a>
        </motion.button>
      </div>

      {/* Nav Arrows */}
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#00879E]/40 via-[#00879E]/10 to-transparent" />
      <div className="absolute inset-0 flex items-center justify-between px-4 z-30">
        <button onClick={prev} className="text-white text-3xl">‹</button>
        <button onClick={next} className="text-white text-3xl">›</button>
      </div>
    </div>
  );
};

export default Carousel;
