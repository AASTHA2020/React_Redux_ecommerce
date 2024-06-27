// src/components/ProductList.jsx

import React, { useEffect, useState } from 'react'; // React hooks aur core components
import { useDispatch } from 'react-redux'; // Redux hook jo actions dispatch karne ke liye use hota hai
import { addToCart } from '../store/cartSlice'; // addToCart action jo cart mein item add karta hai
import { fetchProducts } from '../services/api'; // API se products fetch karne ka function
import ProductItem from './ProductItem'; // Har product ko display karne ke liye ProductItem component
import './ProductList.css'; // ProductList component ka styling

const ProductList = () => {
  const dispatch = useDispatch(); // Redux mein dispatch hook ka initialization
  const [products, setProducts] = useState([]); // State jo fetch kiye gaye products ko store karta hai

  useEffect(() => {
    fetchProducts() // Component mount hone par products fetch karne ka useEffect
      .then(data => setProducts(data)) // Fetch kiye gaye products ko state mein set karna
      .catch(error => console.log('Error fetching products:', error)); // Fetch operation ke errors ko handle karne ka catch block
  }, []); // Empty dependency array ensures effect runs once on mount

  const handleAddToCart = (product) => {
    dispatch(addToCart(product)); // Selected product ko addToCart action ke saath dispatch karna
  };

  return (
    <div className="product-list-container"> {/* Product list ke liye container */}
      <h1>Product List</h1> {/* Product list ka heading */}
      <div className="products"> {/* Har ek product ke liye container */}
        {products.map(product => ( {/* Har product ko display karne ke liye map function */}
          <ProductItem key={product.id} product={product} onAddToCart={handleAddToCart} /> // Har product ke liye ProductItem component render karna
        ))}
      </div>
    </div>
  );
};

export default ProductList;
