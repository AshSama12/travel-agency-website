import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import backgroundImage from "../../assets/background.png"; // Import the background image
import "./cart.css";

const Cart = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { packageType, places, specialRequest, price, packageName } = location.state || {};
  
  const basePrice = price || 100; // Default price if not provided
  const taxRate = 0.10; // 10% tax
  const discountRate = 0.15; // 15% discount

  const tax = basePrice * taxRate;
  const discount = basePrice * discountRate;
  const total = basePrice + tax - discount;

  const [paymentMethod, setPaymentMethod] = useState("");

  const handlePayment = () => {
    if (!paymentMethod) {
      alert("Please select a payment method.");
      return;
    }
    alert("Redirecting to payment...");
    navigate("/payment");
  };

  return (
    <div
      className="cart-container"
      style={{ backgroundImage: `url(${backgroundImage})` }} // Use the imported image
    >
      <div className="cart-overlay"></div> {/* Add overlay for better text visibility */}
      <div className="cart-content">
        <h1>Cart</h1>
        <div className="cart-box">
          <p><strong>Package Type:</strong> {packageType || packageName}</p>
          {places && (
            <p><strong>Selected Places:</strong> {places.join(", ")}</p>
          )}
          {specialRequest && (
            <p><strong>Special Requests:</strong> {specialRequest}</p>
          )}
          <p><strong>Base Price:</strong> ${basePrice.toFixed(2)}</p>
          <p><strong>Tax (10%):</strong> ${tax.toFixed(2)}</p>
          <p><strong>Discount (15%):</strong> -${discount.toFixed(2)}</p>
          <p><strong>Total Price:</strong> ${total.toFixed(2)}</p>
        </div>
        <div className="payment-method">
          <h3>Select Payment Method</h3>
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="PayPal"
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            PayPal
          </label>
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="Card"
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            Card
          </label>
        </div>
        <div className="cart-buttons">
          <button onClick={handlePayment} className="confirm-button">
            Confirm order
          </button>
          <button onClick={() => navigate(-1)} className="back-button">
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
