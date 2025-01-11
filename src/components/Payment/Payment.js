import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Payment.css";
import background from "../../assets/background.png";

const Payment = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Extract packageName and base packagePrice from location.state
  const { packageName = "Basic", basePrice = 95 } = location.state || {};

  // Adjust the price based on package type
  const packagePrice = packageName === "Premium" ? basePrice + 30 : basePrice;

  const [paymentMethod, setPaymentMethod] = useState("");
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });
  const [paypalAccount, setPaypalAccount] = useState("");

  const handlePayment = () => {
    if (paymentMethod === "Card") {
      if (!cardDetails.cardNumber || !cardDetails.expiryDate || !cardDetails.cvv) {
        alert("Please fill in all card details.");
        return;
      }
    } else if (paymentMethod === "PayPal") {
      if (!paypalAccount) {
        alert("Please enter your PayPal account.");
        return;
      }
    } else {
      alert("Please select a payment method.");
      return;
    }

    alert("Payment Successful! Thank you for your booking. Have a great day!");
    navigate("/");
  };

  return (
    <div
      className="payment-container"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="payment-overlay"></div>
      <div className="payment-content">
        <h1>Payment Details</h1>
        <div className="payment-item">
          <h2>Package Name:</h2>
          <p>{packageName}</p>
        </div>
        <div className="payment-item">
          <h2>Price:</h2>
          <p>${packagePrice.toFixed(2)}</p>
        </div>

        <h3>Select Payment Method</h3>
        <div className="payment-methods">
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="Card"
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            Card (Visa/MasterCard)
          </label>
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="PayPal"
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            PayPal
          </label>
        </div>

        {paymentMethod === "Card" && (
          <div className="card-details">
            <h3>Enter Card Details</h3>
            <input
              type="text"
              placeholder="Card Number"
              value={cardDetails.cardNumber}
              onChange={(e) =>
                setCardDetails({ ...cardDetails, cardNumber: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Expiry Date (MM/YY)"
              value={cardDetails.expiryDate}
              onChange={(e) =>
                setCardDetails({ ...cardDetails, expiryDate: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="CVV"
              value={cardDetails.cvv}
              onChange={(e) =>
                setCardDetails({ ...cardDetails, cvv: e.target.value })
              }
            />
          </div>
        )}

        {paymentMethod === "PayPal" && (
          <div className="paypal-details">
            <h3>Enter PayPal Account</h3>
            <input
              type="email"
              placeholder="PayPal Email"
              value={paypalAccount}
              onChange={(e) => setPaypalAccount(e.target.value)}
            />
          </div>
        )}

        <div className="payment-buttons">
          <button className="payment-button" onClick={handlePayment}>
            Confirm Payment
          </button>
          <button className="back-button" onClick={() => navigate(-1)}>
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
