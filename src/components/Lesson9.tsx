import React, { useEffect } from "react";
import { motion, useAnimate } from "framer-motion";

const Lesson9 = () => {
  const [scope, animate] = useAnimate();
  useEffect(() => {
    animate([
      [
        scope.current,
        {
          x: [50, -50, 50, -50],
          y: [50, -50, 50, -50],
          rotate: 90,
          opacity: 0,
        },
        { duration: 2 },
      ],
      [
        scope.current,
        {
          x: [100, -100, 100, -100],
          y: [100, -100, 100, -100],
          rotate: 180,
          opacity: 0.3,
        },
        { duration: 2 },
      ],
      [
        scope.current,
        {
          x: [200, -200, 200, -200],
          y: [200, -200, 200, -200],
          rotate: 270,
          opacity: 0.5,
        },
        { duration: 2 },
      ],
      [
        scope.current,
        {
          x: [300, -300, 300, -300],
          y: [300, -300, 300, -300],
          rotate: 360,
          opacity: 0.8,
        },
        { duration: 2 },
      ],
      [
        scope.current,
        {
          x: [50, -50, 50, -50],
          y: [50, -50, 50, -50],
          rotate: 450,
          opacity: 1,
        },
        { duration: 2 },
      ],
    ]);
  }, []);

  return (
    <div className="flex justify-center items-center  h-screen box-parent">
      <div className="border flex justify-center  items-center  border-red-500 size-96">
        <motion.div
          className={`box  size-32 `}
          ref={scope}
     
        >
          <span className="text-3xl flex justify-center items-center "></span>
        </motion.div>
      </div>
    </div>
  );
};

export default Lesson9;
