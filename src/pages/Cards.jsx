import React from "react";
import "./style.css";
import Cardsdata from "../components/Addtocart/Cardsdata";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/CartSlice";
import store from "../store/Store";
import { useSelector } from "react-redux";
function Cards() {
  const [data, setData] = useState(Cardsdata);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  console.log(cart);
  const send = (ele) => {
    dispatch(addToCart(ele));
    
  };
    return(
<>

<h2 className="text-center">Add to cart Your Menu</h2>

<div className="row d-flex justify-content-center align-items-center">{
  data.map((element)=>{

return (
  
<div className="card col-lg-3 m-3" style={{width: "18rem"}}>

  <img src={element.imgdata} className="card-img-top mt-3" style={{height:"16rem"}} alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{element.rname}</h5>
    <p className="card-text">price:₹ {element.price}</p>
    <div className="button_div d-flex justify-content-center"></div>
    <button className="btn btn-primary" onClick={()=>send(element)}>Add to cart</button>
  </div>
</div>


)
  })
  }
</div>
</>
    );
};
export default Cards; 