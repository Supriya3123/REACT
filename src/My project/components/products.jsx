import React, { useEffect, useState } from 'react'
import Navbar from './navbar';
import { Link } from 'react-router-dom';
import Woman from './Womencom';
import Men from './Mencom';
import Traditional from './tadcom';
import Kid from './kidcom';

 const Product = () => {

   const [ data,setData]=useState([]);
   const [filter,setFilter]=useState(data)
   const [loading, setLoading]=useState(false)
   let componentMounted = true;
   useEffect(()=>{
    const getProducts =async()=> {
        setLoading(true)
        const response = await fetch("")
        if(componentMounted){
            setData(await response.clone().json())
            setFilter(await response.json())
            setLoading(false)
        }
        return ()=>{
            componentMounted = false;
        }
    }
    getProducts();
   },[])
   
  
   const ShowProducts = () =>{
     return(
        <>

        <div className="buttons d-flex justify-content-center mb-5 pb-5">
            <Link to=""><button className='btn btn-outline-dark me-2'>All</button></Link>
            <Link to="/men"><button className='btn btn-outline-dark me-2'>Men s
            </button></Link>
            <Link to = "/women"><button className='btn btn-outline-dark me-2'>Women s</button></Link>
            <Link to ="/kid"><button className='btn btn-outline-dark me-2'>Kid s 
            </button></Link>
            <Link to='/tradational'><button className='btn btn-outline-dark me-2'>Tradational Wear</button></Link>
        </div>
        
        </>
    
  

   )}
return(
    <div>
        <div className="cointainer my-5 py-5">
           <div className="rows">
            <div className="col-12 mb-5">
                <Link to='/' style={{ color: 'black' }}><h1 className='display-6 fw-bolder text-center'>Latest Products</h1></Link>
                <hr/>
            </div>
           </div>
           <div className="row justify-content-center">
            <ShowProducts/>
           
           </div>
        </div>
    
    </div>
  )
}
export default Product
