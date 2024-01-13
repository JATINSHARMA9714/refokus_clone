import React from 'react'
import Product from './Product'

const Products = () => {

    const product = [
        {title:"Artiquel",description:"With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",isLive:true,isStudy:false,from:"blue-900",to:"red-800"},
        {title:"TTR",description:"We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",isLive:true,isStudy:false,from:"#2C1E66",to:"#383BB3"},
        {title:"YIR 2022",description:"Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.",isLive:true,isStudy:false,from:"#644FF7",to:"#9452F3"},
        {title:"Yahoo!",description:"We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.",isLive:true,isStudy:true,from:"",to:""},
        {title:"Rainfall",description:"We crafted a website for Rainfall Ventures, developing prototypes and custom code that ultimately allows their team to update content regularly and with ease.",isLive:true,isStudy:true,from:"",to:""},
        {title:"Jungle",description:"We crafted a timeless visual system for Jungle Ventures, covering all aspects of web design, and empowered their marketing team to scale organically using Webflow.",isLive:true,isStudy:true,from:"",to:""},
    ]


  return (
    <div className='w-full mt-20'>
      {product.map((elem,index)=>(<Product key={index} data={elem}/>))}
    </div>
  )
}

export default Products
