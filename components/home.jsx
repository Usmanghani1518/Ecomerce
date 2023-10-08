import React, { useState,useEffect } from "react";

import {CiShoppingCart} from 'react-icons/ci'
// import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../styles/homs.css";
import img1 from "../img/product-img-1.jpeg";
import img2 from "../img/product-img-2.jpeg";
import img3 from "../img/product-img-3.jpeg";
import img4 from "../img/product-img-4.jpeg";
import img5 from "../img/product-img-5.jpeg";
import img8 from "../img/product-img-8.jpeg";
import img9 from "../img/product-img-9.jpeg";

const products = [
  {
    id:1,
    quantity:1,
    name: "New Game",
    img: img1,
    des: "this is your favorite and get the this product is not property of ag-gagets check it clearly and change is available in 7 days",
    price: 430,
    // btn:'Add to Cart'
  },
  {
    id:2,
    quantity:1,
    name: "Gamming Handphons",
    img: img2,
    des: "this is your favorite and get the this product is not property of ag-gagets check it clearly and change is available in 7 days",
    // btn:'Add to Cart',
    price: 100,
  },
  {
    id:3,
    quantity:1,
    name: "D-Game",
    img: img3,
    des: "this is your favorite and get the this product is not property of ag-gagets check it clearly and change is available in 7 days",
    price: 150,
    // btn:'Add to Cart'
  },
  {
    id:4,
    quantity:1,
    name: "Lenovo",
    img: img4,
    des: "this is your favorite and get the this product is not property of ag-gagets check it clearly and change is available in 7 days",
    price: 250,
    // btn:'Add to Cart'
  },
  {
    id:5,
    quantity:1,
    name: "G Pixxels",
    img: img5,
    des: "this is your favorite and get the this product is not property of ag-gagets check it clearly and change is available in 7 days",
    price: 330,
    // btn:'Add to Cart'
  },
  {
    id:6,
    quantity:1,
    name: "Twiss 5s",
    img: img8,
    des: "this is your favorite and get the this product is not property of ag-gagets check it clearly and change is available in 7 days",
    price: 440,
    // btn:'Add to Cart'
  },
  {
    id:7,
    quantity:1,
    name: "Branded Headphone",
    img: img9,
    des: "this is your favorite and get the this product is not property of ag-gagets check it clearly and change is available in 7 days",
    price: 530,
    // btn:'Add to Cart'
  },
  {
    id:8,
    quantity:1,
    name: "German HeadPhone",
    img: img9,
    des: "this is your favorite and get the this product is not property of ag-gagets check it clearly and change is available in 7 days",
    price: 170,
    // btn:'Add to Cart'
  },
  {
    id:9,
    quantity:1,
    name: "Game Plus",
    img: img1,
    des: "this is your favorite and get the this product is not property of ag-gagets check it clearly and change is available in 7 days",
    price: 580,
    // btn:'Add to Cart'
  },
  {
    id:10,
    quantity:1,
    name: "D-Game-2",
    img: img3,
    des: "this is your favorite and get the this product is not property of ag-gagets check it clearly and change is available in 7 days",
    price: 670,
    // btn:'Add to Cart'
  },
  {
    id:11,
    quantity:1,
    name: "G Pixels-1",
    img: img5,
    des: "this is your favorite and get the this product is not property of ag-gagets check it clearly and change is available in 7 days",
    price: 885,
    // btn:'Add to Cart'
  },
  {
    id:12,
    quantity:1,
    name: "L-HeadPhone",
    img: img2,
    des: "this is your favorite and get the this product is not property of ag-gagets check it clearly and change is available in 7 days",
    // btn:'Add to Cart',
    price: 210,
  },
];



