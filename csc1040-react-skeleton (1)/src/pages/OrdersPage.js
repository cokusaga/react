import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function OrdersPage() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/order/')
      .then(res => res.json())
      .then(data => setOrders(data))
      .catch(err => console.error('Error fetching orders:', err));
  }, []);

  return (
    <div className="categories-container">
      <h1>Orders</h1>
      {orders.length > 0 ? (
        <div className="categories-grid">
          {orders.map(order => (
            <Link
              to={`/order/${order.url.split('/').slice(-2, -1)[0]}`}
              key={order.url}
              className="category-card"
            >
              <h2>Order #{order.url.split('/').slice(-2, -1)[0]}</h2>
              <p><strong>Date Ordered:</strong> {new Date(order.date_ordered).toLocaleDateString()}</p>
              <p><strong>Status:</strong> {order.status}</p>
              <p><strong>Shipping Address:</strong> {order.shipping_addr}</p>
            </Link>
          ))}
        </div>
      ) : (
        <p>Loading orders...</p>
      )}
    </div>
  );
}