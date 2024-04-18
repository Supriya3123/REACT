
import React from 'react'
import { menData} from '../data/men'


const Men = () => {

    const firstFiveImages = menData.slice(0,5)

  return (
    <>
     <div className="proTitle ">
        <h2 style={{fontFamily:""}} >Men Fashion</h2>
      </div>
    <div className='proSection'>
         {
             firstFiveImages.map((item)=>{
                 return(
                     <div className='imgBox'>
                    
                         <img style={{ boxShadow:"3px 3px 10px rgb(0 0 0 / 0.2)"}} className='proImage' src={item.image} alt="" />
                    
                     </div>
                 )
             })
         }
     </div>
    
    </>
  )
}

export default Men