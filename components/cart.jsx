import React, { useState } from 'react';

function ShoppingCart() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Product A', price: 10.99, quantity: 1 },
    { id: 2, name: 'Product B', price: 15.99, quantity: 1 },
    { id: 3, name: 'Product C', price: 18.99, quantity: 1 },
    { id: 4, name: 'Product D', price: 21.99, quantity: 1 }
    // Add more items as needed
  ]);

  const handleQuantityChange = (itemId, newQuantity) => {
    const updatedItems = cartItems.map(item =>
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedItems);
  };

  const handleRemoveItem = (itemId) => {
    const updatedItems = cartItems.filter(item => item.id !== itemId);
    setCartItems(updatedItems);
  };

  const calculateTotalPrice = () => {
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    return totalPrice.toFixed(2);
  };

  return (
    <div style={styles.shoppingCart}>
      <h2>Your Shopping Cart</h2>
      <ul style={styles.cartItems}>
        {cartItems.map(item => (
          <li key={item.id} style={styles.cartItem}>
            <div style={styles.itemDetails}>
              <span style={styles.itemName}>{item.name}</span>
              <span style={styles.itemPrice}>${item.price}</span>
            </div>
            <div style={styles.quantityControls}>
              <input
                type="number"
                value={item.quantity}
                onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
              />
              <button onClick={() => handleRemoveItem(item.id)} style={styles.removeButton}>
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
      <p style={styles.total}>Total: ${calculateTotalPrice()}</p>
      <button onClick={() => setCartItems([])} style={styles.clearCartButton}>
        Clear Cart
      </button>
    </div>
  );
}

const styles = {
  shoppingCart: {
    backgroundColor: '#f9f9f9',
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  cartItems: {
    listStyleType: 'none',
    padding: 0,
  },
  cartItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    borderBottom: '1px solid #ddd',
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    fontWeight: 'bold',
    marginRight: '10px',
  },
  itemPrice: {
    color: '#888',
  },
  quantityControls: {
    display: 'flex',
    alignItems: 'center',
  },
  removeButton: {
    backgroundColor: '#dc3545',
    color: 'white',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '3px',
    cursor: 'pointer',
  },
  total: {
    fontWeight: 'bold',
    marginTop: '10px',
  },
  clearCartButton: {
    backgroundColor: '#dc3545',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '3px',
    cursor: 'pointer',
    marginTop: '10px',
  },
};

export default ShoppingCart;
