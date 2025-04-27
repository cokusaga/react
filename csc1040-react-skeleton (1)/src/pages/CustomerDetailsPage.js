import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

export default function CustomerDetailsPage() {
  const { id } = useParams(); // Get the customer ID from the URL
  const [customer, setCustomer] = useState(null);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch customer details
    fetch(`http://127.0.0.1:8000/api/customer/${id}/`)
      .then(res => res.json())
      .then(data => setCustomer(data))
      .catch(err => console.error('Error fetching customer details:', err));

    // Fetch orders for the customer
    fetch(`http://127.0.0.1:8000/api/order/?customer=${id}`)
      .then(res => res.json())
      .then(orderData => setOrders(Array.isArray(orderData) ? orderData : []))
      .catch(err => console.error('Error fetching orders:', err));
  }, [id]);

  return (
    <div className="categories-container">
      {customer ? (
        <div>
          <h1>{customer.name}</h1>
          <p><strong>Email:</strong> {customer.email}</p>
          <p><strong>Address:</strong> {customer.address}</p>

          <h2>Orders</h2>
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
            <p>No orders found for this customer.</p>
          )}
        </div>
      ) : (
        <p>Loading customer details...</p>
      )}
    </div>
  );
}