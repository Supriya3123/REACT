import React, { useState } from 'react';
import { useCart } from './context/cardcontex';
import Navbar from './components/navbar';

const UserCart = () => {
    const { cartItems, addToCart, removeFromCart } = useCart();
    
    const [size, setSize] = useState('M');
    const [quantity, setQuantity] = useState(1);

    const handleAddToCart = (item) => {
        addToCart(item, size, quantity);
        window.alert(`${item.product} added to cart!`);
        setSize('M');
        setQuantity(1);
    };

    const incrementQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };

    const calculateTotalPrice = (item) => {
        return item.price * quantity;
    };

    return (
        <>
            <Navbar />
            <div>
                <h2 className='cart'>Your Cart</h2>
                {cartItems.length === 0 ? (
                    <p className='empty'>Your Cart is Empty</p>
                ) : (
                    <div>
                        {cartItems.map((item) => {
                            return (
                                <div className='cart-section' key={item.id}>
                                    <div className="cart-img">
                                        <img src={item.image} alt="" />
                                    </div>
                                    <div className="cart-details">
                                        <h3>{item.brand}</h3>
                                        <div className="size-quantity" style={{ marginBottom: '20%' }}> {/* Added margin-bottom */}
                                            <label>
                                                Size:
                                                <select value={size} onChange={(e) => setSize(e.target.value)}>
                                                    <option value="M">M</option>
                                                    <option value="L">L</option>
                                                    <option value="XL">XL</option>
                                                </select>
                                            </label>
                                            <label>
                                                Quantity:
                                                <button onClick={decrementQuantity}>-</button>
                                                <span>{quantity}</span>
                                                <button onClick={incrementQuantity}>+</button>
                                            </label>
                                            <h4>Total Price: ${calculateTotalPrice(item).toFixed(2)}</h4>
                                        </div>
                                    </div>
                                    <button className='removeBtn btn btn-outline-dark ms-2' onClick={() => removeFromCart(item)}>Remove</button>
                                </div>
                            );
                        })}
                    </div>
                )}
                <div className="add-to-cart">
                
                </div>
            </div>
        </>
    );
};

export default UserCart;
