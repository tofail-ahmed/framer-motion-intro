import React, { useRef, useState } from "react";
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
const parentRef=useRef(null)
  return (
    <div className="flex justify-center items-center h-screen box-parent">
     <div ref={parentRef} className="border border-red-500 size-[500px]">
     <motion.div
        variants={parent}
        initial="initial"
        animate="animate"
        whileHover="hover"
        whileTap="tap"
        drag
      //   dragSnapToOrigin
        dragElastic={1}
      //   dragConstraints={{ left: -300, right: 300, top: -300, bottom: 300 }}
      dragConstraints={parentRef}
        onHoverStart={()=>setHover(true)}
        onHoverEnd={()=>setHover(false)}
        whileDrag={{
            scale:1.1,
            boxShadow:"0px 10px 10px #ffffff"
        }}
        className={`box border ${hover?"bg-yellow-400":" "} ` }
      ></motion.div>
     </div>
    </div>
  );
};

export default Lesson3;
