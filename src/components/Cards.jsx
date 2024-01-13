import React from 'react'
import Card from './Card'

const Cards = () => {

    const cardData =[
        {width:"30%",firstHead:"up next: culture",secHead:"Who we are",startProject:false,button:false,smallText:"Explore what drives our team"},
        {width:"70%",firstHead:"Get in Touch",secHead:"Let's get to it, together",startProject:true,button:true,smallText:""},
    ]

  return (
    <div className='w-full py-10 pb-20'>
        <div className='max-w-screen-xl mx-auto flex gap-1'>
      {cardData.map((elem,i)=>(<Card key={i} data={elem}/>))}
      </div>
    </div>
  )
}

export default Cards
