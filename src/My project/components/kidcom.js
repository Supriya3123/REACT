
import React from 'react'
import { kidData } from '../data/kids'


const Kid = () => {

    const firstFiveImages = kidData.slice(0,5)

  return (
    <>
     <div className="proTitle ">
        <h2 style={{fontFamily:""}} >Kids Wear</h2>
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
    
    </>
  )
}

export default Kid