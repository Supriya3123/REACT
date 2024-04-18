

import React from 'react'
import { tadData } from '../data/tradation'


const Traditional = () => {

    const firstFiveImages = tadData.slice(0,5)

  return (
    <>
    <div className='coin' style={{marginTop:"-100px"}}>
     <div className="proTitle ">
        <h2 style={{fontFamily:""}} >Traditional Wear</h2>
      </div>
    <div className='proSection'>
         {
             firstFiveImages.map((item)=>{
                 return(
                     <div className='imgBox'>
                    
                         <img style={{ boxShadow:"3px 3px 10px rgb(0 0 0 / 0.2)",width:"80%", height:"60%"}} className='proImage' src={item.image} alt="" />
                    
                     </div>
                 )
             })
         }
     </div>
    </div>
    </>
  )
}

export default Traditional