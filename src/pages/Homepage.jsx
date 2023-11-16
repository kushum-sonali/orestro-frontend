import React from "react";
import Video from "../assets/vedio.mp4";
import "./Homepage.css";
import { Provider } from 'react-redux'
import store from "../store/Store";
import Cards from "./Cards";
import About from "./About";
import Contact from "./Contact";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { lazy,Suspense} from 'react'
const cards=lazy(()=>import('./Cards'));
import 'react-toastify/dist/ReactToastify.css';
function Homepage() {
  const navigate = useNavigate();
  return (
    <>
    <div className="home mx-0 m-0 my-0 d-flex justify-content-center align-items-center ">
<div className="d-flex justify-content-center align-items-center">
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
<div className="home2">
<h1 className="text1">Welcome to Restro...</h1>

<p className="p1 home-text2 mx-5"><b>just in 2.5$</b></p>

<div className="order">
<div className="d-flex justify-content-center align-items-center h-100 "><b>Serve Teasty and Dilicious Food</b></div>
<button className="btn btn-outline-light btn-lg home-btn" onClick={
  ()=>{
    navigate("/cards")
  }
}>Order Now</button>
</div>
</div>
</div>
 </div>
<div>
<About>
</About>
<Provider store={store}>
<Cards/>

</Provider>
<Contact/>

</div>

   
    </>
  )
}
export default Homepage;