import React from "react";
import '../styles/footer.css'
import { Link } from "react-router-dom";
import {AiOutlineTwitter,AiFillYoutube} from 'react-icons/ai';
import {BiLogoFacebookCircle} from 'react-icons/bi'
const Footer =()=>{
    return(
        <>
        


  <footer className=" bg-white   text-black footer ">
    <div className="text-center pt-4 pb-3">
 <Link style={{textDecoration:'none'}} to='/'><h1 className='' style={{ color: '#f0ad4e', fontWeight: '600',fontFamily:'unset' }}><span style={{color:'black',fontWeight:'700'}}>AG-</span>Shop</h1></Link>  
    </div>
    <hr style={{border:'1.2px solid gray'}} className="mx-5 "  />

    <div className="container-fluid  mb-lg-4 text-md-left">
      <div className="row pt-4 mx-lg-4 ">

        <div className="col-md-3 col-12 col-lg-3 ">
          <h6 className="text-uppercase ">About Us</h6>
          <p style={{color:'gray'}} className="text-left  me-3">We know there are a lot of threa developers our but we pride into a firm in the industry. Offcusely you enjoy this shop. </p>
        </div>

        
      
      
        <div className="col-md-3 col-sm-4 col-6 col-lg-3 mb-md-0 mb-3 text-lg-center">
          <h6 className="text-uppercase"> Feature</h6>
          <ul className="list-unstyled ">
            <li className="mb-2"><Link to="#!" className=" link">About Us</Link></li>
            <li className="mb-2"><Link to="#!" className=" link">Terms Condition</Link></li>
            <li className="mb-2"><Link to="#!" className=" link">Best Products</Link></li>
            
          </ul>
        </div>

        <div className="col-md-3 col-sm-4 col-lg-3 col-6 col-sm-4 mb-md-0 mb-5 text-lg-center">
          <h6 className="text-uppercase">General Links</h6>
          <ul className="list-unstyled  ">
            <li className="mb-2"><Link to="#!" className=" link">Blog</Link></li>
            <li className="mb-2"><Link to="#!" className=" link">Tracking Order</Link></li>
            <li className="mb-2"><Link to="#!" className=" link">Become Seller</Link></li>
           
          </ul>
        </div>
        <div className="col-md-3 col-sm-4 col-6 col-lg-3 mb-md-0 mb-3 text-lg-center">
          <h6 className="text-uppercase">HelpFul</h6>
          <ul className="list-unstyled ">
            <li className="mb-2"><Link to="#!" className=" link">Flash Sale</Link></li>
            <li className="mb-2"><Link to="#!" className=" link">FAQ</Link></li>
            <li className="mb-2"><Link to="#!" className=" link">Support</Link></li>
            
          </ul>
        </div>
        </div>
        </div>
     

    <div style={{background:'#f0ad4e'}} className=" text-black text-center py-3">
    <span className="ficon" style={{fontSize:'22px'}}> <AiOutlineTwitter/>  <BiLogoFacebookCircle/> <AiFillYoutube/> </span>© {new Date().getFullYear()} Copyright:
      <Link style={{textDecoration:'none'}}  to="/" className="text-black "> AG-Shop </Link>
    </div>
  </footer>




        </>
    )
}

export default Footer;