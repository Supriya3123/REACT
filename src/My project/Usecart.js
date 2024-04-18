
import React from 'react'
import { useCart } from './context/cardcontex';
import Navbar from './components/navbar';



const UserCart = () => {

    const {cartItems, addToCart, removeFromCart} = useCart()

    console.log(cartItems);

  return (
<>
 <Navbar/>
 

<div>
    <h2 className='cart'>Your Cart</h2>
 {cartItems.length ===0 ?
    (<p className='empty'>Your Cart is Empty</p>):
   <div>
     {cartItems.map((item)=>{
        return(
            <div className='cart-section'>
                <div className="cart-img">
                    <img src={item.image} alt="" />
                </div>
                <div className="cart-details">
                    <h3>{item.product}</h3>
                    <h2>
                        {item.price}
                    </h2>
                    <h3>{item.model}</h3>
                </div>
                <button className='removeBtn btn btn-outline-dark ms-2' onClick={() => removeFromCart(item)}>Remove</button>
            </div>
        )
    })}
   </div>

}
     
    </div>
</>
  )
}

export default UserCart