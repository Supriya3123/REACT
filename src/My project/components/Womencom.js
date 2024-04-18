import React from "react";

import { womanData } from "../data/women";

const Woman = () => {
  const firstFiveImages = womanData.slice(0, 5);
  console.log(firstFiveImages)
  return (
    <>
       <div className="coin" style={{marginTop:"-150px"}}>

      <div className="proTitle">
        <h2 style={{fontFamily:""}} >Woman Dressing</h2>
      </div>
      <div className="proSection">
        {
        firstFiveImages.map((item) =><div className="imgBox" >
    
        <img style={{ boxShadow:"3px 3px 10px rgb(0 0 0 / 0.2) ", }} className="proImage" src={item.image} alt="" />
       
      </div>
        )
        }
      </div>
      </div>
    </>
  );
};

export default Woman