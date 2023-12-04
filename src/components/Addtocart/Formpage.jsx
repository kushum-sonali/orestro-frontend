// import React from "react";
// import "./Formpage.css";
// import { useEffect } from "react";
// import Table from "react-bootstrap/Navbar";
// import { useNavigate, useParams } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { useState } from "react";
// import {
//   addToCart,
//   removeFromCart,
//   removeone,
//   addone,
// } from "../../store/CartSlice";

// const Formpage = () => {
//     const [data, setData] = useState([]);
//     // const[increment,setIncrement]=useState(0);
//     // const[decrement,setDecrement]=useState(0);
//     const nevigate=useNavigate();
//     console.log(data);
//     const { id } = useParams();
//     console.log(id);
//     const history = useNavigate();
    
//     const dispatch = useDispatch();
//     const cart = useSelector((state) => state.cart);
    
//     console.log(cart);
//     const Compare = () => {
//         const comparedata = cart.filter((ele) => ele.id == id);
    
//         setData(comparedata);
//     };
//     const handleClose=()=>{
//       nevigate("/homepage")
//     }
    
//     // add data
//     const add = (ele) => {
//         dispatch(addToCart(ele));
//     };
//     const incrementQuantity = (id) => {
//         setData(
//         data.map((item) => {
//             if (item.id === id) {
//             return { ...item, quantity: item.quantity + 1 };
//             }
//             return item;
//         })
//         );
//     };
    
//     const decrementQuantity = (id) => {
//         setData(
//         data.map((item) => {
//             if (item.id === id && item.quantity > 1) {
//             return { ...item, quantity: item.quantity - 1 };
//             }
//             return item;
//         })
//         );
//     };
//     // delete data
//     const dlt = (id) => {
//         console.log("clicked");
//         dispatch(removeFromCart(id));
//     };
//     // remove one
//     const remove = (id) => {
//         dispatch(removeone(id));
//     };
//     // add one
//     const addone1 = (id) => {
//         dispatch(addone(id));
//     };
//     useEffect(() => {
//         Compare();
//     }, [cart]);
//     return (
//         <>
//         <div className="">
//             <div className="row">
//             <div className="col-12 col-md-12 col-lg-12">
//                 <div className="table-responsive">
//                 <table className="table table-striped">
//                     <thead>
//                     <tr>
//                         <th scope="col"> </th>
//                         <th scope="col">Product</th>
//                         <th scope="col">Available</th>
//                         <th scope="col" className="text-center">
//                         Quantity
//                         </th>
//                         <th scope="col" className="text-right">
//                         Price
//                         </th>
//                         <th> </th>
//                     </tr>
//                     </thead>
//                     <tbody>
//                     {data.map((
//                         item
//                     ) => (
//                         <tr>
//                         <td>
//                             <img
//                             src={item.image}
//                             style={{ width: "50px", height: "50px" }}
//                             />{" "}
//                         </td>
//                         <td>{item.name}</td>
//                         <td>In stock</td>
//                         <td>
//                             <button
//                             className="btn btn-primary"
//                             onClick={() => decrementQuantity(item.id)}
//                             >
//                             -
//                             </button>
//                             {item.quantity}
//                             <button
//                             className="btn btn-primary"
//                             onClick={() => incrementQuantity(item.id)}
//                             >
//                             +
//                             </button>
//                         </td>
//                         <td className="text-right">{item.price}</td>
//                         <td className="text-right">
//                             <button
//                             className="btn btn-sm btn-danger"
//                             onClick={() => dlt(item.id)}
//                             >
//                             <i className="fa fa-trash"></i>{" "}
//                             </button>{" "}
//                         </td>
//                         </tr>
//                     ))}
//                     <tr>
//                         <td></td>
//                         <td></td>
//                         <td></td>
//                         <td>Sub-Total</td>
//                         <td className="text-right">
//                         {data.reduce((a, c) => a + c.quantity * c.price, 0)}
//                         </td>
//                     </tr>
//                     <tr>
//                         <td></td>
//                         <td></td>
//                         <td></td>
//                         <td>Shipping</td>
//                         <td className="text-right">Free Shipping</td>
//                     </tr>
//                     <tr>
//                         <td></td>
//                         <td></td>
//                         <td></td>
//                         <td>
//                         <strong>Total</strong>
//                         </td>
//                         <td className="text-right">
//                         <strong>
//                             {data.reduce((a, c) => a + c.quantity * c.price, 0)}
//                         </strong>
//                         </td>
//                     </tr>
//                     </tbody>
//                 </table>
//                 </div>
//             </div>
//             <div className="col mb-2">
//                 <div className="row">
//                 <div className="col-sm-12  col-md-6">
//                     <button
//                     className="btn btn-block btn-light"
//                     onClick={() => history("/")}
//                     >
//                     Continue Shopping
//                     </button>
//                 </div>
//                 <div className="col-sm-12 col-md-6 text-right">
//                     <button className="btn btn-lg  btn-success text-uppercase"
//                  onClick={handleClose}
//                     >
//                     Checkout
//                     </button>
//                 </div>
//                 </div>
//             </div>
//             </div>
//         </div>
//         </>
//     );
// }
// export default Formpage;