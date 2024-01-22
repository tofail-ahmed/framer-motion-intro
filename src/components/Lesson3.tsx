import React, { useState } from "react";
import "../App.css";
import { motion } from "framer-motion";
const parent = {
  initial: { opacity: 0, scale: 0.7 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 2,
    },
  },
  hover: {
    scale: 1.2,
    transition: {
      duration: 1,
    },
  },
  tap: {
    scale: 1,
    rotate: 45,
    transition: {
      duration: 1,
    },
  },
};
const Lesson3 = () => {
const [hover,setHover]=useState(false)

  return (
    <div className="flex justify-center items-center h-screen box-parent">
      <motion.div
        variants={parent}
        initial="initial"
        animate="animate"
        whileHover="hover"
        whileTap="tap"
        drag
        dragConstraints={{ left: -300, right: 300, top: -300, bottom: 300 }}
        onHoverStart={()=>setHover(true)}
        onHoverEnd={()=>setHover(false)}
        className={`box border ${hover?"bg-yellow-400":" "}`}
      ></motion.div>
    </div>
  );
};

export default Lesson3;
