import React, { useState } from 'react'
import { motion, useScroll } from "framer-motion"

const Work = () => {
  let [images,setImages] = useState([
    {url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png",top:"65%",left:"47%",isActive:false},
    {url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png",top:"58%",left:"50%",isActive:false},
    {url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png",top:"55%",left:"55%",isActive:false},
    {url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png",top:"55%",left:"50%",isActive:false},
    {url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png",top:"50%",left:"52%",isActive:false},
    {url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png",top:"55%",left:"45%",isActive:false},
  ])

  const {scrollYProgress} = useScroll();

  scrollYProgress.on("change",(data)=>{
    function showImages(arr){
      setImages((prev)=>
      prev.map((item,index)=>{
        if(arr.indexOf(index) === -1){
          return {...item,isActive:false}
        }
        else{
          return {...item,isActive:true}
        }
      })

      )



    }

    switch(Math.floor(data*100)){
      case 0 :
        showImages([]);
        break;
      case 1:
        showImages([0]);
        break;
      case 3:
        showImages([0,1]);
        break;
      case 5:
        showImages([0,1,2]);
        break;
      case 7:
        showImages([0,1,2,3]);
        break;
      case 9:
        showImages([0,1,2,3,4]);
        break;
      case 11:
        showImages([0,1,2,3,4,5]);
        break;
       
    }
  })


  return (
    <div className='relative w-full'>
      <div className=' relative max-w-screen-xl mx-auto text-center '>
       <h1 className=' text-[32vw] font-bold leading-none'>work</h1>
       <div className='absolute top-[0%] bg-transparent w-full h-full'>
          {images.map((elem,index)=>((elem.isActive && (<img key={index} src={elem.url} style={{left:elem.left,top:elem.top}} className='-translate-x-[50%] rounded-lg   -translate-y-[50%] absolute w-56' alt="" />))))}
       </div>
      </div>
      
    </div>
  )
}

export default Work
