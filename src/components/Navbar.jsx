// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const cartItems = useSelector(state => state.cart.items);

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="navbar-logo">
          My Store
        </Link>
        <ul className="navbar-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cart">Cart ({cartItems.length})</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
