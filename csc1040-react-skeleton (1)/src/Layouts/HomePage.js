import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="categories-container">
      <h1>Welcome to the Shop</h1>
      <div className="categories-grid">
        <Link to="/categories" className="category-card">
          <h2>View Categories</h2>
          <p>Browse all product categories.</p>
        </Link>
        <Link to="/orders" className="category-card">
          <h2>View Orders</h2>
          <p>Check the status of your orders.</p>
        </Link>
        <Link to="/customer" className="category-card">
          <h2>View Customers</h2>
          <p>See all customer details.</p>
        </Link>
      </div>
    </div>
  );
}