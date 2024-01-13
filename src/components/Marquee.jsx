import React from 'react'

const Marquee = ({data}) => {
  return (
    <div className='flex gap-10 my-10  w-full overflow-hidden'>
      {data.map((url,i)=>(<img key={i} className='w-20 opacity-80' src={url}/>))}
      {data.map((url,i)=>(<img key={i} className='w-20 opacity-80' src={url}/>))}
    </div>
  )
}

export default Marquee
