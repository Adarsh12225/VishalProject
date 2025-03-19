import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"; // Import CSS for styling

const Home = () => {
  return (
    <div className="home-container">
      <div className="overlay">
        <h1>Welcome to Our Product Management System</h1>
        <p>Explore and compare the best products in the market with ease.</p>
        <div className="buttons">
          <Link to="/product-details" className="btn primary">
            View Products
          </Link>
          <Link to="/compare-products" className="btn secondary">
            Compare Products
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
