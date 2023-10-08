import React from "react";
import '../styles/contact.css'
const Contact =()=>{
    return(
        <>
        <div class="containerr my-4">
        <h2 className="ch2">Contact Us</h2>
        <form class="contact-form">
            <div class="form-group">
                <label className="clabel" for="name">Name</label>
                <input className="cinput" type="text" id="name" name="name" required/>
            </div>
            <div class="form-group">
                <label className="clabel" for="email">Email</label>
                <input className="cinput" type="email" id="email" name="email" required/>
            </div>
            <div class="form-group">
                <label className="clabel" for="message">Message</label>
                <textarea id="message" name="message" rows="4" required></textarea>
            </div>
            <button className="cbutton" type="submit">Submit</button>
        </form>
    </div>
        
        </>
    )
}
export default Contact;