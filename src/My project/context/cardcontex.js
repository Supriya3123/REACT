import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item, size, quantity) => {
        const newItem = { ...item, size, quantity };
        setCartItems([...cartItems, newItem]);
    };

    const removeFromCart = (itemToRemove) => {
        const updatedCartItems = cartItems.filter(item => item.id !== itemToRemove.id);
        setCartItems(updatedCartItems);
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};
