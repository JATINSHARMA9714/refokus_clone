import { motion } from 'framer-motion'
import React from 'react'

const Marquee = ({data,start,end}) => {
  
  return (
    <div  className='flex  w-full'>
      <motion.div initial={{x:start}} animate={{x:end}} transition={{ease:"linear",duration:15,repeat:Infinity}} className='flex flex-shrink-0 gap-10 py-5 pr-10'>{data.map((url,i)=>(<img key={i} className='opacity-80' src={url}/>))}</motion.div>
      <motion.div initial={{x:start}} animate={{x:end}} transition={{ease:"linear",duration:15,repeat:Infinity}} className='flex flex-shrink-0 gap-10 py-5 pr-10'>{data.map((url,i)=>(<img key={i} className='opacity-80' src={url}/>))}</motion.div>
    </div>
  )
}

export default Marquee
