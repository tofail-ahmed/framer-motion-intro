import React from "react";
import { motion } from "framer-motion";

const parent = {
  initial: { opacity: 0, scale: 0.7, x: 0, y: 0, rotate: 0 },
  animate: {
    opacity: 1,
    scale: 1,
    x: [0, 200, -200, 0],
    y: [0, 200, -200, 0],
    rotate: 360,
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "linear",
      opacity: {
        duration: 0.5,
        
      },
      scale: {
        duration: 0.5,
      },
      rotate: {
        duration: 1,
      repeat: Infinity,
      ease: "linear",
      repeatType:"reverse"


      },
    },
  },
};
const Lesson5 = () => {
  return (
    <div className="flex justify-center items-center h-screen box-parent">
      <div className="border flex justify-center items-center  border-red-500 size-[300px]">
        <motion.div
          variants={parent}
          initial="initial"
          animate="animate"
          className={`box border `}
        ></motion.div>
      </div>
    </div>
  );
};

export default Lesson5;
