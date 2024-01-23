import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Lesson8 = () => {
  const ref = useRef(null);
  const inView = useInView(ref);
  console.log(inView);
  return (
    <div className="flex justify-center items-center  h-screen box-parent">
      <div className="border flex justify-center  items-center  border-red-500 size-96">
        <motion.div className={`box  size-32 `} ref={ref}
        animate={inView?{x:[0,200,-200,0],rotate:[90,180,270,360],transition:{duration:2}}:{x:-200}}
        >
          <span className="text-3xl flex justify-center items-center "></span>
        </motion.div>
      </div>
    </div>
  );
};

export default Lesson8;
