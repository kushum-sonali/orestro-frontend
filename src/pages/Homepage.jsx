import React from "react";
import Video from "../assets/vedio.mp4";
import "./Homepage.css";
import { Provider } from 'react-redux'
import store from "../store/Store";
import Cards from "./Cards";
function Homepage() {
  return (
    <div className="home">
<div className="">
<video autoPlay loop muted 
style={{
  
    position:"absolute",
    width:"100%",
    left:"50%",
    top:"50%",
    height:"100%",
    objectFit:"cover",
    transform:"translate(-50%,-50%)",
    zIndex:"-1"
}}>
    <source src={Video} type="video/mp4"/>
</video>
</div>


    </div>
  )
}
export default Homepage;