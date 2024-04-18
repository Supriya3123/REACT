import React from 'react';
import { useParams } from 'react-router-dom';
import { tadData } from '../data/tradation';
import { useCart } from '../context/cardcontex';
import Navbar from '../components/navbar';

const Tradsingle = () => {
  const { id } = useParams();
  const { addToCart } = useCart(); // Hook for adding to cart
  const product = tadData.find((item) => item.id === id);

  // Handle missing product
  if (!product) {
    return (
      <>
        <Navbar />
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <h2>Product not found</h2>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className='container mt-5'>
        <div className='row'>
          <div className='col-md-6'>
            <img src={product.image} alt={product.model} className='img-fluid'style={{ width: '300px', height: '200px' }}  />
          </div>
          <div className='col-md-6'>
            <div className='product-details'>
              <div className='inde-model'>
                <h3>{product.model}</h3>
              </div>
              <div className='inde-price'>
                <h2>{product.price}</h2>
              </div>
              <div className='inde-descrption'>
                <p>{product.description}</p>
              </div>
              <button className='btn btn-outline-dark me-2' onClick={() => addToCart(product)}>
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tradsingle;
