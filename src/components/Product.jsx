import React from 'react'
import Button from '../components/Button'

const Product = ({index,data,mover}) => {

  const animate = () => {
    mover(index)
  }


  return (
    <div onMouseEnter={animate} className={`flex items-center h-[18rem] justify-between px-52 hover:bg-gradient-to-r from-blue-800 to-blue-700`}>
      <h1 className='text-5xl capitalize'>{data.title}</h1>
      <div className='w-1/4'>
      <p className='text-sm'>{data.description}</p>
      <div className='flex w-[95%] mt-4 gap-4'>
        {data.isLive && <Button data={"Live Website"}/>}
        {data.isStudy && <Button data={"Case Study"}/>}
      </div>
      </div>
    </div>
  )
}

export default Product
