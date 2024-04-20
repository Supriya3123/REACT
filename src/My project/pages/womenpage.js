import React, { useState } from 'react'
import { womanData } from '../data/women'
import Navbar from '../components/navbar'
import { Link } from 'react-router-dom'

const Womanpage = () => {
  const [selectedProduct, setSelectedProduct] = useState([])

  const brandHandler = (brand) => {
    if (selectedProduct.includes(brand)) {
      setSelectedProduct(selectedProduct.filter(item => item !== brand))
    } else {
      setSelectedProduct([...selectedProduct, brand])
    }
  }

  const filteredProduct = selectedProduct.length === 0 ?
    womanData : womanData.filter((item) => selectedProduct.includes(item.brand))

  return (
    <div className='propages'>
      <Navbar />
      <div className='fullpage'>
        <div className='pro-selected'>
          {womanData.map((women) => {
            return (
              <div key={women.brand}>
                <label>
                  <input
                    type='checkbox'
                    checked={selectedProduct.includes(women.brand)}
                    onChange={() => brandHandler(women.brand)}
                  />
                  {women.brand}
                </label>
              </div>
            )
          })}
        </div>
        <div className='pageSection'>
          {filteredProduct.map((item) => {
            return (
              <Link key={item.id} to={`/women/${item.id}`}>
                <div className='pageImg'>
                  <img src={item.image} alt="dress" />
                </div>
                <div className='proModel'style={{color:"black"}}>
                  {item.brand}
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Womanpage
