import React from 'react'

const Work = () => {

  const images =[
    {url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png",top:"65%",left:"47%",isActive:false},
    {url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png",top:"58%",left:"50%",isActive:false},
    {url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png",top:"55%",left:"55%",isActive:false},
    {url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png",top:"55%",left:"50%",isActive:false},
    {url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png",top:"50%",left:"52%",isActive:false},
    {url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png",top:"55%",left:"45%",isActive:false},
  ]



  return (
    <div className='relative w-full'>
      <div className=' relative max-w-screen-xl mx-auto text-center '>
       <h1 className=' text-[32vw] font-bold leading-none'>work</h1>
       <div className='absolute top-[0%] bg-transparent w-full h-full'>
          {images.map((elem)=>((elem.isActive && (<img src={elem.url} style={{left:elem.left,top:elem.top}} className='-translate-x-[50%] rounded-lg   -translate-y-[50%] absolute w-56' alt="" />))))}
       </div>
      </div>
      
    </div>
  )
}

export default Work
