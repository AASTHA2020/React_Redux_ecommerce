// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // React Router imports for routing
import { Provider } from 'react-redux'; // Redux Provider for store
import { store } from './store/store'; // Importing the Redux store
import Navbar from './components/Navbar'; // Importing Navbar component

import ProductList from './components/ProductList'; // Importing ProductList component
import CartPage from './pages/CartPage'; // Importing CartPage component
import './App.css'; // Importing CSS file for styling

const App = () => {
  return (
    <Provider store={store}> {/* Providing Redux store to the application */}
      <Router> {/* Setting up BrowserRouter for routing */}
        <div className="app"> {/* Main app container */}
          <Navbar /> {/* Navbar component for navigation */}
          <Routes> {/* Routes component to define different routes */}
            <Route path="/" element={<ProductList />} /> {/* Route for ProductList component */}
            <Route path="/cart" element={<CartPage />} /> {/* Route for CartPage component */}
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
