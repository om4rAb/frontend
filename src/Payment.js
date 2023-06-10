import React, { useState } from "react";
import "./css/paymentStyle.css"
import { useNavigate } from "react-router-dom";
// import axios from "axios";
const PaymentPage = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [errors, setErrors] = useState({});

  const navigate= useNavigate()

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "cardNumber") {
      // Remove non-digit characters from the card number
      const cleanedValue = value.replace(/\D/g, "");
      setCardNumber(cleanedValue);
    } else {
      // No additional formatting needed for other input fields
      if (name === "cardName") {
        setCardName(value);
      } else if (name === "expiryDate") {
        setExpiryDate(value);
      } else if (name === "cvv") {
        setCvv(value);
      }
    }
  };

  // async function senddata(){

  //   const res = await axios.post("http://localhost:8000/api/planif")


  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};

    // Simple validation example: check if required fields are filled
    if (!cardNumber) {
      validationErrors.cardNumber = "Card number is required";
    }
    if (!cardName) {
      validationErrors.cardName = "Card name is required";
    }
    if (!expiryDate) {
      validationErrors.expiryDate = "Expiry date is required";
    }
    if (!cvv) {
      validationErrors.cvv = "CVV is required";
    }

    // You can perform additional validation on the card number, expiry date, and CVV here

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // payment processing  
      // senddata()
      navigate("/profile")
      
    }
  };

  return (
    <div className="payment-container">

      <h2>Enter Credit Card Details</h2>
      <div className="payment">
        
        <form className="payForm" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="cardNumber">Card Number:</label>
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              value={cardNumber}
              onChange={handleInputChange}
            />
            {errors.cardNumber && <p>{errors.cardNumber}</p>}
          </div>
          <div>
            <label htmlFor="cardName">Cardholder Name:</label>
            <input
              type="text"
              id="cardName"
              name="cardName"
              value={cardName}
              onChange={handleInputChange}
            />
            {errors.cardName && <p>{errors.cardName}</p>}
          </div>
          <div>
            <label htmlFor="expiryDate">Expiry Date:</label>
            <input
              type="text"
              id="expiryDate"
              name="expiryDate"
              value={expiryDate}
              onChange={handleInputChange}
            />
            {errors.expiryDate && <p>{errors.expiryDate}</p>}
          </div>
          <div>
            <label htmlFor="cvv">CVV:</label>
            <input
              type="text"
              id="cvv"
              name="cvv"
              value={cvv}
              onChange={handleInputChange}
            />
            {errors.cvv && <p>{errors.cvv}</p>}
          </div>
          <button type="submit">Pay Now</button>
        </form>
      </div>
    </div>
  );
};

export default PaymentPage;
