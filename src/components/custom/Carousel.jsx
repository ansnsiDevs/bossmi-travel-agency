import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import WhatsAppLink from "./WhatsAppLink";

const slideTexts = [
  "Trusted Travel Agency",
  "Work Abroad",
  "Opportunities in Qatar, Saudi Arabia, Oman, Dubai",
  "Opportunities To Study In Japan",
  "Our Team Japan is Learning Japanese for the Preparation To Travel to Tokyo",
];

// Smooth & distinct animations per slide
const slideAnimations = [
  {
    initial: { opacity: 0, scale: 0.95, filter: "blur(10px)" },
    animate: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: 1.2, ease: "easeInOut" },
    },
    exit: {
      opacity: 0,
      scale: 1.05,
      filter: "blur(6px)",
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  },
  {
    initial: { opacity: 0, x: -100 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: "anticipate" },
    },
    exit: {
      opacity: 0,
      x: 100,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  },
  {
    initial: { opacity: 0, y: 80 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.1, ease: [0.42, 0, 0.58, 1] },
    },
    exit: {
      opacity: 0,
      y: -60,
      transition: { duration: 0.9 },
    },
  },
  {
    initial: { opacity: 0, rotateY: -90 },
    animate: {
      opacity: 1,
      rotateY: 0,
      transition: { duration: 1.2, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      rotateY: 90,
      transition: { duration: 0.9, ease: "easeInOut" },
    },
  },
  {
    initial: { opacity: 0, scale: 1.2, y: 20 },
    animate: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      y: -10,
      transition: { duration: 0.8, ease: "easeIn" },
    },
  },
];

const Carousel = ({ autoSlide = false, autoSlideInterval = 5000, children }) => {
  const [curr, setCurr] = useState(0);
  const [textKey, setTextKey] = useState(0);
  const navigate = useNavigate();

  const prev = () => {
    setCurr((prev) => (prev === 0 ? React.Children.count(children) - 1 : prev - 1));
    setTextKey((prev) => prev + 1);
  };

  const next = () => {
    setCurr((prev) => (prev === React.Children.count(children) - 1 ? 0 : prev + 1));
    setTextKey((prev) => prev + 1);
  };

  useEffect(() => {
    if (!autoSlide) return;
    const interval = setInterval(next, autoSlideInterval);
    return () => clearInterval(interval);
  }, [curr, autoSlide]);

  const phoneNumber = "+254794789494";
  const message = "Hello! I would like to know more about your services.";
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="relative h-full w-full overflow-hidden rounded-xl bg-black">
      <div className="relative h-full w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={curr}
            {...slideAnimations[curr % slideAnimations.length]}
            className="absolute inset-0 w-full h-full"
          >
            {children[curr]}

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent z-10 rounded-xl" />

            {/* Centered Text & WhatsApp */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white z-20 px-4 text-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={textKey}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
                  exit={{ opacity: 0, y: -10, transition: { duration: 0.5 } }}
                  className="text-2xl sm:text-4xl font-bold mb-4 drop-shadow-lg"
                >
                  {slideTexts[curr % slideTexts.length]}
                </motion.div>
              </AnimatePresence>

              <motion.a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-green-700 px-6 py-3 rounded-full text-base sm:text-lg font-semibold hover:bg-green-100 transition"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <WhatsAppLink />
              </motion.a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Arrows */}
      <div className="absolute inset-0 flex items-center justify-between px-4 z-30">
        <button onClick={prev} className="text-white text-3xl font-bold hover:text-green-300">‹</button>
        <button onClick={next} className="text-white text-3xl font-bold hover:text-green-300">›</button>
      </div>
    </div>
  );
};

export default Carousel;
