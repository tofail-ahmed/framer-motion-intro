import React from 'react'
import {motion,useMotionValueEvent,useScroll} from 'framer-motion'

const Lesson12 = () => {
      const {scrollY,scrollYProgress}=useScroll();
      useMotionValueEvent(scrollY,'change',(e)=>{
            console.log(e)
      })
      useMotionValueEvent(scrollYProgress,'change',(e)=>{
            console.log('progress',e)
      })
  return (
    <motion.div className='h-5 w-full text-center fixed top-0 bg-green-400'
    style={{scaleX:scrollYProgress}}
    >
      useScroll
    </motion.div>
  )
}

export default Lesson12
