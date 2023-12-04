import React from "react";
import "./CardDetailes.css";
import  { useEffect } from "react"
import Table from 'react-bootstrap/Navbar'
import {useNavigate, useParams} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { useState} from "react";
import {addToCart, removeFromCart,removeone} from "../../store/CartSlice";
const CardDetailes = () =>{
    const[data,setData]=useState([]);
    // const[increment,setIncrement]=useState(0);
    // const[decrement,setDecrement]=useState(0);
    console.log(data);
    const {id} = useParams();
    console.log(id);
const history =useNavigate();

    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    const [price, setPrice] = useState(0);
    console.log(cart);
const Compare = ()=>{
    const comparedata = cart.filter((ele)=>ele.id == id);

    setData(comparedata);
}
// add data 
const send = (ele) => {
    dispatch(addToCart(ele));


    };
// delete data
const dlt = (id) => {
    console.log('clicked')
    dispatch(removeFromCart(id));
  }

  //remove one 
    const remove = (ele) => {
        dispatch(removeone(ele));
    }
     

    useEffect(()=>{
        Compare();
    }
    ,[])
     
    // function incrementItem() {
    //     setIncrement(prevCount => prevCount + 1);
    //   }
    //     function decrementItem() {
    //         setDecrement(prevCount => prevCount - 1);
    //     }
    //     useEffect(()=>{
    //         incrementItem();
    //     },[increment])
    //     useEffect(()=>{
    //         decrementItem();
    //     },[decrement])



    return(
<>
<div className="container mt-2">
    <h2 className="text-center"> Items Details pages</h2>
    
<section className="container mt-3">
<div className="iteamsdetails  ">
    {
        data.map((ele)=>{
            return (
                <>
                <div className="items_img ">
        <img  src={ele.imgdata}></img>
    </div>
    <div className="details">
<Table >
<tr >
    <td>
        <p><strong>Resturant</strong>: {ele.rmame}</p>
        <p><strong>Price</strong>: ₹ {ele.price} </p>

        <p><strong>Dishes</strong>: {ele.address}</p>

        <p><strong>Total</strong>: ₹ {ele.price*ele.qnty}</p>
        <div className="mt-5 d-flex aline-items-center justify-content-between" style={{width:100 , cursor:"pointer",background:"#ddd",color:"#111"}}>
<span style={{fontSize: 24}} 
onClick={()=>remove(ele)
}
> 
    <i className="fas fa-minus"></i>

</span>
<span style={{fontSize: 22}}>{ele.qnty}</span>

<span style={{fontSize: 24}} 
 > 
    <i className="fas fa-plus"></i>
</span>

        </div>
    </td>
    <td>
        <p><strong> Rating : <span style={{background:"green",color:"#fff",padding:"2px 5px",borderRadius:"5px"}}>{ele.rating} ⋆</span></strong></p>
        <p><strong>Order Review :</strong><span>{ele.somedata} </span></p>
        <p><strong>Remove : </strong><span><i className="fas fa-trash" onClick={()=>dlt(ele.id)} style={{color  
        : "red" ,fontSize:20 ,cursor:"pointer"}}></i></span></p>
    </td>
</tr>
</Table>
    </div>
                </>
            )
        })
    }
</div>
</section>
</div>
</>
    );
};
export default CardDetailes;