import "./App.css";
import { motion } from "framer-motion";

function App() {
  const initial={ rotate: 0,scale:1 }
  const animate={ rotate: 360,scale:1.5 }
  const transition={ duration: 2, repeat: Infinity,type:"spring"}
  return (
    <div className="flex justify-center items-center h-screen box-parent">
      <motion.div
        initial={initial}
        animate={animate}
        transition={transition}
        className=" box"
      ></motion.div>
    </div>
  );
}

export default App;
