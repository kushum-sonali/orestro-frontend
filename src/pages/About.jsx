import React from "react";
import "./About.css";
import Footer from "./Footer";
function About() {
  return (
    <>

      <div className=" about-main">
        <div className="about-title">  About Us...</div>
        <div className="image-1">
          <div className="chef-1">
            <img src="https://images.unsplash.com/photo-1583394293214-28ded15ee548?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hlZnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" />
          </div>


          <div>
            <p className=" about-container">Our mission is to provide an online food ordering system that allows customers to order food from local restaurants and food cooperatives. We want to provide a platform for small businesses to compete with the big players in the online food ordering industry. We want to provide a platform for small businesses to compete with the big players in the online food ordering industry.</p>
          </div>
        </div>




        <div className="image-2">
          <div>
            <p className="about-container">Our mission is to provide an online food ordering system that allows customers to order food from local restaurants and food cooperatives. We want to provide a platform for small businesses to compete with the big players in the online food ordering industry. We want to provide a platform for small businesses to compete with the big players in the online food ordering industry.</p>
          </div>
          <div className="chef-2">
            <img src="https://plus.unsplash.com/premium_photo-1661778091956-15dbe6e47442?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"></img>
          </div>
        </div>



      </div>
      
    </>
  )
}
export default About;