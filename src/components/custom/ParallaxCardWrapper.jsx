// components/custom/ParallaxCardWrapper.jsx
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ParallaxCardWrapper = ({ children, index }) => {
  const ref = useRef(null);
  const { scrollY } = useScroll();

  // Each card shifts based on scroll and index to offset them nicely
  const y = useTransform(scrollY, (value) => value * 0.1 - index * 10);

  return (
    <motion.div ref={ref} style={{ y }} className="will-change-transform">
      {children}
    </motion.div>
  );
};

export default ParallaxCardWrapper;
