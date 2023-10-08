/* eslint-disable no-undef */
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  // Navigate,
  // useNavigate,
} from "react-router-dom";
import Navbar from "./Navbar";
import Carousel from "./carousel";
import Brands from './brands';
import Banner from './banner';
import { Home, ShoppingCart } from "./home";
import Form from "./form";
import Footer from './footer';
import Contact  from "./contact";
import Animation from "./animate";



function App() {
  const[cart,setCart]=useState([])
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [num,setNum]=useState(false);
   const [add,setAdd]=useState([])
  
   const Added=(id)=>{
setAdd([...add,id])
   }
  let length=cart.length;
  if(length>0){
    length=cart.length
  }
  else{
   length=''
  }
  const AddToCart = (product,index) => {
    const newItem = {
      id: product.id,
      name: product.name,
      img: product.img,
      price: product.price - 30,
      des: product.des,
      quantity: product.quantity,
      index:index
      
    };
  
    if (!cart.some((item) => item.id === newItem.id)) {
      setCart([...cart, newItem])}
      // products[index].btn='Added your cart'
    Added(newItem.id)
      // console.log(cart)
  
    
  };

  const clearCart = () => {
    setCart([]);
    setAdd([])
  };

  const handleRemoveItem = (itemId) => {
    const updatedItems = cart.filter((item) => item.id !== itemId);
    setCart(updatedItems);
    const adding = add.filter((item)=> item !==itemId)
    setAdd(adding)
    // products[itemId-1].btn='Add to Cart'
  };

  const search = (s)=>{
    let title=products.name.toLowerCase();
    console.log(title)

  }
 
  return (
    <Router>
      <Navbar length={length} search={search} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Carousel />
              <Banner/>
              <Home addToCart={AddToCart}  add={add}    />
              
              <Brands/>
              <Animation/>
            </>
          }
        />

        <Route
          path="/shopping-cart"
          element={
            
              <ShoppingCart
                cart={cart}
                clearCart={clearCart}
                handleRemoveItem={handleRemoveItem}
              />}
           
        />
<Route path="/Products" element={<Home addToCart={AddToCart} add={add} />}/>
<Route path="/contact" element={<Contact />}/>


        <Route
          path="/login"
          element={
            <Form isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
          }
        />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
