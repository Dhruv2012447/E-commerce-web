import React, { useState } from "react";
import "./CartSidebar.css";

export default function CartSidebar({ isOpen, onClose }) {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Throwback Hip Bag",
      price: 90.0,
      qty: 1,
      image: "./public/img/Throwback Hip Bag.jpeg",
    },
    {
      id: 2,
      name: "Medium Stuff Satchel",
      price: 32.0,
      qty: 1,
      image: "./public/img/Medium Stuff Satchel.jpeg",
    },
  ]);

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  return (
    <div className={`sidebar-overlay ${isOpen ? "open" : ""}`}>
      <div className="sidebar">
        <button className="close-btn" onClick={onClose}>
          ✕
        </button>
        <h2>Shopping Cart</h2>

{cartItems.map((item) => (
  <div key={item.id} className="cart-item">
    <img src={item.image} alt={item.name} />
    <div className="item-info">
      <p>{item.name}</p>
      <span>${item.price.toFixed(2)}</span>
      <small>Qty {item.qty}</small>
    </div>
    <button className="remove-btn">
      Remove
    </button>
  </div>
))}


        <hr />

        <div className="subtotal">
          <p>Subtotal: ${subtotal.toFixed(2)}</p>
          <button className="checkout-btn">Checkout</button>
        </div>
      </div>
    </div>
  );
}
