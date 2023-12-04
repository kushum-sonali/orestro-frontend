import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
function Footer() {
    return (
        <div className="footer">
            <div className="footer__container ">
                <div className="footer__row">
                    <div className="footer__col">
                        <h4>Company</h4>
                        <ul>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/contact">Contact Us</Link></li>
                            <li><Link to="/career">Career</Link></li>
                            <li><Link to="/blog">Blog</Link></li>
                        </ul>
                    </div>
                    <div className="footer__col">
                        <h4>For Restaurants</h4>
                        <ul>
                            <li><Link to="/blog">Add Restaurant</Link></li>
                            <li><Link to="/blog">Business App</Link></li>
                            <li><Link to="/blog">Restaurant Widgets</Link></li>
                            <li><Link to="/blog">Products for Businesses</Link></li>
                        </ul>
                    </div>
                    <div className="footer__col">
                        <h4 >Contact us :</h4>
                        <i class="fa-solid fa-phone"></i>
                        <p>6987412305</p>
                        <i class="fa-regular fa-envelope"></i>
                        <p>omr236@gmail.com</p>

                    </div>
                    <div className="footer__col">
                        <h4>Follow us :</h4>
                        <div className="footer__social">
                            <Link to="/"><i className="fab fa-facebook-f"></i></Link>
                            <Link to="/"><i className="fab fa-twitter"></i></Link>
                            <Link to="/"><i className="fab fa-instagram"></i></Link>
                            <Link to="/"><i className="fab fa-linkedin-in"></i></Link>
                        </div>
                    </div>
                </div>
                <div className="map">
                    <div className="footer__row"> 
                     <div className="map-location">
                        <div className="footer__col ">
                          
                            <div className="map-section">
                                <div className="gmap-frame">
                                    <iframe width="200%" height="300" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Patna%20,Bihar,India+(Om%20Restro)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/population/">Calculate population in area</a></iframe>
                                    </div>
                            </div></div>
                        </div>
                        <div className="abc ">
                            <div className="map-address">
                            <h4 >Address : </h4>
                            <p>Bikramganj, Bihar</p>
                            <p>pin code: 81128</p>
                            <p> Near by: Railway station </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;