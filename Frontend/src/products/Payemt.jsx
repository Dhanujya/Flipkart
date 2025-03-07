import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { FaCreditCard } from "react-icons/fa";
import { SiPhonepe } from "react-icons/si";
import { MdOutlineLocalAtm } from "react-icons/md"; // ATM icon for Cash on Delivery

export default function PaymentPage() {
  const location = useLocation();
  const totalAmount = location.state?.amount || 0;
  const [paymentMethod, setPaymentMethod] = useState("creditCard");

  const handlePayment = () => {
    alert(`Payment of ₹${totalAmount} successful via ${paymentMethod}`);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-lg">
        <h2 className="text-2xl font-bold text-center text-gray-700">Payment</h2>
        <p className="text-lg text-gray-600 text-center mt-2">
          Amount: <span className="font-semibold">₹{totalAmount}</span>
        </p>
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-700">Choose Payment Method</h3>
          <div className="mt-3 space-y-2">
            <div
              className={`flex items-center p-3 border rounded-lg cursor-pointer ${
                paymentMethod === "creditCard" ? "border-blue-500" : "border-gray-300"
              }`}
              onClick={() => setPaymentMethod("creditCard")}
            >
              <FaCreditCard className="text-blue-600 text-xl mr-2" />
              <span>Credit / Debit Card</span>
            </div>
            <div
              className={`flex items-center p-3 border rounded-lg cursor-pointer ${
                paymentMethod === "phonepe" ? "border-blue-500" : "border-gray-300"
              }`}
              onClick={() => setPaymentMethod("phonepe")}
            >
              <SiPhonepe className="text-blue-600 text-xl mr-2" />
              <span>PhonePe</span>
            </div>
            <div
              className={`flex items-center p-3 border rounded-lg cursor-pointer ${
                paymentMethod === "cod" ? "border-blue-500" : "border-gray-300"
              }`}
              onClick={() => setPaymentMethod("cod")}
            >
              <MdOutlineLocalAtm className="text-blue-600 text-xl mr-2" />
              <span>Cash On Delivery</span>
            </div>
          </div>
        </div>
        <button
          className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg"
          onClick={handlePayment}
        >
          Pay ₹{totalAmount}
        </button>
      </div>
    </div>
  );
}
