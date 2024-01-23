import React from "react";
import { motion, useDragControls } from "framer-motion";
const Lesson10 = () => {
      const controls=useDragControls();
  return (
    <div className="flex justify-center items-center flex-col  h-screen box-parent">
      <div onPointerDown={(e)=>controls.start(e)} className={`box  size-32 flex justify-start items-start `}>
        
      </div>
      <div className="border flex justify-center   items-center  border-red-500 size-96">
        <motion.div className={`box  size-32 `}
        drag
        dragConstraints={{ left: -300, right: 300, top: -300, bottom: 300 }}
        dragSnapToOrigin
        dragElastic={1}
        dragControls={controls}
        >
          <span className="text-3xl flex justify-center items-center "></span>
        </motion.div>
      </div>
    </div>
  );
};

export default Lesson10;
