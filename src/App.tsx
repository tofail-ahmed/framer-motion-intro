import "./App.css";
import { motion } from "framer-motion";
import Lesson3 from "./components/lesson3";
import Lesson5 from "./components/Lesson5";
import Lesson6 from "./components/Lesson6";
import Lesson7 from "./components/Lesson7";
import Lesson8 from "./components/Lesson8";
import Lesson9 from "./components/Lesson9";
import Lesson10 from "./components/Lesson10";
import Lesson11 from "./components/Lesson11";
import Lesson12 from "./components/Lesson12";


function App() {
 

  const parent={
     initial:{ opacity: 0,scale:.7 },
     animate:{ opacity: 1,scale:1.3 }
  }
  const child={
    initial:{ opacity: 0,scale:.5 },
     animate:{ opacity: 1,scale:1 }
  }
  return (
    // <div className="flex justify-center items-center h-screen box-parent">
    //   <motion.div
    //   variants={parent}
    //     initial="initial"
    //     animate="animate"
    //     transition= {{ duration: 2, type:"spring",repeatType:"reverse",delayChildren:0.5,staggerChildren:0.5}}

    //     className=" box flex flex-wrap gap-4 justify-center items-center"
    //   >
    //     <motion.div variants={child} className="size-20 bg-orange-500 rounded-sm"></motion.div>
    //     <motion.div variants={child} className="size-20 bg-orange-500 rounded-sm"></motion.div>
    //     <motion.div variants={child} className="size-20 bg-orange-500 rounded-sm"></motion.div>
    //     <motion.div variants={child} className="size-20 bg-orange-500 rounded-sm"></motion.div>
    //   </motion.div>
    // </div>
    <div className="w-full flex flex-col justify-center items-center">
      <div className="h-[300vh] w-full bg-rose-600"></div>
        <Lesson12></Lesson12>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, sint.</p>
    </div>
  );
}

export default App;
