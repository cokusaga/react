import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/categories" className="nav-link">Categories</Link>
      <Link to="/orders" className="nav-link">Orders</Link>
      <Link to="/customer" className="nav-link">Customers</Link>
      <div className="dropdown">
        <span className="nav-link">Orders by Status</span>
        <div className="dropdown-content">
          <Link to="/orders/status/P" className="dropdown-item">Pending</Link>
          <Link to="/orders/status/D" className="dropdown-item">Delivered</Link>
          <Link to="/orders/status/O" className="dropdown-item">Open</Link>
          <Link to="/orders/status/S" className="dropdown-item">Shipped</Link>
        </div>
      </div>
    </nav>
  );
}