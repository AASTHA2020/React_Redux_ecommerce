// src/components/ProductItem.jsx

import React from 'react'; // React core module
import './ProductItem.css'; // Styling for ProductItem component

const ProductItem = ({ product, onAddToCart }) => {
  // Function to truncate description to 5-6 words
  const truncateDescription = (description) => {
    const words = description.split(' '); // Splitting description into words
    if (words.length > 6) {
      return words.slice(0, 6).join(' ') + '...'; // Joining first 6 words and appending ellipsis
    }
    return description; // Returning full description if less than or equal to 6 words
  };

  return (
    <div className="product-item"> {/* Container for each product */}
      <img src={product.image} alt={product.title} /> {/* Product image */}
      <div className="product-info"> {/* Container for product information */}
        <h3>{product.title}</h3> {/* Product title */}
        <p>{truncateDescription(product.description)}</p> {/* Truncated product description */}
        <p>Price: ${product.price}</p> {/* Product price */}
        <button onClick={() => onAddToCart(product)}>Add to Cart</button> {/* Add to cart button */}
      </div>
    </div>
  );
};

export default ProductItem;
