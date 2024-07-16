import React, { useContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartContext from '../context/CartContext';

const Checkout = () => {
  const { cart, calculateTotal } = useContext(CartContext);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handlePlaceOrder = () => {
    // Logic to handle order placement
    setOrderPlaced(true);
  };

  return (
    <div className="container m-4">
      <h2 className="mb-4">Checkout</h2>
      {orderPlaced ? (
        <div className="alert alert-success" role="alert">
          Your order has been placed successfully!
        </div>
      ) : (
        <div>
          <h4>Order Summary</h4>
          <ul className="list-group mb-4">
            {cart.map(item => (
              <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                {item.name} (x{item.quantity})
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <h4>Total: ${calculateTotal().toFixed(2)}</h4>
          <button className="btn btn-success mt-3" onClick={handlePlaceOrder}>
            Place Order
          </button>
        </div>
      )}
    </div>
  );
};

export default Checkout;
