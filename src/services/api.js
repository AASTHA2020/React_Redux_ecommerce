// src/services/api.js

// Base URL for the Fake Store API
const apiBaseUrl = 'https://fakestoreapi.com';

// Function to fetch products from the Fake Store API related to women's clothing
export const fetchProducts = async () => {
  try {
    // Fetch products from the Fake Store API endpoint for women's clothing category
    const response = await fetch(`${apiBaseUrl}/products/category/women's%20clothing`); // Corrected URL

    // Handle errors if the response is not OK
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }

    // Parse JSON data from the response
    const data = await response.json();

    // Return the parsed data
    return data;
  } catch (error) {
    // Log and re-throw any errors that occur during the fetch
    console.error('Error fetching products:', error);
    throw error;
  }
};
