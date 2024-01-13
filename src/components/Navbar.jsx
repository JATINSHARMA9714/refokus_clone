import React from 'react'
import Button from './Button'

const Navbar = () => {
  return (
    <div className='max-w-screen-xl mx-auto border-b border-b-zinc-500 py-5 '>
      <div className='left flex items-center justify-between'>
        <div className='flex items-center gap-20'>
        <img className='w-[4.5vw]' src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt="" />
        <div className='elements flex items-center gap-12'>
        {["Home","Work","Culture","|","News"].map((elem,index)=>{
          return <a key={index} href='#'className='text-xs font-thin flex items-center gap-1'>
            {index==1 && <span style={{boxShadow:"0 0 0.25em #00FF19"}} className=' inline-block w-1 h-1 rounded-full  bg-[#00FF19]'></span>}
            {elem}</a>
        } )}
        </div>
        </div>
      <Button data={"Start a Project"}/>
      </div>
    </div>
  )
}

export default Navbar
