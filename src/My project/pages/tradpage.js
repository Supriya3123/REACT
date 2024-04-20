import React, { useState } from 'react';
import { tadData } from '../data/tradation';
import Navbar from '../components/navbar';
import { Link } from 'react-router-dom';

const Traditionalpage = () => {
  const [selectedProduct, setSelectedProduct] = useState([]);

  const brandHandler = (brand) => {
    if (selectedProduct.includes(brand)) {
      setSelectedProduct(selectedProduct.filter(item => item !== brand));
    } else {
      setSelectedProduct([...selectedProduct, brand]);
    }
  };

  const filteredProduct = selectedProduct.length === 0 ?
    tadData : tadData.filter((item) => selectedProduct.includes(item.brand));

  return (
    <div className='propages'>
      <Navbar />
      <div className='fullpage'>
        <div className='pro-selected'>
          {tadData.map((tad) => (
            <div key={tad.brand}>
              <label>
                <input
                  type='checkbox'
                  checked={selectedProduct.includes(tad.brand)}
                  onChange={() => brandHandler(tad.brand)}
                />
                {tad.brand}
              </label>
            </div>
          ))}
        </div>
        <div className='pageSection'>
          {filteredProduct.map((item) => (
            <div key={item.id}>
              <Link to={`/tradation/${item.id}`} className='product-link'>
                <div className='pageImg'>
                  <img className='img1' style={{ width: "80%", height: "80%" }} src={item.image} alt="dress" />
                </div>
                <div className='proModel'style={{color:"black"}}>
                  {item.brand}
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Traditionalpage;
