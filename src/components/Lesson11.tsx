import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

const Lesson11 = () => {
  const [opa, setOpa] = useState(1);

  const x = useMotionValue(0);
  const opacity = useTransform(x, [-300, 0, 300], [0, 1, 0]);
  const rotate = useTransform(x, [-300, -150, 150, 300], [90, 180, 270, 360]);
  const scale = useTransform(x, [-300, 0, 300], [1.5,.5,1.5]);
  useEffect(() => {
    setOpa(opacity.get());
  }, []);
  //   console.log(opacity.get() === 0 && "hidden");
//   opacity.onChange((value) =>
//     console.log(opacity.get() === 0 && "hidden", value)
//   );
//   console.log(opa)
  return (
    <div className="flex justify-center items-center flex-col h-screen box-parent">
      {opa === 0 && (
        <span className="text-3xl flex justify-center items-center text-zinc-300">
          hidden
        </span>
      )}
      <div className="border flex justify-center items-center border-red-500 size-96">
        <motion.div
          className={`box size-32 border border-orange-400`}
          style={{ x, opacity, rotate,scale }}
          drag="x"
          //     dragSnapToOrigin={true}
        ></motion.div>
      </div>
    </div>
  );
};

export default Lesson11;
