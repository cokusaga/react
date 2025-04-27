import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

export default function OrdersByStatusPage() {
  const { status } = useParams(); // Get the status from the URL
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch orders filtered by status
    fetch(`http://127.0.0.1:8000/api/order/?status=${status}`)
      .then(res => res.json())
      .then(data => setOrders(data))
      .catch(err => console.error('Error fetching orders by status:', err));
  }, [status]);

  return (
    <div className="categories-container">
      <h1>Orders with Status: {status}</h1>
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
        <p>No orders found with this status.</p>
      )}
    </div>
  );
}