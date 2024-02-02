import React, { useState } from 'react'
import Product from './Product'
import { motion } from 'framer-motion'

const Products = () => {

    const product = [
        {title:"Artiquel",description:"With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",isLive:true,isStudy:false},
        {title:"TTR",description:"We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",isLive:true,isStudy:false},
        {title:"YIR 2022",description:"Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.",isLive:true,isStudy:false},
        {title:"Yahoo!",description:"We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.",isLive:true,isStudy:true},
        {title:"Rainfall",description:"We crafted a website for Rainfall Ventures, developing prototypes and custom code that ultimately allows their team to update content regularly and with ease.",isLive:true,isStudy:true},
        {title:"Jungle",description:"We crafted a timeless visual system for Jungle Ventures, covering all aspects of web design, and empowered their marketing team to scale organically using Webflow.",isLive:true,isStudy:true},
    ]

    let [pos,setPos] = useState(0);

    const mover = (val) =>{
      setPos(val*18);
    }

  return (
    <div className='w-full mt-10  relative'>
      {product.map((elem,index)=>(<Product key={index} index={index} mover={mover} data={elem}/>))}
      <div className='w-full h-full absolute top-[0] pointer-events-none'>
        <motion.div initial={{y:pos,x:"-50%"}} animate={{y:pos+'rem'}} className=' rounded window absolute w-96 left-[50%]  h-[18rem] overflow-hidden '>
          <motion.div animate={{y:-pos+'rem'}} className='w-full h-full'>
            <video autoPlay muted src="https://cdn.refokus.com/website/Arqitel/Arqitel%20project%20video%204_3.webm" className='w-full h-full'></video>
          </motion.div>
          <motion.div animate={{y:-pos+'rem'}} className='w-full h-full'>
            <video autoPlay muted src="https://cdn.refokus.com/website/TTR/TTR%20project%20video%204_3_H.264.webm" className='h-full w-full'></video>
          </motion.div>
          <motion.div animate={{y:-pos+'rem'}} className='w-full h-full'>
            <video autoPlay muted src="https://cdn.refokus.com/website/YIR%20website%202022%204_3_VP9.webm" className='w-full h-full'></video>
          </motion.div>
          <motion.div animate={{y:-pos+'rem'}} className='w-full h-full'>
            <video autoPlay muted src="https://cdn.refokus.com/website/2022/videos/yahoo.webm" className='w-full h-full'></video>
          </motion.div>
          <motion.div animate={{y:-pos+'rem'}} className='w-full h-full'>
            <video autoPlay muted src="https://cdn.refokus.com/website/2022/videos/rainfall.webm" className='w-full h-full'></video>
          </motion.div>
          <motion.div animate={{y:-pos+'rem'}} className='w-full h-full'>
            <video autoPlay muted src="https://cdn.refokus.com/website/jungle-4-3-.webm" className='h-full w-full'></video>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Products
