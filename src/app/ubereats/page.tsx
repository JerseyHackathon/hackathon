"use client"
import React, { useState } from 'react';
import './App.css';

// Simulated Food Items
const foodItems = [
  { id: 1, name: 'Pizza', price: 12 },
  { id: 2, name: 'Burger', price: 8 },
  { id: 3, name: 'Sushi', price: 15 },
];


const UberEats = () => {
  const [order, setOrder] = useState(null);
  const [orderStatus, setOrderStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  

  // Simulate placing an order (no actual backend)
  const placeOrder = (foodItem) => {
    setLoading(true);
    
    // Simulate a fake order ID
    const orderId = Math.floor(Math.random() * 10000);
    setOrder({ ...foodItem, orderId });

    // Simulate a delay (mimicking an API call)
    setTimeout(() => {
      setLoading(false);
      // After a successful order, we simulate the order tracking process
      startTrackingOrder(orderId);
    }, 1000);
  };

  // Simulate tracking the order (no actual backend)
  const startTrackingOrder = (orderId) => {
    setLoading(true);
    setTimeout(() => {
      const statuses = [
        { status: 'Order confirmed', estimatedTime: '10 mins' },
        { status: 'Driver on the way', estimatedTime: '5 mins' },
        { status: 'Food delivered', estimatedTime: '0 mins' },
      ];
      // Randomly set a status from the array
      setOrderStatus(statuses[Math.floor(Math.random() * statuses.length)]);
      setLoading(false);
    }, 1000); // Simulate a delay for tracking update
  };

  return (
    <div className="App">
      <h1>Mock Uber Eats</h1>

      {!order ? (
        <div className="food-list">
          <h2>Select Food</h2>
          {foodItems.map((item) => (
            <div key={item.id} className="food-item">
              <h3>{item.name}</h3>
              <p>${item.price}</p>
              <button onClick={() => placeOrder(item)}>Order</button>
            </div>
          ))}
        </div>
      ) : (
        <div className="order-tracking">
          <h2>Order: {order.name}</h2>
          <p>Order ID: {order.orderId}</p>
          <h3>Status: {orderStatus?.status}</h3>
          {loading ? (
            <p>Loading...</p>
          ) : (
            orderStatus && (
              <>
                <p>Estimated Time: {orderStatus.estimatedTime}</p>
                {orderStatus.status === 'Food delivered' && (
                  <p>Your food has arrived! Enjoy your meal.</p>
                )}
              </>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default UberEats;
