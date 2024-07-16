import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartContext from '../context/CartContext';

const Cart = () => {
  const { cart, updateQuantity, removeFromCart, calculateTotal } = useContext(CartContext);
  const navigate = useNavigate();

  const handleQuantityChange = (id, newQuantity) => {
    updateQuantity(id, newQuantity);
  };

  const handleRemove = id => {
    removeFromCart(id);
  };

  const handleProceedToCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div className="container m-4">
      <h2 className="mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Product</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Total</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map(item => (
                <tr key={item.id}>
                  <td>
                    <img src={item.image} alt={item.name} style={{ width: '50px' }} />
                    <span className="ms-2">{item.name}</span>
                  </td>
                  <td>${item.price.toFixed(2)}</td>
                  <td>
                    <input
                      type="number"
                      className="form-control"
                      min="1"
                      value={item.quantity}
                      onChange={e => handleQuantityChange(item.id, e.target.value)}
                    />
                  </td>
                  <td>${(item.price * item.quantity).toFixed(2)}</td>
                  <td>
                    <button className="btn btn-danger" onClick={() => handleRemove(item.id)}>
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <div className="mt-4">
        <h4>Total: ${calculateTotal().toFixed(2)}</h4>
        <button className="btn btn-success" onClick={handleProceedToCheckout}>
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
