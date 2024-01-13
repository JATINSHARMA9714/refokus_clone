import React from 'react'

const Card = ({data}) => {
  return (
    <div style={{width:data.width}} className={`bg-zinc-800 relative rounded-xl px-3 ${data.width=="70%"&& "hover:bg-[#7443FE]"} py-4`}>
      <div className='bg-tranparent'>
        <div className='flex items-center justify-between '>
            <h3 className=' text-xs capitalize'>{data.firstHead}</h3>
            <i className="ri-arrow-right-line text-xs"></i>
        </div>
        <h2 className={` text-2xl mt-4 ${data.width=="65%" && "w-[28%]"}`}>{data.secHead}</h2>
      </div>
      <div className='down mt-32'>
        {(data.startProject)&& <h1 className='text-7xl font-semibold leading-none tracking-wide'>Start a Project</h1>}
        {(data.button) && <button className='px-4 py-2 border-[1px] border-zinc-400 rounded-full mt-4 text-sm'>Contact Us</button>}
        {(data.smallText.length>0)&& <h4 className='text-xs text-zinc-400 pt-30 absolute bottom-5 z-10'>{data.smallText}</h4>}
      </div>
    </div>
  )
}

export default Card
