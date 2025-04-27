import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function CustomerPage() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/customer/')
      .then(res => res.json())
      .then(data => setCustomers(data))
      .catch(err => console.error('Error fetching customers:', err));
  }, []);

  return (
    <div className="categories-container">
      <h1>Customers</h1>
      {customers.length > 0 ? (
        <div className="categories-grid">
          {customers.map(customer => (
            <Link
              to={`/customer/${customer.url.split('/').slice(-2, -1)[0]}`}
              key={customer.url}
              className="category-card"
            >
              <h2>{customer.name}</h2>
              <p><strong>Email:</strong> {customer.email}</p>
              <p><strong>Address:</strong> {customer.address}</p>
            </Link>
          ))}
        </div>
      ) : (
        <p>Loading customers...</p>
      )}
    </div>
  );
}