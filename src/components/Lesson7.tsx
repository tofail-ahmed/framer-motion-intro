import React from "react";
import { useCycle, motion } from "framer-motion";
const Lesson7 = () => {
  const boxAnimation = [
    { x: 0, y: 0 ,opacity:0.5,background:'#dc2626',rotate:0},
    { x: 100, y: 100,opacity:1,background:'#818cf8',rotate:180 },
//     { x: 0, y: 0 ,opacity:0.0,background:'#2dd4bf',rotate:360,border: "2px solid #0000"},

    { x: -100, y: -100 ,opacity:1,background:'#4ade80',rotate:720},
    { x: 0, y: 0 ,opacity:0.5,background:'#facc15',rotate:0},
  ];
  const [animate, cycle] = useCycle(...boxAnimation);
  // console.log(x);
  // console.log(cycle);
  return (
    <div className="flex justify-center items-center  h-screen box-parent">
      <div
        onClick={() => cycle()}
        className="border flex justify-center  items-center  border-red-500 size-96"
      >
        <motion.div
          className={`box  size-32 `}
          onTap={() => cycle()}
          animate={animate}
        >
          <span className="text-3xl flex justify-center items-center ">
            {/* {x,y} */}
          </span>
        </motion.div>
      </div>
    </div>
  );
};

export default Lesson7;
