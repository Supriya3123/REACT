import React, { useState } from 'react';
import { menData } from '../data/men';
import Navbar from '../components/navbar';
import { Link } from 'react-router-dom';

const Menpage = () => {
  const [selectedProduct, setSelectedProduct] = useState([]);

  const brandHandler = (brand) => {
    if (selectedProduct.includes(brand)) {
      setSelectedProduct(selectedProduct.filter(item => item !== brand));
    } else {
      setSelectedProduct([...selectedProduct, brand]);
    }
  };

  const filteredProduct = selectedProduct.length === 0 ?
    menData : menData.filter((item) => selectedProduct.includes(item.brand));

  return (
    <div className='propages'>
      <Navbar />
      <div className='fullpage'>
        <div className='pro-selected'>
          {menData.map((men) => (
            <div key={men.brand}>
              <label>
                <input
                  type='checkbox'
                  checked={selectedProduct.includes(men.brand)}
                  onChange={() => brandHandler(men.brand)}
                />
                {men.brand}
              </label>
            </div>
          ))}
        </div>
        <div className='pageSection'>
          {filteredProduct.map((item) => (
            <Link key={item.id} to={`/men/${item.id}`} className='product-link'>
              <div className='pageImg'>
                <img src={item.image} alt={item.brand} />
              </div>
              <div className='proModel'>
                {item.brand}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menpage;
