import React from "react";
import brand1 from '../img/brand-1.png';
import brand2 from '../img/brand-4.png';
import brand3 from '../img/brand-3.png';
import brand4 from '../img/brand-4.png';
import brand5 from '../img/brand-5.png';
import brand7 from '../img/brand-7.png';
import brand8 from '../img/brand-8.png';
import brand9 from '../img/brand-9.png';
import brand10 from '../img/brand-1.png';
import '../styles/brands.css';

const Brand = () => {
    return (
        <section className="brand mb-5">
            <div className="container-fluid">
                <h1 className="ms-3 my-5 "> Shop By <span style={{color:'rgb(240,173,78)'}}>  Brand </span></h1>
                <div className=" mx-lg-3 row">
                    {[
                        brand1, brand2, brand3, brand4, brand5, brand7,
                        brand8, brand9, brand1, brand7, brand3, brand4
                    ].map((brand, index) => (
                        <div key={index} className="col-lg-2 col-md-4 col-sm-6 col-6 py-lg-4">
                            <img src={brand} className="img-fluid" alt={`Brand ${index + 1}`} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Brand;
