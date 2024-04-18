// Womensingle.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { womanData } from '../data/women';
import { useCart } from '../context/cardcontex';
import Navbar from '../components/navbar';


const Womensingle = () => {
  const { id } = useParams();
  const { addToCart } =useCart() ; // Corrected variable name
  const product = womanData.find((item) => item.id === id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
  <Navbar/>
    <div className='inde-section'>
      <div className='inde-image'>
        <img src={product.image} alt='' />
      </div>
      <div  className='inde-details'>
        <div className='inde-model'>
          <h3>{product.model}</h3>
        </div>
        <div className='inde-price'>
          <h2>{product.price}</h2>
        </div>
        <div className='inde-descrption'>
          <p>{product.description}</p>
        </div>
        <button className='btn btn-outline-dark me-2' onClick={() => addToCart(product)}>Add to cart</button>
      </div>
    </div>
    
</>
  );
};

export default Womensingle;
