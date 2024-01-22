import React, { useEffect, useState } from 'react'
import { motion,useAnimationControls } from "framer-motion";

const Lesson6 = () => {
      const controls=useAnimationControls();
      const [toggle,setToggle]=useState(false)
      const handleToggle=()=>{
            setToggle(!toggle)
            if(toggle){
                  controls.start({x:200,y:200})
            }else{
                  controls.start({x:-200,y:-200})

            }
      }
      useEffect(()=>{
            controls.start((i)=>({x:200,transition:{delay:i*1}}))
      },[])
  return (
      <div  className="flex justify-center items-center flex-col h-screen box-parent">
            <button onClick={handleToggle} className='bg-emerald-500 rounded-sm p-2'>{toggle?'Forward-->':'<--Backward'}</button>
      <div onMouseEnter={()=>{controls.stop()}} onMouseLeave={()=>{controls.start({x:0})}}  className="border flex justify-center flex-col items-center  border-red-500 size-96">
        <motion.div
         animate={controls}
          className={`box  size-32 `}
          custom={1}
        ></motion.div>
        <motion.div
         animate={controls}
          className={`box  size-32 `}
          custom={2}

        ></motion.div>
        <motion.div
         animate={controls}
          className={`box  size-32 `}
          custom={3}

        ></motion.div>
      </div>

    </div>
  )
}

export default Lesson6