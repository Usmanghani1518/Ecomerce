import React, { useState,useEffect } from 'react';
import '../styles/navbar.css';
// import { MdOutlineTravelExplore } from 'react-icons/md';
import { AiOutlineUser, AiOutlineClose } from 'react-icons/ai';
import { HiMenuAlt2, HiPresentationChartBar } from 'react-icons/hi';
import { CiShoppingCart } from 'react-icons/ci';
import { Link,  } from 'react-router-dom'; // Import BrowserRouter as Router

const Navbar = ({length,search}) => {


  const [active, setActive] = useState('navBar');
  const [show, setShow] = useState(true);
  
 

  const showNav = () => {
    if (show) {
      setShow(false);
      setActive('navBar activeNavbar');
      
    } else {
      setShow(true);
      setActive('navBar');
     

    }
  };
  const inp=()=>{

  }
  return (
    <>
      
       <section  className='nd-flex flex-wrap ' >
  <div onClick={showNav} className="toggleNavbar">
    {show ? (<HiMenuAlt2 className='fs-3' />) : (<AiOutlineClose className='fs-3' />)}
  </div>
 <Link style={{textDecoration:'none'}} to='/'><h1 className='ms-3 me-3 mt-2' style={{ color: '#f0ad4e', fontWeight: '600',fontFamily:'unset' }}><span style={{color:'black',fontWeight:'700'}}>AG-</span>Shop</h1></Link>
  <div className='nonactive mt-2'>
    <input onInput={(e)=>search(e.target.value)} type="text" name="" id="" style={{border:'2px solid #f0ad4e'}} />
    <button  style={{ backgroundColor: '#f0ad4e', border: '1px solid #f0ad4e', height: '28px' }}>Search</button>
  </div>
  <div className="mt-2 shus">
    
   <Link to='/login'><AiOutlineUser className='user me-2' /></Link> 
  <Link to='/shopping-cart'><CiShoppingCart className='shoping ' /></Link>{length &&<sup style={{color:'red'}} className='fw-bold'>{length}</sup> }
  </div>
</section>

        <section  className='navBarSection ' >
          <header className='header  '>
            <div style={{marginTop:'15px'}} className={active}>
              <ul align='center' className="navLists flex" style={{ listStyle: 'none' }}>
                <li className="navItem">
                  <Link to="/" className='navLink'>Home</Link>
                </li>
                <li className="navItem">
                  <Link to="/Products" className='navLink'>Products</Link>
                </li>
                <li className="navItem">
                  <Link to="/shopping-cart" className='navLink'>Shop</Link>
                </li>
                <li className="navItem">
                  <Link to="/About" className='navLink'>About</Link>
                </li>
                <li className="navItem">
                  <Link to="/Pages" className='navLink'>Pages</Link>
                </li>
                <li className="navItem">
                  <Link style={{ textDecoration: 'none' }} to="/News" className='navLink'>News</Link>
                </li>
                <li className="navItem">
                  <Link to="/Contact" className='navLink'>Contact</Link>
                </li>
                <button  style={{ backgroundColor: 'black', color: 'white' ,border:'none' }} className='btn btn-warning'>
                  Become Seller
                </button>
              </ul>
            </div>
          </header>
        </section>
      
    </>
  );
};

export default Navbar;
