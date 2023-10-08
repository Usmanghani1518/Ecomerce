import React from "react";
import banner1 from '../img/banner-1.png';
import banner2 from '../img/banner-2.png';
import banner3 from '../img/banner-3.png'
import '../styles/banner.css'
const Banner =()=>{
    return(
        <>
        <section  className="container-fluid mt-5 banner">
<div className=" row ">
    <div className="col-12 col-lg-8">
<img className="img-fluid" style={{width:'100%'}} src={banner1} alt="" />
    </div>
    <div className="col-lg-4 col-12 display">
        <div>  <img  src={banner2} className="img-fluid" alt="" /></div>
        <div  className="img-2">  <img src={banner3} className="img-fluid" alt="" /></div>

       
    </div>
    
</div>

        </section>
        
        </>
    )

}

export default Banner;