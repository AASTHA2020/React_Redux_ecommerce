// src/pages/CartPage.jsx

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../store/cartSlice';
import './CartPage.css'; // Importing CSS file for CartPage styling

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const handleRemoveFromCart = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  return (
    <div className="cart-page">
      <h1>Cart</h1>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            <img src={item.image} alt={item.title} />
            <div>
              <div>{item.title}</div>
              <div>{item.description}</div>
              <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartPage;
