import React from 'react'
import Product from './products'
import Womanpage from '../pages/womenpage'
import Woman from './Womencom'
import Men from './Mencom'
import Kid from './kidcom'
import Traditional from './tadcom'
import Navbar from './navbar'
import AboutPage from './About'
import ContactPage from './concat'

const Home = () => {
 
  return (
  
    <div className='hero'> 
    <div class="card text-bg-dark">
  <img src="https://t4.ftcdn.net/jpg/03/09/86/97/360_F_309869755_IquCHHxF7YABo2odctUGEjMrgVDSM8qV.jpg"
   class="card-img" alt="Background" height="550px"/>
  <div class="card-img-overlay d-flex  flex-column justify-content-center">
    <div className="cointainer">
    <h5 class="card-title display-3 fw-bold">NEW SEASON ARRIVALS</h5>
    <p class="card-text  fs-15px">CHECKOUT ALL THE tRENDS AND FASHIONS</p>
  
    </div>
   
  </div>
</div>

       <Product/>
         <Woman/>  
         <Men/>  
         <Kid/>
         <Traditional/>
        <AboutPage/>
        <ContactPage/>
    </div>
  )
}
export default Home
