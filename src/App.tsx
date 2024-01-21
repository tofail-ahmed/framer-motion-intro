import "./App.css";
import { motion } from "framer-motion";

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
    <div className="flex justify-center items-center h-screen box-parent">
      <motion.div
      variants={parent}
        initial="initial"
        animate="animate"
        transition= {{ duration: 2, type:"spring",repeatType:"reverse",delayChildren:0.5,staggerChildren:0.5}}

        className=" box flex flex-wrap gap-4 justify-center items-center"
      >
        <motion.div variants={child} className="size-20 bg-amber-500 rounded-sm"></motion.div>
        <motion.div variants={child} className="size-20 bg-amber-500 rounded-sm"></motion.div>
        <motion.div variants={child} className="size-20 bg-amber-500 rounded-sm"></motion.div>
        <motion.div variants={child} className="size-20 bg-amber-500 rounded-sm"></motion.div>
      </motion.div>
    </div>
  );
}

export default App;
