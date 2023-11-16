import React from "react";
import "./Contact.css";
import { Player } from '@lottiefiles/react-lottie-player';
import ContactCover from "../Animation/Contactcover";
function Contact() {
    return(<>
    <div className="contact-main1">
    <div className="contact-heading">Contact us...</div>
    <div className="  col-12 contact-main2">
        <div className="row col-6 animations"><ContactCover/> </div>
        <div className="row col-6 d-flex justify-content-center align-items-center">
         <div className="card demo container">
          <div className="contact-title ">Send me Text :)</div>
            <div className="card-body">
            <div className="mb-2">
                <input type="text" 
                    className="form-control"
                    placeholder="Enter Name"
                    id="name"
                    name="name"
                    required
                 />
            </div>
            <div className="mb-2">
                <input type="email" 
                    className="form-control"
                    placeholder="Enter email"
                    id="email"
                    name="email"
                    required
                 />
            </div>
            <div className="mb-2">
                <textarea type="text"
                    className="form-control"
                    placeholder="Enter message"
                    id="description"
                    name="message"
                    required
                    />
            </div>
            <div className="card-footer">
                <button className="btn btn-primary "
                >Send</button>
                </div>
                </div>
                </div>
                </div>
                </div>
                </div>
                
    </>)
}
export default Contact;