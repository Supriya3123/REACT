import React from 'react';
import { useParams } from 'react-router-dom';
import { menData } from '../data/men';
import { useCart } from '../context/cardcontex';
import Navbar from '../components/navbar';

const Mensingle = () => {
  const { id } = useParams();
  const { addToCart } = useCart(); // Corrected variable name
  const product = menData.find((item) => item.id === id);

  const handleAddToCart = (product) => {
    addToCart(product);
    window.alert('Product added to cart!');
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <Navbar />
      <center>
        <div className='container mt-5' style={{ border: "1px solid black" }}>
          <div className='row'>
            <div className='col-md-6'>
              <img src={product.image} alt={product.model} className='img-fluid' style={{ width: '300px', height: '200px' }} />
            </div>
            <div className='col-md-6'>
              <div className='product-details'>
                <h6 className='mb-3'>Brand: {product.brand}</h6>
                <h2 className='mb-4'>Price: {product.price}</h2>
                <p className='mb-4'>Description: {product.description}</p>
                <button className='btn btn-outline-dark me-2' onClick={() => handleAddToCart(product)}>
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </center>
    </>
  );
};

export default Mensingle;
