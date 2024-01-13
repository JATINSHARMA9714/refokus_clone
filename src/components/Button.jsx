import React from 'react'
import 'remixicon/fonts/remixicon.css'


const Button = ({data}) => {
  return (
    <div className='text-xs bg-white text-black px-4 py-2 rounded-full flex items-center justify-between gap-4 cursor-pointer '>
      <span className='bg-white text-black'>{data}</span>
      <i className="ri-corner-down-right-line bg-white text-black"></i>
    </div>
  )
}

export default Button
