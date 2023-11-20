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
                        <h4>For Foodies</h4>
                        <ul>
                            <li><Link to="/code">Code of Conduct</Link></li>
                            <li><Link to="/community">Community</Link></li>
                            <li><Link to="/blog">Blog</Link></li>
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
                        <h4>contact us : </h4>
                        <ul>
                        <i class="fa-solid fa-phone"></i>
                            <p>6987412305</p>
                            <i class="fa-regular fa-envelope"></i>
                            <p>omr236@gmail.com</p>
                          
                            
                        </ul>
                    </div>
                </div>
                <div className="footer__row">
                    <h4>Follow Us</h4>
                    <div className="footer__social">
                        <Link to="/"><i className="fab fa-facebook-f"></i></Link>
                        <Link to="/"><i className="fab fa-twitter"></i></Link>
                        <Link to="/"><i className="fab fa-instagram"></i></Link>
                        <Link to="/"><i className="fab fa-linkedin-in"></i></Link>
                </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;