export const Home = ({ addToCart ,add }) => {
  // const initialAddedToCartState = products.reduce((acc, product) => {
  //   acc[product.id] = false;
  //   return acc;
  // }, []);
  
  // const [addedToCart, setAddedToCart] = useState(0);

  // const handleAddToCart = (product,index) => {
  //   addToCart(product);
  //   setAddedToCart((prevAddedToCart) => ({
  //     ...prevAddedToCart,
  //     [index]: true,
  //   }));
  // };

  return (
    <>
      <section className="mt-5 container-fluid">
        <div className=" secTitle">
          <div className="row mx-xl-5">
            <h1 className="arrival pb-2">New <span className="text-warning">Arrivals</span></h1>

            {products.map((product, index) => (
              <div
                className="container-fluid col-lg-3 col-md-4 col-sm-6 product"
                key={index}
              >
                <Card style={{ width: "100%" }} className="mb-3 cord ">
                  <Card.Img
                    variant="top"
                    style={{ height: "200px", objectFit: "cover" }}
                    src={product.img}
                  />
                  <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>{product.des}</Card.Text>
                    <div
                      className="price"
                      style={{
                        justifyContent: "space-between",
                        fontWeight: "700",
                      }}
                    >
                      <s>${product.price}</s>{" "}
                      <span> ${product.price - 30}</span>
                    </div>
                    <div align="center" className="none">
                      <button
                        onClick={() => addToCart(product,index)}
                        style={{ width: "80%" }}
                        className="btn btn-warning"
                        // disabled={addedToCart[index]}
                      >
                        <CiShoppingCart className="fs-4 mb-1" /> 
                        {add.includes(product.id) ? 'Already Added' : 'Add to Cart'}
 

                      </button>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export function ShoppingCart({cart,clearCart, handleRemoveItem}) {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    setCartItems(cart);
    
  }, [cart]);
  const handleQuantityChange = (itemId, newQuantity) => {
    const updatedItems = cartItems.map((item) =>
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedItems);
  };

  
  const calculateTotalPrice = () => {
    const totalPrice = cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    return totalPrice.toFixed(2);
  };

  return (
    <div style={styles.shoppingCart}>
      <h2>Your Shopping Cart</h2>
      <ul style={styles.cartItems}>
        {cartItems.map((item) => (
          <li className="cart-inp-rem" key={item.id} style={styles.cartItem}>
            <div style={styles.itemDetails}>
              <img style={{width:'100px' ,height:'50px'}} src={item.img} alt="" />
              <span style={styles.itemName}>{item.name}</span>
              <span style={styles.itemPrice}>${item.price}</span>
              <p>{item.des}</p>
            </div>
            <div  style={styles.quantityControls}>
              <input
                type="number"
                min={1}
                value={item.quantity}
                onChange={(e) =>
                  handleQuantityChange(item.id, parseInt(e.target.value))
                }
              />
              <button
                onClick={() => handleRemoveItem(item.id)}
                style={styles.removeButton}
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
      <p style={styles.total}>Total: ${calculateTotalPrice()}</p>
      <button onClick={() => clearCart()} style={styles.clearCartButton}>
        Clear Cart
      </button>
    </div>
  );
};




const styles = {
  shoppingCart: {
    backgroundColor: "#f9f9f9",
    padding: "20px",
    borderRadius: "5px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  cartItems: {
    listStyleType: "none",
    padding: 0,
  },
  cartItem: {
    // display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    borderBottom: "1px solid #ddd",
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    fontWeight: "bold",
    marginRight: "10px",
  },
  itemPrice: {
    color: "#888",
  },
  quantityControls: {
    display: "flex",
    // alignItems: "center",
  },
  removeButton: {
    backgroundColor: "#dc3545",
    color: "white",
    border: "none",
    padding: "5px 10px",
    borderRadius: "3px",
    cursor: "pointer",
  },
  total: {
    fontWeight: "bold",
    marginTop: "10px",
  },
  clearCartButton: {
    backgroundColor: "#dc3545",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "3px",
    cursor: "pointer",
    marginTop: "10px",
  },
};
