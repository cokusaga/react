import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function OrderDetailsPage() {
  const { id } = useParams(); // Get the order ID from the URL
  const [order, setOrder] = useState(null);
  const [orderItems, setOrderItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    // Fetch order details
    fetch(`http://127.0.0.1:8000/api/order/${id}/`)
      .then(res => res.json())
      .then(data => setOrder(data))
      .catch(err => console.error('Error fetching order details:', err));

    // Fetch order items
    fetch(`http://127.0.0.1:8000/api/orderitem/?order=${id}`)
      .then(res => res.json())
      .then(async items => {
        const validItems = Array.isArray(items) ? items : [];
        const detailedItems = [];

        let total = 0;

        // Fetch product details for each order item
        for (const item of validItems) {
          const productRes = await fetch(item.product);
          const productData = await productRes.json();

          // Add product details to the order item
          detailedItems.push({
            ...item,
            productName: productData.name,
            productPrice: parseFloat(productData.price) || 0,
          });

          // Calculate total price
          total += (parseFloat(productData.price) || 0) * item.quantity;
        }

        setOrderItems(detailedItems);
        setTotalPrice(total);
      })
      .catch(err => console.error('Error fetching order items:', err));
  }, [id]);

  return (
    <div className="categories-container">
      <h1>Order Details</h1>
      {order ? (
        <div>
          <p><strong>Order ID:</strong> {order.id}</p>
          <p><strong>Date Ordered:</strong> {order.date_ordered}</p>
          <p><strong>Shipping Address:</strong> {order.shipping_addr}</p>
          <p><strong>Status:</strong> {order.status}</p>

          <h2>Order Items</h2>
          {orderItems.length > 0 ? (
            <div className="categories-grid">
              {orderItems.map(item => (
                <div key={item.id} className="category-card">
                  <p><strong>Product:</strong> {item.productName}</p>
                  <p><strong>Price:</strong> ${item.productPrice.toFixed(2)}</p>
                  <p><strong>Quantity:</strong> {item.quantity}</p>
                  <p><strong>Subtotal:</strong> ${(item.productPrice * item.quantity).toFixed(2)}</p>
                </div>
              ))}
            </div>
          ) : (
            <p>No items found for this order.</p>
          )}

          <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
        </div>
      ) : (
        <p>Loading order details...</p>
      )}
    </div>
  );
}