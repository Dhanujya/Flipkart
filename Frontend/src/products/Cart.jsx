import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const [cartData, setCartData] = useState([]);
  const [subtotalVal, setSubtotalVal] = useState(0);

  useEffect(() => {
    const fetchDataFromCart = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/cart`);
        console.log(res.data);
        setCartData(res.data.CartDatas);

        // Calculate initial subtotal
        const subtotal = res.data.CartDatas.reduce(
          (acc, item) => acc + item.price * item.quantity,  
          0
        );
        setSubtotalVal(subtotal);
      } catch (err) {
        alert(err.response?.data?.message || "Error fetching cart data");
        console.log(err);
      }
    };

    fetchDataFromCart();
  }, []);

  const updateQuantity = async (id, change) => {
    setCartData((prevCart) =>
      prevCart.map((item) =>
        item._id === id
          ? { ...item, quantity: Math.min(10, Math.max(1, item.quantity + change)) }
          : item
      )
    );
  };
  

  useEffect(() => {
 
    const newSubtotal = cartData.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setSubtotalVal(newSubtotal);
  }, [cartData]);  

 
  const deleteCart = async (item) => {
    try {
      await axios.delete(`http://localhost:5000/cart/${item._id}`);
      setCartData((prevCart) => prevCart.filter((cartItem) => cartItem._id !== item._id));
    } catch (err) {
      console.log(err);
      alert(err.response?.data?.message || "Error deleting item");
    }
  };

  const shipping = 5.0;
  const tax = (subtotalVal * 0.08).toFixed(2);
  const total = (subtotalVal + shipping + parseFloat(tax)).toFixed(2);

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-xl rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">🛒 Shopping Cart</h2>

      {cartData.length > 0 ? (
        <div>
          {cartData.map((item) => (
            <div key={item._id} className="flex items-center justify-between border-b py-4">
              <div className="flex items-center gap-4">
                <img src={item.image} alt={item.title} className="w-16 h-16 rounded-lg shadow-md" />
                <div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-gray-600">${item.price}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button
                  className="px-3 py-1 bg-gray-200 rounded-lg hover:bg-gray-300"
                  onClick={() => updateQuantity(item._id, -1)}
                >
                  ➖
                </button>
                <span className="text-lg font-medium">{item.quantity}</span>
                <button
                  className="px-3 py-1 bg-gray-200 rounded-lg hover:bg-gray-300"
                  onClick={() => updateQuantity(item._id, 1)}
                >
                  ➕
                </button>
                <button
                  className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600"
                  onClick={() => deleteCart(item)}
                >
                  ❌
                </button>
              </div>
            </div>
          ))}

          <div className="mt-6 space-y-3">
            <div className="flex justify-between font-semibold text-gray-700">
              <span>Subtotal:</span>
              <span>${subtotalVal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-semibold text-gray-700">
              <span>Shipping:</span>
              <span>${shipping.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-semibold text-gray-700">
              <span>Tax:</span>
              <span>${tax}</span>
            </div>
            <div className="flex justify-between font-bold text-xl text-gray-900">
              <span>Total:</span>
              <span>${total}</span>
            </div>
          </div>

          <button className="w-full mt-6 py-3 bg-blue-600 text-white rounded-lg font-bold text-lg shadow-md hover:bg-blue-700">
            Proceed to Checkout
          </button>
        </div>
      ) : (
        <p className="text-center text-gray-500 text-lg">Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
