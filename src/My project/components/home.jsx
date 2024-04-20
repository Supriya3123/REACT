import React from 'react';
import Product from './products';
import Woman from './Womencom';
import Men from './Mencom';
import Kid from './kidcom';
import Traditional from './tadcom';
import AboutPage from './About';
import ContactPage from './concat';

const Home = () => {
 
  return (
    <div className='container-fluid'>
      <div className='hero'>
        <div className="card text-bg-dark">
          <img 
            src="https://t4.ftcdn.net/jpg/03/09/86/97/360_F_309869755_IquCHHxF7YABo2odctUGEjMrgVDSM8qV.jpg"
            className="card-img" 
            alt="Background" 
          />
          <div className="card-img-overlay d-flex flex-column justify-content-center">
            <div className="container">
              <h5 className="card-title display-3 fw-bold">NEW SEASON ARRIVALS</h5>
              <p className="card-text fs-15px">CHECKOUT ALL THE TRENDS AND FASHIONS</p>
            </div>
          </div>
        </div>

        <Product />
        <Woman />  
        <Men />  
        <Kid />
        <Traditional />
        <AboutPage />
        <ContactPage />
      </div>
    </div>
  );
};

export default Home;
