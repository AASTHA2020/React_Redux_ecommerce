// src/components/ProductList.jsx

import React, { useEffect, useState } from 'react'; // React hooks and core components
import { useDispatch } from 'react-redux'; // Redux hook for dispatching actions
import { addToCart } from '../store/cartSlice'; // Action to add item to cart
import { fetchProducts } from '../services/api'; // Function to fetch products from API
import ProductItem from './ProductItem'; // ProductItem component for displaying each product
import './ProductList.css'; // Styling for ProductList component

const ProductList = () => {
  const dispatch = useDispatch(); // Initializing dispatch hook for Redux
  const [products, setProducts] = useState([]); // State to hold fetched products

  useEffect(() => {
    fetchProducts() // Fetching products from API on component mount
      .then(data => setProducts(data)) // Setting fetched products to state
      .catch(error => console.log('Error fetching products:', error)); // Error handling for fetch operation
  }, []); // Empty dependency array ensures effect runs once on mount

  const handleAddToCart = (product) => {
    dispatch(addToCart(product)); // Dispatching addToCart action with selected product
  };

  return (
    <div className="product-list-container"> {/* Container for product list */}
      <h1>Product List</h1> {/* Heading for product list */}
      <div className="products"> {/* Container for individual products */}
        {products.map(product => ( {/* Mapping over products to display each */}
          <ProductItem key={product.id} product={product} onAddToCart={handleAddToCart} /> // Rendering ProductItem component for each product
        ))}
      </div>
    </div>
  );
};

export default ProductList;
