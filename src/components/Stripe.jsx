import React from 'react'

const Stripe = (props) => {

    const {url,number} = props.data;
  return (
    <div className='w-[16.66%] border-[1px] border-zinc-600 px-6 py-4 border-s-0 flex items-center justify-between'>
      <img className='w-28' src={url} alt="" />
      <h3>{number}</h3>
    </div>
  )
}

export default Stripe
