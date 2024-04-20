import React, { useState } from 'react'
import { kidData } from '../data/kids'
import Navbar from '../components/navbar'
import { Link } from 'react-router-dom'

const Kidpage = () => {
  const [selectedProduct, setSelectedProduct] = useState([])

  const brandHandler = (brand) => {
    if (selectedProduct.includes(brand)) {
      setSelectedProduct(selectedProduct.filter(item => item !== brand))
    } else {
      setSelectedProduct([...selectedProduct, brand])
    }
  }

  const filteredProduct = selectedProduct.length === 0 ?
    kidData : kidData.filter((item) => selectedProduct.includes(item.brand))

  return (
    <div className='propages'>
      <Navbar />
      <div className='fullpage'>
        <div className='pro-selected'>
          {kidData.map((kid) => {
            return (
              <div key={kid.brand}>
                <label>
                  <input
                    type='checkbox'
                    checked={selectedProduct.includes(kid.brand)}
                    onChange={() => brandHandler(kid.brand)}
                  />
                  {kid.brand}
                </label>
              </div>
            )
          })}
        </div>
        <div className='pageSection'>
          {filteredProduct.map((item) => {
            return (
              <>
              <Link key={item.id} to={`/kid/${item.id}`}>
                <div className='pageImg'>
                  <img  className='img1'style={{width:"80%", height:"80%"}}src={item.image} alt="dress" />
                </div>
                <div className='proModel'style={{color:"black"}}>
                  {item.brand} ,{item.model}
                </div>
              </Link>
              </>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Kidpage
