import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Lesson13 = () => {
  const [hidden, setHidden] = useState(false);
  const box = {
    initial: { opacity: 0.5, scale: 0.5 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 2,
      },
    },
    exit:{
      opacity: 0,
      scale: 0,
      y:-200,
      transition: {
        duration: 2,
      },
    }
  };
  return (
    <div className="flex justify-center items-center flex-col h-screen box-parent">
      
      <div className="border flex justify-center items-center flex-col border-red-500 size-96">
      <AnimatePresence>
      <motion.button
      layout
        onClick={() => setHidden(!hidden)}
        className="bg-yellow-600 font-bold px-2 rounded-sm"
      >
        {hidden ? "Un-Hide" : "Hide"}
      </motion.button>
       
          {!hidden && (
            <motion.div
              className={`box size-32 border border-orange-400`}
              variants={box}
              initial="initial"
              animate="animate"
              exit="exit"
            ></motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Lesson13;
