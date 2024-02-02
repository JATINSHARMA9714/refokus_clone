import React from 'react'
import Marquee from './Marquee'

const Marquees = () => {

    const data = [
        ["https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63357676bb75a8dbf46b14c6_finoa.svg","https://assets-global.website-files.com/6334198f239547d0f9cd84b3/633576761f08ef795f3e81f3_weglot.svg","https://assets-global.website-files.com/6334198f239547d0f9cd84b3/633576769620e443e3fcff1e_Rocketchat.svg","https://assets-global.website-files.com/6334198f239547d0f9cd84b3/633576766a98bfe19287c69c_meta.svg","https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63dda0828e5bc400eb4388c4_jungle-logo.svg","https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634d71bdc63d1381fe2bd886_Rainfall-logo.svg","https://assets-global.website-files.com/6334198f239547d0f9cd84b3/6335767587d487cc4118e5b3_doxel.svg","https://assets-global.website-files.com/6334198f239547d0f9cd84b3/6335767687d487860518e5b4_superai.svg","https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63357676491694236b84beba_maxxis.svg","https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63357676b51c813cd7c51542_Summon%20w.svg","https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63357676c3a9b155ac356d17_screenfeed%20w.svg"],
        ["https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63357676bb75a8dbf46b14c6_finoa.svg","https://assets-global.website-files.com/6334198f239547d0f9cd84b3/633576761f08ef795f3e81f3_weglot.svg","https://assets-global.website-files.com/6334198f239547d0f9cd84b3/633576769620e443e3fcff1e_Rocketchat.svg","https://assets-global.website-files.com/6334198f239547d0f9cd84b3/633576766a98bfe19287c69c_meta.svg","https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63dda0828e5bc400eb4388c4_jungle-logo.svg","https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634d71bdc63d1381fe2bd886_Rainfall-logo.svg","https://assets-global.website-files.com/6334198f239547d0f9cd84b3/6335767587d487cc4118e5b3_doxel.svg","https://assets-global.website-files.com/6334198f239547d0f9cd84b3/6335767687d487860518e5b4_superai.svg","https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63357676491694236b84beba_maxxis.svg","https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63357676b51c813cd7c51542_Summon%20w.svg","https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63357676c3a9b155ac356d17_screenfeed%20w.svg"]
    ]


  return (
    <div className='my-32 pt-10 w-full relative overflow-hidden'>
      {data.map((elem,i)=>(i===1) ? <Marquee key={i} data ={elem.reverse()} start={"-100%"} end={"0%"}/> : <Marquee key={i} data ={elem} start={"0%"} end={"-100%"}/>)}
    </div>
  )
}

export default Marquees
